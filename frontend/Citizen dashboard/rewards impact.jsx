import React from 'react';

export default function RewardsImpact() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Top Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Rewards & Impact</h1>
          <p className="text-xs text-slate-500">Your contribution is making your city better 💚</p>
        </div>

        {/* Top 3 Columns: Impact Score, How It Works, Civic Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
          
          {/* Impact Score Card (4 Cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-slate-500">Impact Score</span>
              <span className="text-sm">ℹ️</span>
            </div>
            <div className="my-3">
              <div className="text-4xl font-black text-slate-900 flex items-center gap-2">
                820 <span className="text-2xl">⭐</span>
              </div>
              <p className="text-xs font-bold text-slate-800 mt-1">Great going, Anushka!</p>
              <p className="text-[11px] text-slate-500">Keep reporting, keep improving.</p>
            </div>
          </div>

          {/* How Impact Score Works (4 Cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
            <h3 className="text-xs font-bold text-slate-900">How Impact Score Works</h3>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex justify-between"><span>+50</span><span className="text-slate-500">For reporting a valid issue</span></div>
              <div className="flex justify-between"><span>+100</span><span className="text-slate-500">When an issue is resolved</span></div>
              <div className="flex justify-between"><span>+30</span><span className="text-slate-500">When your report helps many people</span></div>
              <div className="flex justify-between"><span>+20</span><span className="text-slate-500">For giving helpful feedback</span></div>
            </div>
          </div>

          {/* Civic Points & Redeem (4 Cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-slate-500">Civic Points</span>
              <span className="text-lg">🏆</span>
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900 flex items-center gap-2">
                1,250 <span className="text-xl">🪙</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">You're helping make your neighbourhood better!</p>
            </div>
            <button className="w-full mt-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow-sm cursor-pointer">
              🎁 Redeem Soon
            </button>
          </div>

        </div>

        {/* Your Contribution Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">📊 12</span>
            <span className="text-xs font-medium text-slate-500">Complaints Reported</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700">✅ 8</span>
            <span className="text-xs font-medium text-slate-500">Issues Resolved</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-amber-700">👥 24</span>
            <span className="text-xs font-medium text-slate-500">People Benefitted</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-blue-700">💡 3</span>
            <span className="text-xs font-medium text-slate-500">Areas Helped</span>
          </div>
        </div>

      </div>

      {/* Middle Grid: Badges & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Your Badges (6 Cols) */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h2 className="text-base font-black text-slate-900">Your Badges</h2>
            <button className="text-xs font-bold text-emerald-600 hover:underline">View All →</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl mx-auto flex items-center justify-center text-xl font-bold">⭐</div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">Civic Starter</h4>
                <p className="text-[10px] text-slate-500">5 Verified Reports</p>
              </div>
              <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded">Earned</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl mx-auto flex items-center justify-center text-xl font-bold">🛡️</div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">Community Helper</h4>
                <p className="text-[10px] text-slate-500">10 Verified Reports</p>
              </div>
              <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded">Earned</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-2">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl mx-auto flex items-center justify-center text-xl font-bold">👑</div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">Civic Champion</h4>
                <p className="text-[10px] text-slate-500">25 Verified Reports</p>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-amber-500 h-full w-[70%]"></div>
              </div>
              <span className="text-[10px] text-slate-500">18/25</span>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-2 opacity-75">
              <div className="w-12 h-12 bg-slate-200 text-slate-600 rounded-xl mx-auto flex items-center justify-center text-xl font-bold">🔒</div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">Change Maker</h4>
                <p className="text-[10px] text-slate-500">50+ Resolved Issues</p>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-slate-400 h-full w-[0%]"></div>
              </div>
              <span className="text-[10px] text-slate-500">0/50</span>
            </div>
          </div>
        </div>

        {/* Your Impact Timeline (6 Cols) */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h2 className="text-base font-black text-slate-900">Your Impact Timeline</h2>
            <button className="text-xs font-bold text-emerald-600 hover:underline">View All →</button>
          </div>

          <div className="space-y-4 border-l-2 border-slate-200 ml-3 pl-4 text-xs">
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white"></div>
              <p className="font-bold text-slate-900">You reported a pothole on Main Road</p>
              <p className="text-[11px] text-slate-500">May 20, 2025 • 10:32 AM</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-3 h-3 bg-blue-600 rounded-full border-2 border-white"></div>
              <p className="font-bold text-slate-900">AI (Gemini) analyzed the image</p>
              <p className="text-[11px] text-slate-500">Detected Issue: Pothole • Severity: High</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-3 h-3 bg-amber-600 rounded-full border-2 border-white"></div>
              <p className="font-bold text-slate-900">Issue sent to Road Department</p>
              <p className="text-[11px] text-slate-500">May 20, 2025 • 10:35 AM</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-0 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white"></div>
              <p className="font-bold text-slate-900">Issue Resolved</p>
              <p className="text-[11px] text-slate-500">May 24, 2025 • 04:30 PM • Impact: Road improved for many commuters</p>
            </div>
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 font-bold text-xs">
              +100 Impact Score <span className="font-normal block text-[10px] text-emerald-700">Thank you for making a difference! ⭐</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Grid: Monthly Progress & Community Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Monthly Progress (6 Cols) */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">Monthly Progress 📅</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                <span>September Civic Goal</span>
                <span>80%</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-2">Make your city better this month!</p>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                <div className="bg-emerald-500 h-full w-[80%] rounded-full"></div>
              </div>
              <p className="text-[11px] text-slate-600 mt-2 font-medium">8 / 10 Useful Reports <span className="text-slate-400 block text-[10px]">2 more reports to reach Community Helper badge!</span></p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs text-slate-900">Consistency makes big changes!</h4>
                <p className="text-[11px] text-slate-500">Keep reporting and help your city grow.</p>
              </div>
              <span className="text-2xl">🏆</span>
            </div>
          </div>
        </div>

        {/* Community Impact (6 Cols) */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h2 className="text-base font-black text-slate-900">Community Impact</h2>
            <select className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium">
              <option>All Time</option>
              <option>This Month</option>
            </select>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-rose-100 text-rose-700 rounded-lg">🛣️</span>
                <div>
                  <strong className="text-slate-900 block">Roads</strong>
                  <span className="text-[10px] text-slate-500">Potholes, Damaged Roads</span>
                </div>
              </div>
              <span className="font-bold text-slate-900">5 Resolved</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-amber-100 text-amber-700 rounded-lg">💡</span>
                <div>
                  <strong className="text-slate-900 block">Streetlights</strong>
                  <span className="text-[10px] text-slate-500">Broken Street Lights</span>
                </div>
              </div>
              <span className="font-bold text-slate-900">2 Resolved</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">💧</span>
                <div>
                  <strong className="text-slate-900 block">Water Supply</strong>
                  <span className="text-[10px] text-slate-500">Leaks, Waterlogging</span>
                </div>
              </div>
              <span className="font-bold text-slate-900">1 Resolved</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">🗑️</span>
                <div>
                  <strong className="text-slate-900 block">Cleanliness</strong>
                  <span className="text-[10px] text-slate-500">Garbage, Overflowing Bins</span>
                </div>
              </div>
              <span className="font-bold text-slate-900">4 Resolved</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-emerald-200 text-emerald-800 rounded-lg">👥</span>
                <div>
                  <strong className="text-emerald-900 block">Total People Benefitted</strong>
                  <span className="text-[10px] text-emerald-700">Your reports have helped</span>
                </div>
              </div>
              <span className="font-black text-emerald-800 text-sm">24+ people</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
