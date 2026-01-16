import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Confetti = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const colors = [
      "hsl(340 85% 65%)", // pink
      "hsl(145 70% 55%)", // green
      "hsl(45 95% 60%)",  // yellow
      "hsl(25 95% 60%)",  // orange
      "hsl(280 50% 75%)", // lavender
    ];

    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: "-20px",
            backgroundColor: particle.color,
          }}
          initial={{ y: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: "100vh",
            rotate: 720,
            opacity: 0,
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
