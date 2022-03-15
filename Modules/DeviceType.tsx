//Third Party Imports
import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

//First Party Imports
import { colorState, nameState, themeState } from '../RecoilState';
import { SText } from '../Components/SText';
import { DEVICES } from '../Constants';
import { homeNavigate } from '../Helpers/Navigation';
import { SDevice } from '../Components/SDevice';


interface DeviceTypeProps{
  type: string
}

export const DeviceType: FC<DeviceTypeProps> = ({type}) => {
  const [theme, setTheme] = useRecoilState(themeState);
  const colors = useRecoilValue(colorState);
  const [name, setName] = useRecoilState(nameState)

  const devicesFromType = DEVICES.filter((device) => device.type === type)

  return (
    <View style={{flex: 1, alignItems: "center", marginHorizontal: 10}}>
      <SText style={{marginBottom: 15, fontWeight: 'bold', fontSize: 25}}>{`${type}s`}</SText>

      <FlatList data={devicesFromType} keyExtractor={item => item.name}
      renderItem={({item}) => (
        <View style={{flexDirection: 'row'}}>
          <SDevice style={{margin: 10}} device={item} fillHeight={false}
          onPress={() => homeNavigate('Device', {device: item})}/>
        </View>
      )}/>
    </View>
  );
}