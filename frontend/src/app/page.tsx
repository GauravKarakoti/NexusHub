export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to NexusHub</h1>
      <p className="text-lg text-gray-600 mb-8">
        The open-source collaboration platform.
      </p>
      
      {/* TODO 1: Implement conditional rendering based on authentication state */}
      {/* If authenticated: Render Dashboard redirect or summary */}
      {/* If unauthenticated: Render Login/Signup CTAs */}
      
      <div className="space-x-4">
        {/* TODO 2: Build reusable Button components */}
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
          Get Started
        </button>
        <button className="px-6 py-2 bg-white text-blue-600 border border-blue-600 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
}