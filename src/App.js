import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        console.log('!getSortedPosts!')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.sort, sortedPosts])

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
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов 1"/>
        </div>
    );
}

export default App;
