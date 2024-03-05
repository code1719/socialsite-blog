"use client"
import { collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; // Import the Firebase instance
import { useState, useEffect } from "react";
import EditPost from "./EditPosts";
import DeletePost from "./DeletePost";

// Component to display all posts
const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsCollection = collection(db, "posts");
        const q = query(postsCollection, orderBy("timestamp", "desc"))
        const querySnapshot = await getDocs(collection(db, "posts"));
        const data = querySnapshot.docs.map((doc) => ({ 
            id: doc.id, 
            title: doc.data().title,
            body: doc.data().body,
            // timestamp: doc.data().timestamp.toDate(),
        }));
        setPosts(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    fetchData(db);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
            <div className="bg-gray-600  border border-white h-full p-4">
            <h2 className="">{post.title}</h2>
          <p className="">{post.body}</p>
          <EditPost postId={post.id} currentTitle={post.title} currentBody={post.body} />
<DeletePost postId={post.id} />
            </div>
        </div>

      ))}
    </div>
  );
};

export default AllPosts;
