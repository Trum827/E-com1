import React from 'react';
import { Check } from 'lucide-react';

interface ProductFeaturesProps {
  features: string[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <Check className="h-5 w-5 text-green-500" />
          <span className="text-gray-600">{feature}</span>
        </div>
      ))}
    </div>
  );
}