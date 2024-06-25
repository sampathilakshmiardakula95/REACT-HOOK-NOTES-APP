import styled from 'styled-components'

export const NotesAppContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-size: 35px;
  font-family: Bree Serif;
  font-weight: 400;
`
export const NotesFormContainer = styled.form`
  //border,shadow
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 2px 2px 2px 2px #d8d8d8;
  padding: 40px;
  border-radius: 5px;
  min-width: 680px;
`
export const NoteTopicInput = styled.input`
  border: none;
  outline: none;
  width: 200px;
  margin-bottom: 20px;
  color: #4c63b6;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`
export const NoteContentInput = styled.textarea`
  border: 0px;
  border-width: 0px;
  outline: none;
  color: #334155;
  font-size: 15px;
`
export const AddButton = styled.button`
  background-color: #4c63b6;
  border-width: 0px;
  border-radius: 2px;
  color: #ffffff;
  height: 30px;
  width: 70px;
  align-self: flex-end;
  margin-top: 10px;
`
export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`
export const NoNotesHeading = styled.h1`
  color: #475569;
  font-size: 20px;
`
export const NotesPara = styled.p`
    color: #334155;
    font-family:"Roboto"
    font-size:16x; 

`

export const ImgLogo = styled.img`
  height: 100px;
  width: 100px;
`
export const TopicContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 610px;
  flex-wrap: wrap;
`
