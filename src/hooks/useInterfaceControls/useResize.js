import { useState, useEffect } from "react";
import { clientWindow } from "src/resources/tools/functions";

const useResize = () => {
    const [width, setWidth] = useState(clientWindow(0).innerWidth);
		const selfWindow = clientWindow();
    useEffect(() => {
        const handlerResize = () => setWidth(clientWindow(0).innerWidth);
        const resize = 'resize';
        selfWindow.addEventListener(resize, handlerResize);
        return () => {
            selfWindow.removeEventListener(resize, handlerResize);
        }
    }, [width]);

    return [width];
}

export default useResize;