import React from 'react'

const Testimonial = () => {
    return (
      <section className="relative py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://ext.same-assets.com/3112424916/2204060336.jpeg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
  
        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto text-sle-gold mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
  
            <blockquote className="text-xl md:text-2xl font-open-sans leading-relaxed mb-8">
              "I couldn't have launched my catering business without the amazing business plan created by Richard. His strategic vision and attention to detail made all the difference. Not only did he lay out a clear roadmap for success, but Richard also brought a fresh perspective to the table. Thanks you Richard for your expertise, I'm confidently serving up success on a silver platter. Cheers!"
            </blockquote>
  
            <div className="text-sle-gold font-semibold text-lg font-nunito">
              Tanya Marriott
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonial;
  