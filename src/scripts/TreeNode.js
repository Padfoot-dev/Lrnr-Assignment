export class CollectionNode {

    constructor(name) {
        this.name = name;
        this.parent = null;
        this.children = [];
    }

    addNode(node) {
        this.children.push(node);
        node.parent = this;
    }

    getLevel() {
        let parent = this.parent;
        let level = 0;
         
        while(parent) {
            level +=1;
            parent = parent.parent;
        }

        return level;
    }
}

export class DataNode {
    constructor(name) {
        this.name = name;
        this.data = {};
        this.parent = null;
    }

    addData(data) {
        this.data.data = data;
    }

    getLevel() {
        let parent = this.parent;
        let level = 0;
         
        while(parent) {
            level +=1;
            parent = parent.parent;
        }

        return level;
    }
}



