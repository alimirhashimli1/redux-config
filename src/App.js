import "./App.css";
import AddPostsForm from "./features/AddPostsForm";
import PostsList from "./features/PostsList";

function App() {
  return (
    <div className="App">
      <AddPostsForm />
      <PostsList />
    </div>
  );
}

export default App;
