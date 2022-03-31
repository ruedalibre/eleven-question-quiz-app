import React from 'react'
import styled from 'styled-components'

const Counter = () => {
    const {id} = useParams();

        return (
            <CounterContainer>
                <h3>3 / 11</h3>
            </CounterContainer>
        )
}

const CounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justifiy-content: center;
`
export default Counter