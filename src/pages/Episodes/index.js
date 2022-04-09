import React, { useEffect, useMemo, useState } from "react";
import { Row, Container, Col } from "../../components/Grid";
import ItemsListLayout from "../../layouts/ItemsListLayout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEpisodes, updateEpisode } from "../../actions/episodes";
import useForm from "../../hooks/formHook";
import ToggleSwitch from "../../components/ToggleSwitch";

const Episodes = (props) => {
  const list = props.episodes;
  const { form, clearForm, setForm } = useForm();

  useEffect(() => {
    props.fetchEpisodes();
  }, []);

  const onToggled = (id, active) => {
    props.updateEpisode({ active: !active }, id);
    setForm({ id: "episode-toggled" + "-" + id, value: !active });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Tags",
        accessor: "tags",
      },
      {
        Header: "Active",
        accessor: "active",
      },
    ],
    []
  );

  const headers = [
    {
      title: "Title",
      dataIndex: "title",
      render: ({ title, id }) => (
        <Link to={`/episodes/${id}/edit`}>{title}</Link>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Tags",
      dataIndex: "tags",
    },
    {
      title: "Active",
      dataIndex: "active",
      render: ({ active, id }) => id, //console.log(id)//(
      //     <ToggleSwitch
      //         toggled={form['episode-toggled'] + '-' + id}
      //         onToggle={(cb) => cb(false)}
      //     />
      // )
    },
  ];

  return (
    <div>
      <div>
        <div>
          <ItemsListLayout
            back="/"
            data={list}
            columns={columns}
            path="/episodes/create"
            title="Episodes"
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ episodes }) {
  return { episodes };
}

export default connect(mapStateToProps, { fetchEpisodes, updateEpisode })(
  Episodes
);
