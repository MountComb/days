import { FaBars } from "react-icons/fa";

type PageTitleProps = {
    children: React.ReactNode,
    title: string,
    actions: React.ReactNode,
}

export default function PageTitle({ children, title, actions }: PageTitleProps) {
    return (<>
        <nav className="bg-base-200 ">
            <div className="navbar max-w-screen-xl mx-auto px-3">
                <div className="navbar-start">
                    <label aria-label="open sidebar" htmlFor="sidebar" className="btn btn-ghost btn-circle" ><FaBars /></label>
                </div>
                <div className="navbar-center text-xl font-semibold"> {title} </div>
                <div className="navbar-end"> {actions} </div>
            </div>
        </nav>
        <main className="max-w-screen-xl mx-auto p-6 space-y-6">
            <section className="card shadow-xl border">
                {children}
            </section>
        </main>
    </>)
}
