const Banner = ({ nominees }) => {
  return (
    <div className="banner">
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
