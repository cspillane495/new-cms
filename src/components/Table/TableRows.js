import Radio from "../Radio";
import EditableItem from "./EditableItem";

const TableRows = ({ list, headers, ...props }) => {
  if (list.length === 0)
    return (
      <tr>
        <td>'No Data'</td>
      </tr>
    );
  return list.map((rowItem, i) => {
    return (
      <tr key={i}>
        <th>
          {i + 1}
          {/* {
                        props.checkbox ? (
                            <Radio 
                                onChange={selectSingleTableItem}
                                value={form[`${tableName}-tableItem-${i + 1}`]}
                                id={`${tableName}-tableItem-${i + 1}`}
                            />
                        ) : i + 1
                    } */}
        </th>
        {headers.map((headerItem, i) => {
          const renderData = headerItem.render
            ? headerItem.render(
                {
                  [headerItem.dataIndex]: rowItem[headerItem.dataIndex],
                  id: rowItem._id,
                },
                rowItem
              )
            : rowItem[headerItem.dataIndex];
          return (
            <td key={i}>
              {headerItem.edit ? (
                <EditableItem
                  edit={headerItem.edit}
                  dataIndex={headerItem.dataIndex}
                  rowItem={rowItem}
                >
                  {renderData}
                </EditableItem>
              ) : (
                renderData
              )}
            </td>
          );
        })}
      </tr>
    );
  });
};

export default TableRows;
