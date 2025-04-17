// InvestmentParameterForm.tsx
"use client";

import { ExperienceLevel, LearningStyle, useParameters } from '@/contexts/ParametersContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const InvestmentParameterForm: React.FC = () => {
  const {
    experienceLevel, setExperienceLevel,
    learningStyle, setLearningStyle
  } = useParameters();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Investment Learning Preferences</CardTitle>
        <CardDescription>Customize your learning experience</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-medium text-sm">Experience Level</h3>
          
          <RadioGroup 
            value={experienceLevel} 
            onValueChange={(value) => setExperienceLevel(value as ExperienceLevel)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id="beginner" />
              <Label htmlFor="beginner">Complete Beginner</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="some_knowledge" id="some_knowledge" />
              <Label htmlFor="some_knowledge">Some Knowledge</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="experienced" id="experienced" />
              <Label htmlFor="experienced">Experienced</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-sm">Learning Style</h3>
          
          <RadioGroup 
            value={learningStyle} 
            onValueChange={(value) => setLearningStyle(value as LearningStyle)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="simple" id="simple" />
              <Label htmlFor="simple">Simple explanations with examples</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="scenario" id="scenario" />
              <Label htmlFor="scenario">Scenario-based learning</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="terminology" id="terminology" />
              <Label htmlFor="terminology">Term definitions and concepts</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}

export default InvestmentParameterForm;