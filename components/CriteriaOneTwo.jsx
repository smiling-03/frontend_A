import React from 'react'

const CriteriaOneTwo = () => {
  return (
    <div>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-slate-500 to-slate-800">
        <div className="w-full p-6 my-8 m-auto bg-gradient-to-r from-slate-300 to-slate-500 rounded-md shadow-xl shadow-slate-900 ring-2 ring-slate-600 lg:max-w-4xl">
        <h1 className="text-3xl font-semibold text-center text-slate-800 underline uppercase decoration-bold">
               1.2 CRITERIA WISE SUMMARY
            </h1>
            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
               Cirricular aspects
            </h1>
            <textarea placeholder="Cirricular aspects" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>

            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Teaching-learning and Evaluation
            </h1>
            <textarea placeholder="Teaching-learning and Evaluation" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>
           
            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Research, Innovation and Extension
            </h1>
            <textarea placeholder="Research, Innovation and Extension" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>

            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Infrastructure and Learning Resources
            </h1>
            <textarea placeholder="Infrastructure and Learning Resources" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>

            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Student Support and Progression
            </h1>
            <textarea placeholder="Student Support and Progression" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>

            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Governance, Leadership and Management
            </h1>
            <textarea placeholder="Governance, Leadership and Management" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>

            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Institutional Values and Best Practices
            </h1>
            <textarea placeholder="Institutional Values and Best Practices" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>
            <div class="flex w-1/2 ">
          <button className="w-1/2 px-4 py-2 m-4 tracking-wide text-white transition-colors duration-200 transform bg-emerald-700 rounded-md-emerald-900 rounded-md hover:bg-emerald-500 focus:outline-none focus:bg-emerald-900">
                      Done 
            </button>

            <button className="w-1/2 px-4 py-2 m-4 tracking-wide text-white transition-colors duration-200 transform bg-emerald-700 rounded-md-emerald-900 rounded-md hover:bg-emerald-500 focus:outline-none focus:bg-emerald-900">
                      Back
            </button>
            </div>
      </div>
    </div>
    </div>
  )
}

export default CriteriaOneTwo
