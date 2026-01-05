import Contact from "./components/sections/Contact";
import Navbar from "./components/Navbar";
import AboutMe from "./components/sections/AboutMe";
import Cover from "./components/sections/Cover";
import Stack from "./components/sections/Stack";
import Card from "./components/Card";
import Footer from "./components/sections/Footer";
import Project from "./components/Project";
import Projects from "./components/sections/Projects";

const user = {
  userPicUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHsbBW2YufS5w/profile-displayphoto-shrink_800_800/B4DZZqm1tbHwAg-/0/1745545289501?e=1768435200&v=beta&t=jthu5ghOXb9TvRh12jY7qpvIB6mZnZL6ONktC76VQnA"
}


export default function App () {
  return (
    <>
      <Navbar/>
      <section>
        <Cover userPicUrl={user.userPicUrl}/>
        <AboutMe/>
        <Stack>
          <Card iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" text="NodeJs"/>
          <Card iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" text="TypeScript"/>
          <Card iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" text="Express"/>
          <Card iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" text="Prisma"/>
          <Card iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" text="SQL"/>
          <Card iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" text="React"/>
          <Card iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" text="Bootstrap"/>
        </Stack>
        <Projects>
          <Project name="API de aluguel de carros" imagePath="projects/Logo Veloz Car com Ícone Elétrico.png" projectDescription="Uma API RESTful completa para gerenciamento de um sistema de aluguel de veículos, construída com TypeScript, Node.js, Express e Prisma ORM. Este projeto suporta autenticação, CRUD completo, regras de negócio, validações e testes unitários." productionLink="https://veloz-car-aluguel-de-carros.onrender.com/" repositoryLink="https://github.com/marcus-soares1/veloz-car-aluguel-de-carros"/>
        </Projects>
        <Contact/>
        <Footer/>
      </section>
    </>
  )
}