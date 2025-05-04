import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Searching from "./components/Searching";
import ShowCard from "./components/ShowCard";
import "./index.css";

function WellnessApp() {
  const [exerciseList, setExerciseList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises", {
          headers: {
            "x-rapidapi-key": "efc59f0929mshd8a350712877c36p1e02cbjsn86c3872e4eac",
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          },
        });
        setExerciseList(response.data);
      } catch (err) {
        console.error("Could not fetch exercise data:", err);
      }
    };

    loadExercises();
  }, []);

  const results = exerciseList.filter((item) => {
    const input = query.toLowerCase();
    return (
      item.name?.toLowerCase().includes(input) ||
      item.target?.toLowerCase().includes(input) ||
      item.bodyPart?.toLowerCase().includes(input) ||
      item.equipment?.toLowerCase().includes(input) ||
      item.secondaryMuscles?.some((muscle) => muscle.toLowerCase().includes(input))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-rose-100 font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Searching query={query} onQueryChange={setQuery} />
        <section className="space-y-10 transition-all duration-300">
          {results.length > 0 ? (
            results.map((exercise, idx) => (
              <ShowCard key={idx} data={exercise} />
            ))
          ) : (
            <p className="text-center text-xl text-rose-400 font-semibold mt-10">
              🙁 No matching workouts found. Try something else!
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default WellnessApp;
