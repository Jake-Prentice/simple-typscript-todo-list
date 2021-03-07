import styled, {css} from "styled-components";

interface ContainerProps {
    isCompleted: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #c55656;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;

    ${props => props.isCompleted && css`
        opacity: 0.5;
    `}

`

export const RemoveTodoButton = styled.button`
    align-self: stretch;
    width: 10%;
`