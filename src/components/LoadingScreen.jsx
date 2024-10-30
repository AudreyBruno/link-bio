import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= 100) {
          clearInterval(interval);
          const loadingScreen = document.getElementById("loading-screen");
          loadingScreen.style.opacity = 0;
          setTimeout(() => {
            loadingScreen.style.display = "none";
          }, 500);
          return 100;
        }
        return prevWidth + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-black z-50 flex justify-center items-center overflow-hidden"
      style={{ opacity: 1, transition: "opacity 0.5s" }}
    >
      <div
        id="loading-bar"
        className="absolute top-0 left-0 h-full bg-[#151515]"
        style={{ width: `${width}%` }}
      />
      <div id="loading-text" className="absolute text-white text-6xl z-10">
        {width}%
      </div>
    </div>
  );
};

export default LoadingScreen;
