import { GuideHeading } from "./GuideBlocks";
import GuideVideoPlayer from "./GuideVideoPlayer";

export type GuideVideo = {
  /** YouTube video id. */
  id: string;
  title: string;
  /** Channel that published the video — shown as the credit. */
  channel: string;
  /** Running time as shown on YouTube, e.g. "5:21". */
  duration: string;
  /** One or two sentences on why the video is worth watching here. */
  caption: string;
  /** Short tag above the title, e.g. "Developer film" or "News report". */
  kind: string;
  /** Poster image URL. Only needed when YouTube has no standard-definition thumbnail for the video. */
  poster?: string;
};

type Props = {
  id?: string;
  tone?: "white" | "cream";
  eyebrow: string;
  title: string;
  intro: string;
  /** The first video is featured beside its description; the rest sit in a grid below it. */
  videos: GuideVideo[];
  /** Small-print line under the grid. */
  note?: string;
};

function Credit({ video }: { video: GuideVideo }) {
  return (
    <p className="text-xs text-gray-500">
      {video.channel} on YouTube · {video.duration}
    </p>
  );
}

/**
 * "Watch" section for the buyer-guide pages. Titles, captions and credits are
 * server-rendered; only the click-to-load player is a client component.
 */
export default function GuideVideos({
  id = "videos",
  tone = "cream",
  eyebrow,
  title,
  intro,
  videos,
  note,
}: Props) {
  if (!videos.length) return null;

  const [featured, ...rest] = videos;
  const columns = rest.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <section
      id={id}
      className={`w-full px-6 py-14 md:py-20 ${tone === "cream" ? "bg-[#FAF8F4]" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto">
        <GuideHeading eyebrow={eyebrow} align="center">
          {title}
        </GuideHeading>
        <p className="mt-6 text-gray-600 text-[15px] md:text-base leading-relaxed text-center max-w-2xl mx-auto">
          {intro}
        </p>

        {/* Featured video */}
        <div className="mt-10 grid lg:grid-cols-5 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-ink-deep shadow-lg">
              <GuideVideoPlayer videoId={featured.id} title={featured.title} poster={featured.poster} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-3">
              {featured.kind}
            </p>
            <h3 className="text-xl md:text-2xl text-gray-900 !leading-snug mb-3">{featured.title}</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{featured.caption}</p>
            <Credit video={featured} />
          </div>
        </div>

        {/* Supporting videos */}
        {rest.length ? (
          <div className={`mt-10 grid grid-cols-1 ${columns} gap-6`}>
            {rest.map((video) => (
              <article
                key={video.id}
                className={`flex flex-col rounded-lg border border-[#e5dcc5] overflow-hidden ${
                  tone === "cream" ? "bg-white" : "bg-[#FAF8F4]"
                }`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-ink-deep">
                  <GuideVideoPlayer videoId={video.id} title={video.title} poster={video.poster} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-2">
                    {video.kind}
                  </p>
                  <h3 className="text-base md:text-lg text-gray-900 !leading-snug mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{video.caption}</p>
                  <Credit video={video} />
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {note ? (
          <p className="mt-8 text-xs text-gray-500 leading-relaxed text-center max-w-3xl mx-auto">{note}</p>
        ) : null}
      </div>
    </section>
  );
}
