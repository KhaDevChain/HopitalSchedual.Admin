import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';


interface SheetOrderFilterProps {
    isOpen: boolean,
    onOpenChange: () => void,
}

const SheetOrderFilter: React.FC<SheetOrderFilterProps> = (props: SheetOrderFilterProps) => {
    return (
        <Sheet open={props.isOpen} onOpenChange={props.onOpenChange} >
            <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent side="right" style={{ width: "400px" }}>
                <SheetHeader >
                    <SheetTitle>Filter</SheetTitle>
                </SheetHeader>
                <div className='h-[1px] w-full bg-gray-200'></div>
                <div className="mt-4">Your content goes here...</div>
            </SheetContent>
        </Sheet >
    );
};

export default SheetOrderFilter;