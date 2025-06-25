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

const BusinessBackOnTrackBlog = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const shareRef = useRef();
  const [comment, setComment] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const postUrl = `${window.location.origin}/post/how-to-get-your-business-back-on-track`;

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
         How to get your Business “Back on Track”
      </h1>

      <p className="mb-6">
        Congratulations! You’re an Entrepreneur! Now that you’ve started, many things are
        popping up that you hadn’t anticipated. You thought that starting was enough to
        succeed. But now you feel like you’re on a boat with one oar and it’s sprung a leak.
        You want to scream!
      </p>

      <p className="mb-6">
        Don’t worry. Every successful business goes through turmoil at the start. The key is
        to navigate through the rough waters, and when you do, you’ll be much further ahead
        then you’d ever imagined.
      </p>

      <p className="mb-6">
        Here are a few suggestions to help get you back on track:
      </p>

      <h2 className="text-xl font-bold mb-8">Start with your finances</h2>
      <p className="mb-6">
        Financial statements are a ‘snapshot’ of your business at any given point in time.
        And while financial statements can be complex, they all are based on a simple formula:
        Total revenue - Total expenses = Profit.
      </p>
      <p className="mb-6">
        What do your statements tell you about your profit margins? If you sell multiple
        products, can you identify how much profit is made on each one? What about the costs?
        Did you track them accurately? Can you pinpoint any revenues that are lower than
        expected, or expenses that are higher than expected?
      </p>

      <h2 className="text-xl font-bold mb-8">Talk to your customers</h2>
      <p className="mb-6">
        Get to know your clients; where they are, what they like, and why they buy (or don’t
        buy) your product. What do they like about your product? What do they think could be
        improved? Can you identify more opportunities with current customers?
      </p>
      <p className="mb-6">
        Now reach out specifically to people who don’t like your product. Find out why. What
        could be better?
      </p>

      <h2 className="text-xl font-bold mb-8">Take a look at the competition</h2>
      <p className="mb-6">
        What about your competitors? How do they match up to your product? Be honest with
        yourself. Is it better quality? More competitively priced? Do they have a better
        marketing strategy?
      </p>

      <h2 className="text-xl font-bold mb-6">
        Your next step depends on the answers to these questions
      </h2>
      <p className="mb-6">
        <span className="underline font-medium">You</span> may need to make adjustments to
        your product, change your price point, or offer better incentives.
      </p>
      <p className="mb-5">
        Whichever way you choose, these strategies will be necessary to give you a clear
        enough picture so you can get “Back on Track”.
      </p>

      {/* Tags */}
      <div className="text-sm text-gray-600 space-x-3 mb-10">
        <span className="underline cursor-pointer">Entrepreneurship</span>
        <span className="underline cursor-pointer">Small Business</span>
        <span className="underline cursor-pointer">Advice</span>
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

export default BusinessBackOnTrackBlog;
