import { useState } from "react";
import Calendar from "./Calendar"
import UpcomingEvents from "./UpcomingEvents";



const CalendarContainer: React.FC = () => {
   
    const [currentDate, setCurrentDate] = useState(new Date());

   
  
    const handleMonthChange = (year: number, month: number) => {
      setCurrentDate(new Date(year, month));
    };
  
 

  return (
    <section className="w-1/3 hidden lg:block bg-stone-50 h-screen scrollbar-hidden overflow-y-scroll pt-12 px-1">
      <Calendar onMonthChange={handleMonthChange} currentDate={currentDate} />
      <UpcomingEvents  />
    </section>
  )
}

export default CalendarContainer



