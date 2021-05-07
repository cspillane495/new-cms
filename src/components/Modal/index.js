import React from "react";
import "./style.css";

const Modal = (props) => {
    const modalBackground = document.getElementById('modal-background');
    const bodyEl = document.getElementsByTagName('body')[0];
    // class="modal-open" style="overflow: hidden; padding-right: 0px;" data-bs-padding-right=""
    function onClose(e) {
        props.onClose && props.onClose(e);
    };
    if (!props.show) {
        modalBackground.className = "";
        modalBackground.style.display = "none";

        return null;
    } else {
        bodyEl.style.overflow = 'hidden';
        bodyEl.style.paddingRight = '0px';
        bodyEl.style.backgroundColor = '#fff';
        bodyEl.classList.add('modal-open');
        modalBackground.className = "modal-backdrop fade show";
        modalBackground.style.display = "block";
    }
    
    return (
        <div className="modal fade show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Modal