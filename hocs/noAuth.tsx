import Router from 'next/router';
import React from 'react';
import { storeService } from '../services/store';

export const noAuth = (C) => {
  return class extends React.Component<{}, { loading: boolean }> {
    constructor(props) {
      super(props);
      this.state = { loading: true };
    }

    componentDidMount() {
      const token = storeService.getToken();
      if (token) Router.push('/dashboard');
      else this.setState({ loading: false });
    }

    render() {
      return this.state.loading ? <div /> : <C />;
    }
  };
};
