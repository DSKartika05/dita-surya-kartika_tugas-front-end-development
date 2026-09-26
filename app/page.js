import Link from "next/link";
import {
  ArrowRight,
  Users,
  Heart,
  Search,
  UserCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Explore Users",
    description:
      "Browse user profiles and discover information about people in the Userly directory.",
  },
  {
    icon: Search,
    title: "Find Someone",
    description:
      "Use the search feature to quickly find a user by name without scrolling through the entire directory.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Save users you want to keep within reach and access your favorite profiles anytime.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-radial-fade" />

        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-foreground/5 px-4 py-1.5 text-sm text-muted-foreground">
              <UserCheck className="size-3.5" />
              Welcome to Userly
            </div>

            <h1 className="text-gradient text-4xl font-bold tracking-tight md:text-6xl">
              Find people. Save your favorites.
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore user profiles, search for people, and keep your favorite
              users within easy reach.
            </p>

            {/* Hero Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/users"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 shadow-lg shadow-primary/20"
                )}
              >
                Explore Users
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/favorites"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full px-6"
                )}
              >
                View Favorites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Everything You Need to Manage Your User List
          </h2>

          <p className="mt-3 text-muted-foreground">
            Userly makes it simple to explore users, find the people you need,
            and save your favorites.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="size-5" />
                </div>

                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-foreground/[0.03] px-8 py-14 text-center">
          <div className="pointer-events-none absolute inset-0 bg-grid bg-radial-fade opacity-60" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Ready to explore?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Discover users and build your own collection of favorite
              profiles with Userly.
            </p>

            <Link
              href="/users"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 rounded-full px-6"
              )}
            >
              Browse Users
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}