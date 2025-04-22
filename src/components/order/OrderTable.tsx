import { ColumnDef, ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import { ButtonOutline } from "../commons/ListButton";
import { useState } from "react";
import { Table } from "../ui/table";
import { CloudDownload, Filter } from "lucide-react";
import { downloadCSV } from "@/lib/export_csv";
import FragTableHeader from "../commons/TableHeader";
import { FragTableBody } from "../commons/TableBody";
import FragTableFooter from "../commons/TableFooter";

interface DataTableProps<TData, TValue, TTitle> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
    titleTable: TTitle
}

export const OrderTable = (props: DataTableProps<any, any, string>) => {
    const [sorting, setSorting] = useState<SortingState>([]); //sorting
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]); //filter

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (isOpen: boolean) => {
        setIsOpen(!isOpen);
    };

    const table = useReactTable({
        data: props.data,
        columns: props.columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        //sorting
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        //filter
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        // state of the table
        state: {
            sorting,
            columnFilters,
        },
    });

    return (
        <div className="border p-5 bg-white rounded-2xl">
            <div className="flex flex-col gap-4">
                <div className="flex items-center">
                    <h3 className="font-bold text-2xl grow">{props.titleTable}</h3>
                    <ButtonOutline name={"Download"} icon={<CloudDownload />} onClick={() => { downloadCSV(props.data) }} />
                </div>

                <div className="flex input-wrapper relative gap-2 justify-between">
                    <div className="relative w-full">
                        <input title="search" type="text" placeholder="Search"
                            className="border-none py-[8px] ps-[12px] pe-[34px] rounded-xl h-[47.99px] font-medium w-full bg-[#F5F5F5] focus:bg-white outline-blue-400"
                            onChange={(e) => table.getColumn("id")?.setFilterValue(e.target.value)}
                            value={table.getColumn("id")?.getFilterValue() as string ?? ""}
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"><svg stroke="currentColor" fill="none" strokeWidth="2"
                            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                            <path d="M21 21l-6 -6"></path></svg>
                        </div>
                    </div>
                    <ButtonOutline name={"Filter"} icon={<Filter />} onClick={() => handleOpenChange(isOpen)} />
                </div>
                <Table>
                    <FragTableHeader table={table} />
                    <FragTableBody table={table} className="h-[calc(100vh-400px)]" />
                    <FragTableFooter table={table} />
                </Table>
            </div>
        </div >
    );
}