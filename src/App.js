import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/myInput";

function App() {
    const [selectedSort, setSelectedSort] = useState('')
    const [posts, setPosts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {
        console.log('!getSortedPosts!')
        if(selectedSort){
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // получаем post из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={sortedPosts} title="Список постов 1"/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
            }
        </div>
    );
}

export default App;
