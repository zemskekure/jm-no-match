import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SwipeCard from "../components/SwipeCard";
import ActionButton from "../components/ActionButton";
import { czechNames, NameData } from "../data/names";

interface SwipeScreenProps {
  gender: "boy" | "girl" | "neutral";
  onMatch: (name: NameData) => void;
  onOpenFavorites: () => void;
  onBack: () => void;
  favorites: NameData[];
  setFavorites: React.Dispatch<React.SetStateAction<NameData[]>>;
}

const SwipeScreen = ({
  gender,
  onMatch,
  onOpenFavorites,
  onBack,
  favorites,
  setFavorites,
}: SwipeScreenProps) => {
  const filteredNames = useMemo(() => {
    if (gender === "neutral") return [...czechNames].sort(() => Math.random() - 0.5);
    return czechNames
      .filter((n) => n.gender === gender || n.gender === "neutral")
      .sort(() => Math.random() - 0.5);
  }, [gender]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | "up" | null>(null);

  const currentName = filteredNames[currentIndex];
  const nextName = filteredNames[currentIndex + 1];

  const handleSwipe = (dir: "left" | "right" | "up") => {
    setDirection(dir);
    
    if (dir === "right" || dir === "up") {
      // Add to favorites
      if (currentName && !favorites.some((f) => f.name === currentName.name)) {
        setFavorites((prev) => [...prev, currentName]);
      }
      
      // Random chance for a "match" (simulating partner matching)
      if (dir === "up" || Math.random() > 0.7) {
        setTimeout(() => {
          onMatch(currentName);
        }, 300);
        return;
      }
    }

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setDirection(null);
    }, 300);
  };

  const isFinished = currentIndex >= filteredNames.length;

  return (
    <motion.div
      className="min-h-screen bg-lavender flex flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 z-20">
        <motion.button
          onClick={onBack}
          className="text-deep-purple font-bold text-lg"
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Zpět
        </motion.button>
        
        <motion.button
          onClick={onOpenFavorites}
          className="bg-card px-4 py-2 rounded-full text-deep-purple font-bold shadow-playful flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ♥ {favorites.length}
        </motion.button>
      </div>

      {/* Cards area */}
      <div className="flex-1 flex items-center justify-center px-8 pb-32">
        {isFinished ? (
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-black text-deep-purple mb-2">
              To je vše!
            </h2>
            <p className="text-deep-purple/70 font-semibold mb-6">
              Prošli jste všechna jména v této kategorii
            </p>
            <motion.button
              onClick={onOpenFavorites}
              className="bg-pink px-6 py-3 rounded-full text-deep-purple font-bold shadow-playful"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Zobrazit oblíbené ({favorites.length})
            </motion.button>
          </motion.div>
        ) : (
          <div className="relative w-full max-w-sm h-[450px] flex items-center justify-center">
            {/* Next card (behind) */}
            {nextName && (
              <div className="absolute w-full scale-95 opacity-50">
                <SwipeCard data={nextName} onSwipe={() => {}} />
              </div>
            )}
            
            {/* Current card */}
            <AnimatePresence mode="wait">
              {currentName && (
                <SwipeCard
                  key={currentName.name}
                  data={currentName}
                  onSwipe={handleSwipe}
                  isTop
                />
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {!isFinished && (
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ActionButton variant="nope" onClick={() => handleSwipe("left")} />
          <ActionButton variant="superlike" onClick={() => handleSwipe("up")} size="lg" />
          <ActionButton variant="like" onClick={() => handleSwipe("right")} />
        </motion.div>
      )}

      {/* Progress */}
      {!isFinished && (
        <div className="absolute bottom-32 left-8 right-8">
          <div className="h-2 bg-deep-purple/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-deep-purple/30 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / filteredNames.length) * 100}%` }}
            />
          </div>
          <p className="text-center text-sm text-deep-purple/60 mt-2 font-semibold">
            {currentIndex + 1} / {filteredNames.length}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default SwipeScreen;
