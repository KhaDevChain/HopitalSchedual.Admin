import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table
} from "@/components/ui/table"
import React from "react";
import { Circle, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "@/components/ui/input";
import { FragTableBody } from "@/components/commons/TableBody";
import { ButtonSelectRole } from "./ButtonSelectRole";
import FragTableHeader from "../commons/TableHeader";
import FragTableFooter from "../commons/TableFooter";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function PermissionTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]); //sorting
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]); //filter
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //sorting
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    //filter
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  const ButtonSelectStatus = () => {
    return (
      <>
        <SelectTrigger className="border-none font-bold text-gray-500 rounded-xl h-10 tex-gray-300 bg-[#F5F5F5] min-w-[150px] hover:ring-blue-600 data-[state=open]:ring-2 data-[state=open]:bg-white data-[state=open]:ring-blue-600 focus:ring-2 focus:bg-white focus:ring-blue-600">
          <SelectValue placeholder={<span className="flex items-center gap-2"><Circle size={10} className="text-transparent rounded-full bg-gray-300" />All</span>} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">
            <span className="flex items-center gap-2"><Circle size={10} className="text-transparent rounded-full bg-gray-300" />All</span>
          </SelectItem>
          <SelectItem value="Active" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">
            <span className="flex items-center gap-2"><Circle size={10} className="text-transparent rounded-full bg-green-500" />Active</span>
          </SelectItem>
          <SelectItem value="Blocked" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">
            <span className="flex items-center gap-2"><Circle size={10} className="text-transparent rounded-full bg-orange-500" />Blocked</span>
          </SelectItem>
        </SelectContent>
      </>
    );
  }

  return (
    <><div className="p-5 bg-white rounded-b-2xl">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <h3 className="font-bold text-2xl grow">All accounts</h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-gray-100 rounded-xl w-[300px] group focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500">
            <Search className="text-gray-400 ml-2" size={18} />
            <Input
              type="text"
              placeholder="Search..."
              onChange={(e) => table.getColumn("name")?.setFilterValue(e.target.value)}
              className="font-semibold border-none shadow-none outline-none focus:outline-none focus:ring-0 focus:border-transparent focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none bg-transparent placeholder-gray-400 text-gray-600 ml-2"
            />
          </div>
          <div className="flex items-center gap-2">
            <Select onValueChange={(e) => table.getColumn("status")?.setFilterValue(e === "Active" ? true : e === "Blocked" ? false : null)}>
              <ButtonSelectStatus />
            </Select>
            <ButtonSelectRole />
          </div>
        </div>
        <Table>
          <FragTableHeader table={table} />
          <FragTableBody table={table} />
          <FragTableFooter table={table} />
        </Table>
      </div>
    </div >
    </>
  )
}
