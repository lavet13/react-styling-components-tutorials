import styled from 'styled-components';

import './Button.css';

// tagged template literal
// what does this do? button is simply a method on this styled object.
// It's just a special kind of method you could say.
const Button = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover,
    &:active {
        background: #ac0e77;
        border-color: #ac0e77;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }

    @media only screen and (max-width: 37.5em) {
        width: 100%;
    }
`;

// const Button = ({ type, onClick, children }) => {
//     return (
//         <button type={type} className="button" onClick={onClick}>
//             {children}
//         </button>
//     );
// };

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
// https://styled-components.com/

export default Button;
