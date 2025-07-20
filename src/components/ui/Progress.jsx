const Progress = ({ 
  value = 0, 
  max = 100, 
  className = '',
  showLabel = false,
  label = ''
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  return (
    <div className={`w-full ${className}`}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-300">
            {label || 'Progresso'}
          </span>
          <span className="text-sm text-slate-400">
            {value}/{max}
          </span>
        </div>
      )}
      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;