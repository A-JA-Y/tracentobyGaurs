/**
 * Diagrams for the "super built-up area vs carpet area" guide.
 *
 * Everything here is drawn from the five areas published for each home type
 * (see `areaTable` in data/project.ts). The derived figures — walls, the part
 * of saleable area that is not itemised, carpet plus balcony and the rate
 * multipliers — are computed below so the charts can never drift from the table.
 */

export type HomeAreas = {
  type: string;
  carpet: number;
  covered: number;
  balcony: number;
  common: number;
  saleable: number;
};

/* All figures in sq. ft., from the project brochure. */
export const homeAreas: HomeAreas[] = [
  { type: "Type 1", carpet: 3112.63, covered: 3173.87, balcony: 806.65, common: 454.56, saleable: 5050 },
  { type: "Type 2", carpet: 3059.99, covered: 3120.05, balcony: 806.65, common: 454.56, saleable: 5000 },
];

const number = (value: number, digits = 2) =>
  value.toLocaleString("en-IN", { minimumFractionDigits: digits, maximumFractionDigits: digits });

const whole = (value: number) => number(Math.round(value), 0);

function derive(home: HomeAreas) {
  const walls = home.covered - home.carpet;
  const itemised = home.covered + home.balcony + home.common;
  const balance = home.saleable - itemised;
  const carpetPlusBalcony = home.carpet + home.balcony;
  return {
    walls,
    balance,
    carpetPlusBalcony,
    onCarpet: home.saleable / home.carpet,
    onCarpetPlusBalcony: home.saleable / carpetPlusBalcony,
  };
}

/* ── 1. How the four areas sit inside one another ─────────────── */

export function AreaNestDiagram() {
  const label = "text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em]";

  return (
    <figure>
      <div className="rounded-xl border-2 border-dashed border-[#c8922a] bg-[#fbf4e2] p-3 sm:p-5">
        <p className={`${label} text-[#8f6410] mb-3`}>
          4 · Saleable area: everything inside the dashed line
        </p>

        <div className="grid sm:grid-cols-[1fr_10rem] gap-3">
          {/* Balcony wraps the home */}
          <div className="rounded-lg bg-[#ead093] p-3 sm:p-5">
            <p className={`${label} text-[#5f430a] mb-3`}>3 · Balcony: measured on its own</p>

            {/* The dark frame is the wall line; inside it is the carpet area */}
            <div className="rounded-md border-[8px] border-[#16323c] bg-white">
              <div className="grid grid-cols-3 grid-rows-2 divide-x divide-y divide-gray-300 text-center">
                <div className="col-span-2 row-span-2 flex flex-col items-center justify-center px-3 py-8 sm:py-12">
                  <p className={`${label} text-[#0d2029]`}>1 · RERA carpet area</p>
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-600">Rooms and internal walls</p>
                </div>
                <div className="flex items-center justify-center px-2 py-4 text-[11px] text-gray-400">
                  Room
                </div>
                <div className="flex items-center justify-center px-2 py-4 text-[11px] text-gray-400">
                  Room
                </div>
              </div>
            </div>

            <p className={`${label} text-[#16323c] mt-3`}>
              2 · Covered area: carpet plus the walls around the home
            </p>
          </div>

          {/* Share of common areas */}
          <div
            className="rounded-lg border border-[#d9c79b] p-3 sm:p-4 flex items-center"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(200,146,42,0.16) 0 6px, rgba(255,255,255,0.55) 6px 12px)",
            }}
          >
            <p className={`${label} text-[#5f430a]`}>A share of the common areas</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-gray-500 leading-relaxed">
        A schematic of how the four areas nest. It is not to scale and is not a floor plan.
      </figcaption>
    </figure>
  );
}

/* ── 2. Where the saleable area goes ───────────────────────────── */

const segments = [
  { key: "carpet", name: "RERA carpet", swatch: "bg-[#0d2029]" },
  { key: "walls", name: "Walls (covered area less carpet)", swatch: "bg-[#4d5c66]" },
  { key: "balcony", name: "Balcony", swatch: "bg-[#DCA54A]" },
  { key: "common", name: "Common floor area", swatch: "bg-[#e6dbc4]" },
  { key: "balance", name: "Not itemised", swatch: "" },
] as const;

const hatch = {
  backgroundImage:
    "repeating-linear-gradient(135deg, #c8bfa8 0 3px, #f5efe0 3px 7px)",
};

function parts(home: HomeAreas) {
  const d = derive(home);
  return {
    carpet: home.carpet,
    walls: d.walls,
    balcony: home.balcony,
    common: home.common,
    balance: d.balance,
  };
}

