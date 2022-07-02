import Link from 'next/link'

export default function NavBar(){
    return (
        <header>
            <div>
                <Link href="/">
                    <a>
                        <h1>GET Lifted</h1>
                        <p>A MrMike Production</p>
                    </a>
                </Link>
            </div>
            <nav>
                <Link href="/workouts">Workouts</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/nutrition">Nutrition</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}