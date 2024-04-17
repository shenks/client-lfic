import React from "react";

function Contact() {
  return (
    <div>
      <div>
        <h1 className="">Contact</h1>
        <p>We're thrilled to hear from you or have you visit us, feel free to reach out anytime!</p>
      </div>
      <div className="flex justify-center pt-24 text-xl">
        <div className="flex flex-col text-right gap-10">
          <span className="font-semibold">Email:</span>
          <span className="font-semibold">Phone:</span>
          <span className="font-semibold">Address:</span>
        </div>
        <div className="flex flex-col pl-10 gap-10">
          <span style={{ textAlign: "left" }}>livingfaith117@gmail.com</span>
          <span style={{ textAlign: "left" }}>+65 9792 5030</span>
          <span style={{ textAlign: "left" }}>
            9 Playfair Road, #04-01 Singapore 367992
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
