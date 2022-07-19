import Arrow from '@src/assets/arrow.svg';

import Button from '../Button';
import * as style from './Footer.css';

export default function Footer() {
  return (
    <div className={style.footer}>
      <h1 className={style.heading1}>
        Or send all needed information directly to our HR department
      </h1>
      <Button variant="red">
        Apply now
        <span className={style.arrow}>
          <Arrow />
        </span>
      </Button>
    </div>
  );
}
