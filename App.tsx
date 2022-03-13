//Third Party Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRecoilState, useRecoilValue } from 'recoil';

//First Party Imports
import { COLORS } from './constants';
import { ScreenContainer } from './Modules/ScreenContainer';
import { Settings } from './Modules/Settings';
import { colorState, themeState } from './RecoilState';


const Tab = createBottomTabNavigator();

const App = () => {
  const theme = useRecoilValue(themeState);
  const [colors, setColors] = useRecoilState(colorState)
  var scheme = useColorScheme()

  useEffect(() => {
    setColors((theme === 'device' && scheme === 'dark') || theme === 'dark' ? COLORS.dark : COLORS.light)
  }, [theme, scheme])

  return (
    <>
      <StatusBar barStyle={colors.statusBar}/>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home" backBehavior='order'
          screenOptions={{tabBarStyle: {backgroundColor: colors.background}, headerShown: false}}>
            <Tab.Screen name="Home">
              {(props) => (
                <ScreenContainer {...props}>
                  <Settings/>
                </ScreenContainer>
              )}
            </Tab.Screen>
            <Tab.Screen name="Settings">
              {(props) => (
                <ScreenContainer {...props}>
                  <Settings/>
                </ScreenContainer>
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;