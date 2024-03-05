"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import CreatePost from "../components/CreatePost";
import AllPosts from "../components/AllPosts";
import EditPost from "../components/EditPosts";

const Page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <div className="flex flex-col items-center justify-center">
          <img className="rounded-full" src={user.photoURL} alt="image" />
          <p>
            Welcome, {user.displayName} - you are logged in.
          </p>
          <div className="mt-4">
            {/* Create a new post form */}
            <div className="mt-4">
              <CreatePost />
            </div>
          </div>
          {/* Display all posts */}
          <div className="flex flex-col items-center justify-center w-1/2">
            <div className="mt-4 border border-white">
              <AllPosts />
            </div>
          </div>
        </div>
      ) : (
        <p>You must be logged in to view this page - protected route.</p>
      )}
    </div>
  );
};


export default Page;