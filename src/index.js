import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
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

// const todos = await API.graphql(graphqlOperation(listTodos));
// console.log(todos.data.listTodos.items);

const signup = async (username, email, password) => {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        // example: 'This is an example attribute',
      },
    });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

signup('hayata', 'hayata.suenaga111@gmail.com', 'password');
