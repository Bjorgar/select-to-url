/* eslint-disable max-len */
import DNM from '@src/assets/dnm.png';

import Form from '../Form';
import * as style from './MainBody.css';

export default function MainBody() {
  return (
    <main className={style.main}>
      <h1 className={style.heading1}>
        We are hearing!
      </h1>
      <h2 className={style.heading2}>
        The road is your second home? Join us!
      </h2>
      <div className={style.infoImageWrapper}>
        <div className={style.info}>
          <p className={style.paragraph}>
            We hire drivers from all across the United States, promoting quality opportunities for hardworking individuals of all backgrounds.
          </p>
          <p className={style.paragraph}>
            We require our drivers to have a minimum of two years experience, knowing they have the skills and reputation to successfully take on any special requests we receive from our customers.
          </p>
          <Form />
        </div>
        <div>
          <img
            className={style.img}
            height="708px"
            src={DNM}
            alt="DNM track"
          />
        </div>
      </div>
    </main>
  );
}
