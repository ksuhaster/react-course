import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);

            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            // Update State
            setStoredValue(value);
            // Update localStorage
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error.message);
        }
    };

    return [storedValue, setValue];
};
