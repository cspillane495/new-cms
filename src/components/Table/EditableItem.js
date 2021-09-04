import React, { useState, useRef, useEffect } from "react";

const EditableItem = props => {
    const inputRef = useRef(null);
    const [inputVisible, setInputVisible] = useState(false);
    const [text, setText] = useState(props.children);
  
    function onClickOutSide(e) {
      // Check if user is clicking outside of <input>
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setInputVisible(false); // Disable text input
      }
    }
  
    useEffect(() => {
      // Handle outside clicks on mounted state
      if (inputVisible) {
        document.addEventListener("mousedown", onClickOutSide);
      }
  
      // This is a necessary step to "dismount" unnecessary events when we destroy the component
      return () => {
        document.removeEventListener("mousedown", onClickOutSide);
      };
    });
  
    return (
      <React.Fragment>
        {inputVisible ? (
          <input
            ref={inputRef} // Set the Ref
            value={text} // Now input value uses local state
            onChange={e => {
              setText(e.target.value);
            }}
          />
        ) : (
          <span onClick={() => setInputVisible(true)}>{text}</span>
        )}
      </React.Fragment>
    );
  };



export default EditableItem;

