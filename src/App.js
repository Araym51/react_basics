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

    // получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title="Список постов 1"/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
            }
        </div>
    );
}

export default App;
