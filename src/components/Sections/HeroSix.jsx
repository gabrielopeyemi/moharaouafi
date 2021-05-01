import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import styled from 'styled-components';
// import GalleryCard from './../GalleryCard';

export default function HeroSix() {

    const Data = useStaticQuery(graphql`
    query Portfolio {
        allMarkdownRemark(filter: {frontmatter: {group: {eq: "Portfolio"}}}) {
          nodes {
            frontmatter {
              Name
              group
              date(fromNow: false)
              title
              stack
              slug
              imageMobile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              imagePC {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }      
    `)
      const Galleries = Data.allMarkdownRemark.nodes;
      console.log({Galleries})
  return (
    <>
        <section className="flex justify-center mx-6 sm:mt-10 lg:mt-40">
           <div className="block container">
               <div className="w-full flex flex-col lg:flex-row items-baseline mb-10">
                   <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase">Mes réalisations</h1> 
                   <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary"></span>
                </div> 
                <div className="flex flex-wrap justify-between w-full mt-10 lg:my-8">
                    <CardWarp>
                        {/* {Galleries.map((gallery) => (
                             <Img fluid={gallery.frontmatter.image.childImageSharp.fluid} />
                        ))} */}
                        {Galleries.map((post)=>(
                            <CardItem>
                                <div>
                                    <Img style={{width: '100%'}} fluid={post.frontmatter.image.childImageSharp.fluid} />
                                    {/* <div className="card-body">
                                        <h3 className="card-title">{post.frontmatter.title}</h3>
                                        <p className="card-text">{post.frontmatter.date}</p>
                                     </div> */}
                                </div>
                            </CardItem>
                        ))}
                    </CardWarp>
                </div>
            </div>
        </section>
    </>
  );
}


const CardWarp = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const CardItem = styled.div`
    padding: 10px;
    width: 33%;
    min-height: 18rem;
    @media only screen and (max-width: 768px){
        width: 49%
    };
    @media only screen and (max-width: 524px){
        width: 100%;
    }
`;

const CardInner = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 30px 200px;
    width: 100%;
`;
