import React from 'react';

function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Props recues :', props);
    return <WrappedComponent {...props} />;
  };
}

export default withLogging;