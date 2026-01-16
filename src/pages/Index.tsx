import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import OnboardingScreen from "../screens/OnboardingScreen";
import GenderSelectScreen from "../screens/GenderSelectScreen";
import SwipeScreen from "../screens/SwipeScreen";
import MatchScreen from "../screens/MatchScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { NameData } from "../data/names";

type Screen = "onboarding" | "gender" | "swipe" | "match" | "favorites";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding");
  const [selectedGender, setSelectedGender] = useState<"boy" | "girl" | "neutral">("neutral");
  const [favorites, setFavorites] = useState<NameData[]>([]);
  const [matchedName, setMatchedName] = useState<NameData | null>(null);

  const handleGenderSelect = (gender: "boy" | "girl" | "neutral") => {
    setSelectedGender(gender);
    setCurrentScreen("swipe");
  };

  const handleMatch = (name: NameData) => {
    setMatchedName(name);
    setCurrentScreen("match");
  };

  const handleRemoveFavorite = (name: string) => {
    setFavorites((prev) => prev.filter((n) => n.name !== name));
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        {currentScreen === "onboarding" && (
          <OnboardingScreen
            key="onboarding"
            onStart={() => setCurrentScreen("gender")}
          />
        )}

        {currentScreen === "gender" && (
          <GenderSelectScreen
            key="gender"
            onSelect={handleGenderSelect}
            onBack={() => setCurrentScreen("onboarding")}
          />
        )}

        {currentScreen === "swipe" && (
          <SwipeScreen
            key="swipe"
            gender={selectedGender}
            onMatch={handleMatch}
            onOpenFavorites={() => setCurrentScreen("favorites")}
            onBack={() => setCurrentScreen("gender")}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )}

        {currentScreen === "match" && matchedName && (
          <MatchScreen
            key="match"
            name={matchedName}
            onContinue={() => setCurrentScreen("swipe")}
            onOpenFavorites={() => setCurrentScreen("favorites")}
          />
        )}

        {currentScreen === "favorites" && (
          <FavoritesScreen
            key="favorites"
            favorites={favorites}
            onBack={() => setCurrentScreen("swipe")}
            onRemove={handleRemoveFavorite}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
