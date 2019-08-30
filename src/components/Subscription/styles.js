import styled from 'styled-components/native';

import Button from '../Button';

export const Container = styled.View`
  margin-bottom: 15px;
  /* padding: 20px; */
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
`;

export const Image = styled.Image`
  width: 100%;
  height: 120px;
  margin-bottom: 15;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const EventName = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const DateMeetup = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const Location = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const Organizer = styled.Text`
  flex-direction: row;
  align-items: center;
  color: #999;
  font-size: 13px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const InscriptionButton = styled(Button)`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 35px;
  width: 200px;
`;
