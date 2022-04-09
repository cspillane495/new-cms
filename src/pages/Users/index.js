import { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";
import ItemsListLayout from "../../layouts/ItemsListLayout";
import { fetchUsers } from "../../actions/users";
const headers = [{ title: "Email", dataIndex: "email" }];
const Users = (props) => {
  const list = props.users;
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return (
    <div>
      <div>
        <div>
          <ItemsListLayout list={list} headers={headers} />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUsers })(Users);
