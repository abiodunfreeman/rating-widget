import { useEffect, useState } from "react";

export default function Review() {
  const [rating, setRating] = useState(); //inits rating state
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
  useEffect(() => {
    console.log(rating);
  }, [rating]);
  return (
    <div className="review">
      <div>
        <img alt="star" src="./images/icon-star.svg" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering !
      </p>
      <section className="rating-row">
        <p onClick={() => userSetRating(1)} id="1" className="circle">
          1
        </p>
        <p onClick={() => userSetRating(2)} id="2" className="circle">
          2
        </p>
        <p onClick={() => userSetRating(3)} id="3" className="circle">
          3
        </p>
        <p onClick={() => userSetRating(4)} id="4" className="circle">
          4
        </p>
        <p onClick={() => userSetRating(5)} id="5" className="circle">
          5
        </p>
      </section>
      <div className="submit">SUBMIT</div>
    </div>
  );
}
