import {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { fetchMediaItems, uploadMediaItem } from '../../actions/media';
import { Container } from '../../components/Grid';
import Upload from '../../components/Upload';

const Media = (props) => {
    // console.log('MEDIA', props)
    const [media, setMedia] = useState({});
    useEffect(() => {
        props.fetchMediaItems();
    }, []);

    function renderMediaItems(media) {
        return media.map((item,i) => {
            // console.log('[RENDER MEDIA ITEMS]', item)
            return(
                <li key={i}>
                    {item.name}
                </li>
            )
        })
    }

    return(
        <Container>
            <h3>Media</h3>
            <Upload multiple/>
            {/* <input type="file" name="file" onChange={(e) => setMedia(e.target.files[0])} /> */}
            {/* <button type="button" onClick={uploadMedia}>Upload</button>
            <ul>
                {renderMediaItems(props.mediaItems)}
            </ul> */}
        </Container>
    )
}

function mapStateToProps({ mediaItems, loading}) {
    return{ mediaItems, loading };
}

export default connect(mapStateToProps, {fetchMediaItems, uploadMediaItem})(Media);