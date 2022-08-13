import { useContext } from "react";
import styles from "./Menu.module.css";
import { TopAppContext } from "../../context/app.context";
const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(TopAppContext);

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
