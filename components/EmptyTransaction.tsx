import styles from '../styles/Dashboard.module.css';
import { AppButton } from './AppButton';

interface Props {
  emptyImage?: string;
  onButtonClick?: () => void;
  showButton?: boolean;
}

export const EmptyTransaction: React.FC<Props> = (props) => {
  const image = props.emptyImage || 'empty';

  return (
    <div className={styles.emptyContainer}>
      <img src={`/${image}.svg`} alt="empty transaction" />
      <p className={styles.emptyContainerOne}>No transaction yet</p>
      <p className={styles.emptyContainerTwo}>
        Once you perform a transaction, it‘ll show here
      </p>

      {props.showButton && (
        <div style={{ marginTop: 40 }}>
          <AppButton
            label="Apply for Transcript"
            onClick={props.onButtonClick}
            fontSize={14}
          />
        </div>
      )}
    </div>
  );
};
