import { Mail, MessageCircle, Code2 } from "lucide-react";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "10", label: "Users" },
  { value: "12", label: "Features" },
  { value: "7", label: "Pages" },
];

const highlights = [
  "Next.js & React",
  "Tailwind CSS",
  "React Context",
  "REST API",
];

export default function Profile() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-3xl px-6 py-20">
        <Card className="border border-white/10 bg-foreground/[0.03]">
          <CardContent className="flex flex-col items-center text-center">

            {/* Avatar */}
            <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/10 text-2xl font-bold text-primary">
              DK
            </div>

            {/* Profile Info */}
            <h1 className="mt-4 text-2xl font-bold tracking-tight">
              Dita Surya Kartika
            </h1>

            <p className="text-sm text-muted-foreground">
              Front-End Developer
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Developer of Userly, a Front-End Development assignment created
              for the Perempuan Inovasi 2026 program. This project explores
              modern web development concepts using Next.js, React, and
              Tailwind CSS.
            </p>

            {/* Stats */}
            <div className="mt-8 grid w-full grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-primary">
                    {stat.value}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-8 w-full border-t border-white/10 pt-6">
              <div className="flex items-center justify-center gap-2">
                <Code2 className="size-4 text-primary" />

                <h2 className="text-sm font-semibold">
                  Built With
                </h2>
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <Link
                href="/contact"
                aria-label="Contact"
                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <MessageCircle className="size-4" />
              </Link>

              <a
                href="mailto:contact.dskartika@gmail.com"
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}