export function AreaCompositionBars() {
  return (
    <figure>
      <div className="space-y-6">
        {homeAreas.map((home) => {
          const p = parts(home);
          const summary = segments
            .map((s) => `${s.name} ${Math.round((p[s.key] / home.saleable) * 100)}%`)
            .join(", ");

          return (
            <div key={home.type}>
              <div className="flex items-baseline justify-between mb-2">
                <p className="text-sm font-semibold text-gray-900">{home.type}</p>
                <p className="text-sm text-gray-600">{whole(home.saleable)} sq. ft. saleable</p>
              </div>
              <div
                role="img"
                aria-label={`${home.type}: how ${whole(home.saleable)} sq. ft. of saleable area is made up. ${summary}.`}
                className="flex h-11 w-full overflow-hidden rounded-md border border-[#d9cdb0]"
              >
                {segments.map((s) => (
                  <div
                    key={s.key}
                    className={`h-full ${s.swatch} border-r border-white/70 last:border-r-0`}
                    style={{
                      width: `${(p[s.key] / home.saleable) * 100}%`,
                      ...(s.key === "balance" ? hatch : {}),
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend doubles as the data table for the two bars */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-[11px] uppercase tracking-wider text-gray-500">
            <tr>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Part of saleable area
              </th>
              {homeAreas.map((home) => (
                <th key={home.type} scope="col" className="py-2 px-3 font-semibold text-right whitespace-nowrap">
                  {home.type}
                </th>
              ))}
              <th scope="col" className="py-2 pl-3 font-semibold text-right">
                Share
              </th>
            </tr>
          </thead>
          <tbody>
            {segments.map((s) => (
              <tr key={s.key} className="border-t border-[#e5dcc5]">
                <th scope="row" className="py-2.5 pr-4 font-normal text-gray-700">
                  <span className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className={`inline-block w-3.5 h-3.5 rounded-sm flex-shrink-0 border border-black/10 ${s.swatch}`}
                      style={s.key === "balance" ? hatch : undefined}
                    />
                    {s.name}
                  </span>
                </th>
                {homeAreas.map((home) => {
                  const value = parts(home)[s.key];
                  return (
                    <td key={home.type} className="py-2.5 px-3 text-right text-gray-900 whitespace-nowrap">
                      {s.key === "balance" ? `about ${whole(value)}` : number(value)}
                    </td>
                  );
                })}
                <td className="py-2.5 pl-3 text-right text-gray-600 whitespace-nowrap">
                  {homeAreas
                    .map((home) => `${Math.round((parts(home)[s.key] / home.saleable) * 100)}%`)
                    .filter((value, index, all) => all.indexOf(value) === index)
                    .join(" / ")}
                </td>
              </tr>
            ))}
            <tr className="border-t-2 border-[#d9cdb0]">
              <th scope="row" className="py-2.5 pr-4 font-semibold text-gray-900">
                Saleable area
              </th>
              {homeAreas.map((home) => (
                <td key={home.type} className="py-2.5 px-3 text-right font-semibold text-gray-900">
                  {whole(home.saleable)}
                </td>
              ))}
              <td className="py-2.5 pl-3 text-right font-semibold text-gray-900">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-xs text-gray-500 leading-relaxed">
        All figures in sq. ft. Walls and the part that is not itemised are worked out from the
        five published areas; the rest are as published.
      </figcaption>
    </figure>
  );
}

/* ── 3. Why a listing shows a bigger "carpet area" ─────────────── */

export function ListingEquation() {
  const box = "flex-1 min-w-[7.5rem] rounded-lg border px-4 py-4 text-center";

  return (
    <div className="space-y-4">
      {homeAreas.map((home) => {
        const d = derive(home);
        return (
          <div key={home.type}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 mb-2">{home.type}</p>
            <div className="flex flex-wrap items-stretch gap-2 sm:gap-3">
              <div className={`${box} border-[#16323c] bg-white`}>
                <p className="text-xl md:text-2xl text-gray-900 leading-none">{number(home.carpet)}</p>
                <p className="mt-2 text-[11px] uppercase tracking-wider text-gray-500">RERA carpet</p>
              </div>
              <span aria-hidden="true" className="self-center text-2xl text-[#c8922a]">
                +
              </span>
              <div className={`${box} border-[#DCA54A] bg-[#fbf4e2]`}>
                <p className="text-xl md:text-2xl text-gray-900 leading-none">{number(home.balcony)}</p>
                <p className="mt-2 text-[11px] uppercase tracking-wider text-gray-500">Balcony</p>
              </div>
              <span aria-hidden="true" className="self-center text-2xl text-[#c8922a]">
                =
              </span>
              <div className={`${box} border-[#0d2029] bg-[#0d2029]`}>
                <p className="text-xl md:text-2xl text-white leading-none">
                  {whole(d.carpetPlusBalcony)}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-wider text-[#e6d2a0]">
                  “Carpet” on one portal
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <p className="text-xs text-gray-500">All figures in sq. ft.</p>
    </div>
  );
}

/* ── 4. One price, three ways to state the rate ───────────────── */

export function RateLadder({ rate = 1000 }: { rate?: number }) {
  const [typeOne, typeTwo] = homeAreas.map(derive);
  /* Rounded to the nearest ₹10, as a quoted rate would be. */
  const round10 = (value: number) => Math.round(value / 10) * 10;

  const rows = [
    { label: "Quoted on saleable area", value: rate, tone: "bg-[#e6dbc4]", about: false },
    {
      label: "Restated on carpet plus balcony",
      value: round10(rate * typeOne.onCarpetPlusBalcony),
      tone: "bg-[#DCA54A]",
      about: true,
    },
    {
      label: "Restated on RERA carpet",
      value: round10(rate * typeOne.onCarpet),
      tone: "bg-[#0d2029]",
      about: true,
    },
  ];
  const max = rows[rows.length - 1].value;

  return (
    <figure className="rounded-lg border border-[#e5dcc5] bg-white p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8922a] mb-6">
        Same home, same price: three ways to state the rate
      </p>
      <div className="space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-4 mb-1.5">
              <p className="text-sm text-gray-700">{row.label}</p>
              <p className="text-lg md:text-xl text-gray-900 whitespace-nowrap">
                {row.about ? "about " : ""}₹{whole(row.value)}
                <span className="text-xs text-gray-500"> / sq. ft.</span>
              </p>
            </div>
            <div className="h-3 w-full rounded-full bg-[#f3eee2] overflow-hidden">
              <div className={`h-full rounded-full ${row.tone}`} style={{ width: `${(row.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-6 text-xs text-gray-500 leading-relaxed">
        An illustration at ₹{whole(rate)} per sq. ft., not a quoted price. Worked on Type 1; on Type 2
        the RERA-carpet figure is about ₹{whole(round10(rate * typeTwo.onCarpet))}.
      </figcaption>
    </figure>
  );
}
