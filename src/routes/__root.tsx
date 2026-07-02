import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource-variable/inter-tight/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingQuote } from "@/components/site/FloatingQuote";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="label-eyebrow">Error 404</div>
        <h1 className="display mt-4 text-7xl">Off-map.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you were looking for has been moved or never existed.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Return home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="label-eyebrow">Unexpected error</div>
        <h1 className="display mt-4 text-5xl">This page didn't load.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something interrupted the build. Try again, or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-3 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Contel Africa — Engineering Tomorrow. Building Africa." },
      {
        name: "description",
        content:
          "Contel Africa delivers construction, civil engineering, infrastructure and project management across 14 African markets.",
      },
      { name: "author", content: "Contel Africa" },
      { name: "theme-color", content: "#0E0E0E" },
      { property: "og:title", content: "Contel Africa — Engineering Tomorrow. Building Africa." },
      {
        property: "og:description",
        content: "Construction, engineering, infrastructure and project management across Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingQuote />
      <Toaster theme="dark" />
    </QueryClientProvider>
  );
}
