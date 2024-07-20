function Card({ children, background, border, width, height, hideButton }) {
  const bg = background ?? "bg-blue-600";
  const uBorder = border ?? "border-4 border-blue-300 border-x-blue-300";
  const uWidth = width ?? "min-w-fit";

  return (
    <div
      className={` ${bg} ${uWidth} flex
        flex-col
        justify-center
        items-center
        p-5
        ${height}
        shadow-2xl
        shadow-indigo-900
        ${uBorder}
        rounded-full`}
      style={{ borderRadius:hideButton ? '' : "2.2em" }}
    >
      {children}
    </div>
  );
}

export default Card;
