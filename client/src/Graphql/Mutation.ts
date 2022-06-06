import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($info: String!) {
    createTask(info: $info) {
      id
      info
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($id: ID!, $info: String!) {
    updateTask(id: $id, info: $info) {
      message
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      message
    }
  }
`;
