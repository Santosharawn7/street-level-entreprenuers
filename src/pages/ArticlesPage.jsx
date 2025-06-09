import React from 'react'

const ArticlesPage = () => {
    return (
      <div className="pt-20">
        <section className="py-20 bg-sle-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
                SLE Articles
              </h1>
              <p className="text-xl font-open-sans opacity-90">
                Insights, tips, and practical advice from our entrepreneurship experts
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-sle-navy mb-8 font-poppins">
                Featured Article
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-sle-navy mb-4 font-poppins">
                  Help! I Want to Start a Business – Where Do I Begin?
                </h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  Starting a business can feel overwhelming, but it doesn't have to be. Our latest article breaks down the essential first steps every entrepreneur should take, from validating your idea to creating a simple business plan that actually works.
                </p>
                <div className="mt-6">
                  <button className="inline-block bg-sle-gold hover:bg-sle-brown text-white px-6 py-3 rounded-md font-semibold font-nunito transition-colors">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ArticlesPage;
  