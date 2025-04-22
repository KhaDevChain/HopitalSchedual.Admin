import CustomerModel from "@/models/Customer.model";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../components/ui/button";
import { ChevronsUpDown, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ClientModel from "@/models/client/Client.model";
import EmployeeCheckTable from "@/components/employee/EmployeeCheck";

function Employee() {
    //header of table
    const columns: ColumnDef<CustomerModel>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant={"ghost"}
                    type="button"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Name".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell: ({ row }) => <div className="flex items-center">
                <a className="ml-2 font-bold">{row.original.name}</a>
            </div>,
        },
        {
            accessorKey: "location",
            header: "Location".toUpperCase(),
        },
        {
            accessorKey: "status",
            header: ({ column }) => (
                <Button
                    type="button" variant={"ghost"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Checkin".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: () => {
                return (<div className="bg-emerald-200 w-fit py-[4px] px-[10px] rounded-lg font-bold mx-4">
                        <span>03-22-2025 15:00:20</span>
                    </div>)
            }
        },
        {
            accessorKey: "status",
            header: ({ column }) => (
                <Button
                    type="button" variant={"ghost"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"CHECKOUT".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: () => {
                return (<div className="bg-red-200 w-fit py-[4px] px-[10px] rounded-lg font-bold mx-4">
                        <span>03-22-2025 15:00:20</span>
                    </div>)
            }
        },
        {
            accessorKey: "actions",
            header: "",
            cell: ({ row }) =>
            (<div className="flex gap-x-1">
                <Button type="button" className="px-2 bg-transparent shadow-none text-gray-600 hover:bg-none hover:bg-transparent" aria-label="eye">
                    <Link to={`/employees/employee-details/${row.original.id}`} >< Eye /></Link>
                </Button>
            </div>)
        },
    ];
    // data of table
    const data = ClientModel.fakedata;
    return (
        <div className="mx-auto px-2">
            <EmployeeCheckTable columns={columns} data={data} />
        </div>
    )
}

export default Employee;
