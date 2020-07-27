/**
 * @author Mitchell L.
 */

/** Uses Dictionary List to customize what is shown in the dropdown. 
 * text - the text shown in the main dropdown button
 * dropdownlist - uses the following components: key, name, and link.
 *       - key: is the numbered key of each element
 *       - name: is the text that is shown to the user
 *       - link: is the link the user is taken to upon clicking the dropdown button
 * 
*/

import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'  


const DropdownButton = ({text, dropdownlist}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {text}
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
                { dropdownlist.map((i) => {
                    return (
                        <Dropdown.Item key= {i.key} href={i.link}>{i.name}</Dropdown.Item>
                    )
                })}
                
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default DropdownButton;