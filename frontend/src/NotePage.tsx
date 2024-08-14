import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Link, LoaderFunction, useLoaderData } from "react-router-dom"

export const NotePageLoader = async function ({ params }) {
    const date = params.date
    return {
        date: date,
        note: "This is a note for " + date,
    }
} satisfies LoaderFunction

export default function NotePage() {
    const { date, note } = useLoaderData() as ReturnType<typeof NotePageLoader>
    const day_current = date.toISOString().slice(0, 10)
    const day_prev = new Date(date.valueOf() - 24 * 3600 * 1000).toISOString().slice(0, 10)
    const day_next = new Date(date.valueOf() + 24 * 3600 * 1000).toISOString().slice(0, 10)
    return (<>
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <Link to={`/note/${day_prev}`} className="btn btn-ghost btn-circle"><FaChevronLeft /></Link>
            </div>
            <div className="navbar-center text-xl font-semibold"> {day_current}</div>
            <div className="navbar-end">
                <Link to={`/note/${day_next}`} className="btn btn-ghost btn-circle"><FaChevronRight /></Link>
            </div>
        </div>

        <main className="max-w-screen-xl mx-auto my-6 p-6 shadow-xl rounded-xl border">
            <p>{note}</p>
        </main>
    </>)
}
