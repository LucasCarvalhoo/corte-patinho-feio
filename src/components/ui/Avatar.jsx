const Avatar = ({ 
  src, 
  alt, 
  size = 'md', 
  fallback,
  className = '' 
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm', 
    lg: 'text-base',
    xl: 'text-lg',
    '2xl': 'text-xl'
  };

  return (
    <div className={`
      ${sizes[size]} 
      rounded-full 
      overflow-hidden 
      bg-slate-600 
      flex 
      items-center 
      justify-center
      ${className}
    `}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <span className={`
          font-medium 
          text-slate-300 
          ${textSizes[size]}
        `}>
          {fallback}
        </span>
      )}
    </div>
  );
};

export default Avatar;