import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <div className="form-inline">
                <div className="form-group">
                    <label htmlFor="exampleInputName2">Name</label>
                    <input type="text" 
                        onChange={props.changeHandler} 
                        className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
                </div>
            </div>  
        </div>
    )
}

export default userInput;