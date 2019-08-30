import React, {useEffect, useState, useMemo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';
import {format, subDays, addDays} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import Background from '../../components/Background';
import DashboardHeader from '../../components/DashboardHeader';
import Subscription from '../../components/Subscription';

import {
  Container,
  Title,
  List,
  DatePick,
  ChevronLeftButton,
  ChevronRightButton,
} from './styles';

function Dashboard({isFocused}) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [meetupDate, setMeetupDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(meetupDate, "dd 'de' MMMM", {locale: pt}),
    [meetupDate],
  );

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`subscriptions/${id}`);

    setSubscriptions(
      subscriptions.map(subscription =>
        subscription.id === id
          ? {
              ...subscription,
              canceled_at: response.data.canceled_at,
            }
          : subscription,
      ),
    );
  }

  function handlePrevDate() {
    setMeetupDate(subDays(meetupDate, 1));
  }

  function handleNextDate() {
    setMeetupDate(addDays(meetupDate, 1));
  }

  return (
    <Background>
      <Container>
        <DashboardHeader />

        <DatePick>
          <ChevronLeftButton onPress={handlePrevDate}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </ChevronLeftButton>

          <Title>{dateFormatted}</Title>

          <ChevronRightButton onPress={handleNextDate}>
            <Icon name="chevron-right" size={20} color="#fff" />
          </ChevronRightButton>
        </DatePick>
        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Subscription onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => <Icon name="list" size={20} color={tintColor} />,
};

export default withNavigationFocus(Dashboard);
