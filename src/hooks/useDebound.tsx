import { useEffect, useState } from 'react';

type Props = {
    value: any;
    milliSeconds: number;
};

function useDebounce<T>(value: T, milliSeconds: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, milliSeconds);

        return () => {
            clearTimeout(handler);
        };
    }, [value, milliSeconds]);

    return debouncedValue;
}

export default useDebounce;
