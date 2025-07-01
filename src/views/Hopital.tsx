import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../components/ui/button";
import { PenLine } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom";
import { HopitalTable } from "@/components/hopital/HopitalList";
import { HopitalModel } from "@/models/Hopital.model";
import { ActivateEnum } from "@/types/enum/action.enum";
import { useEffect, useState } from "react";
import HopitalService from "@/services/Hopital.service";
import { Global } from "@/Global";

function Hopital() {
    const [listHopital, setHospitals] = useState<HopitalModel[]>([]);

    useEffect(() => {
        const fetchHospitals = async () => {
            const response = await HopitalService.getAll();            
            // Check if response is valid and contains hopitals
            if (response && response.hopitals && response.code === 200) {
                setHospitals(response.hopitals);
            } else {
                setHospitals([]);
            }
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
            accessorKey: "logo",
            header: "Logo",
            cell: ({ row }) => (
                <img
                    src={Global().baseUrl + "/assets/hopital/" + row.original.logo}
                    alt={row.original.name}
                    className="w-10 h-10 rounded-md object-cover"
                />
            ),
            size: 30,
        },
        {
            accessorKey: "name",
            header: "Tên Bệnh viện",
            cell: ({ row }) => (
            <span className="font-semibold whitespace-normal break-words max-w-xs">
                {row.original.name}
            </span>
            ),
            size: 330,
        },
        {
            accessorKey: "taxCode",
            header: "Mã số thuế",
            cell: ({ row }) => (
            <span className="truncate block max-w-[180px]">{row.original.taxCode}</span>
            ),
            size: 200,
        },
        {
            accessorKey: "address",
            header: "Địa chỉ",
            cell: ({ row }) => (
            <span className="whitespace-normal break-words max-w-sm">
                {row.original.address}
            </span>
            ),
            size: 250,
        },
        {
            accessorKey: "code",
            header: "Mã",
            cell: ({ row }) => <span>{row.original.code}</span>,
        },
        {
            accessorKey: "activated",
            header: "Trạng thái",
            cell: ({ row }) =>
            row.original.activated === ActivateEnum.ACTIVE ? (
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-md font-medium">
                Active
                </span>
            ) : (
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-md font-medium">
                Inactive
                </span>
            ),
            size: 100,
        },
        {
            accessorKey: "actions",
            header: "",
            cell: ({ row }) => (
            <div className="flex gap-2">
                <Link to={`/hopital/contact-edit/${row.original.uniqueId}`}>
                    <Button variant="ghost" size="icon">
                        <PenLine className="w-4 h-4 text-gray-600" />
                    </Button>
                </Link>
            </div>
            ),
            size: 80,
        },
    ];
    // data of table
    return (
        <div className="mx-auto px-2 overflow-x-auto">
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
