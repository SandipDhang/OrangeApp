import React from "react";
import Header from "../Header/Header";

const Orders = () => {
  const handleClick = (e) => {
    console.log(e.target.siblings);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="OrderContainer">
        <div className="ImgHolder">
          <img src="/order-slider3.png" alt="OrderHeroImg" />
        </div>
        <div className="summaryHolder">
          <p>Choose Product Plan</p>
          <div className="OrderTypeBtnContainer">
            <button className="myBtn active" onClick={handleClick}>
              Postpaid
            </button>
            <button className="myBtn" onClick={handleClick}>
              Prepaid
            </button>
          </div>
          <div className="ProductHolder">
            <div className="Products">
              <img src="p1.png" alt="ProductLogo" />
              <div className="Desc">
                <p>Cow Milk - Pouch Pack - 500 ML</p>
                <p>₹ 31</p>
              </div>
              <div className="AddBtn">
                <div className="minus">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-dash"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </div>
                <div className="qty">Add</div>
                <div className="plus">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-plus"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="Products">
              <img src="p1.png" alt="ProductLogo" />
              <div className="Desc">
                <p>Cow Milk - Pouch Pack - 500 ML</p>
                <p>₹ 31</p>
              </div>
              <div className="AddBtn">
                <div className="minus">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-dash"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </div>
                <div className="qty">Add</div>
                <div className="plus">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-plus"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="Products">
              <img src="p1.png" alt="ProductLogo" />
              <div className="Desc">
                <p>Cow Milk - Pouch Pack - 500 ML</p>
                <p>₹ 31</p>
              </div>
              <div className="AddBtn">
                <div className="minus">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-dash"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </div>
                <div className="qty">Add</div>
                <div className="plus">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-plus"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="Products">
              <img src="p1.png" alt="ProductLogo" />
              <div className="Desc">
                <p>Cow Milk - Pouch Pack - 500 ML</p>
                <p>₹ 31</p>
              </div>
              <div className="AddBtn">
                <div className="minus">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-dash"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </div>
                <div className="qty">Add</div>
                <div className="plus">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-plus"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p>Delivery Start Date</p>
          <div className="deliveryDateBtnHolder">
            <button className="myBtn active">Tomorrow</button>
            <button className="myBtn">12 Dec 2020</button>
            <button className="myBtn">13 Dec 2020</button>
          </div>
          <p className="OrderTotal"> Order Total ₹ </p>
          <button className="OrderBtn active">Proceed</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Orders;
