"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import NewsData from "@/data/newsData";
import { project } from "@/data/project";
import StickyDownloadButton from "@/components/StickyButton";

type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  excerpt: string;
  date: string;
};

const postingTopics = [
  {
    title: "Project milestones",
    body: `construction progress and RERA-aligned status updates on ${project.rera}`,
  },
  {
    title: "Launch and booking news",
    body: "offers, availability across the 60 units and payment plan changes",
  },
  {
    title: "Corridor infrastructure",
    body: "Jewar airport, Film City, the proposed Night Safari, cricket stadium and metro expansion",
  },
  {
    title: "Developer news",
    body: "announcements covering the Gaur builder behind the project and its wider portfolio",
  },
];

/* Dates are stored as YYYY-MM-DD (parsed as UTC) — format in UTC so the day never shifts. */
const formatDate = (date: string, month: "long" | "short") =>
  new Date(date).toLocaleDateString("en-US", {
    month,
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export default function NewsPage() {
  const sorted: News[] = useMemo(
    () =>
      [...NewsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  /* Derive tabs from the listed stories, not all of them — the featured story is
     rendered separately, so including its category produced an empty tab. */
  const categories = ["All", ...Array.from(new Set(rest.map((n) => n.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? rest : rest.filter((n) => n.category === active);

  if (!featured) return null;

  return (
    <section className="w-full min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 pt-12 pb-8">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            News &amp; Updates
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5 leading-tight">
            What&apos;s Happening at Trecento Residences
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mb-10">
            Launch updates for Trecento Residences and the infrastructure developments shaping
            Jaypee Greens, Greater Noida and the Yamuna Expressway corridor. This is where
            announcements about the Gaur Greater Noida new launch are posted as they are confirmed
            — construction milestones, booking offers, and the corridor news that moves demand
            around Pari Chowk.
          </p>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#c8922a] mb-3">
            Latest
          </p>

          {/* Featured */}
          <Link href={`/news/${featured.slug}`}>
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-gray-100 overflow-hidden group hover:border-gray-200 transition-colors bg-white">
              <div className="relative w-full h-56 md:h-auto bg-gradient-to-br from-indigo-50 to-blue-100">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="text-xs text-gray-400 mb-4">
                  <span className="font-semibold text-blue-600">{featured.category}</span>
                  {" · "}
                  {formatDate(featured.date, "long")}
                </p>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors mb-3">
                  {featured.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {featured.excerpt}
                </p>

                <span className="text-sm font-semibold text-[#c8922a] group-hover:underline">
                  Read the update &rarr;
                </span>
              </div>
            </div>
          </Link>

          {/* ── FILTERS ── only once there is more than the featured story */}
          {rest.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`text-sm px-4 py-1.5 rounded-full border transition-all ${active === cat
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* ── GRID ── */}
      {rest.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <p className="text-sm text-gray-400 mb-6">
            {filtered.length} {filtered.length === 1 ? "story" : "stories"}
            {active !== "All" && ` in ${active}`}
          </p>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-16">No stories in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((news) => (
                <Link key={news.id} href={`/news/${news.slug}`}>
                  <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors h-full flex flex-col">
                    <div className="relative w-full h-40 bg-gradient-to-br from-purple-50 to-indigo-100">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-500 mb-2">
                        {news.category}
                      </p>

                      <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors mb-2 flex-1">
                        {news.title}
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {news.excerpt}
                      </p>

                      <p className="text-xs text-gray-400 mt-3">
                        {formatDate(news.date, "short")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── WHAT GETS POSTED ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          What Gets Posted Here
        </h2>

        <ul className="space-y-3 mb-8">
          {postingTopics.map((topic) => (
            <li key={topic.title} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="text-[#c8922a] mt-0.5">✓</span>
              <span>
                <strong className="text-gray-900">{topic.title}</strong> — {topic.body}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-3xl">
          For live availability or the current price sheet,{" "}
          <Link href="/contact-us" className="text-[#c8922a] font-semibold hover:underline">
            request a callback
          </Link>{" "}
          rather than waiting on a post — inventory across only 60 residences moves faster than
          this page does.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-sm text-gray-600 space-y-2">
          <p>
            <strong>Project:</strong> {project.name} · Jaypee Greens, near Pari Chowk,{" "}
            {project.locality}
          </p>
          <p>
            <strong>RERA:</strong> {project.rera} · verify at{" "}
            <a
              href={project.reraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8922a] hover:underline"
            >
              up-rera.in/projects
            </a>
          </p>
          <p>
            <strong>Enquiries:</strong>{" "}
            <a href={`tel:${project.phoneHref}`} className="text-[#c8922a] hover:underline">
              {project.phone}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${project.email}`} className="text-[#c8922a] hover:underline">
              {project.email}
            </a>
          </p>
        </div>
      </div>

      <div className="relative">
        <StickyDownloadButton />
      </div>

    </section>
  );
}
