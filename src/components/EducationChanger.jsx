import { useState } from "react";
import EducationImage from "../assets/school.svg";
import "../styles/educationChanger.css";

export default function EducationChanger({
    Accordion,
    education,
    setEducation,
}) {
    const [defaultEducation, setDefaultEducation] = useState([...education]);

    function AddEmptyElement() {
        const newElement = {
            schoolName: "",
            title: "",
            id: crypto.randomUUID(),
            date: null,
        };
        setEducation((prev) => [...prev, newElement]);
        setDefaultEducation((prev) => [...prev, newElement]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const educationArray = education.map((edu) => {
            return {
                ...edu,
                schoolName: form.get(`school-${edu.id}`),
                title: form.get(`title-${edu.id}`),
                dateStart: form.get(`date-start-${edu.id}`),
                dateEnd: form.get(`date-end-${edu.id}`),
            };
        });
        setEducation(educationArray);
        setDefaultEducation(educationArray);
    }

    function findEduAndReturnValue(edu, prop) {
        const element = defaultEducation.find(
            (element) => element.id === edu.id
        );
        if (!element || !(prop in element)) {
            return "";
        }
        return element[prop];
    }
    function findEduAndChangeValue(edu, prop, value) {
        const elements = defaultEducation.map((element) =>
            element.id === edu.id ? { ...element, [prop]: value } : element
        );
        setDefaultEducation(elements);
    }

    function removePositionedElement(id) {
        setEducation((prev) => [...prev].filter((edu) => edu.id !== id));
        setDefaultEducation((prev) => [...prev].filter((edu) => edu.id !== id));
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    image={{
                        src: EducationImage,
                        alt: "graduation-cap-image",
                    }}
                    title="Education"
                >
                    <ul>
                        {education.map((edu) => (
                            <li className="edu-li" key={edu.id}>
                                <input
                                    type="text"
                                    name={`school-${edu.id}`}
                                    placeholder="Enter school name"
                                    maxLength={100}
                                    value={findEduAndReturnValue(
                                        edu,
                                        "schoolName"
                                    )}
                                    onChange={(e) =>
                                        findEduAndChangeValue(
                                            edu,
                                            "schoolName",
                                            e.target.value
                                        )
                                    }
                                ></input>
                                <input
                                    type="text"
                                    name={`title-${edu.id}`}
                                    placeholder="Enter title of study"
                                    maxLength={50}
                                    value={findEduAndReturnValue(edu, "title")}
                                    onChange={(e) =>
                                        findEduAndChangeValue(
                                            edu,
                                            "title",
                                            e.target.value
                                        )
                                    }
                                ></input>

                                <label htmlFor={`date-start-${edu.id}`}>
                                    Starting date
                                </label>
                                <input
                                    placeholder="Enter starting date"
                                    type="date"
                                    name={`date-start-${edu.id}`}
                                    id={`date-start-${edu.id}`}
                                    value={findEduAndReturnValue(
                                        edu,
                                        "dateStart"
                                    )}
                                    onChange={(e) =>
                                        findEduAndChangeValue(
                                            edu,
                                            "dateStart",
                                            e.target.value
                                        )
                                    }
                                />
                                <label htmlFor={`date-end-${edu.id}`}>
                                    Ending date
                                </label>

                                <input
                                    placeholder="Enter ending date"
                                    type="date"
                                    name={`date-end-${edu.id}`}
                                    id={`date-end-${edu.id}`}
                                    value={findEduAndReturnValue(
                                        edu,
                                        "dateEnd"
                                    )}
                                    onChange={(e) =>
                                        findEduAndChangeValue(
                                            edu,
                                            "dateEnd",
                                            e.target.value
                                        )
                                    }
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        removePositionedElement(edu.id)
                                    }
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button type="button" onClick={AddEmptyElement}>
                            Add
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </Accordion>
            </form>
        </section>
    );
}