// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NewForm1, QueEs } = initSchema(schema);

export {
  NewForm1,
  QueEs
};