import { motion } from "framer-motion";
import PillButton from "../components/PillButton";

interface GenderSelectScreenProps {
  onSelect: (gender: "boy" | "girl" | "neutral") => void;
  onBack: () => void;
}

const GenderSelectScreen = ({ onSelect, onBack }: GenderSelectScreenProps) => {
  return (
    <motion.div
      className="min-h-screen bg-mint flex flex-col items-center justify-center p-8 relative overflow-hidden"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-16 right-12 w-16 h-16 bg-pink rounded-full opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 left-8 w-20 h-20 bg-yellow rounded-3xl opacity-50"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Back button */}
      <motion.button
        onClick={onBack}
        className="absolute top-8 left-8 text-deep-purple font-bold text-lg flex items-center gap-2"
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Zpět
      </motion.button>

      {/* Content */}
      <motion.div
        className="text-center z-10 max-w-sm w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          className="text-6xl mb-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          👶
        </motion.div>

        <h2 className="text-3xl font-black text-deep-purple mb-3">
          Pro koho hledáte?
        </h2>
        <p className="text-deep-purple/70 font-semibold mb-10">
          Vyberte pohlaví pro zobrazení jmen
        </p>

        <div className="space-y-4">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <PillButton
              variant="pink"
              size="lg"
              onClick={() => onSelect("girl")}
              className="w-full text-xl flex items-center justify-center gap-3"
            >
              👧 Holčička
            </PillButton>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <PillButton
              variant="mint"
              size="lg"
              onClick={() => onSelect("boy")}
              className="w-full text-xl flex items-center justify-center gap-3"
            >
              👦 Chlapeček
            </PillButton>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <PillButton
              variant="yellow"
              size="lg"
              onClick={() => onSelect("neutral")}
              className="w-full text-xl flex items-center justify-center gap-3"
            >
              ✨ Všechna jména
            </PillButton>
          </motion.div>
        </div>

        <motion.p
          className="mt-8 text-sm text-deep-purple/60 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Můžete změnit kdykoliv v nastavení
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default GenderSelectScreen;
