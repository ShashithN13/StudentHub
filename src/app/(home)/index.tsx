import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Welcome to StudentHub!</Text>
            <Pressable
                style={styles.button}
                onPress={() => router.push("/(home)/details")}
            >
                <Text style={styles.buttonText}>Go to My ID Card</Text>
            </Pressable>
        </ScrollView>
    );
}