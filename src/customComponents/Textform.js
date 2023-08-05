import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handlelowercase = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!", "success");
  }
  
  const handleClear = ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text cleared!", "success");
}

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    // setText = "New text"; // Wrong way to change the state
    // setText("New text"); // Correct way to change the state
  return (
  <>
<div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
  <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handlelowercase}>Convertto Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
</div>
<div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
</div>
</>
  )
}
