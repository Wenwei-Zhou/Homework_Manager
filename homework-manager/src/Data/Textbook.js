import english from "../assets/english.png";
import math from "../assets/math.png";
import physics from "../assets/physics.png";
import chemical from "../assets/chemical.png";
import Programming from "../assets/programming.png";

const textbooks = [
  {
    id: "English",
    image: english,
    tutorials: [
      { title: "General English", color: "HoneyDew", rate: 4.7, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Essay Writing Practice", color: "Ivory", rate: 5, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Business English", color: "AliceBlue", rate: 2.6, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      {
        title: "English Literature",
        color: "LavenderBlush",
        rate: 3,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100)
      },
    ],
  },
  {
    id: "Math",
    // image: <img src={math} alt="m" style={{ width: "50px", height: "50px" }} />,
    image: math,
    tutorials: [
      { title: "Linear Algebra", color: "HoneyDew", rate: 4.6, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Geometry", color: "Ivory", rate: 5, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Complex Analysis", color: "AliceBlue", rate: 2.7, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Vector Calculus", color: "LavenderBlush", rate: 3.7, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
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
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100)
      },
      { title: "Nuclear and Particle Physics", color: "Ivory", rate: 5, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Classical Mechanics", color: "AliceBlue", rate: 2.4, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Applied Physics", color: "LavenderBlush", rate: 3.1, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
    ],
  },
  {
    id: "Programming",
    image: Programming,
    tutorials: [
      { title: "Web Application", color: "HoneyDew", rate: 4, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      {
        title: "C# Object-Oriented Development",
        color: "Ivory",
        rate: 5,
        students: Math.floor(Math.random() * (1000 - 100 + 1) + 100)
      },
      { title: "AWS CCP", color: "AliceBlue", rate: 2.2, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Postgre Database", color: "LavenderBlush", rate: 3.3, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
    ],
  },
  {
    id: "Chemical",
    image: chemical,
    tutorials: [
      { title: "Explosives", color: "HoneyDew", rate: 4.6, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Flammable liquids ", color: "Ivory", rate: 5, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Radioactive material ", color: "AliceBlue", rate: 2.9, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
      { title: "Corrosives", color: "LavenderBlush", rate: 3.7, students: Math.floor(Math.random() * (1000 - 100 + 1) + 100) },
    ],
  },
];

export default textbooks;
