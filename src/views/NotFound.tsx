"use client";
import { useLocation } from "@/lib/router-compat";
import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";

const NotFound = () => {
  const location = useLocation();

  useSeo({
    title: "Page not found",
    description: "The page you're looking for doesn't exist. Browse MacBook, iPhone and iPad repair services in Dubai.",
    path: location.pathname,
    noindex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-accent underline hover:text-accent/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
