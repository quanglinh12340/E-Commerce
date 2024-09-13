import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import logo from "@/assets/logo.png";
import SummaryApi from "@/common";
import { toast } from "react-toastify";
import { setUserDetails } from "@/store/userSlice";
import ROLE from "@/common/role";
import Context from "@/context";
import "@/assets/css/Header.css";

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/":
        setActiveLink("home");
        break;
      case "/about":
        setActiveLink("about");
        break;
      case "/contact":
        setActiveLink("contact");
        break;
      case "/sign-up":
        setActiveLink("sign-up");
        break;
      default:
        setActiveLink("");
        break;
    }
  }, [window.location.pathname]);

  const user = useSelector((state) => state?.user?.user); //Lấy thông tin người dùng từ Redux Store
  const dispatch = useDispatch();

  const context = useContext(Context);

  const navigate = useNavigate();

  const searchInput = useLocation();
  const URLsearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLsearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40">
      <div className="container h-full mx-auto flex items-center px-10 justify-between">
        <div className="">
          <Link to={"/"}>
            <img className="w-24 h-24" src={logo} alt="" />
          </Link>{" "}
        </div>
        <div id="header">
          <div>
            <ul id="navbar">
              <li>
                <Link
                  to={"/"}
                  className={activeLink === "home" ? "active" : ""}
                  onClick={() => setActiveLink("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={activeLink === "contact" ? "active" : ""}
                  onClick={() => setActiveLink("contact")}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={activeLink === "about" ? "active" : ""}
                  onClick={() => setActiveLink("about")}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to={"/blog"}
                  className={activeLink === "blog" ? "active" : ""}
                  onClick={() => setActiveLink("blog")}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Search product here..."
              onChange={handleSearch}
              value={search}
            />
            <div className="search-icon">
              <GrSearch />
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            className="w-full outline-none "
            type="text"
            placeholder="Search product here...."
            onChange={handleSearch}
            value={search}
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div> */}
        <div className="flex items-center gap-7">
          <div className="relative flex justify-center">
            {user?._id && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={() => setMenuDisplay((prev) => !prev)}
              >
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    className="w-11 h-11 rounded-full"
                    alt="User Profile"
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}
            {menuDisplay && (
              <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded ">
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to={"/admin-panel/all-products"}
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((prev) => !prev)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <Link
                    to={"/order"}
                    className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2 text-center   "
                    onClick={() => setMenuDisplay((prev) => !prev)}
                  >
                    Order
                  </Link>
                </nav>
              </div>
            )}
          </div>
          {user?._id && (
            <Link to={"/cart"} className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>
              <div className="bg-red-600 text-white w-5 h-5 p-1  rounded-full flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">{context?.cartProductCount}</p>
              </div>
            </Link>
          )}
          <div>
            {user?._id ? (
              <button
                className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
