import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { RootStoreContext } from '../../../stores/rootStore';
import { useContext } from 'react';
import AddEditWordForm from './forms/AddEditWordForm';
import { observer } from 'mobx-react-lite';


export interface WordCreateProps {
    
}



 
const WordCreate: React.SFC<WordCreateProps> = () => {

    const rootStore = useContext(RootStoreContext);
    const wordStore = rootStore.wordStore;
    const modalStore = rootStore.modalStore;

    let {selectedWord,setEditMode} = wordStore;
    const { openModal } = modalStore;


    const createWord = ()=>{
        setEditMode(false)
        openModal(<AddEditWordForm/>);
    }

    return ( 
        <Button positive floated='right' onClick={()=>createWord()}>Create</Button>
     );
}
 
export default observer(WordCreate);