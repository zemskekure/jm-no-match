import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  variant?: "pink" | "green" | "yellow" | "orange" | "lavender" | "mint";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  selected?: boolean;
}

const PillButton = ({
  children,
  variant = "pink",
  size = "md",
  onClick,
  className = "",
  selected = false,
}: PillButtonProps) => {
  const variants = {
    pink: "bg-pink hover:brightness-105",
    green: "bg-green hover:brightness-105",
    yellow: "bg-yellow hover:brightness-105",
    orange: "bg-orange hover:brightness-105",
    lavender: "bg-lavender hover:brightness-105",
    mint: "bg-mint hover:brightness-105",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-full font-bold text-deep-purple
        shadow-playful transition-all duration-200
        active:shadow-none active:translate-y-1
        ${selected ? "ring-4 ring-deep-purple ring-offset-2" : ""}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default PillButton;
