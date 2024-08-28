import { Link, useRouteError } from "react-router-dom";
import PageTitle from "./PageTitle";

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (

        <PageTitle>
            <div className="hero">
                <div className="hero-content">
                    <div className="max-w-prose space-y-6 text-center">
                        <h1 className="text-5xl font-bold">Oops!</h1>
                        <p>An unexpected error has occurred.</p>
                        <p><Link to="/" className="btn">Back Home</Link></p>
                        <pre className="text-left text-wrap break-all">{JSON.stringify(error, null, 2)}</pre>
                    </div>
                </div>
            </div>
        </PageTitle>

    )
}