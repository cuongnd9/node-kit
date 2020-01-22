import { thinid } from 'thinid';

function list() {
  return [
    {
      id: thinid(),
      name: 'Dog'
    },
    {
      id: thinid(),
      name: 'Pig'
    }
  ];
}

export default {
  list
};
