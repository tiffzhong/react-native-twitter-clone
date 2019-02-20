import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Button, Text, View } from "react-native";

import Dashboard from "./screens/Dashboard";
import Splash from "./screens/Splash";
import PostTweet from "./screens/PostTweet";
import Search from "./screens/Search";
import DirectMessages from "./screens/DirectMessages";

const SplashStack = createStackNavigator({
  Splash: { screen: Splash },
  Dashboard: { screen: Dashboard }
});

const DashboardStack = createStackNavigator({
  Dashboard: { screen: Dashboard },
  PostTweet: { screen: PostTweet }
});

const SearchStack = createStackNavigator({
  Search: { screen: Search },
  PostTweet: { screen: PostTweet }
});
const DMStack = createStackNavigator({
  DirectMessages: { screen: DirectMessages },
  PostTweet: { screen: PostTweet }
});
// const AppContainer = createAppContainer(SplashStack);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Dashboard: { screen: DashboardStack },
      Search: { screen: SearchStack },
      DirectMessages: { screen: DMStack }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Dashboard") {
            iconName = `ios-information `;
          }
        }
      })
    }
  )
);
