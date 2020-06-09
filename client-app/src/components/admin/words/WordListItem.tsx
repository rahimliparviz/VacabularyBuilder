import * as React from 'react';
import { IWord } from '../../../models/IWord';
import {  Button, Table } from 'semantic-ui-react';
import { useContext } from 'react';
import AddEditWordFormProps from './forms/AddEditWordForm';
import { RootStoreContext } from '../../../stores/rootStore';

export interface WordItemProps {
    word:IWord,
    deleteWord:(id:string)=>void;
    openModal:(content:any)=>void;
}
 
const WordItem: React.SFC<WordItemProps> = ({deleteWord,word,openModal}) => {

  const rootStore = useContext(RootStoreContext);
  const wordStore = rootStore.wordStore;

  const { selectWord } = wordStore;

    const  selectWordForEdit =(component,id)=>{
      selectWord(id);
      openModal(component);
    }

    return ( 
      <Table.Row>
      <Table.Cell>{word.phrase}</Table.Cell>
      {word.translates.map(tr=>(
      <Table.Cell key={tr.id}>{tr.translation}</Table.Cell>
      ))}
      <Table.Cell >
      <Button.Group>
        <Button positive onClick={()=>selectWordForEdit(<AddEditWordFormProps/>,word.id)}>Edit</Button>
        <Button negative onClick={()=>deleteWord(word.id)}>Delete</Button>
      </Button.Group>
      </Table.Cell>
    </Table.Row>
     );
}
 
export default WordItem;