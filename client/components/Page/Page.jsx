import NavBar from "../NavBar/NavBar";

export default function Page ({ children }) {
    return (
        <div>
            <NavBar />
            { children }
        </div>
    )
}