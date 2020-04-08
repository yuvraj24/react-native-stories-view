import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';

// @ts-ignore
import {StoryContainer, ProgressBar} from 'react-native-stories-view';

import {MID_GREEN, BLACK, LIGHT_GREEN} from './colors';

import PROFILE from './images/profile2.jpg';
import BACK from './images/back.png';

const images = [
  'https://i.pinimg.com/736x/92/57/1a/92571afc90454b9eacdba00fcb7785ec.jpg',
  'https://www.itl.cat/pngfile/big/0-7755_nature-pier-bridge-d-river-water-sunset-night.jpg',
  'https://hdwallpaper20.com/wp-content/uploads/2018/02/samsumg-wallpaper-mobile-x-PIC-WPPW3307-576x1024.jpg',
  'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
  'https://www.itl.cat/pngfile/big/0-7755_nature-pier-bridge-d-river-water-sunset-night.jpg',
];

export default App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      {Platform.OS === 'ios' && (
        <View
          // To set the background color in IOS Status Bar also
          style={{
            backgroundColor: '#000000',
            height: 45,
          }}>
          <StatusBar barStyle="light-content" backgroundColor={LIGHT_GREEN} />
        </View>
      )}

      {Platform.OS === 'android' && (
        <StatusBar barStyle="dark-content" backgroundColor={MID_GREEN} />
      )}
      {/* <TouchableOpacity onPress={() => setRefresh(!refresh)}  >
          <Text style={{ color: BLACK }}>PROGRESS CHECKER</Text>
        </TouchableOpacity> */}

      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        {/* <ProgressBar
          images={images}
          onChange={() => {}}
          progressIndex={2}
          enableProgress={true}
          duration={20}
        /> */}
        <StoryContainer
          visible={true}
          enableProgress={true}
          images={images}
          duration={20}
          // User Information in header
          userProfile={{
            userImage: PROFILE,
            userName: 'Yuvraj Pandey',
            userMessage: 'Work hard & success will follow !!',
            imageArrow: BACK,
            onImageClick: () => {
              console.log('lskndclksnc');
              Alert.alert('User profile image tapped');
            },
          }}
          // Custom header component option
          // headerComponent={<View />}

          // Reply option in Footer
          replyView={{
            isShowReply: true,
            onReplyTextChange: (textReply) => {
              console.log(textReply);
            },
            onReplyButtonClick: (buttonType) => {
              switch (buttonType) {
                case 'send':
                  console.log('Send button tapped');
                  break;

                case 'smiley':
                  console.log('Smiley button tapped');
                  break;
              }
            },
          }}

          // Custom Footer component option
          // footerComponent={<View />}

          // containerStyle={{
          //   width: '100%',
          //   height: '100%',
          // }}

          // barStyle={{
          //   barActiveColor: BAR_ACTIVE_COLOR,
          //   barInActiveColor: BAR_INACTIVE_COLOR,
          //   barWidth: 100,
          //   barHeight: 4
          // }}

          // imageStyle={{
          //   width: '100%',
          //   height: '100%',
          //   alignSelf: 'center',
          // }}
        />
      </SafeAreaView>
    </View>
  );
};

// export default App;
