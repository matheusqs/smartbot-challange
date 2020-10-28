import React, { useEffect, useState } from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import Sidenav from '../../components/Sidenav';
import Robot from '../../components/Robot';
import formatValue from '../../utils/formatValue';
import Switch from '@material-ui/core/Switch';

import AddRobotImg from '../../assets/add-robot-icon.png';
import IRobot from '../../models/IRobot';
import api from '../../services/api';

import {
  AddRobot,
  DashboardContainer,
  GeneralOperations,
  Header,
  Robots,
  SidenavContainer,
  Texts,
  Transaction,
} from './styles';

interface RobotsSummary {
  moviment_summary: number;
  transactions: number;
  open_positions: number;
  papers: Array<{
    name: string;
    trasactions: number;
  }>;
}

const Dashboard: React.FC = () => {
  const [robots, setRobots] = useState<IRobot[]>([]);
  const [transactions, setTransactions] = useState<RobotsSummary>({
    moviment_summary: 0,
    open_positions: 0,
    papers: [],
    transactions: 0,
  });

  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    loadRobots();
  }, []);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/robot/overview');

      setTransactions(response.data.data);
    }

    loadTransactions();
  }, []);

  async function loadRobots(): Promise<void> {
    const response = await api.get('/robot', {
      params: { mode: toggle ? 0 : 1 },
    });

    setRobots(response.data.data);
  }

  const handleChange = (event: { target: { checked: boolean } }) => {
    setToggle(event.target.checked);

    loadRobots();
  };

  return (
    <DashboardContainer>
      <SidenavContainer>
        <Sidenav />
      </SidenavContainer>
      <div>
        <Header>
          <BsBarChartFill />
          <div className="line" />
          <Texts>
            <p>Análise Geral</p>
            <p>&nbsp;/&nbsp;</p>
            <p>Principal</p>
          </Texts>
          <p>Modo Simulado</p>
          <Switch
            checked={toggle}
            onChange={handleChange}
            name="isSimulation"
            color="default"
          />
          <p>Modo Real</p>
        </Header>
        <GeneralOperations total={transactions.moviment_summary}>
          <h5>Resumo geral operações</h5>
          <div className="transactions-info">
            <div>
              <span>Resumo das movimentações</span>
              <h4>{formatValue(transactions.moviment_summary)}</h4>
            </div>
            <div>
              <span>Total das transações realizadas</span>
              <h4>{transactions.transactions}</h4>
            </div>
          </div>
          <div className="line" />
          <span>Papéis negociados</span>
          <div className="transactions">
            {transactions.papers.map((paper, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Transaction key={index}>
                <h3>{paper.name}</h3>
                <div className="line--dotted" />
                <strong>{paper.trasactions}</strong>
                <span>transações</span>
              </Transaction>
            ))}
          </div>
        </GeneralOperations>
        <AddRobot>
          <button type="button" className="add-robot">
            <img src={AddRobotImg} alt="Add Robot" />
          </button>
          <div>
            <h4>Adicionar novo Robô</h4>
            <span>
              Você possui&nbsp;
              <strong>02 Robôs</strong>
              &nbsp;disponíveis
            </span>
          </div>
          <h5>Plano Pro &middot;&nbsp;</h5>
          <button type="button" className="upgrade">
            Fazer Upgrade de plano
          </button>
        </AddRobot>
        <Robots>
          {robots.map(robot => (
            <Robot key={robot.id} robot={robot} />
          ))}
        </Robots>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
