import { Fragment } from "react";
import Link from "next/link";

function HomePage() {
  return <Fragment>
    <h1>Welcome to the Todo list App</h1>
    <Link href="/today">Click here to show Tasks</Link>
  </Fragment>
}
export default HomePage;
