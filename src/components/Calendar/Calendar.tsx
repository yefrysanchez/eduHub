

interface CalendarProps {
  onMonthChange: (year: number, month: number) => void;
  currentDate: Date;
}

const getDaysInMonth = (year: number, month: number): (number | null)[] => {
  return new Array(31).fill(null).map((_, i) => {
    const day = i + 1;
    return new Date(year, month, day).getMonth() === month ? day : null;
  }).filter((day): day is number => day !== null);
};

const Calendar: React.FC<CalendarProps> = ({ onMonthChange, currentDate }) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date().getDate();
  
  const days = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay();

  return (
    <div className="p-4 bg-white shadow-md rounded-md mx-auto min-w-[250px] max-w-[390px]">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => {
          const newMonth = month - 1;
          const newYear = newMonth < 0 ? year - 1 : year;
          onMonthChange(newYear, (newMonth + 12) % 12);
        }}>&lt;</button>
        <h2 className="text-lg font-semibold">{monthNames[month]} {year}</h2>
        <button onClick={() => {
          const newMonth = month + 1;
          const newYear = newMonth > 11 ? year + 1 : year;
          onMonthChange(newYear, newMonth % 12);
        }}>&gt;</button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center">
        {daysOfWeek.map(day => (
          <div key={day} className="font-semibold">{day}</div>
        ))}
        {[...Array(firstDay).fill(null)].map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map(day => (
          <div
            key={day}
            className={`p-2 cursor-pointer ${day === today ? 'bg-blue-700 text-white' : 'hover:bg-gray-200'}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
