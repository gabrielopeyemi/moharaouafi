import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export default function GalleryCard({gallery}) {
    console.log({gallery})
    return (
        <CardItem>
            <CardInner>
                <h1>{gallery.frontmatter.Name}</h1>
                {/* <Img fluid={gallery.frontmatter.mainImage.childImageSharp.fluid} /> */}
                <Img fluid={gallery.frontmatter.mainImage.childImageSharp.fluid} />
            </CardInner>
        </CardItem>
    )
}

const CardItem = styled.div`
    padding: 10px;
    width: 32%;
`;

const CardInner = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 30px 200px;
    width: 100%;
`;
