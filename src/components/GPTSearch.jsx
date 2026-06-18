import React from "react";
import Header from "./Header";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GPTSearch = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Image with Overlays */}
      <div className="fixed inset-0 w-full h-screen -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_medium.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Header */}
      <div className="relative z-50 border-b border-gray-700/30">
        <Header />
      </div>

      {/* Search Bar */}
      <GPTSearchBar />

      {/* Movie Suggestions */}
      <div className="relative z-10 mt-8">
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
