import { motion } from "framer-motion";

interface ActionButtonProps {
  variant: "nope" | "like" | "superlike";
  onClick: () => void;
  size?: "sm" | "md" | "lg";
}

const ActionButton = ({ variant, onClick, size = "md" }: ActionButtonProps) => {
  const variants = {
    nope: {
      bg: "bg-coral",
      icon: "✕",
      label: "Ne",
    },
    like: {
      bg: "bg-green",
      icon: "♥",
      label: "Líbí",
    },
    superlike: {
      bg: "bg-yellow",
      icon: "★",
      label: "Super",
    },
  };

  const sizes = {
    sm: "w-12 h-12 text-xl",
    md: "w-16 h-16 text-2xl",
    lg: "w-20 h-20 text-3xl",
  };

  const config = variants[variant];

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${config.bg} ${sizes[size]}
        rounded-full flex items-center justify-center
        text-deep-purple font-bold
        shadow-playful
        active:shadow-none active:translate-y-1
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {config.icon}
    </motion.button>
  );
};

export default ActionButton;
