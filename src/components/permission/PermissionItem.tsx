import React from 'react';
import { Check } from 'lucide-react'; // Giả sử bạn đang sử dụng lucide-react
import { Button } from '../ui/button';

interface PermissionCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const PermissionItem: React.FC<PermissionCardProps> = ({ 
  title, 
  description, 
  icon: Icon 
}) => {
  return (
    <div className="flex items-center justify-between py-4 bg-transparent">
      <div className="flex items-center gap-4">
        <div className="border border-gray-100 p-2 rounded-lg">
          <Icon className="text-blue-500" size={24} />
        </div>
        <div>
          <div className="text-base font-bold">{title}</div>
          <div className="text-gray-500 text-base">{description}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-xl font-bold border-2 border-blue-500 text-blue-500 hover:bg-white hover:text-blue-500"
        >
          <Check /> Read
        </Button>
        <Button variant="outline" size="lg" className="rounded-xl">
          Write
        </Button>
        <Button variant="outline" size="lg" className="rounded-xl">
          Delete
        </Button>
      </div>
    </div>
  );
};