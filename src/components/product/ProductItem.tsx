import { useParams } from "react-router-dom";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
const ProductItem = () => {
    const idParam = useParams();
    console.log(idParam.id);
    return (<>
        <div className="mx-auto px-2">
            <h3 className="font-bold text-2xl mb-4">{idParam !== null && idParam.id !== undefined ? `Edit device ${idParam.id}` : 'Create device'}</h3>
            <form action="POST" className="flex flex-col mb-20 lg:flex-row w-full gap-4 min-h-[calc(100vh-340px)]">
                <div className="w-full lg:w-9/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
                    <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-xl mb-6">Basic Information</h4>

                        <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label className="text-gray-600" htmlFor="product-code">Device id</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="device-id" placeholder="Device Id" />
                        </div>
                        <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label className="text-gray-600" htmlFor="product-name">Device name</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="device-name" placeholder="Device name" />
                        </div>
                        <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label className="text-gray-600" htmlFor="product-name">Address</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="device" placeholder="Address" />
                        </div>
                        <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label className="text-gray-600" htmlFor="description">Description</Label>
                            <textarea className="resize-none bg-gray-100 rounded-xl p-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none" name="description" id="description" cols={30} rows={10} />
                        </div>
                    </div>
                    {/* Section 2 Pricing*/}
                    {/* <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-xl mb-6">Pricing</h4>
                        <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label htmlFor="price">Price</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="number" id="price" placeholder="0.00" />
                        </div>
                        <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label htmlFor="cost-price">Cost price</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="number" id="cost-price" placeholder="0.00" />
                        </div>

                        <div className="flex lg:flex-row sm:flex-col gap-4">
                            <div className="grid lg:w-1/2 sm:w-full items-center gap-1.5">
                                <Label htmlFor="bulk-discount-price">Bulk discount price</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="number" id="bulk-discount-price" placeholder="0.00" />
                            </div>
                            <div className="grid lg:w-1/2 sm:w-full items-center gap-1.5">
                                <Label htmlFor="tax-rate">Tax rate(%)</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="number" id="tax-rate" placeholder="0.00" />
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="w-full lg:w-3/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
                    {/* <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-xl mb-2">Product Image</h4>
                        <p className="text-gray-500 text-sm">Choose a product photo or simply drag and drop up to 5 photos here.</p>
                        <div className="grid grid-cols-3 gap-2 mt-4 mb-4">
                            {Array.from({ length: 4 }).map((_, idx) =>
                            (<div key={'img_' + idx} className="border rounded-lg border-gray-200 p-2">
                                <img className="rounded-lg max-h-[110px] mx-auto max-w-full dark:bg-transparent" src="https://ecme-react.themenate.net/img/products/product-1-2.jpg" alt="product image" />
                            </div>))}
                            <div className="border-2 border-dashed rounded-lg border-gray-200 p-2 cursor-pointer place-content-center hover:border-blue-500">
                                <p className="text-center text-wrap text-xs">Drop your image here !</p>
                                <div className="rounded-lg max-h-[110px] mx-auto max-w-full dark:bg-transparent" />
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm">Image formats: .jpg, .jpeg, .png, preferred size: 1:1, file size is restricted to a maximum of 500kb.</p>
                    </div> */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-xl mb-6">Attribute</h4>
                        <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label className="text-gray-600" htmlFor="category">Client</Label>
                            <Select>
                                <SelectTrigger className="bg-gray-50 h-12 rounded-xl border 
                            focus-visible:ring-blue-500 focus:border-blue-500 data-[state=open]:bg-white">
                                    <SelectValue placeholder="Choose client" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="client1" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">Client 1</SelectItem>
                                    <SelectItem value="client2" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">Client 2</SelectItem>
                                    <SelectItem value="client3" className="my-2 py-3 font-bold text-gray-500 focus:bg-blue-50 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600">Client 3</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* <Input className="bg-gray-100 h-12 rounded-xl border 
                            focus-visible:ring-blue-500 focus:border-blue-500"
                                type="text" id="product-code" placeholder="Product Code" /> */}
                        </div>
                        {/* <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label className="text-gray-600" htmlFor="tags">Tags</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border 
                            focus-visible:ring-blue-500 focus:border-blue-500"
                                type="text" id="tags" placeholder="Tags" />
                        </div>
                        <div className="grid w-full items-center gap-1.5 mb-7">
                            <Label className="text-gray-600" htmlFor="brand">Brand</Label>
                            <Input className="bg-gray-100 h-12 rounded-xl border 
                            focus-visible:ring-blue-500 focus:border-blue-500"
                                type="text" id="brand" placeholder="Brand" />
                        </div> */}
                    </div>
                </div>
            </form>
            <br />
        </div>
        <div className="bg-white p-6 w-[calc(100vw - 400px)] mx-[-23px] mb-[-90px]" style={{ position: "sticky", bottom: -23 }}>
            <div className="flex items-center justify-between px-8">
                <div className="flex items-center text-gray-600">
                    <ArrowLeft className="p-1 me-1" />
                    <span className="font-bold">Back</span>
                </div>
                <div className="flex">
                    <Button className="h-12 w-28 rounded-xl mr-3 bg-transparent text-red-500 border-2 border-red-500 shadow-none hover:bg-white"><Trash2 />Delete</Button>
                    <Button className="h-12 w-28 rounded-xl bg-blue-500 text-white border-2 border-blue-500 shadow-none hover:bg-blue-400">Save</Button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProductItem;