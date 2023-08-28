import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="cardgif animate__animated animate__fadeIn animate__delay-2s">
      <div className="gifimg">
        <img src={url} alt={title} />
      </div>
      <div>
        <p> {title} </p>
      </div>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
