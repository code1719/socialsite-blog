"use client"
import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// Component to create a new post
const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), post);
      console.log("Document written with ID: ", docRef.id);
      // Clear the form after submission
      setPost({ title: "", body: "" });
      console.log("Document Created");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="text-black border border-black rounded"
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleChange}
      />
      <textarea
        className="text-black border border-black rounded"
        name="body"
        placeholder="Body"
        value={post.body}
        onChange={handleChange}
      />
      <button className="text-white bg-red-400 rounded-lg" type="submit">
        Add Post
      </button>
    </form>
  );
};

export default CreatePost;