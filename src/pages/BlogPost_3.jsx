import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegSmile,
  FaImage,
  FaVideo,
  FaEllipsisV,
} from "react-icons/fa";
import { FaXTwitter, FaShare } from "react-icons/fa6";
import { BiLinkAlt } from "react-icons/bi";
import EmojiPicker from "emoji-picker-react";

const MartketingConceptBlog = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const shareRef = useRef();
  const [comment, setComment] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const postUrl = `${window.location.origin}/post/understanding-the-marketing-concept-at-the-street-level-1`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setShowShareOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      alert("Link copied to clipboard!");
    } catch (err) {
      alert("Failed to copy the link.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setComment((prev) => prev + emojiObject.emoji);
  };

  const handleSubmit = () => {
    alert("Comment submitted: " + comment);
    setComment("");
    setImagePreview(null);
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      postUrl
    )}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      postUrl
    )}`,
  };

  return (
    <div className="bg-white text-black min-h-screen px-4 py-12 max-w-4xl mx-auto font-sans relative">
      <div className="absolute top-12 right-1 bg-white">
        <button
          onClick={() => setShowShareMenu(!showShareMenu)}
          className="!bg-white text-black text-xl"
        >
          <FaEllipsisV />
        </button>

        {showShareMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
            <button
              onClick={() => {
                setShowShareOptions(true);
                setShowShareMenu(false);
              }}
              className="flex items-center px-4 py-2 w-full text-left !bg-white hover:text-blue-500"
            >
              <FaShare className="mr-2" /> Share Post
            </button>
          </div>
        )}
      </div>

      {/* Share Options Modal */}
      {showShareOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div
            ref={shareRef}
            className="bg-white p-6 rounded-lg text-center w-80"
          >
            <h3 className="text-lg font-semibold mb-4">Share Post</h3>
            <div className="flex justify-center gap-4">
              <a
                href={shareUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Facebook"
                className="!text-white bg-[#4464A3] p-3 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Twitter"
                className="!text-white bg-[#55ACEE] p-3 rounded-full"
              >
                <FaXTwitter />
              </a>
              <a
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                className="!text-white bg-[#0077B5] p-3 rounded-full"
              >
                <FaLinkedinIn />
              </a>
              <button
                onClick={handleCopyLink}
                title="Copy Link"
                className="!text-white bg-black !p-3 !rounded-full"
              >
                <BiLinkAlt />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Section */}
      <p className="text-sm text-gray-900 mb-6">Jul 18, 2024</p>
      <h1 className="text-4xl font-bold leading-tight mb-6">
        Understanding the Marketing Concept at the “Street” Level
      </h1>

      <p className="mb-6">
        The Marketing “Mix” is an extremely useful tool that gives the
        entrepreneur the essential pieces necessary to market your new business.
        Simply stated, it addresses the who, what, where, when, how and why for
        your business.
      </p>

      <p className="mb-8">
        The concept was originally developed in 1960, by professor E. Jerome
        McCarthy in a book entitled Basic Marketing: A Managerial Approach. The
        Marketing Mix can be defined as:
      </p>

      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-10">
        <p className="font-semibold">
          “...the actions a company takes to market its product(s) and/or
          service(s). Typically, it acts as a framework for breaking down the
          four key components of marketing — product, price, place, and
          promotion”.
        </p>
      </div>

      <p className="mb-4">
        This approach provides a systematic method to connect with your target
        consumer and understand your interaction as a business with them. Each
        time an adjustment is made to one element of the marketing mix, you can
        gain valuable insights on consumer interests, motivations and desires.
        These elements also give you a systematic way to evaluate your business
        in relation to your competitors.
      </p>

      <p className="mb-6">
        The typical Marketing Mix (originally called the 4 P’s) consists of the
        following components:
      </p>

      <h2 className="text-xl font-bold mb-2">Product</h2>
      <p className="mb-8">
        What is the item (good or service that you’re trying to sell?) what are
        the features and benefits? How do you KNOW anyone wants this product?
        (Demand) And who else sells a product similar to yours in the
        marketplace.
      </p>

      <h2 className="text-xl font-bold mb-2">Price</h2>
      <p className="mb-8">
        What value is your product or service worth? And what is the ‘perceived
        value’ in the marketplace? Do you know the true cost to provide this
        good or service, including warranties, shipping, and any add-ons? How
        does your price compare to others? (cost versus benefit)
      </p>

      <h2 className="text-xl font-bold mb-2">Promotion</h2>
      <p className="mb-8">
        How will you tell your prospective customers about your product? What is
        the best method to reach them? What strategies will you use to stand out
        against your competitors?
      </p>

      <h2 className="text-xl font-bold mb-2">Place (Distribution)</h2>
      <p className="mb-8">
        How will your customers receive your product? There are many platforms
        to assist with this now (ie Amazon, Walmart, Wayfair), making
        distribution easier than ever. Which method is the most cost effective
        for your business? Have you considered returns, and how this aspect is
        handled?
      </p>

      <h2 className="text-xl font-bold mb-2">A ‘Fifth P’?</h2>
      <p className="mb-8">
        Over the past few decades, marketers have begun to emphasize an often
        overlooked but important fifth “P” - People - to the marketing mix.
        People can be viewed as internal - your staff, and how they work
        together as a team - and external - consumers, their attitudes, beliefs
        and other psychosocial factors that connect someone to a product or
        service. External can also include suppliers, who contribute to the
        overall finished product, and partners, who may assist you to get your
        product to market.
      </p>

      <p className="font-bold bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        Don’t expect to get your Mix right the first time. Experiment with the
        various elements to find what works best for you. Using the marketing
        mix is one of the most important steps in taking your business to the
        next level.
      </p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-bold mb-6">
        How to use the 4 P’s at Street Level
      </h2>
      <p className="mb-4">
        As an example, imagine what happens when you adjust the pricing of your
        good or service. If you raise your price, and sales subsequently go
        down, your clients may be telling you that your offering is considered
        ‘low value’, or that you have surpassed what they consider their “price
        point” for this type of product. However, if sales go up, your customers
        may be telling you that you may have been undervaluing your product. Try
        this experiment with each aspect of the marketing mix; speak to your
        customers, and get their feedback when you implement each variation.
        Learning the various interactions between your product/service and your
        consumers, using each element of the marketing mix will give you
        invaluable insights that will help grow your business.
      </p>

      {/* Tags */}
      <div className="text-sm text-gray-600 space-x-3 mb-10">
        <span className="underline cursor-pointer">Marketing</span>
        <span className="underline cursor-pointer">Advice</span>
        <span className="underline cursor-pointer">Small Business</span>
      </div>

      <hr />

      {/* Share Buttons */}
      <div className="flex justify-start items-center space-x-8 mt-3 mb-4">
        <a
          href={shareUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
          className="!text-black"
        >
          <FaFacebookF />
        </a>
        <a
          href={shareUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Twitter"
          className="!text-black text-xl"
        >
          <FaXTwitter />
        </a>
        <a
          href={shareUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
          className="!text-black"
        >
          <FaLinkedinIn />
        </a>
        <button
          onClick={handleCopyLink}
          title="Copy Link"
          className="ext-black text-xl hover:opacity-70 -ml-3 bg-transparent border-none flex items-center"
          style={{ border: "none", background: "none" }}
        >
          <BiLinkAlt />
        </button>
      </div>

      {/* Comment Section */}
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <div className="border-t pt-6">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring mt-2"
          placeholder="Write a comment..."
        />
        <div className="flex items-center gap-4 my-2 text-xl text-gray-700">
          <div
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="cursor-pointer"
          >
            <FaRegSmile title="Emoji" />
          </div>
          <label className="cursor-pointer">
            <FaImage title="Add Photo" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          <label className="cursor-pointer">
            <FaVideo title="Add Video or GIF" />
            <input type="file" accept="video/*,image/gif" className="hidden" />
          </label>
        </div>
        {showEmojiPicker && (
          <div className="mb-2">
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              height={300}
              width={250}
            />
          </div>
        )}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="max-w-xs rounded mb-2"
          />
        )}
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-gray-600 italic">
            Log in to publish as a member
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setComment("")}
              className="!bg-white text-[#165F78] hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="!bg-[#165F78] text-white px-4 py-2 hover:bg-gray-800"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MartketingConceptBlog;
