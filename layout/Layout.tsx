import { LayoutProps } from "./Layout.props";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
