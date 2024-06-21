import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <section className={`${styles.lightGreen} ${styles.header}`}>
        <h1 className={styles.mainHeading}>TrenVault</h1>
        <p>
          Welcome to TrendVault, your ultimate online shopping destination!{" "}
          <br /> At TrendVault, we offer a diverse range of high-quality
          products to meet all your fashion and electronic needs. Our
          collections include stylish and contemporary men&apos;s and
          women&apos;s clothing, cutting-edge electronics, and exquisite
          jewelry, ensuring there&apos;s something for everyone.
        </p>
      </section>
      <section className={styles.descriptionSection}>
        <h2 className={styles.secondaryHeading}>What we offer</h2>
        <ul className={styles.flexList}>
          <li className={`${styles.lightGreen}`}>
            <h3 className={styles.tertiaryHeading}>Men&apos;s Clothing</h3>
            <p>
              Discover the latest trends in men&apos;s fashion with our
              extensive selection of apparel. From casual wear to formal attire,
              we provide a variety of options to keep you looking sharp and
              feeling confident. Our collection features everything from trendy
              t-shirts and comfortable jeans to sophisticated suits and elegant
              accessories.
            </p>
          </li>
          <li className={`${styles.grey}`}>
            <h3 className={styles.tertiaryHeading}>Women&apos;s Clothing</h3>
            <p>
              Explore our chic and fashionable women&apos;s clothing range,
              designed to cater to every style and occasion. Whether you&apos;re
              looking for everyday essentials, office wear, or something special
              for a night out, we have it all. Our assortment includes stylish
              dresses, tops, bottoms, and a variety of accessories to complete
              your look.
            </p>
          </li>
          <li className={`${styles.lightGreen}`}>
            <h3 className={styles.tertiaryHeading}>Electronics</h3>
            <p>
              Stay ahead of the curve with our state-of-the-art electronics. We
              offer the latest gadgets and devices to keep you connected,
              entertained, and productive. From smartphones and laptops to home
              entertainment systems and smart home devices, our electronics
              collection is curated to enhance your tech-savvy lifestyle.
            </p>
          </li>
          <li className={`${styles.grey}`}>
            <h3 className={styles.tertiaryHeading}>Jewelry</h3>
            <p>
              Add a touch of elegance to your outfit with our stunning jewelry
              collection. Whether you&apos;re searching for a statement piece or
              a delicate accessory, our selection includes necklaces, bracelets,
              rings, and earrings crafted with precision and style. Our jewelry
              pieces are perfect for any occasion, from everyday wear to special
              events.
            </p>
          </li>
        </ul>
      </section>
      <section className={`${styles.lightGreen} ${styles.benefitSection}`}>
        <h2 className={styles.secondaryHeading}>Why Shop with Us?</h2>
        <ul className={`${styles.flexList} ${styles.listStyle}`}>
          <li>
            <span className={styles.bold}>Quality Products:</span> We prioritize
            quality and ensure that all our products meet high standards of
            durability and style.
          </li>
          <li>
            <span className={styles.bold}>Competitive Prices:</span> Enjoy great
            value for your money with our competitive pricing and frequent
            promotions.
          </li>
          <li>
            <span className={styles.bold}>Customer Satisfaction:</span> Our
            dedicated customer service team is here to assist you with any
            inquiries or concerns, ensuring a seamless shopping experience.
          </li>
          <li>
            <span className={styles.bold}>Fast and Reliable Shipping:</span> We
            offer prompt and reliable shipping options to get your purchases to
            you quickly and securely.
          </li>
        </ul>
      </section>
      <section className={styles.startSection}>
        <p>
          Visit TrendVault today and elevate your shopping experience with our
          wide range of products. Whether you&apos;re updating your wardrobe,
          upgrading your tech, or looking for the perfect piece of jewelry,
          we&apos;ve got you covered!
        </p>
        <Link to="/products" className={styles.ctaBtn}>
          Go to our Products
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
