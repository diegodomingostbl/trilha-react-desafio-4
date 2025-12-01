import styled from 'styled-components';
import { IButtonContainerStyled } from './types';

export const ButtonContainer = styled.button<IButtonContainerStyled>`
  width: 100%;
    height: 42px;
    background-color: ${(props) => props.disabledButton ? '#e19ef6ff' : '#81259D'};
    color: #FFF;
    border: 1px solid ${(props) => props.disabledButton ? '#e19ef6ff' : '#81259D'};
    border-radius: 21px;
    &:hover {
        opacity:${(props) => props.disabledButton ? '' : '0.8'};
        cursor: ${(props) => props.disabledButton ? 'not-allowed' : 'pointer'};
    }
`;
