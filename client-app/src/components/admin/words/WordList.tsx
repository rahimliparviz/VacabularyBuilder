import * as React from "react";
import { Menu, Header, Segment, List, Table } from "semantic-ui-react";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "../../../stores/rootStore";
import { observable } from "mobx";
import WordListItem from "./WordListItem";
import { observer } from "mobx-react-lite";

export interface WordsProps {}

const Words: React.SFC<WordsProps> = () => {
  const rootStore = useContext(RootStoreContext);
  const wordStore = rootStore.wordStore;
  const modalStore = rootStore.modalStore;

  const { loadWords, words ,deleteWord } = wordStore;
  const { openModal } = modalStore;

  useEffect(() => {
    console.log(words)
    loadWords();
  }, [loadWords]);


  return (

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Word</Table.HeaderCell>
          <Table.HeaderCell>Translation</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    {console.log(words)}
      <Table.Body>
        {words.map((word) => (
          <WordListItem key={word.id} word={word} openModal={openModal} deleteWord={deleteWord}/>
        ))}
      </Table.Body>
    </Table>
  );
};

export default observer(Words);
