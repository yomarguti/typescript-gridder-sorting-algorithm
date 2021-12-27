import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([3, 1, 9, 23, -7, -45]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection('YomarGuti');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(10);
linkedList.add(2);
linkedList.add(-2);

linkedList.print();
linkedList.sort();
linkedList.print();
