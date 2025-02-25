import { useState } from "react";

import {
    contactsExample,
    aboutExample,
    generalInfoExample,
    experienceExample,
    educationExample,
} from "./assets/examples.js";
import Contact from "./components/Contact.jsx";
import ContactChanger from "./components/ContactChanger.jsx";
import AboutChanger from "./components/AboutChanger.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import EducationChanger from "./components/EducationChanger.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import GeneralInfoChanger from "./components/GeneralInfoChanger.jsx";
import UserImage from "./components/UserImage.jsx";
import Accordion from "./components/Accordion.jsx";
import Header from "./components/Header.jsx";
import WorkExperienceChanger from "./components/WorkExperienceChanger.jsx";
import "./App.css";

export default function App() {
    const [showEdit, setShowEdit] = useState(false);
    const [generalInfo, setGeneralInfo] = useState({ ...generalInfoExample });
    const [contacts, setContacts] = useState([...contactsExample]);
    const [education, setEducation] = useState([{ ...educationExample }]);
    const [aboutText, setAboutText] = useState(aboutExample);
    const [experience, setExperience] = useState([{ ...experienceExample }]);
    return (
        <>
            <Header
                showEdit={showEdit}
                onEdit={() => setShowEdit((prev) => !prev)}
            />
            <aside
                className={`main-aside ${
                    (!showEdit && "disabled") || "enabled"
                }`}
            >
                <GeneralInfoChanger
                    generalInfo={generalInfo}
                    Accordion={Accordion}
                    setGeneralInfo={setGeneralInfo}
                />
                <ContactChanger
                    contacts={contacts}
                    Accordion={Accordion}
                    setContacts={setContacts}
                />
                <AboutChanger
                    aboutText={aboutText}
                    Accordion={Accordion}
                    setAboutText={setAboutText}
                />
                <EducationChanger
                    Accordion={Accordion}
                    education={education}
                    setEducation={setEducation}
                />
                <WorkExperienceChanger
                    Accordion={Accordion}
                    experience={experience}
                    setExperience={setExperience}
                />
            </aside>
            <main className={`${(!showEdit && "centered-main") || ""}`}>
                <div>
                    {generalInfo.fullName && (
                        <h2 className="margin-bottom-0">
                            {generalInfo.fullName}
                        </h2>
                    )}
                    {generalInfo.profession && (
                        <h3>{generalInfo.profession}</h3>
                    )}
                </div>
                <About>{aboutText}</About>
                <Education>{education}</Education>
                <WorkExperience>{experience}</WorkExperience>
                <aside className="cv-aside">
                    <UserImage src={generalInfo.photoSrc} />
                    <Contact contacts={contacts} />
                </aside>
            </main>
        </>
    );
}