//Third Party Imports
import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';


export const FButton: FC<TouchableOpacityProps> = ({children, onPress, style, ...props}) => {

  return (
    <TouchableOpacity {...props} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}