import { GraphQLList } from "graphql";
import { TaskType } from "../TypeDefs/TodoList";
import { TodoList } from "../../Entities/TodoList";
export const GET_ALL_TASKS = {
  type: new GraphQLList(TaskType),
  resolve() {
    return TodoList.find();
  },
};
