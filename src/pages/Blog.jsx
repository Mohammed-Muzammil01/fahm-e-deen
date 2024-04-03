import React from 'react'
import Events from '../components/Events';

function Blog() {
    return (
        <>
            <div className="container2">
                <section id="main">
                    <h1>Our Patrons</h1>
                    <h3 className="quran">“Indeed the scholars are the heirs of the Prophets.”</h3>
                    <p className="quran">Tirdmidhi 2682</p>
                    <div className="teacher">
                        <h2>Shaykh Mufti Tauqeer</h2>
                    </div>
                    <p>
                        Shaykh Mufti Tauqeer, also known by his students as Baba Jaan, is well versed in both Islamic and secular education. In Islamic education, he graduated with the A’alim degree and has his post graduation with specialization in Islamic jurisprudence (commonly known as iftaa). He has authorization to teach all major books of hadith by many renowned scholars of our time, like Shaykh ul Hadith Maulana Taqiuddin Nadwi (UAE), Shaykh ul Islam Mufti Muhammad Taqi Usmani (Pakistan) and Shaykh ul Tafseer Maulana Sajjad Nomani (India). In secular education, he holds a Master’s degree in Computer Engineering from the Ohio State University, USA and has been the Director of many multinational corporations across the globe. Shaykh Tauqeer is also the khalifah of globally renowned Shaykh, Shaykh Zulfiqar Ahmad. Shaykh Tauqeer co-founded Nur ul Ilm Academy in 2008 where he teaches all levels of Arabic and Shariah programs. Shaykh Tauqeer also travels all across the world to deliver lectures and help people develop spiritually.
                    </p>
                    <div className="teacher">
                        <h2>Aalimah Nadia Sadiq</h2>
                    </div>
                    <p>
                        Alimah Nadia Sadiq, also known by her students as Baji Jaan or Mama Jaan, is the wife of Shaykh Tauqeer and principal of Nur ul Ilm Academy (Women’s branch).  She holds an MBA degree with a discipline in Marketing.  Aalimah Nadia Sahiba has been a student of Shaykh Zulfiqar in the path of self purification and Islamic spirituality since the year 2000. She started her Aalimah program in Chicago and graduated Aalimah program degree along with Masters in Islamic Studies. She established Nur ul Ilm Academy in 2008 under the guidance of her Shaykh.
                    </p>
                    <p>
                        Aalimah Nadia Sahiba has dedicated her life to work amongst Muslim women and girls and invite them to the Deen, as well teaching them Islamic conduct and mannerism. Aalimah Nadia Sahiba regularly conducts various workshops and seminars on contemporary issues and lifestyle management to women of all ages and disciplines. Aalimah Nadia Sahiba also travels with her husband, Shaykh Tauqeer, to conduct lectures throughout the world.
                    </p>
                </section>

                <aside id="events">
                    <Events />
                </aside>

            </div>
        </>
    )
}

export default Blog