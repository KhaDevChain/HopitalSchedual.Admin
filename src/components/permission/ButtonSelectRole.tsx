import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export const ButtonSelectRole = () => {
    return (
        <Select>
            <SelectTrigger className="border-none font-bold text-gray-500 rounded-xl h-10 bg-[#F5F5F5] min-w-[150px]
              hover:ring-blue-600 data-[state=open]:ring-2 data-[state=open]:bg-white data-[state=open]:ring-blue-600 focus:ring-2 focus:bg-white focus:ring-blue-600">
                <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="admin" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">Admin</SelectItem>
                <SelectItem value="supervisor" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">Supervisor</SelectItem>
                <SelectItem value="support" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">Support</SelectItem>
                <SelectItem value="auditor" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">Auditor</SelectItem>
                <SelectItem value="guest" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">Guest</SelectItem>
            </SelectContent>
        </Select>
    );
}