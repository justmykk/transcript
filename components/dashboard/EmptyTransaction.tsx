import styles from '../../styles/Dashboard.module.css';

export const EmptyTransaction = () => {
  return (
    <div className={styles.emptyContainer}>
      <img src="/empty.svg" alt="empty transaction" />
      <p className={styles.emptyContainerOne}>No transaction yet</p>
      <p className={styles.emptyContainerTwo}>Once you Perform a transaction, it‘ll show here</p>
    </div>
  );
};
