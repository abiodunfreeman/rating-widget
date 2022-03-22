export default function ThankYou(props) {
  return (
    <div className="thanks review">
      <img id="thanks-img" src="./images/illustration-thank-you.svg" />
      <p>You selected {props.rating} out of 5 stars</p>
      <h1 onClick={() => props.displayThanks()}>Thank you!</h1>
      <p className="desc thanks-msg">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
