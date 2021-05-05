import { Container } from '../../components/Grid';

const ItemsListLayout = (props) => {
    return(
        <Container>
            <Row>
                 <h2>{props.title}</h2>
            </Row>
            <Row>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </Row>
        </Container>        
    )
}

export default ItemsListLayout;