import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "./Mutation/TodoList";
import { GET_ALL_TASKS } from "./Queries/TodoList";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllTasks: GET_ALL_TASKS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createTask: CREATE_TASK,
    deleteTask: DELETE_TASK,
    updateTask: UPDATE_TASK,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
