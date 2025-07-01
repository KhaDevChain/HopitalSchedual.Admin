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
import { CloudDownload, CloudUpload, HousePlus } from "lucide-react";
import { ButtonChooseDownload, ButtonChooseUpload, ButtonSolid } from "../commons/ListButton";
import FragTableHeader from "../commons/TableHeader";
import { FragTableBody } from "../commons/TableBody";
import FragTableFooter from "../commons/TableFooter";
import { useNavigate } from "react-router-dom";
import "./assets/client.css";
import { Global } from "@/Global";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
export function HopitalTable<TData, TValue>({
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
  const navigate = useNavigate();
	const handleNavigate = (href: string) => {
		navigate(href);
	};
  const config = Global();
  return (
    <>
      <div className="border p-5 bg-white rounded-2xl">
        <div className="flex flex-col gap-4">
          <div className="flex row flex-row items-center">
            <h3 className="font-bold text-2xl grow">Mục Bệnh Viện</h3>
            <div>
              <ButtonChooseDownload
                id="invoice-001"
                icon={<CloudDownload />}
                name="Tải về"
                url={config.baseUrl + "/api/hopital/all"}
                onDownload={(type, id) => {
                  console.log("Download", type, "for", id);
                }}
              />

              <ButtonChooseUpload
                id="invoice-001"
                icon={<CloudUpload />}
                name="Upload"
                url={config.baseUrl + "assets/hopital/Hopital_thong_tin.xlsx"}
              />
              <ButtonSolid name={"Thêm mới"} icon={<HousePlus />} onClick={() => handleNavigate("/hopital/contact-create")} />
            </div>

          </div>
          <div className="flex input-wrapper relative gap-2 justify-between">
            <div className="relative w-full">
              <input title="search" type="text" placeholder="Tìm kiếm nhanh ..."
                className="border-none py-[8px] ps-[12px] pe-[34px] rounded-xl h-[47.99px] font-medium w-full bg-[#F5F5F5] focus:bg-white outline-blue-400"
                onChange={(e) => table.getColumn("name")?.setFilterValue(e.target.value)}
                value={table.getColumn("name")?.getFilterValue() as string ?? ""}
              />
            </div>
          </div>
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
            <FragTableBody table={table} className="h-[450px]" />

            {
              /* 
              * FAMI: 25/03/2025 by Kha
              * Call the fragment footer in table
              */
            }
            <FragTableFooter table={table} />
          </Table>
        </div>
      </div >
    </>
  )
}
