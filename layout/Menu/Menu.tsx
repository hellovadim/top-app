import { useContext } from "react";
import styles from "./Menu.module.css";
import { TopAppContext } from "../../context/app.context";
import { FirstLevelMenu, PageItem } from "../../interfaces/menu.interfaces";
import CourseIcon from "./icons/graduation-hat 1.svg";
import ServicesIcon from "./icons/cloud.svg";
import BooksIcon from "./icons/books.svg";
import ProductIcon from "./icons/product.svg";
import { TopLevelCategory } from "../../interfaces/toppage.interface";
import classNames from "classnames";
import Link from "next/link";

const firstLevelMenu: FirstLevelMenu[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CourseIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductIcon />,
    id: TopLevelCategory.Products,
  },
];
const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(TopAppContext);
  console.log(menu);
  const buildFirst = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a>
                <div
                  className={classNames(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id == firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecond(m)}
          </div>
        ))}
      </>
    );
  };
  const buildSecond = (menuItem: FirstLevelMenu) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
              <div
                className={classNames(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpen]: m.isOpened,
                })}
              ></div>
              {buildThird(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };
  const buildThird = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link href={`/${route}/${p.alias}`}>
        <a
          className={classNames(styles.thirdLevel, {
            [styles.thirdLevelActive]: true,
          })}
        >
          {p.category}
        </a>
      </Link>
    ));
  };

  return (
    <div className={styles.menu}>
      <ul>{buildFirst()}</ul>
    </div>
  );
};

export default Menu;
