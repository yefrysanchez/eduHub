import Events from "./Events";

interface Event {
  date: Date;
  title: string;
  desc: string
}

const events: Event[] = [
  { date: new Date(2024, 8, 5), title: "Meeting with team", desc: "Meet-Up for Travel Destination Discussion" },
  { date: new Date(2024, 8, 12), title: "Project deadline", desc: "Meet-Up for Travel Destination Discussion" },
  { date: new Date(2024, 8, 20), title: "Company retreat", desc: "Meet-Up for Travel Destination Discussion" },
];

const UpcomingEvents= () => {
  return (
    <section className="">

    <div className="col-span-12 xl:col-span-5 p-4 ">
            <h2 className="font-bold tracking-tighter text-3xl leading-tight text-gray-900 mb-1.5">Upcoming Events</h2>
            <p className="text-lg font-normal text-gray-600 mb-8">Don’t miss schedule</p>
            <div className="flex gap-5 flex-col">
             {events.map((e,i) => (
              <Events key={i} date={e.date} title={e.title} desc={e.desc} />
             ))}
            
              
            </div>
          </div>
  </section>
                                        
  )
}

export default UpcomingEvents