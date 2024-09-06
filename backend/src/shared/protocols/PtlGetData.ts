// This is a demo code file
// Feel free to delete it

import { DbPost } from '../db/DbPost';

/**
 * 获取数据
 */
export interface ReqGetData {

}

export interface ResGetData {
  /** 返回所有数据列表 */
  data: DbPost[]
}