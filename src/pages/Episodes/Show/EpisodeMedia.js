import { PlusCircle } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { FormItem } from '../../../components/Form';
import Select from '../../../components/Select';

const EpisodeMedia = (props) => {
    // console.log(props)
    

    const updateForm = (input) => {
        
    }

    return <div className="episodes-media-items">
        <div className="episode-media">
            <h4>Video</h4>
            <Select 
                options={getVideoTitles(props.items)}
                id="episode-videoLink"
                placeholder="Select a Video"
                value={props.form["episode-videoLink"]}
                onChange={props.changeInput}
            />
        </div>
        <div className="episode-media">
            <h4>Video</h4>
            <Select 
                options={getVideoTitles(props.items)}
                id="episode-videoLink"
                placeholder="Select a Video"
                value={props.form["episode-videoLink"]}
                onChange={props.changeInput}
            />
        </div>
    </div>
}

export default EpisodeMedia;