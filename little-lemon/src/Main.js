import Card from './Card';
import Review from "./Review";
import greeksalad from "./Images/greek salad.jpg"
import bruschetta from "./Images/bruschetta.jpg"
import lemondessert from "./Images/lemon dessert.jpg"
import mario from "./Images/Mario.png"
import userimage from './Images/userimage.png'

function Main() {
    return (
        <main>
            <section className='sectionspecials'>
                <article className="specials">
                    <h2 className="h2specials">Specials</h2>
                    <button className="onlinemenu">Online Menu</button>
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
                <section className='section-wrapper'>
                    <article className="testimonials">
                        <h2 id="markazi">Testimonials</h2>
                    </article>
                    <article className="reviews">
                        <Review
                        rating="4 stars"
                        image={userimage}
                        name="Ben"
                        text="The food is very good and the staff is lovely."/>
                        <Review
                        rating="5 stars"
                        image={userimage}
                        name="Tilly"
                        text="Best restaurant in town!"/>
                        <Review
                        rating="4 stars"
                        image={userimage}
                        name="Nora"
                        text="We had a great experience, can't wait to go back"/>
                    </article>
                </section>
            </section>
            <section className="infoimages">
                <div className="info">
                    <h1 className="title" id="markazi">Little Lemon</h1>
                    <h2 className="subtitle" id="markazi">Chicago</h2>
                    <p className="infop">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
                <div className='image-container'><img className="image-main" src={mario} alt="owners"/></div>
            </section>
        </main>
    );
}

export default Main;