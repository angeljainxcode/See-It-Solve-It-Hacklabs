import React, { useState } from 'react';

export default function ReportIssue() {
  const [step, setStep] = useState(3); // Defaulting to step 3 view as seen in reference to display full workflow preview
  const [selectedSeverity, setSelectedSeverity] = useState('High');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Top Header & 3-Step Progress Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Report an Issue</h1>
          <p className="text-xs text-slate-500">Raise a complaint in three simple steps</p>
        </div>

        {/* 3 Steps Indicator Line */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-10 top-1/2 -translate-y-1/2 h-0.5 bg-emerald-600 z-0"></div>
            
            <div onClick={() => setStep(1)} className={`relative z-10 flex flex-col items-center cursor-pointer`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>1</div>
              <span className="text-[11px] font-bold text-slate-700 mt-1">Capture & Upload</span>
            </div>

            <div onClick={() => setStep(2)} className={`relative z-10 flex flex-col items-center cursor-pointer`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>2</div>
              <span className="text-[11px] font-bold text-slate-700 mt-1">AI Analysis (Gemini)</span>
            </div>

            <div onClick={() => setStep(3)} className={`relative z-10 flex flex-col items-center cursor-pointer`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>3</div>
              <span className="text-[11px] font-bold text-slate-700 mt-1">Review & Submit</span>
            </div>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="bg-white border border-slate-200 p-12 rounded-2xl shadow-sm text-center space-y-4 max-w-xl mx-auto">
          <span className="text-4xl">🎉</span>
          <h2 className="text-2xl font-black text-slate-900">Complaint Successfully Filed!</h2>
          <p className="text-xs text-slate-500">Your civic grievance has been routed to the Public Works Department. Estimated resolution by May 24, 2025.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-500 transition shadow-sm"
          >
            Report Another Issue
          </button>
        </div>
      ) : (
        /* 3 Columns Layout mirroring the design */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* COLUMN 1: Capture & Upload (4 Cols) */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">1</span>
              <h3 className="font-bold text-sm text-slate-900">Capture & Upload</h3>
            </div>
            <p className="text-xs text-slate-500">Take a clear photo or upload from gallery</p>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl hover:bg-slate-100 transition">📷 Camera</button>
              <button className="flex-1 py-2 bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl hover:bg-slate-100 transition">🖼️ Gallery</button>
            </div>

            {/* Camera View Simulator Box */}
            <div className="h-64 bg-slate-900 rounded-xl relative overflow-hidden flex flex-col justify-between p-4 border border-slate-800">
              <div className="flex justify-between text-white text-xs">
                <span>⚡ Flash</span>
                <span>⚙️ AI Lens</span>
              </div>
              <div className="text-center text-slate-400 text-[11px]">
                [Live Camera Preview / Pothole Frame]
              </div>
              <div className="flex justify-center items-center">
                <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center cursor-pointer">
                  <div className="w-9 h-9 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Tips Box */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold text-slate-800">Tips for better results</h4>
              <ul className="text-[11px] text-slate-600 space-y-1">
                <li>✔ Take a clear and well-lit photo</li>
                <li>✔ Focus on the issue area</li>
                <li>✔ Avoid people or vehicle in the frame</li>
              </ul>
            </div>
          </div>

          {/* COLUMN 2: AI Analysis Gemini (4 Cols) */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">2</span>
              <h3 className="font-bold text-sm text-slate-900">AI Analysis (Gemini)</h3>
            </div>
            <p className="text-xs text-slate-500">Our AI analyzes the image to detect the issue</p>

            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-bold">
              <span>✨</span> Analyzing your image...
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold text-slate-500">AI Detected Issue</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">92% Confidence</span>
              </div>
              <h4 className="text-base font-black text-slate-900">Pothole on Road</h4>
              <span className="inline-block text-[11px] font-semibold text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">Roads & Infrastructure</span>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-800 block">AI Summary</span>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                The image shows a large pothole on the road filled with water. This issue can cause inconvenience to commuters and may lead to vehicle damage or accidents.
              </p>
            </div>

            <div className="space-y-1 text-xs pt-2 border-t border-slate-100">
              <div className="flex justify-between py-1 text-slate-600">
                <span>Severity</span>
                <strong className="text-slate-900">High</strong>
              </div>
              <div className="flex justify-between py-1 text-slate-600">
                <span>Estimated Impact</span>
                <strong className="text-slate-900">High</strong>
              </div>
              <div className="flex justify-between py-1 text-slate-600">
                <span>Recommended Action</span>
                <strong className="text-slate-900">Repair the pothole</strong>
              </div>
              <div className="flex justify-between py-1 text-slate-600">
                <span>Department</span>
                <strong className="text-slate-900">Public Works Department</strong>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 italic text-center pt-2">
              ⚠️ AI results may not be 100% accurate. Please review before submitting.
            </p>
          </div>

          {/* COLUMN 3: Review & Submit & What Happens Next (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Review & Submit Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">3</span>
                <h3 className="font-bold text-sm text-slate-900">Review & Submit</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[11px] block">Complaint Preview</span>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <strong className="text-slate-900 text-sm block">Pothole on Road</strong>
                    <span className="text-[11px] text-slate-500">📍 Gomti Nagar, Lucknow • May 20, 2025</span>
                  </div>
                </div>

                {/* Severity Selection Cards */}
                <div className="space-y-1">
                  <span className="font-bold text-slate-800">Severity / Condition</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div onClick={() => setSelectedSeverity('Low')} className={`p-2.5 rounded-xl border text-center cursor-pointer ${selectedSeverity === 'Low' ? 'border-emerald-600 bg-emerald-50/50' : 'border-slate-200 bg-slate-50'}`}>
                      <span className="text-xs font-bold block text-emerald-700">Low</span>
                      <span className="text-[9px] text-slate-500">Minor issue</span>
                    </div>
                    <div onClick={() => setSelectedSeverity('Medium')} className={`p-2.5 rounded-xl border text-center cursor-pointer ${selectedSeverity === 'Medium' ? 'border-amber-600 bg-amber-50/50' : 'border-slate-200 bg-slate-50'}`}>
                      <span className="text-xs font-bold block text-amber-700">Medium</span>
                      <span className="text-[9px] text-slate-500">Moderate</span>
                    </div>
                    <div onClick={() => setSelectedSeverity('High')} className={`p-2.5 rounded-xl border text-center cursor-pointer ${selectedSeverity === 'High' ? 'border-rose-600 bg-rose-50/50' : 'border-slate-200 bg-slate-50'}`}>
                      <span className="text-xs font-bold block text-rose-700">High</span>
                      <span className="text-[9px] text-slate-500">Major issue</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" defaultChecked id="confirm" className="rounded border-slate-300 text-emerald-600" />
                  <label htmlFor="confirm" className="text-[11px] text-slate-600">I confirm that the information provided is true and accurate.</label>
                </div>

                <button 
                  onClick={() => setSubmitted(true)}
                  className="w-full py-3 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-500 transition shadow-sm cursor-pointer"
                >
                  Submit Complaint 🚀
                </button>
              </div>
            </div>

            {/* What Happens Next Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3">What happens next?</h3>
              <div className="space-y-3 text-xs">
                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0">1</span>
                  <p className="text-slate-600">Your complaint is submitted successfully.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0">2</span>
                  <p className="text-slate-600">AI & Team will review and verify the issue.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0">3</span>
                  <p className="text-slate-600">It will be assigned to the relevant department.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0">4</span>
                  <p className="text-slate-600">You will receive updates until the issue is resolved.</p>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px]">Estimated Resolution</span>
                  <strong className="text-emerald-800 font-bold">May 24, 2025</strong>
                </div>
                <span className="text-[10px] text-emerald-700 font-medium">(3 days left)</span>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}
