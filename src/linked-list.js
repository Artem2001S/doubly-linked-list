const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;
        //return this; - because this method should be chainable
        return this;
    }

    at(index) {
        let currentNode = this._head;
        let i = 0;
        while (currentNode !== null) {
            if (i === index) return currentNode.data;
            currentNode = currentNode.next;
            i++;
        }
        return null;
    }

    head() {
        return this._head == null ? null : this._head.data;
    }

    tail() {
        return this._tail == null ? null : this._tail.data;
    }

    insertAt(index, data) {
        let currentNode = this._head;
        let i = 0;
        while (currentNode !== null) {
            if (i === index) {
                let node = new Node(data);
                node.prev = currentNode.prev;
                node.next = currentNode;

                currentNode.prev.next = node;
                currentNode.prev = node;
                return;
            }
            currentNode = currentNode.next;
            i++;
        }
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
        return this;
    }

    indexOf(data) {
        let currentNode = this._head;
        let i = 0;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return i;
            }
            currentNode = currentNode.next;
            i++;
        }
        return -1;
    }

    reverse() {
        if (this.length === 1) return this;
        let tmp = Object.assign(this._head);
        this._head = this._tail;
        this._tail = tmp;
        let currentNode = this._head;
        
        while (currentNode !== null) {
            tmp = currentNode.next === null ? null : Object.assign(currentNode.next);
            currentNode.next = currentNode.prev;
            currentNode.prev = tmp;
            currentNode = currentNode.next;
        }
        //return this; - because this method should be chainable
        return this;
    }

    deleteAt(index) {
        let currentNode = this._head;
        let i = 0;
        while (currentNode !== null) {
            if (i === index) {
                if (currentNode.prev !== null){
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                } else {
                    this._head = currentNode.next;
                }
                return this;
            }
            currentNode = currentNode.next;
            i++;
        }
        
        //return this; - because this method should be chainable
        return this;
    }

}

module.exports = LinkedList;
