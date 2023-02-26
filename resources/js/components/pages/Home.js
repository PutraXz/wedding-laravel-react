import React from "react";
import Navbar from "../layouts/Navbar";
    class Home extends React.Component{
        render(){
            return(
                <>
                    <Navbar />
                    <section className="preview">
                        <div className="container me-0 pe-0  pt-5">
                            <div className="row pt-5 mx-0">
                                <div className="col-sm-12 col-md-6 col-lg-6 ">
                                    <h2 className="pt-5 fs-1">Website Undangan Pernikahan</h2>
                                    <p className="pt-2 fs-4 mb-0">Masa aktif selamanya dan edit tanpa batas!</p>
                                    <p className="fw-bolder fs-3">Fitur paling lengkap banyak preset siap pakai</p>
                                    <button className="btn btn-danger btn-lg">Coba Sekarang</button>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 pe-0" >
                                    <img src={"/products/banner.png"} alt="" className="w-100 d-inline-block" style={{marginTop: "-4.55rem"}} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="theme ">
                        <div className="container">
                            <h2 className="pt-5 text-center">Theme On Website</h2>
                            <div className="row pb-5">
                                <div className="col-md-4 col-12 pt-4">
                                    <div className="card">
                                        <img src={'/products/card.jpg'} alt=""/>
                                    <div className="card-body">
                                        <h4>Blue Floower</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 pt-4">
                                <div className="card">
                                    <img src={'/products/card.jpg'} alt=""/>
                                    <div className="card-body">
                                        <h4>Blue Floower</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 pt-4">
                                <div className="card">
                                    <img src={'/products/card.jpg'} alt=""/>
                                    <div className="card-body">
                                        <h4>Blue Floower</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 pt-4">
                                <div className="card">
                                    <img src={'/products/card.jpg'} alt=""/>
                                    <div className="card-body">
                                        <h4>Blue Floower</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 pt-4">
                                <div className="card">
                                    <img src={'/products/card.jpg'} alt=""/>
                                    <div className="card-body">
                                        <h4>Blue Floower</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 pt-4">
                                <div className="card">
                                    <img src={'/products/card.jpg'} alt=""/>
                                    <div className="card-body">
                                        <h4>Blue Floower</h4>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section className="why">
                        <div className="container pb-5">
                            <h4 className=" pt-5 text-center">Mengapa Undangan Digital?</h4>
                            <p className="text-center">Manfaat yang anda dapatkan menggunakan undangan digital :</p>
                            <div className="row py-5">
                                <div className="col-12 col-md-3 p-0">
                                    <div className="card border-0" style={{backgroundColor: "#e6e7e8"}}>
                                        <img src={'/products/invita_homepage_iconsavetime.svg'} alt="" className="w-75 mx-auto d-block pt-5"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 p-0">
                                    <div className="card border-0" style={{backgroundColor: "#f1f1f1"}}>
                                        <img src={'/products/invita_homepage_iconsavetime.svg'} alt="" className="w-75 mx-auto d-block pt-5"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 p-0">
                                    <div className="card border-0" style={{backgroundColor: "#e6e7e8"}}>
                                        <img src={'/products/invita_homepage_iconsavetime.svg'} className="w-75 mx-auto d-block pt-5"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 p-0">
                                    <div className="card border-0" style={{backgroundColor: "#f1f1f1"}}>
                                        <img src={'/products/invita_homepage_iconsavetime.svg'} className="w-75 mx-auto d-block pt-5"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sayThey">
                        <div className="container pt-5">
                            <h4 className="text-center pt-5">Apa Kata Mereka?</h4>
                            <p className="text-center">Cari Tahu Apa Kata Mereka Yang Telah Mmebuat Undangan Digital</p>
                            <div className="row py-5 ">
                                <div className="col-12 col-md-6">
                                    <img src={'/products/invita_homepage_iconsavetime.svg'} alt="" className="mx-auto d-block"/>
                                    <h5 className="text-center">Fredi Wong</h5>
                                    <p className="text-center">Thanks Invita.id for the great support in making us easier to share our digital invitation to our lovely guest. We can share any of our wedding vibe just put everything inside the invitation. It can be theme-customized with all data for couples such as; our love story, our prewed photography, our guest list reservations, wishes and still so many thigs to add. Thanks for made it happened!</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <img src={'/products/test.png'} alt="" className="w-75 mx-auto d-block"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
        }
    }
export default Home;