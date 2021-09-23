import styles from './testGrid.module.scss'

export default function TestGrid() {
  return <section className={styles['grid-test']}>
    <div className={styles.row}>
      <div className={styles['col-1-of-2']}>Col 1 of 2</div>
      <div className={styles['col-1-of-2']}>Col 1 of 2</div>
    </div>
    <div className={styles.row}>
      <div className={styles['col-1-of-3']}>Col 1 of 3</div>
      <div className={styles['col-1-of-3']}>Col 1 of 3</div>
      <div className={styles['col-1-of-3']}>Col 1 of 3</div>
    </div>
    <div className={styles.row}>
      <div className={styles['col-1-of-3']}>Col 1 of 3</div>
      <div className={styles['col-2-of-3']}>Col 2 of 3</div>
    </div>
    <div className={styles.row}>
      <div className={styles['col-1-of-4']}>Col 1 of 4</div>
      <div className={styles['col-1-of-4']}>Col 1 of 4</div>
      <div className={styles['col-1-of-4']}>Col 1 of 4</div>
      <div className={styles['col-1-of-4']}>Col 1 of 4</div>
    </div>
    <div className={styles.row}>
      <div className={styles['col-1-of-4']}>Col 1 of 4</div>
      <div className={styles['col-1-of-4']}>Col 1 of 4</div>
      <div className={styles['col-2-of-4']}>Col 2 of 4</div>
    </div>
    <div className={styles.row}>
      <div className={styles['col-1-of-4']}>Col 1 of 4</div>
      <div className={styles['col-3-of-4']}>Col 3 of 4</div>
    </div>
  </section>
}