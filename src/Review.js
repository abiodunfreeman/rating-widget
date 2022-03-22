import "./styles.css";
export default function Review(props) {
  const { userSetRating } = props;

  return (
    <div className="review">
      <div>
        <img id="star" alt="star" src="./images/icon-star.svg" />
      </div>
      <h1>How did we do?</h1>
      <p className="desc">
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
      <div onClick={() => props.displayThanks()} className="submit">
        SUBMIT
      </div>
    </div>
  );
}
