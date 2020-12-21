import React from 'react'
import styled from '@emotion/styled'


const StyledFooter =styled.footer`
background: url(/background.jpg);
height: 80px;
top: 5000px;
`
const Footer =()=>{

    return (
        <footer>
            <p >
                © Copyright. All rights reserved.
            </p>
        </footer>
    )
}
export default Footer;