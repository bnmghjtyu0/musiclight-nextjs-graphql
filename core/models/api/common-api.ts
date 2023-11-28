/** API 共用 */
export interface ApiClient<T> {
  /** 1 成功, 0 失敗 */
  retCode: 1 | 0;
  /** api 回傳訊息 */
  retMsg: string;
  /** api 資料 */
  retVal: T;
}
