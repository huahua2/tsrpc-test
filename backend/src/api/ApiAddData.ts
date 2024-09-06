import { ApiCall } from "tsrpc";
import { ReqAddData, ResAddData } from "../shared/protocols/PtlAddData";
import { Global } from '../models/Global';

// This is a demo code file
// Feel free to delete it

export default async function (call: ApiCall<ReqAddData, ResAddData>) {
  try {
    // Error
    if (call.req.content === '') {
      call.error('Content is empty');
      return;
    }

    let time = new Date();

    let op = await Global.collection('tsrpc').insertOne({
      content: call.req.content,
      time: time
    });


    if (op.insertedId) {
      // Success
      console.log(op.insertedId.toHexString())
      call.succ({
        time: time
      });
    }

  } finally {
  }

}