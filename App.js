import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./screens/MainScreen";
import QuestionScreen from "./screens/QuestionScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // скрываем заголовок
          }}
        >
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;