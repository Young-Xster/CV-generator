import { useState } from "react";
import { inputs } from "../assets/inputs";
import Message from "../assets/message.svg";

// input default values only store contacts, which means that changes in inputs, after closing section will not save
export default function ContactChanger({ Accordion, contacts, setContacts }) {
    const [defaultValues, setDefaultValues] = useState(() =>
        inputs.map((_, index) => contacts[index] || "")
    );

    function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        let contacts = inputs.map((input) => form.get(input.id));
        const uniqueContacts = contacts.filter((contact) => contact !== "");
        const changedSet = new Set(uniqueContacts);
        if (changedSet.size !== uniqueContacts.length) {
            return alert("You cant have same input values");
        }
        setContacts(contacts);
        setDefaultValues(contacts);
    }

    const handleChange = (id, value) =>
        setDefaultValues((prev) =>
            prev.map((inp, index) => (index === id ? value : inp))
        );

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Accordion
                    image={{ src: Message, alt: "message-image" }}
                    title="Contact"
                >
                    <ul>
                        {inputs.map((input) => (
                            <li key={input.id}>
                                <img
                                    src={input.image}
                                    alt={input.alt}
                                    className="pictogram"
                                />
                                <input
                                    name={input.id}
                                    id={input.id}
                                    value={defaultValues[input.id]}
                                    onChange={(e) =>
                                        handleChange(input.id, e.target.value)
                                    }
                                    placeholder={input.placeholder}
                                    type={input.type}
                                    pattern={input.pattern}
                                    maxLength={100}
                                />
                            </li>
                        ))}
                    </ul>
                    <button type="submit">Submit</button>
                </Accordion>
            </form>
        </section>
    );
}