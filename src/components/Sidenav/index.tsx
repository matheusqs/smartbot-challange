import React from 'react';
import Logo from '../../assets/logo.png';
import { BsBarChartFill } from 'react-icons/bs';

import { SidenavContainer, Image, Item } from './styles';

const Sidenav: React.FC = () => (
  <SidenavContainer>
    <div className="image">
      <Image src={Logo} alt="SmartBot Logo" />
    </div>
    <div className="line" />
    <Item>
      <BsBarChartFill />
      <span>Análise geral</span>
    </Item>
  </SidenavContainer>
);

export default Sidenav;
