import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }`

  interface Lesson {
    id: string;
    title: string;
  }

function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
  //tem que usar ? pois o data pode vir vazio
  //no react os elementos precisam de uma key
  return (
   <ul>
    {data?.lessons.map((lesson: Lesson) => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}
   </ul>
  )
}

export default App
