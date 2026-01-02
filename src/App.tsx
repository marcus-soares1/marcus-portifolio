import Contact from "./components/Sections/Contact";
import Navbar from "./components/Navbar";
import AboutMe from "./components/Sections/AboutMe";
import Cover from "./components/Sections/Cover";

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
        <Contact/>
      </section>
    </>
  )
}