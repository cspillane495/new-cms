import React, { useState, useRef, useEffect } from "react";
import Input from "../Input";

const EditableItem = (props) => {
  const inputRef = useRef(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [text, setText] = useState(props.children);
  function onClickOutSide(e) {
    const target = e.target;
    // Check if user is clicking outside of <input>
    if (inputRef.current && !inputRef.current.contains(target)) {
      if (props.children === text || text < 1) {
        setText(props.children);
      } else {
        props.edit.onSave({ [props.dataIndex]: text }, props.rowItem._id);
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

  const renderOptions = (options, selectedOp) => {
    return options.map((option, i) => {
      return (
        <option key={i} value={option.id}>
          {option.title}
        </option>
      );
    });
  };

  return (
    <React.Fragment>
      {inputVisible ? (
        props.edit.select ? (
          <select
            ref={inputRef}
            onChange={(e) => setText(e.target.value)}
            value={text}
          >
            <option value="" disabled hidden>
              {props.placeholder}
            </option>
            {renderOptions(props.edit.selectOptions)}
          </select>
        ) : (
          <input
            ref={inputRef} // Set the Ref
            value={text} // Now input value uses local state
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        )
      ) : (
        <span onClick={() => setInputVisible(true)}>{text}</span>
      )}
    </React.Fragment>
  );
};

export default EditableItem;
