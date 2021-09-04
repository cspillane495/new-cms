import Radio from '../Radio';
import { useState } from 'react';
import useForm from '../../hooks/formHook';
import './index.css';

const Table = (props) => {
    const tableName = props.id || props.name;
    const {form, setForm} = useForm();
    const [selectAll, setSelectAll] = useState(false);
    function renderHeaders(headersList) {
        if(!headersList) return null
        return headersList.map((item, i) => {
            return <th key={i}>{item.title}</th>
        })
    }

    function renderTableRows(rowsList, headerList) {
        if(rowsList.length === 0) return <tr><td>'No Data'</td></tr>;
        return rowsList.map((rowItem, i) => {
            return (
                <tr key={i}>
                    <th>
                        {
                            props.checkbox ? (
                                <Radio 
                                    onChange={selectSingleTableItem}
                                    value={form[`${tableName}-tableItem-${i + 1}`]}
                                    id={`${tableName}-tableItem-${i + 1}`}
                                />
                            ) : i + 1
                        }
                    </th>
                    {
                        headerList.map((headerItem, i) => {
                            // console.log('[HEADER LIST MAP]',headerItem, rowItem);
                            return (
                                <td key={i}>
                                    {
                                        headerItem.render ? (
                                            headerItem.render({ [headerItem.dataIndex]: rowItem[headerItem.dataIndex], id: rowItem._id}, rowItem)
                                        ) : rowItem[headerItem.dataIndex]               
                                    }
                                </td>
                            )
                        })
                    }
                </tr>
            )
        })  
    }

    function selectSingleTableItem(e) {
        // console.log(e)
        const obj = {id: e.target.id, value: e.target};
        setForm(obj)
    }

    function selectAllRadioChange(e) {
        // const selectAllOnChange = props.rowSelection.onChange;
        const obj = {id: e.target.id, value: e.target};
        
        setForm(obj)
    }

    return (
        <table className="table">
            <thead className="table-header">
                <tr>
                    <th scope='col'>
                        <Radio 
                            onChange={selectAllRadioChange}
                            value={form.selectAllTableItems}
                            id="selectAllTableItems"
                        />
                    </th>
                    {renderHeaders(props.headers)}
                </tr>
            </thead>
            <tbody>
                {renderTableRows(props.list, props.headers, selectAll)}
            </tbody>
        </table>
    )
}

export default Table;