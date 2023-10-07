import styled from "@emotion/styled";

export const StyledModal = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1000;

.modal {
    width: 450px;
    min-height: 450px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.closeModalBtn {
    position: absolute;
    top: 10px;
    right: 10px;
}
`