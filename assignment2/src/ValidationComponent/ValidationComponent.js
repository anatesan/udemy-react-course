import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const validationComponent = (props) => {

    let lengthMessage = "Right length";
    if (props.inputTextLength > 15) {
        lengthMessage = "Input way too long"
    }

    // console.log(props)

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Input Text</h5>
                    <p className="card-text">{props.inputText}</p>
                    <div className="card-footer text-muted">
                        Input length:&nbsp;{props.inputTextLength}
                        <p>{lengthMessage}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Modified Text</h5>
                    <p className="card-text">{ props.modifiableTextArray.join('') }</p>
                    <div className="card-footer text-muted">
                        Modified text length:&nbsp;{ props.modifiableTextArray.length }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default validationComponent;