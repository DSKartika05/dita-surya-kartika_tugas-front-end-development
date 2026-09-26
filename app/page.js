"use client";

import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data.slice(0, 9));
      } catch (err) {
        setError("Gagal mengambil data user.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          USERLY
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          User Directory & Favorites
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Explore user profiles and save your favorite people for easy access.
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mb-10 max-w-xl">
        <Input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11"
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="py-16 text-center text-muted-foreground">
          Loading users...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="py-16 text-center text-destructive">
          {error}
        </div>
      )}

      {/* Users */}
      {!loading && !error && (
        <>
          {filteredUsers.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-muted-foreground">
              No users found.
            </div>
          )}
        </>
      )}
    </main>
  );
}
