import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import React from 'react'
import { mobile } from "../responsive"
import styled from 'styled-components';

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px"})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px"})}
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>Pink</Option>
                    <Option>Yellow</Option>
                    <Option>White</Option>
                </Select>

                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>X</Option>
                    <Option>XS</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            

            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <option selected>Newest</option>
                    <option>Price (asc)</option>
                    <option>Price (desc)</option>
                </Select>
            </Filter>
           
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList