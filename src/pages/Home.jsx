import React from 'react';
import '../css/home.css'
import FoodCard from '../components/FoodCard';
import bgImage from '../images/bgdimg34.jpg'

function Home() {
  const foodItems = [
    {
      title: 'Pizza',
      image: 'https://b.zmtcdn.com/data/pictures/chains/7/18843927/bf70548183393ce79bfcbcd2598a15fc.jpg',
      description: 'Delicious cheesy pizza with toppings.',
      price:179
    },
   
   {
    title: 'Burger',
    image: 'https://b.zmtcdn.com/data/pictures/6/18237356/1d2ce99176f4175da183422241a5a994.jpg',
    description: 'Juicy grilled burger with fries.',
    price:99
  },
  {
    title: 'Chole Bhature',
    image: 'https://b.zmtcdn.com/data/reviews_photos/e19/a01cddafd30c8ea5df9554e4cb89be19_1540179926.jpg',
    description: 'Spicy chickpeas served with fluffy fried bhature – a North Indian favorite.',
    price:149
  },
  {
    title: 'Sandwich',
    image: 'https://b.zmtcdn.com/data/dish_photos/5ec/ef0f1089fd90c0e2278e38d6301c95ec.jpeg?output-format=webp',
    description: 'Crispy, cheesy, and packed with fresh veggies – the perfect anytime snack.',
    price:109
  },
  {
    title: 'Biryani',
    image: 'https://b.zmtcdn.com/data/dish_photos/358/ec3178b884605abfa98130b7c7891358.png',
    description: 'Aromatic basmati rice cooked with flavorful spices and tender meat or veggies.',
    price:159
  },
  {
    title: 'Paneer Tikka',
    image: 'https://b.zmtcdn.com/data/dish_photos/16e/9d567ad75b0db321f51d46e30218316e.jpg?output-format=webp',
    description: 'Smoky grilled paneer cubes marinated in spicy yogurt masala.',
    price:199
  },
  {
    title: 'Dal Makhni',
    image: 'https://b.zmtcdn.com/data/dish_photos/28f/b7ed86492949f60e8c0a011b808b428f.png?output-format=webp',
    description: 'Slow-cooked black lentils in creamy butter and aromatic spices.',
    price:199
  },
  {
    title: 'Tandoori Chicken',
    image: 'https://b.zmtcdn.com/data/dish_photos/1dc/2fe122d57a943d1711ecd45a925681dc.jpeg?output-format=webp',
    description: 'Tender chicken marinated in yogurt and tandoori spices, roasted to perfection.',
    price:189
  },
  {
    title: 'Spring Rolls',
    image: 'https://b.zmtcdn.com/data/dish_photos/5af/9300f08258c18b8f8f7192ead226a5af.png?output-format=webp',
    description: 'Crispy golden rolls filled with seasoned veggies – a perfect starter.',
    price:149
  },
  {
    title: 'Momos',
    image: 'https://b.zmtcdn.com/data/pictures/7/19560447/be619ac56e122d68255678d35bcd8dd9_o2_featured_v2.jpg?output-format=webp',
    description: 'Steamed or fried dumplings stuffed with spicy veg or chicken filling.',
    price:109
  },
  {
    title: 'Pasta',
    image: 'https://b.zmtcdn.com/data/dish_photos/6bf/dfb5341004c3b08336bc4b536f2b06bf.jpg?output-format=webp',
    description: 'Creamy and cheesy pasta tossed with fresh herbs and vegetables.',
    price:179
  }
  ];

  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-text">
          <h1>Welcome to FoodCourt</h1>
          <p>Delicious food delivered to your door</p>
        </div>
      </section>

      <section className="cards-section">
        <h2>Our Popular Dishes</h2>
        <div className="cards-container">
          {foodItems.map((item, index) => (
            <FoodCard
             
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              status={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
