import { useEffect, useState } from "react";

const useThemeDetection = () => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const root: any = document.getElementById("root");

  console.log(root);

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
};

export default useThemeDetection;
