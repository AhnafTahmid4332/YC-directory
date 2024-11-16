import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function CreatePage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // Ensure searchParams is resolved and provide a fallback if query is not provided
  const { query = "" } = await searchParams;
  const params = { search: query || null };

  // Fetch the session data for authentication
  const session = await auth();
  console.log("Session ID:", session?.id);

  // Fetch posts from Sanity with error handling
  let posts = [];
  let errorMessage = "";
  try {
    const { data, error } = await sanityFetch({
      query: STARTUPS_QUERY,
      params,
    });
    if (error) {
      throw new Error("Error fetching posts: " + error.message);
    }
    posts = data || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    errorMessage = "Failed to load startups.";
  }

  // Ensure posts is always an array before rendering
  if (!Array.isArray(posts)) {
    console.error("Expected posts to be an array, but got:", posts);
    posts = [];
    errorMessage = "Posts data is not in the expected format.";
  }

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {errorMessage ? (
            <p className="no-results">{errorMessage}</p>
          ) : posts.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      {/* Temporarily remove SanityLive to isolate the error */}
      <SanityLive />
    </>
  );
}
