import React from 'react';

export default function MyProfile() {
  const complaintsSummary = [
    { id: '1', title: 'Pothole on Main Road', category: 'Roads & Infrastructure', date: 'May 20, 2025 • 10:32 AM', timesReported: '3 times reported' },
    { id: '2', title: 'Garbage Overflow at Street 12', category: 'Sanitation', date: 'May 18, 2025 • 09:15 AM', timesReported: '2 times reported' },
    { id: '3', title: 'Broken Street Light', category: 'Public Utilities', date: 'May 16, 2025 • 08:45 PM', timesReported: '1 time reported' },
    { id: '4', title: 'Water Leakage on Road', category: 'Water Supply', date: 'May 14, 2025 • 11:20 AM', timesReported: '2 times reported' },
    { id: '5', title: 'Damaged Footpath', category: 'Roads & Infrastructure', date: 'May 12, 2025 • 04:30 PM', timesReported: '1 time reported' },
    { id: '6', title: 'Overflowing Garbage Bin', category: 'Sanitation', date: 'May 10, 2025 • 12:10 PM', timesReported: '1 time reported' },
  ];

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Top Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">My Profile</h1>
          <p className="text-xs text-slate-500">Manage your information and track your activity</p>
        </div>

        {/* Profile Card Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-t border-slate-100 pt-6">
          
          {/* Left: Avatar & Name (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-orange-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                <span className="text-4xl">👩‍🦰</span>
              </div>
              <span className="absolute bottom-0 right-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs shadow-md border-2 border-white cursor-pointer">
                📷
              </span>
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900">Anushka Shukla</h2>
              <span className="inline-block mt-1 px-3 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[11px] rounded-full border border-emerald-200">
                Active Citizen
              </span>
            </div>
          </div>

          {/* Right: Personal Info Details (8 Cols) */}
          <div className="lg:col-span-8 space-y-3 text-xs bg-slate-50/60 p-5 rounded-2xl border border-slate-200">
            
            <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
              <div className="flex items-center gap-2 text-slate-500">
                <span>✉️ Email ID</span>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-slate-900">anushka.shukla@gmail.com</strong>
                <button className="text-emerald-600 font-bold hover:underline">Edit</button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
              <div className="flex items-center gap-2 text-slate-500">
                <span>📞 Contact Number</span>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-slate-900">+91 91234 56789</strong>
                <button className="text-emerald-600 font-bold hover:underline">Edit</button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
              <div className="flex items-center gap-2 text-slate-500">
                <span>📍 Location</span>
              </div>
              <div className="flex items-center gap-4">
                <strong className="text-slate-900">Gomti Nagar, Lucknow, Uttar Pradesh</strong>
                <button className="text-emerald-600 font-bold hover:underline">Edit</button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60">
              <div className="flex items-center gap-2 text-slate-500">
                <span>📅 Member Since</span>
              </div>
              <strong className="text-slate-900">January 15, 2025</strong>
            </div>

            <div className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2 text-slate-500">
                <span>🛡️ Account Status</span>
              </div>
              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[11px] rounded-md border border-emerald-200">
                Verified
              </span>
            </div>

          </div>

        </div>

        {/* 4 Metric Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">📊 Complaints Filed</span>
            <span className="text-lg font-black text-slate-900">12</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700">✅ Resolved</span>
            <span className="text-lg font-black text-emerald-700">7</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-amber-700">⏳ Pending</span>
            <span className="text-lg font-black text-amber-700">2</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-rose-700">❌ Rejected</span>
            <span className="text-lg font-black text-rose-700">0</span>
          </div>
        </div>

      </div>

      {/* My Complaints Summary Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        
        <div className="flex justify-between items-center border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-black text-slate-900">My Complaints Summary</h2>
            <p className="text-xs text-slate-500">A list of issues you've reported</p>
          </div>
          <select className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium">
            <option>All Time</option>
            <option>This Month</option>
            <option>Last 6 Months</option>
          </select>
        </div>

        {/* List of Complaints */}
        <div className="space-y-3">
          {complaintsSummary.map((item) => (
            <div key={item.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between hover:bg-slate-100/60 transition">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-slate-200 rounded-xl border border-slate-300 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <span className="text-[10px] text-slate-500 font-bold">📷 Img</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 bg-slate-200/80 text-slate-700 rounded">{item.category}</span>
                    <span className="text-xs text-slate-500">🕒 {item.date}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-900 block">{item.timesReported}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button className="text-xs font-bold text-emerald-600 hover:underline">
            View All Complaints →
          </button>
        </div>

      </div>

      {/* Bottom Appreciation Banner */}
      <div className="bg-emerald-50/60 border border-emerald-100 p-4 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">🌿</span>
          <div>
            <h4 className="font-bold text-xs text-emerald-900">Thank you for making your city better!</h4>
            <p className="text-[11px] text-emerald-700">Your reports help authorities take action and improve our community.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
