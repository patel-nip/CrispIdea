"use client";

import { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, Check, AlertCircle } from 'lucide-react';

export default function ResearchTargetsDashboard() {
  const [data, setData] = useState([]);
  const [activeTicker, setActiveTicker] = useState("ABT");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch unified targets achieved CSV
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/assets/research-targets-achieved.csv')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load target achieved data: ${res.statusText}`);
        }
        return res.text();
      })
      .then((csvText) => {
        const trimmed = csvText.trim();
        if (trimmed.startsWith('<!') || trimmed.toLowerCase().startsWith('<html')) {
          throw new Error('Received HTML page instead of CSV file. Verify placement.');
        }

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (results) => {
            const cleaned = (results.data || []).map((row) => ({
              Ticker: row.Ticker ? String(row.Ticker).trim() : '',
              CompanyName: row.CompanyName ? String(row.CompanyName).trim() : '',
              Industry: row.Industry ? String(row.Industry).trim() : '',
              CallDate: row.CallDate ? String(row.CallDate).trim() : '',
              PriceAtCall: Number(row.PriceAtCall),
              TargetPrice: Number(row.TargetPrice),
              Upside: row.Upside ? String(row.Upside).trim() : '',
              M1: Number(row.M1),
              M2: Number(row.M2),
              M3: Number(row.M3),
              M4: Number(row.M4),
              M5: Number(row.M5),
              M6: Number(row.M6),
              M7: Number(row.M7),
              M8: Number(row.M8),
              M9: Number(row.M9),
              M10: Number(row.M10),
              M11: Number(row.M11),
              M12: Number(row.M12),
            })).filter(row => row.Ticker);

            setData(cleaned);
            setLoading(false);
          },
          error: (err) => {
            throw new Error(`Failed to parse CSV: ${err.message}`);
          }
        });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const activeStock = useMemo(() => {
    return data.find(s => s.Ticker === activeTicker) || null;
  }, [data, activeTicker]);

  const chartData = useMemo(() => {
    if (!activeStock) return [];
    return [
      { name: 'M1', Price: activeStock.M1, Target: activeStock.TargetPrice },
      { name: 'M2', Price: activeStock.M2, Target: activeStock.TargetPrice },
      { name: 'M3', Price: activeStock.M3, Target: activeStock.TargetPrice },
      { name: 'M4', Price: activeStock.M4, Target: activeStock.TargetPrice },
      { name: 'M5', Price: activeStock.M5, Target: activeStock.TargetPrice },
      { name: 'M6', Price: activeStock.M6, Target: activeStock.TargetPrice },
      { name: 'M7', Price: activeStock.M7, Target: activeStock.TargetPrice },
      { name: 'M8', Price: activeStock.M8, Target: activeStock.TargetPrice },
      { name: 'M9', Price: activeStock.M9, Target: activeStock.TargetPrice },
      { name: 'M10', Price: activeStock.M10, Target: activeStock.TargetPrice },
      { name: 'M11', Price: activeStock.M11, Target: activeStock.TargetPrice },
      { name: 'M12', Price: activeStock.M12, Target: activeStock.TargetPrice },
    ];
  }, [activeStock]);

  const getTileStyles = (ticker, upsideVal) => {
    const isSelected = activeTicker === ticker;
    if (isSelected) {
      return 'bg-[#0B132B] text-white border-2 border-blue-500';
    }

    // Convert string percentage like "+72.6%" or "+25%" to float
    const cleanVal = parseFloat(upsideVal.replace(/[+%]/g, '')) || 0;

    if (cleanVal >= 70) {
      return 'bg-[#001a00] text-[#F8FAFC] border-transparent hover:bg-[#0E3522]';
    } else if (cleanVal >= 50) {
      return 'bg-[#001a00] text-[#F8FAFC] border-transparent hover:bg-[#1C3E2A]';
    } else if (cleanVal >= 20) {
      return 'bg-[#001a00] text-white border-transparent hover:bg-[#6D8073]';
    } else if (cleanVal >= 10) {
      return 'bg-[#F2F6E6] text-[#031333] border-transparent hover:bg-[#CCD3CA]';
    } else {
      return 'bg-[#F8FAFC] text-[#031333] border-[#a8c940]/10 hover:bg-[#ECEAE4]';
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const priceVal = payload[0].value;
      const targetVal = payload[0].payload.Target;
      return (
        <div className="bg-[#F8FAFC] border border-[#a8c940]/20 rounded-lg p-3 text-xs text-[#031333] font-sans">
          <p className="font-bold border-b border-[#a8c940]/10 pb-1 mb-1.5">{payload[0].payload.name}</p>
          <div className="space-y-1 font-mono">
            <div className="flex justify-between gap-6">
              <span className="text-[#031333]/70 font-sans">Price:</span>
              <span className="font-bold text-[#0077bd]">${priceVal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-[#031333]/70 font-sans">Target Price:</span>
              <span className="font-semibold text-[#031333]">${targetVal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch graph-container">
      {/* Left Grid: 17 tiles */}
      <div className="lg:col-span-5 flex flex-col bg-[#F8FAFC] border border-[#a8c940]/10 rounded-2xl p-5 graph-container">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#a8c940] tracking-wider block mb-1">
              RECORDED PERFORMANCE
            </span>
            <h3 className="text-xl font-serif font-bold text-[#031333]">
              Coverage Heat Map
            </h3>
          </div>
          <div className="flex gap-2 text-[9px] font-semibold text-[#031333]/70 bg-[#F8FAFC] p-1 border border-[#a8c940]/10 rounded">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#001a00] rounded-sm"></span>&gt;70%</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#001a00] rounded-sm"></span>&gt;50%</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#001a00] rounded-sm"></span>&gt;20%</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#F2F6E6] rounded-sm"></span>&gt;10%</span>
          </div>
        </div>

        {loading ? (
          <div className="flex-1 min-h-[350px] flex flex-col items-center justify-center bg-[#F8FAFC]/40 rounded-xl border border-dashed border-[#a8c940]/10">
            <div className="w-8 h-8 border-2 border-[#a8c940] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs text-[#031333]/60 mt-3 font-medium">Syncing database...</p>
          </div>
        ) : error ? (
          <div className="p-5 flex flex-col items-center justify-center bg-red-50/50 rounded-xl border border-dashed border-red-200">
            <AlertCircle className="w-7 h-7 text-red-700 mb-2" />
            <p className="text-xs font-semibold text-red-950">Error Loading Target Records</p>
            <p className="text-[10px] text-red-700/80 mt-0.5 text-center">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2">
            {data.map((stock) => (
              <button
                key={stock.Ticker}
                onClick={() => setActiveTicker(stock.Ticker)}
                className={`p-3 rounded-xl flex flex-col justify-between h-20 text-left transition-all duration-200 border border-[#a8c940]/10 cursor-pointer graph-container ${getTileStyles(stock.Ticker, stock.Upside)}`}
              >
                <div className="flex justify-between items-start w-full">
                  <span className="font-bold text-xs tracking-wider">{stock.Ticker}</span>
                </div>
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] font-bold font-mono leading-tight">{stock.Upside}</span>
                  <span className="text-[8px] opacity-75 uppercase tracking-tight font-sans mt-0.5">{stock.CallDate}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Graph: line chart */}
      <div className="lg:col-span-7 flex flex-col bg-[#F8FAFC] border border-[#a8c940]/10 rounded-2xl p-6 graph-container">
        {activeStock ? (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#a8c940]/10 mb-5">
              <div>
                <span className="text-[9px] uppercase font-bold text-[#a8c940] tracking-wider bg-[#F2F6E6] px-2 py-0.5 rounded">
                  {activeStock.Industry}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#031333] mt-1.5 flex items-center gap-2">
                  {activeStock.CompanyName} <span className="text-[#031333]/50 font-sans font-normal text-sm">({activeStock.Ticker})</span>
                </h3>
              </div>
              
              <div className="flex gap-4 font-mono">
                <div className="text-right">
                  <span className="text-[9px] text-[#031333]/50 block font-sans">CALL PRICE</span>
                  <span className="text-xs font-bold text-[#031333]">${activeStock.PriceAtCall.toFixed(2)}</span>
                </div>
                <div className="text-right border-l border-[#a8c940]/10 pl-4">
                  <span className="text-[9px] text-[#031333]/50 block font-sans">TARGET PRICE</span>
                  <span className="text-xs font-bold text-[#031333]">${activeStock.TargetPrice.toFixed(2)}</span>
                </div>
                <div className="text-right border-l border-[#a8c940]/10 pl-4">
                  <span className="text-[9px] text-[#031333]/50 block font-sans">UPSIDE ACHIEVED</span>
                  <span className="text-xs font-bold text-[#a8c940] flex items-center justify-end gap-0.5">
                    {activeStock.Upside}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="flex items-center pl-2">
                  <span className="bg-[#a8c940]/15 text-[#a8c940] text-[9px] font-bold py-1 px-2.5 rounded-full flex items-center gap-1 border border-[#a8c940]/20 font-sans">
                    <Check className="w-3 h-3" /> TARGET ACHIEVED
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full relative min-h-[300px] flex-1 bg-[#F8FAFC]/50 border border-[#a8c940]/5 rounded-xl p-3">
              {chartData.length > 0 ? (
                <div className="w-full h-full">
                  <ResponsiveContainer width="100%" height={320}>
                    <LineChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E4E0" />
                      
                      <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#8C9A90', fontSize: 9 }}
                        dy={8}
                      />
                      
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#8C9A90', fontSize: 9 }}
                        dx={-5}
                        domain={['auto', 'auto']}
                        tickFormatter={(val) => `$${val}`}
                      />
                      
                      <Tooltip isAnimationActive={false}
                        content={<CustomTooltip />}
                        cursor={{ strokeDasharray: '4 4', stroke: '#031333', strokeOpacity: 0.3 }}
                      />

                      {/* Dashed Target reference line */}
                      <Line isAnimationActive={false}
                        type="monotone"
                        dataKey="Target"
                        stroke="#031333"
                        strokeWidth={1.5}
                        strokeDasharray="5 5"
                        dot={false}
                      />
                      
                      {/* Price curve */}
                      <Line isAnimationActive={false}
                        type="monotone"
                        dataKey="Price"
                        stroke="#0077bd"
                        strokeWidth={2}
                        dot={{ r: 3, fill: '#0077bd', strokeWidth: 0 }}
                        activeDot={{ r: 5, stroke: '#F8FAFC', strokeWidth: 1.5, fill: '#0077bd' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : null}
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#a8c940]/5 text-[9px] font-semibold text-[#031333]/60">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#0077bd] block"></span>
                  <span>Price Journey (M1 to M12)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#031333] border-t border-dashed block"></span>
                  <span>Target Price Boundary</span>
                </div>
              </div>
              <span className="text-[8px] text-[#031333]/40 bg-white border border-[#a8c940]/5 px-2 py-0.5 rounded uppercase font-sans">
                Illustrative price journey from call date to target achievement
              </span>
            </div>
          </>
        ) : (
          <div className="h-[350px] flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl border border-[#a8c940]/10 border-dashed">
            <p className="text-sm font-semibold text-[#031333]/50">No company selected</p>
          </div>
        )}
      </div>
    </div>
  );
}
