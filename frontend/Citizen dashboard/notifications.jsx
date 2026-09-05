import React, { useState } from 'react';

export default function Notifications() {
  const [activeSubTab, setActiveSubTab] = useState('all');

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Top Header & Metric Cards */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Notifications</h1>
          <p className="text-xs text-slate-500">Stay updated with every update on your reported issues.</p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-500 block">Total Notifications</span>
              <span className="text-xl font-black text-slate-900">12</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">New updates from your area</span>
            </div>
            <span className="text-xl p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">🔔</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-500 block">People Involved</span>
              <span className="text-xl font-black text-slate-900">58</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Nearby citizens</span>
            </div>
            <span className="text-xl p-2.5 bg-amber-50 text-amber-600 rounded-xl">👥</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-500 block">Issues Reported</span>
              <span className="text-xl font-black text-slate-900">8</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">In your area</span>
            </div>
            <span className="text-xl p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">📊</span>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-500 block">Avg. Distance</span>
              <span className="text-xl font-black text-slate-900">1.2 km</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">From your location</span>
            </div>
            <span className="text-xl p-2.5 bg-blue-50 text-blue-600 rounded-xl">📍</span>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Left Notifications List & Right Preferences/Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT SIDE: Sub-Tabs & Notification Stream (8 Cols) */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          
          {/* Sub-Tabs Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveSubTab('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${activeSubTab === 'all' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                All Notifications (12)
              </button>
              <button 
                onClick={() => setActiveSubTab('complaints')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${activeSubTab === 'complaints' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                My Complaints (5)
              </button>
              <button 
                onClick={() => setActiveSubTab('mentions')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${activeSubTab === 'mentions' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                Mentions (2)
              </button>
              <button 
                onClick={() => setActiveSubTab('system')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${activeSubTab === 'system' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                System (5)
              </button>
            </div>
            <button className="text-xs font-semibold text-emerald-600 hover:underline">Mark all as read ✓</button>
          </div>

          {/* Notifications Feed Items */}
          <div className="space-y-3">
            
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-start gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm mt-0.5">📢</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Complaint Received</h4>
                  <p className="text-xs text-slate-600">Your complaint #HS-2025-1248 (Pothole on Main Road) has been received successfully.</p>
                  <p className="text-[10px] text-slate-400 mt-1">10:32 AM • May 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">New</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-start gap-3">
                <span className="p-2 bg-blue-100 text-blue-700 rounded-lg text-sm mt-0.5">🖼️</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Image Uploaded</h4>
                  <p className="text-xs text-slate-600">You have uploaded an image for your complaint #HS-2025-1248.</p>
                  <p className="text-[10px] text-slate-400 mt-1">10:35 AM • May 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">New</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-start gap-3">
                <span className="p-2 bg-amber-100 text-amber-700 rounded-lg text-sm mt-0.5">⚙️</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Assigned to Department</h4>
                  <p className="text-xs text-slate-600">Your complaint #HS-2025-1248 has been assigned to Road Maintenance Team 2.</p>
                  <p className="text-[10px] text-slate-400 mt-1">11:05 AM • May 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">New</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-start gap-3">
                <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm mt-0.5">🔍</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Verification in Progress</h4>
                  <p className="text-xs text-slate-600">The AI has started verifying your complaint #HS-2025-1248.</p>
                  <p className="text-[10px] text-slate-400 mt-1">11:45 AM • May 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">New</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-start gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm mt-0.5">⚡</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Work in Progress</h4>
                  <p className="text-xs text-slate-600">Action has been initiated for your complaint #HS-2025-1248.</p>
                  <p className="text-[10px] text-slate-400 mt-1">01:15 PM • May 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">New</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <div className="flex items-start gap-3">
                <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm mt-0.5">✅</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Issue Resolved</h4>
                  <p className="text-xs text-slate-600">Your complaint #HS-2025-1248 has been resolved successfully.</p>
                  <p className="text-[10px] text-slate-400 mt-1">06:30 PM • May 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg transition">View Details</button>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              </div>
            </div>

          </div>

          <div className="text-center text-xs text-slate-500 pt-2">
            Showing 1 to 6 of 12 notifications
          </div>
        </div>

        {/* RIGHT SIDE: Preferences & Recent Activity Feed (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Notification Preferences */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3 flex justify-between items-center">
              Notification Preferences
              <span className="text-xs text-slate-400">⚙️</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-slate-900 block">Complaint Updates</strong>
                  <span className="text-[10px] text-slate-500">Receive updates on your complaints</span>
                </div>
                <input type="checkbox" defaultChecked className="toggle accent-emerald-600 w-4 h-4 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-slate-900 block">System Announcements</strong>
                  <span className="text-[10px] text-slate-500">Important updates and announcements</span>
                </div>
                <input type="checkbox" defaultChecked className="toggle accent-emerald-600 w-4 h-4 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-slate-900 block">Nearby Issues</strong>
                  <span className="text-[10px] text-slate-500">Updates about issues near you</span>
                </div>
                <input type="checkbox" defaultChecked className="toggle accent-emerald-600 w-4 h-4 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-slate-900 block">Mentions & Replies</strong>
                  <span className="text-[10px] text-slate-500">When someone mentions or replies</span>
                </div>
                <input type="checkbox" defaultChecked className="toggle accent-emerald-600 w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3 flex justify-between items-center">
              Recent Activity Feed
              <span className="text-xs font-semibold text-emerald-600 cursor-pointer">View All →</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden shrink-0"></div>
                <p className="text-slate-700 leading-tight"><strong>Rahul Sharma</strong> reported Pothole on Main Road <span className="text-[10px] text-slate-400 block">10:32 AM</span></p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden shrink-0"></div>
                <p className="text-slate-700 leading-tight"><strong>Priya Verma</strong> reported Garbage Overflow <span className="text-[10px] text-slate-400 block">09:15 AM</span></p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden shrink-0"></div>
                <p className="text-slate-700 leading-tight"><strong>Amit Gupta</strong> reported Broken Street Light <span className="text-[10px] text-slate-400 block">08:45 AM</span></p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden shrink-0"></div>
                <p className="text-slate-700 leading-tight"><strong>Neha Singh</strong> reported Water Leakage <span className="text-[10px] text-slate-400 block">08:10 AM</span></p>
              </div>
            </div>
          </div>

          {/* Get Notified Instantly Banner */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl">🔔</div>
            <h4 className="font-bold text-sm text-slate-900">Get Notified Instantly!</h4>
            <p className="text-xs text-slate-500">Enable real-time alerts for issues happening near you.</p>
            <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow-sm cursor-pointer">
              Enable Alerts
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
