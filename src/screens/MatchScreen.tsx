import { motion } from "framer-motion";
import Mascot from "../components/Mascot";
import PillButton from "../components/PillButton";
import Confetti from "../components/Confetti";
import { NameData } from "../data/names";

interface MatchScreenProps {
  name: NameData;
  onContinue: () => void;
  onOpenFavorites: () => void;
}

const MatchScreen = ({ name, onContinue, onOpenFavorites }: MatchScreenProps) => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-celebration flex flex-col items-center justify-center p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Confetti />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 text-5xl"
        animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute top-20 right-12 text-4xl"
        animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
      >
        💕
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-8 text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        🎉
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-10 text-5xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      {/* Content */}
      <motion.div
        className="text-center z-10 max-w-sm"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Mascot mood="love" size="lg" className="mx-auto mb-6" />

        <motion.h1
          className="text-5xl font-black text-white mb-2 drop-shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          SHODA! 💖
        </motion.h1>

        <motion.p
          className="text-xl text-white/90 font-bold mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oba milujete toto jméno!
        </motion.p>

        <motion.div
          className="bg-white rounded-3xl p-8 shadow-card mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <motion.h2
            className="text-4xl font-black text-deep-purple mb-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {name.name}
          </motion.h2>
          <p className="text-muted-foreground font-medium">[{name.pronunciation}]</p>
          <div className="h-px bg-border my-4" />
          <p className="text-deep-purple font-semibold">{name.meaning}</p>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <PillButton
            variant="yellow"
            size="lg"
            onClick={onOpenFavorites}
            className="w-full text-lg"
          >
            💛 Uložit do oblíbených
          </PillButton>
          
          <PillButton
            variant="mint"
            size="lg"
            onClick={onContinue}
            className="w-full text-lg"
          >
            ➡️ Pokračovat v hledání
          </PillButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MatchScreen;
