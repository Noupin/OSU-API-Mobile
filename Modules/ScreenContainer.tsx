//Third Party Imports
import React, { FC } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRecoilValue } from 'recoil';
import { useRoute } from '@react-navigation/native';


//First Party Imports
import { MainStyles } from '../Styles/MainStyles';
import { HeaderBarStyle } from '../Styles/HeaderBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorState } from '../RecoilState';
import { BACK_ICON, TAB_ICON, TAB_ICON_TYPE, TOP_BAR_SIZE } from '../Constants';
import { homeNavigationRef, navigate, navigationRef, settingsNavigationRef } from '../Helpers/Navigation';


export const ScreenContainer: FC = ({children}) => {
  const colors = useRecoilValue(colorState);
  const route = useRoute();

  let localNavigation: any;
  if(navigationRef.current?.getCurrentRoute().name === 'Settings' && settingsNavigationRef.current &&
  settingsNavigationRef.current.canGoBack()){
    localNavigation = settingsNavigationRef.current
  }
  if(navigationRef.current?.getCurrentRoute().name === 'Home' && homeNavigationRef.current &&
  homeNavigationRef.current.canGoBack()){
    localNavigation = homeNavigationRef.current
  }

  return(
    <SafeAreaView style={[MainStyles.container, {width: "100%", backgroundColor: colors.background}]}>
      <View style={[MainStyles.container, {width: "100%"}]}>
        <View style={HeaderBarStyle.container}>
          {localNavigation ?
          <TouchableOpacity style={{...MainStyles.borderRadiusC, padding: 5}}>
            <Icon name={BACK_ICON.name} type={BACK_ICON.type} size={20} color={colors.text}
            hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}
            onPress={() => {localNavigation.goBack()}}/>
          </TouchableOpacity> :
          //This is invisible and does nothing when pressed, it just renders to keep the logo centered
          <TouchableOpacity style={{...MainStyles.borderRadiusC, padding: 5}}>
            <Icon name={BACK_ICON.name} type={BACK_ICON.type} size={20} color={colors.background}
            hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
          </TouchableOpacity>}
          <TouchableOpacity>
            <Image style={{height: TOP_BAR_SIZE, width: TOP_BAR_SIZE} /*Logo is too busy*/}
            source={{uri: 'https://u.osu.edu/ohiostateapi/files/2019/10/cropped-logo.jpg'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{...MainStyles.borderRadiusC, padding: 5}}
          onPress={() => {
            if(route.name !== 'Settings'){
              navigate('Settings')
            }
          }}>
            <Icon name={TAB_ICON.Settings} type={TAB_ICON_TYPE.Settings} size={20} color={colors.text}
            hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
          </TouchableOpacity>
        </View>
        <View style={[MainStyles.container, {justifyContent: 'space-between'}]}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}