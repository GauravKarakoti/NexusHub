import { getServerSession } from "next-auth";
import Button from "../components/Button";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcometo NexusHub
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        The open-source collaboration platform.
      </p>

      {session ? (
        <div className="space-y-4 text-center">
          <p className="text-gray-700">
            Signed in as {session.user?.name ?? session.user?.email}
          </p>
          <Button href="/api/auth/signout" variant="secondary">
            Sign out
          </Button>
        </div>
      ) : (
        <div className="space-x-4">
          <Button href="/api/auth/signin">Get Started</Button>
          <Button
            href="https://github.com/GauravKarakoti/NexusHub"
            variant="secondary"
          >
            Learn More
          </Button>
        </div>
      )}
    </div>
  );
}
