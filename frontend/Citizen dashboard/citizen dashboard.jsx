import React, { useState } from 'react';
import MyComplaints from './MyComplaints';

export default function CitizenDashboard({ activeTab, setActiveTab }) {
  const [filter, setFilter] = useState('All (12)');

  return (
    <div className="w-full">
      
      {/* VIEW 1: Citizen Dashboard Overview */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6 max-w-7xl mx-auto">
          
          {/* Top Header Banner inside Dashboard */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm gap-4">
            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Citizen Dashboard</h1>
              <p className="text-slate-500 text-xs mt-0.5">Together, let's make our city better. 🌱</p>
            </div>
            
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-xs font-semibold bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700">
                <span>📍 Gwalior, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-800">
                <span>☀️ 28°C Sunny</span>
              </div>
            </div>
          </div>

          {/* Top 4 Stat Cards + Report New Issue Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Complaints</span>
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-base">📋</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">12</h3>
                <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">↑ 2 this month</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">In Progress</span>
                <span className="p-2 bg-amber-50 text-amber-600 rounded-lg text-base">⏳</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">5</h3>
                <span className="text-[11px] text-slate-500 mt-1 block">Currently active</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Resolved</span>
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-base">✅</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">7</h3>
                <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">↑ 3 this month</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">High Priority</span>
                <span className="p-2 bg-red-50 text-red-600 rounded-lg text-base">⚠️</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">3</h3>
                <span className="text-[11px] text-red-600 font-semibold mt-1 block">Needs attention</span>
              </div>
            </div>

            {/* Report New Issue Card with Active Click Handler */}
            <div className="bg-emerald-600 text-white p-4 rounded-xl shadow-sm flex flex-col justify-between lg:col-span-1 sm:col-span-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-sm">Report New Issue</h4>
                  <p className="text-[11px] text-emerald-100 mt-0.5">See something broken? Report it in a few taps.</p>
                </div>
                <span className="p-2 bg-white/20 rounded-lg text-base">📷</span>
              </div>
              <button 
                onClick={() => setActiveTab('report')}
                className="mt-3 w-full bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-xs py-2 rounded-lg shadow-sm transition cursor-pointer"
              >
                Report Now →
              </button>
            </div>
          </div>

          {/* Row 2: Track Active Complaint & Nearby Issues Map */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-slate-800 text-sm">Track Your Complaint</h3>
                  <span 
                    onClick={() => setActiveTab('complaints')}
                    className="text-xs text-emerald-600 font-semibold cursor-pointer hover:underline"
                  >
                    View Details →
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 items-center">
                  <div className="bg-slate-200 rounded-lg h-32 flex items-center justify-center overflow-hidden border border-slate-300">
                    <div className="text-slate-500 text-xs font-semibold text-center p-2">📷 Pothole Image Preview (#1024)</div>
                  </div>
                  <div className="md:col-span-2 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Complaint ID #1024</span>
                      <span className="px-2 py-0.5 bg-red-50 text-red-600 font-semibold rounded">High Priority</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-1 text-slate-600">
                      <div><strong className="text-slate-800">Issue Type:</strong> Pothole</div>
                      <div><strong className="text-slate-800">Location:</strong> MG Road near School</div>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Current Status</span>
                        <span className="font-bold text-amber-600">In Progress</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-slate-800 text-sm">Nearby Issues</h3>
                  <span className="text-xs text-emerald-600 font-semibold cursor-pointer hover:underline">View All</span>
                </div>
                <div className="bg-slate-900 rounded-lg relative overflow-hidden h-44 flex items-center justify-center border border-slate-800 text-white text-xs">
                  City Center Map Radar Active
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Recent Complaints Summary & Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800 text-sm">My Complaints Summary</h3>
                <button 
                  onClick={() => setActiveTab('complaints')}
                  className="text-xs text-emerald-600 font-bold hover:underline"
                >
                  Open Full Complaints Page →
                </button>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center text-xs text-slate-600">
                Click on "Open Full Complaints Page" above to view complete list, timeline filters, and details.
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm mb-3">Your Impact</h3>
              <div className="bg-emerald-50/40 p-4 rounded-xl border border-emerald-100 text-xs">
                <p className="font-bold text-emerald-900 mb-2">Total Reports: 12</p>
                <p className="text-emerald-700">Resolved Issues: 7</p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* VIEW 2: My Complaints Section */}
      {activeTab === 'complaints' && (
        <div>
          <button 
            onClick={() => setActiveTab('dashboard')}
            className="mb-4 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg hover:bg-slate-700 transition"
          >
            ← Back to Dashboard
          </button>
          <MyComplaints />
        </div>
      )}

    </div>
  );
}
