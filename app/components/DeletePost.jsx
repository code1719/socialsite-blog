"use client"
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

// Component to delete a post
const DeletePost = ({ postId }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      console.log("Document successfully deleted!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
    <button className="text-white border border-black bg-red-400 rounded-lg w-1/2 m-1 mt-3" onClick={handleDelete}>
      Delete Post
    </button>
    </div>
  );
};

export default DeletePost;