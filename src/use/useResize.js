import { useState , useEffect } from "react";

const useResize = () => {
    const [ width , setWidth ] = useState(0);
    const [ height , setHeight ] = useState(0);
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