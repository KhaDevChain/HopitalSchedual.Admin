import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "../ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const Paginate: React.FC<{ table: any }> = (props) => {
    return <div className="flex justify-between items-center">
        <Pagination className="my-pagination justify-start">
            <PaginationContent>
                <PaginationItem >
                    <Button variant="ghost" type="button" className="cursor-pointer bg-transparent border-none text-gray-900 hover:bg-transparent shadow-none"
                        onClick={props.table.previousPage} disabled={!props.table.getCanPreviousPage()}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                </PaginationItem>

                {Array.from({ length: props.table.getPageCount() }).map((_, idx) =>
                    <PaginationItem key={"paginatie " + idx}>
                        <PaginationLink className="active:text-blue-600 focus:text-blue-600 border-none shadow-none" href="#" onClick={() => props.table.setPageIndex(idx)}
                            isActive={props.table.getState().pagination.pageIndex === idx} >{idx + 1}</PaginationLink>
                    </PaginationItem>
                )}
                <PaginationItem>
                    <Button variant="ghost" type="button" className="cursor-pointer bg-transparent border-none text-gray-900 hover:bg-transparent shadow-none"
                        onClick={props.table.nextPage} disabled={!props.table.getCanNextPage()}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
        <Select defaultValue="10"
            onValueChange={(e: string) => props.table.setPageSize(Number(e))}
        >
            <SelectTrigger className="w-[130px] border-transparent bg-gray-100 data-[state=open]:ring-1 data-[state=open]:ring-blue-600 " title="page">
                <SelectValue placeholder="Page" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="10">10 / page</SelectItem>
                <SelectItem value="25">25 / page</SelectItem>
                <SelectItem value="50">50 / page</SelectItem>
                <SelectItem value="100">100 / page</SelectItem>
            </SelectContent>
        </Select>
    </div>
}