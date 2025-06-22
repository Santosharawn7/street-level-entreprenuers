import React from "react";

const STAGE_CARDS = [
  {
    title: "Idea Stage",
    bg: "bg-[#EDAE49]",
    text: "In this stage, members of a community notice an urgent need in their neighbourhood, and have a passion to address it.",
    tools: [
      "Asset Mapping",
      "Visioning Exercises",
      "Brainstorming Workshops",
      "Business Model Canvas",
    ],
    icon: (
      // Lightbulb SVG
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="28 19.5 144.1 161.2"
        width="200"
        height="200"
        stroke="#000"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g>
          <path d="M101 38.9c.8 0 1.4-.6 1.4-1.4V20.9c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v16.6c0 .8.7 1.4 1.4 1.4z" />
          <path d="M69.9 46.3c.3.4.7.7 1.2.7.2 0 .5-.1.7-.2.6-.4.9-1.2.5-1.9l-8.5-14.4c-.4-.7-1.2-.9-1.9-.5-.6.4-.9 1.2-.5 1.9l8.5 14.4z" />
          <path d="M46 93.2H29.4c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4H46c.8 0 1.4-.6 1.4-1.4-.1-.8-.7-1.4-1.4-1.4z" />
          <path d="M50 65.5l-15.3-6.7c-.7-.3-1.5 0-1.8.7s0 1.5.7 1.8L48.9 68c.2.1.4.1.5.1.5 0 1-.3 1.3-.8.3-.7 0-1.5-.7-1.8z" />
          <path d="M128.2 46.7c.2.1.5.2.7.2.5 0 .9-.2 1.2-.7l8.5-14.4c.4-.6.2-1.5-.5-1.9-.6-.4-1.5-.2-1.9.5l-8.5 14.4c-.4.7-.2 1.5.5 1.9z" />
          <path d="M170.6 93.2H154c-.7 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4h16.7c.7 0 1.4-.6 1.4-1.4-.1-.7-.7-1.4-1.5-1.4z" />
          <path d="M167 59.6c-.3-.7-1.1-1-1.8-.7L150 65.6c-.7.3-1 1.1-.7 1.8.2.5.7.8 1.3.8.2 0 .4 0 .5-.1l15.3-6.7c.6-.4.9-1.2.6-1.8z" />
          <path d="M99.4 52.7c-21.8 0-39.6 17.7-39.6 39.6 0 11.9 5.3 23 14.4 30.5 4.2 4.3 6.9 9.9 6.9 15.9h-.2v12.5c0 6.4 3.1 12 7.9 15.4.5 6.6 5.3 14.1 11.2 14.1 6.2 0 11.2-8.2 11.3-15.1 4.2-3.4 6.8-8.6 6.8-14.5v-11.6h.2v-.9c0-6.6 2.1-12.8 7.2-16.9l2.7-2.4c6.9-7.3 11-16.9 11-27-.2-21.9-18-39.6-39.8-39.6z" />
          <path d="M99.9 177.8c-3.8 0-7.2-4.9-8.2-9.7 2.3 1 4.8 1.6 7.6 1.6 3.3 0 6.4-.8 9-2.3-.9 5.1-4.4 10.4-8.4 10.4z" />
          <path d="M99.2 167c-5.2 0-9.8-2.5-12.7-6.3h25.3c-2.8 3.9-7.4 6.3-12.6 6.3z" />
          <path d="M115.3 151.1c0 2.7-.7 5.3-1.9 7.6H85.5v.6c-1.4-2.4-2.3-5.2-2.3-8.2v-1.3h31.9l.2 1.3z" />
          <path d="M115.3 147.8h-32v-8.2h31.9l.1 8.2z" />
          <path d="M96.2 116c.3-.8.6-1.9.7-2.1l.4-.6c1-1.5 4.3-1.5 5.3 0l.4.6c.1.2.4 1.3.7 2.1 1.3 4.2 2.1 6.5 3.9 6.4 1.2-.1 2.2-.4 3.1-.6.6-.2 1.5-.4 1.6-.3 0 .1 0 .2-.1.4l-5.1 15.5H92.7l-5.1-15.5c-.1-.2-.1-.4-.2-.5.3-.1 1.1.2 1.7.3.9.2 2 .5 3.1.6 1.9.2 2.7-2.1 4-6.3z" />
          <path d="M82.7 91c-1.1-3.2 2.3-6 4.9-6H112c2.7 0 5.9 2.2 5 6l-9.6 27.6c-.4-1.1-.9-2.6-1.1-3.5-.5-1.6-.7-2.3-1-2.8l-.4-.6c-1-1.5-2.8-2.5-4.9-2.5s-3.9.9-4.9 2.5l-.4.6c-.3.4-.5 1.2-1 2.8-.3.9-.8 2.5-1.2 3.6L82.7 91z" />
          <path d="M124.1 119.7l-4.3 3.5c-3.9 4.2-4.1 8.4-4.4 14.2H110l4.8-14.6c.2-.6.2-1.1.2-1.6-.1-.9-.5-1.5-1.1-2-1.1-.7-2.4-.4-3.8 0l9.8-28.7c1.3-4.3-3.6-8.2-7.9-8.2H87.6c-4.2 0-8.7 4.3-7.7 8.9l9.6 27.9c-1.3-.3-2.6-.6-3.6.1-.6.4-1 1.1-1.1 1.9-.1.7 0 1.2.2 1.7l4.8 14.6h-6.5c-.3-6.2-2.9-12.1-7.4-16.5-8.6-7.1-13.5-17.4-13.5-28.5 0-20.3 16.6-36.9 36.9-36.9s36.9 16.5 36.9 36.9c.1 10.3-4.4 20.3-12.1 27.3z" />
        </g>
      </svg>
    ),
    iconAlign: "items-end",
    textAlign: "text-left",
    corner: "rounded-[40px]",
  },
  {
    title: "Startup Stage",
    bg: "bg-[#6B9AC4]",
    text: "The work is starting to take the shape and feel of a project. Although there is some distribution of responsibilities among the team, at this point there are just a few persons who are truly dedicated to the work, and handle most of the tasks.",
    tools: [
      "Strategic Planning",
      "Proposal writing skills",
      "Visioning Exercises",
      "Financial management tools",
    ],
    icon: null,
    toolsRight: true,
    textAlign: "text-left",
    corner: "rounded-[40px]",
  },
  {
    title: "Growth Stage",
    bg: "bg-[#165F78]",
    text: "In the growth base, the group has made multiple applications, and has successfully received funding! There is a feeling of excitement in the air. You feel validated for all the hard work you’ve put in up to this point.",
    tools: [
      "Strategic planning",
      "Financial Reporting",
      "Theory of Change design strategies",
      "Grant management and reporting strategies",
      "Proposal Application Template",
      "Boards of Director Training",
      "Volunteer management strategies",
    ],
    icon: (
      // Chart SVG
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="43.5 62 113 76.001"
        viewBox="43.5 62 113 76.001"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            d="M153.128 131.287H127.49c.007-.065.021-.129.021-.196V86.632c0-.061-.013-2.362-.019-2.421l-3.872 1.901v44.979c0 .067.013.131.021.196h-14.004c.007-.062.02-.122.02-.185V92.908l-3.89 1.91v36.283c0 .064.013.123.02.185H91.802V101.28l-.653.32a3.377 3.377 0 0 1-3.237-.146v29.833H72.599V95.213l-3.89 2.222v33.852H50.245v-22.324l.554-1.235.226-2.402.104-3.283-.883-.82V65.357c0-1.854-1.51-3.357-3.373-3.357S43.5 63.503 43.5 65.357v69.287a3.365 3.365 0 0 0 3.373 3.357h106.255c1.863 0 3.372-1.503 3.372-3.357s-1.51-3.357-3.372-3.357z"
            fill="#000000"
            data-color="1"
          ></path>
          <path
            d="M146.656 72.912a3.373 3.373 0 0 0-2.5-1.727l-16.769-2.327a3.374 3.374 0 0 0-3.25 1.43 3.342 3.342 0 0 0-.158 3.534l3.029 5.383-33.93 16.66.119-13.345a3.352 3.352 0 0 0-1.669-2.926 3.383 3.383 0 0 0-3.382-.014l-37.901 21.644v7.74L68.709 98.42l3.89-2.222L86.4 88.316l-.115 12.942a3.352 3.352 0 0 0 1.579 2.872c.015.01.033.013.048.022a3.377 3.377 0 0 0 3.237.146l.653-.32 13.964-6.856 3.89-1.91 13.964-6.856 3.872-1.901 2.817-1.383 3.38 6.006a3.374 3.374 0 0 0 3.062 1.714 3.374 3.374 0 0 0 2.932-1.925l7.06-14.927a3.35 3.35 0 0 0-.087-3.028zm-10.286 9.194l-.005-.009.012-.006-.007.015z"
            fill="#FFFFFF"
            data-color="2"
          ></path>
        </g>
      </svg>
    ),
    iconAlign: "items-end",
    textAlign: "text-left",
    textWhite: "text-white",
    corner: "rounded-[40px]",
  },
  {
    title: "Maturity Stage",
    bg: "bg-[#002642]",
    text: "The organization is operating at its maximum level of efficiency. There is a steady stream of projects being managed, with a core group of staff members, gaining significant experience on each subsequent initiative.",
    tools: [
      "Tools to consider during this stage includes:",
      "Visioning tools",
      "Strategic Planning tools",
      "Theory of Change development tools",
      "Tools to review operational efficiency",
    ],
    icon: null,
    toolsRight: true,
    textAlign: "text-left",
    textWhite: "text-white",
    corner: "rounded-[40px]",
  },
  {
    title: "Succession (Decline) Stage",
    bg: "bg-[#EDAE49]",
    text: "The work in communities have started to lose its impact. Activities have strayed away from the original mission and vision. The group may also be struggling to gain additional funding, despite their best efforts.",
    tools: [
      "Legal Advice for Transfer of Assets or Closure",
      "Strategic Planning",
    ],
    icon: (
      // Laptop SVG
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="20 50.7 160 95.1"
        width="200"
        height="200"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          {/* Laptop screen */}
          <path d="M151.9 56.4v78.2H48.1V56.4h103.8z" fill="#192a88" />

          {/* Laptop border and keyboard */}
          <path
            d="M155.8 132V50.7H44.2V132L20 140.3v5.5h160v-5.5l-24.2-8.3zm-7.5-.1H51.7V59.1h96.6v72.8z"
            fill="#6B9AC4"
          />
        </g>
      </svg>
    ),
    iconAlign: "items-end",
    textAlign: "text-left",
    corner: "rounded-[40px]",
  },
];

