import UseTitle from "../../components/UseTitle";
const Contact = () => {
  UseTitle("contact");
  return (
    <>
      <div class="banner">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230822131732/images.png"
          alt="Welcome to our Contact Us page"
        />
        <h1>Get in Touch With Us</h1>
        <p>We're here to answer any questions you may have.</p>
      </div>
      <div className="contact-form">
        <div className="form-container">
          <h2>Your Details</h2>
          <form action="#" method="POST">
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email: </label>
            <input type="email" id="email" name="email" required />

            <label for="phone">Phone: </label>
            <input type="tel" id="phone" name="phone" />

            <label for="message">Message: </label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
