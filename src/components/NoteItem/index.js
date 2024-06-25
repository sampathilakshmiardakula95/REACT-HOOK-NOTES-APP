// Write your code here
import {EachTopic, TopicName, TopicContent} from './styledComponents'

const NoteItem = props => {
  const {contentDetails} = props
  const {topic, topicContent} = contentDetails
  return (
    <EachTopic>
      <TopicName>{topic}</TopicName>
      <TopicContent>{topicContent}</TopicContent>
    </EachTopic>
  )
}

export default NoteItem
