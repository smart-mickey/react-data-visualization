import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as CoinsActions } from '../../store/ducks/coins';
import { Creators as FavoritesActions } from '../../store/ducks/favorites';

import ConfirmButton from '../../components/ConfirmButton';
import CoinGrid from '../../components/CoinGrid';
import Search from '../../components/Search';

import { Container, Title } from './styles';

class Settings extends Component {
  state = {
    showTitle: true,
  };

  static propTypes = {
    getCoinsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getCoinsRequest } = this.props;

    getCoinsRequest();
  }

  handleConfirmButtonClick = () => {
    this.setState({ showTitle: false });
  };

  render() {
    const { showTitle } = this.state;

    return (
      <Container>
        {showTitle && (
          <Title>Welcome to CryptoDash, please select your favorite coins to begin</Title>
        )}
        <ConfirmButton click={this.handleConfirmButtonClick} />
        <Search />
        <CoinGrid />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...CoinsActions, ...FavoritesActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Settings);
