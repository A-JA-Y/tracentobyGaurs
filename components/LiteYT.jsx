"use client";

import "lite-youtube-embed";

/**
 * Client-only YouTube embed. Always load via next/dynamic with ssr:false —
 * lite-youtube-embed touches HTMLElement at module scope and will break the
 * server build if it is imported anywhere that renders on the server.
 *
 * `title` is optional: when given it is shown over the poster (as YouTube does)
 * and used as the accessible label of the play button and the iframe.
 *
 * `poster` is optional: by default the library shows YouTube's hqdefault thumbnail
 * and then looks for a sharper one. Pass a poster URL for videos that have no
 * sharper thumbnail, so the browser is not sent after an image that does not exist.
 */
export default function LiteYT({ videoId, title = "", poster = "" }) {
  if (!videoId) return null;

  return (
    <div className="w-full h-full">
      <lite-youtube
        videoid={videoId}
        title={title || undefined}
        playlabel={title ? `Play video: ${title}` : undefined}
        class="w-full h-full block"
        /* The library caps the player at 720px; let the parent decide the width instead. */
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "none",
          ...(poster ? { backgroundImage: `url("${poster}")` } : {}),
        }}
      ></lite-youtube>
    </div>
  );
}
