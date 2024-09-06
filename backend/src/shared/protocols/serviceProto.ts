import { ServiceProto } from 'tsrpc-proto';
import { ReqAddData, ResAddData } from './PtlAddData';
import { ReqDelData, ResDelData } from './PtlDelData';
import { ReqGetData, ResGetData } from './PtlGetData';

export interface ServiceType {
    api: {
        "AddData": {
            req: ReqAddData,
            res: ResAddData
        },
        "DelData": {
            req: ReqDelData,
            res: ResDelData
        },
        "GetData": {
            req: ReqGetData,
            res: ResGetData
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 4,
    "services": [
        {
            "id": 0,
            "name": "AddData",
            "type": "api"
        },
        {
            "id": 3,
            "name": "DelData",
            "type": "api"
        },
        {
            "id": 1,
            "name": "GetData",
            "type": "api"
        }
    ],
    "types": {
        "PtlAddData/ReqAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddData/ResAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlDelData/ReqDelData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                }
            ]
        },
        "PtlDelData/ResDelData": {
            "type": "Interface"
        },
        "PtlGetData/ReqGetData": {
            "type": "Interface"
        },
        "PtlGetData/ResGetData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/DbPost/DbPost"
                        }
                    }
                }
            ]
        },
        "../db/DbPost/DbPost": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_id",
                    "type": {
                        "type": "Reference",
                        "target": "?mongodb/ObjectId"
                    }
                },
                {
                    "id": 1,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};