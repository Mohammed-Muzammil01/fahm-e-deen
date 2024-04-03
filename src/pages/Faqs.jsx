import React from 'react'
import Events from '../components/Events';

function Faqs() {
  return (
    <>
        <div className="container2">
                <section id="main">
                <h1>FAQs</h1>
				<p>
				Q: Will classes be online or recording?</p>
				<p>Ans: Classes will be conducted online. Recordings will be shared in course group after the className.</p> 
				<p>Q: Will there be an exam?</p> 
				<p>Ans:  An optional Exam will be conducted. Only sisters with 80% attendance can appear for exam. Sisters who appear for the exam will receive e-certificates. Sisters who cannot appear for the exam can still attend the course to gain knowledge. </p>
				<p>Q: In case I have difficulty in understanding? </p>
				<p>Ans: You can always contact the subject teacher for help.</p> 
				<p>Q: Are exams compulsory or can I opt for any particular subject in any course? </p>
				<p>Ans: Exams are optional. And you can choose any particular subject to study. But only those sisters will be promoted to next academic level who appear for all subject examinations.</p> 
				<p>Q: Is there any fee?</p>
				<p>Ans: No fees. 
				</p>
                </section>

                <aside id="events">
                    <Events />
                </aside>

            </div>
    </>
  )
}

export default Faqs