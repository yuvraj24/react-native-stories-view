import { FunctionComponentElement } from 'react';
import { ViewStyle, ImageStyle, ImageSourcePropType } from 'react-native';

export interface CommonProps {
	images?: string[];
	duration?: number | undefined;
	containerStyle?: ViewStyle;
	enableProgress?: boolean | undefined;
	imageStyle?: ImageStyle
}

export interface BarStyleProps {
	barActiveColor?: string;
	barInActiveColor?: string;
	barHeight?: number;
	barWidth?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

export interface StoryContainerProps extends CommonProps {
	images: string[];
	visible?: boolean | undefined;
	isShowReply?: boolean | undefined;
	duration?: number | undefined;
	barStyle?: BarStyleProps | undefined;
	headerComponent?: FunctionComponentElement<CommonProps> | undefined
	userProfile?: UserProps | undefined
	replyView?: ReplyProps | undefined 
	footerComponent?: FunctionComponentElement<CommonProps> | undefined 
	onComplete: Function;  
}

export interface ProgressViewProps extends CommonProps {
	images: string[];
	onChange: Function;
	progressIndex: number;
	barStyle?: BarStyleProps | undefined;
}

export interface ProgressItemProps extends CommonProps {
	size: number;
	barStyle?: BarStyleProps | undefined;
	progressIndex: number;
	currentIndex: number;
	onChangePosition: Function;
}

export interface StoryViewProps extends CommonProps {
	images: string[];
	progressIndex: number;
}

export interface ArrowViewProps extends CommonProps {
	onArrowClick: Function;
}

export interface UserProps {
	userImage?: ImageSourcePropType | undefined;
	userName?: string | undefined;
	userMessage?: string | undefined;
	imageArrow?: ImageSourcePropType | undefined;
	onImageClick?: Function | undefined;
}

export interface ReplyFooterProps {
	progressIndex: number;
	onReplyTextChange: Function | undefined;
	onReplyButtonClick: Function | undefined;
}

export interface ReplyProps {
	isShowReply: boolean | undefined;
	onReplyTextChange: Function | undefined;
	onReplyButtonClick: Function | undefined;
}

export interface ProgressiveImageProps {
	thumbnailSource: string;
	imgSource: string;
	style?: ViewStyle | undefined;
	props?: any;
}