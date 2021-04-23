import React from 'react'
import {ENavbar} from '../components/Navigation';
import { Link, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';


export default function Blogs({ data }) {
    console.log({MV: data.allMarkdownRemark.nodes[0].frontmatter.image.childImageSharp.fluid})

    const postsData = data.allMarkdownRemark.nodes;

    return (
        <>
            <header className='w-full' style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
                <ENavbar />
                <div className="flex justify-center">
                    <div className="flex flex-wrap items-center container my-10 mx-6 pt-4"> 
                        <div className="w-full flex flex-col items-center text-center py-10">
                            <h2 style={{lineHeight: 1.5}} className="my-2 text-white text-xl lg:text-3xl leading-10 uppercase bold lg:font-medium">Blogs</h2> 
                        </div>
                    </div>
                </div>
            </header>
            <div className='container'>
                <div className='row' style={{marginTop: '50px', marginBottom: '100px', justifyContent: 'center'}}>
                    {postsData.map((post)=>(
                        <MainLink to={`/blogs/${post.frontmatter.slug}`} key={post.id}>
                            <div className='col-md-4 col-sm-12'>
                                <div className="card" style={{width: '18rem'}}>
                                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                                    <div className="card-body">
                                        <h3 className="card-title">{post.frontmatter.title}</h3>
                                        <p className="card-text">{post.frontmatter.date}</p>
                                        <Link style={{float: 'left'}} to={`/blogs/${post.frontmatter.slug}`}>Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </MainLink>
                    ))}
                </div>
            </div>
        </>
    )
}


const MainLink = styled(Link)`
    margin-bottom: 30px;
    &:hover{
        color: #000 !important;
    }
`;

// export page query

export const query = graphql`
query postData {
  site(siteMetadata: {}) {
    id
  }
  allMarkdownRemark(sort: {fields: id}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        date(fromNow: true)
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`;