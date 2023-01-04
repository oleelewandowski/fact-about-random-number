const Footer = ({ setShowModal }) => (
  <div className="fixed bottom-0 flex items-center justify-center w-full h-[7vh]">
    <span className="text-black font-bold text-sm md:text-md lg:text-lg">
      © 2023{" "}
      <button
        className="text-blue-600 font-extrabold hover:scale-105"
        onClick={() => setShowModal(true)}
      >
        oLee™
      </button>
      . All Rights Reserved.
    </span>
  </div>
);

export default Footer;
