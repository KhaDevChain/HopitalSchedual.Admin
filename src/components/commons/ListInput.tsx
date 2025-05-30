import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const StackedInput = (props: { id: string, label: string, placeholder: string, isRequired?: boolean }) => {
    return <div className="grid lg:w-1/2 sm:w-full items-center gap-1.5">
        <Label htmlFor={props.id}>{props.label} {props.isRequired && <span className="text-red-500">*</span>}</Label>
        <Input
            className="bg-gray-100 h-12 rounded-xl border 
        focus-visible:ring-blue-500 focus:border-blue-500 focus:bg-white"
            type="text"
            id={props.id} placeholder={props.placeholder} />
    </div>;
}
