import { BarChart, Box, FileText, Settings, Users } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { PermissionItem } from "./PermissionItem";
import { ButtonOutline, ButtonSolid } from "../commons/ListButton";

export const PermissionSidebar = (props: { isAdd: boolean }) => {
    return <Sheet>
        <SheetTrigger asChild>
            {props.isAdd === true ?
                <button type="button" className="bg-[#58dcc4] hover:bg-[#58dcc4] text-white font-bold rounded-xl px-5 py-2">Create role</button>
                : <button type="button">
                    <span className="flex gap-1 items-center justify-center">
                        <span className="font-bold text-gray-600 hover:text-blue-600">Edit role</span>
                        <span className="text-lg">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12l14 0"></path>
                                <path d="M13 18l6 -6"></path>
                                <path d="M13 6l6 6"></path>
                            </svg>
                        </span>
                    </span></button>
            }
        </SheetTrigger>
        <SheetContent className=" md:max-w-lg lg:max-w-screen-lg">
            <SheetHeader>
                <SheetTitle>Create role</SheetTitle>
                <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4 px-1 min-h-[calc(100vh-150px)]">
                {props.isAdd === true &&
                    <>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="rolename" className="mb-2 text-base">Role name</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border-none focus-visible:ring-blue-500 focus:bg-white focus:border-blue-500" type="text" id="rolename" placeholder="Username" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="desc" className="mb-2 text-base">Description</Label>
                            <textarea className="resize-none bg-gray-100 rounded-xl p-2 border-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none" name="description" id="description" cols={20} rows={5} />
                        </div>
                    </>
                }
                <div className="grid">
                    {props.isAdd === true && <span className="text-gray-500 font-semibold">Permission</span>}
                    <PermissionItem
                        title="User management"
                        description="Access control for user management"
                        icon={Users}
                    />
                    <hr />
                    <PermissionItem
                        title="Products authority"
                        description="Access control for product operations"
                        icon={Box}
                    />
                    <hr />
                    <PermissionItem
                        title="System configurations"
                        description="Access control for system settings"
                        icon={Settings}
                    />
                    <hr />
                    <PermissionItem
                        title="File management"
                        description="Access control for file management"
                        icon={FileText}
                    />
                    <hr />
                    <PermissionItem
                        title="Reports"
                        description="Access control for generating reports"
                        icon={BarChart}
                    />
                </div>
            </div>
            <SheetFooter>
                <SheetClose asChild>
                    <ButtonOutline name={"Cancel"} icon={<></>} />
                </SheetClose>
                {props.isAdd === true ?
                    <ButtonSolid name={"Create"} icon={<></>} /> :
                    <ButtonSolid name={"Update"} icon={<></>} />
                }
            </SheetFooter>
        </SheetContent>
    </Sheet>;
}