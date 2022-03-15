//Third Party Imports
import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Platform, useColorScheme } from 'react-native';
import { BlurView } from "@react-native-community/blur";

//First Party Imports
import { MainStyles } from '../Styles/MainStyles';
import { useRecoilValue } from 'recoil';
import { colorState, themeState } from '../RecoilState';
import { IDevice } from '../Interfaces/IDevice';
import { SImage } from './SImage'
import { SText } from './SText';
import { BlurEffectTypes } from 'react-native-screens';


export interface IShiftCard extends TouchableOpacityProps{
  fillHeight?: boolean
  device: IDevice
}

export const SDevice: FC<IShiftCard> = ({children, style, device, fillHeight=true, ...props}) => {
  const colors = useRecoilValue(colorState)
  const theme = useRecoilValue(themeState)
  const scheme = useColorScheme()

  return (
    <TouchableOpacity style={[style]} {...props}>
      <View style={{position: 'relative'}}>
        <SImage style={[MainStyles.borderRadius2, fillHeight && {height: "100%"}]}
        imageSrc={device.imageURI}/>
        {Platform.OS === 'ios' ?
        <BlurView blurType={(theme === 'device' && scheme === 'dark') || theme === 'dark' ? 'dark' : 'light'}
        style={[{position: 'absolute', bottom: 0, left: 0, padding: 10}, MainStyles.borderRadius2]}>
          <SText style={{fontSize: 20, fontWeight: '500'}}>
            {device.name}
          </SText>
        </BlurView> :
        <View style={[{position: 'absolute', bottom: 0, left: 0, padding: 10},
        MainStyles.borderRadius2, {backgroundColor: colors.overlay}]}>
          <SText style={{fontSize: 20, fontWeight: '500'}}>
            {device.name}
          </SText>
        </View>}
      </View>
    </TouchableOpacity>
  );
}