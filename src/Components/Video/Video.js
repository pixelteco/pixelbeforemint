import React from "react";

export default function Video() {
  return (
    <div className="container-fluid bg-dark p-5 " >
      <div className="row m-6 p-5">
        <iframe
          width="1000px"
          height="588"
          src="https://www.youtube-nocookie.com/embed/5F_7rHZ7Xzc"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
