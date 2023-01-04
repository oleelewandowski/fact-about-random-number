import LinkedIn from "../assets/linkedin.svg";

const Modal = ({ setShowModal }) => {
  const linkedIn = {
    id: 1,
    name: "LinkedIn",
    href: `https://www.linkedin.com/in/oleelewandowski`,
  };

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm">
      <div
        className="fixed w-full h-full"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="flex items-center min-h-screen">
        <div className="relative w-full max-w-md p-6 bg-white rounded-md shadow-2xl mx-2 sm:mx-auto">
          <div className="text-center sm:text-left px-4 py-2">
            <div className="flex flex-row items-center">
              <img
                src={LinkedIn}
                alt="linkedin"
                className="w-[64px] h-[64px]"
              />
              <p className="leading-relaxed text-lg md:text-xl font-medium ml-4">
                Are you sure you want to move on and visit my LinkedIn profile?
              </p>
            </div>
            <div className="items-center gap-2 mt-3 sm:flex">
              <button
                className="w-full mt-3 p-3 flex-1 text-white rounded-md outline-none border-2 bg-blue-500 hover:bg-blue-600 font-bold"
                onClick={() => setShowModal(false)}
              >
                <a
                  href={linkedIn.href}
                  alt={linkedIn.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to the LinkedIn
                </a>
              </button>
              <button
                className="w-full mt-3 p-3 flex-1 text-gray-700 rounded-md outline-none border-2 hover:bg-gray-50 font-bold"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
