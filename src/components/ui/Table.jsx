const Table = ({ children, className = '' }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-700">
      <table className={`w-full ${className}`}>
        {children}
      </table>
    </div>
  );
};

const TableHeader = ({ children, className = '' }) => {
  return (
    <thead className={`bg-slate-800 ${className}`}>
      {children}
    </thead>
  );
};

const TableBody = ({ children, className = '' }) => {
  return (
    <tbody className={`bg-slate-800/30 divide-y divide-slate-700 ${className}`}>
      {children}
    </tbody>
  );
};

const TableRow = ({ children, className = '', ...props }) => {
  return (
    <tr className={`hover:bg-slate-700/50 transition-colors ${className}`} {...props}>
      {children}
    </tr>
  );
};

const TableHead = ({ children, className = '' }) => {
  return (
    <th className={`
      px-6 py-3 
      text-left 
      text-xs 
      font-medium 
      text-slate-400 
      uppercase 
      tracking-wider
      ${className}
    `}>
      {children}
    </th>
  );
};

const TableCell = ({ children, className = '' }) => {
  return (
    <td className={`px-6 py-4 text-sm text-slate-300 ${className}`}>
      {children}
    </td>
  );
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;

export default Table;