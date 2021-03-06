import React, { useMemo } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Navbar from "../components/navbar";
import getProducts from "../util/getCategoryProducts";
import CategoryProductDisplay from "../components/category_product_display";
import { routes } from "../Router";
import BestGear from "../components/footer/BestGear";
import ShopSum from "../components/footer/ShopSum";
import CategorySelection from "../components/home_category_select";

// Styles
const Header = styled.header`
  height: 192px;
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
`;

const CategoryName = styled.h1`
  ${({ theme }) => theme.fonts.h4};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 32px;
  text-align: center;
`;

// Page
const Category = () => {
  const { category } = useParams<{ category: string }>();
  const productsToDisplay = useMemo(() => getProducts(category), [category]);

  return (
    <>
      <Header>
        <Navbar />
        <CategoryName>{category}</CategoryName>
      </Header>
      <main>
        {productsToDisplay.map((item, index) => (
          <CategoryProductDisplay
            key={index}
            name={item.name}
            desc={item.description}
            isNew={item.new}
            img={item.categoryImage}
            link={routes.product(item.slug)}
          />
        ))}
      </main>
      <footer>
        <CategorySelection lower />
        <BestGear />
        <ShopSum />
      </footer>
    </>
  );
};

export default Category;
