export default function Header({showEdit , onEdit}){
    return (
        <header>
            <h1>CV Application</h1>
            <button onClick={onEdit}>{showEdit ? "Preview" : "Edit"}</button>
            <button onClick={() => window.print()}>Download pdf</button>
        </header>
    );
}