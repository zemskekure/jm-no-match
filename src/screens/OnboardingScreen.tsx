import { motion } from "framer-motion";
import Mascot from "../components/Mascot";
import PillButton from "../components/PillButton";

interface OnboardingScreenProps {
  onStart: () => void;
}

const OnboardingScreen = ({ onStart }: OnboardingScreenProps) => {
  return (
    <motion.div
      className="min-h-screen bg-pink flex flex-col items-center justify-center p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-yellow rounded-full opacity-60"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-32 right-8 w-16 h-16 bg-green rounded-2xl opacity-60"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-12 w-12 h-12 bg-orange rounded-xl opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-24 h-24 bg-lavender rounded-full opacity-50"
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        className="text-center z-10 max-w-sm"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Mascot mood="excited" size="lg" className="mx-auto mb-8" />

        <motion.h1
          className="text-4xl font-black text-deep-purple mb-4 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Najdi to pravé české jméno
        </motion.h1>

        <motion.p
          className="text-lg text-deep-purple/80 mb-8 font-semibold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Swipuj jména, najdi shodu s partnerem a vyber to nejkrásnější jméno pro vaše miminko! 👶
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <PillButton
            variant="yellow"
            size="lg"
            onClick={onStart}
            className="w-full text-xl"
          >
            🚀 Začít hledat
          </PillButton>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-deep-purple/60 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Více než 500 krásných českých jmen
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default OnboardingScreen;
