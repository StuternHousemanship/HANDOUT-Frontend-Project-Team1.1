import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/svg/desktop.svg";
import burgaIcon from "../../assets/svg/burga-icon.svg";
import earpodBag from "../../assets/svg/earpod-bag.svg";
import { NonAuthRoutes } from "../../url";
import frame12 from "../../assets/svg/Frame 12.png";
import handbag from "../../assets/svg/handbag.png";
import frame1924 from "../../assets/svg/Frame 1000001924.png";
import p2p from "../../assets/svg/P2PDWD0-removebg-preview 1.png";
import facebookIcon from "../../assets/svg/Icon color.png";
import InstagramIcon from "../../assets/svg/Icon color_1.png";
import twiterIcon from "../../assets/svg/Icon color_2.png";
import lady from "../../assets/svg/lady.png";
import rectangle from "../../assets/svg/Rectangle 19480.png";
import rectangle481 from "../../assets/svg/Rectangle 19481.png";
import rectangle450 from "../../assets/svg/Rectangle 19450.png";
import BestSellingProducts from "../../components/BestSellingProducts";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const ac = new AbortController();
    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <>
      <div className="xs:hidden md:inline-flex lg:inline-flex flex flex-col justify-center items-center bg-pink-500">
        <nav className="bg-white flex items-center justify-between shadow-3xl w-full h-[10%] z-[100] fixed top-0 left-0">
          <Link
            to="#home"
            smooth
            // type="button"
            // onClick={() => navigate(NonAuthRoutes.Home)}
            // className="cursor-pointer md:ml-[50px] md:h-[30px] xs:h-[25px] xs:ml-[20px]"
          >
            <img
              src={logo}
              className=" md:h-[30px] xs:h-[25px]"
              alt="Handout"
            />
          </Link>

          <div className="w-[80%] h-full flex flex-row justify-center items-center ">
            <ul className="w-[60%] h-full flex flex-row justify-center items-center font-Raleway text-[500] leading-24 text-[#2F2F2A] text-center ">
              <Link to="#home" smooth className="m-[15px]">
                <p>Home</p>
              </Link>
              <Link to="#productCategory" smooth className="m-[15px]">
                <p>Product Category</p>
              </Link>
              <button type="button" className="m-[15px]">
                <p>Contact Us</p>
              </button>
            </ul>

            <div className="w-[30%] flex justify-center items-center">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.SignUp)}
                className="m-[15px] w-[120px] h-[48px] bg-[#077369] rounded-[5px] flex justify-center items-center text-[#FFFFFF] font-[500] text-[15px] font-Raleway "
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.LogIn)}
                className="m-[15px] w-[120px] h-[48px] bg-[#FFFFFF] rounded-[5px] flex justify-center items-center text-[#077369] font-[500] text-[15px] font-Raleway border-[1px] border-[#077369]"
              >
                Log In
              </button>
            </div>
          </div>
        </nav>
      </div>
      <section
        id="home"
        className="w-[100%] h-[748px] flex flex-row justify-center items-center bg-[#FFFFFF] "
      >
        <aside className="w-[50%] h-full flex flex-col justify-start items-end ">
          <div className="w-[90%] h-[100%] flex flex-col justify-center items-start ">
            <p className="sm:text-[40px] md:text-[45px] lg:text-[64px] font-Raleway font-[700] text-[#077369] leading-[75px] ">
              Buy, Sell, Amazing Items On The Go
            </p>
            <p className="text-[#191919] font-[400] text-[24px] font-Raleway leading-[28px] mt-[75px] ">
              We have something for everyone. Get the best deals when you shop
              with us today.
            </p>
            <button
              type="button"
              onClick={() => navigate(NonAuthRoutes.SignUp)}
              className="mt-[75px] w-[282px] h-[60px] bg-[#077369] rounded-[4px] flex justify-center items-center text-[#FFFFFF] font-[700] text-[20px] font-Raleway leading-[24px] "
            >
              Get Started
            </button>
          </div>
        </aside>

        <aside className="w-[50%] h-[100%] flex flex-col justify-center items-center ">
          <div className="w-[90%] h-[90%] ">
            <div className="flex w-[90%] h-[30%] ">
              <div className="">
                <img
                  className="sm:w-[300px] sm:h-[400px] md:w-[400px] md:h-[500px] lg:w-[511px] lg:h-[600px] "
                  src={handbag}
                  alt="bag"
                />
              </div>
              <div className="">
                <img
                  className="sm:relative sm:right-[30px] md:relative md:right-[50px] lg:relative top-[100px] lg:right-[100px] "
                  src={frame12}
                  alt="shoe"
                />
              </div>
            </div>

            <div className="flex w-[100%] h-[70%] ml-[-70px] mt-[100px]">
              <div className="w-[80%] h-[100%]  ">
                <img
                  className="sm:h-[50%] md:-h-[90%] lg:h-[100%] w-[100%]"
                  src={p2p}
                  alt="speaker"
                />
              </div>

              <div className="sm:relative sm:right-[40px] sm:top-[40px]  md:relative md:right-[50px] md:top-[130px] lg:relative lg:top-[190px] lg:right-[100px]">
                <img className="" src={frame1924} alt="" />
              </div>
            </div>
          </div>
        </aside>
      </section>
      <section
        id="productCategory"
        className="w-[100%] h-[850px] flex flex-col justify-around items-center mt-[100px]"
      >
        <div className="w-[100%] h-[90%] flex flex-row justify-around items-center pt-[60px]">
          <div className="w-[40%] h-[100%] flex flex-col justify-center items-center">
            <img className="w-[80%] h-[100%] " src={lady} alt="" />
          </div>

          <div className="w-[60%] h-[100%] flex flex-col justify-center items-center">
            <div className="w-[85%] flex flex-col justify-center items-end">
              <p className="text-[40px] font-[700] text-[#07484A] font-Raleway ">
                Product Category
              </p>
            </div>
            <div className="w-[85%] flex flex-col justify-center items-end mt-[20px]">
              <p className="text-[14px] font-[400] text-[#75757A] font-Raleway">
                25 products found
              </p>
            </div>

            <div className="w-[90%] h-[85%] flex flex-row justify-around items-center ">
              <div className="flex flex-col justify-around items-center ">
                <div className="w-[300px] h-[180px] bg-[#EEF6F6] flex flex-col justify-around items-center rounded-[10px] mx-[5px] my-[10px]  ">
                  <p className="text-[48px] text-[#077369] font-Raleway ">
                    Tshirt
                  </p>
                  <div className="w-[80%] flex flex-col justify-center items-end ">
                    {" "}
                    <button
                      type="button"
                      className="w-[112px] h-[53px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                    >
                      Explore
                    </button>{" "}
                  </div>{" "}
                </div>
                <div className="w-[300px] h-[180px] bg-[#FFF5EE] flex flex-col justify-around items-center rounded-[10px] mx-[5px] my-[10px]    ">
                  <p className="text-[48px] text-[#077369] font-Raleway ">
                    Bags
                  </p>
                  <div className="w-[80%] flex flex-col justify-center items-end ">
                    {" "}
                    <button
                      type="button"
                      className="w-[112px] h-[53px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                    >
                      Explore
                    </button>{" "}
                  </div>{" "}
                </div>
                <div className="w-[300px] h-[180px] bg-[#EEF6F6] flex flex-col justify-around items-center rounded-[10px] mx-[5px] my-[10px]    ">
                  <p className="text-[48px] text-[#077369] font-Raleway ">
                    Swim Wear
                  </p>
                  <div className="w-[80%] flex flex-col justify-center items-end ">
                    {" "}
                    <button
                      type="button"
                      className="w-[112px] h-[53px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                    >
                      Explore
                    </button>{" "}
                  </div>{" "}
                </div>
              </div>
              <div className="md:hidden lg:inline-flex flex flex-col justify-around items-center">
                <div className="w-[300px] h-[180px] bg-[#FFF5EE] flex flex-col justify-around items-center rounded-[10px] mx-[5px] my-[10px]    ">
                  <p className="text-[48px] text-[#077369] font-Raleway ">
                    Wristwatch
                  </p>
                  <div className="w-[80%] flex flex-col justify-center items-end ">
                    {" "}
                    <button
                      type="button"
                      className="w-[112px] h-[53px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                    >
                      Explore
                    </button>{" "}
                  </div>{" "}
                </div>
                <div className="w-[300px] h-[180px] bg-[#EEF6F6] flex flex-col justify-around items-center rounded-[10px] mx-[5px] my-[10px]    ">
                  <p className="text-[48px] text-[#077369] font-Raleway ">
                    Shoes
                  </p>
                  <div className="w-[80%] flex flex-col justify-center items-end ">
                    {" "}
                    <button
                      type="button"
                      className="w-[112px] h-[53px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                    >
                      Explore
                    </button>{" "}
                  </div>{" "}
                </div>
                <div className="w-[300px] h-[180px] bg-[#FFF5EE] flex flex-col justify-around items-center rounded-[10px] mx-[5px] my-[10px]    ">
                  <p className="text-[48px] text-[#077369] font-Raleway ">
                    Camera
                  </p>
                  <div className="w-[80%] flex flex-col justify-center items-end ">
                    {" "}
                    <button
                      type="button"
                      className="w-[112px] h-[53px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                    >
                      Explore
                    </button>{" "}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[10%] flex flex-col justify-center items-center">
          <button
            type="button"
            className="w-[345px] h-[60px] rounded-[4px] bg-[#077369] text-[#FFFFFF] font-[400] font-Raleway "
          >
            View all categories
          </button>
        </div>
      </section>
      <section className="xs:hidden md:inline-flex lg:inline-flex flex flex-col justify-center items-center h-screen w-full bg-white">
        <div className="w-[85%] flex flex-col justify-center items-start">
          <header className="h-[100px] w-full">
            <h1 className="font-Raleway font-700 text-[40px] text-[#07484A]">
              Best Selling Products
            </h1>
            <hr className="w-[10%] h-[5px] bg-[#077369] mb-5" />
          </header>

          <BestSellingProducts />
        </div>
      </section>
      <section className="xs:hidden md:inline-flex mt-[0px] lg:mt-[0px] lg:inline-flex bg-[#FFFFFF] w-[100%] h-[500px] flex flex-col justify-around items-center ">
        <div className="md:w-[90%] md:h-[20%] lg:w-[90%] lg:h-[10%] flex flex-col justify-around items-start">
          <p className="md:text-[35px] lg:text-[45px] text-[#07484A] font-[700] font-Raleway  ">
            Testimonials
          </p>
        </div>
        <div className="md:mt-[-150px] lg:mt-[0px] lg:w-[90%] h-[80%] flex flex-row justify-between items-center">
          <div className="md:w-[50%] md:h-[60%] ml-[50px] lg:ml-[0px] lg:h-[100%] lg:w-[50%] flex flex-col justify-around items-center">
            <div>
              <p className="md:text-[18px] lg:text-[24px] text-[#07484A] font-Raleway font-[700] ">
                happy customers review.
              </p>
              <p className="md:text-[16px] lg:text-[24px] text-[#07484A] font-Raleway font-[400] mt-[15px] ">
                “My experience with Mark is a complete success, from customer
                service, wide range of products, clean store, purchasing
                experience, the newsletter. Thank you.”
              </p>
            </div>
            <div className="w-[100%] flex flex-col justify-center items-start">
              <p className="md:text-[16px] lg:text-[24px] text-[#07484A] font-[700] font-Raleway ">
                Thami Stutern
              </p>
              <p className="md:text-[14px] lg:text-[24px] text-[#07484A] font-[300] font-Raleway">
                Lead Product Designer Google
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="md:relative md:top-[150px] lg:relative top-[150px] flex flex-row justify-center items-end  ">
              <img
                className="md:w-[80px] md:h-[200px] lg:w-[100px] h-[300px]"
                src={rectangle481}
                alt=""
              />
              <img
                className="md:w-[210px] md:h-[70px] lg:w-[250px] h-[154px] "
                src={rectangle450}
                alt=""
              />
            </div>
            <div className="md:relative md:bottom-[60px] lg:relative bottom-[140px]">
              <img
                className="md:w-[260px] md:h-[200px] lg:w-[320px] h-[300px] "
                src={rectangle}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="xs:hidden md:inline-flex lg:inline-flex bg-[#284441] w-[100%] h-[150px] flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-start w-[40%] h-full ">
          <p className="font-[700] text-[12px] leading-[24px] text-[#FFFFFF] ">
            New to HANDOUT?
          </p>
          <p className="font-Roboto text-[#C7C7CD] text-[12px] ">
            Join our mailing list to get updates on our latest features and best
            deals per time!
          </p>
          <div className="flex mt-[10px]  ">
            <input
              type="text"
              className="border-[1px] border-[#717171] outline-0 pl-[5px] rounded-[4px] h-[30px]"
              placeholder="Enter email address "
            />
            <button
              type="button"
              className="ml-[10px] w-[60px] h-[30px] bg-[#077369] rounded-[4px] flex justify-center items-center text-[#FFFFFF] font-[400] text-[15px] font-Roboto border-[1px] border-[#0FFFFFF]"
            >
              Male
            </button>
            <button
              type="button"
              className="ml-[10px] w-[60px] h-[30px] bg-[#077369] rounded-[4px] flex justify-center items-center text-[#FFFFFF] font-[400] text-[15px] font-Roboto border-[1px] border-[#FFFFFF]"
            >
              Female
            </button>
          </div>
        </div>
      </section>
      <footer className="xs:hidden md:inline-flex lg:inline-flex w-[100%] h-[451px] bg-[#E6F1F0] flex flex-col justify-around items-center ">
        <div className="flex flex-col items-start justify-center w-[80%] h-[20%]">
          <nav className="flex flex-col items-start justify-center w-[80%] h-[20%] ">
            <button
              type="button"
              onClick={() => navigate(NonAuthRoutes.Home)}
              className="cursor-pointer md:ml-[] md:h-[30px] xs:h-[25px] xs:ml-[]"
            >
              <img
                src={logo}
                className=" md:h-[30px] xs:h-[25px]"
                alt="Handout"
              />
            </button>
          </nav>
        </div>

        <div className="w-[80%] h-[60%] flex flex-row justify-between items-center text-[#07484A] font-Raleway text-[14px] ">
          <div className="w-[20%] flex flex-col justify-around items-start ">
            <ul className="flex mb-[25px] ">
              <li className="mr-[12px]">
                <img src={facebookIcon} alt="" />{" "}
              </li>
              <li className="mr-[12px]">
                <img src={InstagramIcon} alt="" />{" "}
              </li>
              <li className="mr-[12px]">
                <img src={twiterIcon} alt="" />{" "}
              </li>
            </ul>
            <ul className="">
              <li className="font-[700]">Address</li>
              <li>+234 8060462902</li>
              <li>Illupeju Road, Illupeju</li>
              <li>100252, Lagos Nigeria</li>
            </ul>
          </div>

          <div className="w-[70%] flex flex-row justify-around items-center ">
            <ul>
              <li className="mb-[36px] font-[700]">My Account</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Order status</li>
            </ul>
            <ul>
              <li className="mb-[36px] font-[700]">Help</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Donation</li>
            </ul>
            <ul className="">
              <li className="mb-[36px] font-[700]">Shop</li>
              <li>All Products</li>
              <li>Bedroom</li>
              <li>Dinning Room</li>
            </ul>
            <ul>
              <li className="mb-[36px] font-[700]">Legal</li>
              <li>Shipping & Delivery</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
        </div>

        <div className="w-[80%] h-[20%] flex flex-col justify-around items-start text-[#07484A] font-Raleway text-[12px]  ">
          <p>Copyright ©2022 HANDOUT. All Rights Reserved</p>
        </div>
      </footer>
      {/* Mobile view */}{" "}
      <div className="md:hidden lg:hidden w-[100%] h-full flex flex-col justify-center items-center px-[10px] ">
        <div className="bg-white flex items-center justify-between shadow-3xl w-full h-[10%] z-[100] fixed top-0 left-0 px-[10px] ">
          <button
            type="button"
            onClick={() => navigate(NonAuthRoutes.Home)}
            className="cursor-pointer ml-[10px]"
          >
            <img src={logo} className="xs:h-[20px]" alt="Handout" />
          </button>
          <button
            type="button"
            onClick={() => navigate(NonAuthRoutes.Home)}
            className="cursor-pointer mr-[10px]"
          >
            <img src={burgaIcon} className="h-[20px]" alt="Handout" />
          </button>
        </div>
        <section className="w-[100%] h-[550px] flex flex-col justify-center items-center mt-[10px] ">
          <div className="w-[100%] h-full flex flex-col justify-center items-center ">
            <div className="w-[100%] h-[30%] flex flex-col justify-center items-end mr-[] ">
              <img
                className="w-[180px] h-[260px] mr-[-10px] "
                src={earpodBag}
                alt="bag"
              />
            </div>
            <div className="w-[70%] h-[70%] flex flex-col justify-center items-center mt-[-100px] ">
              <div className="flex flex-col justify-center items-center text-[30px] font-Raleway font-[700] text-[#077369] leading-[45px]">
                <p className="">Buy, Sell,</p>
                <p>Amazing Items</p>
                <p> On The Go</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[#191919] font-[400] text-[16px] font-Raleway leading-[28px] mt-[20px] ">
                  We have something for everyone.
                </p>
                <p>Get the best deals</p>
                <p> when you shop with us today.</p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => navigate(NonAuthRoutes.SignUp)}
                  className="mt-[25px] w-[182px] h-[43px] bg-[#077369] rounded-[4px] flex justify-center items-center text-[#FFFFFF] font-[700] text-[20px] font-Raleway leading-[24px] "
                >
                  Sign up
                </button>
                <button
                  type="button"
                  onClick={() => navigate(NonAuthRoutes.SignUp)}
                  className="mt-[20px] w-[182px] h-[43px] bg-[#ffffff] rounded-[4px] flex justify-center items-center text-[#077369] font-[700] text-[20px] font-Raleway leading-[24px] border-[1px] border-[#077369] "
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[100%] h-[1000px] flex flex-col justify-center items-center bg-[#ffffff]">
          <div className="w-[85%] flex flex-col justify-center items-end ">
            <div className="w-[85%] flex flex-col justify-center items-end ">
              <p className="text-[24px] font-[500] text-[#07484A] font-Raleway ">
                Product Category
              </p>
            </div>
          </div>
          <div className="w-[85%] flex flex-col justify-center items-end mt-[10px]">
            <p className="text-[14px] font-[400] text-[#75757A] font-Raleway">
              25 products found
            </p>
          </div>
          <div className="flex flex-col justify-around items-center ">
            <div className="w-[300px] h-[180px] bg-[#EEF6F6] flex flex-col justify-center items-center rounded-[10px] mx-[5px] my-[10px]  ">
              <p className="text-[36px] text-[#077369] font-Raleway ">Tshirt</p>
              <div className="w-[80%] flex flex-col justify-center items-center ">
                {" "}
                <button
                  type="button"
                  className="w-[112px] h-[39px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                >
                  Explore
                </button>{" "}
              </div>{" "}
            </div>
            <div className="w-[300px] h-[180px] bg-[#FFF5EE] flex flex-col justify-center items-center rounded-[10px] mx-[5px] my-[10px]    ">
              <p className="text-[36px] text-[#077369] font-Raleway ">Bags</p>
              <div className="w-[80%] flex flex-col justify-center items-center ">
                {" "}
                <button
                  type="button"
                  className="w-[112px] h-[39px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                >
                  Explore
                </button>{" "}
              </div>{" "}
            </div>
            <div className="w-[300px] h-[180px] bg-[#EEF6F6] flex flex-col justify-center items-center rounded-[10px] mx-[5px] my-[10px]    ">
              <p className="text-[36px] text-[#077369] font-Raleway ">
                Swim Wear
              </p>
              <div className="w-[80%] flex flex-col justify-center items-center ">
                {" "}
                <button
                  type="button"
                  className="w-[112px] h-[39px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                >
                  Explore
                </button>{" "}
              </div>{" "}
            </div>
            <div className="w-[300px] h-[180px] bg-[#EEF6F6] flex flex-col justify-center items-center rounded-[10px] mx-[5px] my-[10px]    ">
              <p className="text-[36px] text-[#077369] font-Raleway ">Camera</p>
              <div className="w-[80%] flex flex-col justify-center items-center ">
                {" "}
                <button
                  type="button"
                  className="w-[112px] h-[39px] bg-[#077369] font-Raleway rounded-[6px] text-[18px] text-[#FFFFFF] font-[400] "
                >
                  Explore
                </button>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="w-[100%] h-[10%] flex flex-col justify-center items-center">
            <button
              type="button"
              className="w-[345px] h-[60px] rounded-[4px] bg-[#077369] text-[#FFFFFF] font-[400] font-Raleway "
            >
              View all categories
            </button>
          </div>
        </section>
        <section className=" bg-[#ffffff] w-[100%] h-[400px] flex flex-col justify-around items-center my-[20px]">
          <div className="w-[90%] h-[10%] flex flex-col justify-center items-start">
            <p className="text-[#07484A] font-[700] font-Raleway text-[24px] ">
              Testimonials
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-[30px] ">
            <div className="flex flex-row justify-center items-end">
              <img className="h-[160px] w-[50px] " src={rectangle481} alt="" />
              <img className="h-[80px] w-[180px] " src={rectangle450} alt="" />
            </div>
            <div className="mt-[-140px] ">
              <img className="w-[200px] " src={rectangle} alt="" />
            </div>
          </div>
          <div className="w-[90%] h-[80%] flex flex-col justify-center items-center mt-[25px] ">
            <div className="w-[70%] h-[100%] flex flex-col justify-around items-center">
              <div className="flex flex-col justify-around items-center ">
                <p className="text-[#07484A] text-[16px] font-Raleway font-[500] ">
                  Happy customers review.
                </p>
                <p className="text-[#07484A] text-[14px] font-Raleway font-[400] mt-[] ">
                  “My experience with Mark is a complete success, from customer
                  service, wide range of products, clean store, purchasing
                  experience, the newsletter. Thank you.”
                </p>
              </div>
              <div className="w-[100%] flex flex-col justify-center items-center">
                <p className="text-[#07484A] font-[500] text-[16px] font-Raleway ">
                  Thami Stutern
                </p>
                <p className="text-[#07484A] font-[300] text-[12px] font-Raleway">
                  Lead Product Designer Google
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-[#284441] w-[100%] h-[250px] flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-around items-center w-[50%] h-[70%] ">
            <p className="font-[700] text-[12px] leading-[24px] text-[#FFFFFF] ">
              New to HANDOUT?
            </p>
            <p className="font-Roboto text-[#C7C7CD] text-[12px] ">
              Join our mailing list to get updates on our latest features and
              best deals per time!
            </p>
            <div className="w-[100%] flex flex-col justify-around items-center mt-[10px]  ">
              <input
                type="text"
                className="w-[100%] border-[1px] border-[#717171] outline-0 pl-[5px] rounded-[4px] h-[30px]"
                placeholder="Enter email address "
              />

              <button
                type="button"
                className="mt-[20px] w-[150px] h-[30px] bg-[#077369] rounded-[4px] flex justify-center items-center text-[#FFFFFF] font-[400] text-[15px] font-Roboto border-[1px] border-[#FFFFFF]"
              >
                Submit
              </button>
            </div>
          </div>
        </section>
        <footer className="w-[100%] h-[551px] bg-[#E6F1F0] flex flex-col justify-around items-center">
          <section className="flex flex-col items-start justify-center w-[100%] h-[20%]">
            <nav className="flex flex-col items-start justify-center w-[80%] h-[20%] ">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.Home)}
                className="cursor-pointer md:ml-[] md:h-[30px] xs:h-[25px] xs:ml-[]"
              >
                <img src={logo} className="xs:h-[20px]" alt="Handout" />
              </button>
            </nav>
          </section>
          <section className="w-[100%] flex flex-col justify-around items-start text-[12px] ">
            <ul className="flex mb-[25px] ">
              <li className="mr-[12px]">
                <img src={facebookIcon} alt="" />{" "}
              </li>
              <li className="mr-[12px]">
                <img src={InstagramIcon} alt="" />{" "}
              </li>
              <li className="mr-[12px]">
                <img src={twiterIcon} alt="" />{" "}
              </li>
            </ul>
            <ul className="">
              <li className="font-[600]">Address</li>
              <li>+234 8060462902</li>
              <li>Illupeju Road, Illupeju</li>
              <li>100252, Lagos Nigeria</li>
            </ul>
          </section>
          <section className="w-[100%] flex flex-col justify-center items-start text-[12px] ">
            <div className="w-[45%] flex flex-row justify-between items-center  ">
              <ul>
                <li className="mb-[10px] font-[600]">My Account</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Order status</li>
              </ul>
              <ul>
                <li className="mb-[10px] font-[600]">Help</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Donation</li>
              </ul>
            </div>
          </section>
          <section className="w-[100%] flex flex-col justify-center items-start text-[12px]">
            <div className="w-[55%] flex flex-row justify-between items-center ">
              <ul className="">
                <li className="mb-[10px] font-[600]">Shop</li>
                <li>All Products</li>
                <li>Bedroom</li>
                <li>Dinning Room</li>
              </ul>
              <ul>
                <li className="mb-[10px] font-[600]">Legal</li>
                <li>Shipping & Delivery</li>
                <li>Terms & Conditions</li>
                <li>Privacy & Policy</li>
              </ul>
            </div>
          </section>
          <section className="w-[80%] h-[8%] flex flex-col justify-around items-start text-[#07484A] font-Raleway text-[10px]  ">
            <p>Copyright ©2022 HANDOUT. All Rights Reserved</p>
          </section>
        </footer>
      </div>{" "}
    </>
  );
}

export default Home;
