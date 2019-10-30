import React from "react";

const ProductRow = (name, keyword, stocked, price, checked) => {
  const lowerdName = name.toLowerCase();
  const lowerdKeyword = keyword.toLowerCase();
  //  const reg = new RegExp(keyword, "i");
  //  const reg2 = /test/i;
  if (checked && !stocked) return null;
  if (!lowerdName.includes(lowerdKeyword)) return null;
  //  if (!new RegExp(`/${props.name}/i`).test(props.keyword))
  //  if (!reg.test(name)) return null;
  return (
    <tr>
      <td style={{ color: !stocked && "red" }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
