import { Link } from 'react-router-dom';

import { MENUS_LIST } from './constants';
import { list } from './Menus.css';

export default function Menus() {
  return (
    <ul className={list}>
      {
        MENUS_LIST.map((menu) => (
          <li key={menu.title}>
            <Link to={menu.url}>{menu.title}</Link>
          </li>
        ))
      }
    </ul>
  );
}
