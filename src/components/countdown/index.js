import React from 'react';
import styled from 'styled-components';

const CountdownText = styled.Text`
  margin: 5px;
  font-size: 16;
  color: ${({ isHurryUp }) => isHurryUp ? '#E04739' : '#000000'};
`;

export default class Countdown extends React.Component {

  state = {
    time: this.props.time || 60,
    isHurryUp: false,
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.isPause) {
      clearInterval(this.interval);
    }

    if (nextProps.isRefreshed) {

      this.setState({
        time: this.props.time || 60
      });

      this.startCounting();
    }
  }

  componentDidMount() {
    this.startCounting();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startCounting = () => {
    const {
      onEnd,
      time,
    } = this.props;

    const {
      isPause
    } = this.state;

    clearInterval(this.interval);

    this.interval = setInterval(() => {

      this.setState({
        time: --this.state.time
      });

      if (this.state.time <= 0) {
        this.setState({
          time
        });

        onEnd();
      }

      if (this.state.time <= 15) {
        this.setState({
          isHurryUp: true
        });
      }

    }, 1000);
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

Countdown.defaultProps = { 
  onEnd: () => false,
};
