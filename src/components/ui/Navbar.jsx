import Avatar from './Avatar';

const Navbar = ({ 
  title = 'BarberApp', 
  children, 
  user,
  onUserClick,
  className = '' 
}) => {
  return (
    <nav className={`
      bg-slate-900 
      border-b 
      border-slate-700 
      px-6 
      py-4 
      flex 
      items-center 
      justify-between
      ${className}
    `}>
      {/* Logo/Title */}
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-white">
          {title}
        </h1>
      </div>

      {/* Navigation Items */}
      <div className="flex items-center space-x-8">
        {children}
      </div>

      {/* User Section */}
      {user && (
        <div className="flex items-center space-x-4">
          <button
            onClick={onUserClick}
            className="flex items-center space-x-2 hover:bg-slate-800 rounded-lg p-2 transition-colors"
          >
            <Avatar 
              src={user.avatar} 
              alt={user.name}
              fallback={user.name?.charAt(0)}
              size="sm"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ 
  children, 
  active = false, 
  onClick,
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-2 
        text-sm 
        font-medium 
        transition-colors 
        rounded-md
        ${active 
          ? 'text-white bg-slate-800' 
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

Navbar.Item = NavItem;

export default Navbar;