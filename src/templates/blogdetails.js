import React from 'react'
import {ENavbar} from '../components/Navigation'
import {graphql} from 'gatsby';
import Layout from './../components/layout';
import SEO from "../components/seo";
import HeadOne from '../components/BlogHeadOne';

export default function BlogDetails({ data }) {
    console.log(data.markdownRemark)
    const { title, stack } = data.markdownRemark.frontmatter;
    const {html} = data.markdownRemark;
    return (
        <Layout>
        <SEO title={`${title} - Moha Raouafi`} keywords={[`${stack}`,`Graphiste freelance print & web • la …`]} />
            <HeadOne Title={title} subTitle={stack} />
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
