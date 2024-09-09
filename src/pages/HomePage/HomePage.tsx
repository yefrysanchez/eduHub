import ClassCard from "../../components/ClassCard/ClassCard";
import Header from "../../components/Header/Header";
import { classes } from "../../data/classesData";

const HomePage = () => {
  return (
    <div className="bg-white w-full h-screen-minus-80 lg:h-screen p-4 scrollbar-hidden overflow-y-scroll">
      <Header />
      <h2  className="font-bold text-2xl mb-6">Your Classes</h2>
      <div className="md:max-w-xl justify-items-center lg:max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 2xl:gap-y-12">
        {classes.map(c => (
          <ClassCard key={c.class} className={c.class} img={c.img} progress={c.Progress} nextClass={c.nextClass}/>
        ))}
     
      </div>
    </div>
  );
};

export default HomePage;

