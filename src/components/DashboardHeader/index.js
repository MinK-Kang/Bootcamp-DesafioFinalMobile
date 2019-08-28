import React from 'react';

import logo from '../../assets/logoM.png';

import {Container, Image} from './styles';

export default function DashboardHeader() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
