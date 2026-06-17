"use client";

/**
 * TimelinePortfolioChart.jsx
 * 
 * Mock CSV Template Layout:
 * -----------------------------------------
 * Date,Performance,Benchmark
 * 2026-05-10,12.50,9.10
 * 2026-05-11,12.85,9.15
 * 2026-05-12,12.70,9.20
 * 2026-05-13,13.10,9.30
 * 2026-05-14,13.45,9.25
 * -----------------------------------------
 * Save the above as /assets/portfolio-data.csv
 */

import { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, Calendar, Info } from 'lucide-react';

export default function TimelinePortfolioChart() {
  const [data, setData] = useState([]);
  const [timeline, setTimeline] = useState('1Y'); // Default to 1Y as shown in screenshots
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const baseUrl = typeof window !== 'undefined' ? (window.aureliusDashboardSettings?.assetsBaseUrl || '') : '';
    fetch(`${baseUrl}/assets/portfolio-data.csv`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to retrieve portfolio data: ${res.statusText}`);
        }
        return res.text();
      })
      .then((csvText) => {
        // Detect HTML responses (e.g., Soft 404 page redirects)
        const trimmed = csvText.trim();
        if (trimmed.startsWith('<!') || trimmed.toLowerCase().startsWith('<html') || trimmed.toLowerCase().startsWith('<div')) {
          throw new Error('Received HTML page instead of CSV file. This usually means the file was not found and the server redirected to a 404 page. Please verify your assets folder placement.');
        }

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (results) => {
            if (results.errors.length > 0) {
              console.warn('PapaParse Warning:', results.errors);
            }
            // Normalize row keys to lowercase and trim spaces to prevent casing conflicts
            const normalizedData = (results.data || [])
              .map(row => {
                if (!row || typeof row !== 'object') return null;
                const normalized = {};
                for (const key of Object.keys(row)) {
                  normalized[key.trim().toLowerCase()] = row[key];
                }
                return normalized;
              })
              .filter(row => row && row.date && row.performance !== undefined);

            const cleanedData = normalizedData.map(row => ({
              Date: String(row.date).trim(),
              Performance: Number(row.performance),
              Benchmark: row.benchmark !== undefined && row.benchmark !== null ? Number(row.benchmark) : null,
            }));
            setData(cleanedData);
            setLoading(false);
          },
          error: (err) => {
            throw new Error(`CSV Parsing failed: ${err.message}`);
          }
        });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter data based on selected timeline
  const filteredData = useMemo(() => {
    if (!data.length) return [];
    
    let sliceLength = 365; // Default 1Y
    switch (timeline) {
      case '1M':
        sliceLength = 30;
        break;
      case '3M':
        sliceLength = 90;
        break;
      case '6M':
        sliceLength = 180;
        break;
      case '1Y':
        sliceLength = 365;
        break;
      case '2Y':
        sliceLength = data.length; // Complete timeline payload
        break;
      default:
        sliceLength = 365;
    }
    
    // Slice the last N entries of the historical walk
    return data.slice(-sliceLength);
  }, [data, timeline]);

  // Calculate quick metrics for the active range
  const rangeMetrics = useMemo(() => {
    if (!filteredData.length) return { returnRate: 0, startVal: 0, endVal: 0, outperformance: 0 };
    const startVal = filteredData[0].Performance;
    const endVal = filteredData[filteredData.length - 1].Performance;
    
    const startBenchVal = filteredData[0].Benchmark || 0;
    const endBenchVal = filteredData[filteredData.length - 1].Benchmark || 0;
    
    const returnRate = endVal - startVal;
    const benchReturnRate = endBenchVal - startBenchVal;
    
    return {
      returnRate,
      endVal,
      outperformance: returnRate - benchReturnRate
    };
  }, [filteredData]);

  // Custom tooltips rendering coordinates exactly upon hover
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const currentPoint = payload[0].payload;
      return (
        <div className="bg-[#FAF8F5] border border-[#4A6B52]/20 shadow-xl rounded-lg p-3 text-xs text-[#1F2922] font-sans backdrop-blur-md bg-opacity-95 select-none pointer-events-none">
          <p className="font-semibold text-[#4A6B52] border-b border-[#4A6B52]/10 pb-1 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {currentPoint.Date}
          </p>
          <div className="space-y-1 font-mono">
            <div className="flex justify-between gap-8">
              <span className="text-[#1F2922]/70 font-sans">CrispIdea:</span>
              <span className="font-bold text-[#4A6B52]">{(currentPoint.Performance >= 0 ? '+' : '')}{currentPoint.Performance.toFixed(2)}%</span>
            </div>
            {currentPoint.Benchmark !== null && (
              <div className="flex justify-between gap-8">
                <span className="text-[#1F2922]/70 font-sans">BSE 500:</span>
                <span className="font-medium text-[#1F2922]/80">{(currentPoint.Benchmark >= 0 ? '+' : '')}{currentPoint.Benchmark.toFixed(2)}%</span>
              </div>
            )}
            {currentPoint.Benchmark !== null && (
              <div className="flex justify-between gap-8 border-t border-[#4A6B52]/10 pt-1 mt-1">
                <span className="text-[#1F2922]/70 font-sans">Alpha:</span>
                <span className={`font-semibold ${(currentPoint.Performance - currentPoint.Benchmark) >= 0 ? 'text-[#4A6B52]' : 'text-red-700'}`}>
                  {(currentPoint.Performance - currentPoint.Benchmark) >= 0 ? '+' : ''}
                  {(currentPoint.Performance - currentPoint.Benchmark).toFixed(2)}%
                </span>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-1">
            CRISPIDEA WEALTH MANAGEMENT
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#1F2922]">
            Disciplined outperformance
          </h3>
          <p className="text-sm text-[#1F2922]/60 mt-1 max-w-2xl">
            CrispIdea Model Portfolio vs. HDFC BSE 500 ETF — cumulative price return (%), 31-May-2024 to 31-May-2026.
          </p>
        </div>

        {/* Stats Row */}
        {!loading && !error && (
          <div className="flex flex-wrap items-center gap-6 md:gap-8 bg-[#FAF8F5]/50 px-4 py-2 rounded-xl border border-[#4A6B52]/5">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#1F2922]/50 block">CRISPIDEA</span>
              <span className="text-lg font-bold font-mono text-[#1F2922]">+27.55%</span>
            </div>
            <div className="border-l border-[#4A6B52]/15 pl-6 md:pl-8">
              <span className="text-[10px] uppercase font-bold text-[#1F2922]/50 block">BSE 500</span>
              <span className="text-lg font-bold font-mono text-[#1F2922]/70">-1.87%</span>
            </div>
            <div className="border-l border-[#4A6B52]/15 pl-6 md:pl-8">
              <span className="text-[10px] uppercase font-bold text-[#1F2922]/50 block">ALPHA</span>
              <span className="text-lg font-bold font-mono text-[#4A6B52]">+29.42%</span>
            </div>
          </div>
        )}
      </div>

      {/* Control row with Timeline selector & Legends */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6 border-b border-[#4A6B52]/5 pb-4">
        {/* Timeline capsule */}
        <div className="inline-flex bg-[#FAF8F5] border border-[#4A6B52]/10 p-0.5 rounded-full shadow-inner">
          {['1M', '3M', '6M', '1Y', '2Y'].map((t) => (
            <button
              key={t}
              onClick={() => setTimeline(t)}
              className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                timeline === t
                  ? 'bg-[#1F2922] text-[#FAF8F5] shadow-sm'
                  : 'text-[#1F2922]/50 hover:text-[#1F2922]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Recharts Legend representation */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#4A6B52] border border-[#FAF8F5]"></span>
            <span className="text-[#1F2922]/80">CrispIdea</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-1 border-t-2 border-dashed border-[#8C9A90] inline-block"></span>
            <span className="text-[#1F2922]/60">BSE 500</span>
          </div>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full relative h-[380px]">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF8F5]/50 rounded-xl border border-dashed border-[#4A6B52]/10">
            <div className="w-8 h-8 border-2 border-[#4A6B52] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs text-[#1F2922]/60 mt-3 font-medium">Resolving historical data stream...</p>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-red-50/50 rounded-xl border border-dashed border-red-200">
            <AlertCircle className="w-8 h-8 text-red-700 mb-2" />
            <p className="text-sm font-semibold text-red-950">Data Stream Interrupted</p>
            <p className="text-xs text-red-700/80 mt-1 text-center max-w-sm">{error}</p>
          </div>
        ) : (
          <div className="w-full h-full select-none" style={{ pointerEvents: 'auto' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={filteredData}
                margin={{ top: 10, right: 5, left: -10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4A6B52" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#4A6B52" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E4E0" />
                
                <XAxis
                  dataKey="Date"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#8C9A90', fontSize: 10 }}
                  dy={10}
                  interval={Math.ceil(filteredData.length / 8)}
                />
                
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#8C9A90', fontSize: 10 }}
                  dx={-5}
                  domain={['auto', 'auto']}
                  tickFormatter={(val) => `${val}%`}
                />
                
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ strokeDasharray: '4 4', stroke: '#4A6B52', strokeWidth: 1 }}
                />
                
                {/* Comparative Benchmark Curve */}
                <Area
                  name="Benchmark"
                  type="monotone"
                  dataKey="Benchmark"
                  stroke="#8C9A90"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  fill="none"
                  dot={false}
                  activeDot={{ r: 3, stroke: '#FAF8F5', strokeWidth: 1, fill: '#8C9A90' }}
                />

                {/* Primary Performance Curve */}
                <Area
                  name="Performance"
                  type="monotone"
                  dataKey="Performance"
                  stroke="#4A6B52"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPerf)"
                  dot={false}
                  activeDot={{ r: 4.5, stroke: '#FAF8F5', strokeWidth: 1.5, fill: '#4A6B52' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
