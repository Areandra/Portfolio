import { motion } from "framer-motion";
import { useState } from "react";

interface DynamicContentCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: string[];
  link?: string;
  linkText?: string;
  variant?: "default" | "gradient" | "minimal" | "glass";
  gradientColors?: {
    from: string;
    via: string;
    to: string;
  };
  size?: "sm" | "md" | "lg";
  orientation?: "vertical" | "horizontal";
}

export default function DynamicContentCard({
  title,
  description,
  icon,
  tags = [],
  link,
  linkText = "View Details",
  variant = "default",
  gradientColors = {
    from: "#ffffff",
    via: "#ffffff",
    to: "#ffffff",
  },
  size = "md",
  orientation = "vertical",
}: DynamicContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const sizeClasses = {
    sm: "p-4 max-w-sm",
    md: "p-6 max-w-md",
    lg: "p-8 max-w-lg",
  };

  const variantStyles = {
    default: "bg-gray-900 border border-gray-800",
    gradient: `bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-transparent`,
    minimal: "bg-transparent border border-gray-800",
    glass: "bg-gray-900/30 backdrop-blur-md border border-white/10",
  };

  const gradientStyle =
    variant === "gradient"
      ? {
          background: `linear-gradient(135deg, ${gradientColors.from}20, ${gradientColors.via}20, ${gradientColors.to}20)`,
        }
      : {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        sizeClasses[size]
      } ${variantStyles[variant]} ${
        orientation === "horizontal" ? "flex items-start gap-6" : ""
      }`}
      style={gradientStyle}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {variant !== "minimal" && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${gradientColors.from}15 0%, transparent 70%)`,
          }}
        />
      )}

      {icon && (
        <motion.div
          animate={{
            rotate: isHovered ? [0, 10, -10, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
          className={`mb-4 ${orientation === "horizontal" ? "shrink-0" : ""}`}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700">
            {icon}
          </div>
        </motion.div>
      )}

      <div
        className={`relative z-10 ${
          orientation === "horizontal" ? "flex-1" : ""
        }`}
      >
        <motion.h3
          animate={{ x: isHovered ? 5 : 0 }}
          className={`font-bold mb-3 ${
            size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"
          } text-white`}
        >
          <span className="relative inline-block">
            {title}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                isHovered ? "w-full" : "w-0"
              }`}
              style={{
                background: `linear-gradient(90deg, #F59E0B, #D97706)`,
              }}
            />
          </span>
        </motion.h3>

        <motion.p
          animate={{ opacity: isHovered ? 1 : 0.9 }}
          className={`text-gray-300 mb-4 ${
            size === "sm"
              ? "text-sm"
              : size === "lg"
              ? "text-base leading-relaxed"
              : "text-sm leading-relaxed"
          }`}
        >
          {description}
          {description.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-blue-400 hover:text-blue-300 text-sm"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </motion.p>

        {tags.length > 0 && (
          <motion.div layout className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}

        <div className="flex items-center justify-between">
          {link && (
            <motion.a
              href={link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-linear-to-r from-gray-800 to-gray-900 border border-gray-700 text-sm font-medium text-white hover:border-gray-600 transition-all"
            >
              {linkText}
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          )}

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              onClick={() => console.log("Like:", title)}
            >
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              onClick={() => console.log("Share:", title)}
            >
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
