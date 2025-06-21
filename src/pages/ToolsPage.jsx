import React from "react";

const STAGE_CARDS = [
  {
    title: "Idea Stage",
    bg: "bg-[#efb452]",
    text: "In this stage, members of a community notice an urgent need in their neighbourhood, and have a passion to address it.",
    tools: [
      "Asset Mapping",
      "Visioning Exercises",
      "Brainstorming Workshops",
      "Business Model Canvas",
    ],
    icon: (
      // Lightbulb SVG
      <svg width="90" height="110" viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <ellipse cx="35" cy="55" rx="25" ry="28" stroke="#222" strokeWidth="3"/>
          <path d="M35 83v-8" stroke="#222" strokeWidth="3" strokeLinecap="round"/>
          <path d="M29 87h12" stroke="#222" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 83c0 2 1 4 5 4s5-2 5-4" stroke="#222" strokeWidth="2"/>
          <circle cx="35" cy="56" r="12" fill="#efb452" stroke="#222" strokeWidth="2"/>
          <path d="M35 24v-9" stroke="#efb452" strokeWidth="3" strokeLinecap="round"/>
          <path d="M57 55h10" stroke="#efb452" strokeWidth="3" strokeLinecap="round"/>
          <path d="M13 55H3" stroke="#efb452" strokeWidth="3" strokeLinecap="round"/>
          <path d="M53.5 37.5l6.5-6.5" stroke="#efb452" strokeWidth="3" strokeLinecap="round"/>
          <path d="M16.5 37.5l-6.5-6.5" stroke="#efb452" strokeWidth="3" strokeLinecap="round"/>
        </g>
      </svg>
    ),
    iconAlign: "items-end",
    textAlign: "text-left",
    corner: "rounded-[40px]",
  },
  {
    title: "Startup Stage",
    bg: "bg-[#7ea3c6]",
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
    bg: "bg-[#18647b]",
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
    bg: "bg-[#022943]",
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
    bg: "bg-[#efb452]",
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
    <div className="pt-16 pb-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 bg-[#15334e] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins mb-4">
            Street-Level Tools for Community Leaders
          </h1>
          <p className="text-2xl md:text-2xl font-bold mb-3">
            Tools for each stage of the Nonprofit Life Cycle
          </p>
          <div className="text-lg md:text-xl font-open-sans font-medium">
            Get the resources you need to make a difference in your Community.
          </div>
        </div>
      </section>
      {/* Stage Cards */}
      <div className="flex flex-col gap-10 mt-12 max-w-[1100px] mx-auto px-4">
        {STAGE_CARDS.map((stage, idx) => (
          <div
            key={stage.title}
            className={`${stage.bg} ${stage.corner} flex flex-col md:flex-row justify-between p-10 md:p-12 ${stage.textWhite || "text-black"} shadow-md`}
            style={{ minHeight: 280 }}
          >
            <div className={`flex-1 flex flex-col justify-between ${stage.textAlign}`}>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold font-poppins mb-2">{stage.title}</h2>
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
