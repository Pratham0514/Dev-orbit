import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Items } from "../Config/Course";

function Form() {
  const { id } = useParams();

  const course = Items.find((item) => item.id === Number(id));

  const [userdata, setUserdata] = useState({
    Username: "",
    Email: "",
    Password: "",
    Mobile: "",
    Address: "",
    Payment: "",
  });


  const paymentLinks = {
    UPI: ".........",
    Card: ".........",
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(userdata).some(
      (value) => value.trim() === ""
    );

    if (isEmpty) {
      alert("Please fill all the details");
      return;
    }

    console.log("User Data:", userdata);
    alert("You enrolled successfully 🎉");
  };

  if (!course) {
    return <h1 className="text-center text-2xl">Course Not Found</h1>;
  }

  return (
    <div className="pt-10 p-1 text-center border-2 border-[#ec7805] mx-auto mb-20 mt-5 rounded-[40px] w-[80%] pb-5 bg-[#FFF8DE]">
      <h1 className="text-4xl font-bold text-gray-600 mt-2">
        Enrolling the course
      </h1>

      <h1 className="text-4xl font-bold text-orange-400 mt-4">
        {course.name}
      </h1>

      <img
        src={course.cimage}
        alt={course.name}
        className="w-[20%] mx-auto rounded-xl mb-4 border border-[#ec7805]"
      />

      <p className="w-[50%] mx-auto text-2xl font-semibold text-gray-600 mb-5">
        {course.description}
      </p>

      <p className="text-2xl font-semibold text-green-600 mb-6">
        Price: ₹{course.price}
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-[30%] flex flex-col mx-auto mb-10 px-5 gap-4"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded"
          value={userdata.Username}
          onChange={(e) =>
            setUserdata({ ...userdata, Username: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 rounded"
          value={userdata.Email}
          onChange={(e) =>
            setUserdata({ ...userdata, Email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="border p-2 rounded"
          value={userdata.Password}
          onChange={(e) =>
            setUserdata({ ...userdata, Password: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Enter your mobile"
          className="border p-2 rounded"
          value={userdata.Mobile}
          onChange={(e) =>
            setUserdata({ ...userdata, Mobile: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Enter your address"
          className="border p-2 rounded"
          value={userdata.Address}
          onChange={(e) =>
            setUserdata({ ...userdata, Address: e.target.value })
          }
        />


        <div>
          <p className="font-semibold mb-2">Payment Method</p>

          {["UPI", "Card", "Cash"].map((method) => (
            <label key={method} className="mr-4">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={userdata.Payment === method}
                onChange={(e) =>
                  setUserdata({ ...userdata, Payment: e.target.value })
                }
              />
              {method}
            </label>
          ))}
        </div>

       
        {paymentLinks[userdata.Payment] && (
          <iframe
            src={paymentLinks[userdata.Payment]}
            title="Payment Gateway"
            className="w-full h-64 mt-4 border"
          />
        )}

       
        {userdata.Payment === "Cash" && (
          <p className="text-green-600 mt-3 font-semibold">
            Pay at center during first lecture
          </p>
        )}

        <button
          type="submit"
          className="w-[60%] mx-auto p-3 px-8 font-semibold border-2 border-[#F2A65A] bg-black text-white rounded-full hover:bg-[#F2A65A]"
        >
          Enroll Now
        </button>
      </form>
       <NavLink  to="/" className="w-[60%] mx-auto p-3 px-8 font-semibold border-2 border-[#F2A65A] bg-black text-white rounded-full hover:bg-[#F2A65A]">Back
       </NavLink>
    </div>
  );
}

export default Form;
