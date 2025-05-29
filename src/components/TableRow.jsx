function TableRow({ ins, lev, avg, swap, link }) {

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center p-3 border-b border-gray-700 font-grotesk text-secondary-text">
      <div className="flex items-center gap-2">
        <img src={ins.img} className="hidden sm:block rounded-full w-8" />
        <div>
          <p className="text-sm sm:text-base">{ins.title}</p>
          <p className="hidden sm:block text-xs sm:text-sm text-secondary-text-g">{ins.text}</p>
        </div>
      </div>
      <div className="min-w-0 break-words text-sm sm:text-base ">{lev}</div>
      <div className="hidden md:block min-w-0 break-words text-sm sm:text-base">{avg}</div>
      <div className="hidden md:block min-w-0 break-words text-sm sm:text-base">{swap}</div>
      <div className="text-sm sm:text-base">
        <a className="hover:underline  text-secondary-text-g text-sm sm:text-base">{link}</a>
      </div>
    </div>
  );
}
export default TableRow;
