import { useContext, useState } from "react";
import { Bell, QuestionCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import {
  Header,
  Dropdown,
  Avatar,
  SearchInput,
  Tabs,
  Icon,
} from "../../components";
import NotificationContent from "./NotificationContent";
import { LayoutContext } from "../Root";

const options = [
  { title: "Account", path: "/account" },
  { title: "Settings", path: "/account/settings" },
];

const tabs = [
  {
    id: "Notifications",
    content: <NotificationContent />,
  },
];

const LayoutHeader = (props) => {
  const { theme } = useContext(LayoutContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const avatar = (
    <div className="header-avatar">
      <Avatar src="https://picsum.photos/seed/picsum/300/300" size={40} />
      <span className={`username-color-${theme}`} style={{ paddingLeft: 5 }}>
        {props.currentUser.username}
      </span>
    </div>
  );

  const notifications = (
    <div style={{ width: "100%", minWidth: 300 }}>
      <Tabs data={tabs} />
    </div>
  );
  const bell = (
    <div>
      <Icon name="Bell" />
    </div>
  );

  const rightContent = [
    <div
      style={{ cursor: "pointer" }}
      onClick={() => setSearchOpen(!searchOpen)}
    >
      <div
        className="header-item-wrapper"
        style={{ paddingLeft: searchOpen ? 0 : 12 }}
      >
        <SearchInput open={searchOpen} />
      </div>
    </div>,
    <div style={{ cursor: "pointer" }}>
      <div className="header-item-wrapper">
        <Icon
          name="QuestionCircle"
          onClick={() => props.history.push("/help")}
        />
      </div>
    </div>,
    <Dropdown
      data={notifications}
      alignRight
      trigger={bell}
      dropMarginTop={24}
      dropMarginRight={-12}
    />,
    <Dropdown
      data={options}
      alignRight
      trigger={avatar}
      dropMarginTop={24}
      dropMarginRight={-12}
    />,
  ];

  return <Header rightContent={rightContent} />;
};

export default LayoutHeader;
