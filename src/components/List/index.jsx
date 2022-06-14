import "./style.scss";

const List = (props) => {
  function renderList() {
    return props.items.map((item, key) => {
      return (
        <li className="list-item">
          {(props.listItem && props.listItem(item)) || item}
        </li>
      );
    });
  }

  return <ul className="list-wrapper">{props.children || renderList()}</ul>;
};

export default List;
