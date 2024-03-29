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
import { categoryOptions, typeOptions } from '../../../resources/tableDefinitions';

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
        setInitVals(props.episode);
    }, [props.episode._id]);

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
            <h3>Episodes Show</h3>
                <Form>
                    <Row>
                        <Col sm={12}>
                            <FormItem>
                                <Input 
                                    id="episode-title"
                                    placeholder="Title"
                                    value={form["episode-title"]}
                                    onChange={changeInput}
                                />
                            </FormItem>
                        </Col>
                        <Col sm={6}>
                            <FormItem>
                                <Select 
                                    options={typeOptions}
                                    id="episode-type"
                                    placeholder="Select a Type"
                                    value={form["episode-type"]}
                                    onChange={changeInput}
                                />
                            </FormItem>
                        </Col>
                        <Col sm={6}>
                            <FormItem>
                                <Select 
                                    options={categoryOptions}
                                    id="episode-category"
                                    placeholder="Select a Category"
                                    value={form["episode-category"]}
                                    onChange={changeInput}
                                />
                            </FormItem>
                        </Col>
                        <Col sm={12}>
                            <FormItem>
                                <Input 
                                    id="episode-tags"
                                    placeholder="Tags"
                                    value={form["episode-tags"]}
                                    onChange={changeInput}
                                />
                            </FormItem>
                        </Col>
                        <Col sm={12}>
                            <FormItem>
                                <Input 
                                    id="episode-description"
                                    placeholder="Description"
                                    value={form["episode-description"]}
                                    onChange={changeInput}
                                />
                            </FormItem>
                        </Col>
                        <Col sm={12}>
                            <FormItem>
                                <Input 
                                    id="episode-releaseDate"
                                    placeholder="Release Date"
                                    value={form["episode-releaseDate"]}
                                    onChange={changeInput}
                                />
                            </FormItem>
                        </Col>
                        <Col sm={6}>
                            <FormItem>
                                <Select 
                                    options={getMediaTitlesByType(props.mediaItems, 'episode/promo')}
                                    id="episode-videoLink"
                                    placeholder="Select a Video"
                                    value={form["episode-videoLink"]}
                                    onChange={changeInput}
                                />
                            </FormItem>
                        </Col>
                        <Col sm={6}>
                            <FormItem>
                                <Select 
                                    options={getMediaTitlesByType(props.mediaItems, 'thumbnail')}
                                    id="episode-thumbnail"
                                    placeholder="Select a Thumbnail"
                                    value={form["episode-thumbnail"]}
                                    onChange={changeInput}
                                />
                            </FormItem>
                        </Col>
                        {/* <EpisodeMedia 
                            items={props.mediaItems}
                            form={form}
                            changeInput={changeInput}
                        /> */}
                        <Button 
                            form={form}
                            changeInput={changeInput}
                            type="button"
                            onClick={submitForm}
                            title="Submit Form"
                        />
                    </Row>
                </Form>
        </Container>
    )
}

function mapStateToProps({ loading, episode, mediaItems }) {
    return { loading, episode, mediaItems }
}
    
export default connect(mapStateToProps, { createEpisode, fetchEpisode, updateEpisode, fetchMediaItems })(EpisodesShow);