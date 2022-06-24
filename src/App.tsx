import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";

  interface Lesson {
    id: string;
    title: string;
  }

//react-router-dom também tem seu próprio provider que é o BrowserRouter

function App() {
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
