import Link from 'next/link'
import React from 'react'

const Pricing = () => {
    return (
        <section className="section mt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        <h2 className="color-brand-1 mb-20">Choose The Best Plan</h2>
                        <p className="font-lg color-gray-500">Pick your plan. Change whenever you want.<br className="d-none d-lg-block" />No switching fees between packages</p>
                    </div>
                </div>
                <div className="row mt-50">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card-plan-style-2 hover-up">
                            <div className="card-plan">
                                <div className="card-image-plan">
                                    <div className="icon-plan"> <img src="/images/free.svg" alt="wexelcode" /></div>
                                    <div className="info-plan">
                                        <h4 className="color-brand-1">Trial Plan</h4>
                                        <p className="font-md color-grey-400">Protect for testing</p>
                                    </div>
                                </div>
                                <div className="box-day-trial"> <span className="font-lg-bold color-brand-1">FREE </span> <span className="font-md color-grey-500">- 30 days trial </span><br /><span className="font-xs color-grey-500">No Credit card required</span></div>
                                <div className="mt-20"> <Link className="btn btn-brand-1-full hover-up" href="#">Try for free
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="mt-30 mb-30">
                                <ul className="list-ticks list-ticks-2">
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Max number of results per month
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Various innovative test
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Insightful analytics
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Additional user accounts
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card-plan-style-2 hover-up">
                            <div className="card-plan">
                                <div className="card-image-plan">
                                    <div className="icon-plan bg-1"> <img src="/images/standard.svg" alt="wexelcode" /></div>
                                    <div className="info-plan">
                                        <h4 className="color-brand-1">Standard</h4>
                                        <p className="font-md color-grey-400">Advanced project</p>
                                    </div>
                                </div>
                                <div className="box-day-trial"> <span className="font-lg-bold color-brand-1 text-price-standard"> $29 </span> <span className="font-md color-grey-500 text-type-standard">- user / month </span><br /><span className="font-xs color-grey-500">Billed annually</span></div>
                                <div className="mt-20"> <Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="mt-30 mb-30">
                                <ul className="list-ticks list-ticks-2">
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Max number of results per month
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Various innovative test
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Insightful analytics
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Additional user accounts
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Global Certificates
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Customization &amp; API Integration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card-plan-style-2 hover-up">
                            <div className="card-plan">
                                <div className="card-image-plan">
                                    <div className="icon-plan bg-2"> <img src="/images/business.svg" alt="wexelcode" /></div>
                                    <div className="info-plan">
                                        <h4 className="color-brand-1">Business</h4>
                                        <p className="font-md color-grey-400">Protect for testing</p>
                                    </div>
                                </div>
                                <div className="box-day-trial"> <span className="font-lg-bold color-brand-1 text-price-business"> $99 </span> <span className="font-md color-grey-500 text-type-business">- user / month</span><br /><span className="font-xs color-grey-500">Billed annually</span></div>
                                <div className="mt-20"> <Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="mt-30 mb-30">
                                <ul className="list-ticks list-ticks-2">
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Max number of results per month
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Various innovative test
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Insightful analytics
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Additional user accounts
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Global Certificates
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Customization &amp; API Integration
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Project dashboard, Gantt chart
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card-plan-style-2 hover-up">
                            <div className="card-plan">
                                <div className="card-image-plan">
                                    <div className="icon-plan bg-3"> <img src="/images/enterprise.svg" alt="wexelcode" /></div>
                                    <div className="info-plan">
                                        <h4 className="color-brand-1">Enterprise</h4>
                                        <p className="font-md color-grey-400">Protect for testing</p>
                                    </div>
                                </div>
                                <div className="box-day-trial"> <span className="font-lg-bold color-brand-1 text-price-enterprise"> $299 </span> <span className="font-md color-grey-500 text-type-enterprise">- user / month</span><br /><span className="font-xs color-grey-500">One-time pay</span></div>
                                <div className="mt-20"> <Link className="btn btn-brand-1-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="mt-30 mb-30">
                                <ul className="list-ticks list-ticks-2">
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Max number of results per month
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Various innovative test
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Insightful analytics
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Additional user accounts
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Global Certificates
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Customization &amp; API Integration
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Project dashboard, Gantt chart
                                    </li>
                                    <li>
                                        <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>Dedicated account manager
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing