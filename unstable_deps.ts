/**
 * When using unstable dependencies, users need to add `--unstable` and
 * in some cases `--allow-plugin`. In order to make this optional and only
 * required when importing unstable dependencies, this is for now a separate
 * file that will only be imported when needed and therefore not always
 * necessary for other usage that does not require plugins/unstable deps.
 */

export {
  MongoClient as MongoDBClient,
  ClientOptions as MongoDBClientOptions,
  Database as MongoDBDatabase,
  init as initMongoDBPlugin,
  RELEASE_URL as MONGODB_PLUGIN_RELEASE_URL,
} from "https://raw.githubusercontent.com/manyuanrong/deno_mongo/master/mod.ts";
