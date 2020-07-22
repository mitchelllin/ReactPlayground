/**
 * @author Mitchell L.
 */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'  
const DropdownButtonconst = ({text}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {text}
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
                <Dropdown.Item href="">Button 1</Dropdown.Item>
                <Dropdown.Item href="">Button 2</Dropdown.Item>
                <Dropdown.Item href="">Button 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default DropdownButtonconst;