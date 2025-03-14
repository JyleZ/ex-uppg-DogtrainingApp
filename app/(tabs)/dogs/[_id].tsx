import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";

// Berättar för typescript vad som finns i mina hundar
interface Dog {
  _id: string;
  name: string;
  breed: string;
  birth_day: string;
  competition: string;
  userID: string;
}
export default function DogDetails() {
  const { _id } = useLocalSearchParams(); // Hämtar ID från URL-parametern
  const [dog, setDog] = useState<Dog>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://192.168.1.226:3000/dogs/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setDog(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [_id]);

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {/* Dynamisk stack-titel */}
      <Stack.Screen
        options={{ headerTitle: dog ? dog.name : "Hunddetaljer" }}
      />

      {loading && <ThemedText>Loading...</ThemedText>}
      {error && <ThemedText>{error}</ThemedText>}
      {dog && (
        <>
          <ThemedText>Namn: {dog.name}</ThemedText>
          <ThemedText>Ras: {dog.breed}</ThemedText>
          <ThemedText>Födelsedag: {dog.birth_day}</ThemedText>
          <ThemedText>
            Tävlingsgrenar:{" "}
            {Array.isArray(dog.competition)
              ? dog.competition.join(", ")
              : "Ingen tävling tillagd"}
          </ThemedText>
        </>
      )}
    </ThemedView>
  );
}
