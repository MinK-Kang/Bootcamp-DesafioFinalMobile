import React, {useEffect, useState} from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Background from '../../components/Background';
import DashboardHeader from '../../components/DashboardHeader';
import Subscription from '../../components/Subscription';

import {Container, SubscriptionList} from './styles';

function Inscription({navigation, isFocused}) {
  const [meetups, setMeetups] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');

    setMeetups(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <DashboardHeader />
        <SubscriptionList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Subscription data={item} subscription />}
        />
      </Container>
    </Background>
  );
}

Inscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Inscription);
