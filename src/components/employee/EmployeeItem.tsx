import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { ArrowLeft, Trash2 } from "lucide-react";
import { StackedInput } from "../commons/ListInput";
import { Link } from "react-router-dom";
const EmployeeItem = ({ id }: { id?: any }) => {
    return (
        <>
            <div className="mx-auto px-2">
                <h3 className="font-bold text-2xl mb-4">{id ? "Edit employee" + id : "Create employee"}</h3>
                <form action="POST" className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-260px)] gap-4">
                    <div className="w-full lg:w-9/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Overview</h4>
                            <div className="flex flex-col lg:flex-row gap-4 w-auto mb-7">
                                <StackedInput id="firstname" label="Firstname" placeholder="Firstname" />
                                <StackedInput id="username" label="Username" placeholder="Username" />
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
                                            <SelectItem value="light">Vietnam</SelectItem>
                                            <SelectItem value="dark">Campuchia</SelectItem>
                                            <SelectItem value="system">Laos</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="phone" id="phone" placeholder="Phone Number" />
                                </div>
                            </div>
                        </div>
                        {/* Section 2 Address Information*/}
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Address Information</h4>
                            <div className="flex gap-4 w-auto mb-7">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="country">Country</Label>
                                    <Select>
                                        <SelectTrigger className="h-12 w-full bg-gray-100 rounded-xl border-transparent">
                                            <SelectValue placeholder="Country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">Vietnam</SelectItem>
                                            <SelectItem value="dark">Campuchia</SelectItem>
                                            <SelectItem value="system">Laos</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="address">Address</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="address" placeholder="Address" />
                            </div>
                            <div className="flex lg:flex-row sm:flex-col gap-4">
                                <div className="grid lg:w-1/2 sm:w-full items-center gap-1.5">
                                    <Label htmlFor="city">City</Label>
                                    <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="city" placeholder="City" />
                                </div>
                                <div className="grid lg:w-1/2 sm:w-full items-center gap-1.5">
                                    <Label htmlFor="postalcode">Postal Code</Label>
                                    <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="postalcode" placeholder="Postal Code" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Image</h4>
                            <div className="rounded-xl bg-gray-100 place-items-center p-3">
                                <img src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" alt="Profile" className="w-1/3 h-1/3 rounded-full border-4 border-white" />
                                <Button className="my-3 h-12 bg-blue-600 data-[state=hover]:bg-blue-500 hover:bg-blue-500 rounded-xl">Upload Image</Button>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Customer Tags</h4>
                            <div className="rounded-xl bg-gray-100">
                                <Select>
                                    <SelectTrigger className="h-12 w-full rounded-xl border-none">
                                        <SelectValue placeholder="Add tags for customer" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="frequentshoppers">Frequent Shoppers</SelectItem>
                                        <SelectItem value="inactive">Inactive</SelectItem>
                                        <SelectItem value="new">New</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Account</h4>
                            <div className="flex flex-col gap-4 rounded-xl">
                                <div className="flex items-center">
                                    <div className="grid flex-grow items-center gap-1.5">
                                        <h4 className="font-bold">Banned</h4>
                                        <span className="text-sm text-gray-600">Disable this account</span>
                                    </div>
                                    <Switch aria-label="switch-banned" className="data-[state=checked]:bg-blue-600 h-6" />
                                </div>
                                <div className="flex items-center">
                                    <div className="grid flex-grow items-center gap-1.5">
                                        <h4 className="font-bold">Account Verified</h4>
                                        <span className="teclassNam w-5/6 text-sm text-gray-600">Disabling sends a verification request to the customer.</span>
                                    </div>
                                    <Switch aria-label="switch-verified" className="data-[state=checked]:bg-blue-600 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <br />

            </div>
            <div className="bg-white p-6 w-[calc(100vw - 400px)] mx-[-23px] mb-[-90px]" style={{ position: "sticky", bottom: -23 }}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                        <ArrowLeft className="p-1 me-1" />
                        <Link to={"/employees/employee-list"}><span className="font-bold">Back</span></Link> 
                    </div>
                    <div className="flex">
                        <Button className="h-12 rounded-xl mr-3 bg-transparent text-red-500 border-2 border-red-500 shadow-none hover:bg-white"><Trash2 />Delete</Button>
                        <Button className="h-12 rounded-xl px-4 bg-blue-500 text-white border-2 border-blue-500 shadow-none hover:bg-blue-400">Save</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeItem;