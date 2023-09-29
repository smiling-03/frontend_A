import React from 'react'

const CriteriaOneThree = () => {
  return (
    <div>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-slate-500 to-slate-800">
        <div className="w-full p-6 my-8 m-auto bg-gradient-to-r from-slate-300 to-slate-500 rounded-md shadow-xl shadow-slate-900 ring-2 ring-slate-600 lg:max-w-4xl">
        <h1 className="text-3xl font-semibold text-center text-slate-800 underline uppercase decoration-bold">
               1.3 STRENGTH, WEAKNESS, OPPORTUNITY AND CHALLENGES(SWOC) 
            </h1>
            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
               Institutional Strength
            </h1>
            <textarea placeholder="Institutional Strength" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>

            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Institutional Weakness
            </h1>
            <textarea placeholder="Institutional Weakness" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>
           
            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Institutional Opportunity
            </h1>
            <textarea placeholder="Institutional Opportunity" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>

            <h1 className="text-xl p-6 font-semibold text-left text-slate-800 underline uppercase decoration-bold">
                Institutional Challenge
            </h1>
            <textarea placeholder="Institutional Challenge" className="textarea textarea-bordered textarea-lg w-full max-w-4xl" ></textarea>
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

export default CriteriaOneThree
