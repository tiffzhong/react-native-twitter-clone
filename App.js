import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./AppNavigator";
import DashboardReducer from "./dux/DashboardReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(DashboardReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
