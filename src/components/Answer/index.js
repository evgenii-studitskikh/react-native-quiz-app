import React from 'react';
import styled from 'styled-components';

import {
  Button
} from 'native-base';

const Answer = styled.Text`
  margin-left: 10;
  font-size: 12;
  color: ${({ color }) => color};
`;

export default ({
  index,
  text,
  disabled,
  isCorrect,
  isSelected,
  onPress
}) => {

  let answerBackground = 'transparent';
  let answerColor = '#000000';

  if (disabled && isSelected) {
    answerBackground = isCorrect ? '#35DBA7' : '#FF7043';
    answerColor = '#FFFFFF';
  }
  else if (disabled && !isSelected) {
    answerBackground = isCorrect ? '#35DBA7' : 'transparent'
    answerColor = isCorrect ? '#FFFFFF' : '#000000'
  }
  else {
    answerBackground = isSelected ? '#F2F2F2' : 'transparent'
    answerColor = isSelected ? '#33BFD8' : '#000000'
  }

  return (
    <Button
      full
      activeOpacity={1}
      disabled={disabled}
      onPress={() => onPress(index)}
      style={{
        backgroundColor: answerBackground,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 0.2,
        justifyContent: 'flex-start'
      }}
    >
      <Answer
        color={answerColor}
      >
        {text}
      </Answer>
    </Button>
  )
}
        