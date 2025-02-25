import AccountCircle from "../assets/account-circle.svg";
export default function UserImage({ src }) {
    return (
        <img
            className="user-photo"
            src={
                src === null || src === undefined || src === ""
                    ? AccountCircle
                    : src
            }
            alt="user photo"
        />
    );
}