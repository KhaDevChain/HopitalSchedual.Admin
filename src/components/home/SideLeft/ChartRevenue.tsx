import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const ChartRevenue: React.FC<{ date: string }> = ({ date }) => {
  const [overViewSelected, setOverViewSelected] = useState(0);

  const chartOptions: ApexOptions[] = [
    {
      chart: { type: "line" },
      xaxis: {
        categories: ["01 Jun", "02 Jun", "03 Jun", "04 Jun", "05 Jun", "06 Jun", "07 Jun", "08 Jun", "09 Jun", "10 Jun", "11 Jun", "12 Jun"],
      },
      stroke: { curve: "smooth" },
      series: [{ name: "Sales", data: [250, 340, 300, 370, 320, 400, 330, 420, 390, 450, 380, 560] }],
    },
    {
      chart: { type: "line" },
      xaxis: {
        categories: ["01 Jun", "02 Jun", "03 Jun", "04 Jun", "05 Jun", "06 Jun", "07 Jun", "08 Jun", "09 Jun", "10 Jun", "11 Jun", "12 Jun"],
      },
      stroke: { curve: "smooth" },
      series: [{ name: "Sales", data: [100, 30, 482, 560, 890, 456, 110, 115, 256, 680, 700, 750] }],
    },
    {
      chart: { type: "line" },
      xaxis: {
        categories: ["01 Jun", "02 Jun", "03 Jun", "04 Jun", "05 Jun", "06 Jun", "07 Jun", "08 Jun", "09 Jun", "10 Jun", "11 Jun", "12 Jun"],
      },
      stroke: { curve: "smooth" },
      series: [{ name: "Sales", data: [980, 865, 300, 370, 320, 650, 500, 130, 428, 450, 668, 560] }],
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl p-3 bg-blue-100 dark:bg-gray-700 mt-4">

        <button className={`p-4 rounded-2xl cursor-pointer ltr:text-left rtl:text-right transition duration-150 outline-hidden ${overViewSelected === 0 ? "bg-white" : "bg-gray-100"
          } dark:bg-gray-900 shadow-md`}
          onClick={() => setOverViewSelected(0)}
        >
          <div className="flex md:flex-col-reverse gap-2 2xl:flex-row justify-between relative">
            <div className="text-start">
              <div className="mb-4 text-gray-500 text-sm font-semibold">Total profit</div>
              <h3 className="mb-1 text-2xl font-bold"><span>$82,373.21</span></h3>
              <div className="inline-flex items-center flex-wrap gap-1">
                <span className="flex items-center text-[#10b981] font-bold">
                  <span>+</span>
                  <span>3.4%</span>
                </span>
                <span className="text-gray-500 text-sm font-base" style={{ textShadow: "0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)" }}>
                  from last {date?.toLocaleLowerCase()}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-gray-900 rounded-full text-2xl bg-sky-200">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path>
                <path d="M12 7v10"></path>
              </svg>
            </div>
          </div>
        </button>

        <button className={`p-4 rounded-2xl cursor-pointer ltr:text-left rtl:text-right transition duration-150 outline-hidden ${overViewSelected === 1 ? "bg-white" : "bg-gray-100"
          } dark:bg-gray-900 shadow-md`}
          onClick={() => setOverViewSelected(1)}
        >
          <div className="flex md:flex-col-reverse gap-2 2xl:flex-row justify-between relative">
            <div className="text-start">
              <div className="mb-4 text-gray-500 text-sm font-semibold">Total order</div>
              <h3 className="mb-1 text-2xl font-bold"><span>7,234</span></h3>
              <div className="inline-flex items-center flex-wrap gap-1">
                <span className="flex items-center text-[#ff6a55] font-bold">
                  <span></span>
                  <span>-2.8%</span>
                </span>
                <span className="text-gray-500 text-sm font-base" style={{ textShadow: "0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)" }}>
                  from last {date?.toLocaleLowerCase()}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-gray-900 rounded-full text-2xl bg-emerald-200">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248"></path>
                <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                <path d="M15 19l2 2l4 -4"></path>
              </svg>
            </div>
          </div>
        </button>

        <button className={`p-4 rounded-2xl cursor-pointer ltr:text-left rtl:text-right transition duration-150 outline-hidden ${overViewSelected === 2 ? "bg-white" : "bg-gray-100"
          } dark:bg-gray-900 shadow-md`}
          onClick={() => setOverViewSelected(2)}
        >
          <div className="flex md:flex-col-reverse gap-2 2xl:flex-row justify-between relative">
            <div className="text-start">
              <div className="mb-4 text-gray-500 text-sm font-semibold">Total device</div>
              <h3 className="mb-1 text-2xl font-bold">300</h3>
              <div className="inline-flex items-center flex-wrap gap-1">
                <span className="flex items-center text-[#10b981] font-bold">
                  <span>+</span>
                  <span>4.6%</span>
                </span>
                <span className="text-gray-500 text-sm font-base" style={{ textShadow: "0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)" }}>
                  from last {date?.toLocaleLowerCase()}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center min-h-12 min-w-12 max-h-12 max-w-12 text-gray-900 rounded-full text-2xl bg-purple-200">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round"
                strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div className="p-6 mt-5 bg-white shadow rounded-xl">
        <Chart options={chartOptions[overViewSelected]} series={chartOptions[overViewSelected].series as any} type="line" height={350} />
      </div>
    </>
  );
};

export default ChartRevenue;
