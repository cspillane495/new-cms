import { Envelope, BellFill } from "react-bootstrap-icons";
import { List } from "../../components";
import TimeAgo from "timeago-react";

const TEMP_LIST_ITEMS = [
  { title: "New Message", dateCreated: Date(), icon: <Envelope /> },
  { title: "New Notification", dateCreated: Date(), icon: <BellFill /> },
  { title: "New Message", dateCreated: Date(), icon: <Envelope /> },
  { title: "New Message", dateCreated: Date(), icon: <Envelope /> },
  { title: "New Notification", dateCreated: Date(), icon: <BellFill /> },
  { title: "New Message", dateCreated: Date(), icon: <Envelope /> },
];

const NotificationItem = (props) => {
  return (
    <div className="notification-list-item">
      <div className="notification-list-item-icon">{props.item.icon}</div>
      <div className="notification-list-item-content">
        <div className="notification-list-item-title">{props.item.title}</div>
        <div className="notification-list-item-date">
          <TimeAgo datetime={props.item.dateCreated} locale="en_US" />
        </div>
      </div>
    </div>
  );
};

const NotificationFooter = (props) => {
  const buttonStyle = {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  };
  return (
    <div className="notifications-footer">
      <div style={buttonStyle}>
        <div>Mark As Read</div>
      </div>
      <hr />
      <div style={buttonStyle}>
        <div>View All</div>
      </div>
    </div>
  );
};

const NotificationContent = (props) => {
  return (
    <div className="notifications-wrapper">
      <div style={{ maxHeight: 400, overflow: "scroll" }}>
        <List
          items={TEMP_LIST_ITEMS}
          listItem={(item) => <NotificationItem item={item} />}
        />
      </div>
      <NotificationFooter />
    </div>
  );
};

export default NotificationContent;
