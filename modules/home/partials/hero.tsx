"use client";

import ModalVideo from "react-modal-video";
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="section banner-5">
      <div className="container">
        <div className="mt-70">
          <div className="row align-items-end">
            <div className="col-lg-6 mb-20">
        
              <h2 className="color-brand-2 mt-10">
                <span style={{ color: "#A51008" }}></span> Empower Your Motion with WexelCode Physiotherapy Excellence
              </h2>
            </div>
            <div className="col-lg-6 mb-20">
              <p className="font-md color-grey-50">
              Redefining rehabilitation through intelligent solutions, providing personalized care for a pain-free and empowered lifestyle.
              </p>
            </div>
          </div>
          
          <div className="box-video-banner">
            <div className="image-banner-5">
              <div className="backdrop" />
              
              <Image
                width={878}
                height={621}
                src="/images/banner.png"
                alt="wexelcode"
                style={{ height: "100%", width: "100%" }}
              />

              <span
                className="btn btn-play-center popup-youtube"
                onClick={() => setOpen(true)}
              />

              <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="sVPYIRF9RCQ"
                onClose={() => setOpen(false)}
              />
            </div>
          </div>
          
          <div className="d-flex justify-content-between wexelcode-pa">
            <div className="wexelcode">
              <p>Your intelligent partner for personalized rehab plans, leading worldwide.</p>
            </div>
            <div className="d-flex hero-bottom-boxs">
              {/* single box 1 */}
              <div className="d-flex flex-column">
                <h2 className="d-flex align-items-center gap-1 wexelcodeboxcontent">
                  60 <span>M</span>
                </h2>
                <p className="lives-text">lives covered</p>
              </div>
              {/* single box 2 */}
              <div className="d-flex flex-column">
                <h2 className="d-flex align-items-center gap-1 wexelcodeboxcontent">
                  <span>+</span> 500 <span>k</span>
                </h2>
                <p className="lives-text">users worldwide</p>
              </div>
              {/* single box 3 */}
              <div className="d-flex flex-column">
                <h2 className="d-flex align-items-center gap-1 wexelcodeboxcontent">
                  <span>~</span> 300
                </h2>
                <p className="lives-text">US employers </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
