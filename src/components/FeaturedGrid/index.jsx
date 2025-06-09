import React from 'react'

const FeaturedGrid = () => {
    const featuredItems = [
      {
        image: "https://ext.same-assets.com/3112424916/2467031915.jpeg",
        category: "Articles",
        subtitle: "Feature Article",
        title: "Help! I Want to Start a Business – Where Do I Begin?",
        link: "#articles"
      },
      {
        image: "https://ext.same-assets.com/3112424916/1421138269.jpeg",
        category: "Tools",
        subtitle: "Easy to use tools",
        title: "More than 20 years' experience working with entrepreneurs",
        link: "#tools"
      },
      {
        image: "https://ext.same-assets.com/3112424916/2970008432.jpeg",
        category: "Information",
        subtitle: "Are you a Street Level Entrepreneur?",
        title: "Find out what it takes to make THE CUT!",
        link: "#about"
      },
      {
        image: "https://ext.same-assets.com/3112424916/3299657963.jpeg",
        category: "Information",
        subtitle: "Benefits",
        title: "Why should you work with Street Level Entrepreneur?",
        link: "#about"
      },
      {
        image: "https://ext.same-assets.com/3112424916/4026111487.jpeg",
        category: "Services",
        subtitle: "1-on-1 coaching support",
        title: "Easy to use seminars and effective growth strategies",
        link: "#services"
      },
      {
        image: "https://ext.same-assets.com/3112424916/3001859566.jpeg",
        category: "Resources",
        subtitle: "Street Level Entrepreneur tools",
        title: "Tips and tricks to help get you started",
        link: "#tools"
      }
    ];
  
    return (
      <section id="tools" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={`featured-${item.category}-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold text-sle-gold mb-1 font-nunito">
                      {item.category}
                    </p>
                    <p className="text-xs opacity-90 mb-2 font-open-sans">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-sle-navy mb-3 font-poppins leading-tight">
                    {item.title}
                  </h3>
                  <a
                    href={item.link}
                    className="text-sle-gold hover:text-sle-brown transition-colors font-medium text-sm font-nunito"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedGrid;
  