export default function ToolsPage() {
  return (
    <div className=" pb-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-[#032944] text-white">
        <div className="max-w-6xl mx-auto  text-center">
          <h1 className="text-4xl md:!text-7xl font-bold font-poppins mb-4">
            Street-Level Tools for Community Leaders
          </h1>
        </div>
      </section>
      <div className="text-black text-center my-12">
        <h2 className="font-extrabold text-2xl md:text-6xl mb-4 font-poppins">
          Tools for each stage of the Nonprofit Life Cycle
        </h2>
        <div className="font-extrabold text-lg md:text-4xl font-open-sans max-w-5xl mx-auto leading-tight">
          Get the resources you need to make a difference in your
          <br className="hidden md:inline" /> Community.
        </div>
      </div>

      {/* Stage Cards */}
      <div className="flex flex-col gap-10 mt-12 max-w-[1100px] mx-auto px-4">
        {STAGE_CARDS.map((stage, idx) => (
          <div
            key={stage.title}
            className={`${stage.bg} ${
              stage.corner
            } flex flex-col  md:flex-row justify-between p-10 md:p-12 ${
              stage.textWhite || "text-black"
            } shadow-md`}
            style={{ minHeight: 280 }}
          >
            <div
              className={`flex-1 flex flex-col justify-between ${stage.textAlign}`}
            >
              <div>
                <h2 className="text-3xl md:text-5xl text-center font-extrabold font-poppins mb-6">
                  {stage.title}
                </h2>
                <p className="text-2xl font-semibold mb-5 font-open-sans">
                  {stage.text}
                </p>
              </div>
              <div
                className={`mt-5 ${
                  stage.toolsRight ? "md:text-right md:items-end" : ""
                }`}
              >
                <span className="block font-extrabold text-4xl font-poppins mb-6">
                  Recommended Tools
                </span>
                <ul className="mt-0">
                  {stage.tools.map((t, i) => (
                    <li
                      key={i}
                      className={`font-bold font-open-sans text-2xl mb-1 ${
                        stage.toolsRight ? "md:text-right" : ""
                      }`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {stage.icon && (
              <div
                className={`flex flex-col justify-end ml-0 md:ml-12 mt-8 md:mt-0 ${
                  stage.iconAlign || ""
                }`}
              >
                {stage.icon}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
