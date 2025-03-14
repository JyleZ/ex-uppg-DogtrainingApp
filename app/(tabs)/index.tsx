import React from "react";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useFetchDogs from "@/hooks/fetchDogs";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Dog } from "@/constants/Dog";
import { Link } from "expo-router";

export default function Index() {
  const { dogs, loading, error } = useFetchDogs();
  const [randomDog, setRandomDog] = useState<Dog | null>(null); // Lägg till state för randomDog

  useEffect(() => {
    if (dogs && dogs.length > 0) {
      let randomDog = dogs[Math.floor(Math.random() * dogs.length)];
      console.log(randomDog);
      setRandomDog(randomDog); // Uppdatera state när randomDog hittas
    }
  }, [dogs]);

  if (loading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  if (error) {
    return <ThemedText>{error}</ThemedText>;
  }

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <ThemedText type="title">Välkommen!</ThemedText>
      <ThemedText style={styles.Text}>
        Dags för ett träningspass med
        <ThemedText type="link">
          <Link href={`/dogs/${randomDog?._id}`}> {randomDog?.name}</Link>
        </ThemedText>
        ?
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  Text: {
    marginTop: 20,
  },
});
