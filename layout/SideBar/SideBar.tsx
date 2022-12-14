import { SidebarProps } from "../SideBar/SideBar.props";
import styles from "./SideBar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";
import { Search } from "../../components";

const SideBar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};
export default SideBar;
