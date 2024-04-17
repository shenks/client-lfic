import React from "react";

function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-3xl px-4">
        <h1 className="text-center">About us</h1>
        <div className="pt-20 flex flex-col items-center">
          <p className="text-wrap mb-8 text-center">
            From our humble beginnings as a small family back in 2010, we have
            grown into a vibrant congregation of 500 strong individuals,
            together in our pursuit of learning and practicing the word of God
            and His ways.
          </p>

          <p className="text-wrap mb-8 text-center">
            Through the years, we have fostered a community built on faith,
            love, and fellowship, where each member is valued and cherished.
            Together, we celebrate our journey of spiritual growth, supporting
            one another through life's joys and challenges.
          </p>
          <p className="text-wrap mb-8 text-center">
            Led by Pastor Dennis Abbeyquaye and Pastor Jacklyn, our commitment
            to spreading God's message of love and compassion extends beyond our
            walls, as we strive to make a positive impact in the world around
            us. As we continue to walk this path together, we remain dedicated
            to deepening our relationship with God and serving His purpose with
            unwavering devotion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
