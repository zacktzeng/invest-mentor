// ParametersContext.tsx
"use client";

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type ExperienceLevel = "beginner" | "some_knowledge" | "experienced";
export type LearningStyle = "simple" | "scenario" | "terminology";

interface ParametersContextType {
  experienceLevel: ExperienceLevel;
  setExperienceLevel: (level: ExperienceLevel) => void;
  learningStyle: LearningStyle;
  setLearningStyle: (style: LearningStyle) => void;
  lastUpdated: { parameter: string; timestamp: string } | null;
  parameterChanged: boolean;
  acknowledgeParameterChange: () => void;
}

interface ParametersProviderProps {
  children: ReactNode;
}

const ParametersContext = createContext<ParametersContextType | null>(null);

export const ParametersProvider: React.FC<ParametersProviderProps> = ({ children }) => {
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>("beginner");
  const [learningStyle, setLearningStyle] = useState<LearningStyle>("simple");
  const [lastUpdated, setLastUpdated] = useState<{ parameter: string; timestamp: string } | null>(null);
  const [parameterChanged, setParameterChanged] = useState<boolean>(false);

  // Custom setter functions that track changes
  const updateExperienceLevel = (level: ExperienceLevel) => {
    if (level !== experienceLevel) {
      setExperienceLevel(level);
      setLastUpdated({
        parameter: "experience_level",
        timestamp: new Date().toISOString()
      });
      setParameterChanged(true);
    }
  };

  const updateLearningStyle = (style: LearningStyle) => {
    if (style !== learningStyle) {
      setLearningStyle(style);
      setLastUpdated({
        parameter: "learning_style",
        timestamp: new Date().toISOString()
      });
      setParameterChanged(true);
    }
  };

  const acknowledgeParameterChange = () => {
    setParameterChanged(false);
  };

  return (
    <ParametersContext.Provider value={{
      experienceLevel, 
      setExperienceLevel: updateExperienceLevel,
      learningStyle, 
      setLearningStyle: updateLearningStyle,
      lastUpdated,
      parameterChanged,
      acknowledgeParameterChange
    }}>
      {children}
    </ParametersContext.Provider>
  );
};

export const useParameters = (): ParametersContextType => {
  const context = useContext(ParametersContext);
  if (!context) {
    throw new Error('useParameters must be used within a ParametersProvider');
  }
  return context;
};