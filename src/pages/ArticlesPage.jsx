import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  FaEllipsisV,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";
import { FaXTwitter, FaShare } from "react-icons/fa6";
import { BiLinkAlt } from "react-icons/bi";

const articles = [
  {
    image: "https://static.wixstatic.com/media/4e524433745645e9afd7b1c733b383e5.jpg/v1/fill/w_1816,h_1212,fp_0.50_0.50,q_90,enc_avif,quality_auto/4e524433745645e9afd7b1c733b383e5.jpg",
    date: "Jul 18, 2024",
    tag: "Entrepreneurship",
    title: "Help! I Want to Start a Small Business – Where Do I Begin?",
    description: "Before you start a business, there a few key principles you should consider before starting.",
    url: "/post/help-i-want-to-start-a-business-where-do-i-begin"
  },
  {
    image: "https://static.wixstatic.com/media/b9418f76e1164c32a06f99d4bcb021b4.jpg/v1/fill/w_1816,h_1212,fp_0.50_0.50,q_90,enc_avif,quality_auto/b9418f76e1164c32a06f99d4bcb021b4.jpg",
    date: "Jul 18, 2024",
    tag: "Small Business",
    title: "The Most Common Mistakes When Starting Your Small Business",
    description: "Do you have all the right pieces in place for your small business to succeed?",
    url: "/post/the-most-common-mistakes-when-starting-your-small-business"
  },
  {
    image: "https://static.wixstatic.com/media/11062b_a1ea8c6152774fa79f7bd5758d0dcd54~mv2.jpg/v1/fill/w_1816,h_1212,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_a1ea8c6152774fa79f7bd5758d0dcd54~mv2.jpg",
    date: "Jul 18, 2024",
    tag: "Marketing",
    title: "Understanding the Marketing Concept at the “Street” Level",
    description: "Learn the different elements that will give you a systematic way to evaluate your business in relation to your competitors.",
    url: "/post/understanding-the-marketing-concept-at-the-street-level-1"
  },
  {
    image: "https://static.wixstatic.com/media/58b12b_0f573b7c9dbe46538dc1b4b61f459816~mv2.png/v1/fill/w_1816,h_1144,fp_0.50_0.50,q_95,enc_avif,quality_auto/58b12b_0f573b7c9dbe46538dc1b4b61f459816~mv2.png",
    date: "Jul 18, 2024",
    tag: "Entrepreneurship",
    title: "How to get your Business “Back on Track”",
    description: "You've started a business – now what? Here are some suggestions to help you get back on track.",
    url: "/post/how-to-get-your-business-back-on-track"
  }
];

const ArticlesPage = () => {
  const [showShareMenuIdx, setShowShareMenuIdx] = useState(null); // Step 1: popover menu idx
  const [showShareOptions, setShowShareOptions] = useState(false); // Step 2: modal
  const [selectedArticle, setSelectedArticle] = useState(null);

  const menuRef = useRef(null);
  const shareRef = useRef(null);

  // Outside click for popover
  useEffect(() => {
    if (showShareMenuIdx === null) return;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowShareMenuIdx(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showShareMenuIdx]);

  // Outside click for modal
  useEffect(() => {
    if (!showShareOptions) return;
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setShowShareOptions(false);
        setSelectedArticle(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showShareOptions]);

  const shareUrl = selectedArticle ? window.location.origin + selectedArticle.url : "";

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Article Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.map((art, idx) => (
              <Link
                to={art.url}
                key={art.url}
                className="bg-white !text-black rounded-xl shadow-md overflow-hidden flex flex-col relative transition hover:shadow-lg"
                // Prevent navigation when clicking the share UI
                onClick={e => {
                  if (showShareMenuIdx === idx || showShareOptions) {
                    e.preventDefault();
                  }
                }}
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-56 object-cover"
                  style={{ objectPosition: "center" }}
                />
                <div className="relative">
                  {/* Three Dots button */}
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      className="p-2 rounded-lg !bg-white hover:bg-gray-100 transition shadow"
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedArticle(art);
                        setShowShareMenuIdx(idx); // open popover
                      }}
                    >
                      <FaEllipsisV size={28} />
                    </button>
                    {/* Step 1: Popover Menu */}
                    {showShareMenuIdx === idx && (
                      <div
                        ref={menuRef}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30"
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <button
                          onClick={e => {
                            e.preventDefault(); // <--- prevent navigation!
                            e.stopPropagation();
                            setShowShareOptions(true); // open modal
                            setShowShareMenuIdx(null); // close popover
                          }}
                          className="flex items-center px-4 py-2 w-full text-left !bg-white hover:text-blue-500"
                        >
                          <FaShare className="mr-2" /> Share Post
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2: Share Options Modal */}
      {showShareOptions && selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={shareRef}
            className="bg-white p-6 rounded-lg text-center w-80"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <h3 className="text-lg !text-black font-semibold mb-4">Share Post</h3>
            <div className="flex justify-center gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Facebook"
                className="!text-white bg-[#4464A3] p-3 rounded-full"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener');
                  setShowShareOptions(false);
                  setSelectedArticle(null);
                }}
              >
                <FaFacebookF />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Twitter"
                className="!text-white bg-[#55ACEE] p-3 rounded-full"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener');
                  setShowShareOptions(false);
                  setSelectedArticle(null);
                }}
              >
                <FaXTwitter />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="!text-white bg-[#0077B5] p-3 rounded-full"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener');
                  setShowShareOptions(false);
                  setSelectedArticle(null);
                }}
              >
                <FaLinkedinIn />
              </a>
              <button
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigator.clipboard.writeText(shareUrl);
                  setShowShareOptions(false);
                  setSelectedArticle(null);
                  alert("Link copied to clipboard!");
                }}
                title="Copy Link"
                className="!text-white bg-black !p-3 !rounded-full"
              >
                <BiLinkAlt />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;
