import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-foreground md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg text-text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8">
        <Button variant="primary" href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
