import { flexRender } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FragTableHeader = ({ table }: { table: any }) => {
    return (
        <TableHeader>
            {table.getHeaderGroups().map((headerGroup: any) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header: any) => (
                        <TableHead key={header.id}>
                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                    ))}
                </TableRow>
            ))}
        </TableHeader>
    );
};
export default FragTableHeader;