"use client";

/**
 * CoverageHeatmapDashboard.jsx
 * 
 * Mock CSV Template Layouts:
 * -----------------------------------------
 * 1. Master index file: /assets/coverage-dashboard/heatmap-summary.csv
 * Ticker,CompanyName,Industry,CMP,Target,Upside,UpsideValue
 * AAPL,Apple Inc.,Technology,175.50,210.00,+19.66%,19.66
 * NVDA,NVIDIA Corp.,Technology,950.00,1100.00,+15.79%,15.79
 * TSLA,Tesla Inc.,Automotive,175.00,220.00,+25.71%,25.71
 * PFE,Pfizer Inc.,Healthcare,28.00,26.00,-7.14%,-7.14
 * 
 * 2. Individual history file: /assets/coverage-dashboard/charts/AAPL.csv
 * Date,AdjClose,Target
 * 2025-06-10,165.20,180.00
 * 2025-06-11,165.80,180.00
 * 2025-06-12,166.40,180.00
 * -----------------------------------------
 */

import { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, ArrowUpRight, HelpCircle, Layers } from 'lucide-react';

export default function CoverageHeatmapDashboard() {
  const [heatmapData, setHeatmapData] = useState([]);
  const [activeTicker, setActiveTicker] = useState(null);
  const [tickerHistory, setTickerHistory] = useState([]);
  
  // Status states
  const [summaryLoading, setSummaryLoading] = useState(true);
  const [summaryError, setSummaryError] = useState(null);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState(null);

  // Fetch heatmap summary (Master Index)
  useEffect(() => {
    setSummaryLoading(true);
    setSummaryError(null);
    const baseUrl = typeof window !== 'undefined' ? (window.aureliusDashboardSettings?.assetsBaseUrl || '') : '';
    fetch(`${baseUrl}/assets/coverage-dashboard/heatmap-summary.csv`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load heatmap summary matrix: ${res.statusText}`);
        }
        return res.text();
      })
      .then((csvText) => {
        // Detect HTML responses (Soft 404 redirects)
        const trimmed = csvText.trim();
        if (trimmed.startsWith('<!') || trimmed.toLowerCase().startsWith('<html') || trimmed.toLowerCase().startsWith('<div')) {
          throw new Error('Received HTML page instead of CSV file. This usually means the file was not found and the server redirected to a 404 page. Please verify your assets folder placement.');
        }

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (results) => {
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
              .filter(row => row && row.ticker && row.upsidevalue !== undefined);

            const cleaned = normalizedData.map(row => ({
              Ticker: String(row.ticker).trim(),
              CompanyName: row.companyname ? String(row.companyname).trim() : '',
              Industry: row.industry ? String(row.industry).trim() : '',
              CMP: Number(row.cmp),
              Target: Number(row.target),
              Upside: row.upside ? String(row.upside).trim() : '',
              UpsideValue: Number(row.upsidevalue),
            }));
            setHeatmapData(cleaned);
            setSummaryLoading(false);
            
            // Set first ticker active by default
            if (cleaned.length > 0) {
              setActiveTicker(cleaned[0].Ticker);
            }
          },
          error: (err) => {
            throw new Error(`Failed to parse summary index CSV: ${err.message}`);
          }
        });
      })
      .catch((err) => {
        console.error(err);
        setSummaryError(err.message);
        setSummaryLoading(false);
      });
  }, []);

  // Sync historical chart on activeTicker change
  useEffect(() => {
    if (!activeTicker) return;

    setHistoryLoading(true);
    setHistoryError(null);
    
    const baseUrl = typeof window !== 'undefined' ? (window.aureliusDashboardSettings?.assetsBaseUrl || '') : '';
    fetch(`${baseUrl}/assets/coverage-dashboard/charts/${activeTicker}.csv`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to retrieve history for ticker ${activeTicker}: ${res.statusText}`);
        }
        return res.text();
      })
      .then((csvText) => {
        // Detect HTML responses (Soft 404 redirects)
        const trimmed = csvText.trim();
        if (trimmed.startsWith('<!') || trimmed.toLowerCase().startsWith('<html') || trimmed.toLowerCase().startsWith('<div')) {
          throw new Error('Received HTML page instead of CSV file. This usually means the file was not found and the server redirected to a 404 page. Please verify your assets folder placement.');
        }

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (results) => {
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
              .filter(row => row && row.date && row.adjclose !== undefined);

            const cleaned = normalizedData.map(row => ({
              Date: String(row.date).trim(),
              AdjClose: Number(row.adjclose),
              Target: row.target !== undefined && row.target !== null ? Number(row.target) : null,
            }));
            setTickerHistory(cleaned);
            setHistoryLoading(false);
          },
          error: (err) => {
            throw new Error(`Failed to parse historical CSV: ${err.message}`);
          }
        });
      })
      .catch((err) => {
        console.error(err);
        setHistoryError(err.message);
        setHistoryLoading(false);
      });
  }, [activeTicker]);

  // Find active stock metadata details
  const activeStock = useMemo(() => {
    return heatmapData.find(s => s.Ticker === activeTicker) || null;
  }, [heatmapData, activeTicker]);

  // Conditional Class Mapping based on UpsideValue
  const getCardStyles = (upsideVal, ticker) => {
    const isSelected = activeTicker === ticker;
    let colorClasses = '';

    if (upsideVal >= 15.0) {
      // Solid ultra-dark forest green with white text
      colorClasses = 'bg-[#031333] text-[#F8FAFC] hover:bg-[#2A392F]';
    } else if (upsideVal >= 10.0) {
      // Light cream-green shade with charcoal text
      colorClasses = 'bg-[#F2F6E6] text-[#031333] hover:bg-[#D4DDD1]';
    } else if (upsideVal < 0.0) {
      // Negative values get muted gray
      colorClasses = 'bg-gray-200 text-charcoal/60 hover:bg-gray-300';
    } else {
      // Standard values get neutral cream-card background
      colorClasses = 'bg-[#F8FAFC] text-[#031333] hover:bg-[#ECEAE4]';
    }

    return `p-4 rounded-xl cursor-pointer flex flex-col justify-between h-24 transition-all duration-200 border graph-container ${
      isSelected 
        ? 'border-[#a8c940] ring-2 ring-[#a8c940]/40' 
        : 'border-[#a8c940]/10'
    } ${colorClasses}`;
  };

  // Custom tooltips rendering prices exactly upon hover
  const CustomHistoryTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const currentPoint = payload[0].payload;
      return (
        <div className="bg-[#F8FAFC] border border-[#a8c940]/20 rounded-lg p-3 text-xs text-[#031333] font-sans backdrop-blur-md bg-opacity-95 select-none pointer-events-none">
          <p className="font-semibold text-[#031333] border-b border-[#a8c940]/10 pb-1 mb-1.5 font-sans">
            {currentPoint.Date}
          </p>
          <div className="space-y-1 font-mono">
            <div className="flex justify-between gap-6">
              <span className="text-[#031333]/70 font-sans">Adj Close:</span>
              <span className="font-bold text-[#0077bd]">${currentPoint.AdjClose.toFixed(2)}</span>
            </div>
            {currentPoint.Target !== null && (
              <div className="flex justify-between gap-6">
                <span className="text-[#031333]/70 font-sans">Target Price:</span>
                <span className="font-semibold text-[#031333]">${currentPoint.Target.toFixed(2)}</span>
              </div>
            )}
            {currentPoint.Target !== null && (
              <div className="flex justify-between gap-6 border-t border-[#a8c940]/10 pt-1 mt-1">
                <span className="text-[#031333]/70 font-sans">Gap:</span>
                <span className="font-semibold text-[#a8c940]">
                  {(((currentPoint.Target - currentPoint.AdjClose) / currentPoint.AdjClose) * 100).toFixed(2)}%
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
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch graph-container">
      {/* LEFT PANEL: Interactive Heatmap Card Grid (5-columns) */}
      <div className="lg:col-span-5 flex flex-col bg-[#F8FAFC] border border-[#a8c940]/10 rounded-2xl p-5 graph-container">
        <div className="mb-4">
          <span className="text-[10px] uppercase font-bold text-[#a8c940] uppercase tracking-wider block mb-1">
            UPSIDE TO TARGET PRICE
          </span>
          <h3 className="text-xl font-serif font-bold text-[#031333]">
            Coverage heatmap
          </h3>
        </div>

        {summaryLoading ? (
          <div className="flex-1 min-h-[300px] flex flex-col items-center justify-center bg-[#F8FAFC]/40 rounded-xl border border-dashed border-[#a8c940]/10">
            <div className="w-8 h-8 border-2 border-[#a8c940] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs text-[#031333]/60 mt-3 font-medium">Loading coverage index...</p>
          </div>
        ) : summaryError ? (
          <div className="p-5 flex flex-col items-center justify-center bg-red-50/50 rounded-xl border border-dashed border-red-200">
            <AlertCircle className="w-7 h-7 text-red-700 mb-2" />
            <p className="text-xs font-semibold text-red-950">Summary Index Load Error</p>
            <p className="text-[10px] text-red-700/80 mt-0.5 text-center">{summaryError}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {heatmapData.map((stock) => (
              <div
                key={stock.Ticker}
                onClick={() => setActiveTicker(stock.Ticker)}
                className={getCardStyles(stock.UpsideValue, stock.Ticker)}
              >
                <div className="flex justify-between items-start w-full">
                  <span className="font-bold text-sm tracking-wide">{stock.Ticker}</span>
                  <span className="text-[10px] opacity-75 font-mono truncate max-w-[50%]">
                    {stock.CMP.toFixed(0)}
                  </span>
                </div>
                <div className="flex justify-between items-end w-full">
                  <span className="text-[9px] opacity-60 font-medium truncate max-w-[65%] leading-tight text-left">
                    {stock.CompanyName}
                  </span>
                  <span className="text-xs font-bold font-mono shrink-0">
                    {stock.Upside}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Heatmap Legend */}
        <div className="mt-6 pt-3 border-t border-[#a8c940]/10 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-[#031333]/70 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-[#031333] border border-[#a8c940]/10"></span>
            <span>&gt;= 15%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-[#F2F6E6] border border-[#a8c940]/10"></span>
            <span>&gt;= 10%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-[#F8FAFC] border border-[#a8c940]/10"></span>
            <span>0% to 10%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-gray-200 border border-[#a8c940]/10"></span>
            <span>&lt; 0%</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Historical Context Line & Step Metrics Container (7-columns) */}
      <div className="lg:col-span-7 flex flex-col bg-[#F8FAFC] border border-[#a8c940]/10 rounded-2xl p-6 graph-container">
        
        {activeStock ? (
          <>
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#a8c940]/10 mb-5">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#a8c940] tracking-wider bg-[#F2F6E6] px-2 py-0.5 rounded">
                  {activeStock.Industry}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#031333] mt-1.5">
                  {activeStock.CompanyName} <span className="text-[#031333]/50 font-sans font-normal">({activeStock.Ticker})</span>
                </h3>
              </div>
              
              <div className="flex gap-4 font-mono">
                <div className="text-right">
                  <span className="text-[10px] text-[#031333]/50 block font-sans">CMP</span>
                  <span className="text-sm font-bold text-[#031333]">${activeStock.CMP.toFixed(2)}</span>
                </div>
                <div className="text-right border-l border-[#a8c940]/10 pl-4">
                  <span className="text-[10px] text-[#031333]/50 block font-sans">TARGET</span>
                  <span className="text-sm font-bold text-[#031333]">${activeStock.Target.toFixed(2)}</span>
                </div>
                <div className="text-right border-l border-[#a8c940]/10 pl-4">
                  <span className="text-[10px] text-[#031333]/50 block font-sans">UPSIDE</span>
                  <span className={`text-sm font-bold flex items-center justify-end gap-0.5 ${
                    activeStock.UpsideValue >= 0 ? 'text-[#a8c940]' : 'text-red-700'
                  }`}>
                    {activeStock.Upside}
                    {activeStock.UpsideValue >= 0 && <ArrowUpRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              </div>
            </div>

            {/* Historical chart */}
            <div className="w-full relative min-h-[300px] flex-1 bg-[#F8FAFC]/50 border border-[#a8c940]/5 rounded-xl p-3">
              {tickerHistory.length > 0 ? (
                <div className="w-full h-full select-none" style={{ pointerEvents: 'auto' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={tickerHistory}
                      margin={{ top: 10, right: 5, left: -25, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E4E0" />
                      
                      <XAxis
                        dataKey="Date"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#8C9A90', fontSize: 9 }}
                        dy={8}
                        interval={Math.ceil(tickerHistory.length / 5)}
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
                        content={<CustomHistoryTooltip />}
                        cursor={{ strokeDasharray: '4 4', stroke: '#031333', strokeOpacity: 0.3 }}
                      />
                      
                      {/* Step Target Curve: Staircase timeline in rich solid black */}
                      <Line isAnimationActive={false}
                        name="Target Price"
                        type="stepAfter"
                        dataKey="Target"
                        stroke="#031333"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, stroke: '#F8FAFC', strokeWidth: 1.5, fill: '#031333' }}
                      />

                      {/* AdjClose Curve: Smooth continuous spline in rich blue */}
                      <Line isAnimationActive={false}
                        name="Adjusted Close"
                        type="monotone"
                        dataKey="AdjClose"
                        stroke="#0077bd"
                        strokeWidth={1.8}
                        dot={false}
                        activeDot={{ r: 4, stroke: '#F8FAFC', strokeWidth: 1.5, fill: '#0077bd' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : !historyLoading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <HelpCircle className="w-8 h-8 text-[#031333]/30 mb-2.5" />
                  <p className="text-xs font-semibold text-[#031333]">No historical data available</p>
                </div>
              ) : null}

              {/* Smooth loading overlay */}
              {historyLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#F8FAFC]/60 backdrop-blur-[0.5px] rounded-xl transition-all duration-300">
                  <div className="bg-[#F8FAFC] border border-[#a8c940]/10 rounded-full py-1.5 px-3.5 flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border-2 border-[#a8c940] border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-[10px] text-[#031333] font-semibold">Syncing chart records...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Legend & Note */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 pt-3 border-t border-[#a8c940]/5 gap-3">
              <div className="flex gap-4 text-[10px] font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#0077bd] block"></span>
                  <span className="text-[#031333]/70">Adjusted Close (Spline)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#031333] block"></span>
                  <span className="text-[#031333]/70">Target Price (Step)</span>
                </div>
              </div>
              <span className="text-[9px] text-[#031333]/40 bg-[#F8FAFC] px-2 py-1 border border-[#a8c940]/5 rounded">
                Crosshairs track coordinates automatically.
              </span>
            </div>
          </>
        ) : (
          <div className="h-[350px] flex flex-col items-center justify-center text-center p-6">
            <HelpCircle className="w-10 h-10 text-[#031333]/30 mb-2.5" />
            <p className="text-sm font-semibold text-[#031333]">No Selected Asset</p>
            <p className="text-xs text-[#031333]/50 mt-1 max-w-xs">
              Select any of the tickers on the left panel to render company historical records.
            </p>
          </div>
        )}
        
      </div>
    </div>
  );
}
