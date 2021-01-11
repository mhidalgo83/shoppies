import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  fas,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Banner = ({ nominees }) => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    if (nominees.length >= 5) {
      setClose(false);
    }
  }, [nominees]);

  const handleClick = () => {
    setClose(true);
  };

  return (
    <div className={close ? "banner visible" : "banner"}>
      <FontAwesomeIcon
        className="banner__close"
        icon={faTimes}
        size="2x"
        onClick={handleClick}
      />
      <h1>These are your nominees for the 2021 Shoppies!!</h1>
      <ul>
        {nominees.map((n) => (
          <div>
            <li key={n.imdbID}>{n.Title}</li>
            <img className="banner__img" src={n.Poster} alt="Movie poster" />
          </div>
        ))}
      </ul>
      <img className="banner__popcorn" src="./images/popcorn.png" alt="popcorn" />
    </div>
  );
};
export default Banner;
