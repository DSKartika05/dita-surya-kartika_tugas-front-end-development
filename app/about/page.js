import { CheckCircle2 } from "lucide-react";

const values = [
  "Simple and maintainable front-end solutions",
  "Responsive interface with a focus on usability",
  "Practical implementation of modern React concepts",
];

const stats = [
  { value: "10", label: "Users in directory" },
  { value: "7", label: "Main pages" },
  { value: "2", label: "Theme modes" },
  { value: "10+", label: "Implemented features" },
];

const features = [
  "Multi-page navigation with Next.js App Router",
  "User Directory with data fetched from JSONPlaceholder",
  "Display user profiles in a responsive grid",
  "Real-time search by user name",
  "Add and remove users from Favorites",
  "Global favorite state with React Context",
  "Favorite counter displayed in the Navbar",
  "Favorite data persisted with LocalStorage",
  "Loading and error states for API requests",
  "Dark and Light Mode with saved theme preference",
  "Contact form with personalized greeting",
  "Reusable and responsive UI components",
];

export default function AboutPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* About */}
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold text-primary">
              About Userly
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              A Front-End Development Assignment
            </h1>

            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              Userly is a user directory web application developed as a
              Front-End Development assignment for the <span className="font-medium text-foreground">
                Perempuan Inovasi 2026
              </span>{" "}program.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              This project was developed by{" "}
              <span className="font-medium text-foreground">
                Dita Surya Kartika
              </span>{" "}
              to apply fundamental front-end development concepts using
              Next.js, React, Tailwind CSS, React Context, API integration,
              and browser-based data persistence.
            </p>

            <ul className="mt-8 space-y-3">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />

                  <span className="text-muted-foreground">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-primary/30"
              >
                <p className="text-3xl font-bold tracking-tight text-primary">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">
              Tech Stack & Concepts
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Built with modern front-end tools
            </h2>

            <p className="mt-4 text-muted-foreground">
              Userly combines several front-end technologies and concepts
              learned throughout the assignment.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Framework</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Next.js with the App Router for page routing and application
                structure.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Library</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                React with useState, useEffect, and Custom Context for
                interactive features and state management.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Styling</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tailwind CSS with reusable components based on shadcn/ui.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">API</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                JSONPlaceholder Users API as the source for user directory
                data.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Persistence</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                LocalStorage keeps favorite users and theme preferences after
                refreshing the browser.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Typography</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Plus Jakarta Sans loaded through Next.js local font support.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">
              Features
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              What you can do with Userly
            </h2>

            <p className="mt-4 text-muted-foreground">
              The project brings together the front-end concepts implemented
              throughout the assignment.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 border-b border-border/50 pb-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />

                <span className="text-sm text-muted-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}