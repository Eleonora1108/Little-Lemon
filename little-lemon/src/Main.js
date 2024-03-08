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
                <h2>Specials</h2>
                <button>Online Menu</button>
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
            </section>
            <section>
                <h2>Testimonials</h2>
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
            </section>
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit.
                </p>
                <img src={owners} alt="owners"/>
                <img src={ownerstwo} alt="ownerstwo"/>
            </section>
        </main>
    );
}

export default Main;