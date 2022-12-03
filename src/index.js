import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports.js';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations.js';
import { listTodos } from './graphql/queries.js';

Amplify.configure(awsconfig);

// const result = await API.graphql(
//   graphqlOperation(createTodo, {
//     input: {
//       name: 'My first todo!',
//     },
//   })
// );
// console.log(result);

const todos = await API.graphql(graphqlOperation(listTodos));
console.log(todos.data.listTodos.items);
