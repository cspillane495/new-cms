import { Container, Row, Col } from "../../components/Grid";
import Table from "../../components/Table";

const TableLayout = (props) => {
  const rowSelection = {
    onChange: (e) => {
      //selectedRowKeys, selectedRows) => {
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <div>
          <Table
            headers={props.headers}
            list={props.list}
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
