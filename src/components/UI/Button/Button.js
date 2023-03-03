// import styled from 'styled-components';

import React from 'react';
// import './Button.css';
import styles from './Button.module.css'; // this is how you have to import a css file if you wanna use CSS modules

/*
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
*/

// CSS Modules
// styles is an object and in that object, you'll have every class you defined in your file as a property.
// So If I added a button class in the CSS file I now have the button property in styles object.
// Build process under the hood. It is takes those CSS classes and a CSS file and basically changes those
// class names to be unique. That's the core thing it does. For every component it changes the class names
// off the classes you're importing here. So off the CSS file you were importing to be unique.
// So if you import from the CSS file here in the button component, it will create unique classes, unique
// versions of all those styles and classes here for this component. And for data it generates brand new
// class names. Inside of these class names, your styles will be so it will just keep your styles.
// It will not touch those, but wrapped into this new class name.
// With CSS modules concept ensures that the CSS styles we set up in a CSS file are scoped to the component
// we import this file into. For that we need to work with CSS classes here because we then access those classes
// as properties on the imported styles object. This is how we basically make a connection between those dynamically
// generated class names, which we as a developer don't know in advance and our components here.
// That's actually the best of both worlds. We have our styles set up in CSS file but there's still scoped to the components
// where we use them.

const Button = ({ type, onClick, children }) => {
    return (
        <button type={type} className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

// tagged template literal
// what does this do? button is simply a method on this styled object.
// It's just a special kind of method you could say.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
// https://styled-components.com/

export default Button;
