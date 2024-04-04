import React from "react";
import Link from "next/link";
import Image from "next/image";

const Management = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="card-radius-32">
              <div className="card-info">
                <h3 className="color-brand-1 mb-2">
                  Human care where beneficial
                </h3>
                <p className="font-md common-w color-grey-500 mb-20">
                WexelCode Physio: Your go-to app for intelligent physiotherapy, delivering the largest array of personalized rehabilitation plans in Germany.
                </p>
                
                <div className="text-center">
                  <Link href="#">
                    <Image
                      width={147}
                      height={49}
                      className="mr-10 object-fit-cover"
                      src="/images/apple.png"
                      alt="wexelcode"
                    />
                  </Link>

                  <Link href="#">
                    <Image
                      width={165}
                      height={48}
                      className="object-fit-cover"
                      src="/images/playstore.png"
                      alt="wexelcode"
                    />
                  </Link>
                </div>
              </div>
              <div className="card-image">
                <Image
                  height={522}
                  width={747}
                  src="/images/therapy.svg"
                  alt="wexelcode"
                  style={{ marginTop: "40px", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-30">
            <div className="card-radius-32 bg-4">
              <div className="card-info">
                <h3 className="color-brand-1 mb-2">Personalized therapy</h3>
                <p className="font-md common-w color-grey-500 w-80 mb-20">
                Elevate your recovery with WexelCode Physio, Germany's leader in personalized therapy plans for targeted rehabilitation.
                </p>
                <div className="mt-0">
                  {" "}
                  <Link className="btn btn-brand-1-small" href="#">
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
                  </Link>
                </div>
              </div>
              <div className="card-image">
                {" "}
                <Image
                  height={522}
                  width={747}
                  src="/images/personalised.svg"
                  alt="wexelcode"
                  style={{ marginTop: "6px", height: "100%", padding : "20px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-12 mb-30">
            <div className="card-radius-32 bg-grey-60">
              <div className="row">
                <div className="col-lg-6">
                  <div className="box-cover-pd">
                    <div className="box-image-rd-30">
                      {" "}
                      <Image
                        width={568}
                        height={471}
                        className="w-100"
                        src="/images/options.png"
                        alt="wexelcode"
                      />
                      <h4 className="color-brand-1 lbl-on-top">
                        Wexelcode Healthcare
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-cover-pd-2">
                    <h2 className="color-brand-1 mb-30">
                      How is wexelcode <br className="d-none d-lg-block" />{" "}
                      different?
                    </h2>
                    <div className="item-number hover-up">
                      <div className="num-ele">1</div>
                      <div className="info-num">
                        <h5 className="color-brand-1 mb-15">
                        Personalized Treatment Plans
                        </h5>
                        <p className="font-md color-grey-500 common-wi">
                          What makes us different from others? We give holistic
                          solutions with strategy, design &amp; technology.
                        </p>
                      </div>
                    </div>
                    <div className="item-number hover-up">
                      <div className="num-ele">2</div>
                      <div className="info-num">
                        <h5 className="color-brand-1 mb-15">
                        Progress Tracking and Analysis
                        </h5>
                        <p className="font-md color-grey-500 common-wi">
                          What makes us different from others? We give holistic
                          solutions with strategy, design &amp; technology.
                        </p>
                      </div>
                    </div>
                    <div className="item-number hover-up">
                      <div className="num-ele">3</div>
                      <div className="info-num">
                        <h5 className="color-brand-1 mb-15">Pain Level Monitoring</h5>
                        <p className="font-md color-grey-500 common-wi">
                          What makes us different from others? We give holistic
                          solutions with strategy, design &amp; technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
