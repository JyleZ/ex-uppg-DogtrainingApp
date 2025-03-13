import { useEffect, useState } from "react";

export default function fetchDogs() {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = "http://192.168.1.226:3000/dogs/";
    
    // Berättar för typescript vad som finns i mina hundar
    interface Dog {
        _id: string;
        name: string;
        breed: string;
        birth_day: string;
        competion: string;
        userID: string;
    };

    //Hämtar mitt api
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              setDogs(data)
              setLoading(false)
            })
            .catch((error) => setError(error.message))
            
            
    }, []);

    return { dogs, loading, error };
}