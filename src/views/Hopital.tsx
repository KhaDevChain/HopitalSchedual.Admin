import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../components/ui/button";
import { ChevronsUpDown, Eye, Pen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom";
import { HopitalTable } from "@/components/hopital/HopitalList";
import { HopitalModel } from "@/models/Hopital.model";
import { ActivateEnum } from "@/types/enum/action.enum";
import { useEffect, useState } from "react";
import HopitalService from "@/services/Hopital.service";

function Hopital() {
    const [listHopital, setHospitals] = useState<HopitalModel[]>([]);

    useEffect(() => {
        const fetchHospitals = async () => {
        const response = await HopitalService.getAll();
            setHospitals(response); // Cập nhật state
        };

        fetchHospitals();
    }, []);

    //header of table
    const columns: ColumnDef<HopitalModel>[] = [
        {
            id: "select",
            accessorKey: "checkbox",
            header: ({ table }) =>
            (<Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all"
                className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-white w-5 h-5" />),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-white w-5 h-5"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant={"ghost"}
                    type="button"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Tên Bệnh viện"}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell: ({ row }) => <div className="flex items-center">
                <img src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
                <a className="ml-2 font-bold">{row.original.name}</a>
            </div>,
        },
        {
            accessorKey: "code",
            header: ({ column }) => (
                <Button
                    variant={"ghost"}
                    type="button"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Mã Bệnh viện"}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell: ({ row }) => <div className="flex items-center">
                <img src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
                <a className="ml-2 font-bold">{row.original.name}</a>
            </div>,
        },
        {
            accessorKey: "email",
            header: ({ column }) => {
                return (<Button
                    type="button"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Email"}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>);
            },
        },
        {
            accessorKey: "location",
            header: "Địa chỉ",
        },
        {
            accessorKey: "status",
            header: ({ column }) => (
                <Button
                    type="button" variant={"ghost"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Trạng thái"}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => {
                return row.original.activated === ActivateEnum.ACTIVE ?
                    (<div className="bg-emerald-200 w-fit py-[4px] px-[10px] rounded-lg font-bold mx-4">
                        <span>Active</span>
                    </div>) :
                    (<div className="bg-red-200 w-fit py-[4px] px-[10px] rounded-lg font-bold mx-4">
                        <span>Inactive</span>
                    </div>)
            }
        },
        {
            accessorKey: "actions",
            header: "",
            cell: ({ row }) => (
            (<div className="flex gap-x-1">
                <Button id={row.id} type="button" className="px-2 bg-transparent shadow-none text-gray-600 hover:bg-none hover:bg-transparent" aria-label="pen">
                    <Link to={`/hopital/contact-edit`}>< Pen /></Link>
                </Button>
                <Button type="button" className="px-2 bg-transparent shadow-none text-gray-600 hover:bg-none hover:bg-transparent" aria-label="eye">
                    <Link to={`/hopital/contact-details`} >< Eye /></Link>
                </Button>
            </div>)
            )
        },
    ];
    // data of table
    return (
        <div className="mx-auto px-2">
            <HopitalTable columns={columns} data={listHopital} />
        </div>
    )
}

export default Hopital;

/** Customer Page
 * Thành phần: 
 * - DataTable: hiển thị danh sách
 * - Detail: hiển thị chi tiết
 * - Edit/Add: cùng 1 giao diện
 */
