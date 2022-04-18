import {Text, View, Image} from "react-native";
import React from "react";
import {styles} from "./styles";

type chartRoomItemProps = {
	users: Array<string>;
	newMessages: number;
	chatRoom: {lastMessage: {content: string; createdAt: string}};
};
export const ChatRoomItem = ({chatRoom}) => {
	const user = chatRoom.users[1];
	return (
		<View style={styles.container}>
			<View>
				<Image
					source={{
						uri: user.imageUri,
					}}
					style={styles.image}
				/>
				{chatRoom.newMessages ? (
					<View style={styles.badgeContainer}>
						<Text style={styles.badgeText}>
							{chatRoom.newMessages}
						</Text>
					</View>
				) : null}
			</View>
			<View style={styles.rightContainer}>
				<View style={styles.row}>
					<Text style={styles.name}> {user.name}</Text>
					<Text style={styles.text}>
						{" "}
						{chatRoom.lastMessage.createdAt}
					</Text>
				</View>
				<Text
					style={[styles.text, {marginTop: 5, marginLeft: 3}]}
					numberOfLines={1}
				>
					{chatRoom.lastMessage.content}
				</Text>
			</View>
		</View>
	);
};

export default ChatRoomItem;
