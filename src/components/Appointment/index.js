import React, {useMemo} from 'react';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import meetup from '../../assets/meetup.jpeg';

import {
  Container,
  Left,
  Image,
  Info,
  EventName,
  DateMeetup,
  Location,
  Organizer,
} from './styles';

export default function Appointment({data, onCancel}) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container past={false}>
      <Image source={meetup} />
      <Left>
        <Info>
          <EventName>Meetup de React Native</EventName>
          <DateMeetup>
            <Icon name="event" size={20} />
            24 de Junho, às 20h
          </DateMeetup>
          <Location>
            <Icon name="location-on" size={20} />
            Rua Guilherme Gembala, 260
          </Location>
          <Organizer>
            <Icon name="person" size={20} />
            Organizador: Min
          </Organizer>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c74" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
