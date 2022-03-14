//Third Party Imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRecoilState } from 'recoil';

//First Party Imports
import { COLORS, TAB_COLOR, TAB_ICON, TAB_ICON_TYPE } from './Constants';
import { navigationRef } from './Helpers/Navigation';
import { Home } from './Modules/Home';
import { ScreenContainer } from './Modules/ScreenContainer';
import { Settings } from './Modules/Settings';
import { colorState, initialState, nameState, themeState } from './RecoilState';
import { TTabName } from './Types/TTabName';
import { TTheme } from './Types/TTheme';


const Tab = createBottomTabNavigator();

const App = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [name, setName] = useRecoilState(nameState);
  const [initial, setInitial] = useRecoilState(initialState)
  const [colors, setColors] = useRecoilState(colorState)
  var scheme = useColorScheme()

  useEffect(() => {
    async function loadFromStorage(){
      let localName = await AsyncStorage.getItem('name')
      let localTheme = await AsyncStorage.getItem('theme') as TTheme

      if(localName) setName(localName)
      if(localTheme) setTheme(localTheme)

      setInitial(true)
    }

    loadFromStorage()
  }, [])

  useEffect(() => {
    setColors((theme === 'device' && scheme === 'dark') || theme === 'dark' ? COLORS.dark : COLORS.light)
  }, [theme, scheme])

  useEffect(() => {
    if(!initial) return

    AsyncStorage.setItem("name", name)
    AsyncStorage.setItem("theme", theme)
  }, [name, theme])

  return (
    <>
      <StatusBar barStyle={colors.statusBar}/>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Tab.Navigator initialRouteName="Home" backBehavior='order'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name={TAB_ICON[route.name as TTabName]}
                      type={TAB_ICON_TYPE[route.name as TTabName]}
                      size={size} color={color} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
            },
            tabBarStyle: {backgroundColor: colors.background},
            headerShown: false,
            tabBarActiveTintColor: TAB_COLOR,
          })}>
            <Tab.Screen name="Home">
              {(props) => (
                <ScreenContainer {...props}>
                  <Home/>
                </ScreenContainer>
              )}
            </Tab.Screen>
            <Tab.Screen name="Join">
              {(props) => (
                <ScreenContainer {...props}>
                  <Home/>
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