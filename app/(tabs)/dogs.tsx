import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, Stack } from "expo-router";
import useFetchDogs from "@/hooks/fetchDogs";

export default function dogs() {
  const { dogs, loading, error } = useFetchDogs();

    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            
            <ThemedText type="title">Dina hundar</ThemedText>
            {loading && <ThemedText>Loading...</ThemedText>}
            {error && <ThemedText>{error}</ThemedText>}
            {dogs.map((dog) => (
                <ThemedText key={dog._id}>
                    <Link href={`../../dogs/${dog._id}`}>{dog.name}</Link>
                </ThemedText>
            ))}
        </ThemedView>
    );
}
