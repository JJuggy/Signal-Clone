import {StyleSheet} from "react-native";
export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
		alignItems: "center",
		borderBottomWidth: 0.4,
		borderBottomColor: "grey",
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 7,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	text: {
		color: "grey",
	},
	name: {
		fontWeight: "bold",
	},
	rightContainer: {
		width: "85%",
	},
	badgeContainer: {
		backgroundColor: "blue",
		width: 20,
		height: 20,
		borderRadius: 10,
		position: "absolute",
		top: -5,
		right: 6,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderColor: "white",
	},
	badgeText: {
		color: "white",
		fontWeight: "600",
		fontSize: 12,
	},
});
