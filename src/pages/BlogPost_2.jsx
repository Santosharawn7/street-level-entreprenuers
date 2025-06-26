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

const BusinessMistakesBlog = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const shareRef = useRef();
  const [comment, setComment] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const postUrl = `${window.location.origin}/post/the-most-common-mistakes-when-starting-your-small-business`;

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
      <p className="text-sm text-gray-900 mb-4">Jul 18, 2024</p>
      <h1 className="text-4xl font-bold leading-tight mb-6">
        The Most Common Mistakes When Starting Your Small Business
      </h1>

      <p className="mb-4">
        So you’ve started your dream business... Congratulations! All that hard
        work has brought you to this moment. Your excitement has never been
        greater.
      </p>

      <p className="mb-8">
        But hold on a moment! Do you have all the right pieces in place? Did you
        do enough preparation?
      </p>

      <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-8">
        <p className="font-bold">
          Being Modest (Don’t be!). Having a rational level of confidence in
          your business is essential in growing your market. Confidence, and an
          honest belief in your product or service goes a long way in convincing
          a consumer of its merits. If you don’t believe in your product, it
          will show, and no one else will.
        </p>
      </div>

      <p className="mb-4">
        Here are a few things many businesses fail to implement during startup:
      </p>

      <h2 className="text-xl font-bold mb-6">
        Answering the Question “Why should I buy it?”
      </h2>
      <p className="mb-4">
        Perhaps one of the most simple - and painful - questions <em>every</em>{" "}
        business owner should have an answer to is “Why do I need this product?”
        Most of us don’t like being told negative things about ourselves,
        especially when it’s something we believe in. But if you don’t ask
        yourself this question, you may be wasting your time! But it doesn’t
        stop there... ask those around you - your family, your friends, even
        total strangers. If NO ONE has an interest in your offering, you may be
        barking up the wrong tree. Maybe a simple adjustment is all you need to
        move forward, or maybe the product is a dud. Either way, you’ll never
        know if you don’t ask.
      </p>

      <h2 className="text-xl font-bold mb-6">
        Inadequate accounting system in place
      </h2>
      <p className="mb-4">
        Many people get so excited just to get to the starting line for their
        business, that they omit a crucial aspect - having an efficient way to
        track your revenues and expenditures. There are tried and true methods
        for measuring how your business is doing: a simple income statement,
        balance sheet and cash flow statement gives you all the necessary
        information to not only see how your business is doing, but where it may
        be trending. Critical information, such as knowing your profit margins
        per unit, help you to know whether it is worth keeping a particular
        product or service, or whether you should consider another option. Not
        having a financial ‘picture’ of your business is about as wise as flying
        an airplane blindfolded.
      </p>

      <h2 className="text-xl font-bold mb-6">
        Failing to clearly define your target market
      </h2>
      <p className="mb-8">
        Investopedia defines a Target Market as “a group of people that have
        been identified as the most likely potential customers for a product
        because of their shared characteristics, such as age, income, and
        lifestyle.” Understanding key aspects of your target market helps you to
        better understand what features and benefits may appeal more to a
        particular consumer than others.
      </p>

      <img
        src="https://static.wixstatic.com/media/11062b_23d7ab92028c4497ba3ff28f8f34348a~mv2.jpg/v1/fill/w_493,h_329,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_23d7ab92028c4497ba3ff28f8f34348a~mv2.jpg"
        alt="Group of people in a business meeting"
        className="w-full shadow mb-10"
      />

      <h2 className="text-xl font-bold mb-6">Listening to your customers</h2>
      <p className="mb-6">
        You may be so excited in the belief that your product or service is a
        slam dunk, but always be willing to listen to what your clients tell
        you. Ensure that you give space for feedback before, during and after a
        customer consumes your product. What do they like? What could be
        improved? What else in the marketplace provides a similar level of
        satisfaction? Be prepared to make adjustments as you stay ‘dialed in’ to
        your customer base. This strategy ensures you keep your product
        relevant.
      </p>

      <h2 className="text-xl font-bold mb-6">
        Have a plan and be willing to change
      </h2>
      <p className="mb-4">
        You don’t need perfection - but you <em>need</em> a plan. Developing a
        strategy for your business allows you to anticipate pitfalls before they
        happen, and the implications that may follow. Make sure you share your
        business strategy with other objective observers. Allow them to
        criticize the plan and give you honest feedback. And after a set time
        period, review what you’ve written down, and make the necessary
        adjustments. Learning from mistakes will be the most important part of
        your business’s survival.
      </p>

      {/* Tags */}
      <div className="text-sm text-gray-600 space-x-3 mb-10">
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

export default BusinessMistakesBlog;
