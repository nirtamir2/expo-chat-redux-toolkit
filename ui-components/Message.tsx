import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { dimensions } from "../dimensions";
import { colors } from "../colors";

interface IProps {
  incoming?: boolean;
  message: React.ReactNode;
}

export function Message(props: IProps) {
  const { incoming = true, message } = props;
  return (
    <View style={styles.message}>
      <Text
        style={[
          styles.messageContent,
          incoming
            ? styles.messageContentIncoming
            : styles.messageContentOutgoing
        ]}
      >
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    borderRadius: dimensions.borderRadius
  },
  messageContent: {
    borderRadius: dimensions.borderRadius,
    padding: dimensions.gutter
  },
  messageContentIncoming: {
    backgroundColor: colors.primary,
    color: colors.textPrimary
  },
  messageContentOutgoing: {
    backgroundColor: colors.secondary,
    color: colors.textSecondary
  }
});
