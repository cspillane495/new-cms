import React, {useEffect} from 'react';
import { FormItem, Form } from '../../../components/Form';
import { Row, Container, Col } from '../../../components/Grid';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import useForm from '../../../hooks/formHook';
import { connect } from 'react-redux';
import { createEpisode, fetchEpisode, updateEpisode } from '../../../actions/episodes';
import { fetchMediaItems } from '../../../actions/media';
import {getMediaTitlesByType} from './utils';
import './style.css';

const typeOptions = [
    {id: 'promo', title: "Promo"},
    {id: 'episode', title: "Episode"},
]

const categoryOptions = [
    {id: 'interview', title: 'Interview'},
    {id: 'skit', title: 'Skit'},
    {id: 'liveSet', title: 'Live Set'},
    {id: 'musicVideo', title: 'Music Video'},
]

const EpisodesShow = (props) => {
    let id;
    const { form, setForm, setFormInitValues } = useForm();

    useEffect(() => {
        id = props.match.params.id
        if(!id) {
            return
        }
        props.fetchEpisode(id);
        console.log('[PROPS]', props)
        setInitVals(props.episode)
    }, [props.episode.title]);

    useEffect(() => {
        props.fetchMediaItems()
    }, [])

    const changeInput = (e) => {
        const obj = { id: e.target.id, value: e.target.value }
        setForm(obj);
    }

    const submitForm = () => {
        id = props.match.params.id
        const formItems = {
            title: form['episode-title'],
            type: form['episode-type'],
            category: form['episode-category'],
            tags: form['episode-tags'],
            videoLink: form['episode-videoLink'],
            thumbnail: form['episode-thumbnail'],
            desc: form['episode-description'],
            releaseDate: form['episode-releaseDate'],
        }

        if(!id) {
            return props.createEpisode(formItems)
        }

        return props.updateEpisode(formItems, id)
    }

    const setInitVals = (data) => {
        let initVals = data
        if(!initVals) {
            return
        }
        console.log(data)
        const values = {
            "episode-title": initVals.title,
            "episode-type": initVals.type,
            "episode-category": initVals.category,
            "episode-tags": initVals.tags,
            "episode-thumbnail": initVals.thumbnail,
            "episode-description": initVals.desc,
            "episode-videoLink": initVals.videoLink,
            "episode-releaseDate": initVals.releaseDate,
        };

        // console.log(values)

        setFormInitValues(values)
    }

    if(props.loading) {
        return 'Loading...'
    }
    return (   
        <Container>
            
        </Container>
    )
}

function mapStateToProps({ loading, episode, mediaItems }) {
    return { loading, episode, mediaItems }
}
    
export default connect(mapStateToProps, { createEpisode, fetchEpisode, updateEpisode, fetchMediaItems })(EpisodesShow);