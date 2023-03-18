import React from "react";
import Icons from 'react-native-vector-icons/dist/Flaticons';
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "./screens/Home";
import Setting from "./screens/Settings";

const TabNavigator = createBottomTabNavigator({
Home: {
	screen: HomeScreen,
	navigationOptions: {
	tabBarLabel: "Home",
	tabBarOptions: {
		activeTintColor: "#006600",
	},
	tabBarIcon: (tabInfo) => {
		return (
		<Icons
			name="./assets/home.gif"
			size={24}
            color={tabInfo.focused ? "#006600" : "#8e8e93"}
		/>
		);
	},
	},
},
Settings: {
	screen: SettingScreen,
	navigationOptions: {
	tabBarLabel: "Setting",
	tabBarOptions: {
	},
	tabBarIcon: (tabInfo) => {
		return (
		<Icons
			name="./assets/history.gif"
			size={24}
			color={tabInfo.focused ? "#006600" : "#8e8e93"}
		/>
		);
	},
	},
},
});

const Navigator = createBottomTabNavigatorContainer(TabNavigator);

export default function BottomTabNavigator() {
return (
	<Navigator>
	<Home />
	</Navigator>
);
}
