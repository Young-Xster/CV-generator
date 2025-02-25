import { useState } from "react";
import Account from "../assets/account.svg";
export default function AboutChanger({ aboutText, Accordion, setAboutText }) {
    const [defaultAboutText, setDefaultAboutText] = useState(aboutText);
    function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        setAboutText(form.get("aboutText"));
        setDefaultAboutText(form.get("aboutText"));
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    image={{ src: Account, alt: "person-image" }}
                    title="About"
                >
                    <textarea
                        placeholder="Write about yourself"
                        name="aboutText"
                        id="user-about-text"
                        maxLength={500}
                        rows={3}
                        cols={30}
                        value={defaultAboutText}
                        onChange={(e) => setDefaultAboutText(e.target.value)}
                    ></textarea>
                    <button type="submit">Submit</button>
                </Accordion>
            </form>
        </section>
    );
}