import { useState } from 'react';

export const useAccordeon = (initialValue) => {

    const [counter, setCounter] = useState(initialValue);

    const open = () => {
        setCounter((prevCounter) => {
            if (typeof prevCounter !== undefined) {
                console.log('close');
                return undefined;
            } else {
                console.log('open ' + prevCounter);
                return prevCounter;
            }
        });
    }

    return {
        counter,
        open,
    }
}