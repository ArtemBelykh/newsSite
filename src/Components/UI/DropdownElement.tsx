import React from 'react';
import {Dropdown} from "react-bootstrap";

export interface IDropDownElement {
    nameButton: string,
    variant: string,
    idButton: string,
    children: JSX.Element | JSX.Element[];
}

const DropdownElement = ({nameButton, variant, idButton, children}: IDropDownElement): JSX.Element => {
    return (
        <Dropdown style={{marginLeft: "50px", marginTop: "20px"}}>
            <Dropdown.Toggle variant={variant} id={idButton}>{nameButton}</Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href={"/"}>All Posts</Dropdown.Item>
                {children}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownElement;