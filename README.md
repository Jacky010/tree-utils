<h1 align="center">Welcome to tree-utils.js 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/tree-utils.js" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/tree-utils.js.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> 树结构数据相关逻辑操作集

## 功能包含以下：

- 将树型结构数据转换成一维数组
- 寻找指定子节点
- 获取节点下的所有子节点
- 遍历每个树节点
- 获取所有父节点

## Install

```sh
npm install
```

## Use

### 安装

```sh
npm i tree-utils.js
```

### 引用


#### 示例一

说明：对象字段为`{key: 'xxx', parentKey: 'xxx', children: []}`

```sh
import {
    getListFromTree,
    getNodeByKey,
    getChildrenToList,
    forEachNode,
    getParentNodes
} from 'tree-utils.js';

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


console.log('getListFromTree', getListFromTree(treeData))
console.log('getNodeByKey', getNodeByKey(treeData, '0-0-0'))
console.log('getChildrenToList', getChildrenToList(treeData, '0-1'))
console.log(forEachNode(treeData, (v: any, list: any) => {console.log('子项：', v)}))
console.log('getParentNodes', getParentNodes('0-0-1-0', treeData))
```

#### 示例二

说明：对象字段为`{id: 'xxx', parentId: 'xxx', children: []}`

```sh
import {
    getListFromTree,
    getNodeByKey,
    getChildrenToList,
    forEachNode,
    getParentNodes
} from 'tree-utils.js';

const treeData: any[] = [
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


const fieldNames = {key: 'id', parentKey: 'parentId', children: 'children'}


console.log('getListFromTree1', getListFromTree(treeData, fieldNames))
console.log('getNodeByKey1', getNodeByKey(treeData, '0-0-0', fieldNames))
console.log('getChildrenToList1', getChildrenToList(treeData, '0-1', fieldNames))
console.log(forEachNode(treeData, (v: any, list: any) => {console.log('子项1：', v)}, fieldNames))
console.log('getParentNodes1', getParentNodes('0-0-1-0', treeData, fieldNames))
```

### 测试

打开`cmd`控制台，执行以下命令：

```sh
cd example

tsc test.ts 

node test.js
```



## Author

👤 **jacky010**

* Github: [@jacky010](https://github.com/jacky010)

* 仓库地址：[tree-utils](https://github.com/Jacky010/tree-utils)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
