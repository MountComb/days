import { FaFileAlt, FaHome, FaMap } from "react-icons/fa"
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div className="drawer drawer-open">
        <input type="checkbox" id="sidebar" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <label aria-label="open sidebar" htmlFor="sidebar">open sidebar</label> */}
          <Outlet />
        </div>
        <nav className="drawer-side border-r shadow-2xl">
          <label className="drawer-overlay" aria-label="close sidebar" htmlFor="sidebar"></label>
          <ul className="menu min-h-full w-80 p-4 bg-base-200 text-base-content ">
            <li><Link className="btn btn-ghost text-xl" to="/">Days</Link></li>
            <li><Link to="/" ><FaHome />Overview</Link></li>
            <li><Link to="/track" ><FaMap />Track</Link></li>
            <li><Link to={`/note/${new Date().toISOString().slice(0, 10)}`}><FaFileAlt />Note</Link></li>
          </ul>
        </nav>
      </div>
    </>)
}

export default App
