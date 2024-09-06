import { ApiCall } from "tsrpc";
import { ReqGetData, ResGetData } from "../shared/protocols/PtlGetData";
import { Global } from '../models/Global';

export default async function (call: ApiCall<ReqGetData, ResGetData>) {
  try {
    const op = Global.collection('tsrpc').find();
    const arr = await op.toArray()


    if (!arr.length) {
      call.error('Post 不存在');
      return
    }
    arr.sort((a, b) => {
      if (a.time.getTime() - b.time.getTime()) {
        return -1
      } else {
        return 1
      }
    })
    console.log(arr)
    call.succ({
      data: arr
    })
  } finally {
    // await Global.close();
  }

}

