// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  NotesAppContainer,
  NotesHeading,
  NotesFormContainer,
  NoteTopicInput,
  NoteContentInput,
  AddButton,
  NoNotesContainer,
  NoNotesHeading,
  NotesPara,
  ImgLogo,
  TopicContainer,
} from './styledComponents'

export const Notes = () => {
  const [topic, setTopic] = useState('')
  const [topicContent, setTopicContent] = useState('')
  const [topicList, setTopicList] = useState([])

  const addData = event => {
    event.preventDefault()
    // console.log(topic)
    // console.log(topicContent)
    const newTopic = {
      id: uuidv4(),
      topic,
      topicContent,
    }
    // setTopicList(prev => [...prev, newTopic])
    setTopicList(previousCommentsList => [...previousCommentsList, newTopic])
    setTopic('')
    setTopicContent('')
    console.log(topicList)
  }
  const onInputAddContent = event => {
    setTopic(event.target.value)
  }
  const onInputAddText = event => {
    setTopicContent(event.target.value)
  }
  return (
    <NotesAppContainer>
      <NotesHeading>Notes</NotesHeading>
      <NotesFormContainer onSubmit={addData}>
        <NoteTopicInput
          type="text"
          placeholder="Title"
          onChange={onInputAddContent}
          value={topic}
        />
        <NoteContentInput
          rows="4"
          cols="70"
          placeholder="Take a note..."
          onChange={onInputAddText}
          value={topicContent}
        />
        <AddButton type="submit">ADD</AddButton>
      </NotesFormContainer>
      {topicList.length > 0 ? (
        <TopicContainer className="topic-container">
          {topicList.map(eachContent => (
            <NoteItem key={eachContent.id} contentDetails={eachContent} />
          ))}
        </TopicContainer>
      ) : (
        <NoNotesContainer>
          <ImgLogo
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NotesPara>Notes you add will appear here</NotesPara>
        </NoNotesContainer>
      )}
    </NotesAppContainer>
  )
}

export default Notes
