import { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [displayLocation, setDisplayLocation] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <TransitionContext.Provider
      value={{
        displayLocation,
        setDisplayLocation,
        isTransitioning,
        setIsTransitioning,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);
