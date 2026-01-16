import { motion } from "framer-motion";

interface MascotProps {
  mood?: "happy" | "excited" | "love";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Mascot = ({ mood = "happy", size = "md", className = "" }: MascotProps) => {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const eyeVariants = {
    happy: { scaleY: 1 },
    excited: { scaleY: 0.3 },
    love: { scaleY: 1 },
  };

  const mouthVariants = {
    happy: "M 35 55 Q 50 65 65 55",
    excited: "M 35 50 Q 50 70 65 50",
    love: "M 35 55 Q 50 68 65 55",
  };

  return (
    <motion.div
      className={`${sizes[size]} ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Face */}
        <circle cx="50" cy="50" r="45" className="fill-yellow" />
        
        {/* Cheeks */}
        <circle cx="25" cy="55" r="8" className="fill-coral opacity-60" />
        <circle cx="75" cy="55" r="8" className="fill-coral opacity-60" />
        
        {/* Eyes */}
        {mood === "love" ? (
          <>
            <path d="M 28 40 L 35 48 L 42 40 L 35 32 Z" className="fill-pink" />
            <path d="M 58 40 L 65 48 L 72 40 L 65 32 Z" className="fill-pink" />
          </>
        ) : (
          <>
            <motion.ellipse
              cx="35"
              cy="42"
              rx="6"
              ry="8"
              className="fill-deep-purple"
              variants={eyeVariants}
              animate={mood}
            />
            <motion.ellipse
              cx="65"
              cy="42"
              rx="6"
              ry="8"
              className="fill-deep-purple"
              variants={eyeVariants}
              animate={mood}
            />
            {/* Eye shine */}
            <circle cx="37" cy="40" r="2" className="fill-white" />
            <circle cx="67" cy="40" r="2" className="fill-white" />
          </>
        )}
        
        {/* Mouth */}
        <motion.path
          d={mouthVariants[mood]}
          fill="none"
          stroke="hsl(280 60% 25%)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Stars around head when excited */}
        {mood === "excited" && (
          <>
            <motion.text
              x="10"
              y="20"
              className="fill-pink text-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              ✦
            </motion.text>
            <motion.text
              x="80"
              y="15"
              className="fill-orange text-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
            >
              ✦
            </motion.text>
          </>
        )}
        
        {/* Hearts when in love mood */}
        {mood === "love" && (
          <>
            <motion.text
              x="5"
              y="25"
              className="fill-pink text-sm"
              animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ♥
            </motion.text>
            <motion.text
              x="85"
              y="20"
              className="fill-coral text-sm"
              animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            >
              ♥
            </motion.text>
          </>
        )}
      </svg>
    </motion.div>
  );
};

export default Mascot;
