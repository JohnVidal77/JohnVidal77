const CardHeader = ({title}) => (
  <div className="absolute border-black border-b-2 flex justify-between top-0 left-0 right-0 h-14">
    <div className="w-14 h-14 border-black border-r-2" />
    <div className="flex-1 flex items-center justify-center">
      <span>{title}</span>
    </div>
    <div className="w-14 h-14 border-black border-l-2" />
    <div className="w-14 h-14 border-black border-l-2" />
  </div>
);

export default CardHeader;
