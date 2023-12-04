import "./App.css";
import Task from "./app/Task";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <PostsList />
      <AddPostForm />
      <Task />
    </div>
  );
}

export default App;
