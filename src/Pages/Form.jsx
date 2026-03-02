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
    return <h1 className="text-center text-2xl mt-20">Course Not Found</h1>;
  }

  return (
    <div className="pt-16 px-4">
      <div className="max-w-4xl mx-auto mb-20 mt-10 p-6 bg-[#FFF8DE] border-2 border-[#ec7805] rounded-3xl text-center">

        <h1 className="text-2xl md:text-4xl font-bold text-gray-600">
          Enrolling the course
        </h1>

        <h2 className="text-xl md:text-3xl font-bold text-orange-400 mt-4">
          {course.name}
        </h2>

        <img
          src={course.cimage}
          alt={course.name}
          className="w-32 md:w-48 mx-auto rounded-xl mb-4 border border-[#ec7805]"
        />

        <p className="max-w-2xl mx-auto text-base md:text-xl font-medium text-gray-600 mb-4">
          {course.description}
        </p>

        <p className="text-xl md:text-2xl font-semibold text-green-600 mb-6">
          Price: ₹{course.price}
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4"
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

          {/* Payment Method */}
          <div className="text-left">
            <p className="font-semibold mb-2">Payment Method</p>

            <div className="flex flex-wrap gap-4">
              {["UPI", "Card", "Cash"].map((method) => (
                <label key={method} className="flex items-center gap-2">
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
          </div>

          {/* Payment iframe */}
          {paymentLinks[userdata.Payment] && (
            <iframe
              src={paymentLinks[userdata.Payment]}
              title="Payment Gateway"
              className="w-full h-64 mt-4 border rounded"
            />
          )}

          {userdata.Payment === "Cash" && (
            <p className="text-green-600 mt-3 font-semibold">
              Pay at center during first lecture
            </p>
          )}

          <button
            type="submit"
            className="w-full p-3 font-semibold border-2 border-[#F2A65A] bg-black text-white rounded-full hover:bg-[#F2A65A] transition"
          >
            Enroll Now
          </button>
        </form>

        <NavLink
          to="/"
          className="inline-block mt-6 px-8 py-3 font-semibold border-2 border-[#F2A65A] bg-black text-white rounded-full hover:bg-[#F2A65A] transition"
        >
          Back
        </NavLink>
      </div>
    </div>
  );
}

export default Form;