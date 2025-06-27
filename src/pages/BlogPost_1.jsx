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

const SmallBusinessBlog = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const shareRef = useRef();
  const [comment, setComment] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const postUrl = `${window.location.origin}/post/help-i-want-to-start-a-business-where-do-i-begin`;

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
      <p className="text-sm text-gray-900 mb-2">Jul 18, 2024</p>
      <h1 className="text-4xl font-bold leading-tight mb-6">
        Help! I Want to Start a Small Business – Where Do I Begin?
      </h1>

      {/* Intro Paragraph */}
      <p className="text-lg leading-relaxed mb-6">
        So you want to start a small business…. What attracted you to take this
        step? Was it a passion you have in something? Was it an opportunity you
        overheard somewhere? Do you have a special skill that you want to
        capitalize on? Whatever the reason, there are a few key principles you
        should consider before starting:
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mb-5">
        Problem? You got a problem pal?
      </h2>
      <p className="text-lg leading-relaxed mb-6">
        The most successful business ideas start with clearly identifying a
        problem, a problem that your business idea can clearly solve. Many
        entrepreneurs think they have a workable idea, but the ones that survive
        through the long haul start by remedying an issue that enough people are
        in need of. What problem are you trying to solve? Can people deal with
        it on their own, or do they need help? Are there enough people in a
        given geographic area (that you can reach) that have the same issue?
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mb-5">
        Know who else is in the game
      </h2>
      <p className="text-lg leading-relaxed mb-10">
        Another important aspect is knowing who else is aware of this problem –
        and how they solve it. Do they have a method better than yours? Is it
        cheaper, or easier to do? This is important, because you need to know
        who else is offering your product or service, and how you stand up
        compared to them.
      </p>

      {/* Image */}
      <img
        src="https://static.wixstatic.com/media/11062b_6b97e409e55e4a56a53f5b95122215b6~mv2.jpeg/v1/fill/w_1480,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6b97e409e55e4a56a53f5b95122215b6~mv2.jpeg"
        alt="Monopoly game pieces"
        className=" my-8 w-full object-cover"
      />

      {/* Section 3 */}
      <p className="text-lg leading-relaxed mb-6">
        And perhaps the most difficult point is this:
      </p>
      <h2 className="text-xl font-semibold mb-5">
        Why should anyone care what you’re selling??
      </h2>
      <p className="text-lg leading-relaxed mb-6">
        This is perhaps the toughest question anyone can ask themselves. Think
        of it this way…. If you have a legitimate answer to this question, then
        you've got a chance to succeed. If not, chances are you’re not. This
        concept is also known as the “Value Proposition”. But simply stated, you
        must clearly know why ANYONE would take the time to consume whatever
        you’re selling. If you can’t do that, you’re probably wasting your time,
        and everyone else’s.
      </p>

      {/* Conclusion */}
      <p className="text-lg leading-relaxed mb-6">
        Once you have answers to these questions, you will know your next move.
        And if your product or service isn’t the right fit, don’t worry! 80% of
        businesses fail. But don’t let that stop you. If you want to keep at it,
        remember to start with a problem, and take it from there.
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

export default SmallBusinessBlog;
