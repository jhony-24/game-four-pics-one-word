import { useState } from "react";

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    
    const setToggle = () => {
        setState(!state);
    }
    return [state, setToggle];
}

export default useToggle;