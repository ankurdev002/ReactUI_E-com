import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
padding:20px;
${mobile({padding: "10px"})}
`;

const Title = styled.h1`
font-weight:300;
text-align:center;
`;

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;

`;

const TopButton =styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
box-shadow: 0 0 5px black;

border: ${(props)=> props.type === "filled" && "none"};

background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};

color: ${(props)=> props.type === "filled" && "white"};

&:hover{
    transform:scale(1.1);
    transition: all 0.5s ease;
}


`;

const TopTexts = styled.div`
${mobile({display: "none"})}
`;

const TopText = styled.span`
text-decoration:unerline;
cursor:pointer;
margin: 0px 10px;
`;




const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection: "column"})}
`;


const Info = styled.div`
flex:3;

`;

const Product =styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection: "column"})}
`;

const ProductDetail =styled.div`
flex:2;
display:flex;
`;

const Image =styled.img`
width:200px;
border: 2px solid white;
`;

const Details =styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;

`;

const ProductName =styled.span``;

const ProductID =styled.span``;

const ProductColor =styled.div`
width:20px;
height:20px;
border: 2px solid gray;
border-radius:50%;
box-shadow:0 0 10px gray;
background-color: ${(props)=>props.color};

`;

const ProductSize =styled.span``;

const PriceDetail =styled.span`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const ProductAmountContainer =styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`; 
 
const ProductAmount =styled.div`
font-size:24px;
margin:5px;
${mobile({margin: "5px 15px"})}
`;

const ProductPrice =styled.div`
font-size:30px;
font-weight:200;
${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;

`;

const SummaryTitle = styled.h1`
font-weight:200;
`;

const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props=>props.type==="total" && "500"};
font-size: ${props=>props.type==="total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton= styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;

&:hover{
    transition: all 0.5s ease;
    background-color: green;
}

`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            <Details>
                                <ProductName><b>Product:</b>STORM SHOE</ProductName>
                                <ProductID><b>ID:</b>4542277</ProductID>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>₹ 1999</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>
                            <Details>
                                <ProductName><b>Product:</b>THUNDER T-SHIRT</ProductName>
                                <ProductID><b>ID:</b>564678787223</ProductID>
                                <ProductColor color="white"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>₹ 999</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>₹ 2998</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping</SummaryItemText>
                        <SummaryItemPrice>Free</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>- ₹ 1499</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>₹ 1499</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                    
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
