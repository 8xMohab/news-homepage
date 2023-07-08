import { useState } from "react";
import { features, topics } from "./data.ts";
function App() {
  const [menue, setMenue] = useState(false);
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <div className="open-icon" onClick={() => setMenue(true)}>
          <img src="/icon-menu.svg" alt="menue open" />
        </div>
        <ul
          className="nav-ul"
          style={menue ? { right: "0%" } : { right: "-100%" }}
        >
          <div className="close-icon">
            <img
              src="/icon-menu-close.svg"
              alt="menue close"
              onClick={() => setMenue(false)}
            />
          </div>

          <li
            className="nav-ul__link nav-ul__link--active"
            onClick={() => setMenue(false)}
          >
            <a href="/">Home</a>
          </li>
          <li className="nav-ul__link" onClick={() => setMenue(false)}>
            <a href="/">New</a>
          </li>
          <li className="nav-ul__link" onClick={() => setMenue(false)}>
            <a href="/">Popular</a>
          </li>
          <li className="nav-ul__link" onClick={() => setMenue(false)}>
            <a href="/">Trending</a>
          </li>
          <li className="nav-ul__link" onClick={() => setMenue(false)}>
            <a href="/">Categories</a>
          </li>
        </ul>
        <div
          className="background-overlay"
          onClick={() => setMenue(false)}
          style={menue ? { display: "block", opacity: "0.3" } : {}}
        ></div>
      </nav>
      <section className="hero-section">
        <main>
          <div className="image">
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet="/image-web-3-desktop.jpg"
              />
              <img
                className="hero-image"
                src="/image-web-3-mobile.jpg"
                alt="Web3"
              />
            </picture>
          </div>
          <div className="text-wrapper">
            <h1 className="main-heading">The Bright Future of Web 3.0?</h1>
            <div className="p-wrapper">
              <p className="paragraph">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read more</button>
            </div>
          </div>
        </main>
        <aside>
          <h1 className="main-heading">New</h1>
          <div className="topics">
            {topics.map((item, index) => (
              <div key={`topic-${index}`} className="topics__topic">
                <h2 className="subheading">{item.title}</h2>
                <p className="paragraph">{item.topic}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section>
        <div className="features">
          {features.map((item, index) => (
            <div key={`feature-${index}`} className="features__feature">
              <div
                className="image"
                style={{ backgroundImage: `url("${item.image}")` }}
              >
                {/* <img src={item.image} alt={item.title} /> */}
              </div>
              <div>
                <p className="index-heading">
                  {index < 10 ? `0${index + 1}` : index}
                </p>
                <h2 className="subheading">{item.title}</h2>
                <p className="paragraph">{item.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
