import Radio from "../Radio";
import { useState } from "react";
import useForm from "../../hooks/formHook";
import EditableItem from "./EditableItem";
import TableRows from "./TableRows";
import "./index.css";

const Table = (props) => {
  const tableName = props.id || props.name;
  const { form, setForm } = useForm();
  const [selectAll, setSelectAll] = useState(false);
  function renderHeaders(headersList) {
    if (!headersList) return null;
    return headersList.map((item, i) => {
      return <th key={i}>{item.title}</th>;
    });
  }

  function selectSingleTableItem(e) {
    // console.log(e)
    const obj = { id: e.target.id, value: e.target };
    setForm(obj);
  }

  function selectAllRadioChange(e) {
    // const selectAllOnChange = props.rowSelection.onChange;
    const obj = { id: e.target.id, value: e.target };

    setForm(obj);
  }

  return (
    <table className="table" style={{ backgroundColor: "white" }}>
      <thead className="table-header">
        <tr>
          <th scope="col">
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
        <TableRows {...props} />
      </tbody>
    </table>
  );
};

export default Table;
