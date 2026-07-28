import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import { fetchProfile, saveProfile } from "../lib/supabase";
import { ROOT_DOMAIN } from "../lib/config";

type LinkItem = {
  title: string;
  url: string;
  enabled: boolean;
};

type Props = NativeStackScreenProps<RootStackParamList, "Links">;

export default function LinksScreen({ navigation, route }: Props) {
  const { token, username } = route.params;
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    loadLinks();
  }, []);

  async function loadLinks() {
    try {
      const data = await fetchProfile(token);
      if (data?.profile?.links) {
        setLinks(data.profile.links);
      }
    } catch {
      // fine
    } finally {
      setLoading(false);
    }
  }

  async function saveLinks(updated: LinkItem[]) {
    setSaving(true);
    try {
      await saveProfile(token, { username, links: updated });
      setLinks(updated);
    } catch (e: any) {
      Alert.alert("Error", e.message || "Failed to save links.");
    } finally {
      setSaving(false);
    }
  }

  function addLink() {
    if (!newTitle.trim() || !newUrl.trim()) {
      Alert.alert("Both fields required", "Enter a title and URL.");
      return;
    }
    const updated = [...links, { title: newTitle.trim(), url: newUrl.trim(), enabled: true }];
    setNewTitle("");
    setNewUrl("");
    saveLinks(updated);
  }

  function removeLink(index: number) {
    const updated = links.filter((_, i) => i !== index);
    saveLinks(updated);
  }

  function toggleLink(index: number) {
    const updated = links.map((l, i) =>
      i === index ? { ...l, enabled: !l.enabled } : l
    );
    saveLinks(updated);
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#5b8cff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={links}
        keyExtractor={(_, i) => String(i)}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.back}>← Profile</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Your Links</Text>
            <Text style={styles.subtitle}>
              These appear on {ROOT_DOMAIN}/{username}
            </Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={styles.linkItem}>
            <View style={styles.linkInfo}>
              <Text style={styles.linkTitle}>{item.title}</Text>
              <Text style={styles.linkUrl} numberOfLines={1}>{item.url}</Text>
            </View>
            <TouchableOpacity
              style={[styles.toggleBtn, item.enabled && styles.toggleBtnActive]}
              onPress={() => toggleLink(index)}
            >
              <Text style={styles.toggleBtnText}>{item.enabled ? "ON" : "OFF"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeLink(index)}>
              <Text style={styles.deleteBtn}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.addSection}>
            <Text style={styles.addTitle}>Add a link</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor="#5f6b7a"
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="https://..."
              placeholderTextColor="#5f6b7a"
              value={newUrl}
              onChangeText={setNewUrl}
              autoCapitalize="none"
              keyboardType="url"
            />
            <TouchableOpacity style={styles.addBtn} onPress={addLink} disabled={saving}>
              {saving ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.addBtnText}>Add Link</Text>
              )}
            </TouchableOpacity>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.empty}>No links yet. Add your first one below.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b1020" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0b1020" },
  list: { padding: 24, paddingBottom: 48 },
  header: { marginBottom: 24 },
  back: { color: "#5b8cff", fontSize: 16, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: "700", color: "#e8ecff", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#b3bddf" },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111937",
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#2a3568",
  },
  linkInfo: { flex: 1 },
  linkTitle: { fontSize: 15, fontWeight: "600", color: "#e8ecff" },
  linkUrl: { fontSize: 13, color: "#5f6b7a", marginTop: 2 },
  toggleBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#2a3568",
    marginRight: 10,
  },
  toggleBtnActive: { backgroundColor: "#059669" },
  toggleBtnText: { fontSize: 12, fontWeight: "700", color: "#e8ecff" },
  deleteBtn: { fontSize: 18, color: "#f87171", padding: 4 },
  addSection: { marginTop: 24 },
  addTitle: { fontSize: 16, fontWeight: "600", color: "#e8ecff", marginBottom: 12 },
  input: {
    backgroundColor: "#0b1433",
    borderWidth: 1,
    borderColor: "#2a3568",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: "#e8ecff",
    marginBottom: 10,
  },
  addBtn: {
    backgroundColor: "#5b8cff",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
  },
  addBtnText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  empty: { color: "#5f6b7a", fontSize: 14, textAlign: "center", marginTop: 40 },
});
