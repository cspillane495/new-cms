import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from '../../components/Grid';
import ItemsListLayout from '../../layouts/ItemsListLayout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEpisodes, updateEpisode } from '../../actions/episodes';
import useForm from '../../hooks/formHook';
import ToggleSwitch from '../../components/ToggleSwitch';

const Episodes = (props) => {
    const list = props.episodes;
    const { form, clearForm, setForm } = useForm();

    useEffect(() => {
        props.fetchEpisodes();
    }, []);

    const onToggled = (id, active) => {
        props.updateEpisode({ active: !active}, id);
        setForm({ id: 'episode-toggled' + '-' + id, value: !active });
    }

    const headers = [
        {
            title: 'Title',
            dataIndex: 'title',
            render: ({title, id}) => <Link to={`/episodes/${id}/edit`}>{title}</Link>
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Tags',
            dataIndex: 'tags'
        },
        {
            title: 'Active',
            dataIndex: 'active',
            render: ({active, id}) => console.log(id)//(
            //     <ToggleSwitch 
            //         toggled={form['episode-toggled'] + '-' + id} 
            //         onToggle={(cb) => cb(false)} 
            //     />
            // )
        },
    ];

    return (   
        <Container >
            <Row>
                <Col>
                    <ItemsListLayout 
                        back="/episodes"
                        list={list} 
                        headers={headers} 
                        path="/episodes/create"
                        title="Episodes"
                    />
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps({ episodes }) {
    return { episodes }
}
    
export default connect(mapStateToProps, { fetchEpisodes, updateEpisode })(Episodes);