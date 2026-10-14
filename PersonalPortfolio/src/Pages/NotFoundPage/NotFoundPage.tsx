import { Link } from "react-router";

export const NotFoundPage = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-white">
    <h1 className="text-3xl font-bold">Page not found</h1>
    <Link to="/" className="text-yellow underline">
      Return home
    </Link>
  </main>
);
