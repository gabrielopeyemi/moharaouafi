import React, {useState} from 'react';
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
                  fluid {
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
                            <CardItem>
                                <div onClick={()=> setShow0(!show0)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[0].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                            <CardItem>
                                <div onClick={()=> setShow1(!show1)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[1].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                            <CardItem>
                                <div onClick={()=> setShow2(!show2)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[2].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                            <CardItem>
                                <div onClick={()=> setShow3(!show3)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[3].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                            <CardItem>
                                <div onClick={()=> setShow4(!show4)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[4].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                            <CardItem>
                                <div onClick={()=> setShow5(!show5)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[5].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                            <CardItem>
                                <div onClick={()=> setShow6(!show6)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[6].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                            <CardItem>
                                <div onClick={()=> setShow7(!show7)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[7].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                            <CardItem>
                                <div onClick={()=> setShow8(!show8)}>
                                    <Img  style={{width: '100%'}} fluid={Galleries[8].frontmatter.image.childImageSharp.fluid} />
                                </div>
                            </CardItem>
                    </CardWarp>
                </div>
            </div>
        </section>
        
        {/* Modal 0 */}
        <Modal show={show0}>
          <div>
            <Title>
              hello
            </Title>
            <TimesIcons onClick={()=> setShow0(!show0)}/>
          </div>
          <div>
            <Img style={{width: '100%'}} fluid={Galleries[0].frontmatter.imagePC.childImageSharp.fluid} />
          </div>
      </Modal>
        
        {/* Modal 1 */}
        <Modal show={show1}>
          <ModelHead>
            <Title>
            {Galleries[0].frontmatter.Name}
            </Title>
            <TimesIcons onClick={()=> setShow1(!show1)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%'}} fluid={Galleries[1].frontmatter.imagePC.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 2 */}
        <Modal show={show2}>
          <ModelHead>
            <Title>
            {Galleries[2].frontmatter.Name}
            </Title>
            <TimesIcons onClick={()=> setShow2(!show2)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%'}} fluid={Galleries[2].frontmatter.imagePC.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 3 */}
        <Modal show={show3}>
          <ModelHead>
            <Title>
            {Galleries[3].frontmatter.Name}
            </Title>
            <TimesIcons onClick={()=> setShow3(!show3)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%'}} fluid={Galleries[3].frontmatter.imagePC.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 4 */}
        <Modal show={show4}>
          <ModelHead>
            <Title>
            {Galleries[4].frontmatter.Name}
            </Title>
            <TimesIcons onClick={()=> setShow4(!show4)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%'}} fluid={Galleries[4].frontmatter.imagePC.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 5 */}
        <Modal show={show5}>
          <ModelHead>
            <Title>
              {Galleries[5].frontmatter.Name}
            </Title>
            <TimesIcons onClick={()=> setShow5(!show5)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%'}} fluid={Galleries[5].frontmatter.imagePC.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 6 */}
        <Modal show={show6}>
          <ModelHead>
            <Title>
            {Galleries[6].frontmatter.Name}
            </Title>
            <TimesIcons onClick={()=> setShow6(!show6)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%'}} fluid={Galleries[6].frontmatter.imagePC.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 7 */}
        <Modal show={show7}>
          <ModelHead>
            <Title>
            {Galleries[7].frontmatter.Name}
            </Title>
            <TimesIcons onClick={()=> setShow7(!show7)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%'}} fluid={Galleries[7].frontmatter.imagePC.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
        
        {/* Modal 8 */}
        <Modal show={show8}>
          <ModelHead>
            <Title>
            {Galleries[8].frontmatter.Name}
            </Title>
            <TimesIcons onClick={()=> setShow8(!show8)}/>
          </ModelHead>
          <Modal.Body>
            <Img style={{width: '100%'}} fluid={Galleries[8].frontmatter.imagePC.childImageSharp.fluid} />
          </Modal.Body>
      </Modal>
    </>
  );
}

const ModelHead = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`

`;

const TimesIcons = styled(FaTimesCircle)`
  color: gray;
`;

const CardWarp = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    border-radius: 5px;
    padding: 30px 200px;
    width: 100%;
`;
