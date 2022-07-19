import {
    getListFromTree,
    getNodeByKey,
    getChildrenToList,
    forEachNode,
    getParentNodes
} from '../dist/treeUtils';

const treeData: any[] = [
    {
        title: '0-0',
        key: '0-0',
        parentKey: '',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                parentKey: '0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0', parentKey: '0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1', parentKey: '0-0-0' },
                    { title: '0-0-0-2', key: '0-0-0-2', parentKey: '0-0-0' },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                parentKey: '0-0',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0', parentKey: '0-0-1' },
                    { title: '0-0-1-1', key: '0-0-1-1', parentKey: '0-0-1' },
                    { title: '0-0-1-2', key: '0-0-1-2', parentKey: '0-0-1' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
                parentKey: '0-0',
                children: null
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        parentKey: '',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0', parentKey: '0-1' },
            { title: '0-1-0-1', key: '0-1-0-1', parentKey: '0-1' },
            { title: '0-1-0-2', key: '0-1-0-2', parentKey: '0-1' },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
        parentKey: '',
        children: null
    },
];


const treeData1: any[] = [
    {
        title: '0-0',
        id: '0-0',
        parentId: '',
        children: [
            {
                title: '0-0-0',
                id: '0-0-0',
                parentId: '0-0',
                children: [
                    { title: '0-0-0-0', id: '0-0-0-0', parentId: '0-0-0' },
                    { title: '0-0-0-1', id: '0-0-0-1', parentId: '0-0-0' },
                    { title: '0-0-0-2', id: '0-0-0-2', parentId: '0-0-0' },
                ],
            },
            {
                title: '0-0-1',
                id: '0-0-1',
                parentId: '0-0',
                children: [
                    { title: '0-0-1-0', id: '0-0-1-0', parentId: '0-0-1' },
                    { title: '0-0-1-1', id: '0-0-1-1', parentId: '0-0-1' },
                    { title: '0-0-1-2', id: '0-0-1-2', parentId: '0-0-1' },
                ],
            },
            {
                title: '0-0-2',
                id: '0-0-2',
                parentId: '0-0',
                children: null
            },
        ],
    },
    {
        title: '0-1',
        id: '0-1',
        parentId: '',
        children: [
            { title: '0-1-0-0', id: '0-1-0-0', parentId: '0-1' },
            { title: '0-1-0-1', id: '0-1-0-1', parentId: '0-1' },
            { title: '0-1-0-2', id: '0-1-0-2', parentId: '0-1' },
        ],
    },
    {
        title: '0-2',
        id: '0-2',
        parentId: '',
        children: null
    },
];

console.log('getListFromTree', getListFromTree(treeData))
console.log('getNodeByKey', getNodeByKey(treeData, '0-0-0'))
console.log('getChildrenToList', getChildrenToList(treeData, '0-1'))
console.log(forEachNode(treeData, (v: any, list: any) => {console.log('子项：', v)}))
console.log('getParentNodes', getParentNodes('0-0-1-0', treeData))


const fieldNames = {key: 'id', parentKey: 'parentId', children: 'children'}


console.log('getListFromTree1', getListFromTree(treeData1, fieldNames))
console.log('getNodeByKey1', getNodeByKey(treeData1, '0-0-0', fieldNames))
console.log('getChildrenToList1', getChildrenToList(treeData1, '0-1', fieldNames))
console.log(forEachNode(treeData1, (v: any, list: any) => {console.log('子项1：', v)}, fieldNames))
console.log('getParentNodes1', getParentNodes('0-0-1-0', treeData1, fieldNames))
