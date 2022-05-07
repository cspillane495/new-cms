import { useState, useRef } from "react";
import { Trash } from "react-bootstrap-icons";
import { connect } from "react-redux";
import Modal from "../Modal";
import { uploadMediaItem } from "../../actions/media";
import MediaCard from "./MediaCard";
// import './style.css';

const Upload = (props) => {
  const inputFile = useRef(null);
  const [files, setFiles] = useState({});
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState({ img: "" });
  const [category, setCategory] = useState("episode");

  function openFiles() {
    inputFile.current.click();
  }

  function setFile() {
    const selectedFiles = inputFile.current.files;
    if (!selectedFiles) return;

    let newObj = {};
    Object.keys(selectedFiles).map((key, i) => {
      newObj[selectedFiles[key].name] = selectedFiles[key];
    });
    setFiles({ ...files, ...newObj });
  }

  function uploadMedia(filesObj) {
    Object.keys(filesObj).forEach((key, i) => {
      const data = new FormData();
      data.append("file", files[key]);
      data.append("category", category);
      props.uploadMediaItem(data, props.history);
    });
  }

  function showModal(e) {
    setModalContent({ img: e.target.src });
    setModalState(!modalState);
  }

  function removeFileFromList(key) {
    delete files[key];
    setFiles({ ...files });
  }

  const clickCategory = (value) => {
    setCategory(value);
  };

  function renderUploadedFiles(fileMap) {
    let arr = Object.keys(fileMap);
    return arr.map((itemKey, i) => {
      return (
        <MediaCard
          key={i}
          category={category}
          onCategoryClick={clickCategory}
          fileMap={fileMap}
          itemKey={itemKey}
          removeFileFromList={removeFileFromList}
          showModal={showModal}
          modalState={modalState}
          modalContent={modalContent}
        />
      );
    });
  }
  if (props.loading) {
    return "Loading...";
  }
  return (
    <div>
      <input
        multiple={props.multiple}
        type="file"
        id="file"
        onChange={setFile}
        ref={inputFile}
        style={{ display: "none" }}
      />
      <div className="uploads-header">
        <button type="button" onClick={openFiles}>
          Click to select files
        </button>
        <button type="button" onClick={() => uploadMedia(files)}>
          Upload
        </button>
      </div>
      <div>
        <ul className="file-list">{renderUploadedFiles(files)}</ul>
      </div>
    </div>
  );
};

export default connect(null, { uploadMediaItem })(Upload);
