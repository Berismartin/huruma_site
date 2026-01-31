'use client';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="bg-gray-900 shadow-xl rounded-2xl p-10 text-center border border-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-white">No Deployment Yet</h1>
        <p className="text-gray-300 mb-4">Please contact support if you need assistance.</p>
        <a
          href="mailto:berismartin25@gmail.com"
          className="inline-block mt-2 px-6 py-2 bg-black text-white rounded-md border border-gray-600 hover:bg-gray-800 hover:border-gray-400 transition"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
