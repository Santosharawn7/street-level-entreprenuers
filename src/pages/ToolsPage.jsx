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
  width="180"
  height="180"
  viewBox="0 0 180 180"
  fill="none"
>
  <ellipse
    cx="90"
    cy="80"
    rx="60"
    ry="60"
    stroke="#111"
    stroke-width="4"
    fill="none"
  />
  <path
    d="M70 120 Q90 110 110 120"
    stroke="#111"
    stroke-width="4"
    fill="none"
  />
  <path
    d="M80 120 Q90 105 100 120"
    stroke="#111"
    stroke-width="4"
    fill="none"
  />
  <rect
    x="65"
    y="120"
    width="50"
    height="12"
    rx="6"
    stroke="#111"
    stroke-width="4"
    fill="none"
  />
  <rect
    x="70"
    y="132"
    width="40"
    height="10"
    rx="5"
    stroke="#111"
    stroke-width="4"
    fill="none"
  />
  <rect
    x="75"
    y="142"
    width="30"
    height="10"
    rx="5"
    stroke="#111"
    stroke-width="4"
    fill="none"
  />
  <path
    d="M85 152 Q90 160 95 152"
    stroke="#111"
    stroke-width="4"
    fill="none"
  />
  <line x1="90" y1="10" x2="90" y2="34" stroke="#111" stroke-width="4" stroke-linecap="round" />
  <line x1="31" y1="37" x2="49" y2="53" stroke="#111" stroke-width="4" stroke-linecap="round" />
  <line x1="10" y1="80" x2="34" y2="80" stroke="#111" stroke-width="4" stroke-linecap="round" />
  <line x1="31" y1="123" x2="49" y2="107" stroke="#111" stroke-width="4" stroke-linecap="round" />
  <line x1="149" y1="37" x2="131" y2="53" stroke="#111" stroke-width="4" stroke-linecap="round" />
  <line x1="170" y1="80" x2="146" y2="80" stroke="#111" stroke-width="4" stroke-linecap="round" />
  <line x1="149" y1="123" x2="131" y2="107" stroke="#111" stroke-width="4" stroke-linecap="round" />
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
      <svg width="110" height="70" viewBox="0 0 90 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="82" height="48" rx="7" stroke="#000" strokeWidth="4"/>
        <rect x="19" y="36" width="8" height="12" fill="#fff" stroke="#18647b" strokeWidth="2"/>
        <rect x="34" y="30" width="8" height="18" fill="#fff" stroke="#18647b" strokeWidth="2"/>
        <rect x="49" y="16" width="8" height="32" fill="#fff" stroke="#18647b" strokeWidth="2"/>
        <rect x="64" y="24" width="8" height="24" fill="#fff" stroke="#18647b" strokeWidth="2"/>
        <polyline points="21,40 37,34 53,20 69,28" fill="none" stroke="#fff" strokeWidth="3"/>
        <polyline points="21,40 37,34 53,20 69,28" fill="none" stroke="#222" strokeWidth="3"/>
        <circle cx="21" cy="40" r="2" fill="#18647b" />
        <circle cx="37" cy="34" r="2" fill="#18647b" />
        <circle cx="53" cy="20" r="2" fill="#18647b" />
        <circle cx="69" cy="28" r="2" fill="#18647b" />
      </svg>
    ),
    iconAlign: "items-end",
    textAlign: "text-center",
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
      <svg width="110" height="70" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="34" rx="4" fill="#3e74a0" stroke="#222" strokeWidth="3"/>
        <rect x="6" y="46" width="88" height="8" rx="2" fill="#92b2d5" stroke="#222" strokeWidth="3"/>
        <rect x="27" y="16" width="46" height="20" rx="2" fill="#fff" />
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
    Get the resources you need to make a difference in your<br className="hidden md:inline" /> Community.
  </div>
</div>

      {/* Stage Cards */}
      <div className="flex flex-col gap-10 mt-12 max-w-[1100px] mx-auto px-4">
        {STAGE_CARDS.map((stage, idx) => (
          <div
            key={stage.title}
            className={`${stage.bg} ${stage.corner} flex flex-col  md:flex-row justify-between p-10 md:p-12 ${stage.textWhite || "text-black"} shadow-md`}
            style={{ minHeight: 280 }}
          >
            <div className={`flex-1 flex flex-col justify-between ${stage.textAlign}`}>
              <div>
                <h2 className="text-3xl md:text-4xl text-center font-extrabold font-poppins mb-2">{stage.title}</h2>
                <p className="text-xl font-semibold mb-5 font-open-sans">{stage.text}</p>
              </div>
              <div className={`mt-5 ${stage.toolsRight ? "md:text-right md:items-end" : ""}`}>
                <span className="block font-bold text-2xl font-poppins mb-1">Recommended Tools</span>
                <ul className="mt-0">
                  {stage.tools.map((t, i) => (
                    <li
                      key={i}
                      className={`font-bold font-open-sans text-lg mb-1 ${stage.toolsRight ? "md:text-right" : ""}`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {stage.icon && (
              <div className={`flex flex-col justify-end ml-0 md:ml-12 mt-8 md:mt-0 ${stage.iconAlign || ""}`}>
                {stage.icon}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
