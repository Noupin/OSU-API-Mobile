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
import { BACK_ICON, TAB_ICON, TAB_ICON_TYPE, TOP_BAR_SIZE } from '../Constants';
import { navigate, navigationRef } from '../Helpers/Navigation';


export const ScreenContainer: FC = ({children}) => {
  const colors = useRecoilValue(colorState);

  return(
    <SafeAreaView style={[MainStyles.container, {width: "100%", backgroundColor: colors.background}]}>
      <View style={[MainStyles.container, {width: "100%"}]}>
        <View style={HeaderBarStyle.container}>
          {navigationRef.current && navigationRef.current.canGoBack() ?
          <TouchableOpacity style={{...MainStyles.borderRadiusC, padding: 5}}>
            <Icon name={BACK_ICON.name} type={BACK_ICON.type} size={20} color={colors.text}
            hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}
            onPress={() => {navigationRef.current.goBack()}}/>
          </TouchableOpacity> :
          //This is invisible and does nothing when pressed, it just renders to keep spacing
          <TouchableOpacity style={{...MainStyles.borderRadiusC, padding: 5}}>
            <Icon name={BACK_ICON.name} type={BACK_ICON.type} size={20} color={colors.background}
            hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}/>
          </TouchableOpacity>}
          <TouchableOpacity>
            <Image style={{height: TOP_BAR_SIZE, width: TOP_BAR_SIZE} /*Logo is too busy*/}
            source={{uri: 'https://lh3.googleusercontent.com/e7aq6h-2zG4mGP4zSq-UZklwfsyHzbx3lMNHxnjW9MazFmGZEkBSq_vQFlel6y32lfX-LAMGOKPNQhNFyGz6H1FgG5JV0d9K20vC4pKhCrfrcerrg-rE3DaGZILaaZkUzE_uDp2tXkRpp0YdcsOhFGURMvsT7DJ_PeyG00cFkdX54BgO4NRw78W80DmriVKOCNX7c9d271eYxwLPoXwhAiccahKz1FlOFN4tsuu-lTjckfdDMEf6YatIUePln8Y-mHbiCtlI7zvNZZ6OGHa7yKyvnv5VxNgEsZYuaeNFJ5utA2Posfp3Ix1DN0ZUxL_SUJ3BPYgGxs3GQ1KeFlkGqvRAo0Rb_YdJjExGv-eSwJVUI4EH6S6V9aOPqG8CMZS0QzY7XZH96C5GqXW39lA5dyuzcz4szVeX-BYWr_fVAyR3WOdP7QeJlzs3dUyP3E5_GD9cmNX9CbSuGTjyjSRMFN1VGTKn3SYSLb6iwu1v4nzVB4eYfrgIc9EPC068SivDYCG14AO5ySPp2KXTNG8vJD6UwE7XIzo1boGXh8-Fpl5M58D8CdAtL7_OHZrqzGHHNl9QBt-6yY9TQHewZRxQRz9V1fRu-WS4W5VmQ65y-NU4uYw6f-9OoZmSrNAnYkOHmr5XAc82n-H3SQmCAvONxlYqIjvCOYMGAolKA-8cvvTOcbx4nRTRcta-Izfj0pb06tFImIJAdUBvgrNqHdfDUMXz=s1436-no?authuser=0'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{...MainStyles.borderRadiusC, padding: 5}}
          onPress={() => navigate('Settings')}>
            <Icon name={TAB_ICON.Settings} type={TAB_ICON_TYPE.Settings} size={20} color={colors.text}
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