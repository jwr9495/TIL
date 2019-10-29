import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = props => {
  if (props.data === null) return <h2>Now loading ...</h2>;
  let prevCategory = "";
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(
          ({ category, name, price, stocked, keyword, checked }) => {
            const products = { name, price, stocked };
            function categoryFilter(category) {
              // return <ProductCategoryRow category={category} />;
              if (prevCategory !== category) {
                prevCategory = category;
                return <ProductCategoryRow category={category} />;
              } else return null;
            }
            return (
              <>
                {categoryFilter(category)}
                <ProductRow {...products} keyword={keyword} checked={checked} />
              </>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
