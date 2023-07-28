
import {NavigationContainer} from "@react-navigation/native";
import {homeStyles} from "./style/homeStyles";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Shop from "./screens/Shop";
import Food from "./screens/Food";
import {App_style} from "./style/App_style";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName={"Home"} tabBarOptions={App_style.tabBarOptions} >
              {/*options={homeStyles.objectiveption}*/}
              <Tab.Screen name={"Shop"} component={Shop} options={App_style.shopOption}/>
              <Tab.Screen name={"Home"} component={Home} options={App_style.homeOption}/>
              <Tab.Screen name={"Food"} component={Food} options={App_style.foodOption}/>

          </Tab.Navigator>
      </NavigationContainer>
  );
}
