import { TableBody, TableRow, TableCell } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

export const FragTableBody = ({ table, className }: { table: Table<any>, className?: string }) => {
  return (
    <TableBody className={className}>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            className="text-gray-600 w-full"
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};