const ErrorScreen = () => (
  <div className="flex items-center justify-center w-screen h-screen">
    <div className="px-4 md:py-12">
      <div className="md:gap-4 md:flex">
        <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
          <h1 className="font-bold text-blue-600 text-7xl md:text-9xl xl:text-10xl">
            400
          </h1>
          <p className="mb-2 text-2xl font-bold text-center text-black md:text-3xl xl:text-4xl">
            <span className="text-blue-600">Oops!</span> Bad request.
          </p>
          <p className="mb-4 text-center text-gray-600 md:text-md xl:text-xl">
            You're probably spamming the button...
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ErrorScreen;
