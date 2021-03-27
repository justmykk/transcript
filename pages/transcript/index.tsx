import React from 'react';
import { AppButton } from '../../components/AppButton';
import { CommonLayout } from '../../components/CommonLayout';
import { AllTransactionFilter } from '../../components/dashboard/AllTransactionFilter';
import { DashboardCard } from '../../components/dashboard/DashboardCard';
import { SearchInput } from '../../components/dashboard/SearchInput';
import { EmptyTransaction } from '../../components/EmptyTransaction';
import { Spacer } from '../../components/Spacer';
import { TransactionTable } from '../../components/table/TransactionTable';

const Transcript = () => {
  const array = [
    { status: 'Pending' },
    { status: 'Successful' },
    { status: 'Failed' },
    { status: 'Successful' },
    { status: 'Successful' },
  ];

  return (
    <CommonLayout>
      <div className="row">
        <DashboardCard title="Total Number of Transaction" value="0" />
        <Spacer type="horizontal" value={30} />
        <DashboardCard title="Total Value of Transaction" value="NGN 200,000" />
        <div style={{ flex: 1 }} />
        <div style={{ flex: 1 }}>
          <AppButton
            label="Apply for Transcript"
            isLink
            href="/transcript/apply"
            fontSize={14}
          />
        </div>
      </div>

      <div className="transcriptRow">
        <AllTransactionFilter />
        <SearchInput />
      </div>

      {array.length < 1 && (
        <EmptyTransaction
          showButton
          emptyImage="empty_transcript"
          buttonLink="/transcript/apply"
        />
      )}

      {array.length > 0 && <TransactionTable list={array} />}
    </CommonLayout>
  );
};

export default Transcript;
