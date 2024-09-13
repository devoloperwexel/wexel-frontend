import Link from "next/link";
import React from "react";
//
import Accordion from "@/components/ui/CustomAccordion";

const Faq = () => {
  return (
    <section className="section pt-80">
      <div className="container">
        <div className="row mt-50 mb-40">
          <div className="col-xl-5 col-lg-5">
            <h2 className="color-brand-1 mb-20">FAQs</h2>
            <p className="font-lg color-gray-500 mb-50">
              Feeling inquisitive? Have a read through some of our FAQs or
              contact our supporters for help
            </p>
            <h6 className="color-brand-1 mb-10">Still no luck? We can help!</h6>
            <p className="font-lg color-gray-500">
              Contact us and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="mt-40 text-start mb-40">
              {" "}
              <Link className="btn btn-brand-1 hover-up" href="#">
                Contact Us
              </Link>
              <Link className="btn btn-default font-sm-bold hover-up" href="#">
                Support Center
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

          <div className="col-xl-7 col-lg-7">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
