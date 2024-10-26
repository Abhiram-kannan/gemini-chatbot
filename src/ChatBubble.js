import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const ChatBubble = ({role, text, onSpeech}) => {
  return (
    <View
      style={[
        styles.chatItem,
        role === "user" ? styles.userChatItem : styles.modelChatItem,
      ]}
    >
        <Text style={styles.chatText}>{text}</Text>
        {role === "model" && (
          <TouchableOpacity onPress = {onSpeech} style = {styles.speakerIcon}>
            <Ionicons name="volume-high-outline" size={24} color = "#fff" />
          </TouchableOpacity>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "70%",
    position: "relative",
  },
  userChatItem: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end",
  },
  modelChatItem: {
    backgroundColor: "#000",
    alignSelf: "flex-start",
  },
  chatText: {
    color: "#fff",
    fontSize: 16,
  },
  speakerIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});

export default ChatBubble;