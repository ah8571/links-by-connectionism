import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import { fetchProfile, saveProfile, uploadAvatar } from "../lib/supabase";
import * as ImagePicker from "expo-image-picker";
import { ROOT_DOMAIN } from "../lib/config";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation, route }: Props) {
  const { token } = route.params;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const data = await fetchProfile(token);
      if (data?.profile) {
        setUsername(data.profile.username || "");
        setDisplayName(data.profile.displayName || "");
        setBio(data.profile.bio || "");
        setAvatarUrl(data.profile.avatarUrl || "");
      }
    } catch {
      // No profile yet — that's fine
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!username.trim()) {
      Alert.alert("Username required", "Pick a username for your link-in-bio page.");
      return;
    }
    setSaving(true);
    try {
      await saveProfile(token, {
        username: username.trim().toLowerCase(),
        displayName: displayName.trim(),
        bio: bio.trim(),
      });
      Alert.alert("Saved!", "Your profile has been updated.");
    } catch (e: any) {
      Alert.alert("Error", e.message || "Failed to save profile.");
    } finally {
      setSaving(false);
    }
  }

  async function pickAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!result.canceled && result.assets[0] && username) {
      try {
        await uploadAvatar(token, result.assets[0].uri, username);
        setAvatarUrl(result.assets[0].uri);
      } catch {
        Alert.alert("Error", "Failed to upload avatar.");
      }
    }
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#5b8cff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.subtitle}>
        This is your public link-in-bio page. Your URL will be{" "}
        <Text style={styles.url}>{ROOT_DOMAIN}/{username || "username"}</Text>
      </Text>

      <TouchableOpacity style={styles.avatarWrap} onPress={pickAvatar}>
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarPlaceholderText}>+</Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="yourname"
          placeholderTextColor="#5f6b7a"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Display Name</Text>
        <TextInput
          style={styles.input}
          value={displayName}
          onChangeText={setDisplayName}
          placeholder="Your Name"
          placeholderTextColor="#5f6b7a"
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.bioInput]}
          value={bio}
          onChangeText={setBio}
          placeholder="A short bio about you..."
          placeholderTextColor="#5f6b7a"
          multiline
          numberOfLines={3}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave} disabled={saving}>
          {saving ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Save Profile</Text>
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Links", { token, username })}
      >
        <Text style={styles.secondaryButtonText}>Manage Links →</Text>
      </TouchableOpacity>

      {username ? (
        <TouchableOpacity
          style={styles.previewButton}
          onPress={() => navigation.navigate("Preview", { username })}
        >
          <Text style={styles.previewButtonText}>Preview Your Page</Text>
        </TouchableOpacity>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b1020" },
  content: { padding: 24, paddingBottom: 48 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0b1020" },
  title: { fontSize: 24, fontWeight: "700", color: "#e8ecff", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#b3bddf", marginBottom: 24, lineHeight: 20 },
  url: { color: "#78e6c4", fontWeight: "600" },
  avatarWrap: { alignSelf: "center", marginBottom: 24 },
  avatar: { width: 96, height: 96, borderRadius: 48 },
  avatarPlaceholder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#111937",
    borderWidth: 1,
    borderColor: "#2a3568",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholderText: { fontSize: 32, color: "#5f6b7a" },
  card: {
    backgroundColor: "#111937",
    borderRadius: 14,
    padding: 20,
    borderWidth: 1,
    borderColor: "#2a3568",
    marginBottom: 16,
  },
  label: { fontSize: 14, fontWeight: "600", color: "#b3bddf", marginBottom: 6, marginTop: 12 },
  input: {
    backgroundColor: "#0b1433",
    borderWidth: 1,
    borderColor: "#2a3568",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: "#e8ecff",
  },
  bioInput: { minHeight: 80, textAlignVertical: "top" },
  button: {
    backgroundColor: "#5b8cff",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  secondaryButton: {
    backgroundColor: "#111937",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a3568",
    marginBottom: 12,
  },
  secondaryButtonText: { color: "#e8ecff", fontWeight: "600", fontSize: 16 },
  previewButton: {
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#78e6c4",
  },
  previewButtonText: { color: "#78e6c4", fontWeight: "600", fontSize: 16 },
});
