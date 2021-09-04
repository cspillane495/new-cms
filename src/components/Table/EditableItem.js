import React, { useState, useRef, useEffect } from "react";
import Input from "../Input";

const EditableItem = props => {
    const inputRef = useRef(null);
    const [inputVisible, setInputVisible] = useState(false);
    const [text, setText] = useState(props.children);
  
    function onClickOutSide(e) {
      const target = e.target
      // Check if user is clicking outside of <input>
      if (inputRef.current && !inputRef.current.contains(target)) {
        if(props.children === text || text < 1) {
          setText(props.children)
        } else {
          props.onSave({[props.dataIndex]: text}, props._id)
        }
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
        {inputVisible ? props.render ? (
          props.render({ [props.dataIndex]: props.rowItem[props.dataIndex], id: props.rowItem._id}, props.rowItem)
        ) : (
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

