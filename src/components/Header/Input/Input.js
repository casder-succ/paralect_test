import React from 'react';
import {InputWrapper} from "./styles";

const Input = ({query, onChange, onKeyDown}) => {
    return (
        <>
            <InputWrapper
                value={query}
                onChange={(event) => onChange(event.target.value)}
                onKeyDown={(event) => onKeyDown(event.key, query)}
                type="text"
            />
        </>
    );
};

export default Input;