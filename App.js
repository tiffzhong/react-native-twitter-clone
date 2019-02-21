import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./AppNavigator";
import reducer from "./dux/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(applyMiddleware(reducer));

export default class App extends React.Component {
   render() {
      return (
         <Provider store={store}>
            <AppNavigator />
         </Provider>
      );
   }
}
