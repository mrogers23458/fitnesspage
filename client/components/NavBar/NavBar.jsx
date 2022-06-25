import Link from 'next/link'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    padding-left: 2rem;
    background-color: #2b2b2b;
    color: white;
    p {
        font-size: 0.75rem;
        text-align: center;
        margin-top: -1.0rem;
    }
`
const NavWrapper = styled.nav `
    padding: 1rem;
    a {
        padding: 1rem;
        :hover {
            color: black;
        }
    }
    
`

export default function NavBar(){
    return (
        <HeaderWrapper>
            <div>
                <Link href="/">
                    <a>
                        <h1>GET Lifted</h1>
                        <p>A MrMike Production</p>
                    </a>
                </Link>
            </div>
            <NavWrapper>
                <Link href="/workouts">Workouts</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/nutrition">Nutrition</Link>
                <Link href="/about">About</Link>
            </NavWrapper>
        </HeaderWrapper>
    )
}