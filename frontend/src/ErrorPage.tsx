import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (

        <main>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="max-w-prose space-y-6">
                        <h1 className="text-center text-5xl font-bold">Oops!</h1>
                        <p className="text-center">
                            An unexpected error has occurred.
                        </p>
                        <pre>{JSON.stringify(error, null, 2)}</pre>
                    </div>
                </div>
            </div>
        </main>

    )
}