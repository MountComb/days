import { FaChevronLeft, FaChevronRight, FaPen } from "react-icons/fa"
import { Link, LoaderFunction, useLoaderData } from "react-router-dom"
import axios from "axios"
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from "remark-gfm"

const API_URL = import.meta.env.VITE_API_URL || "/api";

export const NotePageLoader = async function ({ params }) {
    if (!params.date) {
        throw new Response(null, { status: 400 })
    }
    const date = new Date(params.date)
    if (date.toISOString().slice(0, 10) !== params.date) {
        throw new Response(null, { status: 400 })
    }
    const response = await axios.get(`${API_URL}/note/${params.date}`)
    const note = response.data.note
    return {
        date: date,
        note: note,
    }
} satisfies LoaderFunction

export default function NotePage() {
    const { date, note } = useLoaderData() as Awaited<ReturnType<typeof NotePageLoader>>
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

        <main className="card max-w-screen-xl mx-auto my-6 shadow-xl border">
            <div className="card-body">
                <div className="card-actions justify-end">
                    <Link to={`/note/${day_current}/edit`} className="btn btn-circle"><FaPen /></Link>
                </div>
                <div className="prose max-w-none">
                    {
                        note === null ? <p className="text-center fg-base-300">No note for today</p> :
                            <Markdown remarkPlugins={[remarkBreaks, remarkGfm]}>{note}</Markdown>
                    }
                </div>
            </div>
        </main>
    </>)
}
