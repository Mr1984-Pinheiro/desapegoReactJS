import styled from "styled-components";

export const PageArea = styled.div`

form {
    background-color:#FFF;
    border-radius:3px;
    padding:10px;
    box-shadow:0px 0px 3px #999;

    .area {
        display:flex;
        align-items:center;
        padding:10px;
        max-width:500px;

        .area--title {
            width:200px;
            text-align:right;
            padding-right:20px;
            font-weight:bold;
            font-size:14px;
        }

        .area--input {
            flex:1;

        input:not([type='checkbox']) {
     width: 100%;
     padding: 5px;

     font-size: 14px;
     border-radius: 3px;
     
     outline: transparent;
     border: 1px solid #ddd;

     transition: all ease 0.4s;

     &:focus {
       color: #333;
       border-color: #333;
     }
     
}



button {
    background-color: #0089FF;
    border:0;
    outline:0;
    padding:5px 10px;
    border-radius:4px;
    color:#FFF;
    font-size:15px;
    cursor:pointer;

    &:hover {
        background-color: #006fce;
    }
}       

            

            
        }
    }
}

`;