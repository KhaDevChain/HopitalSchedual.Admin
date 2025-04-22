import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button"
import { ReactNode } from "react"

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