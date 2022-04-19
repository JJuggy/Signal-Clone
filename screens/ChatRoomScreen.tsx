import {StyleSheet, Text, View, FlatList, SafeAreaView} from "react-native";
import React from "react";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput/MessageInput";

const ChatRoomScreen = () => {
	return (
		<SafeAreaView style={styles.page}>
			<FlatList
				inverted
				data={ChatRoomData.messages}
				renderItem={({item}) => <Message message={item} />}
			/>
			<MessageInput/>
		</SafeAreaView>
	);
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
});
