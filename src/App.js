import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import AddPostFormPractice from "./features/posts/AddPostFormPractice";
import PostsList from "./features/posts/PostsList";
import PostsListPractice from "./features/posts/PostsListPractice";

function App() {
  return (
    <div className="App">
      <PostsListPractice />
      <AddPostFormPractice />
    </div>
  );
}

export default App;
