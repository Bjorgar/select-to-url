import Logo from '../../../../assets/Logo.svg';
import Button from '../Button';
import Menus from '../Menus';
import Wrapper from '../Wrapper';
import * as styles from './Header.css';

export default function Header() {
  return (
    <Wrapper>
      <nav className={styles.header}>
        <Logo />
        <div className={styles.menu}>
          <Menus />
          <Button variant="red">Track Shipment</Button>
        </div>
      </nav>
    </Wrapper>
  );
}
