import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Share, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import { URLS } from "../lib/config";

type Props = NativeStackScreenProps<RootStackParamList, "Preview">;

const PROFILE_URL = URLS.home;

export default function PreviewScreen({ navigation, route }: Props) {
  const { username } = route.params;
  const [loading, setLoading] = useState(true);
  const url = `${PROFILE_URL}/${username}`;

  async function handleShare() {
    try {
      await Share.share({ message: `Check out my link-in-bio: ${url}` });
    } catch {
      // user cancelled
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.url} numberOfLines={1}>
          {ROOT_DOMAIN}/{username}
        </Text>
        <TouchableOpacity onPress={handleShare} style={styles.shareBtn}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#5b8cff" />
        </View>
      )}

      <WebView
        source={{ uri: url }}
        style={styles.webview}
        onLoadEnd={() => setLoading(false)}
        startInLoadingState={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b1020" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#111937",
    borderBottomWidth: 1,
    borderBottomColor: "#2a3568",
  },
  back: { color: "#5b8cff", fontSize: 15, fontWeight: "500" },
  url: { color: "#78e6c4", fontSize: 13, flex: 1, textAlign: "center", marginHorizontal: 12 },
  shareBtn: {
    backgroundColor: "#5b8cff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  shareText: { color: "#fff", fontSize: 13, fontWeight: "600" },
  loader: { position: "absolute", top: "50%", left: 0, right: 0, zIndex: 10 },
  webview: { flex: 1 },
});
