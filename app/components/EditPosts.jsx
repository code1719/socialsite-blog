"use client"
import { useState } from "react";
import { db } from "../firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

// Component to edit a post
const EditPost = ({ postId, currentTitle, currentBody }) => {
  const [editedPost, setEditedPost] = useState({
    title: currentTitle,
    body: currentBody,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({ ...editedPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postDocRef = doc(db, "posts", postId);
      await updateDoc(postDocRef, {
        title: editedPost.title,
        body: editedPost.body,
      });
      console.log("Document successfully updated!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="bg-gray-300  text-black border border-black rounded p-1"
        type="text"
        name="title"
        placeholder="Title"
        value={editedPost.title}
        onChange={handleChange}
      />
      <textarea
        className="bg-gray-300  text-black border border-black rounded p-4 h-40"
        name="body"
        placeholder="Body"
        value={editedPost.body}
        onChange={handleChange}
      />
      <div className="flex items-center justify-center">
      <button className="text-white border border-black bg-blue-400 rounded-lg w-1/2 m-1 mt-3" type="submit">
        Update Post
      </button>
      </div>
    </form>
  );
};

export default EditPost;