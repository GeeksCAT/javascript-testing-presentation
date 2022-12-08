import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="header">
        <h1>JS Testing</h1>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
  