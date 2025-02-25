import "../styles/workExperience.css";
export default function WorkExperience({ children }) {
    return (
        <>
            {children.length !== 0 && (
                <section className="work-experience">
                    <h2>Work experience</h2>
                    <ul className="work-list">
                        {children.map((work) => (
                            <li className="work-item" key={work.id}>
                                <div>{work.companyName}</div>
                                <div className="date-container">
                                    {work.dateStart && work.dateEnd && (
                                        <>
                                            {work.dateStart} - {work.dateEnd}
                                        </>
                                    )}
                                </div>
                                <div>{work.title}</div>
                                <p>{work.respons}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </>
    );
}