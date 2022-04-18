import {StyleSheet, Text, View, FlatList} from "react-native";
import React from "react";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";

const Messages = ChatRoomData.messages[0];
const ID = Messages.user.id;
const ChatRoomScreen = () => {
	return (
		<View style={styles.page}>
			<FlatList
				inverted
				data={ChatRoomData.messages}
				renderItem={({item}) => <Message message={item} myID={ID} />}
			/>
		</View>
	);
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
});
