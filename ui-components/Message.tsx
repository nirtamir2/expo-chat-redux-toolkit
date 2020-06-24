import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, dimensions } from "../ui-core";

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
            : styles.messageContentOutgoing,
        ]}
      >
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    borderRadius: dimensions.borderRadius,
  },
  messageContent: {
    paddingVertical: dimensions.gutterSmall,
    paddingHorizontal: dimensions.gutter,
    borderRadius: dimensions.borderRadius,
  },
  messageContentIncoming: {
    backgroundColor: colors.primary,
    color: colors.textPrimary,
  },
  messageContentOutgoing: {
    backgroundColor: colors.secondary,
    color: colors.textSecondary,
  },
});
