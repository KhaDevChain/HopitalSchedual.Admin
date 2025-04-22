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
import React from "react";
import FragTableHeader from "@/components/commons/TableHeader";
import { FragTableBody } from "@/components/commons/TableBody";
import FragTableFooter from "@/components/commons/TableFooter";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
export function OrderList<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
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
  return (
    <>
      <Table>
        {
          /* 
          * FAMI: 25/03/2025 by Kha
          * Call the fragment header in table
          */
        }
        <FragTableHeader table={table} />

        {
          /* 
          * FAMI: 25/03/2025 by Kha
          * Call the fragment body in table
          */
        }
        <FragTableBody table={table} className="h-[400px]" />

        {
          /* 
          * FAMI: 25/03/2025 by Kha
          * Call the fragment footer in table
          */
        }
        <FragTableFooter table={table} />
      </Table>
    </>
  )
}
