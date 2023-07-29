import { nanoid } from "nanoid";


export const makeCollectionObject = (name) => {
    return {
        id : nanoid(),
        type : "collection",
        name : name,
        children : [],
        parent : null
    }
}

export const makeDataObject = (name) => {
    return {
        id : nanoid(),
        type : "data",
        name : name,
        data : {},
        parent : null
    }
}





export const traverse = (root,level=0,result=[]) => {
    
    if(!root) {
        return result;
    }

    if(!(root.name === "root")){
        result.push({node:root,level});
    }
    
    if(root.children) {
        for(const child of root.children){
            traverse(child,level+1,result);
        }
    }

    return result;
}

export const deleteNodeById = (root, targetId)=> {
    if (!root) return null; 

    if (root.id === targetId) {
      return null;
    }
  

    if(root.children){
        root.children = root.children.filter((child) => {
            const newChild = deleteNodeById(child, targetId);
            return newChild !== null;
          });
    }
  
    return root;
  }
  
  export const findNodeLevelById = (root, targetId, level = 0) => {
    if (!root) return -1; 
  

    if (root.id === targetId) {
      return level;
    }
  

    if(root.children) {
        for (const child of root.children) {
            const result = findNodeLevelById(child, targetId, level + 1);
            if (result !== -1) {
              return result;
            }
          }
    }
    
    return -1;
  }