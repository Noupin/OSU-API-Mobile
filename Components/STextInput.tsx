//Third Party Imports
import React, { FC, useState } from 'react';
import { Icon } from 'react-native-elements';
import { TextInput, TextInputProps, TextStyle, View } from 'react-native';

//First Party Imports
import { useRecoilValue } from 'recoil';
import { colorState } from '../RecoilState';


interface ITextInput extends TextInputProps{
  padding?: string | number
  alignText?: TextStyle['textAlign']
}

export const STextInput: FC<ITextInput> = ({onChangeText, alignText, padding,
  secureTextEntry, ...props}) => {
  const colors = useRecoilValue(colorState)
  const [hidden, setHidden] = useState(true)

  return ( secureTextEntry ?
    <View style={[props.style, {position: 'relative'}]}>
      <TextInput {...props} placeholder={props.placeholder} onChangeText={onChangeText}
        value={props.value} placeholderTextColor={colors.placeholderText} secureTextEntry={hidden}
        style={{alignSelf: 'stretch', textAlign: alignText, padding: padding, color: colors.text}}/>
      <View style={{position: 'absolute', top: 0, bottom: 0, right: 0, marginRight: 10, justifyContent: 'center'}}>
        <Icon name={hidden ? "visibility" : "visibility-off"} type="material" color={colors.text}
        onPress={() => setHidden(prev => !prev)} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
      </View>
    </View>
    :
    <View style={[props.style, {position: 'relative'}]}>
      <TextInput {...props} placeholder={props.placeholder} onChangeText={onChangeText}
        value={props.value} placeholderTextColor={colors.placeholderText} secureTextEntry={secureTextEntry}
        style={{alignSelf: 'stretch', textAlign: alignText, padding: padding, color: colors.text}}/>
    </View>
  );
}