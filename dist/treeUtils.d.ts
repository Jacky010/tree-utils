interface FieldNames {
    key?: string;
    parentKey?: string;
    children?: string;
    isTree?: boolean;
}
/**
 * 将树型结构数据转换成一维数组
 * @param treeData
 */
export declare const getListFromTree: (treeData: any[], fieldNames?: FieldNames) => any[];
/**
 * 寻找指定子节点
 * @param treeData
 * @param key
 * @param props
 */
export declare const getNodeByKey: (treeData: any[], key: number | string, fieldNames?: FieldNames) => any;
/**
 * 获取节点下的所有子节点
 * @param treeData
 * @param key
 * @param props
 */
export declare const getChildrenToList: (treeData: any[], key: number | string, fieldNames?: FieldNames) => any[];
/**
 * 遍历每个树节点
 * @param list
 * @param callback
 * @param props
 */
export declare const forEachNode: (list: any[], callback: (v: any, list: any[]) => void, fieldNames?: FieldNames) => void;
/**
 * 获取所有父节点
 * @param key
 * @param tree
 * @param props
 */
export declare const getParentNodes: (key: string | number, tree: any[], fieldNames?: FieldNames) => any[];
export {};
