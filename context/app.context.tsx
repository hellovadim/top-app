import { ProductCharacteristic } from "../interfaces/product.interfaces";
import { TopLevelCategory } from "../interfaces/toppage.interface";
import { MenuItem } from "../interfaces/menu.interfaces";
import { ReactNode, useState, createContext } from "react";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const TopAppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };
  return (
    <TopAppContext.Provider value={{ menu: menuState, firstCategory }}>
      {children}
    </TopAppContext.Provider>
  );
};
