import { FC, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, PlusIcon } from "lucide-react";
import DropDownDate from "@/components/home/SideLeft/DropDownDate";
import ChartRevenue from "@/components/home/SideLeft/ChartRevenue";
import CountrySale from "@/components/home/SideLeft/CountrySale";
import ProgressCircle from "@/components/home/SideRight/Circle";
import { TaskNote } from "@/models/TaskNote.model";
import { TaskNoteList } from "@/components/home/Table/TaskNoteList";

const Home: FC = () => {
  const [selectedRange, setSelectedRange] = useState<string>("Annually");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const columns: ColumnDef<TaskNote>[] = [
    {
      accessorKey: "uniqueId",
      header: () => (
        <div>
          {"ID".toUpperCase()}
        </div>
      ),
      cell: ({ row }) => <div className="text-gray-700">{row.getValue("uniqueId")}</div>,
    },
    {
      accessorKey: "content",
      header: () => (
        <div>
          {"Nội dung".toUpperCase()}
        </div>
      ),
      cell: ({ row }) => <div className="text-gray-700">{row.getValue("content")}</div>,
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <Button
          variant="ghost"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {"Ngày tạo".toUpperCase()}
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="text-gray-700 ml-2">{row.getValue("createdAt")}</div>,
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Button
          variant="ghost"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {"status".toUpperCase()}
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="text-gray-700 ml-2">{row.getValue("status")}</div>,
    },
  ];
  
  // data of table
  // const data = OrderModel.fakedata;
  // const filteredData = data.filter((order) => {
  //   const orderDate = new Date(order.date).getTime();
  //   const from = fromDate ? new Date(fromDate).getTime() : 0;
  //   const to = toDate ? new Date(toDate).getTime() : Number.MAX_SAFE_INTEGER;
  //   return orderDate >= from && orderDate <= to;
  // });
  const filteredData:TaskNote[] = [];
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen grid grid-cols-12 gap-6">
        {/* - LEFT - */}
        <div className="col-span-8 bg-white p-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl text-gray-800">Tổng quan</h1>
            <DropDownDate onChange={setSelectedRange} />
          </div>
          <ChartRevenue date={selectedRange} />
        </div>

        {/* - RIGHT - */}
        <div className="col-span-4 space-y-6">
          <div className="p-4 bg-white shadow rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2>1.3K<span className="opacity-60 text-base font-bold"> / 1.8K Units</span></h2>
                <div className="mt-1">Made this month year</div>
              </div>
              <div>
                <ProgressCircle percentage={75} />
              </div>
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2>1.3K<span className="opacity-60 text-base font-bold"> / 1.8K Units</span></h2>
                <div className="mt-1">Made this month year</div>
              </div>
              <div>
                <ProgressCircle percentage={75} />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg mt-5">
            <h1 className="font-bold text-xl text-gray-800 mb-4">Đang triển khai</h1>
            <CountrySale />
          </div>
        </div>
      </div>

      {/* - TABLER - */}
      <div className="border p-5 bg-white rounded-2xl">
        <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center pb-4">
        <h3 className="text-lg font-semibold">Công việc của bạn</h3>
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
            <div className="relative">
              <Button variant="outline" className="h-[47.99px] px-4 border-blue-500 text-blue-500 hover:bg-blue-50">
                <span className="text-gray-600 font-bold">Thêm công việc</span>
                <PlusIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <TaskNoteList columns={columns} data={filteredData} />
        </div>
      </div >
    </>
  )
}

export default Home;