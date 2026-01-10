import Head from "next/head";
import CalendarPage from "~/components/calendar/CalendarPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Habit Calendar</title>
        <meta name="description" content="Track your habits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CalendarPage initialActivities={[]} />
    </>
  );
}
