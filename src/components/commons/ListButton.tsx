import { ExcelIcon, JsonIcon } from "../icons/Icons";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button"
import { ReactNode, useState } from "react"
import { Global } from "@/Global";
import { Hospital, readHospitalExcelFile } from "@/utils/uploadfile.util";

// loại button có màu nền
export const ButtonSolid = (props: { name: string, icon: ReactNode, onClick?: () => void }) => {
  return <Button onClick={props.onClick} variant={"destructive"} type="button" className="ms-3 h-12 px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 ">
    {props.icon}
    <span>{props.name}</span>
  </Button>;
}

// loại không màu nền chỉ có màu viền
export const ButtonOutline = (props: { name: string, icon: ReactNode, onClick?: () => void }) => {
  return <Button onClick={props.onClick} variant={"outline"} type="button" className="ms-3 h-12 px-5 py-2 rounded-xl text-gray-600 hover:text-blue-600 hover:border-blue-600  hover:bg-white ">
    {props.icon}
    <span>{props.name}</span>
  </Button>
}

export const ButtonWithNotify = (props: { id: string, icon: React.ReactElement }) => {
  return <AlertDialog>
    <AlertDialogTrigger>{props.icon}</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to remove this product id {props.id}? This action can't be undo
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-blue-500 shadow-none hover:bg-blue-400">Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
}

export const ButtonChooseDownload = (props: {
  id: string;
  icon: React.ReactElement;
  name: string;
  url?: string;
  onDownload: (type: "excel" | "json", id: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<"excel" | "json" | null>(null);

  const handleDownload = (url:string) => {
    if (selectedType) {
      props.onDownload(selectedType, props.id);
      console.log(`Downloading ${props.id} as ${selectedType} from ${url}`);
      setOpen(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} variant={"outline"} type="button" className="ms-3 h-12 px-5 py-2 rounded-xl text-gray-600 hover:text-blue-600 hover:border-blue-600  hover:bg-white ">
        {props.icon}
        <span>{props.name}</span>
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Chọn định dạng mà bạn muốn tải về</AlertDialogTitle>
            <AlertDialogDescription>
              Vui lòng chọn định dạng tải về cho dữ liệu của bạn
            </AlertDialogDescription>
            <br />
            <AlertDialogDescription className="flex justify-center gap-3">
              <button onClick={() => setSelectedType("excel")} className={`p-2 w-full flex items-center font-bold shadow-md rounded ${selectedType === "excel" ? "bg-gray-100" : ""}`}>
                <ExcelIcon size={48} /> Tải dạng Excel
              </button>
              <button onClick={() => setSelectedType("json")} className={`p-2 w-full flex items-center font-bold shadow-md rounded ${selectedType === "json" ? "bg-gray-100" : ""}`}>
                <JsonIcon size={40} /> Tải dạng Json
              </button>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
            <AlertDialogAction
              onClick={
                () => handleDownload(
                  `${props.id}.${selectedType === "excel" ? "xlsx" : "json"}`
                )
              }
              disabled={!selectedType}
              className="bg-blue-500 shadow-none hover:bg-blue-400"
            >
              Đồng ý
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>

  );
};

export const ButtonChooseUpload = (props: {
  id: string;
  icon: React.ReactElement;
  name: string;
  url?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("File selected:", file.name);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Vui lòng chọn file trước khi upload.");
      return;
    }
    try {
      const hospitals = await readHospitalExcelFile(selectedFile);
      setHospitals(hospitals);
      console.log("Dữ liệu bệnh viện:", hospitals);
    } catch (error) {
      console.error("Lỗi đọc file:", error);
    }
  };

  const handleLogoUpload = (index: number, file: File) => {
    console.log("Upload logo cho dòng", index, "file:", file.name);
    // TODO: Xử lý upload thực tế ở đây
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        type="button"
        className="ms-3 h-12 px-5 py-2 rounded-xl text-gray-600 hover:text-blue-600 hover:border-blue-600 hover:bg-white"
      >
        {props.icon}
        <span>{props.name}</span>
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>Tải danh sách bệnh viện bằng Excel</AlertDialogTitle>
            <AlertDialogDescription>
              Tải file mẫu và chọn file đúng định dạng để hiển thị dữ liệu.
            </AlertDialogDescription>

            <div className="mt-4 flex justify-center">
              <a
                href={Global().baseUrl + "/assets/hopital/Hopital_thong_tin.xlsx"}
                download
                className="p-2 flex items-center gap-2 font-bold bg-gray-100 hover:bg-gray-200 rounded shadow"
              >
                <ExcelIcon size={32} />
                Tải danh sách Excel mẫu
              </a>
            </div>

            <div className="mt-6 border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <p className="text-lg font-semibold mb-2">Chọn File Excel</p>
              <p className="text-sm text-gray-500 mb-4">Chỉ hỗ trợ định dạng: .xlsx</p>

              <label
                htmlFor="fileUpload"
                className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-md cursor-pointer hover:bg-blue-500"
              >
                Chọn File
              </label>
              <input
                id="fileUpload"
                type="file"
                accept=".xlsx"
                onChange={handleFileChange}
                className="hidden"
              />
              {selectedFile && (
                <p className="text-sm text-green-600 mt-2">Đã chọn: {selectedFile.name}</p>
              )}
            </div>

            {/* Bảng hiển thị dữ liệu */}
            {hospitals.length > 0 && (
              <div className="overflow-x-auto border rounded-md">
                <table className="table-auto border-collapse">
                  <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr>
                      {Object.keys(hospitals[0]).map((key, i) => (
                        <th
                          key={i}
                          className="border px-4 py-2 text-sm font-semibold text-gray-700 text-left whitespace-nowrap"
                        >
                          {key}
                        </th>
                      ))}
                      <th className="border px-4 py-2 text-sm font-semibold text-gray-700 text-left whitespace-nowrap">
                        Tải logo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hospitals.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        {Object.values(row).map((val, i) => (
                          <td
                            key={i}
                            className="border px-4 py-2 align-top text-sm whitespace-normal break-words max-w-[300px]"
                            style={{ width: 'max-content' }}
                          >
                            {val}
                          </td>
                        ))}
                        <td className="border px-4 py-2">
                          <label className="cursor-pointer text-blue-600 hover:underline">
                            <input
                              type="file"
                              accept="image/*"
                              hidden
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleLogoUpload(index, file);
                              }}
                            />
                            Tải logo
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            )}
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleUpload}
              className="bg-blue-500 shadow-none hover:bg-blue-400"
            >
              Tiến hành upload
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};