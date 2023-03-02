import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        ${({ invalid }) =>
            invalid &&
            css`
                color: red;
            `}
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
        ${({ invalid }) =>
            invalid &&
            css`
                color: white;
                background-color: #ffd7d7;
            `}
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }

    /* &.invalid input {
        border-color: #ff0f0faa;
        color: white;
        background-color: red;
    }

    &.invalid label {
        color: red;
    } */
`;

const CourseInput = ({ onAddGoal }) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = e => {
        if (e.target.value.trim().length > 0) setIsValid(true);

        setEnteredValue(e.target.value);
    };

    const formSubmitHandler = e => {
        e.preventDefault();

        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }

        onAddGoal(enteredValue.trim());
        setEnteredValue('');
    };

    return (
        <form onSubmit={formSubmitHandler}>
            {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`.trim()}> */}
            <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input
                    type="text"
                    onChange={goalInputChangeHandler}
                    value={enteredValue}
                />
            </FormControl>
            {/* </div> */}
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
