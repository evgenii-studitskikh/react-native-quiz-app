import styled from 'styled-components';

export const ProgressLabel = styled.Text`
  color: #DBDBDB;
`;

export const ProgressContainer = styled.View`
  margin-top: 15;
  width: 85%;
`;

export const QuestionContainer = styled.View`
  align-items: center;
  margin-top: 10;
  width: 85%;
`;

export const AnswersContainer = styled.View`
  align-items: center;
  margin-top: 25;
  width: 85%;
  border-top-width: 0.2;
  border-top-color: #F2F2F2;
`;

export const CheckContainer = styled.View`
  align-items: center;
  margin-top: 25;
`;

export const Question = styled.Text`
  text-align: center;
  margin-top: 20;
`;

export const Answer = styled.Text`
  margin-left: 10;
  font-size: 12;
  color: ${({ color }) => color};
`;

export const CheckButtonText = styled.Text`
  font-size: 12;
  color: #FFFFFF;
  margin-left: 70;
  margin-right: 70;
`;

export const CheckStatusText = styled.Text`
  margin-bottom: 20;
  font-size: 12;
  color: ${({ correct }) => correct ? '#35DBA7' : '#FF7043' };
`;
