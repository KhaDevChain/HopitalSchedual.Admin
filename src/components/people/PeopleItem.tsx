import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { ArrowLeft, Trash2 } from "lucide-react";
import { StackedInput } from "../commons/ListInput";
const PeopleItem = ({ id }: { id?: any }) => {
    return (
        <>
            <div className="mx-auto">
                <h3 className="font-bold text-2xl mb-4">{id ? "Edit client " + id : "Create client"}</h3>
                <form action="POST" className="flex flex-col lg:flex-row w-full h-full gap-4 min-h-screen ">
                    <div className="w-full lg:w-9/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Overview</h4>
                            <div className="flex flex-col lg:flex-row gap-4 w-auto mb-7">
                                <StackedInput id="firstname" label="Firstname" placeholder="Firstname" />
                                <StackedInput id="lastname" label="Lastname" placeholder="Lastname" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="position">Position</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="position" placeholder="Position" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="email">Email</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="phone">Phone number</Label>
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <Select>
                                        <SelectTrigger className="h-12 lg:w-1/6 sm:w-full rounded-xl bg-gray-100 border focus-visible:ring-blue-500 focus:border-blue-500">
                                            <SelectValue placeholder="Phone" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">United State</SelectItem>
                                            <SelectItem value="dark">Potugal</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="phone" id="phone" placeholder="Phone Number" />
                                </div>
                            </div>
                        </div>
                        {/* Section 2 Address Information*/}
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Information</h4>
                            <div className="flex gap-4 w-auto mb-7">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="cpName">Company Name</Label>
                                    <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="cpName" placeholder="Company Name" />
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="website">Website</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="website" placeholder="Website" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="creation">Creation Date</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="datetime-local" id="creation" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Avatar</h4>
                            <div className="rounded-xl bg-gray-100 place-items-center p-3">
                                <img src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" alt="Profile" className="w-1/3 h-1/3 rounded-full border-4 border-white" />
                                <Button className="my-3 h-12 bg-blue-600 data-[state=hover]:bg-blue-500 hover:bg-blue-500 rounded-xl">Upload Image</Button>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Verify</h4>
                            <div className="flex flex-col gap-4 rounded-xl">
                                <div className="flex items-center">
                                    <div className="grid flex-grow items-center gap-1.5">
                                        <h4 className="font-bold">Banned</h4>
                                        <span className="text-sm text-gray-600">Inactive this account</span>
                                    </div>
                                    <Switch aria-label="switch-banned" className="data-[state=checked]:bg-blue-600 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <br /><br />
                <div className="bg-white p-5 w-[calc(100%+64px)] bg-red-100 mx-[-32px] my-[-22px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                            <ArrowLeft className="p-1 me-1" />
                            <span className="font-bold">Back</span>
                        </div>
                        <div className="flex">
                            <Button className="h-12 rounded-xl mr-3 bg-transparent text-red-500 border-2 border-red-500 shadow-none hover:bg-white"><Trash2 />Delete</Button>
                            <Button className="h-12 rounded-xl px-4 bg-blue-500 text-white border-2 border-blue-500 shadow-none hover:bg-blue-400">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PeopleItem;