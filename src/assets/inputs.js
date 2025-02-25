import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Home from "../assets/home.svg";
import LinkedIn from "../assets/linkedin.svg";

export const inputs = [
    {
        image: Phone,
        alt: "Phone image",
        placeholder: "Enter phone number",
        
        id: 0,
    },
    {
        image: Email,
        alt: "Email image",
        placeholder: "Enter email address",
        pattern: "(\\s*|([^@\\s]+@[^@\\s]+\\.[^@\\s]+))",
        id: 1,
    },
    {
        image: Home,
        alt: "House image",
        placeholder: "Enter home address",
        id: 2,
    },
    {
        image: LinkedIn,
        alt: "LinkedIn image",
        placeholder: "Enter LinkedIn adress",
        id: 3,
    },
];
