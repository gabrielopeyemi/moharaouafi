import React from 'react'
import {ENavbar} from '../components/Navigation'
import {graphql} from 'gatsby';
import Layout from './../components/layout'

export default function BlogDetails({ data }) {
    console.log(data.markdownRemark)
    const { title, stack } = data.markdownRemark.frontmatter;
    const {html} = data.markdownRemark;
    return (
        <Layout>
            <header className='w-full' style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
                <ENavbar />
                <div className="flex justify-center">
                    <div className="flex flex-wrap items-center container my-10 mx-6 pt-4"> 
                        <div className="w-full flex flex-col items-center text-center py-10">
                            <h2 style={{lineHeight: 1.5}} className="my-2 text-white text-xl lg:text-3xl leading-10 uppercase font-medium lg:font-medium">{title}</h2> 
                            <p style={{lineHeight: 1.5}} className="my-2 text-white text-xl lg:text-3xl leading-10 uppercase font-medium lg:font-medium">{stack}</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className='container'>
                <div className='row'>
                    <div style={{marginTop: '50px', marginBottom: '50px'}} dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
    </Layout>
    )
}


export const query = graphql`
    query BlogData($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html

            frontmatter {
                date(fromNow: true)
                title
                stack
                image {
                childImageSharp {
                    fluid {
                    src
                    }
                }
            }
            }
        }
    }
    
`
