import * as React from 'react';
import { Form, Button, Label } from 'semantic-ui-react';
import { Field,Form as FinalForm} from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'


import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan
} from 'revalidate';
import { RootStoreContext } from '../../../../stores/rootStore';
import TextInput from '../../../common/forms/TextInput';
import { ITranslate } from '../../../../models/ITranslate';

export interface AddEditWordFormProps {
    
}

const validate = combineValidators({
  phrase: isRequired({ message: 'The event title is required' }),
});
 
const AddEditWordFormProps: React.SFC<AddEditWordFormProps> = () => {

  const rootStore = React.useContext(RootStoreContext);
  const wordStore = rootStore.wordStore;

  const {selectedWord,updateWord} = wordStore;

const handleFinalFormSubmit = (values:any)=>{
    
    console.log(values);
    updateWord(values)
}




    return ( 
      <FinalForm
            validate={validate}
            mutators={{
              ...arrayMutators
            }}
            initialValues={selectedWord!}
            onSubmit={handleFinalFormSubmit}
            render={({ handleSubmit, invalid, pristine }) => (
              <Form onSubmit={handleSubmit} >
                <Field
                  name='phrase'
                  placeholder='Phrase'
                  value={'qqq'}
                  component={TextInput}
                />
              <FieldArray name="translates">
              {({ fields }) =>
                fields.map((tr) => (
                  <div key={tr}>
                    <Field
                      name={`${tr}.translation`}
                      component={TextInput}
                      placeholder={`${tr}.translation`}
                    />
     
                  </div>
                ))
              }
            </FieldArray>

                
            
            <Button
                  // loading={submitting}
                  disabled={ invalid || pristine}
                  floated='right'
                  positive
                  type='submit'
                  content='Submit'
                />
              </Form>
            )}
          />
     );
}
 
export default AddEditWordFormProps;