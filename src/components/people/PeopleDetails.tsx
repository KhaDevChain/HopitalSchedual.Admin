import { Link, useParams } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Cloud, CreditCard, Dot, Eye, Handshake, Pencil, PhoneOutgoing, Ticket } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import mastercardImage from '../../assets/images/mastercard.png';
import visaImage from '../../assets/images/visa-logo.png';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const PeopleDetails = () => {
    const idParam = useParams();
    console.log(idParam.id);

    return (
        <div className="container mx-auto px-2">
            <div className="flex flex-col xl:flex-row gap-4">
                <div className="flex flex-col bg-white rounded-xl border p-5 min-w-[330px] 2xl:min-w-[400px]">
                    <button type="button" aria-label="btn-edit" className="self-end rounded-full p-2 bg-gray-100 w-fit hover:bg-gray-200">
                        <Link to={"/customer-edit/1"}><Pencil className="p-0.5" /></Link>
                    </button>
                    <div className="flex xl:flex-col items-center gap-4 mt-6">
                        <span className="w-[90px] h-[90px]">
                            <img src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" alt="Profile" className="rounded-full" />
                        </span>
                        <h4 className="font-bold">Angelina Gotelli</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-y-7 gap-x-4 mt-10">
                        {/* reuse component */}
                        <div>
                            <span className="font-semibold text-gray-600">Email</span>
                            <p className="heading-text font-bold">carolyn_h@hotmail.com</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-600">Phone</span>
                            <p className="heading-text font-bold">+12-123-1234</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-600">Date of birth</span>
                            <p className="heading-text font-bold">10/10/1992</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-600">Last Online</span>
                            <p className="heading-text font-bold">12 Aug 2024 09:40 AM</p>
                        </div>
                        <div>
                            <span className="font-normal text-gray-600">Social</span>
                            <div className="flex mt-4 gap-2">
                                {/* reuse component */}
                                <Button className="bg-transparent shadow-none text-blue-600 hover:bg-white hover:border-blue-600 border rounded-xl w-10 h-10"><Handshake /></Button>
                                <Button className="bg-transparent shadow-none text-blue-600 hover:bg-white hover:border-blue-600 border rounded-xl w-10 h-10"><Handshake /></Button>
                                <Button className="bg-transparent shadow-none text-blue-600 hover:bg-white hover:border-blue-600 border rounded-xl w-10 h-10"><Handshake /></Button>
                                <Button className="bg-transparent shadow-none text-blue-600 hover:bg-white hover:border-blue-600 border rounded-xl w-10 h-10"><Handshake /></Button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button className="bg-blue-500 hover:bg-blue-400 rounded-xl h-12">Send Message</Button>
                            <Button className="bg-transparent hover:bg-transparent border hover:border-red-500 text-red-600 rounded-xl h-12">Delete</Button>
                        </div>
                    </div>
                </div>
                <div className="flex-grow bg-white border rounded-xl p-5">
                    <Tabs defaultValue="billing" className="">
                        <TabsList className="grid w-1/4 grid-cols-2 bg-transparent">
                            <TabsTrigger value="billing" className="rounded-none border-b-2 border-slate-50 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-blue-600">Billing</TabsTrigger>
                            <TabsTrigger value="activity" className="rounded-none border-b-2 border-slate-50 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-blue-600">Activity</TabsTrigger>
                        </TabsList>
                        <TabsContent value="billing">
                            <div className="p-4">
                                <h6 className="font-semibold mb-4">Purchase history</h6>
                                <Table>
                                    <TableHeader hidden={true}>
                                        <TableRow>
                                            <TableHead></TableHead>
                                            <TableHead></TableHead>
                                            <TableHead></TableHead>
                                            <TableHead></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {Array.from({ length: 3 }).map((_, idx) =>
                                            <TableRow>
                                                <TableCell className="px-6 py-4">
                                                    Acme pro plan (monthly)
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center">
                                                        <Dot className={" w-14 h-14 " + (idx === 1 ? "text-yellow-300" : "")} />Pending
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    02/10/2025
                                                </TableCell>
                                                <TableCell>
                                                    $59.90
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                                <h6 className="font-semibold mt-4">Addresses</h6>
                                <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row gap-4 mt-4">
                                    <div className="card p-5 border rounded-xl flex-grow">
                                        <div className="font-bold">Billing Address</div>
                                        <div className="mt-4 flex flex-col font-semibold text-gray-600">
                                            <span>123 Main St</span>
                                            <span>New York</span>
                                            <span>10001</span>
                                            <span>United States</span>
                                        </div>
                                    </div>
                                    <div className="card p-5 border rounded-xl flex-grow">
                                        <div className="font-bold">Delivery Address</div>
                                        <div className="mt-4 flex flex-col font-semibold text-gray-600">
                                            <span>123 Main St</span>
                                            <span>New York</span>
                                            <span>10001</span>
                                            <span>United States</span>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="font-semibold mt-4">Payment Methods</h6>
                                <div className="border rounded-xl flex flex-col mt-4">
                                    {/* resuse component */}
                                    <div className="flex p-4 gap-3">
                                        <img src={visaImage} alt="Profile" className="w-[60px]" />
                                        <div className="grid grid-cols-1 items-center flex-grow">
                                            <span className="font-semibold text-sm">Angelina Gotelli •••• 0392<span className="ms-2 py-1 px-2 bg-blue-100 text-blue-500 text-sm rounded-lg">Primary</span></span>
                                            <span className="text-gray-400 text-sm">Expired Dec 2025</span>
                                        </div>
                                        <Button className="bg-white hover:bg-white hover:border-blue-600 hover:text-blue-600 text-gray-600 border shadow-none rounded-xl h-10">Edit</Button>
                                    </div>
                                    <hr className="mx-3" />
                                    <div className="flex p-4 gap-3">
                                        <img src={mastercardImage} alt="Profile" className="w-[60px]" />
                                        <div className="grid grid-cols-1 items-center flex-grow">
                                            <span className="font-semibold text-sm">Angelina Gotelli •••• 0392</span>
                                            <span className="text-gray-400 text-sm">Expired Dec 2025</span>
                                        </div>
                                        {/* <Button className="bg-white hover:bg-white hover:border-blue-600 hover:text-blue-600 text-gray-600 border shadow-none rounded-xl h-10">Edit</Button> */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" className="hover:bg-white hover:border-blue-600 hover:text-blue-600 text-gray-600 shadow-none rounded-xl h-10">Edit</Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[525px]">
                                                <DialogHeader>
                                                    <DialogTitle><h4 className="text-xl">Edit credit card</h4></DialogTitle>
                                                    <DialogDescription>
                                                        {/* Make changes to your profile here. Click save when you're done. */}
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4 py-4">
                                                    <div className="grid w-full items-center gap-1.5">
                                                        <Label htmlFor="username" className="mb-2 text-base">Username</Label>
                                                        <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="username" placeholder="Username" />
                                                    </div>
                                                    <div className="grid w-full items-center gap-1.5">
                                                        <Label htmlFor="username" className="mb-2 text-base">Credit card number</Label>
                                                        <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="password" id="cardnumber" placeholder="... .... .... ...." />
                                                    </div>
                                                    <div className="flex md:flex-row sm:flex-col gap-4">
                                                        <div className="grid lg:w-1/2 sm:w-full items-center gap-1.5">
                                                            <Label htmlFor="city" className="mb-2 text-base">Expiration date</Label>
                                                            <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="expiration-date" placeholder="dd/MM" />
                                                        </div>
                                                        <div className="grid lg:w-1/2 sm:w-full items-center gap-1.5">
                                                            <Label htmlFor="cvv" className="mb-2 text-base">CVV</Label>
                                                            <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="cvv" placeholder="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <Button variant={"outline"} type="submit" className="w-full h-12 rounded-xl bg-blue-500 hover:bg-blue-400 hover:text-white text-white">Update</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>

                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="activity">
                            <div className="p-4">
                                {/* reuse components */}
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-bold">{"07 may".toUpperCase()}</span>
                                            <hr className="h-1 w-11/12 bg-gray-300 border-2 divide-dashed" />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center">
                                                <span className="font-semibold text-gray-400 w-[100px]">{"6:08 PM".toUpperCase()}</span>
                                                <div className="max-w-[600px] w-full border rounded-2xl border-gray-200 flex items-center px-5 py-3 gap-x-4">
                                                    <PhoneOutgoing className="text-blue-500" />
                                                    <div className="grid grid-cols-1">
                                                        <h6 className="font-bold">{"Support Ticket Update"}</h6>
                                                        <p className="text-gray-600 font-medium">{"Customer service team is working on support ticket #123456"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-bold">{"05 may".toUpperCase()}</span>
                                            <hr className="h-1 w-11/12 bg-gray-300 border-2 divide-dashed" />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center">
                                                <span className="font-semibold text-gray-400 w-[100px]">{"10:36 PM".toUpperCase()}</span>
                                                <div className="max-w-[600px] w-full border rounded-2xl border-gray-200 flex items-center px-5 py-3 gap-x-4">
                                                    <PhoneOutgoing className="text-blue-500" />
                                                    <div className="grid grid-cols-1">
                                                        <h6 className="font-bold">{"Support Ticket Update"}</h6>
                                                        <p className="text-gray-600 font-medium">{"Customer service team is working on support ticket #123456"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold text-gray-400 w-[100px]">{"10:16 PM".toUpperCase()}</span>
                                                <div className="max-w-[600px] w-full border rounded-2xl border-gray-200 flex items-center px-5 py-3 gap-x-4">
                                                    <Ticket className="text-blue-500" />
                                                    <div className="grid grid-cols-1">
                                                        <h6 className="font-bold">Support Ticket Update</h6>
                                                        <p className="text-gray-600 font-medium">Customer service team is working on support ticket #123456</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-bold">{"04 may".toUpperCase()}</span>
                                            <hr className="h-1 w-11/12 bg-gray-300 border-2 divide-dashed" />
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center">
                                                <span className="font-semibold text-gray-400 w-[100px]">{"8:06 AM".toUpperCase()}</span>
                                                <div className="max-w-[600px] w-full border rounded-2xl border-gray-200 flex items-center px-5 py-3 gap-x-4">
                                                    <CreditCard className="text-blue-500" />
                                                    <div className="grid grid-cols-1">
                                                        <h6 className="font-bold">{"Payment"}</h6>
                                                        <p className="text-gray-600 font-medium">{"Angelina Gotelli successfully made a payment for the order"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold text-gray-400 w-[100px]">{"7:40 AM".toUpperCase()}</span>
                                                <div className="max-w-[600px] w-full border rounded-2xl border-gray-200 flex items-center px-5 py-3 gap-x-4">
                                                    <Cloud className="text-blue-500" />
                                                    <div className="grid grid-cols-1">
                                                        <h6 className="font-bold">{"Change Plan"}</h6>
                                                        <p className="text-gray-600 font-medium">{"Angelina Gotelli switch to Acme pro plan to anually"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold text-gray-400 w-[100px]">{"6:27 AM".toUpperCase()}</span>
                                                <div className="max-w-[600px] w-full border rounded-2xl border-gray-200 flex items-center px-5 py-3 gap-x-4">
                                                    <Eye className="text-blue-500" />
                                                    <div className="grid grid-cols-1">
                                                        <h6 className="font-bold">{"View Plan"}</h6>
                                                        <p className="text-gray-600 font-medium">{"Angelina Gotelli visit subscription page"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Button className="bg-transparent 
                                        border-2 hover:bg-transparent hover:border-blue-600 
                                        hover:text-blue-600 shadow-none rounded-xl
                                        border-gray-200 text-gray-600 h-12
                                        ">Load More</Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default PeopleDetails;