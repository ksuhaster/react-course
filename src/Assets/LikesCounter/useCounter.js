import { useState } from 'react';

export const useCounter = (initialValue) => {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }

    return {
        counter,
        increase,
    }
}