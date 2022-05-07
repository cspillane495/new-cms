import { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import Modal from '../Modal';

const categories = [
    {value: "thumbnail", name: "Thumbnail"},
    {value: "ad", name: "Ad"},
    {value: "episode", name: "Episode"},
    {value: "promo", name: "Promo"},
];

const MediaCard = ({itemKey, fileMap, removeFileFromList, showModal, modalContent, modalState, onCategoryClick, category}) => {
    const [showCategories, setShowCategories] = useState(false);

    const clickCategory = (value) => {
        onCategoryClick(value);
        setShowCategories(!showCategories)
    }

    const categoryDropdown = (
        <div className="media-category-dropdown">
            <ul>
                {
                    categories.map((cat, i) => {
                        return (
                            <li key={i} onClick={() => clickCategory(cat.value)}>
                                {cat.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );

    return (
        <li>
            <div className="media-item-upload-card">
                <div className="media-item-trash" onClick={() => removeFileFromList(itemKey)}>
                    <Trash size={15} />
                </div>
                <div className="media-item-content">
                    {itemKey}
                    <div className="media-item-meta">
                        <p>category: <span className="media-item-meta-category" onClick={() => setShowCategories(!showCategories)}>{category}</span></p>
                        <span>{fileMap[itemKey].type}</span>
                    </div>
                    {showCategories && categoryDropdown}
                </div>
                <Modal onClose={showModal} show={modalState}>
                    <img src={modalContent.img} style={{width: '100%'}} />
                </Modal>
                <div className="uploaded-img-wrapper" onClick={(e) => showModal(e)}>
                    <img src={URL.createObjectURL(fileMap[itemKey])} />
                </div>
            </div>
        </li>
    )
}

export default MediaCard;