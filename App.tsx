//Third Party Imports
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRecoilState } from 'recoil';

//First Party Imports
import { COLORS, NULL_DEVICE, TAB_COLOR, TAB_ICON, TAB_ICON_TYPE } from './Constants';
import { homeNavigationRef, navigationRef, settingsNavigationRef } from './Helpers/Navigation';
import { Attendance } from './Modules/Attendance';
import { Device } from './Modules/Device';
import { DeviceType } from './Modules/DeviceType';
import { Home } from './Modules/Home';
import { Join } from './Modules/Join';
import { ScreenContainer } from './Modules/ScreenContainer';
import { Settings } from './Modules/Settings';
import { attendanceTypeState, colorState, initialState, nameState, themeState } from './RecoilState';
import { TAttendanceType } from './Types/TAttendanceType';
import { TTabName } from './Types/TTabName';
import { TTheme } from './Types/TTheme';


const SettingsStack = createNativeStackNavigator();

const SettingsScreenStack = () => {
  return (
    <NavigationContainer independent ref={settingsNavigationRef}>
      <SettingsStack.Navigator screenOptions={{headerShown: false}}>
        <SettingsStack.Screen name="Settings">
          {(props) => (
            <ScreenContainer {...props}>
              <Settings/>
            </ScreenContainer>
          )}
        </SettingsStack.Screen>
        <SettingsStack.Screen name="Attendance">
          {(props) => (
            <ScreenContainer {...props}>
              <Attendance/>
            </ScreenContainer>
          )}
        </SettingsStack.Screen>
      </SettingsStack.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <NavigationContainer independent ref={homeNavigationRef}>
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home">
          {(props) => (
            <ScreenContainer {...props}>
              <Home/>
            </ScreenContainer>
          )}
        </HomeStack.Screen>
        <HomeStack.Screen name="DeviceType">
          {(props) => (
            <ScreenContainer {...props}>
              <DeviceType type='' {...props.route.params}/>
            </ScreenContainer>
          )}
        </HomeStack.Screen>
        <HomeStack.Screen name="Device">
          {(props) => (
            <ScreenContainer {...props}>
              <Device device={NULL_DEVICE} {...props.route.params}/>
            </ScreenContainer>
          )}
        </HomeStack.Screen>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}


const Tab = createBottomTabNavigator();

const App = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const [name, setName] = useRecoilState(nameState)
  const [initial, setInitial] = useRecoilState(initialState)
  const [colors, setColors] = useRecoilState(colorState)
  const [attendanceType, setAttendanceType] = useRecoilState(attendanceTypeState)
  const scheme = useColorScheme()

  useEffect(() => {
    async function loadFromStorage(){
      let localName = await AsyncStorage.getItem('name')
      let localTheme = await AsyncStorage.getItem('theme') as TTheme
      let localAttendanceType = await AsyncStorage.getItem('attendanceType') as TAttendanceType

      if(localName) setName(localName)
      if(localTheme) setTheme(localTheme)
      if(localAttendanceType) setAttendanceType(localAttendanceType)

      setInitial(true)
    }

    loadFromStorage()
  }, [])

  useEffect(() => {
    setColors((theme === 'device' && scheme === 'dark') || theme === 'dark' ? COLORS.dark : COLORS.light)
  }, [theme, scheme])

  useEffect(() => {
    if(!initial) return

    AsyncStorage.setItem('name', name)
    AsyncStorage.setItem('theme', theme)
    AsyncStorage.setItem('attendanceType', attendanceType)
  }, [name, theme, attendanceType])

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
            <Tab.Screen name="Home" component={HomeScreenStack}/>
            <Tab.Screen name="Join">
              {(props) => (
                <ScreenContainer {...props}>
                  <Join/>
                </ScreenContainer>
              )}
            </Tab.Screen>
            <Tab.Screen name="Settings" component={SettingsScreenStack}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;