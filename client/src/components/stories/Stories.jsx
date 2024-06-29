import { useContext, useEffect, useState } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );

  // useEffect(() => {
  //   makeRequest.get("/users/all-users").then((res) => {
  //     setUsers(res);
  //   });
  // }, []);

  //TODO Add story using react-query mutations and use upload function.

  const stories = [
    {
      id: 1,
      name: "Swagat",
      img: "https://images.unsplash.com/photo-1616190419596-e2839e7380d7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Saheb",
      img: "https://images.unsplash.com/photo-1626548307930-deac221f87d9?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Suraj",
      img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Pritam",
      img: "https://images.unsplash.com/photo-1625316708582-7c38734be31d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : stories.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  );
};

export default Stories;
