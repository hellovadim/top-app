import { SideBarProps } from "./SideBar.props";

const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
  return <div {...props}></div>;
};

export default SideBar;
