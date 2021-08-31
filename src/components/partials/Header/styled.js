import styled from "styled-components"

export const HeaderArea = styled.div`
    height: 60px;
    background-color:#FFF;
    border-bottom: 1px solid #CCC;

    .container {
        max-width:1000px;
        margin:auto;
        display:flex;
    }

    a {
        text-decoration:none;
    }

    .logo {
        flex:1;
        display:flex;
        align-items: center;
        height:60px;

        .logo1,
        .logo2,
        .logo3,
        .logo4 { 
            font-size:27px;
            font-weight:bold;

        }
        .logo1{ color:#FF0000}
        .logo2 { color:#00FF00}
        .logo3 { color:#a2a}
        .logo4 { color:#0000FF}
    }

    nav {
        padding-top:10px;
        padding-bottom:10px;

        ul, li {
            margin:0;
            padding:0;
            list-style:none;
        }

        ul {
            display:flex;
            align-items:center;
            height:40px;
        }

        li {
            margin-left:20px;
            margin-right:20px;

            a {
                color:#000;
                font-size:14px;
                text-decoration:none;

                &:hover{
                    color:#999;
                }

                &.button {
                    background-color:#FF8100;
                    color:#FFF;
                    border-radius:4px;
                    padding: 5px 10px;
                }

                &.button:hover {
                    background-color:#E57706;
                }
            }
        }
    }
`;


