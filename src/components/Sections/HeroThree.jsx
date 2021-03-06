import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';

export default function HeroThree() {
  const data = useStaticQuery(graphql`
    query Services {
      allMarkdownRemark(filter: {frontmatter: {group: {eq: "Service"}}}) {
        nodes {
          frontmatter {
            Name
            group
            slug
            about
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
  const Data = data.allMarkdownRemark.nodes;
  return (
    <section id='service' className="flex justify-center mt-10 lg:mt-36 lg:mb-20 mx-6">
        <div className="block container">
            <div className="w-full flex flex-col lg:flex-row items-baseline">
                <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase" style={{fontFamily: `'Poppins', sans-serif`}}>Mes Services</h1> 
                <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary">
                  Ce que je peux faire pour vous
                </span>
            </div>
            <div className="flex flex-wrap items-center my-10 lg:my-20">
              <CardWarp>
                <CardItem className="lg:hover:shadow-md">
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <Img style={{width: '80%'}} fluid={Data[5].frontmatter.image.childImageSharp.fluid} />
                        <div className="card-body">
                            <H3 className="card-title">{Data[5].frontmatter.Name}</H3>
                            <p className="card-text text-center" style={{color: '#4b5563'}}>{Data[5].frontmatter.about}</p>
                          </div>
                    </div>
                </CardItem> 
                <CardItem className="lg:hover:shadow-md">
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <Img style={{width: '80%'}} fluid={Data[0].frontmatter.image.childImageSharp.fluid} />
                        <div className="card-body">
                            <H3 className="card-title">{Data[0].frontmatter.Name}</H3>
                            <p className="card-text text-center" style={{color: '#4b5563'}}>{Data[0].frontmatter.about}</p>
                          </div>
                    </div>
                </CardItem> 
                <CardItem className="lg:hover:shadow-md">
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <Img style={{width: '80%'}} fluid={Data[4].frontmatter.image.childImageSharp.fluid} />
                        <div className="card-body">
                            <H3 className="card-title">{Data[4].frontmatter.Name}</H3>
                            <p className="card-text text-center" style={{color: '#4b5563'}}>{Data[4].frontmatter.about}</p>
                          </div>
                    </div>
                </CardItem> 
                <CardItem className="lg:hover:shadow-md">
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <Img style={{width: '80%'}} fluid={Data[1].frontmatter.image.childImageSharp.fluid} />
                        <div className="card-body">
                            <H3 className="card-title">{Data[1].frontmatter.Name}</H3>
                            <p className="card-text text-center" style={{color: '#4b5563'}}>{Data[1].frontmatter.about}</p>
                          </div>
                    </div>
                </CardItem> 
                <CardItem className="lg:hover:shadow-md">
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <Img style={{width: '80%'}} fluid={Data[2].frontmatter.image.childImageSharp.fluid} />
                        <div className="card-body">
                            <H3 className="card-title">{Data[2].frontmatter.Name}</H3>
                            <p className="card-text text-center" style={{color: '#4b5563'}}>{Data[2].frontmatter.about}</p>
                          </div>
                    </div>
                </CardItem> 
                <CardItem className="lg:hover:shadow-md">
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <Img style={{width: '80%'}} fluid={Data[3].frontmatter.image.childImageSharp.fluid} />
                        <div className="card-body">
                            <H3 className="card-title">{Data[3].frontmatter.Name}</H3>
                            <p className="card-text text-center" style={{color: '#4b5563'}}>{Data[3].frontmatter.about}</p>
                          </div>
                    </div>
                </CardItem> 
              </CardWarp>
            </div>
        </div>
    </section>
  );
};


const CardWarp = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-content: center;
`;

const CardItem = styled.div`
    width: 32%;
    min-height: 18rem;
    padding: 30px 0;
    margin: 5px;
    border-radius: 10px;
    margin-bottom: 10px;
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

const H3 = styled.h3`
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
`;