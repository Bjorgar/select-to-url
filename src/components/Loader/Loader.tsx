import * as styles from './Loader.css';

export default function Loader() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
      <div className={styles.spinnerChild} />
    </div>
  );
}
