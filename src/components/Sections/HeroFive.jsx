import React, {useState} from 'react';
import Img from 'gatsby-image';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

export default function HeroFive() {
    const Data = useStaticQuery(graphql`
        query clientLogo {
            allMarkdownRemark(filter: {frontmatter: {group: {eq: "ClientLogo"}}}) {
                nodes {
                    frontmatter {
                        Name
                        group
                        date(fromNow: false)
                        title
                        stack
                        slug
                        imageBlue {
                            childImageSharp {
                                fluid (maxWidth: 2048, quality: 90){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fluid (maxWidth: 2048, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        `);
    const Clients = Data.allMarkdownRemark.nodes;
    console.log({Clients});
    const [imageStatus, setImageStatus] = useState(true)

    const breakPoints = [
      {
          width: 1, itemsToShow: 1
      },
      {
          width: 550, itemsToShow: 2
      },
      {
          width: 768, itemsToShow: 4
      },
      {
          width: 1200, itemsToShow: 4
      }
  ]
  return (
    <section className="flex justify-center mt-10 lg:mt-36 lg:mb-20 mx-6">
      <div className="block container">
          <div className="w-full flex flex-col lg:flex-row items-baseline">
              <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase" style={{fontFamily: `'Poppins', sans-serif`}}>Ils me font confiance</h1> 
              <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary"></span>
          </div>
          <div className="flex flex-wrap items-center my-10 lg:my-20">
            <Carousel 
                outerSpacing={10}
                itemPadding={[10, 50]}
                breakPoints={breakPoints}
              >
                 {Clients.map((client) => (
                    <>
                        <Image
                            style={{width: '100%', borderRadius: '10px'}} 
                            onFocus={ () => void 0 } 
                            onMouseOver={() => alert('HAHA')} 
                            onClick={()=> alert('hello')}
                            onMouseLeave={()=> setImageStatus(true)} 
                            fluid={imageStatus ? client.frontmatter.image.childImageSharp.fluid : client.frontmatter.imageBlue.childImageSharp.fluid} 
                        />
                    </>
                ))}
            </Carousel> 
          </div>
      </div>
  </section>
  );
};

const Image = styled(Img)`
    width: 100px;
    opacity: 0.5;
    &:hover{
        opacity: 1
    }
`;