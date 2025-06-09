import React from 'react'

const AboutPage = () => {
    return (
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-sle-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
                About Street Level Entrepreneur
              </h1>
              <p className="text-xl font-open-sans opacity-90">
                Helping small business owners and community leaders achieve their goals through simplified entrepreneurship principles
              </p>
            </div>
          </div>
        </section>
  
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-sle-navy mb-6 font-poppins">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 font-open-sans">
                    Street Level Entrepreneur was founded on the belief that entrepreneurship shouldn't be complicated. With more than 30 years of combined experience, we've worked with countless small business owners and community leaders who had great ideas but needed practical guidance.
                  </p>
                  <p className="text-lg text-gray-700 mb-4 font-open-sans">
                    We realized that traditional business consulting was often too complex and expensive for the people who needed it most. That's why we created Street Level Entrepreneur - to make entrepreneurship simple, accessible, and actionable for everyone.
                  </p>
                </div>
                <div>
                  <img
                    src="https://ext.same-assets.com/3112424916/2970008432.jpeg"
                    alt="Street Level Entrepreneur team"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* What Makes Us Different */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-sle-navy mb-12 text-center font-poppins">
                What Makes Us Different
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-sle-navy font-poppins">Simplified Approach</h3>
                  </div>
                  <p className="text-gray-700 font-open-sans">
                    We break down complex business concepts into easy-to-understand, actionable steps that anyone can follow.
                  </p>
                </div>
  
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-sle-navy font-poppins">Community Focus</h3>
                  </div>
                  <p className="text-gray-700 font-open-sans">
                    We understand the unique challenges faced by community-based businesses and grassroots organizations.
                  </p>
                </div>
  
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <h3 className="text-xl font-semibold text-sle-navy font-poppins">Affordable Solutions</h3>
                  </div>
                  <p className="text-gray-700 font-open-sans">
                    Our services are designed to be accessible to small businesses and communities with limited budgets.
                  </p>
                </div>
  
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-sle-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-sle-navy font-poppins">Proven Experience</h3>
                  </div>
                  <p className="text-gray-700 font-open-sans">
                    Over 30 years of combined experience helping entrepreneurs and communities achieve their goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-sle-navy mb-8 font-poppins">
                Our Mission
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-xl text-gray-700 font-open-sans leading-relaxed italic">
                  "To democratize entrepreneurship by providing simplified, practical tools and guidance that empower small business owners and community leaders to turn their ideas into successful, sustainable ventures."
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Are You a Street Level Entrepreneur? */}
        <section className="py-16 bg-sle-gold">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8 font-poppins">
                Are you a Street Level Entrepreneur?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-nunito">You might be if you:</h3>
                  <ul className="text-left space-y-2 font-open-sans">
                    <li>• Have a great business idea but don't know where to start</li>
                    <li>• Want to make a positive impact in your community</li>
                    <li>• Need practical guidance, not complex theories</li>
                    <li>• Value relationships over transactions</li>
                    <li>• Believe in sustainable, authentic growth</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-nunito">We can help you:</h3>
                  <ul className="text-left space-y-2 font-open-sans">
                    <li>• Develop a clear business strategy</li>
                    <li>• Create compelling business plans and proposals</li>
                    <li>• Build strong community partnerships</li>
                    <li>• Access funding and resources</li>
                    <li>• Turn your vision into reality</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-white text-sle-gold px-8 py-3 rounded-md font-semibold font-nunito hover:bg-gray-100 transition-colors"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default AboutPage;
  