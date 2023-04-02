import React from "react";

export default function VideoPlayPage(props) {
  const [play, setPlay] = React.useState(false);
  const url = play
    ? props+`?autoplay=1`
    : props;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button onClick={() => setPlay(true)}>Play</button>
    </div>
  );
}