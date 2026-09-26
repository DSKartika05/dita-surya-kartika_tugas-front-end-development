import { Heart, Search, Users } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Users,
    title: "Explore Users",
    description:
      "Browse the Userly directory and explore user profiles collected from the JSONPlaceholder Users API.",
  },
  {
    icon: Search,
    title: "Search & Discover",
    description:
      "Find users quickly with real-time search by name, so you can discover the profile you're looking for without scrolling through the entire directory.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Add users to your Favorites and access your saved profiles anytime. Your favorites stay available even after refreshing the browser.",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">
            Userly Features
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            What Userly Offers
          </h1>

          <p className="mt-4 text-muted-foreground">
            Userly provides a simple way to explore users, find the profiles
            you need, and keep your favorite users within easy reach.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group relative overflow-hidden border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="size-5" />
                </div>

                <CardTitle>{title}</CardTitle>

                <CardDescription>
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-foreground/[0.03] p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">
              How It Works
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              From discovery to favorites
            </h2>

            <p className="mt-3 text-muted-foreground">
              Userly keeps the experience simple: explore the directory,
              search for someone, and save the profiles you want to revisit.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <span className="text-sm font-semibold text-primary">
                01
              </span>

              <h3 className="mt-2 font-semibold">
                Browse
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Open the Users page to explore the available user profiles.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-primary">
                02
              </span>

              <h3 className="mt-2 font-semibold">
                Search
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Type a name in the search field to find a user instantly.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-primary">
                03
              </span>

              <h3 className="mt-2 font-semibold">
                Favorite
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Save users you want to revisit and find them on the Favorites
                page.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}