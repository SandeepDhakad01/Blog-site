import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                console.log("ye rahi vo post jise edit me show krna h",post)
                if (post) {
                   
                    setPosts(post)
                }
            })
        } else {
            console.log("EditPost me getPost kam nhi kara")
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <h1>Edit form ke return ke ander</h1>
            <PostForm post={post} />
        </Container>
    </div>
  ) : <h1>null return kr raha</h1>
}

export default EditPost