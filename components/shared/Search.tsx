"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

import { Input } from "@/components/ui/input";
import { useAfterMountEffect } from "@/hooks/useAfterMountEffect";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query")?.trim() ?? "");
  const [isSearching, startTransition] = useTransition();

  useAfterMountEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const trimmedQuery = query.trim();

      startTransition(() => {
        if (trimmedQuery) {
          const newUrl = formUrlQuery({
            searchParams: searchParams.toString(),
            key: "query",
            value: trimmedQuery,
          });

          router.push(newUrl, { scroll: false });
        } else {
          const newUrl = removeKeysFromQuery({
            searchParams: searchParams.toString(),
            keysToRemove: ["query"],
          });

          router.push(newUrl, { scroll: false });
        }
      });
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="search">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        aria-hidden
      />

      <Input
        className="search-field"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        role="searchbox"
        aria-label="Search for an edit"
      />

      {isSearching && (
        <div
          className="min-w-6 min-h-6 size-6 bg-[conic-gradient(#624cf5,transparent)] animate-spin rounded-full relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-[60%] after:bg-white after:rounded-full"
          aria-label="Searching..."
        />
      )}
    </div>
  );
};
