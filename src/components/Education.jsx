import "../styles/education.css";
export default function Education({ children }) {
    return (
        <>
            {children.length > 0 && (
                <section>
                    <h2>Education</h2>
                    <ul className="education">
                        {children.map((element) => {
                            return (
                                element !== "" &&
                                element !== undefined && (
                                    <li
                                        className="educationLi"
                                        key={element.id}
                                    >
                                        <div>{element.schoolName}</div>
                                        {element.dateStart &&
                                        element.dateEnd ? (
                                            <div>
                                                {element.dateStart} -{" "}
                                                {element.dateEnd}
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                        <div>{element.title}</div>
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </section>
            )}
        </>
    );
}