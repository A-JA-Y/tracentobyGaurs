/**
 * Trecento Residences identity.
 *
 * Monogram: a gilded ring (the cylindrical tower seen from above, sitting inside
 * the ring of the golf course) enclosing a Roman "T" — the Trecento letterform —
 * flanked by hairline storey markers. The same artwork drives the favicon so the
 * browser tab and the header read as one mark.
 */

export function Monogram({ size = 44, className = "", tone = "gold" }) {
  const stroke = tone === "ink" ? "#0D2029" : "#C6A45C";
  const fill = tone === "ink" ? "#0D2029" : "#C6A45C";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Outer ring */}
      <circle cx="32" cy="32" r="30" stroke={stroke} strokeWidth="1.6" opacity="0.95" />
      {/* Inner hairline ring */}
      <circle cx="32" cy="32" r="26.2" stroke={stroke} strokeWidth="0.7" opacity="0.45" />

      {/* Roman T — top bar with bracketed serifs */}
      <path
        d="M16.4 19.6h31.2v4.9H35.1v20.1h4.6v4.6H24.3v-4.6h4.6V24.5H16.4z"
        fill={fill}
      />
      {/* Serif ticks at the ends of the top bar */}
      <path d="M16.4 19.6h2.1v6.4h-2.1zM45.5 19.6h2.1v6.4h-2.1z" fill={fill} opacity="0.9" />

      {/* Storey markers — the 30 floors, abstracted */}
      <path
        d="M12.6 30h3.2M12.6 34h3.2M12.6 38h3.2M48.2 30h3.2M48.2 34h3.2M48.2 38h3.2"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Keystone diamond at the base of the ring */}
      <path d="M32 55.4l2.7 2.7-2.7 2.7-2.7-2.7z" fill={fill} />
    </svg>
  );
}

/**
 * Full lockup: monogram + wordmark.
 * `tone="light"` for dark backgrounds, `tone="dark"` for cream/white.
 */
export default function Logo({ tone = "dark", compact = false, className = "" }) {
  const light = tone === "light";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Monogram size={compact ? 34 : 42} tone="gold" className="flex-shrink-0" />

      <span className="flex flex-col leading-none">
        <span
          className="font-display tracking-[0.3em]"
          style={{
            fontSize: compact ? "15px" : "18px",
            fontWeight: 500,
            color: light ? "#FBF8F2" : "#0D2029",
          }}
        >
          TRECENTO
        </span>

        <span className="flex items-center gap-1.5 mt-[3px]">
          <span
            className="h-px flex-1"
            style={{ background: "rgba(198,164,92,0.6)", minWidth: 10 }}
          />
          <span
            style={{
              fontSize: compact ? "6.5px" : "7.5px",
              fontWeight: 600,
              letterSpacing: "0.36em",
              color: "#C6A45C",
              whiteSpace: "nowrap",
            }}
          >
            RESIDENCES
          </span>
          <span
            className="h-px flex-1"
            style={{ background: "rgba(198,164,92,0.6)", minWidth: 10 }}
          />
        </span>
      </span>
    </span>
  );
}

/** Stacked, ceremonial version used in the hero and the footer. */
export function LogoStacked({ className = "" }) {
  return (
    <span className={`flex flex-col items-center ${className}`}>
      <Monogram size={58} tone="gold" />
      <span className="mt-4 font-display text-[26px] tracking-[0.42em] text-cream font-light">
        TRECENTO
      </span>
      <span className="mt-2 flex items-center gap-3">
        <span className="h-px w-8 bg-gold/60" />
        <span className="text-[8px] font-semibold tracking-[0.44em] text-gold">
          RESIDENCES
        </span>
        <span className="h-px w-8 bg-gold/60" />
      </span>
    </span>
  );
}
