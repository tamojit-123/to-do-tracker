export class TypeaheadMatch {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(item, value = item, header = false) {
        this.item = item;
        this.value = value;
        this.header = header;
    }
    isHeader() {
        return this.header;
    }
    toString() {
        return this.value;
    }
}
//# sourceMappingURL=typeahead-match.class.js.map