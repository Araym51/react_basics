import React, {useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/myInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Python', body: 'Description'},
        {id: 3, title: 'C#', body: 'Description'},
        {id: 4, title: 'Ruby', body: 'Description'},
    ])


    return (
        <div className="App">
            {/*<Counter/>*/}
            <form>
                <MyInput type="text" placeholder="Название поста"/>
                <MyInput type="text" placeholder="Описание поста"/>
                <MyButton>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
