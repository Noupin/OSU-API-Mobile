//Third Party Imports
import React, { FC } from 'react';
import { View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

//First Party Imports
import { colorState, nameState, themeState } from '../RecoilState';
import { SText } from '../Components/SText';
import { MainStyles } from '../Styles/MainStyles';


interface DeviceTypeProps{
  type: string
}

export const DeviceType: FC<DeviceTypeProps> = ({type}) => {
  const [theme, setTheme] = useRecoilState(themeState);
  const colors = useRecoilValue(colorState);
  const [name, setName] = useRecoilState(nameState)

  return (
    <View style={{flex: 1, alignItems: "center", marginHorizontal: 10}}>
      <SText style={{marginBottom: 15, fontWeight: 'bold', fontSize: 25}}>Device Type: {type}</SText>
    </View>
  );
}