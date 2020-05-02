import { useState } from "react";

const useTextInput = () => {
    const [value, setValue] = useState('');
    const events = {};

    events.onChange = (e) => {
        setValue(e.target.value);
    }
    events.isEmpty = () => {
        return value.trim().length === 0;
    }
    return {
        value,
        ...events
    }
}

export default useTextInput;