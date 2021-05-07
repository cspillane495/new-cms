import {useState, useRef} from 'react';
import { Trash } from 'react-bootstrap-icons';
import Modal from '../Modal';
import './style.css';

const Upload = (props) => {
    const inputFile = useRef(null);
    const [files, setFiles] = useState({})
    const [modalState, setModalState] = useState(false);
    const [modalContent, setModalContent] = useState({img: ''})
    function openFiles() {
        inputFile.current.click();
    }

    function setFile() {
        const selectedFiles = inputFile.current.files;
        if(!selectedFiles) return
        console.log(selectedFiles)
        let newObj = {};
        Object.keys(selectedFiles).map((key, i) => {
            console.log(selectedFiles[key].name)

            newObj[selectedFiles[key].name] = selectedFiles[key]
        });
        setFiles({...files, ...newObj});
    }

    function uploadMedia(file) {
        const data = new FormData()
        data.append('file', file)
        
        props.uploadMediaItem(data)
    }

    function showModal(e) {
        console.log('[SHOW MODAL]', e.target)
        setModalContent({img: e.target.src})
        setModalState(!modalState)
    };

    function removeFileFromList(key) {
        delete files[key];
        setFiles({...files})
    }

    function renderUploadedFiles(files) {
        let arr = Object.keys(files);
        return arr.map((itemKey, i) => {
            return (
                <li key={i}>
                    <div className="media-item-upload-card">
                        <div className="media-item-trash" onClick={() => removeFileFromList(itemKey)}>
                            <Trash size={15} />
                        </div>
                        <div className="media-item-content">
                            {itemKey}
                            <div className="media-item-meta">
                                <span>{files[itemKey].type}</span>
                                <span>{files[itemKey].size}</span>
                            </div>
                        </div>
                        <Modal onClose={showModal} show={modalState}>
                            <img src={modalContent.img} style={{width: '100%'}} />
                        </Modal>
                        <div className="uploaded-img-wrapper" onClick={(e) => showModal(e)}>
                            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                        </div>
                    </div>
                </li>
            )
        })
    }
    return (
        <div>
            <input multiple={props.multiple} type='file' id='file' onChange={setFile} ref={inputFile} style={{display: 'none'}}/>
            <button type="button" onClick={openFiles}>Click to Upload</button>
            <div>
                <ul className="file-list">
                    {renderUploadedFiles(files)}
                </ul>
            </div>
        </div>
    )
}

export default Upload;