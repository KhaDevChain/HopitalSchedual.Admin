import { ButtonWithNotify } from "@/components/commons/ListButton";
import { ProductTable } from "@/components/product/ProductTable";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ProductModel from "@/models/Product.model";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, Pen, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function Product() {
    //header of table
    const columns: ColumnDef<ProductModel>[] = [
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
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"id".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    {/* <img src={row.original.img} alt="Profile" className="w-14 h-14 rounded-xl" /> */}
                    <div className="grid-cols-1">
                        {/* <div className="font-bold heading-text mb-1">{row.original.name}</div> */}
                        <span> {row.original.id}</span>
                    </div>
                </div>),
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant={"ghost"}
                    type="button"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"name".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    {/* <img src={row.original.img} alt="Profile" className="w-14 h-14 rounded-xl" /> */}
                    <div className="grid-cols-1">
                        <div className="font-bold heading-text mb-1">{row.original.name}</div>
                        {/* <span>  ID: {row.original.id}</span> */}
                    </div>
                </div>),
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant={"ghost"}
                    type="button"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"address".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    {/* <img src={row.original.img} alt="Profile" className="w-14 h-14 rounded-xl" /> */}
                    <div className="grid-cols-1">
                        <div className="font-bold heading-text mb-1">{row.original.name}</div>
                        {/* <span>  ID: {row.original.id}</span> */}
                    </div>
                </div>),
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant={"ghost"}
                    type="button"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"client".toUpperCase()}
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell: ({ row }) => (
                <div className="flex items-end gap-2">
                    {/* <img src={row.original.img} alt="Profile" className="w-14 h-14 rounded-xl" /> */}
                    <div className="grid-cols-1">
                        <div className="font-bold heading-text mb-1">{row.original.name}</div>
                        {/* <span>  ID: {row.original.id}</span> */}
                    </div>
                </div>),
        },
        // {
        //     accessorKey: "price",
        //     header: ({ column }) => {
        //         return (<Button
        //             type="button"
        //             variant="ghost"
        //             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Price".toUpperCase()}
        //             <ChevronsUpDown className="ml-2 h-4 w-4" />
        //         </Button>);
        //     },
        //     cell: ({ row }) => {
        //         const amount = parseFloat(row.getValue("price"))
        //         const formatted = new Intl.NumberFormat("en-US", {
        //             style: "currency",
        //             currency: "USD",
        //         }).format(amount);
        //         return <div className="p-4 font-bold">{formatted}</div>
        //     }
        // },
        // {
        //     accessorKey: "quantity",
        //     header: ({ column }) => (
        //         <Button
        //             variant={"ghost"}
        //             type="button"
        //             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Quantity".toUpperCase()}
        //             <ChevronsUpDown className="ml-2 h-4 w-4" />
        //         </Button>),
        //     cell: ({ row }) => {
        //         return <div className="p-4 font-bold">{row.getValue("quantity")}</div>
        //     }
        // },
        // {
        //     accessorKey: "sales",
        //     header: ({ column }) => (
        //         <Button
        //             type="button" variant={"ghost"}
        //             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"sales".toUpperCase()}
        //             <ChevronsUpDown className="ml-2 h-4 w-4" />
        //         </Button>
        //     ),
        //     cell: ({ row }) => {
        //         return <div className="p-4 font-medium text-gray-500">{row.getValue("sales")} Sales
        //             <Progress className="bg-gray-200" value={row.getValue("sales")} />
        //         </div>
        //     }
        // },
        {
            accessorKey: "actions",
            header: "",
            cell: ({ row }) => {
                return <div className="flex justify-end gap-x-1">
                    <Button type="button" className="px-2 bg-transparent shadow-none text-gray-600 hover:bg-none hover:bg-transparent" aria-label="pen">
                        <Link to={`/products/product-edit/${row.original.id}`} >< Pen /></Link>
                    </Button>
                    <ButtonWithNotify id={row.original.id} icon={< Trash2 size={20} />} />
                </div>
            }
        },
    ];
    // data of table
    const data = ProductModel.fakedata;
    return (
        <div className="mx-auto px-2">
            <ProductTable columns={columns} data={data} titleTable={"Devices"} />
        </div>
    )
}

export default Product;
