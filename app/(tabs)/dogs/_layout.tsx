import { View, Text } from "react-native";
import React from "react";
import { Link, Redirect, Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Dina hundar" }}
      />
      <Stack.Screen
        name="[_id]"
        options={{
          title: "Hunddetaljer",
          headerBackTitle: "Tillbaka",
          headerRight: () => (
            <Link href="/dogs">
              <ThemedText type="link">Lista</ThemedText>
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
