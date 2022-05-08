import { getSession } from "next-auth/react";
import Head from 'next/head'
import Header from "../components/Header";
import Login from "../components/Login";


export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Blazon | SaturnBay </title>
      </Head>

    <Header />
    <main>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  // Get the User
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}