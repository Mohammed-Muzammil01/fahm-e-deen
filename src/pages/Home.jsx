import React from 'react'
import intro from "../assets/intro.mp4"
import Events from '../components/Events';


function Home() {
  return (
    <>
        <div className="container2">
        <section id="main">
          <h1>Welcome to Fahm e Deen Academy</h1>

          <p>
            Fahm e Deen Academy is a registered organization in India and it was established in the year 2016 as the weekend programme of Shariah essentials for men in urdu. In the year 2020 it started its courses online for sisters only. The certifications are provided from Fahm e Deen Academy.  It started with the sole objective of imparting authentic islamic learning for women. It offers flexible learning environment, covering a range of Shariah Essentials like Quran Tafseer, Fiqh and Arabic Grammar. All subjects are taught by A’alimahs with modern education background. Students can opt for any number of subjects they wish for. All courses of Shariah Essentials are offered free of cost</p>
          <p>	In the era of extremism and where the name of Islam is used for the acts of inhumanity, we strive to help develop the beautiful character of the Prophet (peace be upon him) of peace and love. </p>

          <p>There is the knowledge of sacred Islamic sciences, and then the deep understanding of this knowledge that penetrates the heart and benefits on the Day of Judgment.  If the knowledge is not understood, instead of being beneficial, it becomes a burden on that day.  This deep understanding of knowledge develops a strong connection with Allah ta’ala, and makes it easier for one to do righteous actions, hence draws one closer to Allah ta’ala. Implementation of knowledge by understanding deen and character building is the key focus in Fahm e Deen Academy, hence the name ‘Fahm e Deen’ which means ‘The deep understanding of deen’.
          </p>
          <video className="vid" controls>
            <source src={intro} type="video/mp4" />
          </video>
        </section>

        <aside id="events">
          <Events />
        </aside>

      </div>
    </>
  )
}

export default Home