// InvestmentParameterForm.tsx
"use client";

import { useParameters } from '@/contexts/ParametersContext';

const InvestmentParameterForm: React.FC = () => {
  const {
    experienceLevel, setExperienceLevel,
    learningStyle, setLearningStyle
  } = useParameters();

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full border border-gray-200">
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-1">Investment Learning Preferences</h1>
        <p className="text-gray-600 text-sm">Customize your learning experience</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="font-medium text-gray-700 block mb-2">Experience Level</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="beginner"
                name="experience"
                className="mr-2"
                checked={experienceLevel === "beginner"}
                onChange={() => setExperienceLevel("beginner")}
              />
              <label htmlFor="beginner">Complete Beginner</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="some_knowledge"
                name="experience"
                className="mr-2"
                checked={experienceLevel === "some_knowledge"}
                onChange={() => setExperienceLevel("some_knowledge")}
              />
              <label htmlFor="some_knowledge">Some Knowledge</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="experienced"
                name="experience"
                className="mr-2"
                checked={experienceLevel === "experienced"}
                onChange={() => setExperienceLevel("experienced")}
              />
              <label htmlFor="experienced">Experienced</label>
            </div>
          </div>
        </div>

        <div>
          <label className="font-medium text-gray-700 block mb-2">Learning Style</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="simple"
                name="style"
                className="mr-2"
                checked={learningStyle === "simple"}
                onChange={() => setLearningStyle("simple")}
              />
              <label htmlFor="simple">Simple explanations with examples</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="scenario"
                name="style"
                className="mr-2"
                checked={learningStyle === "scenario"}
                onChange={() => setLearningStyle("scenario")}
              />
              <label htmlFor="scenario">Scenario-based learning</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="terminology"
                name="style"
                className="mr-2"
                checked={learningStyle === "terminology"}
                onChange={() => setLearningStyle("terminology")}
              />
              <label htmlFor="terminology">Term definitions and concepts</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentParameterForm;