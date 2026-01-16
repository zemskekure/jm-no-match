import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import TagChip from "./TagChip";

interface NameData {
  name: string;
  pronunciation: string;
  meaning: string;
  popularity: "Oblíbené" | "Klasické" | "Vzácné" | "Trendy";
  gender: "boy" | "girl" | "neutral";
}

interface SwipeCardProps {
  data: NameData;
  onSwipe: (direction: "left" | "right" | "up") => void;
  isTop?: boolean;
}

const SwipeCard = ({ data, onSwipe, isTop = false }: SwipeCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(
    x,
    [-200, -100, 0, 100, 200],
    [0.5, 1, 1, 1, 0.5]
  );

  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
  const superlikeOpacity = useTransform(y, [-100, 0], [1, 0]);

  const popularityColors: Record<string, "pink" | "green" | "yellow" | "orange"> = {
    "Oblíbené": "pink",
    "Klasické": "green",
    "Vzácné": "lavender" as "pink",
    "Trendy": "orange",
  };

  const genderColors = {
    boy: "bg-mint",
    girl: "bg-pink",
    neutral: "bg-yellow",
  };

  const genderIcons = {
    boy: "👦",
    girl: "👧",
    neutral: "✨",
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    
    if (offset.y < -100 && velocity.y < -500) {
      onSwipe("up");
    } else if (offset.x > 100 || velocity.x > 500) {
      onSwipe("right");
    } else if (offset.x < -100 || velocity.x < -500) {
      onSwipe("left");
    }
  };

  return (
    <motion.div
      className={`absolute w-full max-w-sm ${isTop ? "cursor-grab active:cursor-grabbing" : ""}`}
      style={{ x, y, rotate, opacity }}
      drag={isTop}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ 
        x: x.get() > 0 ? 300 : x.get() < 0 ? -300 : 0,
        y: y.get() < 0 ? -300 : 0,
        opacity: 0,
        transition: { duration: 0.3 }
      }}
    >
      {/* Card */}
      <div className="bg-card rounded-3xl shadow-card overflow-hidden">
        {/* Header with color */}
        <div className={`${genderColors[data.gender]} h-32 relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">{genderIcons[data.gender]}</span>
          </div>
          
          {/* LIKE overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-green/80 rounded-t-3xl"
            style={{ opacity: likeOpacity }}
          >
            <span className="text-4xl font-black text-white rotate-[-15deg] border-4 border-white px-4 py-2 rounded-xl">
              LÍBÍ SE! 💚
            </span>
          </motion.div>
          
          {/* NOPE overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-coral/80 rounded-t-3xl"
            style={{ opacity: nopeOpacity }}
          >
            <span className="text-4xl font-black text-white rotate-[15deg] border-4 border-white px-4 py-2 rounded-xl">
              NE 👎
            </span>
          </motion.div>
          
          {/* SUPERLIKE overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-yellow/80 rounded-t-3xl"
            style={{ opacity: superlikeOpacity }}
          >
            <span className="text-4xl font-black text-deep-purple border-4 border-deep-purple px-4 py-2 rounded-xl">
              SUPER! ⭐
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Name */}
          <div className="text-center">
            <h2 className="text-4xl font-black text-deep-purple">{data.name}</h2>
            <p className="text-muted-foreground font-medium mt-1">[{data.pronunciation}]</p>
          </div>

          {/* Meaning */}
          <div className="bg-muted rounded-2xl p-4 text-center">
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-1">
              Význam
            </p>
            <p className="text-deep-purple font-bold">{data.meaning}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            <TagChip 
              label={data.popularity} 
              variant={popularityColors[data.popularity]}
              icon="📊"
            />
            <TagChip 
              label={data.gender === "boy" ? "Chlapec" : data.gender === "girl" ? "Dívka" : "Neutrální"} 
              variant={data.gender === "boy" ? "mint" : data.gender === "girl" ? "pink" : "yellow"}
              icon={genderIcons[data.gender]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
