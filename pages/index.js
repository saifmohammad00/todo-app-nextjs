import Head from "next/head";
import { Fragment } from "react";

function HomePage() {

  return <Fragment>
        <Head>
        <title>TODO App</title>
        <meta name="description" content="Add different tasks that you want to today!" />
    </Head>
    <h1>Welcome to the Todo list App</h1>
  </Fragment>
}
export default HomePage;
