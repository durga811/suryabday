import React, { useState } from "react";

const Registation = () => {
  const [hideform, setHideform] = useState(0);
  const [userName, setUserName] = useState("");
  const [msg, setMsg] = useState("");
  const onSubmitFunction = async (e) => {
    e.preventDefault();
    if (userName != "") {
      const res = fetch(
        "https://suryabirthday-665eb-default-rtdb.asia-southeast1.firebasedatabase.app/friendslist.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userName),
        }
      );
      if (res) {
        setHideform(1);
        setMsg("you have successfully submitted, Please come in time!");
      } else {
        setMsg("there was an error in Submission");
      }
    }
  };
  const userNameFunction = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      <div>
        {hideform ? (
          <div class=" text-xl pb-8" style={{ color: "#c93a32" }}>{msg}</div>
        ) : (
          <form class="w-full max-w-sm m-auto">
            <div class=" items-center border-b border-white-500 py-2">
              <input
                class=" text-black border-4 rounded-lg border-purple-800	 w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Full Name"
                aria-label="Full name"
                value={userName}
                onChange={userNameFunction}
                required
              />
              <br />
              <button
               style={{backgroundColor:"#66347F",}}

                class=" text-xl md:text-2xl m-8 pl-6 pr-6 italic font-['Lovelace']"
                type="submit"
                onClick={onSubmitFunction}
              >
                Count Me In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registation;
