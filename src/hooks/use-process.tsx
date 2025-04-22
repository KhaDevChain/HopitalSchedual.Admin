import { useState, useEffect } from 'react';

interface UseProgressOptions {
    duration?: number;
    interval?: number;
    onComplete?: () => void;
}

export const useProgress = ({
    duration = 1000,
    interval = 100,
    onComplete
}: UseProgressOptions = {}) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const start = () => {
        setIsVisible(true);
        setProgress(0);
    };

    const stop = () => {
        setIsVisible(false);
        setProgress(0);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isVisible) {
            const increment = 100 / (duration / interval);
            timer = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        if (timer) clearInterval(timer);
                        onComplete?.();
                        return 100;
                    }
                    return Math.min(prevProgress + increment, 100);
                });
            }, interval);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isVisible, duration, interval, onComplete]);

    return {
        progress,
        isVisible,
        start,
        stop
    };
};