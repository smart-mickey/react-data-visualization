import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';

import { Container, Logo, RouterLink, Button } from './styles';

const VALUES = {
  DASHBOARD: 'Dashboard',
  SETTINGS: 'Settings',
};

class Bar extends Component {
  state = {
    current: VALUES.DASHBOARD,
  };

  componentDidMount() {
    const { getPricesRequest, addFavoriteStorage } = this.props;
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptodash@dataFavorites'));

    if (!cryptoDashData) {
      this.setState({ current: VALUES.SETTINGS });
    }
    else {
      addFavoriteStorage(cryptoDashData);
      getPricesRequest();
    }
  }

  handleClick = (current) => {
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <Container>
        <Logo>CryptoDash</Logo>
        <div />
        <RouterLink to="/dashboard">
          <Button
            onClick={() => this.handleClick(VALUES.DASHBOARD)}
            active={current === VALUES.DASHBOARD}
          >{VALUES.DASHBOARD}</Button>
        </RouterLink>
        <RouterLink to="/settings">
          <Button
            onClick={() => this.handleClick(VALUES.SETTINGS)}
            active={current === VALUES.SETTINGS}
          >{VALUES.SETTINGS}</Button>
        </RouterLink>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(null, mapDispatchToProps)(Bar);
