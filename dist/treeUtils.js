"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentNodes = exports.forEachNode = exports.getChildrenToList = exports.getNodeByKey = exports.getListFromTree = void 0;
/**
 * 将树型结构数据转换成一维数组
 * @param treeData
 */
const getListFromTree = (treeData, fieldNames) => {
    let props = Object.assign({ children: 'children' }, fieldNames);
    let tempList = [];
    treeData.forEach((v) => {
        tempList.push(v);
        let children = v[props.children];
        if (children && children.length > 0) {
            tempList = [...tempList, ...(0, exports.getListFromTree)(children, props)];
        }
    });
    return tempList;
};
exports.getListFromTree = getListFromTree;
/**
 * 寻找指定子节点
 * @param treeData
 * @param key
 * @param props
 */
const getNodeByKey = (treeData, key, fieldNames) => {
    let props = Object.assign({ key: 'key', children: 'children' }, fieldNames);
    if (!treeData || treeData.length === 0) {
        return null;
    }
    for (let i = 0; i < treeData.length; i++) {
        let node = treeData[i];
        if (node[props.key] === key) {
            return node;
        }
        let children = node[props.children];
        if (children && children.length > 0) {
            let targetNode = (0, exports.getNodeByKey)(children, key, props);
            if (targetNode) {
                return targetNode;
            }
        }
    }
    return null;
};
exports.getNodeByKey = getNodeByKey;
/**
 * 获取节点下的所有子节点
 * @param treeData
 * @param key
 * @param props
 */
const getChildrenToList = (treeData, key, fieldNames) => {
    let props = Object.assign({ key: 'key', children: 'children' }, fieldNames);
    let targetNode = (0, exports.getNodeByKey)(treeData, key, props);
    if (!targetNode) {
        return [];
    }
    let children = targetNode[props.children];
    if (children && children.length > 0) {
        return (0, exports.getListFromTree)(children, props);
    }
    return [];
};
exports.getChildrenToList = getChildrenToList;
/**
 * 遍历每个树节点
 * @param list
 * @param callback
 * @param props
 */
const forEachNode = (list, callback, fieldNames) => {
    let props = Object.assign({ children: 'children' }, fieldNames);
    list.forEach(v => {
        callback(v, list);
        let children = v[props.children];
        if (children && children.length > 0) {
            (0, exports.forEachNode)(children, callback, props);
        }
    });
};
exports.forEachNode = forEachNode;
/**
 * 获取父级结点
 * @param key 目标节点的父节点的key
 * @param data  线性结构数据
 * @param props
 */
const loopParentNodes = (key, data, fieldNames) => {
    let props = Object.assign({ key: 'key', parentKey: 'parentKey', children: 'children' }, fieldNames);
    let parentNodes = [];
    let target = data.filter(v => v[props.key] === key)[0];
    if (target) {
        parentNodes.push(target);
        parentNodes = [...parentNodes, ...loopParentNodes(target[props.parentKey], data, props)];
    }
    return parentNodes;
};
/**
 * 获取所有父节点
 * @param key
 * @param tree
 * @param props
 */
const getParentNodes = (key, tree, fieldNames) => {
    let props = Object.assign({ key: 'key', parentKey: 'parentKey', children: 'children', isTree: true }, fieldNames);
    let data = props.isTree ? (0, exports.getListFromTree)(tree, props) : tree;
    let targetNode = data.filter((v) => v[props.key] === key)[0];
    if (!targetNode) {
        return [];
    }
    let parentNodes = loopParentNodes(targetNode[props.parentKey], data, props);
    return parentNodes;
};
exports.getParentNodes = getParentNodes;
