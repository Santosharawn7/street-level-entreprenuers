import React from 'react';

const ServicesSection = () => {
  const serviceGroups = [
    {
      icon: "https://ext.same-assets.com/3112424916/275185046.svg", // Paper icon
      services: [
        "Proposal Writing",
        "Business Plan Writing",
        "Strategic Plan Development"
      ]
    },
    {
      icon: "https://ext.same-assets.com/3112424916/2258727372.svg", // Gear icon
      services: [
        '"Street Level Canvas" Workshops',
        "Asset-Based-Community-Development (ABCD) Workshops",
        "One-on-One Coaching Support"
      ]
    },
    {
      icon: "https://ext.same-assets.com/3112424916/3065228542.svg", // Chart icon
      services: [
        "Sales Forecasting",
        "Sales & Marketing Strategy",
        "Development of Proposal Templates"
      ]
    }
  ];

  return (
    <section
      id="services"
      className="py-20"
      style={{
        background: '#efb24c',
        fontFamily: "'Poppins', Arial, sans-serif",
        minHeight: 560
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-center text-4xl font-bold mb-14"
          style={{ color: '#12283a' }}
        >
          Our Products and Services
        </h2>

        <div
          className="flex flex-col md:flex-row gap-14 md:gap-2 justify-center mb-16"
        >
          {serviceGroups.map((group, index) => (
            <div
              key={group.icon}
              className="flex-1 flex flex-col items-center justify-start min-w-[280px]"
            >
              <div
                className="mb-8"
                style={{
                  background: 'transparent',
                  borderRadius: '50%',
                  width: 70,
                  height: 70,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={group.icon}
                  alt="service icon"
                  style={{
                    filter: 'invert(1) brightness(10)', // This makes ANY SVG icon white!
                    width: 60,
                    height: 60,
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="space-y-4">
                {group.services.map(service => (
                  <p
                    key={service}
                    className="text-lg font-bold text-center"
                    style={{
                      color: '#12283a',
                      fontFamily: "'Poppins', Arial, sans-serif",
                      marginBottom: 0
                    }}
                  >
                    {service}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/services"
            className="px-8 py-3 font-bold rounded-none text-lg transition"
            style={{
              color: '#12283a',
              border: '3px solid #12283a',
              background: 'transparent',
              fontFamily: "'Poppins', Arial, sans-serif"
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
