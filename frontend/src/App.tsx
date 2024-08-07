import { BsHouse } from "react-icons/bs"
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
        <nav className="drawer-side">
          <label className="drawer-overlay" aria-label="close sidebar" htmlFor="sidebar"></label>
          <ul className="menu min-h-full w-80 p-4 bg-base-200 text-base-content ">
            <li><Link className="btn btn-ghost text-xl" to="/">Days</Link></li>
            <li><Link to="/" ><BsHouse /> Overview</Link></li>
          </ul>
        </nav>
      </div>
    </>)
}

export default App
