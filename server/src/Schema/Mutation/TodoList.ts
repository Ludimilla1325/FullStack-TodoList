import { GraphQLID, GraphQLString } from "graphql";
import { TaskType } from "../TypeDefs/TodoList";
import { TodoList } from "../../Entities/TodoList";
import { MessageType } from "../TypeDefs/Messages";

export const CREATE_TASK = {
  type: TaskType,
  args: {
    info: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { info } = args;
    await TodoList.insert({
      info,
    });
    return args;
  },
};

export const DELETE_TASK = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await TodoList.delete(id);

    return { sucessful: true, message: "Sucessful deleted" };
  },
};

export const UPDATE_TASK = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    info: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, info } = args;

    const task = await TodoList.findOne({ where: { id: id } });
    if (!task) {
      throw new Error("Task doesnt exist");
    }
    console.log("Chegou aqui!!!!");

    await TodoList.update({ id: id }, { info: info });
    return { sucessful: true, message: "Updated task!" };
  },
};
