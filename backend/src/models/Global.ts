import { Collection, Db, MongoClient, OptionalId } from "mongodb";
import { Logger } from "tsrpc";
import { DbPost } from "../shared/db/DbPost";
import { BackConfig } from "./BackConfig";

export class Global {

  static db: Db;
  static client: MongoClient;

  static async init(logger?: Logger) {
    logger?.log(`Start connecting db...`)
    this.client = await new MongoClient(BackConfig.mongoDb).connect();
    logger?.log(`Db connected successfully...`)
    this.db = this.client.db();
  }

  static collection<T extends keyof DbCollectionType>(col: T): Collection<OptionalId<DbCollectionType[T]>> {
    return this.db.collection(col);
  }

  static close()  {
    return this.client.close();
  }

}

export interface DbCollectionType {
  tsrpc: DbPost
}