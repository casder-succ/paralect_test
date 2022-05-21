import React from 'react';
import {connect} from "react-redux";
import {changeInput, resetInput} from "../actions/inputForm";
import {fetchGithubUser} from "../asyncActions/githubUser";
import styled from "styled-components";

const InputWrapper = styled.input`
  font-family: Inter, sans-serif;
  font-size: 14px;
  
  height: 40px;
  width: 500px;
  
  border: 0;
  background: #FFFFFF;
  border-radius: 6px;
`;

const QueryForm = ({query, onChange, onKeyDown}) => {
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

const mapStateToProps = (state) => ({
    query: state.inputForm.query,
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => {
        dispatch(changeInput(value));
    },
    onKeyDown: (key, user) => {
        if (key === 'Enter') {
            dispatch(resetInput());
            dispatch(fetchGithubUser(user));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryForm);