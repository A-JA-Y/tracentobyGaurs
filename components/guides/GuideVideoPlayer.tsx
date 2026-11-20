"use client";

import dynamic from "next/dynamic";

/* lite-youtube-embed touches HTMLElement at import time, so it must never render on the server. */
const LiteYT = dynamic(() => import("@/components/LiteYT"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-ink-deep" />,
});

/** Click-to-load YouTube player. Nothing is requested from YouTube's player until the visitor presses play. */
export default function GuideVideoPlayer({
  videoId,
  title,
  poster,
}: {
  videoId: string;
  title: string;
  poster?: string;
}) {
  return <LiteYT videoId={videoId} title={title} poster={poster} />;
}
