import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/myInput";

function App() {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (event) => {
        event.preventDefault() // почему здесь preventDefault() не работает?
        // console.log(newPost)

        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"
                />

                <MyButton type="submit" onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
