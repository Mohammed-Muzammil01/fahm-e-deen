import React from 'react'
import Events from '../components/Events';

function Courses() {
  return (
    <>
        <div className="container2">
                <section id="main">
                <h1>Courses</h1>
				
				<div>
				<h2>Shariah Essentials/Aalimah Course Year-1 in Urdu(2021-2022):</h2>
				<h5>Subjects offered:</h5>
				<ol>
					<li>Quran Tafseer (30th Juzz tafseer)</li>
					<li>Tajweed</li>
					<li>Quranic grammar</li>
					<li>Hanafi Fiqh (Basic Ibadah)</li>
					<li>Arabic grammar - Nahw</li>
					<li>Arabic grammar - Sarf</li>
				</ol>
				<h5>Duration: 1 year</h5>
				<h5>Start Date: 9th January 2023</h5>
				<h5 id="registration">Registration form: <a href="https://forms.gle/WETZrNKKQ1WCpqvn7" target="_blank" rel="noreferrer">Click here</a></h5></div>

				<div><h2>Shariah Essentials / Aalimah Course Year-1 in English (2022-2023):</h2>
				<h5>Subjects offered:</h5>
				<ol>
					<li>Quran Tafseer (30th Juzz tafseer)</li>
					<li>Tajweed</li>
					<li>Quranic grammar/Arabic Adab</li>
					<li>Hanafi Fiqh (Basic Ibadah)</li>
					<li>Arabic grammar - Nahw</li>
					<li>Arabic grammar - Sarf</li>
				</ol>
				<h5>Duration: 1 year</h5>
				<h5>Start Date: Monday, 14th Feb, 2022</h5>
				<h5 id="registration">Registration form: <a href="https://forms.gle/592mGjFr7s9bDFhY6" target="_blank" rel="noreferrer">Click here</a></h5>
				</div>
				
				<div>
					<h2>Aalimah Course Year-2 in Urdu (2022-2023):</h2>
				<h5>Subjects offered:</h5>
				<ol>
					<li>Quran Tafseer (30th Juzz tafseer)</li>
					<li>Tajweed</li>
					<li>Hadith</li>
					<li>Hanafi Fiqh</li>
					<li>Arabic grammar - Nahw</li>
					<li>Usool Shashi</li>
				</ol>
				<h5>*Requirement: Latest year of completion marks card is compulsory for registration.</h5>
				<h5>Duration: 1 year</h5>
				<h5>Start Date: 9th January 2023</h5>
				<h5 id="registration">Registration form: <a href="https://forms.gle/LJRR9L5ymhMNnL1W8" target="_blank" rel="noreferrer">Click here</a></h5>
				</div>
				
				<div>
					<h2>Aalimah Course Year-2 in English (2022-2023):</h2>
				<h5>Subjects offered:</h5>
				<ol>
					<li>Quran Tafseer (30th Juzz tafseer)</li>
					<li>Tajweed</li>
					<li>Hadith</li>
					<li>Quranic grammar/Arabic Adab</li>
					<li>Hanafi Fiqh</li>
					<li>Arabic grammar - Nahw</li>
					<li>Arabic grammar - Sarf</li>
				</ol>
				<h5>*Requirement: Latest year of completion marks card is compulsory for registration.</h5>
				<h5>Duration: 1 year</h5>
				<h5>Start Date: Monday, 14th Feb, 2022</h5>
				<h5 id="registration">Registration form: <a href="https://forms.gle/XxFEPQFmMweBHSa2A" target="_blank" rel="noreferrer">Click here</a></h5>
				</div> 
				
				<div>
					<h3>InshaAllah, at the end of the course, you will be able to:</h3>
					<ul>
						<li>Read and understand the surahs of 30th juz of the Holy Quran, usually recited in Salah.</li>
						<li>Learn all rules of Tajweed with correct articulation.</li>
						<li>Demonstrate a good understanding of basic legal rulings related to purification and ibaadaat. And identify difference between the obligatory, recommended, permissible, disliked and prohibited acts pertaining to ritual worship (ibaadaat) according to the Hanafi madhhab.</li>
						<li>Have a basic understanding of the Syntax (Nahw) and Morphology (Sarf) and Arabic Adab related to Arabic language, thereby helping us to understand Quran and hadith in a much better way.</li>
					</ul>
				</div>
                </section>

                <aside id="events">
                    <Events />
                </aside>

            </div>
    </>
  )
}

export default Courses