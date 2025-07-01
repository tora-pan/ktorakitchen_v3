import { useState } from "react";

interface SurveyData {
  overallRating: number;
  tasteRating: number;
  spiceLevel: string;
  textureRating: number;
  wouldRecommend: boolean;
  favoriteAspect: string;
  improvements: string;
  visitFrequency: string;
  additionalComments: string;
}

const Survey = () => {
  const [formData, setFormData] = useState<SurveyData>({
    overallRating: 0,
    tasteRating: 0,
    spiceLevel: "",
    textureRating: 0,
    wouldRecommend: false,
    favoriteAspect: "",
    improvements: "",
    visitFrequency: "",
    additionalComments: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Send to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycby5CGoP5K-SBQtU8hz7acFJb50gwUnWhBDdG6YHYL9PLkmwRp3lzqdrZ9g42ER2wQa3uQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...formData,
          }),
        }
      );

      console.log("Survey Data sent:", formData);
      setIsSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setFormData({
          overallRating: 0,
          tasteRating: 0,
          spiceLevel: "",
          textureRating: 0,
          wouldRecommend: false,
          favoriteAspect: "",
          improvements: "",
          visitFrequency: "",
          additionalComments: "",
        });
      }, 2000);
    } catch (error) {
      console.error("Error submitting survey:", error);
      // Still show success to user (since we're using no-cors)
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setFormData({
          overallRating: 0,
          tasteRating: 0,
          spiceLevel: "",
          textureRating: 0,
          wouldRecommend: false,
          favoriteAspect: "",
          improvements: "",
          visitFrequency: "",
          additionalComments: "",
        });
      }, 2000);
    }
  };

  const StarRating = ({
    rating,
    setRating,
    label,
  }: {
    rating: number;
    setRating: (rating: number) => void;
    label: string;
  }) => {
    return (
      <div className="mb-4 sm:mb-6">
        <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-archivo px-1">
          {label}
        </label>
        <div className="flex gap-1 sm:gap-2 justify-center sm:justify-start">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl sm:text-3xl transition-colors p-2 ${
                star <= rating ? "text-yellow-400" : "text-gray-400"
              } hover:text-yellow-300 active:scale-95`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1c1818] flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center max-w-md w-full">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 font-archivo">
            Thank You!
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Your feedback has been submitted successfully. We appreciate your
            time!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1c1818] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-4 font-archivo mt-8 sm:mt-12 px-4">
            Katsu Curry Survey
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Help us improve our signature dish! Your anonymous feedback is
            valuable to us.
          </p>
        </div>

        {/* Survey Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Overall Rating */}
            <StarRating
              rating={formData.overallRating}
              setRating={(rating) =>
                setFormData({ ...formData, overallRating: rating })
              }
              label="Overall Rating"
            />

            {/* Taste Rating */}
            <StarRating
              rating={formData.tasteRating}
              setRating={(rating) =>
                setFormData({ ...formData, tasteRating: rating })
              }
              label="Taste Rating"
            />

            {/* Spice Level */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-archivo px-1">
                How was the spice level?
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {["Too Mild", "Just Right", "A bit spicy", "Too Hot!"].map(
                  (level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, spiceLevel: level })
                      }
                      className={`py-3 sm:py-2 px-3 sm:px-4 rounded-lg text-sm font-medium transition-colors active:scale-95 ${
                        formData.spiceLevel === level
                          ? "bg-red-500 text-white"
                          : "bg-white/20 text-gray-300 hover:bg-white/30"
                      }`}
                    >
                      {level}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Texture Rating */}
            <StarRating
              rating={formData.textureRating}
              setRating={(rating) =>
                setFormData({ ...formData, textureRating: rating })
              }
              label="Katsu Texture Rating (crispiness, tenderness)"
            />

            {/* Would Recommend */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-archivo px-1">
                Would you recommend our Katsu Curry to others?
              </label>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ].map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, wouldRecommend: option.value })
                    }
                    className={`py-3 sm:py-2 px-6 sm:px-6 rounded-lg font-medium transition-colors flex-1 sm:flex-none active:scale-95 ${
                      formData.wouldRecommend === option.value
                        ? "bg-red-500 text-white"
                        : "bg-white/20 text-gray-300 hover:bg-white/30"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Favorite Aspect */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-archivo px-1">
                What did you like most about our Katsu Curry? (Select all that
                apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                {[
                  "Sauce",
                  "Crispiness",
                  "Portion Size",
                  "Presentation",
                  "Rice Quality",
                  "Meat Quality",
                  "Value",
                  "Other",
                ].map((aspect) => {
                  const selectedAspects = formData.favoriteAspect
                    ? formData.favoriteAspect.split(",")
                    : [];
                  const isSelected = selectedAspects.includes(aspect);
                  return (
                    <button
                      key={aspect}
                      type="button"
                      onClick={() => {
                        let updated: string[];
                        if (isSelected) {
                          updated = selectedAspects.filter((a) => a !== aspect);
                        } else {
                          updated = [...selectedAspects, aspect];
                        }
                        setFormData({
                          ...formData,
                          favoriteAspect: updated.join(","),
                        });
                      }}
                      className={`py-3 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-colors active:scale-95 ${
                        isSelected
                          ? "bg-red-500 text-white"
                          : "bg-white/20 text-gray-300 hover:bg-white/30"
                      }`}
                    >
                      {aspect}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Improvements */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-archivo px-1">
                What could we improve? (Optional)
              </label>
              <textarea
                value={formData.improvements}
                onChange={(e) =>
                  setFormData({ ...formData, improvements: e.target.value })
                }
                className="w-full p-3 sm:p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:border-red-500 focus:outline-none text-base"
                rows={3}
                placeholder="Tell us how we can make our Katsu Curry even better..."
              />
            </div>

            {/* Additional Comments */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-archivo px-1">
                Any additional comments? (Optional)
              </label>
              <textarea
                value={formData.additionalComments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additionalComments: e.target.value,
                  })
                }
                className="w-full p-3 sm:p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:border-red-500 focus:outline-none text-base"
                rows={3}
                placeholder="Share any other thoughts about your experience..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 sm:px-8 py-4 rounded-xl transition-colors text-base sm:text-lg font-medium font-archivo w-full sm:w-auto flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600 active:scale-95"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Survey"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Survey;
