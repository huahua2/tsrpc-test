import { ApiCall } from "tsrpc";
import { Global } from "../models/Global";
import { ReqDelData, ResDelData } from "../shared/protocols/PtlDelData";

export default async function (call: ApiCall<ReqDelData, ResDelData>) {
    let op = await Global.collection('tsrpc').deleteOne({
        _id: call.req._id
    })

    call.succ({});
}