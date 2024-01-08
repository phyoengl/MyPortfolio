import './App.css';
import CustomNav from './component/NavBar/CustomNav';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './component/Home/Home';
import AboutMe from './component/AboutMe/AboutMe';
import MySkills from './component/MySkills/MySkills';
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';
import Dashboard from './images/Dashboard.png'
import Footer from './component/Footer/Footer';
import { faLinkedin, faFacebook, faGithub, faTelegram, faReact } from '@fortawesome/free-brands-svg-icons'
import { faGhost, faLaptopCode, faGears, faCubes, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function App() {

  const dataStore = {
    Home: {
      name: "Home",
      data: {
        icon: faGhost
      }
    },

    AboutMe: {
      name: "AboutMe",
      data: "Hello, I am Zaw Thet Phyo.Currently, I have joined the online distance bechalor program at University of people.I had learned Java SE, JavaScript and Python programming languages.I am interested in developing the front end part of websites and web applications and also my dream is to become a full stack developer"
    },

    Skills: {
      name: "Skills",
      data: [
        {
          type: "Languages",
          icon: faLaptopCode,
          total: ['Java', 'Javascript', 'Python'],
        },
        {
          type: "Frontend",
          icon: faReact,
          total: ['React', 'JQuery', 'Redux', 'Html', 'CSS', 'Bootstrap'],
        },
        {
          type: "Backend",
          icon: faGears,
          total: ["ExpressJs"],
        },
        {
          type: "DataBase",
          icon: faCubes,
          total: ['SQL lite', 'MySQL', 'Mongodb'],
        },
      ]
    },
    Project: {
      name: "Project",
      data: [{
        img: Dashboard,
        name: "Admin Dashboard",
        link: "www.link.com",
        content: "Admin dashboard monitering the page user activity",
        icon: faGithub,
      }]
    },
    Contact:{
      name : "Contact",
      data : {
        icon : faTriangleExclamation
      }
    },
    Footer: {
      name: "Footer",
      data: [
        {
          link: "https://www.facebook.com/mr.zawthetphyoe?mibextid=vk8aRt",
          logo: faFacebook
        },
        {
          link: "https://www.linkedin.com/in/zawthet-phyoe-05a870257",
          logo: faLinkedin
        },
        {
          link: "http://t.me/a1y23t5",
          logo: faTelegram
        },
        {
          link: "https://github.com/phyoengl",
          logo: faGithub
        },
      ]
    }

  }
  let pages = Object.keys(dataStore);
  let length = pages.length - 1;

  pages = pages.slice(0, length);
  
  let contactPage = pages.slice(-1);
  
  return (
    <div className="App">
      
      <div className='container-fluid contentBox'>
        <div className='row'>

          <CustomNav name={dataStore.Home.name}
                      pages={pages}
                      icon={dataStore.Home.data.icon} />

          <Home name={dataStore.Home.name}
                contact = {contactPage}
                />
          
          <MySkills name={dataStore.Skills.name}
                    data={dataStore.Skills.data} />
          
          <AboutMe name={dataStore.AboutMe.name}
                    data={dataStore.AboutMe.data} />
          
          <Project name={dataStore.Project.name}
                    data={dataStore.Project.data} />
          
          <Contact name={dataStore.Contact.name}
                    icon={dataStore.Contact.data.icon} />
          
          <Footer name={dataStore.Footer.name}
                  data={dataStore.Footer.data} />
        
        </div>
      </div>
    </div>
  );
}

export default App;
