import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const charComponent = (props) => {

    return (
        <ul>
            {
                props.modifiableTextArray.map((char, index) => {
                    console.log(char, index);
                    return (
                        <div key={index} onClick={() => props.deleteCharHandler(index)}>
                            <li>
                                {char}
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default charComponent;