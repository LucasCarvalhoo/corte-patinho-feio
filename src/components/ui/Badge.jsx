const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center rounded-full font-medium";
  
  const variants = {
    default: "bg-slate-700 text-slate-300",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-white", 
    danger: "bg-red-600 text-white",
    info: "bg-blue-600 text-white"
  };
  
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base"
  };
  
  return (
    <span className={`
      ${baseStyles} 
      ${variants[variant]} 
      ${sizes[size]} 
      ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;