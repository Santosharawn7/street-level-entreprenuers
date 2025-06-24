import React, { useState, useRef } from "react";

// Social share URLs and icons
const SOCIALS = [
  {
    name: "Facebook",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#4667B2"/>
        <path d="M28.812 24H26v12h-4V24h-2v-4h2v-2c0-2.206 1.794-4 4-4h2v4h-2c-.552 0-1 .448-1 1v1h3.812l-.8 4z" fill="#fff"/>
      </svg>
    ),
    makeUrl: (url, title) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  },
  {
    name: "X",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#5CB3F8"/>
        <path d="M19.13 15h2.49l5.18 6.8 5.18-6.8h2.51L27.9 23l6.71 8.99h-2.49l-5.33-7-5.33 7h-2.5L24.1 23 19.13 15zm7.09 7.66l-2.2-2.9-2.18 2.9h4.38z" fill="#fff"/>
      </svg>
    ),
    makeUrl: (url, title) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  },
  {
    name: "LinkedIn",
    icon: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#0077B5"/>
        <path d="M17 19h4v12h-4zm2-2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM27 19c-2.21 0-4 1.79-4 4v8h4v-8c0-.55.45-1 1-1s1 .45 1 1v8h4v-8c0-2.21-1.79-4-4-4z" fill="#fff"/>
      </svg>
    ),
    makeUrl: (url, title) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  }
];

const articles = [
  {
    image: "https://static.wixstatic.com/media/4e524433745645e9afd7b1c733b383e5.jpg/v1/fill/w_1816,h_1212,fp_0.50_0.50,q_90,enc_avif,quality_auto/4e524433745645e9afd7b1c733b383e5.jpg",
    date: "Jul 18, 2024",
    tag: "Entrepreneurship",
    title: "Help! I Want to Start a Small Business – Where Do I Begin?",
    description: "Before you start a business, there a few key principles you should consider before starting.",
    url: "/articles/start-a-small-business"
  },
  {
    image: "https://static.wixstatic.com/media/b9418f76e1164c32a06f99d4bcb021b4.jpg/v1/fill/w_1816,h_1212,fp_0.50_0.50,q_90,enc_avif,quality_auto/b9418f76e1164c32a06f99d4bcb021b4.jpg",
    date: "Jul 18, 2024",
    tag: "Small Business",
    title: "The Most Common Mistakes When Starting Your Small Business",
    description: "Do you have all the right pieces in place for your small business to succeed?",
    url: "/articles/common-mistakes-small-business"
  },
  {
    image: "https://static.wixstatic.com/media/11062b_a1ea8c6152774fa79f7bd5758d0dcd54~mv2.jpg/v1/fill/w_1816,h_1212,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_a1ea8c6152774fa79f7bd5758d0dcd54~mv2.jpg",
    date: "Jul 18, 2024",
    tag: "Marketing",
    title: "Understanding the Marketing Concept at the “Street” Level",
    description: "Learn the different elements that will give you a systematic way to evaluate your business in relation to your competitors.",
    url: "/articles/marketing-concept-street-level"
  },
  {
    image: "https://static.wixstatic.com/media/58b12b_0f573b7c9dbe46538dc1b4b61f459816~mv2.png/v1/fill/w_1816,h_1144,fp_0.50_0.50,q_95,enc_avif,quality_auto/58b12b_0f573b7c9dbe46538dc1b4b61f459816~mv2.png",
    date: "Jul 18, 2024",
    tag: "Entrepreneurship",
    title: "How to get your Business “Back on Track”",
    description: "You've started a business – now what? Here are some suggestions to help you get back on track.",
    url: "/articles/back-on-track"
  }
];

const ArticlesPage = () => {
  const [menuIdx, setMenuIdx] = useState(null);
  const menuRef = useRef(null);

  // Close share menu on outside click
  React.useEffect(() => {
    if (menuIdx === null) return;
    const onClick = (e) => {
      if (!menuRef.current?.contains(e.target)) setMenuIdx(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuIdx]);

  // Copy link helper
  const handleCopyLink = (article) => {
    const shareUrl = window.location.origin + article.url;
    navigator.clipboard.writeText(shareUrl);
    setMenuIdx(null);
    alert("Link copied!");
  };

  // Social share helper
  const handleSocialShare = (article, social) => {
    const shareUrl = window.location.origin + article.url;
    const shareTitle = article.title;
    window.open(social.makeUrl(shareUrl, shareTitle), "_blank", "noopener");
    setMenuIdx(null);
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header Section */}

      {/* Article Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.map((art, idx) => (
              <div
                key={art.url}
                className="bg-white !text-black rounded-xl shadow-md overflow-hidden flex flex-col relative"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-56 object-cover"
                  style={{ objectPosition: "center" }}
                />
                <div className="relative">
                  {/* Three Dots, now inside the white card */}
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      className="p-2 rounded-lg !bg-white hover:bg-gray-100 transition shadow"
                      onClick={e => {
                        e.stopPropagation();
                        setMenuIdx(idx === menuIdx ? null : idx);
                      }}
                    >
                      <svg width={32} height={32} fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="4" r="1.5" />
                        <circle cx="10" cy="10" r="1.5" />
                        <circle cx="10" cy="16" r="1.5" />
                      </svg>
                    </button>
                    {/* Enlarged Share Popup */}
                    {menuIdx === idx && (
                      <div
                        ref={menuRef}
                        className="absolute right-0 mt-2 w-max bg-white border border-gray-200 rounded-2xl shadow-2xl py-8 px-2 flex flex-col items-center"
                        style={{ top: 44, zIndex: 50 }}
                      >
                        <div className="font-bold text-xl text-sle-navy mb-6 text-center">
                          Share Post
                        </div>
                        <div className="flex justify-center gap-7 mb-3">
                          {SOCIALS.map((social) => (
                            <button
                              key={social.name}
                              aria-label={`Share to ${social.name}`}
                              onClick={() => handleSocialShare(art, social)}
                              className="outline-none focus:ring-2 focus:ring-sle-gold"
                            >
                              {social.icon}
                            </button>
                          ))}
                          {/* Copy link icon */}
                          <button
                            aria-label="Copy Link"
                            onClick={() => handleCopyLink(art)}
                          >
                            <svg width={44} height={44} viewBox="0 0 48 48">
                              <circle cx="24" cy="24" r="24" fill="#393939"/>
                              <path d="M28 22h-8a4 4 0 0 0 0 8h8a4 4 0 0 0 0-8zm-8-2a6 6 0 1 1 0 12h-1a1 1 0 1 1 0-2h1a4 4 0 1 0 0-8zm8-2a1 1 0 0 1 0 2h-1a6 6 0 1 1 0-12h1a1 1 0 1 1 0 2h-1a4 4 0 1 0 0 8z" fill="#fff"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Date & Tag stacked */}
                    <div className="flex flex-col text-center items-center mb-4">
                      <span className="text-sm text-gray-800 font-medium">{art.date}</span>
                      <span className="text-base text-sle-gold font-semibold">{art.tag}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-poppins text-sle-navy">
                      {art.title}
                    </h3>
                    <p className="text-gray-700 font-open-sans mb-4 flex-1">
                      {art.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
