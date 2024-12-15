import Head from 'next/head';
import Profile from "modules/profile/Profile";

export default function page() {
  const profileData = {
    gender: 'Male',
    weight: 79,
    height: 170,
    activityLevel: 'Sedenta',
    creditCard: 'XXXX-XXXX-XXXX-XXXX',
    tokens: 3,
    screeningProgress: 75
  };
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 ">
        <Profile {...profileData} />
      </main>
    </div>
  );
}
