export class LinkedList {
    constructor() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        return current === null || current === void 0 ? void 0 : current.value;
    }
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        const node = {
            value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0 && this.head) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length && this.tail) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                const currentPreviousNode = this.getNode(position - 1);
                const currentNextNode = currentPreviousNode === null || currentPreviousNode === void 0 ? void 0 : currentPreviousNode.next;
                if (currentPreviousNode && currentNextNode) {
                    currentPreviousNode.next = node;
                    currentNextNode.previous = node;
                    node.previous = currentPreviousNode;
                    node.next = currentNextNode;
                }
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    }
    remove(position = 0) {
        var _a;
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0 && this.head) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1 && ((_a = this.tail) === null || _a === void 0 ? void 0 : _a.previous)) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            const removedNode = this.getNode(position);
            if ((removedNode === null || removedNode === void 0 ? void 0 : removedNode.next) && removedNode.previous) {
                removedNode.next.previous = removedNode.previous;
                removedNode.previous.next = removedNode.next;
            }
        }
        this.length--;
        this.createInternalArrayRepresentation();
    }
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        const node = this.getNode(position);
        if (node) {
            node.value = value;
            this.createInternalArrayRepresentation();
        }
    }
    toArray() {
        return this.asArray;
    }
    findAll(fn) {
        let current = this.head;
        const result = [];
        if (!current) {
            return result;
        }
        for (let index = 0; index < this.length; index++) {
            if (!current) {
                return result;
            }
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    // Array methods overriding start
    push(...args) {
        args.forEach((arg) => {
            this.add(arg);
        });
        return this.length;
    }
    pop() {
        if (this.length === 0) {
            return;
        }
        const last = this.tail;
        this.remove(this.length - 1);
        return last === null || last === void 0 ? void 0 : last.value;
    }
    unshift(...args) {
        args.reverse();
        args.forEach((arg) => {
            this.add(arg, 0);
        });
        return this.length;
    }
    shift() {
        var _a;
        if (this.length === 0) {
            return undefined;
        }
        const lastItem = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
        this.remove();
        return lastItem;
    }
    forEach(fn) {
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            if (!current) {
                return;
            }
            fn(current.value, index);
            current = current.next;
        }
    }
    indexOf(value) {
        let current = this.head;
        let position = -1;
        for (let index = 0; index < this.length; index++) {
            if (!current) {
                return position;
            }
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    }
    some(fn) {
        let current = this.head;
        let result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    }
    every(fn) {
        let current = this.head;
        let result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    }
    toString() {
        return '[Linked List]';
    }
    find(fn) {
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            if (!current) {
                return;
            }
            if (fn(current.value, index)) {
                return current.value;
            }
            current = current.next;
        }
    }
    findIndex(fn) {
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            if (!current) {
                return -1;
            }
            if (fn(current.value, index)) {
                return index;
            }
            current = current.next;
        }
        return -1;
    }
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        return current;
    }
    createInternalArrayRepresentation() {
        const outArray = [];
        let current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
}
//# sourceMappingURL=linked-list.class.js.map