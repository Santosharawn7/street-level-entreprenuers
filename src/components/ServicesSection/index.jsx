import React from 'react'

const ServicesSection = () => {
    const serviceGroups = [
      {
        icon: "https://ext.same-assets.com/3112424916/275185046.svg",
        services: [
          "Proposal Writing",
          "Business Plan Writing",
          "Strategic Plan Development"
        ]
      },
      {
        icon: "https://ext.same-assets.com/3112424916/2258727372.svg",
        services: [
          '"Street Level Canvas" Workshops',
          "Asset-Based-Community-Development (ABCD) Workshops",
          "One-on-One Coaching Support"
        ]
      },
      {
        icon: "https://ext.same-assets.com/3112424916/3065228542.svg",
        services: [
          "Sales Forecasting",
          "Sales & Marketing Strategy",
          "Development of Proposal Templates"
        ]
      }
    ];
  
    return (
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sle-navy mb-4 font-poppins">
              Our Products and Services
            </h2>
            <div className="flex justify-center mb-8">
              <img
                src="https://ext.same-assets.com/3112424916/275185046.svg"
                alt="decorative element"
                className="h-8"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {serviceGroups.map((group, index) => (
              <div key={group.icon} className="text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src={group.icon}
                    alt="service icon"
                    className="h-16 w-16"
                  />
                </div>
                <div className="space-y-3">
                  {group.services.map((service, serviceIndex) => (
                    <p key={`service-${service.replace(/\s+/g, '-').toLowerCase()}`} className="text-sle-navy font-nunito font-medium">
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center">
            <a
              href="#services"
              className="inline-block bg-sle-gold hover:bg-sle-brown text-white px-8 py-3 rounded-md font-semibold font-nunito transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  