import React, {useState, useEffect} from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FaTimesCircle } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'

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
                  fluid (quality: 100, maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              imagePC {
                childImageSharp {
                  fluid (quality: 100, maxWidth: 1000) {
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
      const [show1, setShow1] = useState(false);
      const [show2, setShow2] = useState(false);
      const [show3, setShow3] = useState(false);
      const [show4, setShow4] = useState(false);
      const [show5, setShow5] = useState(false);
      const [show6, setShow6] = useState(false);
      const [show7, setShow7] = useState(false);
      const [show8, setShow8] = useState(false);
      const [show0, setShow0] = useState(false);
      //check mobile or PC
      const [ webView, setWebView ] = useState(true);
      useEffect(()=>{
        if (window.innerWidth < 414){
          setWebView(false);
          return;
        };
        if (window.innerWidth > 414){
          setWebView(true)
        };
      },[]);
      window.addEventListener('resize', () => {
        console.log({HN: window.innerWidth})
        if (window.innerWidth < 414 ){
            setWebView(false)
            return
        } 
        if (window.innerWidth > 414){
            setWebView(false)
        }
    });
  return (
    <>
        <section id="portfolio" className="flex justify-center mx-6 sm:mt-10 lg:mt-40">
           <div className="block container">
               <div className="w-full flex flex-col lg:flex-row items-baseline mb-10">
                   <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase">Mes réalisations</h1>  
                   <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary"></span>
                </div> 
                <div className="flex flex-wrap justify-between w-full mt-10 lg:my-8">
                    <CardWarp>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow0(!show0)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[0].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow1(!show1)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[1].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow2(!show2)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[2].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow3(!show3)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[3].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow4(!show4)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[4].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow5(!show5)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[5].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow6(!show6)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[6].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow7(!show7)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[7].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                            <CardItem>
                                <ImgDiv onClick={()=> setShow8(!show8)}>
                                    <Img  style={{width: '100%', borderRadius: '10px'}} fluid={Galleries[8].frontmatter.image.childImageSharp.fluid} />
                                    <OverLay></OverLay>
                                </ImgDiv>
                            </CardItem>
                    </CardWarp>
                </div>
            </div>
        </section>
        
        {/* Modal 0 */}
        <Modal show={show0}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow0(!show0)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[0].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[0].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 1 */}
        <Modal show={show1}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow1(!show1)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[1].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[1].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 2 */}
        <Modal show={show2}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow2(!show2)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[2].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[2].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 3 */}
        <Modal show={show3}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow3(!show3)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[3].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[3].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 4 */}
        <Modal show={show4}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow4(!show4)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[4].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[4].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 5 */}
        <Modal show={show5}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow5(!show5)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[5].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[5].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 6 */}
        <Modal show={show6}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow6(!show6)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[6].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[6].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 7 */}
        <Modal show={show7}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow7(!show7)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[7].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[7].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 8 */}
        <Modal show={show8}>
          <ModelHead>
            <Title>
            </Title>
            <TimesIcons onClick={()=> setShow8(!show8)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%', display: webView ? "" : "none"}} fluid={Galleries[8].frontmatter.imagePC.childImageSharp.fluid} />
            <Img style={{width: '100%', display: webView ? "none" : ""}} fluid={Galleries[8].frontmatter.imageMobile.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
    </>
  );
}

const ModelHead = styled.div`
  margin: 2rem 3rem 0rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  color: #fff;
  font-weight: 900;
  font-size: 1rem;
`;

const TimesIcons = styled(FaTimesCircle)`
  color: #FFF;
`;

const ImgDiv = styled.div`
  border-radius: 10px;
  position: relative;
`;

const CardWarp = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const OverLay = styled.div`
  transition: opacity 0.2s;
  opacity: 0;
  background-color: #88dca5;
  text-align: center;
  position: absolute;
  padding: 12% 4%;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  top: 0;
  display: block;
  &:hover{
    opacity: 0.8;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    font-weight: normal;
  }
`;


const CardItem = styled.div`
    width: 33%;
    min-height: 18rem;
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
    border-radius: 10px;
    border-radius: 5px;
    padding: 30px 200px;
    width: 100%;
`;
