import React from "react";

const STAGE_CARDS = [
  {
    title: "Idea Stage",
    bg: "bg-[#EDAE49]",
    text: "The birth of every business begins when you first identify a problem, then offer a viable, affordable solution.",
    tools: [
      "Brainstorming Tools",
      "Value Proposition Tools",
      "Mission, Vision, Objective Creation Tools",
      "Business Model Canvas",
    ],
    iconAlign: "items-end",
    textAlign: "text-left",
    corner: "rounded-[40px]",
  },
  {
    title: "Startup Stage",
    bg: "bg-[#6B9AC4]",
    text: "You have started to narrow down your business model to a few different options, and which have the greatest chance for success. Now you need to test them - by getting feedback from your consumers.",
    tools: [
      "Business Plan template",
      "Pitch Deck",
      "Minimum Viable Product Tool",
      "Sales funnel and forecast chart",
      "Financial Ratio Calculators",
      "Business Registration in Canada",
      "Trademark registration in Canada",
    ],
    icon: null,
    toolsRight: true,
    textAlign: "text-left",
    corner: "rounded-[40px]",
  },
  {
    title: "Growth Stage",
    bg: "bg-[#165F78]",
    text: "Your business is now starting to gain momentum, and customer growth is increasing rapidly. Your business is generating revenue and consistently gaining more customers. Your business reaches ‘breakeven’ point - the point where your business begins to make a profit.",
    tools: [
      "Business Plan template",
      "Strategic Plan template",
      "Operational Strategy template",
      "Financial Ratio Calculators",
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
    title: "Sustainability Stage",
    bg: "bg-[#002642]",
    text: "You have a solid team in place, and an established customer base. Sales and profits have reached an all-time high and you’ve amassed a wealth of information on the market. Sales may start to plateau or decline.",
    tools: [
      "Strategic Plan template (updated)",
      "Competitive Analysis (revised from business plan)",
      "Business Model Canvas / MVP (for new potential market expansion)",
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
    text: "Sales and profits have begun to steadily decline. You can try to diversify, sell the business, or close down.",
    tools: [
      "Brainstorming Tools",
      "Value Proposition Tools",
      "Mission, Vision, Objective Creation Tools",
      "Business Model Canvas",
    ],
    iconAlign: "items-end",
    textAlign: "text-left",
    corner: "rounded-[40px]",
  },
];

export default function BuinessToolsPage() {
  return (
    <div className=" pb-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-[#032944] text-white">
        <div className="max-w-6xl mx-auto  text-center">
          <h1 className="text-4xl md:!text-6xl font-bold font-poppins mb-4">
            Street-Level Tools for Entrepreneurs
          </h1>
        </div>
      </section>
      <div className="text-black text-center my-12">
        <h2 className="font-extrabold text-2xl md:text-5xl mb-6 font-poppins">
          Tools for each stage of the Business Life Cycle
        </h2>
        <div className="font-extrabold text-lg md:text-4xl font-open-sans max-w-5xl mx-auto leading-tight">
          Get the resources you need to grow your Business.
          <br className="hidden md:inline" />
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
