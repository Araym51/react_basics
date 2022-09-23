import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/myInput";

function App() {
    const [posts, setPosts] = useState([])

    const [title, setTitle] = useState('')

    const [body, setBody] = useState('')

    const addNewPost = (event) => {
        event.preventDefault() // почему здесь preventDefault() не работает?
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(newPost)
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            <form>
                <MyInput value={title}
                         onChange={e => setTitle(e.target.value)}
                         type="text"
                         placeholder="Название поста"
                />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
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
