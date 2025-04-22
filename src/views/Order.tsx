import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../components/ui/button";
import { ChevronsUpDown, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import OrderModel from "@/models/Order.model";
import { OrderTable } from "@/components/order/OrderTable";

function Order() {
    //header of table
    const columns: ColumnDef<OrderModel>[] = [
        {
            // đây là id của order, khi truyền vào cột thì tên cột là order nhưng sắp xếp sẽ theo id
            accessorKey: "id",
            header: ({ column }) => (
                <Button
                    variant={"ghost"}
                    type="button"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"transaction".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell: ({ row }) => <div className="flex items-center">
                <a className="ml-2 font-bold">#{row.original.id}</a>
            </div>,
        },
        {
            accessorKey: "date",
            header: ({ column }) => {
                return (<Button
                    type="button"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"date".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>);
            },
            cell: ({ row }) => (
                <span className="ml-2 text-gray-500 font-bold">{row.original.date?.toLocaleString()}</span>
            )
        },
        {
            accessorKey: "customer",
            header: ({ column }) => {
                return (<Button
                    type="button"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"customer".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>);
            },
            cell: ({ row }) => (
                <span className="ml-2 text-gray-500 font-bold">{row.original.customer?.name}</span>
            )
        },
        // {
        //     accessorKey: "status",
        //     header: ({ column }) => (
        //         <Button
        //             type="button" variant={"ghost"}
        //             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Status".toUpperCase()}
        //             <ChevronsUpDown className="ml-2 h-4 w-4" />
        //         </Button>
        //     ),
        //     cell: ({ row }) => {
        //         return row.original.status === true ?
        //             (<div className="bg-emerald-200 w-fit py-[4px] px-[10px] rounded-lg font-bold ml-2">
        //                 <span>Paid</span>
        //             </div>) :
        //             (<div className="bg-red-200 w-fit py-[4px] px-[10px] rounded-lg font-bold ml-2">
        //                 <span>Failed</span>
        //             </div>)
        //     }
        // },
        {
            accessorKey: "payment",
            header: ({ column }) => (
                <Button
                    type="button" variant={"ghost"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"payment method".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({  }) =>
                <div className="flex items-center gap-2">
                    <span className="ml-2 font-semibold">CASH</span>
                </div>
        },
        {
            accessorKey: "total",
            header: ({ column }) => (
                <Button
                    type="button" variant={"ghost"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"amount".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => {
                const total = parseFloat(row.getValue("total"));
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(total);
                return <span className="ml-2 font-semibold">{formatted}</span>
            }
        },
        {
            accessorKey: "actions",
            header: "",
            cell: ({ row }) => {
                return <div className="flex justify-end gap-x-1">
                    <Button type="button" className="px-2 bg-transparent shadow-none text-gray-600 hover:bg-none hover:bg-transparent" aria-label="pen">
                        <Link to={`/transactions/transaction-edit/${row.original.id}`} >< Eye /></Link>
                    </Button>
                </div>
            }
        },
    ];
    // data of table
    const data = OrderModel.fakedata;
    return (
        <div className="mx-auto px-2">
            <OrderTable columns={columns} data={data} titleTable={"Transactions"} />
        </div>
    )
}

export default Order;