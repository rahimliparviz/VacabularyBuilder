import React from 'react'
import { Grid } from 'semantic-ui-react';
import WordList from './WordList';
import WordCreate from './WordCreate';
import { observer } from 'mobx-react-lite';
// import { observer } from 'mobx-react-lite/dist/observer';


export interface WordsAddEditDeleteProps {
    
}
 
const WordsAddEditDelete: React.SFC<WordsAddEditDeleteProps> = () => {
    return ( 

    <Grid>
        <Grid.Row >
            <Grid.Column >
                <WordCreate />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column >
        <WordList/>
            </Grid.Column>
            
        </Grid.Row>
    </Grid>
     );
}
 
export default observer(WordsAddEditDelete);
