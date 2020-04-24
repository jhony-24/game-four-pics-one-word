import { useState , useEffect } from "react";

const useResize = () => {
    const [ width , setWidth ] = useState(window.innerWidth);
    const [ height , setHeight ] = useState(window.innerHeight);
    const eventResize = (listener) => {
        window.addEventListener('resize',listener);
    }

    useEffect(() => {
        eventResize( () => setWidth(window.innerWidth) );
    }, [width])
    
    useEffect(() => {
        eventResize( () => setHeight(window.innerHeight) );
    }, [height])

    return [ width , height ];
}

export default useResize;