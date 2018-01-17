/**
 * Typescript definition for utopian-api
 * 
 * @author Jayser Mendez
 * https://github.com/jayserdny
 * 
 */

declare module "utopian-api" {
    var utopian_api: UTOPIAN_API;
    export = utopian_api;
}

declare class UTOPIAN_API {

    getModerators(): Promise<Array<String>>;
}