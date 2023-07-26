class TreeNode {

    constructor(name) {
        this.name = name;
        this.data = {};
        this.parent = null;
        this.children = [];
    }

    addData(data) {
        this.data.data = data;
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

const root = new TreeNode("root");
root.addData("root data");
console.log("name: " , root.name , " data: " , root.data , " parent " , root.parent , " children: ", root.children );

const rootChildren1 = new TreeNode("root children");
root.addNode(rootChildren1);

rootChildren1.addData("root children 1 data");
console.log("name: " , rootChildren1.name , " data: " , rootChildren1.data , " parent " , rootChildren1.parent , " children: ", rootChildren1.children );

const rootChildren2 = new TreeNode("root children 2");
root.addNode(rootChildren2);

rootChildren2.addData("root children 2 data");
console.log("name: " , rootChildren2.name , " data: " , rootChildren2.data , " parent " , rootChildren2.parent , " children: ", rootChildren2.children );



