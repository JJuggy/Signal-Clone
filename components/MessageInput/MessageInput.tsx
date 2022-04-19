import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";

export function MessageInput() {
	return (
		<View style={styles.root}>
			<View style={styles.inputContainer}>
				<Feather
					name="smile"
					size={24}
					color="grey"
					style={styles.icon} />
				<TextInput style={styles.input} />
				<Feather name="camera" size={24} color="grey" />
				<MaterialCommunityIcons
					name="microphone-outline"
					size={24}
					color="grey"

					style={styles.icon} />
			</View>
			<View style={styles.buttonContainer}>
				<Entypo name="plus" size={24} color="white" />
			</View>
		</View>
	);
}

export default MessageInput;

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		padding: 10,
	},
	inputContainer: {
		backgroundColor: "#f2f2f2",
		flex: 1,
		marginRight: 10,
		borderRadius: 25,
		alignItems: "center",
		borderWidth: 2,
		borderColor: "lightgrey",
		flexDirection: "row",
		padding: 10,
	},
	buttonContainer: {
		width: 50,
		height: 50,
		backgroundColor: "blue",
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 25,
	},
	input: {
		flex: 1,
	},
	icon: {
		marginHorizontal: 4,
	},
});
