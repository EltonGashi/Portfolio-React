import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My projects</h1>
        <p className="pl-desc">
        Since I am a student in the second year, I haven't created public or professional projects. 
        But during these two years of college I have created a website with technologies: 
        HTML, CSS, JS, PHP and MySql, and at the moment I am creating a web application where I am using ReactJS for the frontend and my colleague is dealing with the backend.
        </p>
        <h2>
        Below I have listed some of my social networks where you can contact me through them.
        </h2>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
