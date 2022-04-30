import { capitalizeFirstLetter } from "../../utils";

function renderHeader(e) {
  return (
    <div className="table-column-header">{capitalizeFirstLetter(e.value)}</div>
  );
}

export function renderTableColumns(arr) {
  return arr.map((item, i) => {
    if (typeof item === "string") {
      return {
        accessor: item,
        Header: capitalizeFirstLetter(item),
      };
    }
    return {
      accessor: item.id,
      id: item.id,
      Header: capitalizeFirstLetter(item.header || item.id),
      Footer: item.footer,
      Cell: item.Cell,
      width: item.width,
      minWidth: item.minWidth,
      maxWidth: item.maxWidth,
    };
  });
}
