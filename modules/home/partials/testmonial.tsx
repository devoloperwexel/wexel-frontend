import React from 'react'
//
import Reviews from '@/components/ui/reviews'

const Testmonial = () => {
    return (
        <section className="section mt-50 ">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-8 col-md-8">
                        <h2 className="color-brand-1 mb-20">What our custommers are saying</h2>
                        <p className="font-lg color-gray-500">Hear from our users<br className="d-none d-lg-block" /> </p>
                    </div>
                    
                    <div className="col-lg-4 col-md-4 text-md-end text-start"><a className="btn btn-default font-sm-bold pl-0">View All
                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg></a></div>
                </div>
                
                <div className="mt-50">
                    <div className="box-swiper">
                        <div className="swiper-container swiper-group-3">
                            <Reviews />
                            <div className="swiper-pagination swiper-pagination-2 swiper-pagination-group-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testmonial