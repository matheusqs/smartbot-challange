import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import Sidenav from '../../components/Sidenav';
import formatValue from '../../utils/formatValue';

import {
  DashboardContainer,
  GeneralOperations,
  Header,
  Texts,
  Transaction,
} from './styles';

const Dashboard: React.FC = () => {
  const transactions: Array<{
    id: number;
    paper: string;
    transactions: number;
  }> = [
    { id: 1, paper: 'wing20', transactions: 157 },
    { id: 2, paper: 'wing20', transactions: 157 },
    { id: 3, paper: 'abev', transactions: 215 },
    { id: 4, paper: 'abev', transactions: 215 },
    { id: 5, paper: 'bova11', transactions: 71 },
    { id: 6, paper: 'bova11', transactions: 71 },
  ];

  const total = -220;

  return (
    <DashboardContainer>
      <Sidenav />
      <div>
        <Header>
          <BsBarChartFill />
          <div className="line" />
          <Texts>
            <p>Análise Geral</p>
            <p>&nbsp;/&nbsp;</p>
            <p>Principal</p>
          </Texts>
        </Header>
        <GeneralOperations total={total}>
          <h5>Resumo geral operações</h5>
          <div className="transactions-info">
            <div>
              <span>Resumo das movimentações</span>
              <h4>{formatValue(total)}</h4>
            </div>
            <div>
              <span>Total das transações realizadas</span>
              <h4>443</h4>
            </div>
          </div>
          <div className="line" />
          <span>Papéis negociados</span>
          <div className="transactions">
            {transactions.map(transaction => (
              <Transaction key={transaction.id}>
                <h3>{transaction.paper}</h3>
                <div className="line--dotted" />
                <strong>{transaction.transactions}</strong>
                <span>transações</span>
              </Transaction>
            ))}
          </div>
        </GeneralOperations>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
