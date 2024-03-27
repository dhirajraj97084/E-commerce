import React from "react";

function Products() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="heading">
            <h1 className="text-2xl md:text-3xl font-bold flex justify-center mt-5">
              Bestshelling Products
            </h1>
          </div>
          <div className="items flex flex-wrap justify-center ">
            <div className="inner w-fit m-4  ">
              <div className="subinner p-4 shadow-xl bg-gray-200 rounded-md">
                <div className="img h-fit">
                  <img
                    className="w-fit md:w-60 md:h-72 rounded-md border-b-4 border-orange-500 border-r-2 shadow-md"
                    src="https://images.pexels.com/photos/20616462/pexels-photo-20616462/free-photo-of-smiling-bride-in-dress.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                  />
                </div>
                <div className="div">
                  <h1 className="text-sm">E-com</h1>
                  <h2 className="text-xl font-semibold text-balance">
                    Lorem ipsum dolor <br /> sit amet consectetur.
                  </h2>
                  <h3 className="text-xl">Rs.500</h3>
                </div>
                <div className="button">
                  <button className="py-2 shadow-md bg-[#d948ef] w-full text-xl font-semibold rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="inner w-fit m-4 ">
              <div className="subinner p-4 shadow-xl bg-gray-200 rounded-md">
                <div className="img h-fit">
                  <img
                    className="w-fit md:w-60 md:h-72 rounded-md border-b-4 border-orange-500 border-r-2 shadow-md"
                    src="https://images.pexels.com/photos/17464952/pexels-photo-17464952/free-photo-of-woman-holding-a-handbag.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                  />
                </div>
                <div className="div">
                  <h1 className="text-sm">E-com</h1>
                  <h2 className="text-xl font-semibold text-balance">
                    Lorem ipsum dolor <br /> sit amet consectetur.
                  </h2>
                  <h3 className="text-xl">Rs.500</h3>
                </div>
                <div className="button">
                  <button className="py-2 shadow-md bg-[#d948ef] w-full text-xl font-semibold rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
               
            <div className="inner w-fit m-4 ">
              <div className="subinner p-4 shadow-xl bg-gray-200 rounded-md">
                <div className="img h-fit">
                  <img
                    className="w-fit md:w-60 md:h-72 rounded-md border-b-4 border-orange-500 border-r-2 shadow-md"
                    src="https://images.pexels.com/photos/18382105/pexels-photo-18382105/free-photo-of-hindu-bride-and-groom-standing-outside-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="img"
                  />
                </div>
                <div className="div">
                  <h1 className="text-sm">E-com</h1>
                  <h2 className="text-xl font-semibold text-balance">
                    Lorem ipsum dolor <br /> sit amet consectetur.
                  </h2>
                  <h3 className="text-xl">Rs.500</h3>
                </div>
                <div className="button">
                  <button className="py-2 shadow-md bg-[#d948ef] w-full text-xl font-semibold rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="inner w-fit m-4 ">
              <div className="subinner p-4 shadow-xl bg-gray-200 rounded-md">
                <div className="img h-fit">
                  <img
                    className="w-fit md:w-60 md:h-72 rounded-md border-b-4 border-orange-500 border-r-2 shadow-md"
                    src="https://images.pexels.com/photos/12963835/pexels-photo-12963835.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                  />
                </div>
                <div className="div">
                  <h1 className="text-sm">E-com</h1>
                  <h2 className="text-xl font-semibold text-balance">
                    Lorem ipsum dolor <br /> sit amet consectetur.
                  </h2>
                  <h3 className="text-xl">Rs.500</h3>
                </div>
                <div className="button">
                  <button className="py-2 shadow-md bg-[#d948ef] w-full text-xl font-semibold rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
