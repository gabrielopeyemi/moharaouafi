import React from 'react'
import {ENavbar} from '../components/Navigation';
import { Link, graphql} from 'gatsby';
import Img from 'gatsby-image';

export default function Blogs({data}) {
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
                <div className='row' style={{marginTop: '50px'}}>
                    {postsData.map((post)=>(
                        <Link to={`/blog/${post.frontmatter.slug}`} key={post.id}>
                            <div className='col-md-4 col-sm-12'>
                                <div className="card" style={{width: '18rem'}}>
                                    <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.frontmatter.title}</h5>
                                        <p className="card-text">{post.frontmatter.date}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
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