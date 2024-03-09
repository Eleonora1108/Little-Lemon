import owners from "./Images/Mario and Adrian A.jpg";
import ownerstwo from "./Images/Mario and Adrian b.jpg";
import Card from './Card';
import Review from "./Review";
import greeksalad from "./Images/greek salad.jpg"
import bruschetta from "./Images/bruschetta.jpg"
import lemondessert from "./Images/lemon dessert.jpg"

function Main() {
    return (
        <main>
            <section>
                <article className="spacials">
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </article>
                <article className="cards">
                    <Card
                    image={greeksalad}
                    title="Greek salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                    />
                    <Card
                    image={bruschetta}
                    title="Bruschetta"
                    price="$5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                    />
                    <Card
                    image={lemondessert}
                    title="Lemon dessert"
                    price="$5.00"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                </article>
            </section>
            <section className="sectionreviews">
                <article className="testimonials">
                    <h2 id="markazi">Testimonials</h2>
                </article>
                <article className="reviews">
                    <Review
                    rating="rating"
                    name="name"
                    text="text"/>
                    <Review
                    rating="rating"
                    name="name"
                    text="text"/>
                    <Review
                    rating="rating"
                    name="name"
                    text="text"/>
                    <Review
                    rating="rating"
                    name="name"
                    text="text"/>
                </article>
            </section>
            <section className="infoimages">
                <article className="info">
                    <h1 className="title" id="markazi">Little Lemon</h1>
                    <h2 className="subtitle" id="markazi">Chicago</h2>
                    <p className="infop">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                    </p>
                </article>
                <article className="articleimages">
                    <img className="image-a" src={owners} alt="owners"/>
                    <img className="image-b" src={ownerstwo} alt="ownerstwo"/>
                </article>
            </section>
        </main>
    );
}

export default Main;