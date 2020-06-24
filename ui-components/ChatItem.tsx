import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { dimensions } from "../dimensions";

interface IProps {
  message: string;
  avatarUrl: string;
  contactName: string;
}

const AVATAR_SIZE = 50;

export function ChatItem(props: IProps) {
  const { avatarUrl, contactName, message } = props;
  return (
    <View style={styles.chatItem}>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      <View>
        <Text style={styles.contactName}>{contactName}</Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    padding: dimensions.gutter,
    flexDirection: "row"
  },
  contactName: {
    fontSize: dimensions.fontSize,
    fontWeight: dimensions.fontWeightBold
  },
  avatar: {
    padding: dimensions.gutter,
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: dimensions.borderRadiusRound
  }
});
