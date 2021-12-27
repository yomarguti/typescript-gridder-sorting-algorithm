"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    compare(leftIndex, rightIndex) {
        if (!this.head)
            throw new Error('List is empty');
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    get length() {
        if (!this.head)
            return 0;
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    print() {
        if (!this.head) {
            throw new Error('Index out of the bounds');
        }
        let node = this.head;
        while (node) {
            console.log('Node data: ' + node.data);
            node = node.next;
        }
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of the bounds');
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of the bounds');
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
}
exports.LinkedList = LinkedList;
