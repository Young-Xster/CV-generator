export default function About({ children }) {
    return (
        <>
            {children && children.trim() !== "" && (
                <section>
                    <h2>About</h2>
                    <p>{children}</p>
                </section>
            )}
        </>
    );
}