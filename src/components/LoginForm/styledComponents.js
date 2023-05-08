import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  background-color: #152850;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  border-radius: 30px;
  border: none;
  border-radius: 20px;
  background-color: #e0eefe;
`
export const Image = styled.img`
  width: 500px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  padding: 20px;
  background-color: #ffffff;
  width: 350px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  color: #152850;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #183b56;
  margin-bottom: 5px;
`
export const InputElement = styled.input`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #5a7184;
  margin-bottom: 5px;
  padding: 5px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #ff0b37;
  text-align: center;
`
export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  background-color: #1565d8;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
`
