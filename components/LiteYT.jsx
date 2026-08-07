"use client";

import "lite-youtube-embed";

/**
 * Client-only YouTube embed. Always load via next/dynamic with ssr:false —
 * lite-youtube-embed touches HTMLElement at module scope and will break the
 * server build if it is imported anywhere that renders on the server.
 */
export default function LiteYT({ videoId }) {
  if (!videoId) return null;

  return (
    <div className="w-full h-full">
      <lite-youtube
        videoid={videoId}
        class="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      ></lite-youtube>
    </div>
  );
}
