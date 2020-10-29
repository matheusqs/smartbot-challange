import React, { useState } from 'react';
import { RiMore2Fill } from 'react-icons/ri';
import { GiPauseButton, GiPlayButton } from 'react-icons/gi';
import { MdArrowDropDown, MdArrowDropUp, MdExpandMore } from 'react-icons/md';
import { Line } from '@reactchartjs/react-chart.js';
import moment from 'moment';

import IRobot from '../../models/IRobot';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Info,
  RobotContainer,
  History,
  Tags,
  Tag,
  Paper,
  WorkData,
} from './styles';

interface Props {
  robot: IRobot;
}

const Robot: React.FC<Props> = ({ robot: robotProp }) => {
  const [robot, setRobot] = useState({
    ...robotProp,
    last_paper: {
      ...robotProp.last_paper,
      profit: robotProp.last_paper ? robotProp.last_paper.profit : '0',
    },
  });

  const data = {
    labels: robot.movimentations
      .map(movimentation => moment(movimentation.date).format('HH[h]'))
      .slice(robot.movimentations.length - 8, robot.movimentations.length),
    datasets: [
      {
        data: robot.movimentations
          .map(movimentation => movimentation.value)
          .slice(robot.movimentations.length - 8, robot.movimentations.length),
        fill: false,
        backgroundColor: '#00b39d',
        borderColor: 'rgba(0, 179, 157, 0.2)',
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const start = async () => {
    const response = await api.put<{ data: IRobot }>(
      `/robot/${robot.id}/start`,
    );

    setRobot(response.data.data);
  };

  const stop = async () => {
    const response = await api.put<{ data: IRobot }>(`/robot/${robot.id}/stop`);

    setRobot(response.data.data);
  };

  return (
    <RobotContainer>
      <div>
        <Info running={robot.running}>
          <section>
            <h4>{robot.title}</h4>
            <span>{`#${robot.id}`}</span>
          </section>
          <section>
            <div className="status" />
            <h5>{robot.running ? 'Em execução' : 'Pausado'}</h5>
          </section>
        </Info>
        <Tags>
          <Tag>{robot.mode ? 'Otimista' : 'Pessimista'}</Tag>
          <Tag>{robot.strategy}</Tag>
          <Tag>{robot.type}</Tag>
        </Tags>
        <Paper profit={Number.parseFloat(robot.last_paper.profit)}>
          <h1>{robot.last_paper ? robot.last_paper.position : 0}</h1>
          <div>
            <h4>{robot.last_paper ? robot.last_paper.paper : '-'}</h4>
            <h5>{robot.last_paper ? robot.last_paper.type : '-'}</h5>
          </div>
          <div>
            <span>{robot.last_paper ? robot.last_paper.paper_value : 0}</span>
            <div>
              {Number.parseFloat(robot.last_paper.profit) >= 0 ? (
                <MdArrowDropUp size={18} />
              ) : (
                <MdArrowDropDown size={18} />
              )}
              <span>
                {formatValue(Number.parseFloat(robot.last_paper.profit))}
              </span>
            </div>
          </div>
        </Paper>
        <WorkData daily_balance={robot.daily_balance}>
          <div className="balance">
            <div>
              <span>Saldo diário</span>
              <MdExpandMore size={20} />
            </div>
            <h3>{robot.daily_balance}</h3>
          </div>
          <div className="trades">
            <span>Traders no dia</span>
            <h3>{robot.number_trades}</h3>
          </div>
        </WorkData>
      </div>
      <div>
        <History>
          <section>
            <h4>Histórico do dia</h4>
            <span>
              Última atualização &middot;
              {moment(robot.updated_at).format('hh:mm')}
            </span>
          </section>

          {robot.running ? (
            <GiPauseButton size={20} onClick={stop} />
          ) : (
            <GiPlayButton size={20} onClick={start} />
          )}

          <RiMore2Fill size={20} />
        </History>
        <Line type="line" data={data} options={options} />
      </div>
    </RobotContainer>
  );
};

export default Robot;
