import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">NFT Portfolio.</h1>
        <p className="pl-desc">
          DopeCat & BadGirls17 nft is a collection of nfts created by my own, i created each
          and every one of it with its own uniqueness. Inspired by my beloved
          pet cat and it’s strange personality that i elevate based on my
          imagination.
        </p>
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
