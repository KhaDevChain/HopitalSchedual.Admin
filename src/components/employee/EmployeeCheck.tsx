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
  import { Table } from "@/components/ui/table"
  import React, { useState } from "react";
  import { Filter } from "lucide-react";
  import { ButtonOutline } from "../commons/ListButton";
  import FragTableHeader from "../commons/TableHeader";
  import { FragTableBody } from "../commons/TableBody";
  import FragTableFooter from "../commons/TableFooter";
  import FilterPopup from "./FilterPopup";
  import "./employee.css";

  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }
  export default function EmployeeCheckTable<TData, TValue>({
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
    });
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    return (
      <>
        <div className="border p-5 bg-white rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <h3 className="font-bold text-2xl grow">Checkin / Checkout</h3>
              {/* <ButtonOutline name={"Download"} icon={<CloudDownload />} />
              <ButtonSolid name={"Add new"} icon={<UserRoundPlus />} onClick={() => handleNavigate("/employees/employee-create")} /> */}
            </div>
            <div className="flex input-wrapper relative gap-2 justify-between">
              <div className="relative w-full">
                <input title="search" type="text" placeholder="Quick search..."
                  className="border-none py-[8px] ps-[12px] pe-[34px] rounded-xl h-[47.99px] font-medium w-full bg-[#F5F5F5] focus:bg-white outline-blue-400"
                  onChange={(e) => table.getColumn("name")?.setFilterValue(e.target.value)}
                  value={table.getColumn("name")?.getFilterValue() as string ?? ""}
                />
              </div>
              <ButtonOutline name={"Filter"} icon={<Filter />} onClick={() => setIsFilterOpen(true)} />
            </div>
            <FilterPopup isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
            <Table>
              <FragTableHeader table={table} />
              <FragTableBody table={table} className="h-[calc(100vh-400px)]" />
              <FragTableFooter table={table} />
            </Table>
          </div>
        </div >
      </>
    )
  }
  