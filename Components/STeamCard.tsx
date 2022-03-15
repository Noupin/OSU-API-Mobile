//Third Party Imports
import React, { FC } from 'react';
import { TouchableOpacityProps, View } from 'react-native';

//First Party Imports
import { MainStyles } from '../Styles/MainStyles';
import { useRecoilValue } from 'recoil';
import { colorState } from '../RecoilState';
import { SText } from './SText';


export interface IShiftCard extends TouchableOpacityProps{
  fillHeight?: boolean
  name: string
  description: string
}

export const STeamCard: FC<IShiftCard> = ({children, style, name, description, fillHeight=true, ...props}) => {
  const colors = useRecoilValue(colorState)

  return (
    <View style={[style, MainStyles.borderRadius2, //Can be changed to touchable opacity for button to Team page
    {backgroundColor: colors.textInputBackground, padding: 5}]} {...props}>
      <View style={[MainStyles.center, {position: 'relative', flexDirection: 'column', flex: 1, justifyContent: 'space-around'}]}>
        <View style={[MainStyles.center, {flex: 1}]}>
          <SText style={[MainStyles.textCenter, {fontWeight: 'bold'}]}>{name}</SText>
        </View>
        <View style={[MainStyles.center, {flex: 1}]}>
          <SText style={[MainStyles.textCenter]}>{description}</SText>
        </View>
      </View>
    </View>
  );
}