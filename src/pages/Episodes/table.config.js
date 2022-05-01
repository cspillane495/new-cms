import { Link } from "react-router-dom";
import { renderTableColumns } from "../../components/Table/table.utils";

const dbKeys = [
  {
    id: "title",
    Cell: (e) => {
      console.log(e);
      return <Link to={`/episodes/${e.row.original._id}/edit`}>{e.value}</Link>;
    },
  },
  { id: "date" },
  "tags",
  "active",
];

export const TABLE_COLUMNS = renderTableColumns(dbKeys);
console.log(TABLE_COLUMNS);
