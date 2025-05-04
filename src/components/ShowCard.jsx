import { useState } from "react";

const ShowCard= ({ data }) => {
  const [step, setStep] = useState(0);
  const stepCount = data.instructions?.length || 0;

  const goNext = () => {
    setStep((prev) => (prev + 1) % stepCount);
  };

  const goBack = () => {
    setStep((prev) => (prev - 1 + stepCount) % stepCount);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-purple-200 shadow-[0_10px_30px_-5px_rgba(100,100,255,0.3)] overflow-hidden transition-all hover:scale-105 duration-300 mb-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-500 text-white px-8 py-5 text-center rounded-t-3xl shadow-md">
        <h2 className="text-3xl font-semibold tracking-wider uppercase">{data.name}</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="flex items-center justify-center p-6 bg-gradient-to-tl from-indigo-50 to-white rounded-bl-3xl md:w-1/2">
          <img
            src={data.gifUrl}
            alt={data.name}
            className="rounded-2xl border-4 border-indigo-200 shadow-lg max-w-[260px] h-auto"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-5 text-gray-800">
          <div className="space-y-3 text-[1.05rem] leading-relaxed">
            <p>🔥 <strong>Focus Area:</strong> <span className="capitalize">{data.target}</span></p>
            <p>🧍 <strong>Category:</strong> <span className="capitalize">{data.bodyPart}</span></p>
            <p>🛠 <strong>Gear Needed:</strong> <span className="capitalize">{data.equipment}</span></p>
            {data.secondaryMuscles?.length > 0 && (
              <p>
                ➕ <strong>Supports:</strong>{" "}
                {data.secondaryMuscles.map((m, idx) => (
                  <span key={idx} className="capitalize">
                    {m}
                    {idx !== data.secondaryMuscles.length - 1 && ", "}
                  </span>
                ))}
              </p>
            )}
          </div>

          {/* Step Instructions */}
          {stepCount > 0 && (
            <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-xl shadow-inner">
              <h4 className="text-center text-purple-600 font-medium mb-2">
                📘 Step {step + 1} of {stepCount}
              </h4>
              <p className="text-center italic text-gray-700">{data.instructions[step]}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={goBack}
                  className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
                >
                  ⬅ Back
                </button>
                <button
                  onClick={goNext}
                  className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
                >
                  Next ➡
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
