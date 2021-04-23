import React from 'react'
import {ENavbar} from '../components/Navigation';
import img from "./../assets/Image/mac.png";
import { Link, graphql } from 'gatsby'


export default function Blogs({data}) {
    console.log({MV: data.allMarkdownRemark.nodes})

    const postsData = data.allMarkdownRemark.nodes;

    return (
        <>
            <header className='w-full' style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
                <ENavbar />
                <div class="flex justify-center">
                    <div class="flex flex-wrap items-center container my-10 mx-6 pt-4"> 
                        <div class="w-full flex flex-col items-center text-center py-10">
                            <h2 style={{lineHeight: 1.5}} class="my-2 text-white text-xl lg:text-3xl leading-10 uppercase bold lg:font-medium">Blogs</h2> 
                        </div>
                    </div>
                </div>
            </header>
            <div className='container'>
                <div className='row' style={{marginTop: '50px'}}>
                    {postsData.map((post)=>(
                        <Link to={`/blog/${post.frontmatter.slug}`} key={post.id}>
                            <div className='col-md-4 col-sm-12'>
                                <div class="card" style={{width: '18rem'}}>
                                    <img src="..." class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{post.frontmatter.title}</h5>
                                        <p class="card-text">{post.frontmatter.date}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}


// export page query

export const query = graphql`
query postData {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          date(fromNow: true)
        }
      }
    }
  }
`;