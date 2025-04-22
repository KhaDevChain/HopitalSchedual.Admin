import { ButtonSelectRole } from '@/components/permission/ButtonSelectRole';
import { PermissionGrid } from '@/components/permission/PermissionGrid';
import { PermissionTable } from '@/components/permission/PermissionTable';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import CustomerModel from '@/models/Customer.model';
import { ColumnDef } from '@tanstack/react-table';
import { ChevronsUpDown } from 'lucide-react';

export default function RoleAndPermission() {
  //header of table
  const columns: ColumnDef<CustomerModel>[] = [
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
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Name".toUpperCase()}
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>),
      cell: ({ row }) => <div className="flex items-center">
        <img src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
        <a className="ml-2 font-bold w-16">{row.original.name}</a>
      </div>,
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Button
          type="button" variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"Status".toUpperCase()}
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        return row.original.status === true ?
          (<div className="bg-emerald-200 w-fit py-[4px] px-[10px] rounded-lg font-bold mx-4">
            <span>Active</span>
          </div>) :
          (<div className="bg-red-200 w-fit py-[4px] px-[10px] rounded-lg font-bold mx-4">
            <span>Inactive</span>
          </div>)
      }
    },
    {
      accessorKey: "email",
      header: ({ column }) =>
      (<Button
        type="button"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>{"last online".toUpperCase()}
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
      ),
      cell: ({ }) => {
        return <div className='ml-4 flex flex-col'>
          <span className='font-semibold'>August, 12 2024</span>
          <small>09:40 AM</small>
        </div>
      }
    },
    {
      accessorKey: "location",
      header: "role".toUpperCase(),
      cell: ({ }) => {
        return (
          <div className='w-1/4'>
            <ButtonSelectRole />
          </div>
        )
      }
    }
  ];
  // data of table
  const data = CustomerModel.fakedata;
  return (
    <>
      <div className="mx-auto px-2">
        <PermissionGrid />
        <PermissionTable columns={columns} data={data} />
      </div>
    </>
  )
}
