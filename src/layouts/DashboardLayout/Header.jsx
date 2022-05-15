import { SearchInput } from "../../components";
import Avatar from "../../components/Avatar";
import { Header, Dropdown } from "../../components";
import { useState, forwardRef, createRef } from "react";
import useHover from "../../hooks/usehover";

const options = [
  { title: "Account", path: "/account" },
  { title: "Settings", path: "/settings" },
];

const LayoutHeader = (props) => {
  const [dropVisible, setDropVisible] = useState(false);
  // const [ref, hovered] = useHover();
  const avatar = (
    <div style={{}}>
      <Avatar src="https://picsum.photos/seed/picsum/300/300" size={40} />
    </div>
  );
  const rightContent = (
    <>
      <SearchInput />
      <Dropdown
        items={options}
        alignRight
        trigger={avatar}
        // visible={dropVisible}
        // setVisible={setDropVisible}
      />
    </>
  );

  return <Header rightContent={rightContent} />;
};

export default LayoutHeader;
