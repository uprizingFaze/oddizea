// components/AnimatedButton.tsx
import React from "react";

const GLYPHS =
  "ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ";

interface AnimatedButtonProps {
  text?: string;
  speed?: number;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text = "Click Me",
  speed = 0.25,
  className,
}) => {
  return (
    <div className="animatedButton-container">
      <button
        className={`animatedButton-button ${className}`}
        style={{ "--animatedButton-speed": speed } as React.CSSProperties}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            data-char={char}
            style={
              {
                "--animatedButton-index": index,
                "--animatedButton-char-1": `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
                "--animatedButton-char-2": `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
                "--animatedButton-char-3": `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
              } as React.CSSProperties
            }
          >
            {char}
          </span>
        ))}
      </button>
    </div>
  );
};

export default AnimatedButton;
