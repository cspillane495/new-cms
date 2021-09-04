import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from '../../components/Grid';
import ItemsListLayout, {TableImg} from '../../layouts/ItemsListLayout';
import { fetchMediaItems } from '../../actions/media';
import { Link } from 'react-router-dom';
import def from '../../defaultSettings';
import Button from '../../components/Button';

const headers = [
    {title: 'Name', dataIndex: 'name'},
    {title: 'Category', dataIndex: 'category'},
    {title: 'Type', dataIndex: 'type'},
    {title: 'Size', dataIndex: 'size'},
    {
        title: 'View', 
        dataIndex: 'path', 
        render: ({path}, {type}) => {
            const link = def.ROOT_URL + path;
            return <TableImg src={link} type={type}/>
            // (
            //     <div className="table-items-picture">
            //         <img src={link} />
            //     </div>
            // )
        }
    },
];

const Media = (props) => {
    const list = props.mediaItems
    useEffect(() => {
        props.fetchMediaItems();
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <ItemsListLayout
                        editable
                        back="/"
                        list={list} 
                        headers={headers} 
                        path="/media/upload" 
                        title="Media"
                    />
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps({mediaItems}) {
    return {mediaItems}
}

export default connect(mapStateToProps, { fetchMediaItems })(Media)