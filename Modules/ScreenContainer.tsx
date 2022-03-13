//Third Party Imports
import React, { FC } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRecoilValue } from 'recoil';


//First Party Imports
import { MainStyles } from '../Styles/MainStyles';
import { HeaderBarStyle } from '../Styles/HeaderBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorState } from '../RecoilState';
import { SText } from '../Components/SText';
import { TOP_BAR_SIZE } from '../constants';


export const ScreenContainer: FC = ({children}) => {
  const colors = useRecoilValue(colorState);

  return(
    <SafeAreaView style={[MainStyles.container, {width: "100%", backgroundColor: colors.background}]}>
      <View style={[MainStyles.container, {width: "100%"}]}>
        <View style={HeaderBarStyle.container}>
          <TouchableOpacity style={{...MainStyles.borderRadiusC, padding: 5}}>
            <Icon name='menu' size={20} color={colors.text}
            hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{height: TOP_BAR_SIZE, width: TOP_BAR_SIZE}}
            source={require('../Assets/logo.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{...MainStyles.borderRadiusC, padding: 5}}>
            <Icon name='settings' size={20} color={colors.text}
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