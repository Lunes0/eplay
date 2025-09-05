import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 10;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .qnt-cart {
    font-weight: bold;
    font-size: 16px;
    color: ${cores.branco};
    margin-top: 32px;
    margin-bottom: 16px;
  }

  .prices {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.branco};
    margin-bottom: 16px;

    span {
      display: block;
      font-size: 12px;
      color: ${cores.cinzaClaro};
    }
  }
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;
  position: relative;

  img {
    object-fit: cover;
    height: 80px;
    width: 80px;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.branco};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${cores.branco};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
