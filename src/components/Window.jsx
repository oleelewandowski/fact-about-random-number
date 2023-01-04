import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import FactScreen from "./FactScreen";
import Modal from "./Modal";

const Window = ({
  randomFact,
  randomNumber,
  isLoading,
  error,
  pickRandomNumber,
  showModal,
  setShowModal,
}) => (
  <>
    <div className=" bg-gray-100 rounded-xl shadow-2xl min-w-[40%] min-h-[50%] w-[70%] lg:w-[50%] md:w-[60%] h-[60%] flex justify-center items-center relative">
      <div className="flex flex-col justify-center items-center text-black">
        {isLoading && <LoadingScreen />}
        {error && <ErrorScreen />}
        {randomFact && !isLoading && !error && (
          <FactScreen randomNumber={randomNumber} randomFact={randomFact} />
        )}
        {showModal && <Modal setShowModal={setShowModal} />}
        <button
          className="group h-12 lg:h-14 xxl:h-16 w-48 sm:w-56 md:w-64 xl:w-72 overflow-hidden rounded-full bg-white text-md md:text-lg shadow-md absolute bottom-6 md:bottom-3 lg:bottom-4"
          onClick={pickRandomNumber}
        >
          <div className="absolute inset-0 w-3 bg-blue-600 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white uppercase font-bold">
            Draw a Number!
          </span>
        </button>
      </div>
    </div>
  </>
);

export default Window;
