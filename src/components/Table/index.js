import Radio from '../Radio';
import useForm from '../../hooks/formHook';
import { render } from '@testing-library/react';

const Table = (props) => {
    const {form, setForm} = useForm();
    
    function renderHeaders(headersList) {
        if(!headersList) return null
        return headersList.map((item, i) => {
            return <th key={i}>{item.title}</th>
        })
    }

    function renderTableRows(rowsList, headerList) {
        if(!rowsList) return <tr>'No Data'</tr>
        
        return rowsList.map((item, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i+1}</th>
                    {
                        headerList.map((headerItem, i) => {
                            console.log({item, headerItem: headerItem.dataIndex})
                            return (
                                <td>
                                    {
                                        headerItem.render ? (
                                            headerItem.render(item[headerItem.dataIndex])
                                        ) : item[headerItem.dataIndex]
                                    }
                                </td>
                            )
                        })
                    }
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
                {renderTableRows(props.list, props.headers)}
            </tbody>
        </table>
    )
}

export default Table;