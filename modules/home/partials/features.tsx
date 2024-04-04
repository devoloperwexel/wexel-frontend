import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Features = () => {
    return (
        <section className="section mt-90">
            <div className="container">
                <div className="text-center">
                    <h2 className="color-brand-1 mb-20">Personalized AI assisted Physio therapist</h2>
                    <p className="font-lg color-grey-500"> <Link className="font-lg-bold color-brand-1" href="#">Wexelcode Healthcare </Link> elevates Your Recovery. AI-driven personalized physio, effortlessly balancing your journey to wellness." <br className="d-none d-lg-block" /></p>
                </div>
                <div className="row mt-75 align-items-center">
                    <div className="col-lg-4 mb-30">
                        <div className="card-become">
                            <div className="card-title text-end">
                                <h6 className="color-brand-1 mb-15"> <span>Personalized Treatment Plans</span><Image width={40} height={40} className="ml-15" src="/images/management/1.svg" alt="wexelcode" /></h6>
                            </div>
                            <div className="card-desc">
                                <p className="text-end color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                            </div>
                        </div>
                        <div className="card-become">
                            <div className="card-title text-end">
                                <h6 className="color-brand-1 mb-15"> <span>Smart Exercise Recommendations</span><Image width={40} height={40} className="ml-15" src="/images/management/2.svg" alt="wexelcode" /></h6>
                            </div>
                            <div className="card-desc">
                                <p className="text-end color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                            </div>
                        </div>
                        <div className="card-become">
                            <div className="card-title text-end">
                                <h6 className="color-brand-1 mb-15"> <span>Integration with Wearable Devices</span><Image width={40} height={40} className="ml-15" src="/images/management/3.svg" alt="wexelcode" /></h6>
                            </div>
                            <div className="card-desc">
                                <p className="text-end color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                            </div>
                        </div>
                        <div className="card-become">
                            <div className="card-title text-end">
                                <h6 className="color-brand-1 mb-15"> <span>Real-time Monitoring</span><Image width={40} height={40} className="ml-15" src="/images/management/4.svg" alt="wexelcode" /></h6>
                            </div>
                            <div className="card-desc">
                                <p className="text-end color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-30 text-center"><Image width={650} height={650} src="/images/dashboard.svg" alt="wexelcode" /></div>
                    <div className="col-lg-4 mb-30">
                        <div className="card-become">
                            <div className="card-title text-start">
                                <h6 className="color-brand-1 mb-15"> <Image width={40} height={40} className="mr-15" src="/images/management/5.svg" alt="wexelcode" /><span>Progress Tracking and Analysis</span></h6>
                            </div>
                            <div className="card-desc">
                                <p className="text-start color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                            </div>
                        </div>
                        <div className="card-become">
                            <div className="card-title text-start">
                                <h6 className="color-brand-1 mb-15"> <Image width={40} height={40} className="mr-15" src="/images/management/6.svg" alt="wexelcode" /><span>Voice and Text Interaction</span></h6>
                            </div>
                            <div className="card-desc">
                                <p className="text-start color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                            </div>
                        </div>
                        <div className="card-become">
                            <div className="card-title text-start">
                                <h6 className="color-brand-1 mb-15"> <Image width={40} height={40} className="mr-15" src="/images/management/7.svg" alt="wexelcode" /><span>AI automation</span></h6>
                            </div>
                            <div className="card-desc">
                                <p className="text-start color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                            </div>
                        </div>
                        <div className="card-become">
                            <div className="card-title text-start">
                                <h6 className="color-brand-1 mb-15"> <Image width={40} height={40} className="mr-15" src="/images/management/8.svg" alt="wexelcode" /><span>Pain Level Monitoring</span></h6>
                            </div>
                            <div className="card-desc">
                                <p className="text-start color-grey-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada felis eget finibus placerat. Aliquam sit amet vestibulum felis, sit amet porta neque</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features