import { getNextClassDate } from "../service/nextClass.service";


export const classes = [
    {
      class: "Computer Science",
      img: "https://www.limestone.edu/sites/default/files/styles/social_large/public/images/2020-06/computer-programming.jpg?h=593e69a4&itok=sqK-89jX",
      nextClass: `${getNextClassDate()}`,
      Progress: "68%"
    },
    {
      class: "Engineering Mechanics",
      img: "https://eitfaridabad.com/wp-content/uploads/2024/05/EIT-blog-image-2.jpg",
      nextClass: `${getNextClassDate()}`,
      Progress: "72%"
    },
    {
      class: "Applied Mathematics",
      img: "https://www.clarkson.edu/sites/default/files/2023-06/Applied-Math-Statistics-Hero-1600x900.jpg",
      nextClass: `${getNextClassDate()}`,
      Progress: "80%"
    },
    {
      class: "Physics Fundamentals",
      img: "https://www.brainscape.com/academy/content/images/size/w620/2020/08/Newton-s-cradle-balls.jpeg",
      nextClass: `${getNextClassDate()}`,
      Progress: "55%"
    },
    {
      class: "Biotechnology",
      img: "https://cdn.ourcrowd.com/wp-content/uploads/2023/11/What-is-Biotechnology-592x333.png",
      nextClass: `${getNextClassDate()}`,
      Progress: "67%"
    },
    {
      class: "Robotics",
      img: "https://assets.skyfilabs.com/images/blog/top-10-reasons-why-kids-should-learn-robotics.webp",
      nextClass: `${getNextClassDate()}`,
      Progress: "74%"
    }
  ];