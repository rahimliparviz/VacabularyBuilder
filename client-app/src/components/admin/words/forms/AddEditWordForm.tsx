import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
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
import { WordFormValues } from '../../../../models/IWord';

export interface AddEditWordFormProps {
    
}

const validate = combineValidators({
  // phrase: isRequired({ message: 'The event title is required' }),
});
 
const AddEditWordForm: React.SFC<AddEditWordFormProps> = () => {

  const rootStore = React.useContext(RootStoreContext);
  const wordStore = rootStore.wordStore;

  const {selectedWord,updateWord,editMode,createWord} = wordStore;
  
  
  const [word, setWord] = React.useState(new WordFormValues());

  React.useEffect(() => {
    console.log(selectedWord,editMode)
    
    if(editMode){
      setWord(new WordFormValues(selectedWord!))
    }
    // return () => {
    //   cleanup
    // }
  }, [selectedWord,editMode])

const handleFinalFormSubmit = (values:any)=>{
    
  if(editMode){
      updateWord(values)
  }else{
    let newWord = {
      ...values,
      id:uuid()
    }
    createWord(newWord)
  }
}




    return ( 
      <FinalForm
            validate={validate}
            mutators={{
              ...arrayMutators
            }}
            initialValues={word}
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
 
export default AddEditWordForm;