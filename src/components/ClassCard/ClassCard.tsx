type ClassCardType = {
  className: string;
  img: string;
  nextClass: string;
  progress: string;
}


const ClassCard: React.FC<ClassCardType> = ({className, nextClass, progress, img}) => {
  return (
    <div className="max-w-64 h-[300px] md:h-[340px] rounded-xl overflow-hidden shadow hover:shadow-lg duration-200 hover:scale-[1.005]">
      <div className="h-1/2 rounded-xl overflow-hidden">
        <img
          className="block w-full h-full object-cover"
          src={img}
          alt="class image"
        />
      </div>
      <div className="p-4 md:p-6 h-1/2">
        <h3 className="font-bold text-sm sm:text-lg md:text-xl mb-2 md:mb-4 overflow-hidden md:text-ellipsis md:whitespace-nowrap ">{className}</h3>
        <span className="border text-xs sm:text-sm px-4 shadow mb-4 inline-block text-gray-500">
         {nextClass}
        </span>
        <div>
        <div className="w-full rounded-full bg-gray-200">
          <div
            className="bg-blue-600 h-2.5 rounded-full mb-1"
            style={{ width: `${progress}` }}
          ></div>
         
        </div>
        <div className="text-xs font-bold flex gap-1">
            <span className="text-gray-400">Progress:</span>
            <span>{progress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
