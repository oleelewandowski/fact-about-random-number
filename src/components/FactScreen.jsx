const FactScreen = ({ randomFact, randomNumber }) => (
  <div className="animate-fade-in">
    <div className="text-center h-[80%]">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-black sm:text-4xl md:text-5xl xl:text-6xl p-6 sm:p-4">
        Random fact about the
        <span className="text-blue-600 px-3">{randomNumber}</span>
      </h1>
    </div>
    <div className="flex flex-col justify-center items-center gap-12 mb-12 px-6 sm:px-12 text-center">
      <div className="text-md sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl">
        {randomFact}
      </div>
    </div>
  </div>
);

export default FactScreen;
