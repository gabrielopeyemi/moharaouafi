import React from 'react';
import styled from 'styled-components'

export default function ServiceCard(props) {
    console.log({props: props.data})
    const {name, desc, image} = props.data;
  return (
    <div className='col-md-4'>
        <Div className="card">
            <Img src={image} className="img-thumbnail" alt={image}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </Div>
    </div>
  );
}

const Div = styled.div`
    transition-duration: 300ms;
    transition-property: box-shadow;
    width: 18rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    height: 400px;
    margin-bottom: 50px;
    justify-content: center;
    cursor: pointer;
    border: 0;
    &:hover{
        border: 2px solid #f3f3f3;
        --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        box-shadow: var(#f3f3f3, 0 0 #0000), var(#f3f3f3, 0 0 #0000), var(#f3f3f3);    
    };
    &:focus {
        color: palevioletred;
    }
`;

const Img = styled.img`
    border: 0;
    &:hover{
        border: 10px;
    };
`;