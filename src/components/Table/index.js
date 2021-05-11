import Radio from '../Radio';
import useForm from '../../hooks/formHook';

const Table = (props) => {
    const {form, setForm} = useForm();
    function renderHeaders(headersList) {
        if(!headersList) return null
        return headersList.map((item, i) => {
            return <th key={i}>{item.title}</th>
        })
    }

    function renderTableRows(rowsList) {
        if(!rowsList) return <tr>'No Data'</tr>
        return rowsList.map((item, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i+1}</th>
                    {/* <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td> */}
                </tr>
            )
        })
    }

    function selectAllRadioChange(e) {
        const obj = {id: e.target.id, value: e.target}
        console.log(obj)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>
                        <Radio 
                            onChange={selectAllRadioChange}
                            value={false}
                            id="selectAllTableItems"
                        />
                    </th>
                    {renderHeaders(props.headers)}
                </tr>
            </thead>
            <tbody>
                {renderTableRows(props.list)}
            </tbody>
        </table>
    )
}

export default Table;