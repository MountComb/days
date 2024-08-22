import { FaBars } from "react-icons/fa";

type PageTitleProps = {
    children: React.ReactNode,
    title: string,
    actions: React.ReactNode,
}

export default function PageTitle({ children, title, actions }: PageTitleProps) {
    return (<>
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <label aria-label="open sidebar" htmlFor="sidebar" className="btn btn-ghost btn-circle" ><FaBars /></label>
            </div>
            <div className="navbar-center text-xl font-semibold"> {title} </div>
            <div className="navbar-end"> {actions} </div>
        </div>
        <main className="card max-w-screen-xl mx-auto my-6 shadow-xl border">
            {children}
        </main>
    </>)
}
