import { useEffect, useState } from "react";
import Review from "./Review";
import ThankYou from "./ThankYou";
export default function App() {
  const [rating, setRating] = useState(); //inits rating state
  const [thankYou, setThankYou] = useState(false);

  function userSetRating(rating) {
    // sets rating and adds class of 'clicked' to chosen rating
    const ratingChoices = [...document.querySelectorAll(".clicked")];
    ratingChoices.forEach((rating) => {
      //removes 'clicked' class to anything that has it
      rating.classList.remove("clicked");
    });
    const target = document.getElementById(rating); // adds 'clicked' class to chosen rating
    target.classList.add("clicked");
    setRating(rating); // sets rating state
  }
  function displayThanks() {
    console.log("thanks");
    if (rating) {
      setThankYou((prevThankYou) => !prevThankYou);
    }
  }
  useEffect(() => {
    console.log(rating);
  }, [rating]);

  return (
    <div className="App">
      {thankYou ? (
        <ThankYou rating={rating} displayThanks={displayThanks} />
      ) : (
        <Review userSetRating={userSetRating} displayThanks={displayThanks} />
      )}
    </div>
  );
}
