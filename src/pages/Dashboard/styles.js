import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DatePick = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChevronLeftButton = styled(Button)`
  margin-top: 30px;
  margin-left: 50px;
  background: transparent;
`;

export const ChevronRightButton = styled(Button)`
  margin-top: 30px;
  margin-right: 50px;
  background: transparent;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;
