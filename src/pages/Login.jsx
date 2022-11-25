import styled from "styled-components"
import { mobile } from "../responsive";

const Container=styled.div`
width:100vw;
height:100vh;

background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) , url("https://images.pexels.com/photos/5553635/pexels-photo-5553635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`;


const Wrapper=styled.div`
width:25%;
padding:20px;
box-shadow: 0 0 15px black;
background-color:white;
${mobile({width: "75%"})}

`;




const Title=styled.h1`
font-size:24px;
font-weight:300;


`;


const Form=styled.form`
display:flex;
flex-direction:column;
`;


const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`;



const Button=styled.button`
display: flex;
justify-content: center;
align-items: center;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;

&:hover{
    background-color:#66b2b2;
    transition:all 0.5s ease;
}
`;

const Link=styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`;

const Login = () => {
  return (
<Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>FORGOT YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>        
    </Container>
  )
}

export default Login
