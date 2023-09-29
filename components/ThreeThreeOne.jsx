import React from 'react'

const ThreeThreeOne = () => {
  return (
    <div>
<div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-slate-500 to-slate-800">
    <div className="w-full p-6 m-auto bg-gradient-to-r from-slate-300 to-slate-500 rounded-md shadow-xl shadow-slate-900 ring-2 ring-slate-600 lg:max-w-5xl">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w- text-left text-sm font-light ">
          <thead className="border-b font-medium dark:border-neutral-500">
              <h1 className="text-3xl w-full font-semibold text-left text-slate-800 uppercase decoration-bold ">3.1 Total Expenditure excluding salary year-wise during last five years ( INR in Lakhs)</h1>
          </thead>
          <tbody>
            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <th className="whitespace-nowrap px-6 py-4 w-2/3 uppercase font-medium text-slate-800 font-semibold decoration-bold">Year</th>
              <th className="whitespace-nowrap px-6 py-4 w-2/3 uppercase font-medium text-slate-800 font-semibold decoration-bold">Total Expenditure</th>
              
            </tr>

            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
              <td className="whitespace-nowrap px-6 py-4 w-2/3 max-w-4xl font-medium">
              <input type="text" placeholder="Type here" className="input-md w-2/3 max-w-4xl" />
              </td> 
              <td className="whitespace-nowrap px-6 py-4 w-2/3 max-w-4xl font-medium">
              <input type="text" placeholder="Type here" className="input-md w-2/3 max-w-4xl" />
              </td> 
            </tr>
          </tbody>
          <div class="flex w-1/2 ">
          <button className="w-1/2 px-4 py-2 m-4 tracking-wide text-white transition-colors duration-200 transform bg-emerald-700 rounded-md-emerald-900 rounded-md hover:bg-emerald-500 focus:outline-none focus:bg-emerald-900">
                      Add More
            </button>

            <button className="w-1/2 px-4 py-2 m-4 tracking-wide text-white transition-colors duration-200 transform bg-emerald-700 rounded-md-emerald-900 rounded-md hover:bg-emerald-500 focus:outline-none focus:bg-emerald-900">
                      Done
            </button>
            </div>
        </table>

       
      </div>
    </div>
  </div>
</div>
    </div>
    )
}
export default ThreeThreeOne