import { MdOutlineDelete } from "react-icons/md"

type Event = {
  date: Date,
  title: string,
  desc: string
}


const Events: React.FC<Event> = ({date, title, desc}) => {
  return (
    <div className="flex gap-5 flex-col shadow rounded-lg">
              <div className="p-6 rounded-xl bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <p className="text-base font-medium text-gray-900">{date.toLocaleDateString()}</p>
                  </div>
                  <div className="dropdown relative inline-flex">
                    <button type="button" className=" text-2xl inline-flex justify-center py-2.5 px-1 items-center gap-2 text-black rounded-full cursor-pointer font-semibold text-center transition-all duration-500 hover:text-red-600  ">
                    <MdOutlineDelete />

                      
                    </button>
                   
                  </div>
                </div>
                <h6 className="text-xl leading-8 font-semibold text-black mb-1">{title}</h6>
                <p className="text-base font-normal text-gray-600">{desc}</p>
              </div>
            </div>
  )
}

export default Events