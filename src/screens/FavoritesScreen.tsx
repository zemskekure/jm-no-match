import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PillButton from "../components/PillButton";
import TagChip from "../components/TagChip";
import { NameData } from "../data/names";

interface FavoritesScreenProps {
  favorites: NameData[];
  onBack: () => void;
  onRemove: (name: string) => void;
}

type FilterType = "all" | "boy" | "girl" | "neutral";

const FavoritesScreen = ({ favorites, onBack, onRemove }: FavoritesScreenProps) => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredFavorites = favorites.filter((n) => {
    if (filter === "all") return true;
    return n.gender === filter;
  });

  const handleShare = () => {
    const names = filteredFavorites.map((n) => n.name).join(", ");
    const text = `Naše oblíbená česká jména: ${names} 💕`;
    
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert("Zkopírováno do schránky!");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-yellow flex flex-col relative overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <motion.button
          onClick={onBack}
          className="text-deep-purple font-bold text-lg"
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Zpět
        </motion.button>

        <motion.button
          onClick={handleShare}
          className="bg-card px-4 py-2 rounded-full text-deep-purple font-bold shadow-playful flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📤 Sdílet
        </motion.button>
      </div>

      {/* Title */}
      <div className="px-6 pt-2 pb-4">
        <h1 className="text-3xl font-black text-deep-purple">
          Oblíbená jména 💕
        </h1>
        <p className="text-deep-purple/70 font-semibold">
          {favorites.length} uložených jmen
        </p>
      </div>

      {/* Filters */}
      <div className="px-6 pb-4 flex gap-2 flex-wrap">
        {[
          { key: "all", label: "Všechna", icon: "✨" },
          { key: "girl", label: "Holčičky", icon: "👧" },
          { key: "boy", label: "Chlapečci", icon: "👦" },
          { key: "neutral", label: "Neutrální", icon: "🌟" },
        ].map((item) => (
          <motion.button
            key={item.key}
            onClick={() => setFilter(item.key as FilterType)}
            className={`
              px-4 py-2 rounded-full font-bold text-sm
              ${filter === item.key
                ? "bg-deep-purple text-white"
                : "bg-white/50 text-deep-purple"
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon} {item.label}
          </motion.button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        {filteredFavorites.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🤷</div>
            <p className="text-deep-purple font-bold text-lg">
              Zatím žádná oblíbená jména
            </p>
            <p className="text-deep-purple/60 font-medium mt-2">
              Swipněte doprava na jména, která se vám líbí!
            </p>
          </motion.div>
        ) : (
          <AnimatePresence>
            {filteredFavorites.map((name, index) => (
              <motion.div
                key={name.name}
                className="bg-card rounded-2xl p-4 mb-3 shadow-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-black text-deep-purple">
                        {name.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        [{name.pronunciation}]
                      </span>
                    </div>
                    <p className="text-deep-purple/70 font-medium text-sm mb-2">
                      {name.meaning}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <TagChip
                        label={name.popularity}
                        variant={
                          name.popularity === "Oblíbené"
                            ? "pink"
                            : name.popularity === "Trendy"
                            ? "orange"
                            : name.popularity === "Klasické"
                            ? "green"
                            : "lavender"
                        }
                      />
                      <TagChip
                        label={
                          name.gender === "boy"
                            ? "Chlapec"
                            : name.gender === "girl"
                            ? "Dívka"
                            : "Neutrální"
                        }
                        variant={
                          name.gender === "boy"
                            ? "mint"
                            : name.gender === "girl"
                            ? "pink"
                            : "yellow"
                        }
                        icon={
                          name.gender === "boy"
                            ? "👦"
                            : name.gender === "girl"
                            ? "👧"
                            : "✨"
                        }
                      />
                    </div>
                  </div>
                  <motion.button
                    onClick={() => onRemove(name.name)}
                    className="text-coral text-xl p-2"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    🗑️
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Bottom action */}
      {favorites.length > 0 && (
        <motion.div
          className="absolute bottom-6 left-6 right-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <PillButton
            variant="green"
            size="lg"
            onClick={onBack}
            className="w-full text-lg"
          >
            ➡️ Pokračovat v hledání
          </PillButton>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FavoritesScreen;
