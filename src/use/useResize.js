import { useState, useEffect } from "react";

const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handlerResize = () => setWidth(window.innerWidth);
        const resize = 'resize';
        window.addEventListener(resize, handlerResize);
        return () => {
            window.removeEventListener(resize, handlerResize);
        }
    }, [width]);

    return [width];
}

export default useResize;