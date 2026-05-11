'use client';

interface CategoryFilterProps {
  categories: { name: string; slug: string }[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  // Add "Hepsi" to the beginning
  const allCategories = [{ name: 'Hepsi', slug: 'hepsi' }, ...categories];

  return (
    <div className="border-b border-gray-100 mb-12">
      <div className="max-w-[1400px] mx-auto px-8 overflow-x-auto">
        <div className="flex items-center space-x-10 py-4 min-w-max">
          {allCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className={`relative py-3 text-sm font-bold transition-all duration-300 whitespace-nowrap tracking-wide ${
                selectedCategory === cat.slug 
                  ? 'text-black' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat.name}
              {selectedCategory === cat.slug && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


