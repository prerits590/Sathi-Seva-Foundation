import React from "react";
import "./Share.css";
export default function Share() {
  return (
    <>
      {/* <!-- ------------ WHATSAPP ---------  --> */}

      <a href="https://wa.me/+918839170393/?text=Donate [Title] [Photo] [Link]">
        <div className="share-icon flex justify-center py-2 px-2 mx-1 " title="Chat with us">
          <ion-icon name="share-social-outline"></ion-icon>
        </div>
      </a>
    </>
  );
}
