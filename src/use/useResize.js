import { useState, useEffect } from "react";

const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const eventResize = (listener) => {
        window.addEventListener('resize', listener);
    }
    const eventRemoveListener = () => {
        window.removeEventListener('resize', eventResize);
    }

    useEffect(() => {
        eventResize(() => setWidth(window.innerWidth));
        return () => eventRemoveListener();
    }, [width])

    useEffect(() => {
        eventResize(() => setHeight(window.innerHeight));
        return () => eventRemoveListener();
    }, [height])

    return [width, height];
}

export default useResize;