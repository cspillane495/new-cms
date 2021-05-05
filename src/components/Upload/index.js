import {useState, useRef} from 'react';

const Upload = () => {
    const inputFile = useRef(null) 
    function openFiles() {
        inputFile.current.click();
        console.log(inputFile.current)
    }
    return (
        <div>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            <button type="button" onClick={openFiles}>Upload</button>
        </div>
    )
}

export default Upload;