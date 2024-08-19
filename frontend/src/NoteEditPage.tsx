import { FaTimes } from "react-icons/fa"
import { Form, Link, redirect, useLoaderData } from "react-router-dom"
import { NotePageLoader } from "./NotePage"
import axios from "axios"


const API_URL = import.meta.env.VITE_API_URL || "/api";

export async function noteEditAction({ request, params }: { request: Request, params: { date: string } }) {
    const form = await request.formData()
    const note = form.get('note')
    const date = params.date

    await axios.put(`${API_URL}/note/${date}`, note)
    return redirect(`/note/${date}`)

}

export default function NoteEditPage() {
    const { date, note } = useLoaderData() as Awaited<ReturnType<typeof NotePageLoader>>
    const day_current = date.toISOString().slice(0, 10)
    return (<>
        <div className="navbar bg-base-200">
            <div className="navbar-start" />
            <div className="navbar-center text-xl font-semibold"> Editing note for {day_current}</div>
            <div className="navbar-end">
                <Link to={`/note/${day_current}`} className="btn btn-ghost btn-circle"><FaTimes /></Link>
            </div>
        </div>

        <main className="card max-w-screen-xl mx-auto my-6 shadow-xl border">
            <div className="card-body">
                <Form method="post" id="contact-form" className="space-y-2">
                    <textarea name="note" className="w-full h-96 p-2 rounded-md" defaultValue={note} />
                    <div className="card-actions justify-end">
                        <input type="submit" className="btn" value="Save" />
                    </div>
                </Form>
            </div>
        </main>
    </>)
}
