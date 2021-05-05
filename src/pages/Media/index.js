import {useEffect} from 'react';
import { connect } from "react-redux";
import { fetchMediaItems } from '../../actions/media';
import ReactPlayer from 'react-player'

const Media = (props) => {
    console.log('Media', props)

    useEffect(() => {
        props.fetchMediaItems()
    }, [])
    function renderMedia(media) {
        return media.map((item,i) => {
            return(
                <li key={i}>
                </li>
                
            )
        })
    }
    return(
        <div>
            <h3>Media</h3>
            <ul>
            {renderMedia(props.mediaItems)}
            </ul>
        </div>
    )
}

function mapStateToProps({ mediaItems, loading}) {
    return{ mediaItems, loading };
}

export default connect(mapStateToProps, {fetchMediaItems})(Media);