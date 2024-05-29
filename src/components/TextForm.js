import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "success");
    }

    const handleLowercase = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Textarea has been cleaned", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("txtarea");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy successfully done", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces from text has been removed", "success");
    }

    const [text, setText] = useState('');

  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value={text} name='txtarea' id="txtarea" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary me-2" onClick={handleUppercase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary me-2" onClick={handleLowercase}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary me-2" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary me-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-primary" onClick={handleClear}>Clear</button>
        </div>
        <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{(text.length === 0) ? 0:text.split(" ").length} words, {text.length} characters</p>
            <p>{(text.length === 0) ? 0:text.split(" ").length * 0.008} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
        </div>
    </>
  )
}
TextForm.propTypes = {heading: PropTypes.string.isRequired};
TextForm.defaultProps = {text: 'Enter text here'}