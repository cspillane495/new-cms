import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";
import TableLayout from "../../layouts/TableLayout";
import { fetchUsers } from "../../actions/users";

const Users = (props) => {
  const list = props.users;
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Type",
        accessor: "type",
      },
    ],
    []
  );
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return (
    <div>
      <div>
        <div>
          <TableLayout
            editable
            back="/"
            data={list}
            columns={columns}
            path="/users/create"
            title="Users"
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsers })(Users);
