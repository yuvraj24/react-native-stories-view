import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

// @ts-ignore
import {StoryContainer, ProgressBar} from 'react-native-stories-view';

import {MID_GREEN, BLACK, LIGHT_GREEN, BAR_ACTIVE_COLOR, BAR_INACTIVE_COLOR, TINT_GRAY} from './colors';

import PROFILE from './images/profile2.jpg';
import BACK from './images/back.png';

const images = [ 
  'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg', 
  'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
  'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
  'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
  'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg', 
  // 'https://i.pinimg.com/originals/60/10/4e/60104ed3bdd932911991ead9611c3489.jpg', 
  // 'https://hdwallpaper20.com/wp-content/uploads/2018/02/samsumg-wallpaper-mobile-x-PIC-WPPW3307-576x1024.jpg', 
  // 'https://www.itl.cat/pngfile/big/0-7755_nature-pier-bridge-d-river-water-sunset-night.jpg',
];

export default App = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      {Platform.OS === 'ios' && (
        <View
          // To set the background color in IOS Status Bar also
          style={{
            backgroundColor: TINT_GRAY,
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
          enableProgress={false}
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
          Custom header component option
          // headerComponent={<View />}

          Reply option in Footer
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

          barStyle={{
            barActiveColor: BAR_ACTIVE_COLOR,
            barInActiveColor: BAR_INACTIVE_COLOR,
            barWidth: 100,
            barHeight: 4
          }}

          imageStyle={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            alignSelf: 'center',
          }}
        />
      </SafeAreaView>
    </View>
  );
};

// export default App;
