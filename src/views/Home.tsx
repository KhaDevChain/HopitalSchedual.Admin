import { FC, useState } from "react";
import OrderModel from "@/models/dashboard/Order.model";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import DropDownDate from "@/components/home/SideLeft/DropDownDate";
import ChartRevenue from "@/components/home/SideLeft/ChartRevenue";
import CountrySale from "@/components/home/SideLeft/CountrySale";
import { OrderList } from "@/components/home/Table/OrderList";

const Home: FC = () => {
  const [selectedRange, setSelectedRange] = useState<string>("Annually");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const columns: ColumnDef<OrderModel>[] = [
    {
      accessorKey: "id",
      header: () => (
        <div>
          {"Order ID".toUpperCase()}
        </div>
      ),
      cell: ({ row }) => <div className="text-gray-700">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "date",
      header: () => (
        <div>
          {"Date".toUpperCase()}
        </div>
      ),
      cell: ({ row }) => <div className="text-gray-700">{row.getValue("date")}</div>,
    },
    {
      accessorKey: "KioskCode",
      header: ({ column }) => (
        <Button
          variant="ghost"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {"Kiosk Code".toUpperCase()}
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="text-gray-700 ml-2">kiosk_{row.index}</div>,
    },
    {
      accessorKey: "city",
      header: ({ column }) => (
        <Button
          variant="ghost"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {"City".toUpperCase()}
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="text-gray-700 ml-2">{row.getValue("city")}</div>,
    },
    {
      accessorKey: "transactions",
      header: () => (
        <div>
          {"Total Transactions".toUpperCase()}
        </div>
      ),
      cell: ({ row }) => <div className="text-gray-700">{row.getValue("transactions")} </div>,
    },
  ];
  
  // data of table
  const data = OrderModel.fakedata;
  const filteredData = data.filter((order) => {
    const orderDate = new Date(order.date).getTime();
    const from = fromDate ? new Date(fromDate).getTime() : 0;
    const to = toDate ? new Date(toDate).getTime() : Number.MAX_SAFE_INTEGER;
    return orderDate >= from && orderDate <= to;
  });
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen grid grid-cols-12 gap-6">
        {/* - LEFT - */}
        <div className="col-span-8 bg-white p-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl text-gray-800">Overview</h1>
            <DropDownDate onChange={setSelectedRange} />
          </div>
          <ChartRevenue date={selectedRange} />
          <div className="p-6 bg-white rounded-xl shadow-lg mt-5">
            <h1 className="font-bold text-xl text-gray-800">Top city</h1>
            <CountrySale />
          </div>
        </div>

        {/* - RIGHT - */}
        {/* <div className="col-span-4 space-y-6">
          <div className="p-4 bg-white shadow rounded-xl">
            <div className="flex items-center justify-between mt-8">
              <div className="flex flex-col">
                <h2>1.3K<span className="opacity-60 text-base font-bold"> / 1.8K Units</span></h2>
                <div className="mt-1">Made this month year</div>
              </div>
              <div>
                <ProgressCircle percentage={75} />
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* - TABLER - */}
      <div className="border p-5 bg-white rounded-2xl">
        <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center pb-4">
        <h3 className="text-lg font-semibold">Recent Orders</h3>
          <div className="flex items-center space-x-3">
            <input
              type="date"
              className="border px-3 py-2 rounded-md"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <input
              type="date"
              className="border px-3 py-2 rounded-md"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              disabled={!fromDate}
              min={fromDate}
            />
          </div>
        </div>
          <div className="flex input-wrapper relative gap-2 justify-between">
            <div className="relative w-full">
              <input title="search" type="text" placeholder="Quick search..."
                className="border-none py-[8px] ps-[12px] pe-[34px] rounded-xl h-[47.99px] font-medium w-full bg-[#F5F5F5] focus:bg-white outline-blue-400"
              />
            </div>
          </div>
          <OrderList columns={columns} data={filteredData} />
        </div>
      </div >
    </>
  )
}

export default Home;