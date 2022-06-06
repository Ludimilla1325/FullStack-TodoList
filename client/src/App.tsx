import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useMutation,
} from "@apollo/client";
import "./App.css";
import CreateUser from "./Components/Form";
import UserList from "./Components/TaskList";
import UpdatePassword from "./Components/Update";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3005/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <div className="todo-app">
          <header>
            <h1>Todo App</h1>
          </header>
          <CreateUser />
          <UserList />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
