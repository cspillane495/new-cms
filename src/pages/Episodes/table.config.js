import { renderTableColumns } from "../../components/Table/table.utils";

const dbKeys = ["title", "date", "tags", "active"];

export const TABLE_COLUMNS = renderTableColumns(dbKeys);
console.log(TABLE_COLUMNS);
