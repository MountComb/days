import { LoaderFunction, useLoaderData } from "react-router-dom"

export const NotePageLoader: LoaderFunction = function ({ params }) {
    const date = params.date
    return {
        date: date,
        note: "This is a note for " + date,
    }
}

export default function NotePage() {
    const { date, note } = useLoaderData()
    return (
        <main>
            <h1>{date}</h1>
            <p>{note}</p>
        </main>
    )
}
