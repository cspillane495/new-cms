import classNames from "classnames";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../utils";
import "./style.scss";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(
    props.activeTab || props.data[0].id
  );
  const [activeContent, setActiveContent] = useState(
    props.activeContent || props.data[0].content
  );
  const classes = classNames("tab-item");

  function renderTabs(data) {
    return data.map((item, i) => {
      const isActive = activeTab === item.id;

      return (
        <div
          className={`tab-item ${isActive && "tab-active"}`}
          onClick={() => {
            setActiveTab(item.id);
            setActiveContent(item.content);
          }}
          key={i}
        >
          {item.title || capitalizeFirstLetter(item.id)}
        </div>
      );
    });
  }

  return (
    <div className="tabs-wrapper">
      <div className="tabs">{renderTabs(props.data)}</div>
      <div>{activeContent}</div>
    </div>
  );
};

export default Tabs;
