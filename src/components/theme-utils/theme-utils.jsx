import { useEffect, useState } from "react";

export function useThemeDetection() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const root = document.getElementById("root");

  useEffect(() => {
    const checkTheme = () => {
      if (root.classList.contains("light")) {
        setIsLightTheme(true);
      } else {
        setIsLightTheme(false);
      }
    };
    const observer = new MutationObserver(checkTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    checkTheme();
    return () => {
      observer.disconnect();
    };
  }, [root]);

  return isLightTheme;
}
