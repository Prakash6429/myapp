import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase!", "success")
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase!", "success")
    }

    const handleClear = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = "";
        setText(newText);
        props.showAlert("screen cleared", "danger")

    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("speech", "warning")

      }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard!", "info")

    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed extra spaces!", "secondary")
    }


    const [text, setText] = useState('');
    // text = "new text";   // Wrong way to change the state
    // setText("new text");  // correct way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-info mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Screen</button>
            <button className="btn btn-warning mx-1" onClick={speak}>Speak</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
            <p>{0.008 * text.split(" ").length} <b>Minutes Read</b></p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
        </>
  )
}
