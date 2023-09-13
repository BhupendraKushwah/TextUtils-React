import React, { useState } from 'react'



export default function TextInput(props) {
    const [text, setText] = useState("");
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleUpperCase = () => {
        let newUpperText = text.toUpperCase();
        setText(newUpperText);
        props.showAlert("Converted to Uppercase ",'success')
    }
    const handleLowerCase = () => {
        let newLowerText = text.toLowerCase();
        setText(newLowerText);
        props.showAlert("Converted to Lowercase ",'success')
    }
    const handleClear = () => {
        let newText = ''
        setText(newText);
        props.showAlert("Cleared ",'success')
    }
    const handlePaste = () => {
        navigator.clipboard.readText().then(Text => {
            setText(Text)
        })
        props.showAlert("Text Pasted",'success')
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied",'success')
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed",'success')
    }

    return (
        <>
        
            <textarea
                value={text}
                className={`form-control h-auto ${props.mode==='dark'?'bg-dark':'bg-body-tertiary'} ${props.mode==='light'?'text-black':'text-white'}`}
                id="text"
                rows="12"
                onChange={handleOnChange}
                
            ></textarea>
            <p className='bg-secondary text-white p-2 my-2 rounded'> <b>{text.split((/\s+/)).filter((ele)=>{return ele.length!==0}).length} Words {text.length} Characters {(((0.00546448087*(text.split(' ').filter((ele)=>{return ele.length!==0}).length)))*60).toFixed(2)} Seconds</b></p>
            <button disabled={text.length === 0} className='btn btn-primary m-2' onClick={handleUpperCase}>UpperCase</button>
            <button disabled={text.length === 0} className='btn btn-primary m-2' onClick={handleLowerCase}>LowerCase</button>
            <button disabled={text.length === 0} className='btn btn-primary m-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary m-2' onClick={handlePaste}>Paste Text</button>
            <button disabled={text.length === 0} className='btn btn-primary m-2' onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length === 0} className='btn btn-danger m-2' onClick={handleClear}>Clear</button>
    
        
        <div className={`container ${props.mode==='light'?'text-black':'text-white'}`}>
            <h3>Summary</h3>
            <p className='p-1'>{text.length===0?'Nothing to preview':text}</p>
        </div>
        </>
    )
}

