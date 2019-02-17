import React from "react";
import styled from 'styled-components';

const CountdownText = styled.Text`
  margin: 5px;
  font-size: 16;
  color: ${({ isHurryUp }) => isHurryUp ? '#E04739' : '#000000'};
`;

export default class Countdown extends React.Component {

  state = {
    time: this.props.time || 60,
    isHurryUp: false
  }

  componentDidMount() {
    this.interval = setInterval(() => {

      this.setState({
        time: --this.state.time
      });

      if (this.state.time <= 0) {
        clearInterval(this.interval);
      }

      if (this.state.time <= 15) {
        this.setState({
          isHurryUp: true
        });
      }

    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const { 
      time,
      isHurryUp
    } = this.state;

    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return (
      <CountdownText 
        isHurryUp={isHurryUp}
      >
        {`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
      </CountdownText>
    );
  }
}
