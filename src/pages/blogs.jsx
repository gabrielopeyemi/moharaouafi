import React from 'react'
import {ENavbar} from '../components/Navigation';
import img from "./../assets/Image/mac.png";


export default function Blogs() {
    return (
        <>
            <header className='w-full' style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
                <ENavbar />
                <div class="flex justify-center">
                    <div class="flex flex-wrap items-center container my-10 mx-6 pt-4"> 
                        <div class="w-full flex flex-col items-center text-center py-10">
                            <h2 style={{lineHeight: 1.5}} class="my-2 text-white text-xl lg:text-3xl leading-10 uppercase bold lg:font-medium">Blogs</h2> 
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
