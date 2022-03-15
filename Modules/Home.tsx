//Third Party Imports
import React, { FC } from 'react';
import { View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

//First Party Imports
import { colorState, nameState, themeState } from '../RecoilState';
import { SText } from '../Components/SText';
import { MainStyles } from '../Styles/MainStyles';
import { FlatList } from 'react-native-gesture-handler';
import { DEVICES } from '../Constants';
import { SDevice } from '../Components/SDevice';
import { IDevice } from '../Interfaces/IDevice';
import { TDeviceTypeArray } from '../Types/TDeviceType';


export const Home: FC = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const colors = useRecoilValue(colorState);
  const [name, setName] = useRecoilState(nameState)

  const categoryDevices: IDevice[] = []
  TDeviceTypeArray.forEach((type) => {
    const tempArr = DEVICES.filter((device) => device.type === type)
    if(tempArr.length === 0) return;

    const tempDevice = tempArr[0]
    tempDevice.name = `${type}s`
    categoryDevices.push(tempDevice)
  })

  return (
    <View style={{flex: 1, alignItems: "center", marginHorizontal: 10}}>
      <SText style={{marginBottom: 15, fontWeight: 'bold', fontSize: 25}}>Home</SText>
      <FlatList data={categoryDevices} keyExtractor={item => item.name}
      renderItem={({item}) => (
        <View style={{flexDirection: 'row'}}>
          <SDevice style={{margin: 10}} device={item} fillHeight={false}/>
        </View>
      )}/>
    </View>
  );
}