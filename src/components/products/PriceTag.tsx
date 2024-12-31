import React from 'react';

interface PriceTagProps {
  price: number;
  originalPrice?: number;
}

export default function PriceTag({ price, originalPrice }: PriceTagProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-3xl font-bold text-gray-900">
        ${price.toFixed(2)}
      </span>
      {originalPrice && (
        <span className="text-xl text-gray-500 line-through">
          ${originalPrice.toFixed(2)}
        </span>
      )}
      {originalPrice && (
        <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
          Save ${(originalPrice - price).toFixed(2)}
        </span>
      )}
    </div>
  );
}