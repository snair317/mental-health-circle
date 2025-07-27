import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Heart, Leaf, Smile, MessageCircle } from "lucide-react";

// Affirmations with icons (more modern, soothing)
const affirmations = [
  "🌿 Take a deep breath. You're doing better than you think.",
  "🌞 It's okay not to be okay. You're not alone.",
  "💙 Sharing helps. We're here for you.",
  "🌱 Small steps are still progress. Keep going.",
  "🌸 Someone is ready to listen with kindness.",
  "✨ You matter. Your story matters.",
];

// Each tip now has icon, color, and text
const tips = [
  {
    icon: Sun,
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-400",
    text: "Practice deep breathing for 5 minutes each morning.",
  },
  {
    icon: Smile,
    color: "from-purple-100 to-pink-50",
    iconColor: "text-purple-400",
    text: "Write down three things you're grateful for today.",
  },
  {
    icon: Leaf,
    color: "from-green-100 to-green-50",
    iconColor: "text-green-400",
    text: "Take a short walk outside to clear your mind.",
  },
  {
    icon: MessageCircle,
    color: "from-teal-100 to-teal-50",
    iconColor: "text-teal-400",
    text: "Reach out to a friend or family member—even a quick chat helps.",
  },
  {
    icon: Heart,
    color: "from-pink-100 to-rose-50",
    iconColor: "text-pink-400",
    text: "Try a 2-minute guided meditation before bedtime.",
  },
];

export default function Tips() {
  const [aIdx, setAIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAIdx((i) => (i + 1) % affirmations.length), 10000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-blue-50 via-white to-pink-50 flex flex-col">
      {/* Affirmation Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full py-3 text-center text-xl md:text-2xl font-semibold bg-white/70 rounded-b-3xl shadow-md text-blue-600"
      >
        {affirmations[aIdx]}
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center flex-1 justify-center px-2 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700 my-8 drop-shadow">Wellness Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(80, 200, 180, 0.15)" }}
              className={`rounded-2xl shadow-xl p-8 bg-gradient-to-tr ${tip.color} flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer min-w-[260px]`}
            >
              <tip.icon size={38} className={`${tip.iconColor} drop-shadow`} />
              <div className="font-semibold text-lg text-gray-800 text-center">{tip.text}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-400 text-sm py-6">
        Solace Circle © 2025 • A safe space to share and be heard.
      </div>
    </div>
  );
}
