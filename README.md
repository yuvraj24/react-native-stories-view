# React Native Stories View

[![npm version](https://badge.fury.io/js/react-native-stories-view.svg?style=flat)](https://www.npmjs.com/package/react-native-stories-view) 
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-green.svg) 

A simple and fully customizable React Native component that implements a status/stories view like Whatsapp, Instagram

## Installation

If using yarn:

```
yarn add react-native-stories-view
```

If using npm:

```
npm i react-native-stories-view
```

## Usage

### StoryContainer

This component provides you with entire functionality of Stories feature along with flexible customization.

#### 1. Basic Usage

```js
import { StoryContainer } from 'react-native-stories-view';

<StoryContainer
   visible={true}
   enableProgress={true}
   images={images}
   duration={20} 
/>
```

Style the above basic component in your own way by using the below prop,

```js
containerStyle={{
    width: '100%',
    height: '100%',
}}
```

#### Props

| **PropName**           | **PropType**     | **Purpose**                                    |  **Required**  |
| :--------------------- | :--------------- | :--------------------------------------------- | :------------- |
| visible                |    `Boolean`     | Toggle visibility of Story Container           |      Yes       |
| enableProgress         |    `Boolean`     | Enable/disable the top progress bar visibility |       No       |
| images                 |  `Array<String>` | Story Images                                   |      Yes       |
| duration               |    `Number`      | Control's the speed of progress bar            |       No       |
| containerStyle         |    `Object`      | Container style                                |       No       | 


#### 2. Header View

You can use the default header view which can display basic user details by simply providing 'userProfile' props with specified parameters.

```js
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
```

However if you wish to add your own custom component, you can easily pass your own component in 'headerComponent' prop and this will replace the default header described above.

```js
headerComponent={<View />}
```

#### 3. Footer View
The default footer view provides you with a reply option where in you can accept user input for the status they just viewed.

```js
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
```
