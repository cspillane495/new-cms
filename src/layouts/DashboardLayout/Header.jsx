import { Bell } from "react-bootstrap-icons";
import { Header, Dropdown, Avatar, SearchInput, Tabs } from "../../components";

const options = [
  { title: "Account", path: "/account" },
  { title: "Settings", path: "/settings" },
];

const tabs = [
  { id: "tab1", content: "1" },
  { id: "tab2", content: "2" },
  { id: "tab3", content: "3" },
];

const LayoutHeader = (props) => {
  const avatar = (
    <div style={{ display: "flex" }}>
      <Avatar src="https://picsum.photos/seed/picsum/300/300" size={40} />
      <span>Username</span>
    </div>
  );

  const notifications = <Tabs data={tabs} />;

  const rightContent = (
    <>
      <SearchInput />
      <Dropdown data={notifications} alignRight trigger={<Bell />} />
      <Dropdown data={options} alignRight trigger={avatar} />
    </>
  );

  return <Header rightContent={rightContent} />;
};

export default LayoutHeader;
