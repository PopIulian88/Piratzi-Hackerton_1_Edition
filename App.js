
import {NavigationContainer} from "@react-navigation/native";
import {homeStyles} from "./style/homeStyles";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import Food from "./screens/Food";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName={"Home"} tabBarOptions={homeStyles.tabBarOptions}>
              {/*options={homeStyles.objectiveption}*/}
              <Tab.Screen name={"Shop"} component={Shop}/>
              <Tab.Screen name={"Home"} component={Home}/>
              <Tab.Screen name={"Food"} component={Food}/>

          </Tab.Navigator>
      </NavigationContainer>
  );
}
