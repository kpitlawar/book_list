import React from 'react';
import Navigator from './src/Navigator'
import { Provider } from 'react-redux'
import store from './src/store'
import { Root } from 'native-base'

_ = require('lodash');

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Navigator />
        </Root>
      </Provider>
    );
  }
}