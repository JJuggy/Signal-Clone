import * as React from "react";
import {View, FlatList} from "react-native";
import {ChatRoomItem} from "../components/ChatRoomItem/ChatRoomItem";
import ChatRooms from "../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
	return (
		<>
			<FlatList
				data={ChatRooms}
				renderItem={({item}) => <ChatRoomItem chatRoom={item} />}
			/>
		</>
	);
}
