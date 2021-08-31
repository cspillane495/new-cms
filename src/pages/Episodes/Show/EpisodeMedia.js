import { PlusCircle } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { FormItem } from '../../../components/Form';
import Select from '../../../components/Select';

const EpisodeMedia = (props) => {
    console.log(props)
    const getVideoTitles = (items) => {
        let newItems = [];
        if(!items) { 
            return newItems
        }
        return items.map(item => {
            return {
                id: item._id,
                title: item.name
            }
        })
    }

    const updateForm = (input) => {
        
    }

    return <>
        <h4>Video</h4>
        <div className="episode-media">
            <Select 
                options={getVideoTitles(props.items)}
                id="episode-videoLink"
                placeholder="Select a Video"
                value={props.form["episode-videoLink"]}
                onChange={props.changeInput}
            />
        </div>
    </>
}

export default EpisodeMedia;