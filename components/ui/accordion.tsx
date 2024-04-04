"use client";

import React, { useState } from "react";

const Accordion = () => {
  const [isActive, setIsActive] = useState<any>({
    status: false,
    key: 1,
  });

  const handleToggle = (key: any) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="accordion" id="accordionFAQ">
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(1)}>
            <button
              className={
                isActive.key == 1
                  ? "accordion-button text-heading-5 fs-accordion-button"
                  : "accordion-button  fs-accordion-button text-heading-5 collapsed"
              }
            >
              How does WexelCode Physio personalize therapy plans?
            </button>
          </h5>
          <div
            className={
              isActive.key == 1
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
            WexelCode Physio employs advanced AI algorithms that analyze user data, including medical history and progress, to generate personalized therapy plans tailored to individual needs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(2)}>
            <button
              className={
                isActive.key == 2
                  ? "accordion-button fs-accordion-button text-heading-5 "
                  : "accordion-button fs-accordion-button text-heading-5 collapsed"
              }
            >
              Can I use WexelCode Physio without any prior physiotherapy experience?
            </button>
          </h5>
          <div
            className={
              isActive.key == 2
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur excepturi quia repudiandae placeat reiciendis culpa perferendis aliquam inventore, possimus consectetur, officia iste, quo hic adipisci aspernatur aperiam temporibus vero!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(3)}>
            <button
              className={
                isActive.key == 3
                  ? "accordion-button text-heading-5 fs-accordion-button "
                  : "accordion-button text-heading-5 collapsed  fs-accordion-button"
              }
            >
              Is my data secure with WexelCode Physio?
            </button>
          </h5>
          <div
            className={
              isActive.key == 3
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quae assumenda officia. Minus deleniti quo aut accusamus dolores explicabo reiciendis quae inventore! Veniam deleniti quas ut quos velit dolor perferendis!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(4)}>
            <button
              className={
                isActive.key == 4
                  ? "accordion-button text-heading-5 fs-accordion-button "
                  : "accordion-button text-heading-5 fs-accordion-button collapsed"
              }
            >
              How does the real-time monitoring feature work?
            </button>
          </h5>
          <div
            className={
              isActive.key == 4
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis placeat animi, soluta est ullam debitis, quo illum nostrum earum exercitationem voluptatum, voluptatem quaerat sequi alias veniam doloremque. Perspiciatis, ducimus!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(5)}>
            <button
              className={
                isActive.key == 5
                  ? "accordion-button fs-accordion-button text-heading-5 "
                  : "accordion-button fs-accordion-button text-heading-5 collapsed"
              }
            >
              What sets WexelCode Physio apart from other physiotherapy apps?
            </button>
          </h5>
          <div
            className={
              isActive.key == 5
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque vitae nobis, praesentium hic ducimus, facilis natus eius eaque enim sint eveniet ut rem excepturi, voluptatum molestias nam sapiente? Ex, temporibus.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(6)}>
            <button
              className={
                isActive.key == 6
                  ? "accordion-button fs-accordion-button text-heading-5 "
                  : "accordion-button fs-accordion-button text-heading-5 collapsed"
              }
            >
              How often should I use WexelCode Physio for maximum benefits?
            </button>
          </h5>
          <div
            className={
              isActive.key == 6
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus officiis est ipsum voluptate laboriosam dicta quod quidem aliquid magnam soluta sequi blanditiis similique maxime cum dolorum doloremque, nobis consequuntur. Ullam!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(7)}>
            <button
              className={
                isActive.key == 7
                  ? "accordion-button fs-accordion-button text-heading-5 "
                  : "accordion-button fs-accordion-button text-heading-5 collapsed"
              }
            >
              Is customer support available if I have questions or issues?
            </button>
          </h5>
          <div
            className={
              isActive.key == 7
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eum, natus asperiores aperiam consequatur labore distinctio cumque nulla cupiditate autem amet consectetur dolorem assumenda vitae nam animi, accusamus quia optio.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
