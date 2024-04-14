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

const portfolios = [
  {
    id: "01",
    imgUrl: prob_solv,
    category: "Data Analyst",
    title: "Problem-Solving techniques",
    description:
      "These are all the assignments and activities that I did during the problem-solving course that I completed from Udemy.",
    technologies: ["MicroSoft Excel", "Problem-Solving Diagrams"],
    siteUrl: "https://drive.google.com/drive/folders/1suYmgmyQwh51YI16qwg_1YdhXX0nwFMC?usp=sharing",
  },
  {
    id: "02",
    imgUrl: pjm,
    category: "Data Analyst",
    title: "Project Management Documentation",
    description:
      "These are all the assignments and activities that I did during the Google PJM Professional Certification course that I completed from Coursera.",
    technologies: ["MS Excel", "Presentation", "Charts and diagrams", "Project documnetation"],
    siteUrl: "https://drive.google.com/drive/folders/13ExBMTSZaK7jpQaeSJoCFqMopoapcoKM?usp=sharing",
  },
  {
    id: "03",
    imgUrl: jarvis,
    category: "Ai",
    title: "Desktop Virtual Assistant",
    description:
      "By integrating the OpenAI language model in this mini project, I leveraged its natural language processing capabilities to enable conversational interactions with users. Upon the user's verbal command, JARVIS (Yes, the one from Marvel XD) can send these user prompts, receive responses from the OpenAI API and display the results while also reading it out loud. It has access to the camera and microphone. It also has error handling functionalities so the user has a smooth experience. JARVIS is designed in a way that it can maintain the conversational flow (i.e. remember the previous queries). It can also write programs and save the file into a folder implementing file writing.",
    technologies: ["Python", "Application Programming Interface"],
    siteUrl: "https://drive.google.com/drive/folders/1UVeDIxVGL-TnvXsetd-lPqBrHd2_DOWt",
  },
  {
    id: "04",
    imgUrl: travelcasa,
    category: "Data Analyst",
    title: "TravelCasa - Find Your Home Away from Home",
    description:
      "This is an online booking and rental system. It facilitates travelers in finding lodging options and enables property owners to list their properties for rent. Users can search for listings, filter results, favorite preferred lodges, book reservations, and cancel bookings if needed. Property owners can also manage their listings, including adding and deleting properties. Additionally, the system generates reports of reservations for users.",
    technologies: ["MongoDB", "Reactjs", "Nextjs", "Tailwind CSS", "Prisma ORM"],
    siteUrl: "https://github.com/benecia29/travelcasa-project",
  },
  {
    id: "05",
    imgUrl: journal,
    category: "Website",
    title: "Online Journal Website",
    description:
      "I developed this website on Netbeans using 2 Java EE technologies, i.e, Jakarta Servlets and Java Server Pages (JSP). I used MongoDB as the backend database and HTML for the frontend. This website is an online journal which contains functionalities for the user such as user registration and login, adding and viewing content, uploading and viewing files in the form of jpeg, png, pdf, etc. All of which can be viewed by the admin on the website as well as in the database. After the admin logs in, there is also a functionality which allows to generate a pdf of the current page to view the users and the content, only for the admin. The admin can also delete the users and their content. Once logged out, the website will redirect to a beautifully designed home page. ",
    technologies: ["HTML", "CSS", "Java EE", "MongoDB", "Servlet", "Java Server Pages"],
    siteUrl: "https://drive.google.com/drive/folders/11j2RSa2IxDyDEU4gCnqq53-2Q27uvsSk",
  },
  {
    id: "06",
    imgUrl: weather,
    category: "Website",
    title: "Weather App",
    description:
      "Snowphoria is a weather website made using JavaScript, jQuery, HTML5 and CSS. I developed this on Visual Studio Code. This project was made mainly to implement API calling using FetchAPI. This website displays weather information from various places all over the world.",
    technologies: ["HTML5", "BootStrap", "JavaScript", "jQuery", "FetchAPI"],
    siteUrl: "https://github.com/benecia29/Snowphoria",
  },
  {
    id: "07",
    imgUrl: rest,
    category: "Api",
    title: "RESTful API",
    description:
      "Introducing my mini project: a robust and efficient RESTful web service developed using Mongoose and MongoDB Atlas, powered by Node.js, Bcrypt.js, JSON Web Token (JWT), and Thunder Client. This dynamic system comprises three fundamental components: User, Order, and Product, each corresponding to collections within the MongoDB database. Leveraging the power of CRUD (Create, Read, Update, Delete) operations, users can seamlessly interact with and manage data within these entities. With a focus on security and seamless authentication, Bcrypt.js ensures encrypted password storage, while JWT facilitates secure user sessions. The integration of Thunder Client streamlines API testing, allowing for a smooth and reliable development experience.",
    technologies: ["Node.js", "MongoDB Atlas", "JSON"],
    siteUrl: "https://github.com/benecia29/restful-web-service",
  },
  {
    id: "08",
    imgUrl: soundWave,
    category: "Web Design",
    title: "Music App Design",
    description:
      "SoundWave is the UI design of a music application. It has 3 webpages: homepage, signup and an explore page. I have also implemented prototyping in this design.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/UjmK0FNDlAxGadqrKe2FFA/SoundWave?type=design&node-id=0%3A1&mode=design&t=nnTHakt4W8eKVrJF-1",
  },
  {
    id: "09",
    imgUrl: boxChampy,
    category: "Web Design",
    title: "BoxChampy Homepage Design",
    description:
      "This is the UI design of the homepage of the website of a boxing training center.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/d4wBpyBeKNU2fyT2oojTDJ/Boxing?type=design&node-id=15-35&mode=design",
  },
  {
    id: "10",
    imgUrl: covid19,
    category: "Web Design",
    title: "Covid-19 Brochure Design",
    description:
      "This webdesign gives information regarding covid-19.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/file/o6z1dEtp27G4ctX6VGbFZd/CovidDesign?type=design&node-id=6%3A2&mode=design&t=f9t2P3PIR8KmCODN-1",
  },
  {
    id: "11",
    imgUrl: ufo,
    category: "Games",
    title: "2D UFO Game",
    description:
      "I learnt to make this game as a part of my practicals in Sem-5. This is a 2D UFO game where the UFO is the player that collects pickups, with a simultaneous counter tracking their progress. Upon reaching 10 pickups, a 'You Win!!' message appears, concluding the game. Additionally, implemented a dynamic camera using scripts that follows the player's movements.",
    technologies: ["Unity", "Java"],
    siteUrl: "https://drive.google.com/drive/folders/1PVqnP-MSzybzyAOh_w79KClFiu7CmYxK",
  },
  {
    id: "12",
    imgUrl: roll,
    category: "Games",
    title: "3D Roll A Ball Game",
    description:
      "Here's another game that I developed using Unity. 'Roll a Ball'—a 3D game where players control a ball, collecting pickups while the count updates their progress. Upon gathering all 10 pickups, a 'You Win!' message celebrates their victory. A great dive into game development and Unity, showcasing gameplay mechanics and user interaction.",
    technologies: ["Unity", "Java"],
    siteUrl: "https://drive.google.com/drive/folders/1FFgSmlvJ6ppk-DBEL00fyqd4Lrx_-O-3",
  },
];

export default portfolios;
