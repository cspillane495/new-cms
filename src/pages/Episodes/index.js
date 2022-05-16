import React, { useEffect, useMemo, useState } from "react";
import TableLayout from "../../layouts/TableLayout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEpisodes, updateEpisode } from "../../actions/episodes";
import useForm from "../../hooks/formHook";
import { TABLE_COLUMNS } from "./table.config";

const Episodes = (props) => {
  const list = props.episodes;
  const { form, clearForm, updateForm } = useForm();

  useEffect(() => {
    props.fetchEpisodes();
  }, []);

  const onToggled = (id, active) => {
    props.updateEpisode({ active: !active }, id);
    updateForm({ id: "episode-toggled" + "-" + id, value: !active });
  };

  const columns = useMemo(() => TABLE_COLUMNS, []);

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
      render: ({ active, id }) => id, //(
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
          {/* <TableLayout
            back="/"
            data={list}
            columns={columns}
            path="/episodes/create"
            title="Episodes"
          /> */}
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
