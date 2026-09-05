import React, { useState } from 'react';

export default function MyComplaints() {
  const [selectedComplaint, setSelectedComplaint] = useState({
    id: 'HS-2025-1248',
    title: 'Pothole on Main Road',
    location: 'Gomti Nagar, Lucknow',
    date: 'May 20, 2025 • 10:32 AM',
    status: 'In Progress',
    severity: 'High',
    category: 'Roads & Infrastructure',
    subcategory: 'Pothole',
    description: 'Large pothole on the main road near Gomti Nagar Metro Station causing inconvenience to commuters and vehicle damage.'
  });

  const [searchQuery, setSearchQuery] = useState('');

  const complaintsList = [
    { id: 'HS-2025-1248', title: 'Pothole on Main Road', location: 'Gomti Nagar, Lucknow', date: 'May 20, 2025 • 10:32 AM', status: 'In Progress', severity: 'High', category: 'Roads & Infrastructure', subcategory: 'Pothole', description: 'Large pothole on the main road near Gomti Nagar Metro Station causing inconvenience to commuters and vehicle damage.' },
    { id: 'HS-2025-1249', title: 'Garbage Overflow at Street 12', location: 'Vikas Nagar, Lucknow', date: 'May 18, 2025 • 09:15 AM', status: 'Resolved', severity: 'Medium', category: 'Sanitation', subcategory: 'Garbage Bin', description: 'Garbage bin overflowing near local community park.' },
    { id: 'HS-2025-1250', title: 'Broken Street Light', location: 'Hazratganj, Lucknow', date: 'May 16, 2025 • 08:45 PM', status: 'Resolved', severity: 'Low', category: 'Electricity', subcategory: 'Street Light', description: 'Street light not functional for past 3 days.' },
    { id: 'HS-2025-1251', title: 'Water Leakage on Road', location: 'Indira Nagar, Lucknow', date: 'May 14, 2025 • 11:20 AM', status: 'Pending', severity: 'High', category: 'Water Supply', subcategory: 'Pipe Leakage', description: 'Continuous water leakage wasting clean water.' },
    { id: 'HS-2025-1252', title: 'Damaged Footpath', location: 'Aliganj, Lucknow', date: 'May 12, 2025 • 04:30 PM', status: 'In Progress', severity: 'Medium', category: 'Infrastructure', subcategory: 'Footpath', description: 'Broken tiles on pedestrian walkway.' },
    { id: 'HS-2025-1253', title: 'Overflowing Garbage Bin', location: 'Gomti Nagar, Lucknow', date: 'May 10, 2025 • 12:10 PM', status: 'Resolved', severity: 'Low', category: 'Sanitation', subcategory: 'Garbage', description: 'Overflowing dustbin near market area.' }
  ];

  const filteredComplaints = complaintsList.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Top Banner / Title & Metric Cards */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">My Complaints</h1>
          <p className="text-xs text-slate-500">Track the status of all issues you've reported</p>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">📊 All</span>
            <span className="text-lg font-black text-slate-900">12</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-blue-700">⏳ In Progress</span>
            <span className="text-lg font-black text-blue-700">5</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700">✅ Resolved</span>
            <span className="text-lg font-black text-emerald-700">7</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-amber-700">⚠️ Pending</span>
            <span className="text-lg font-black text-amber-700">2</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between">
            <span className="text-xs font-bold text-rose-700">❌ Rejected</span>
            <span className="text-lg font-black text-rose-700">0</span>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Left List & Right Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT SIDE: Search, Filters & Complaints List (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="relative flex-1">
              <span className="absolute left-3 top-3 text-slate-400 text-xs">🔍</span>
              <input 
                type="text" 
                placeholder="Search complaints..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium">
              <option>All Categories</option>
              <option>Roads & Infrastructure</option>
              <option>Sanitation</option>
              <option>Electricity</option>
            </select>
            <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium">
              <option>All Severity</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Complaints List Cards */}
          <div className="space-y-3">
            {filteredComplaints.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedComplaint(item)}
                className={`bg-white p-4 rounded-2xl border transition-all cursor-pointer shadow-sm flex items-center justify-between ${
                  selectedComplaint?.id === item.id ? 'border-emerald-600 ring-1 ring-emerald-600' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-xl border border-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-slate-400 font-bold">📷 Img</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">📍 {item.location}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">🕒 {item.date}</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <span className={`inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-md ${
                    item.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    item.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                    'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                  <div className="text-xs font-semibold text-rose-600">● {item.severity}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-slate-500 py-2">
            Showing 1 to {filteredComplaints.length} of 12 complaints
          </div>
        </div>

        {/* RIGHT SIDE: Complaint Detail View Panel (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 sticky top-6">
          {selectedComplaint ? (
            <>
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>Complaint ID: <strong className="text-slate-900">{selectedComplaint.id}</strong></span>
                <button className="text-slate-400 hover:text-slate-600">📋</button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-black text-slate-900">{selectedComplaint.title}</h2>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-md border border-blue-200">
                    {selectedComplaint.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500">📍 {selectedComplaint.location} • 🕒 {selectedComplaint.date}</p>
                <p className="text-xs text-slate-700 mt-2">{selectedComplaint.description}</p>
              </div>

              {/* Big Image Preview Box */}
              <div className="h-44 bg-slate-100 rounded-xl border border-slate-200 relative overflow-hidden flex items-center justify-center">
                <span className="text-xs text-slate-400 font-bold">[Attached Evidence Image Preview]</span>
              </div>

              {/* Severity / Condition Box */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-700 block">Severity / Condition</span>
                  <span className="text-[11px] text-slate-500">Large issue causing major inconvenience</span>
                </div>
                <span className="px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold rounded-lg">
                  ● {selectedComplaint.severity}
                </span>
              </div>

              {/* Details & Attributes Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <div>
                  <span className="text-slate-400 block">Category</span>
                  <strong className="text-slate-900">{selectedComplaint.category}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Subcategory</span>
                  <strong className="text-slate-900">{selectedComplaint.subcategory}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Location</span>
                  <strong className="text-slate-900">{selectedComplaint.location}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Reported On</span>
                  <strong className="text-slate-900">{selectedComplaint.date}</strong>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Status Timeline</h3>
                <div className="space-y-4 border-l-2 border-slate-200 ml-3 pl-4 text-xs">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-0 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white"></div>
                    <p className="font-bold text-slate-900">Submitted</p>
                    <p className="text-slate-500">Your complaint has been submitted successfully. • {selectedComplaint.date}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-0 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white"></div>
                    <p className="font-bold text-slate-900">AI Verified</p>
                    <p className="text-slate-500">AI has analyzed and verified the issue.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-0 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white"></div>
                    <p className="font-bold text-slate-900">Routed to Department</p>
                    <p className="text-slate-500">Assigned to Public Works Department.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-0 w-3 h-3 bg-blue-600 rounded-full border-2 border-white animate-pulse"></div>
                    <p className="font-bold text-blue-700">In Progress</p>
                    <p className="text-slate-500">Work is in progress by the assigned team.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition">
                  🔗 Share Update
                </button>
                <button className="flex-1 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl transition border border-rose-200">
                  🗑️ Cancel Complaint
                </button>
              </div>
            </>
          ) : (
            <div className="h-64 flex items-center justify-center text-slate-400 text-xs font-medium text-center">
              Select any complaint from the left list to inspect details.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
