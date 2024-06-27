import  "./Hero.css"
import Link from "next/link"

function Hero() {
  return (
    <>
    <section className="hero">
        <div className="text-hero">
    <h2>Discover Amazing Products</h2>
    <p>Shop our wide selection of products and find something you all love.</p>
    <Link href="/Products" class="btn">Explore Now</Link>
    </div>
    </section>
    </>
  )
}

export default Hero
