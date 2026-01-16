import { motion } from "framer-motion";

interface TagChipProps {
  label: string;
  variant?: "pink" | "green" | "yellow" | "orange" | "lavender" | "mint";
  icon?: string;
}

const TagChip = ({ label, variant = "pink", icon }: TagChipProps) => {
  const variants = {
    pink: "bg-pink/20 text-pink border-pink/30",
    green: "bg-green/20 text-green border-green/30",
    yellow: "bg-yellow/20 text-deep-purple border-yellow/30",
    orange: "bg-orange/20 text-deep-purple border-orange/30",
    lavender: "bg-lavender/20 text-deep-purple border-lavender/30",
    mint: "bg-mint/20 text-deep-purple border-mint/30",
  };

  return (
    <motion.span
      className={`
        ${variants[variant]}
        inline-flex items-center gap-1.5
        px-3 py-1 rounded-full text-sm font-semibold
        border
      `}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {icon && <span>{icon}</span>}
      {label}
    </motion.span>
  );
};

export default TagChip;
