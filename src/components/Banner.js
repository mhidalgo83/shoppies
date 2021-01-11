import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClose} from "@"

const Banner = ({ nominees }) => {
  const [close, setClose] = useState(true);

  return (
    <div className={close ? "banner visible" : "banner"}>
      <h1>These are your nominees for the 2021 Shoppies!!</h1>
      <ul>
        {nominees.map((n) => (
          <li key={n.imdbID}>{n.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
