import { Checkbox } from "../ui/checkbox";
import { TableCell, TableRow } from "../ui/table";
import { flexRender, Table } from "@tanstack/react-table";

export const ProductTableBody: React.FC<{
    table: Table<any>
}> = (props) => {
    return props.table.getRowModel().rows.map((row) => (
        <TableRow
            className="text-gray-600"
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
        >
            {row.getVisibleCells().map((cell, index: number) => (
                <TableCell key={cell.id}>
                    {
                        index === 0 ?
                            <Checkbox aria-label="check-row"
                                className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-white w-5 h-5"
                                checked={row.getIsSelected()}
                                onCheckedChange={row.getToggleSelectedHandler()} /> :
                            (flexRender(cell.column.columnDef.cell, cell.getContext()))
                    }
                </TableCell>
            ))}
        </TableRow>
    ));
}