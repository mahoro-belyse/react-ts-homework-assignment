import "./App.css";
import rwandaImage from "./assets/M&G.jpg";

function visitrwanda() {
  return (
    <main>
      <div className="container">
        <h1>Visit Rwanda</h1>

        <img src={rwandaImage} alt="mountains and gorillas" />

        <p>
          Rwanda, known as the "Land of a Thousand Hills," is a stunning
          destination nestled in the heart of East Africa. With its breathtaking
          landscapes, lush green hills, and incredible biodiversity, Rwanda
          offers an unforgettable travel experience. Home to the endangered
          mountain gorillas, pristine lakes, and vibrant local culture, Rwanda
          is a hidden gem waiting to be explored.
        </p>

        <p>
          Whether you're interested in wildlife viewing, hiking through national
          parks, or experiencing the warmth of Rwandan hospitality, this
          beautiful country has something for every traveler. Visit Rwanda and
          discover why it's becoming one of Africa's most popular destinations.
        </p>

        <a
          href="https://visitrwanda.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Rwanda Tourism Website
        </a>
      </div>
    </main>
  );
}
export default visitrwanda;
