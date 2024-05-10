import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {

    const [posts, setPosts] = useState([])


    useEffect(() => {}, [])
    appwriteService.getPosts().then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap mx-16'>
                {posts.map((post) => {
                    if(post.status=='active')
                    return (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                    )
})} 
<h1>ab or koi active nhi h mere dost intjar mt kro</h1>
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
