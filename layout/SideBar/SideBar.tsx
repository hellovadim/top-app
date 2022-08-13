import { SideBarProps } from "./SideBar.props";
import Menu from "../Menu/Menu";
const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default SideBar;
