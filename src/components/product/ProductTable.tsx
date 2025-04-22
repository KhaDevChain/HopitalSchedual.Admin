import { ColumnDef, ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import { ButtonOutline, ButtonSolid } from "../commons/ListButton";
import { useState } from "react";
import { Table } from "../ui/table";
import { CloudDownload, Filter, Plus } from "lucide-react";
import './product.css';
import { Link } from "react-router-dom";
import FragTableHeader from "../commons/TableHeader";
import { FragTableBody } from "../commons/TableBody";
import FragTableFooter from "../commons/TableFooter";

interface DataTableProps<TData, TValue, TTitle> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
    titleTable: TTitle
}

export const ProductTable = (props: DataTableProps<any, any, string>) => {

    const [sorting, setSorting] = useState<SortingState>([]); //sorting
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]); //filter
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
    // return <DataTable columns={columns} data={data} titleTable="Products" />
    return <div className="border p-5 bg-white rounded-2xl">
        <div className="flex flex-col gap-4">
            {/* Can reuse component*/}
            <div className="flex items-center">
                <h3 className="font-bold text-2xl grow">{props.titleTable}</h3>
                <ButtonOutline name={"Export"} icon={<CloudDownload />} />
                <Link to={"/products/product-create"}><ButtonSolid name={"Add"} icon={<Plus />} /></Link>
            </div>

            <div className="flex input-wrapper relative gap-2 justify-between">
                <div className="relative w-full">
                    <input title="search" type="text" placeholder="Quick search..."
                        className="border-none py-[8px] ps-[12px] pe-[34px] rounded-xl h-[47.99px] font-medium w-full bg-[#F5F5F5] focus:bg-white outline-blue-400"
                        onChange={(e) => table.getColumn("name")?.setFilterValue(e.target.value)}
                        value={table.getColumn("name")?.getFilterValue() as string ?? ""}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"><svg stroke="currentColor" fill="none" strokeWidth="2"
                        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-lg" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M21 21l-6 -6"></path></svg>
                    </div>
                </div>
                <ButtonOutline name={"Filter"} icon={<Filter />} />
            </div>
            {/*  */}
            <Table>
                {/* <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader> */}
                {/* <TableBody>
                    {table.getRowModel().rows?.length ? (
                        < ProductTableBody table={table} />
                    ) : (
                        <TableRow>
                            <TableCell colSpan={props.columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody> */}

                {/* <TableFooter>
                    <TableRow>
                        <TableCell colSpan={props.columns.length} className="bg-white text-center">
                            <Paginate table={table} />
                        </TableCell>
                    </TableRow>
                </TableFooter> */}
                <FragTableHeader table={table} />
                <FragTableBody table={table} className="h-[calc(100vh-400px)]" />
                <FragTableFooter table={table} />
            </Table>
        </div>
    </div >;
}