import axios from "axios";
import { useEffect, useState } from "react";
import Window from "./Window";
import Footer from "./Footer";

const Card = () => {
  const howManyNumbers = 100;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fact, setFact] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(howManyNumbers * Math.random())
  );
  const [showModal, setShowModal] = useState(false);

  const pickRandomNumber = () => {
    const randomNumber = Math.floor(howManyNumbers * Math.random());
    setRandomNumber(randomNumber);
  };

  useEffect(() => {
    setIsLoading(true);
    const cancelToken = axios.CancelToken.source();

    axios
      .get(`https://numbersapi.p.rapidapi.com/${randomNumber}/trivia`, {
        cancelToken: cancelToken.token,
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
        params: { fragment: "true", json: "true" },
      })
      .then((res) => {
        setFact(res.data.text);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setFact("");
        setError(true);
        setIsLoading(false);
        console.warn(err);
      });

    return () => cancelToken.cancel();
  }, [randomNumber]);

  return (
    <div className="h-[100vh] w-full min-h-[50%] min-w-[50%] bg-background flex justify-center items-center">
      <Window
        randomFact={fact}
        randomNumber={randomNumber}
        isLoading={isLoading}
        error={error}
        pickRandomNumber={pickRandomNumber}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Footer setShowModal={setShowModal} />
    </div>
  );
};

export default Card;
