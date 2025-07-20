import { forwardRef } from 'react';

const SearchInput = forwardRef(({ 
  placeholder = 'Buscar...', 
  className = '',
  onSearch,
  ...props 
}, ref) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          className="h-5 w-5 text-slate-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="
          w-full 
          pl-10 pr-4 py-3 
          bg-slate-700 
          border border-slate-600 
          rounded-lg 
          text-white 
          placeholder-slate-400
          focus:outline-none 
          focus:ring-2 
          focus:ring-white/20 
          focus:border-transparent
          transition-colors
        "
        {...props}
      />
    </div>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;