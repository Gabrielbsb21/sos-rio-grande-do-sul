import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Ir para topo da página"
          className="bg-primary hover:shadow-signUp flex size-10 cursor-pointer items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <span className="mt-[6px] size-3 rotate-45 border-l border-t border-white"></span>
        </button>
      )}
    </div>
  );
}
