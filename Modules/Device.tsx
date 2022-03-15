//Third Party Imports
import React, { FC } from 'react';
import { View } from 'react-native';
import { useRecoilValue } from 'recoil';

//First Party Imports
import { colorState } from '../RecoilState';
import { SText } from '../Components/SText';
import { MainStyles } from '../Styles/MainStyles';
import { IDevice } from '../Interfaces/IDevice';
import { SImage } from '../Components/SImage';
import { ScrollView } from 'react-native-gesture-handler';


interface DeviceProps{
  device: IDevice
}

export const Device: FC<DeviceProps> = ({device}) => {
  const colors = useRecoilValue(colorState);

  return (
    <View style={[MainStyles.container]}>
      <SText style={[MainStyles.textCenter, {marginBottom: 15, fontWeight: 'bold', fontSize: 25}]}>
        {device.name}
      </SText>

      <View style={[MainStyles.center, {flexDirection: 'row', marginVertical: 10}]}>
        <SText style={[MainStyles.textCenter, {flex: 2}]}>Type: {device.type}</SText>
        <SText style={[MainStyles.textCenter, {flex: 3}]}>Category: {device.category}</SText>
      </View>

      <View style={{margin: 10}}>
        <SImage style={[MainStyles.borderRadius2]} imageSrc={device.imageURI}/>
      </View>

      <View style={[MainStyles.borderRadius2, {flex: 1, margin: 10, padding: 10,
      backgroundColor: colors.textInputBackground}]}>
        <ScrollView>
          <SText>
            {device.description}
          </SText>
        </ScrollView>
      </View>
    </View>
  );
}