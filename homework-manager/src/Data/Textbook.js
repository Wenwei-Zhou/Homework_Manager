import english from "../assets/english.png";
import math from "../assets/math.png";
import physics from "../assets/physics.png";
import Chemistry from "../assets/chemistry.png";
import Programming from "../assets/programming.png";

const textbooks = [
  {
    id: "English",
    image: english,
    tutorials: [
      {
        title: "General English",
        color: "HoneyDew",
        rate: 4.7,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=general+english",
      },
      {
        title: "Essay Writing Practice",
        color: "Ivory",
        rate: 5,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=Essay+Writing+Practice",
      },
      {
        title: "Business English",
        color: "AliceBlue",
        rate: 2.6,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=Business+English",
      },
      {
        title: "English Literature",
        color: "LavenderBlush",
        rate: 3,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=English+Literature",
      },
    ],
  },
  {
    id: "Math",
    image: math,
    tutorials: [
      {
        title: "Linear Algebra",
        color: "HoneyDew",
        rate: 4.6,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        liink: "https://www.youtube.com/results?search_query=math+Linear+Algebra",
      },
      {
        title: "Geometry",
        color: "Ivory",
        rate: 5,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=math+Geometry",
      },
      {
        title: "Complex Analysis",
        color: "AliceBlue",
        rate: 2.7,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=math+Complex+Analysis",
      },
      {
        title: "Vector Calculus",
        color: "LavenderBlush",
        rate: 3.7,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=math+Vector+Calculus",
      },
    ],
  },
  {
    id: "Physics",
    image: physics,
    tutorials: [
      {
        title: "Astrophysics and Astronomy",
        color: "HoneyDew",
        rate: 4,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=physics+Astrophysics+and+Astronomy",
      },
      {
        title: "Nuclear and Particle Physics",
        color: "Ivory",
        rate: 5,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=physics+Nuclear+and+Particle+Physics",
      },
      {
        title: "Classical Mechanics",
        color: "AliceBlue",
        rate: 2.4,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=physics+Classical+Mechanics",
      },
      {
        title: "Applied Physics",
        color: "LavenderBlush",
        rate: 3.1,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=physics+Applied+Physics",
      },
    ],
  },
  {
    id: "Programming",
    image: Programming,
    tutorials: [
      {
        title: "Frontend Development",
        color: "HoneyDew",
        rate: 4,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=Frontend+development",
      },
      {
        title: "C# Object-Oriented Programming",
        color: "Ivory",
        rate: 5,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=c%23+object+oriented+programming",
      },
      {
        title: "Backend Development",
        color: "AliceBlue",
        rate: 4.8,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=backend+development",
      },
      {
        title: "Postgre Database",
        color: "LavenderBlush",
        rate: 3.3,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=postgre+database",
      },
    ],
  },
  {
    id: "Chemistry",
    image: Chemistry,
    tutorials: [
      {
        title: "organic chemistry",
        color: "HoneyDew",
        rate: 4.6,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=organic+chemistry",
      },
      {
        title: "analytical chemistry",
        color: "Ivory",
        rate: 5,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=analytical+chemistry",
      },
      {
        title: "Astrochemistry",
        color: "AliceBlue",
        rate: 2.9,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=Astrochemistry",
      },
      {
        title: "Environmental Chemistry",
        color: "LavenderBlush",
        rate: 3.7,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        link: "https://www.youtube.com/results?search_query=Environmental+Chemistry",
      },
    ],
  },
];

export default textbooks;
