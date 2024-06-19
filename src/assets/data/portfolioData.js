import covid19 from "../images/Projects/Desktop - 1covid19.png";
import boxChampy from "../images/Projects/Frame 1.png";
import soundWave from "../images/Projects/landing page.png";
import ufo from "../images/Projects/ufo.jpg";
import roll from "../images/Projects/rollaball.jpg";
import rest from "../images/Projects/Restful-Web-Services.png";
import jarvis from "../images/Projects/tony-stark.jpg";
import weather from "../images/Projects/weather.png";
import journal from "../images/Projects/journal.jpg";
import prob_solv from "../images/Projects/problem-solving.jpg";
import travelcasa from "../images/Projects/travelcasa.png";
import pjm from "../images/Projects/final-certificate.png";
import excel from "../images/Projects/excel.png";
import sql from "../images/Projects/workbench.jpg";
import tableau from "../images/Projects/tableau2.png";
import powerbi from "../images/Projects/powerbi3.png";

const portfolios = [
  {
    id: "01",
    imgUrl: powerbi,
    category: "Data Analyst",
    title: "Data visualization using Power BI",
    description:
      "I built this project by leveraging various tools in Power BI such as bins & lists, conditional formatting, DAX, drill down, power query, relationship and visualizations.",
    technologies: ["Power BI"],
    siteUrl: "https://github.com/benecia29/BI-Analyst-PowerBI.git",
  },
  {
    id: "02",
    imgUrl: tableau,
    category: "Data Analyst",
    title: "Data visualization using Tableau",
    description:
      "Created various visualizations and dashboard in Tableau.",
    technologies: ["Tableau"],
    siteUrl: "https://drive.google.com/drive/folders/1S8gVEmK6Af85Z727uNqoeCFjSWJ857HA?usp=sharing",
  },
  {
    id: "03",
    imgUrl: excel,
    category: "Data Analyst",
    title: "Creating interactive dashboard in Excel",
    description:
      "I built an interactive dashboard by leveraging my knowledge in Excel formulae, functions, data cleaning, conditional formatting, charts, pivot tables, XLOOKUP, etc.",
    technologies: ["Microsoft Excel"],
    siteUrl: "https://github.com/benecia29/BI-Analyst-Excel.git",
  },
  {
    id: "04",
    imgUrl: sql,
    category: "Data Analyst",
    title: "Data cleaning & EDA in MySQL",
    description:
      "In this project, I followed a procedure for data cleaning such as creating backups, removing duplicates and standardizing data, removing irrelevant data, handling missing values, etc. After this, I performed an exploratory data analysis.",
    technologies: ["MySQL"],
    siteUrl: "https://github.com/benecia29/BI-Analyst-MySQL.git",
  },
  {
    id: "05",
    imgUrl: prob_solv,
    category: "Data Analyst",
    title: "Problem-Solving techniques",
    description:
      "These are all the assignments and activities that I did during the problem-solving course that I completed from Udemy.",
    technologies: ["MicroSoft Excel", "Problem-Solving Diagrams"],
    siteUrl: "https://drive.google.com/drive/folders/1suYmgmyQwh51YI16qwg_1YdhXX0nwFMC?usp=sharing",
  },
  {
    id: "06",
    imgUrl: pjm,
    category: "Data Analyst",
    title: "Project Management Documentation",
    description:
      "These are all the assignments and activities that I did during the Google PJM Professional Certification course that I completed from Coursera.",
    technologies: ["MS Excel", "Presentation", "Charts and diagrams", "Project documnetation"],
    siteUrl: "https://drive.google.com/drive/folders/13ExBMTSZaK7jpQaeSJoCFqMopoapcoKM?usp=sharing",
  },
  {
    id: "07",
    imgUrl: jarvis,
    category: "Ai",
    title: "Desktop Virtual Assistant",
    description:
      "In this mini project, I integrated the OpenAI language model to enable JARVIS to engage in conversational interactions with users, responding to verbal commands and displaying or reading aloud the responses. JARVIS can access the camera and microphone, maintain conversational context, handle errors smoothly, and even write and save programs based on user prompts.",
    technologies: ["Python", "Application Programming Interface"],
    siteUrl: "https://drive.google.com/drive/folders/1UVeDIxVGL-TnvXsetd-lPqBrHd2_DOWt",
  },
  {
    id: "08",
    imgUrl: travelcasa,
    category: "Data Analyst",
    title: "TravelCasa - Find Your Home Away from Home",
    description:
      "This is an online booking and rental system. It facilitates travelers in finding lodging options and enables property owners to list their properties for rent. Users can search for listings, filter results, favorite preferred lodges, book reservations, and cancel bookings if needed. Property owners can also manage their listings, including adding and deleting properties. Additionally, the system generates reports of reservations for users.",
    technologies: ["MongoDB", "Reactjs", "Nextjs", "Tailwind CSS", "Prisma ORM"],
    siteUrl: "https://github.com/benecia29/travelcasa-project",
  },
  {
    id: "09",
    imgUrl: journal,
    category: "Website",
    title: "Online Journal Website",
    description:
      "I developed an online journal website using Jakarta Servlets and JavaServer Pages (JSP) in NetBeans, with MongoDB as the backend and HTML for the frontend. Users can register, log in, add and view content, and upload files (jpeg, png, pdf). Admins can view and delete users and content, and generate PDFs of user data. The site redirects to a home page upon logout.",
    technologies: ["HTML", "CSS", "Java EE", "MongoDB", "Servlet", "Java Server Pages"],
    siteUrl: "https://drive.google.com/drive/folders/11j2RSa2IxDyDEU4gCnqq53-2Q27uvsSk",
  },
  {
    id: "10",
    imgUrl: weather,
    category: "Website",
    title: "Weather App",
    description:
      "Snowphoria is a weather website made using JavaScript, jQuery, HTML5 and CSS. I developed this on Visual Studio Code. This project was made mainly to implement API calling using FetchAPI. This website displays weather information from various places all over the world.",
    technologies: ["HTML5", "BootStrap", "JavaScript", "jQuery", "FetchAPI"],
    siteUrl: "https://github.com/benecia29/Snowphoria",
  },
  {
    id: "11",
    imgUrl: rest,
    category: "Api",
    title: "RESTful API",
    description:
      "Introducing my mini project: a RESTful web service developed with Mongoose, MongoDB Atlas, Node.js, Bcrypt.js, JWT, and Thunder Client. It features three components—User, Order, and Product—each as MongoDB collections, enabling CRUD operations for seamless data management. Bcrypt.js ensures encrypted passwords, JWT facilitates secure sessions, and Thunder Client streamlines API testing.",
    technologies: ["Node.js", "MongoDB Atlas", "JSON"],
    siteUrl: "https://github.com/benecia29/restful-web-service",
  },
  {
    id: "12",
    imgUrl: ufo,
    category: "Games",
    title: "2D UFO Game",
    description:
      "I learnt to make this game as a part of my practicals in Sem-5. This is a 2D UFO game where the UFO is the player that collects pickups, with a simultaneous counter tracking their progress. Upon reaching 10 pickups, a 'You Win!!' message appears, concluding the game. Additionally, implemented a dynamic camera using scripts that follows the player's movements.",
    technologies: ["Unity", "Java"],
    siteUrl: "https://drive.google.com/drive/folders/1PVqnP-MSzybzyAOh_w79KClFiu7CmYxK",
  },
  {
    id: "13",
    imgUrl: roll,
    category: "Games",
    title: "3D Roll A Ball Game",
    description:
      "Here's another game that I developed using Unity. 'Roll a Ball'—a 3D game where players control a ball, collecting pickups while the count updates their progress. Upon gathering all 10 pickups, a 'You Win!' message celebrates their victory. A great dive into game development and Unity, showcasing gameplay mechanics and user interaction.",
    technologies: ["Unity", "Java"],
    siteUrl: "https://drive.google.com/drive/folders/1FFgSmlvJ6ppk-DBEL00fyqd4Lrx_-O-3",
  },
  {
    id: "14",
    imgUrl: soundWave,
    category: "Web Design",
    title: "Music App Design",
    description:
      "SoundWave is the UI design of a music application. It has 3 webpages: homepage, signup and an explore page. I have also implemented prototyping in this design.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/UjmK0FNDlAxGadqrKe2FFA/SoundWave?type=design&node-id=0%3A1&mode=design&t=nnTHakt4W8eKVrJF-1",
  },
  {
    id: "15",
    imgUrl: boxChampy,
    category: "Web Design",
    title: "BoxChampy Homepage Design",
    description:
      "This is the UI design of the homepage of the website of a boxing training center.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/d4wBpyBeKNU2fyT2oojTDJ/Boxing?type=design&node-id=15-35&mode=design",
  },
  {
    id: "16",
    imgUrl: covid19,
    category: "Web Design",
    title: "Covid-19 Brochure Design",
    description:
      "This webdesign gives information regarding covid-19.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/o6z1dEtp27G4ctX6VGbFZd/CovidDesign?type=design&node-id=6%3A2&mode=design&t=f9t2P3PIR8KmCODN-1",
  },
];

export default portfolios;
