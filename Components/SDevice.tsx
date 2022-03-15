//Third Party Imports
import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

//First Party Imports
import { MainStyles } from '../Styles/MainStyles';
import { useRecoilValue } from 'recoil';
import { colorState } from '../RecoilState';
import { IDevice } from '../Interfaces/IDevice';
import { SImage } from './SImage'
import { SText } from './SText';


export interface IShiftCard extends TouchableOpacityProps{
  fillHeight?: boolean
  device: IDevice
}

export const SDevice: FC<IShiftCard> = ({children, style, device, fillHeight=true, ...props}) => {
  const colors = useRecoilValue(colorState)

  return (
    <TouchableOpacity style={[style]} {...props}>
      <View style={{position: 'relative'}}>
        <SImage style={[MainStyles.borderRadius2, fillHeight && {height: "100%"}]}
        imageSrc={device.imageURI}/>
        <View style={[{position: 'absolute', bottom: 0, left: 0, padding: 5},
        MainStyles.borderRadius2, {backgroundColor: colors.overlay}]}>
          <SText style={{fontSize: 20, fontWeight: '500'}}>
            {device.name}
          </SText>
        </View>
      </View>
    </TouchableOpacity>
  );
}