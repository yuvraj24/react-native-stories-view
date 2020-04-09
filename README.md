# React Native Stories View

[![npm version](https://badge.fury.io/js/react-native-stories-view.svg?style=flat)](https://www.npmjs.com/package/react-native-stories-view) 
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-green.svg) 

A simple and fully customizable React Native components that provides a status/stories feature like Whatsapp, Instagram. For navigating across all the stories you can touch the left or right portion of the screen. The library works seemleslly across both Android as well as IOS platform developed with love in *<b>Typescript & React</b>*.

#### Feature's include :

* Progress bar with custom duration & styling options.
* Story Image view with custom styling options.
* A fully customizable Header View, you can use default one or pass in your choice of component.
* A fully customizable Footer View, you can use default one or pass in your choice of component.

## Spread Your ❤️:
[![GitHub followers](https://img.shields.io/github/followers/yuvraj24.svg?style=social&label=Follow)](https://github.com/yuvraj24)  [![Twitter Follow](https://img.shields.io/twitter/follow/yuvrajpandey24.svg?style=social)](https://twitter.com/yuvrajpandey24)

## Demo

Example One                |  Example Two
:-------------------------:|:-------------------------:
<img src='https://github.com/yuvraj24/react-native-stories-view/blob/master/assets/stories.gif' width=800 height=800 /> | <img src='https://github.com/yuvraj24/react-native-stories-view/blob/master/assets/storyView.gif' width=800 height=800 /> 

## Screenshot

|Example One                |  Example Two              | Example Three               |  Example Four             |
|-------------------------|-------------------------|-------------------------|-------------------------|
|<img src='https://github.com/yuvraj24/react-native-stories-view/blob/master/assets/photo1.png'   /> | <img src='https://github.com/yuvraj24/react-native-stories-view/blob/master/assets/photo2.png'   /> | <img src='https://github.com/yuvraj24/react-native-stories-view/blob/master/assets/photo3.png'   /> | <img src='https://github.com/yuvraj24/react-native-stories-view/blob/master/assets/photo4.png'   /> |

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

* ### ProgressBar

This individual component can be used to display progressive bar with controlled duration, style & motion.

```js
<ProgressBar
   images={['','']}
   onChange={() => {}}
   progressIndex={0}
   enableProgress={true}
   duration={20}
   barStyle={{
      barActiveColor: BAR_ACTIVE_COLOR,
      barInActiveColor: BAR_INACTIVE_COLOR,
      barWidth: 100,
      barHeight: 4
   }}
/>
```

* ### StoryContainer

This component provides you with entire functionality of Status/Stories feature along with flexible customization.

#### Basic Usage

```js
import { StoryContainer } from 'react-native-stories-view';

<StoryContainer
   visible={true}
   enableProgress={true}
   images={images}
   duration={20}  
   containerStyle={{
       width: '100%',
       height: '100%',
   }}
/>
```

#### Header View

You can use the default header view which can display basic user details by simply providing 'userProfile' props with specified parameters.

```js
// User Information in header
<StoryContainer
   visible={true}
   enableProgress={true}
   images={images}
   duration={20} 
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
/>
```

However if you wish to add your own custom component, you can pass your own component in 'headerComponent' prop and this will replace the header described above.

```js
<StoryContainer
   visible={true}
   enableProgress={true}
   images={images}
   duration={20} 
   headerComponent={<View />}
/>
```

In case neither of the prop i.e 'userProfile' or 'headerComponent' is passed then header view will be not be displayed.


#### Footer View
The default footer view provides you with a reply option where in you can accept user input for the status they just viewed.

```js
// Reply option in Footer
<StoryContainer
   visible={true}
   enableProgress={true}
   images={images}
   duration={20} 
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
/>
```

If you have your own custom component to use in Footer, simply pass your component in 'footerComponent' prop as below which will replace the default Footer with your own custom style. 

```js
// Custom Footer component option
<StoryContainer
   visible={true}
   enableProgress={true}
   images={images}
   duration={20}     
   footerComponent={<View />}
/>
```

However if neither of the prop i.e 'replyView' or 'footerComponent' is passed then footer view will be not be displayed.

## Documentation :

#### ProgressBar

| **PropName**           | **PropType**     | **Purpose**                                      |  **Required**  |
| :--------------------- | :--------------: | :---------------------------------------------   | :------------: |
| images                 |  `Array<String>` | Story images array to render count of bar        |  Mandatory     |
| progressIndex          |    `number`      | Starts progress for a particular index item      |  Mandatory     |
| enableProgress         |    `Boolean`     | Start/Stop the progress bar motion               |  Optional      | 
| duration               |    `Number`      | Control's the speed of progress bar              |  Optional      |
| barStyle               |    `Object`      | Progress Bar style                               |   Optional     | 
| onChange               |    `Function`    | Function executes after change in progressIndex  |    Optional    | 

#### Basic

| **PropName**           | **PropType**     | **Purpose**                                      |  **Required**  |
| :--------------------- | :--------------: | :---------------------------------------------   | :------------: |
| visible                |    `Boolean`     | Toggle visibility of Story Container             |  Mandatory     |
| enableProgress         |    `Boolean`     | Enable/disable the top progress bar visibility   |  Optional      |
| images                 |  `Array<String>` | Story Images                                     |  Mandatory     |
| duration               |    `Number`      | Control's the speed of progress bar              |  Optional      |
| containerStyle         |    `Object`      | Container style                                  |   Optional     | 

#### Header

| **PropName**           | **PropType**     | **Purpose**                                      |  **Required**  |
| :--------------------- | :--------------: | :---------------------------------------------   | :------------: |
| userProfile            |    `Object`      | Default user detail view                         |    Optional    |
| userImage              |    `String`      | Image URL                                        |    Optional    |
| userName               |    `String`      | Display's user name                              |    Optional    |
| userMessage            |    `String`      | Display's user information                       |    Optional    |
| imageArrow             |    `String`      | Image Url                                        |    Optional    | 
| onImageClick           |    `Function`    | Function that executes imageArrow click event    |    Optional    | 
| headerComponent        |    `Conponent`   | Custom component                                 |    Optional    | 

#### Footer

| **PropName**           | **PropType**     | **Purpose**                                      |  **Required**  |
| :--------------------- | :--------------: | :---------------------------------------------   | :------------: |
| replyView              |    `Object`      | Default reply view with Input text               |    Optional    |
| isShowReply            |    `Object`      | Toggle's the display of footer view              |    Mandatory   |
| onReplyTextChange      |    `String`      | Callback function that returns user entered text |    Optional    |
| onReplyButtonClick     |    `String`      | Callback function for emoji & send button click  |    Optional    | 
| footerComponent        |    `Conponent`   | Custom component                                 |    Optional    | 

## About Me

### Yuvraj Pandey
I am a passionate Engineer which likes to push himself on various fronts of technologies.  

For more exciting updates follow me,

<a href="https://twitter.com/yuvrajpandey24" target="_blank"><img src="https://github.com/yuvraj24/LiveSmashBar/blob/master/images/twitter.png" width="40" height="40"></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/yuvraj24" target="_blank"><img src="https://github.com/yuvraj24/LiveSmashBar/blob/master/images/linkedin.png" width="40" height="40"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/yuvraj24" target="_blank"><img src="https://github.com/yuvraj24/LiveSmashBar/blob/master/images/github.png" height="40"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://medium.com/@yuvrajpandey24" target="_blank"><img src="https://github.com/yuvraj24/LiveSmashBar/blob/master/images/medium.png" width="40" height="40"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://play.google.com/store/apps/developer?id=Yuvraj+Pandey"><img src="https://github.com/yuvraj24/LiveSmashBar/blob/master/images/playstore.png" width="40" height="40"></a>
