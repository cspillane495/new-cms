import {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { fetchMediaItems, uploadMediaItem } from '../../actions/media';
import { Container } from '../../components/Grid';
import Upload from '../../components/Upload';

const UploadMedia = (props) => {
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
    // console.log(props)

    return (
        <Container>
            <h3>Media</h3>
            <Upload history={props.history} loading={props.loading} multiple/>
        </Container>
    )
}

function mapStateToProps({ mediaItems, loading}) {
    return{ mediaItems, loading };
}

export default connect(mapStateToProps, {fetchMediaItems, uploadMediaItem})(UploadMedia);