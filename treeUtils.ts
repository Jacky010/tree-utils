interface FieldNames {
    key?: string;   // 主键
    parentKey?: string; // 父节点主键
    children?: string;  // 子节点
    isTree?: boolean;   // 源数据是否是树结构
}


/**
 * 将树型结构数据转换成一维数组
 * @param treeData
 */
export const getListFromTree = (treeData: any[], fieldNames?: FieldNames): any[] => {
    let props: any = {children: 'children', ...fieldNames};
    let tempList: any[] = [];
    treeData.forEach((v: any) => {
        tempList.push(v);
        let children = v[props.children];
        if (children && children.length > 0) {
            tempList = [...tempList, ...getListFromTree(children, props)];
        }
    });
    return tempList;
}


/**
 * 寻找指定子节点
 * @param treeData
 * @param key
 * @param props
 */
export const getNodeByKey = (treeData: any[], key: number | string, fieldNames?: FieldNames): any => {
    let props: any = {key: 'key', children: 'children', ...fieldNames};
    if (!treeData || treeData.length === 0) {
        return null;
    }
    for (let i = 0; i < treeData.length; i++) {
        let node: any = treeData[i];
        if (node[props.key] === key) {
            return node;
        }
        let children = node[props.children];
        if (children && children.length > 0) {
            let targetNode = getNodeByKey(children, key, props);
            if (targetNode) {
                return targetNode;
            }
        }
    }
    return null;
}


/**
 * 获取节点下的所有子节点
 * @param treeData
 * @param key
 * @param props
 */
export const getChildrenToList = (treeData: any[], key: number | string, fieldNames?: FieldNames): any[] => {
    let props: any = {key: 'key', children: 'children', ...fieldNames};
    let targetNode: any = getNodeByKey(treeData, key, props);
    if (!targetNode) {
        return [];
    }
    let children = targetNode[props.children];
    if (children && children.length > 0) {
        return getListFromTree(children, props);
    }
    return [];
}


/**
 * 遍历每个树节点
 * @param list
 * @param callback
 * @param props
 */
export const forEachNode = (list: any[], callback: (v: any, list: any[]) => void, fieldNames?: FieldNames) => {
    let props: any = {children: 'children', ...fieldNames};
    list.forEach(v => {
        callback(v, list);
        let children: any = v[props.children];
        if (children && children.length > 0) {
            forEachNode(children, callback, props);
        }
    });
}


/**
 * 获取父级结点
 * @param key 目标节点的父节点的key
 * @param data  线性结构数据
 * @param props
 */
const loopParentNodes = (key: string | number, data: any[], fieldNames?: FieldNames): any[] => {
    let props: any = {key: 'key', parentKey: 'parentKey', children: 'children', ...fieldNames};
    let parentNodes: any[] = [];
    let target: any = data.filter(v => v[props.key] === key)[0];
    if (target) {
        parentNodes.push(target);
        parentNodes = [...parentNodes, ...loopParentNodes( target[props.parentKey], data, props)];
    }
    return parentNodes;
}


/**
 * 获取所有父节点
 * @param key
 * @param tree
 * @param props
 */
export const getParentNodes = (key: string | number, tree: any[], fieldNames?: FieldNames): any[] => {
    let props: any = {key: 'key', parentKey: 'parentKey', children: 'children', isTree: true, ...fieldNames};
    let data: any[] = props.isTree ? getListFromTree(tree, props) : tree;
    let targetNode: any = data.filter((v: any) => v[props.key] === key)[0];
    if (!targetNode) {
        return [];
    }
    let parentNodes: any[] = loopParentNodes(targetNode[props.parentKey], data, props);
    return parentNodes;
}
