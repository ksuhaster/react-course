import { useState } from 'react';

export const useAccordeon = (initialValue) => {

    const [counter, setCounter] = useState(initialValue);

    const open = () => {
        setCounter((prevCounter, newCounter) => {
            if (prevCounter === newCounter) {
                console.log('close');
                return undefined;
            } else {
                console.log('open ' + newCounter);
                return newCounter;
            }
        });
    }

    return {
        counter,
        open,
    }
}