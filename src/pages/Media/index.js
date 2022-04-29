import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";
import Select from "../../components/Select";
import TableLayout from "../../layouts/TableLayout";
import { fetchMediaItems, updateMediaItem } from "../../actions/media";
import { Link } from "react-router-dom";
import def from "../../defaultSettings";
import Button from "../../components/Button";
import { mediaCategories } from "../../resources/tableDefinitions";
import { TableImg } from "../../components/Table/TableImg";

const Media = (props) => {
  const [selectCat, setSelectCat] = useState("");
  const list = props.mediaItems;
  const saveMediaItem = (values, id) => {
    props.updateMediaItem(values, id);
  };
  const changeSelect = (e) => {};
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
    props.fetchMediaItems();
  }, []);

  // console.log(props);

  return (
    <div className="container">
      <div>
        <div>
          <TableLayout
            editable
            back="/"
            data={props.mediaItems}
            columns={columns}
            path="/media/upload"
            title="Media"
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ mediaItems }) {
  return { mediaItems };
}

export default connect(mapStateToProps, { fetchMediaItems, updateMediaItem })(
  Media
);
