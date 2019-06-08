import React from 'react';
import PropTypes from 'prop-types';

class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  };
  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <div>Something went wrong!</div> : children;
  }
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  static getDerivedStateFromError() {
    return { isError: true };
  }
}

export default DefaultErrorBoundary;
