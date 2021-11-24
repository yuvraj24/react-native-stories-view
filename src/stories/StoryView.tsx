import React, { useEffect, useState, CSSProperties } from "react";
import { StoryViewProps } from "../utils/interfaceHelper";
import {
	View,
	Image,
	StyleSheet,
	Text,
	SafeAreaView,
	Dimensions,
} from "react-native";
import ProgressiveImage from "./ProgressiveImage";

function StoryView(props: StoryViewProps) {
	const [refresh, setRefresh] = useState(true);

	const image = props.images[props.progressIndex];

	return (
		<SafeAreaView style={styles.divStory}>
			<View style={styles.divStory}>
				<ProgressiveImage
					style={props.imageStyle ? props.imageStyle : styles.imgStyle}
					imgSource={{ uri: image }}
					thumbnailSource={{ uri: image }}
				/>
			</View>
		</SafeAreaView>
	);
}

export default StoryView;

const styles = StyleSheet.create({
	divStory: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
		height: "100%",
		alignContent: "center",
		alignItems: "center",
	},
	imgStyle: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		alignSelf: "center",
		resizeMode: "stretch",
	},
});
