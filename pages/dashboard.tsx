import styles from '../styles/Dashboard.module.css';
import { CommonLayout } from '../components/CommonLayout';
import { DashboardCard } from '../components/dashboard/DashboardCard';
import { AllTransactionFilter } from '../components/dashboard/AllTransactionFilter';
import { SearchInput } from '../components/dashboard/SearchInput';
import { EmptyTransaction } from '../components/dashboard/EmptyTransaction';

const Spacer = () => <div style={{ width: 30 }} />;

const Dashboard = () => {
  return (
    <CommonLayout>
      <div className={styles.cardRow}>
        <DashboardCard title="Total Number of Transaction" value="0" />
        <Spacer />
        <DashboardCard title="Total Value of Transaction" value="NGN 0" />
        <Spacer />
        <DashboardCard title="Total Transcript Application " value="0" />
        <Spacer />
        <DashboardCard title="Total School Fees " value="0" />
      </div>

      <div className={styles.tableTopRow}>
        <AllTransactionFilter />
        <SearchInput />
      </div>

      <EmptyTransaction />
    </CommonLayout>
  );
};

export default Dashboard;
