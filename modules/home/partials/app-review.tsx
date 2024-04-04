"use client";

import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const AppReview = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="section mt-50 pt-50 pb-90">
      <div className="container">
        <div className="bg-brand-1 box-cover-video">
          <div className="row align-items-center">
            
            <div className="col-xl-6 col-lg-6">
              <Image
                width={700}
                height={537}
                style={{ height: "100%" }}
                className="d-block"
                src="/images/app-review.png"
                alt="wexelcode"
              />
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="box-info-video">
                
                <span className="btn btn-tag">healthcare</span>
                
                <h3 className="color-brand-2 color-brand-3 mt-10 mb-15">
                Revitalizing Lives: Exploring the Transformative Power of Personalized Physiotherapy with WexelCode.
                </h3>

                <p className="font-md color-white">
                Embark on a journey of wellness as we delve into the transformative realm of personalized physiotherapy with WexelCode. Discover how tailored therapy plans are revolutionizing rehabilitation, empowering individuals to reclaim mobility, and fostering a life of vitality and well-being. Join us in exploring the profound impact of intelligent care on the path to recovery.
                </p>

                <div className="box-button-video">
                  <a
                    className="btn btn-play font-sm-bold popup-youtube hover-up"
                    onClick={() => setOpen(true)}
                  >
                    Get Started Now
                    <svg
                      className="w-6 h-6 icon-16 ml-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="sVPYIRF9RCQ"
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
};

export default AppReview;
