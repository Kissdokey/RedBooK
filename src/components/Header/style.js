import styled from 'styled-components'
export const HeaderWrapper = styled.div`
.header{
  position: relative;
  text-align: center;
  margin: 0.5rem 0;
  .header-words{
    display: flex;
    justify-content: center;
    .header-word{
      margin: 0 1rem;
    }
  }
  .icon-sousuo{
    
    position: absolute;
    right:0;
    top:0;
    right:0.5rem;
    }
    .icon-yuzhouxingqiu-12{
    font-size: 25px;
    position: absolute;
    left:0;
    top:0;
    left: 0.5rem;
    }
}
a{
  font-size: 1rem;
}
`