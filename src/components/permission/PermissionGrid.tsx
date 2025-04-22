import { ButtonOutline, ButtonSolid } from "@/components/commons/ListButton";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog";
import { BarChart, Box, FileText, Settings, Users } from "lucide-react";
import { PermissionCard } from "./PermissionCard";
import { PermissionItem } from "./PermissionItem";
import { PermissionSidebar } from "./PermissionSidebar";

export const PermissionGrid = () => {
    return <div className="p-5 bg-white rounded-t-2xl">
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Roles &amp; Permissions</h3>
            <Dialog>
                <PermissionSidebar isAdd={true} />
                <DialogContent className="max-w-[990px]">
                    <div>
                        <DialogHeader>
                            <DialogTitle className="text-xl font-bold">Create role</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                    </div>
                    <div className="grid gap-4 py-4 px-1 max-h-[550px] overflow-y-auto">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="rolename" className="mb-2 text-base">Role name</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border-none focus-visible:ring-blue-500 focus:bg-white focus:border-blue-500" type="text" id="rolename" placeholder="Username" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="desc" className="mb-2 text-base">Description</Label>
                            <textarea className="resize-none bg-gray-100 rounded-xl p-2 border-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none" name="description" id="description" cols={20} rows={5} />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="text-gray-500 font-semibold">Permission</span>
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
                    <DialogFooter>
                        <DialogClose asChild>
                            <ButtonOutline name={"Cancel"} icon={<></>} />
                        </DialogClose>
                        <ButtonSolid name={"Create"} icon={<></>} />
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* component card */}
            {Array.from({ length: 7 }).map((_, idx) =>
                <PermissionCard key={`card_permission_${idx}`} />
            )}
        </div>
    </div >

}