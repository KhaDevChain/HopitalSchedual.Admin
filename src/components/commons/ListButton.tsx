import { ExcelIcon, JsonIcon } from "../icons/Icons";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button"
import { ReactNode, useState } from "react"

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

  const handleDownloadJson = () => {
    
  };

  const handleDownloadExcel = () => {
    
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
                  (
                    props.onDownload.arguments[0] === "excel") ? 
                        props.onDownload.arguments[2] + ".xlsx" : 
                        props.onDownload.arguments[2] + ".json"
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
