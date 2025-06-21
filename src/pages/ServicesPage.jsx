import React from "react";
import GetStartedSection from "../components/GetStarted";

// Heroicons/Feather icons CDN or local SVGs (adjust per your project setup)
const ICONS = {
  proposal: (
    <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="black" />
      <path d="M8 2v4M16 2v4M4 10h16" stroke="black" />
      <path d="M9 14h6M9 18h4" stroke="black" />
    </svg>
  ),
  writing: (
    <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M12 20h9" stroke="black" />
      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5l-4 1 1-4L16.5 3.5z" stroke="black" />
    </svg>
  ),
  canvas: (
    <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="black" />
      <path d="M16 3v4M8 3v4M3 11h18" stroke="black" />
    </svg>
  ),
  strategic: (
    <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="black" />
      <path d="M12 6v6l4 2" stroke="black" />
    </svg>
  ),
  sales: (
    <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M3 17v2a2 2 0 0 0 2 2h2" stroke="black" />
      <path d="M17 21h2a2 2 0 0 0 2-2v-2" stroke="black" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" stroke="black" />
      <path d="M7 3H5a2 2 0 0 0-2 2v2" stroke="black" />
      <rect width="8" height="8" x="8" y="8" stroke="black" />
    </svg>
  ),
  coaching: (
    <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4" stroke="black" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" stroke="black" />
    </svg>
  ),
  abcd: (
    <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="black" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="black" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="black" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="black" />
    </svg>
  ),
  more: (
    <svg className="w-14 h-14 mx-auto mb-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="black" />
      <path d="M8 12h8" stroke="black" />
    </svg>
  ),
};

const SERVICES = [
  {
    icon: ICONS.proposal,
    title: "Proposal Applications",
    text: (
      <>
        Writing proposals can be time-consuming, and even scary, without employing some useful tactics. Our Proposal Application Starter Package, you get the tools you need to write effective proposals and improve your success rate.
        <br />
        <br />
        • Own a Small Business and want to apply for grant funding?<br />
        • Running a Non-Profit Organization and your project funds are running low?<br />
        We can help.
      </>
    ),
  },
  {
    icon: ICONS.writing,
    title: "Business Plan Writing",
    text: (
      <>
        One of the most important tools for any startup business is how to write a business plan effectively. In essence, it is a “roadmap” for a lender, an investor and even a supplier looking to understand what you will offer, and how you will provide your product or service.
        <br />
        <br />
        An effective business plan balances creativity and solid financial planning. At SLE, we work closely with our clients to create a plan suited to your individual needs.
      </>
    ),
  },
  {
    icon: ICONS.canvas,
    title: '"Street Level Canvas" Workshops',
    text: (
      <>
        These workshops are Strategic Planning sessions that utilize a tool called the “Street-Level Canvas”.<br /><br />
        This simplified version of the traditional Business Model Canvas is an effective tool for rapidly outlining your business model, and measuring your efforts of thinking and acting as just test different markets and/or customers.
      </>
    ),
  },
  {
    icon: ICONS.strategic,
    title: "Strategic Plan Development",
    text: (
      <>
        The Strategic Planning process one of the most important steps toward the development and retention of any business model. A strategic plan helps entrepreneurs and community development practitioners alike to formulate a coherent rationale and methodology in the operationalization of all activities. With over 20 years’ experience developing strategic plans, our team of experts can guide your business to the next stage of its development.
      </>
    ),
  },
  {
    icon: ICONS.sales,
    title: "Sales & Marketing Strategy Development",
    text: (
      <>
        Entrepreneurs must have a solid understanding of their market potential namely, who their customers are, how to reach them, and how to grow your customer base. Business owners must have a firm grasp of sales and marketing tools, and how to use them. We can get your company to the next level. SLE’s experts have more than 30 years combined experience and created marketing strategies for hundreds of small businesses.
      </>
    ),
  },
  {
    icon: ICONS.coaching,
    title: "Individualized Coaching Support",
    text: (
      <>
        SLE specializes in providing customized support to entrepreneurs and community development practitioners to support the achievement of their goals and objectives.
        <br />
        <br />
        With more than 20 years experience working with small businesses and grassroots organizations, SLE understands the challenges in making the idea become a reality. Let our team of experts support your next project towards becoming a success.
      </>
    ),
  },
  {
    icon: ICONS.abcd,
    title: "Asset-Based-Community-Development (ABCD) Workshops",
    text: (
      <>
        For grassroots organizations working in communities, the ABCD methodology is an effective approach to meet local needs. ABCD strategies focus on identifying the strengths of the community, as well as the skills and knowledge of residents, in order to create positive change. ABCD strategies help to mobilize the resources and assets found within communities, to focus on improving the lives of local residents.
      </>
    ),
  },
  {
    icon: ICONS.more,
    title: "+ more",
    text: (
      <>
        Speak to us about other services, tools, and opportunities that may be of help to your small business!
      </>
    ),
  },
];

const ServicesPage = () => (
  <div className="bg-white min-h-screen">
    {/* Header Image */}
    <div
      className="w-full h-44 md:h-64 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/11062b_ed1bf50ec48d48abbf5a53804a9bc736~mv2.jpg/v1/fill/w_2560,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_ed1bf50ec48d48abbf5a53804a9bc736~mv2.jpg')",
      }}
    />
    {/* Section Title */}
    <div className="max-w-3xl mx-auto text-center mt-12">
      <h1 className="text-4xl md:text-6xl text-black font-bold text-sle-navy mb-4 font-poppins">Our Services</h1>
      <p className="text-xl md:text-2xl text-gray-800 font-open-sans mb-8">
        Street Level Entrepreneur offers a suite of customizable products and services that can assist the entrepreneur, or the community development practitioner.
      </p>
    </div>
    {/* Service Cards */}
    <section className="max-w-7xl mx-auto md:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 pb-16">
  {SERVICES.map((service, i) => (
    <div
      key={service.title}
      className="bg-white text-black px-4 py-10 flex flex-col items-center text-center"
    >
      {service.icon}
      {/* Title as its own flex container */}
      <div className="flex flex-col justify-center items-center mb-6 w-full">
        <h3 className="text-2xl font-bold text-sle-navy font-poppins">{service.title}</h3>
      </div>
      {/* Text as its own flex container */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="text-lg md:text-xl text-gray-800 font-open-sans">{service.text}</div>
      </div>
    </div>
  ))}
</section>
<GetStartedSection/>


  </div>
);

export default ServicesPage;
