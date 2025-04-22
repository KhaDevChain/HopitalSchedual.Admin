import React from 'react';
import { useProgress } from '@/hooks/use-process';

interface LoadingProgressProps {
    isLoading: boolean;
}

export const LoadingProgress: React.FC<LoadingProgressProps> = ({
    isLoading,
}) => {
    const {isVisible, start, stop } = useProgress({
        duration: 1000,
        onComplete: () => {
            setTimeout(stop, 500);
        }
    });

    React.useEffect(() => {
        if (isLoading) {
            start();
        } else {
            stop();
        }
    }, [isLoading]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray-100/80 flex items-center justify-center animate-in fade-in duration-300 z-50">
            <span>Loading ...</span>
        </div>
    );
};