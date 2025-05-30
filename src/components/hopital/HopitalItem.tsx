import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { ArrowLeft } from "lucide-react";
import { StackedInput } from "../commons/ListInput";
import { useRef, useState } from "react";
const HopitalItem = ({ id }: { id?: any }) => {
    const [imageSrc, setImageSrc] = useState("https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"); // Default image
    const fileInputRef = useRef<HTMLInputElement>(null); // Reference to the file input

    // Handle file selection and update image src
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file); // Create a local URL for the selected image
        setImageSrc(imageUrl); // Update the image src
        }
    };

    // Trigger file input click
    const handleButtonClick = () => {
        fileInputRef.current?.click(); // Programmatically click the hidden file input
    };


    const [isDragging, setIsDragging] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    // Handle drag events
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) handleFiles(files);
    };

    // Handle file input change
    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) handleFiles(files);
    };

    // Simulate file upload process
    const [hidden, setHidden] = useState(false);
    const [contractName, setContractName] = useState("");
    const handleFiles = (files: FileList) => {
        setIsUploading(true);
        setProgress(0);

        // Simulate upload progress (replace with actual upload logic)
        const interval = setInterval(() => {
        setProgress((prev) => {
            if (prev >= 100) {
                clearInterval(interval);
                setIsUploading(false);
                setHidden(true);
                setContractName(files[0].name); // Store the name of the uploaded file
                return 100;
            }
            return prev + 10;
        });
        }, 500);
    };
    
    return (
        <>
            <div className="mx-auto">
                <h3 className="font-bold text-2xl mb-4">{id ? "Chỉnh sửa bệnh viện " + id : "Tạo mới bệnh viện"}</h3>
                <form action="POST" className="flex flex-col lg:flex-row w-full h-full gap-4 min-h-screen ">
                    <div className="w-full lg:w-9/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Tổng quan</h4>
                            <div className="flex flex-col lg:flex-row gap-4 w-auto mb-7">
                                <StackedInput id="hopitalName" label="Tên bệnh viện" placeholder="* nhập tên bệnh viện" isRequired={true} />
                                <StackedInput id="hopitalCode" label="Mã bệnh viện" placeholder="* nhập mã bệnh viện" isRequired={true} />
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="hopitalAddress">Địa chỉ bệnh viện <span className="text-red-500">*</span></Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="hopitalAddress" placeholder="* nhập địa chỉ bệnh viện" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="hopitalEmail">Email</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="email" id="hopitalEmail" placeholder="* nhập email" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="phone">Loại bệnh viện <span className="text-red-500">*</span></Label>
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <Select>
                                        <SelectTrigger className="h-12 lg:w-1/6 sm:w-full rounded-xl bg-gray-100 border focus-visible:ring-blue-500 focus:border-blue-500 focus:bg-white">
                                            <SelectValue placeholder="- Chọn loại -" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Nhà nước</SelectItem>
                                            <SelectItem value="2">Tư nhân</SelectItem>
                                            <SelectItem value="3">Công lập</SelectItem>
                                            <SelectItem value="4">Quốc tế</SelectItem>
                                            <SelectItem value="5">Phòng khám</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="phone" id="hopitalWeb" placeholder="* nhập địa chỉ website" />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 w-auto mb-7">
                                <StackedInput id="hopitalTax" label="Mã số thuế" placeholder="* nhập mã số thuế" isRequired={true} />
                                <div className="flex w-full lg:flex-row gap-4 w-auto">
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="hopitalOpen">Mở cửa vào</Label>
                                        <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="time" id="hopitalOpen" />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="hopitalClose">Đóng cửa vào</Label>
                                        <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="time" id="hopitalClose" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="hopitalEmail">Hợp đồng hợp tác</Label>
                                <div className="p-4 border rounded-lg">
                                <div className="mb-4">
                                    <label className="block text-sm text-gray-600">
                                    Tải ảnh lên album hiện có hoặc tạo album mới:
                                    </label>
                                    <div className="flex items-center">
                                    {
                                        hidden && (
                                            <div
                                                id="fileInput"
                                                className="flex-1 p-2 mt-2 border rounded-l-md font-bold text-red-400"
                                            >
                                                {contractName}
                                            </div>
                                        )
                                    }
                                    </div>
                                </div>

                                <div
                                    className={`border-2 border-dashed p-6 text-center rounded-lg ${
                                    isDragging ? "bg-blue-50 border-blue-300" : "bg-gray-50 border-gray-300"
                                    }`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById("hopitalContract")?.click()}
                                >
                                    <div className="flex justify-center mb-2">
                                    <svg
                                        width="50"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                    </svg>
                                    </div>
                                    <p className="text-gray-600">Kéo tệp vào đây để tải lên hoặc nhấp để chọn tệp</p>
                                    <p className="text-xs text-gray-500">
                                        Bằng cách tải lên những hình ảnh này, bạn chứng nhận rằng bạn được phép chia sẻ chúng.
                                    </p>
                                    <input
                                        id="hopitalContract"
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileInput}
                                        multiple
                                    />
                                </div>

                                {isUploading && (
                                    <div className="mt-4">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-gray-500 rounded-full animate-spin mr-2"></div>
                                        <span>Đang tải lên...</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                                        <div
                                        className="bg-green-500 h-4 rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <button
                                        className="mt-2 text-blue-500 hover:underline"
                                        onClick={() => {
                                            setIsUploading(false);
                                            setProgress(0);
                                        }}
                                    >
                                        Dừng lại
                                    </button>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                        {/* Section 2 Address Information*/}
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Người đại diện</h4>
                            <div className="flex gap-4 w-auto mb-7">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="cpName">Họ và tên</Label>
                                    <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="cpName" placeholder="* nhập họ và tên người đại diện" />
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="cpPhone">Số điện thoại</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="cpPhone" placeholder="* nhập số điện thoại" />
                            </div>
                            
                            <div className="grid w-full items-center gap-1.5 mb-7">
                                <Label htmlFor="cpJob">Vị trí công việc</Label>
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="cpJob" placeholder="* nhập vị trí vai trò" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Ảnh đại diện</h4>
                            <div className="rounded-xl bg-gray-100 place-items-center p-3">
                                <img
                                    src={imageSrc}
                                    alt="Profile"
                                    className="w-1/3 h-1/3 rounded-full border-4 border-white"
                                    />
                                <Input
                                    ref={fileInputRef} // Attach the ref to the input
                                    className="hidden" // Hide the input
                                    type="file"
                                    id="hopitalLogo"
                                    accept="image/*" // Restrict to image files
                                    onChange={handleFileChange} // Handle file selection
                                />
                                <button
                                    type="button"
                                    onClick={handleButtonClick} // Trigger file input click
                                    className="my-3 text-white font-semibold p-2 h-12 bg-blue-600 data-[state=hover]:bg-blue-500 hover:bg-blue-500 rounded-xl"
                                    >
                                    Tải hình ảnh
                                </button>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-gray-200">
                            <h4 className="font-bold text-xl mb-6">Hiệu lực</h4>
                            <div className="flex flex-col gap-4 rounded-xl">
                                <div className="flex items-center">
                                    <div className="grid flex-grow items-center gap-1.5">
                                        <h4 className="font-bold">Vô hiệu lực</h4>
                                        <span className="text-sm text-gray-600">Vô hiệu hóa tài khoản</span>
                                    </div>
                                    <Switch aria-label="switch-banned" id="hopitalActivated" className="data-[state=checked]:bg-blue-600 h-6" />
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
                            <a href="/hopital/list" className="font-bold">Trở lại</a>
                        </div>
                        <div className="flex">
                            <Button className="h-12 rounded-xl px-4 bg-blue-500 text-white border-2 border-blue-500 shadow-none hover:bg-blue-400">Lưu lại thông tin</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HopitalItem;