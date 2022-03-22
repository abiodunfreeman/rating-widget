export default function ThankYou(props) {
  return (
    <div className="thanks">
      <img src="./images/illustration-thank-you.svg" />
      <p>You selected {props.rating} out of 5 stars</p>
      <h1 onClick={() => props.displayThanks()}>Thank you!</h1>
    </div>
  );
}
