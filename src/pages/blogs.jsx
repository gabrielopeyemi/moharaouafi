import React from 'react'
import {ENavbar} from '../components/Navigation';
import { Link, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from "../components/seo";
import Layout from './../components/layout';
import HeadOne from './../components/HeadOne';

export default function Blogs({ data }) {
    console.log({MV: data.allMarkdownRemark.nodes[0].frontmatter.image.childImageSharp.fluid})

    const postsData = data.allMarkdownRemark.nodes;

    return (
        <Layout>
        <SEO title="Blogs - Moha Raouafi" keywords={[`Graphiste freelance print & web • la …`]} />
            <HeadOne Title='Blogs'/>
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
        </Layout>
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
    allMarkdownRemark(sort: {fields: id}, filter: {frontmatter: {group: {eq: "Blog"}}}) {
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