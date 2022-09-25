import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/myInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            <PostForm create={createPost}/>
            <PostList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
