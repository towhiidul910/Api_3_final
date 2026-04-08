
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Users2
 * 
 */
export type Users2 = $Result.DefaultSelection<Prisma.$Users2Payload>
/**
 * Model Post2
 * 
 */
export type Post2 = $Result.DefaultSelection<Prisma.$Post2Payload>
/**
 * Model Comments2
 * 
 */
export type Comments2 = $Result.DefaultSelection<Prisma.$Comments2Payload>
/**
 * Model Company2
 * 
 */
export type Company2 = $Result.DefaultSelection<Prisma.$Company2Payload>
/**
 * Model Geo2
 * 
 */
export type Geo2 = $Result.DefaultSelection<Prisma.$Geo2Payload>
/**
 * Model Address2
 * 
 */
export type Address2 = $Result.DefaultSelection<Prisma.$Address2Payload>
/**
 * Model Group2
 * 
 */
export type Group2 = $Result.DefaultSelection<Prisma.$Group2Payload>
/**
 * Model Role2
 * 
 */
export type Role2 = $Result.DefaultSelection<Prisma.$Role2Payload>
/**
 * Model UserGroups2
 * 
 */
export type UserGroups2 = $Result.DefaultSelection<Prisma.$UserGroups2Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users2`: Exposes CRUD operations for the **Users2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users2s
    * const users2s = await prisma.users2.findMany()
    * ```
    */
  get users2(): Prisma.Users2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post2`: Exposes CRUD operations for the **Post2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post2s
    * const post2s = await prisma.post2.findMany()
    * ```
    */
  get post2(): Prisma.Post2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments2`: Exposes CRUD operations for the **Comments2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments2s
    * const comments2s = await prisma.comments2.findMany()
    * ```
    */
  get comments2(): Prisma.Comments2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company2`: Exposes CRUD operations for the **Company2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Company2s
    * const company2s = await prisma.company2.findMany()
    * ```
    */
  get company2(): Prisma.Company2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.geo2`: Exposes CRUD operations for the **Geo2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Geo2s
    * const geo2s = await prisma.geo2.findMany()
    * ```
    */
  get geo2(): Prisma.Geo2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address2`: Exposes CRUD operations for the **Address2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Address2s
    * const address2s = await prisma.address2.findMany()
    * ```
    */
  get address2(): Prisma.Address2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group2`: Exposes CRUD operations for the **Group2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Group2s
    * const group2s = await prisma.group2.findMany()
    * ```
    */
  get group2(): Prisma.Group2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role2`: Exposes CRUD operations for the **Role2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role2s
    * const role2s = await prisma.role2.findMany()
    * ```
    */
  get role2(): Prisma.Role2Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGroups2`: Exposes CRUD operations for the **UserGroups2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGroups2s
    * const userGroups2s = await prisma.userGroups2.findMany()
    * ```
    */
  get userGroups2(): Prisma.UserGroups2Delegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Users2: 'Users2',
    Post2: 'Post2',
    Comments2: 'Comments2',
    Company2: 'Company2',
    Geo2: 'Geo2',
    Address2: 'Address2',
    Group2: 'Group2',
    Role2: 'Role2',
    UserGroups2: 'UserGroups2'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "users2" | "post2" | "comments2" | "company2" | "geo2" | "address2" | "group2" | "role2" | "userGroups2"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Users2: {
        payload: Prisma.$Users2Payload<ExtArgs>
        fields: Prisma.Users2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Users2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Users2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>
          }
          findFirst: {
            args: Prisma.Users2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Users2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>
          }
          findMany: {
            args: Prisma.Users2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>[]
          }
          create: {
            args: Prisma.Users2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>
          }
          createMany: {
            args: Prisma.Users2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Users2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>[]
          }
          delete: {
            args: Prisma.Users2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>
          }
          update: {
            args: Prisma.Users2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>
          }
          deleteMany: {
            args: Prisma.Users2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Users2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Users2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>[]
          }
          upsert: {
            args: Prisma.Users2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users2Payload>
          }
          aggregate: {
            args: Prisma.Users2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers2>
          }
          groupBy: {
            args: Prisma.Users2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Users2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Users2CountArgs<ExtArgs>
            result: $Utils.Optional<Users2CountAggregateOutputType> | number
          }
        }
      }
      Post2: {
        payload: Prisma.$Post2Payload<ExtArgs>
        fields: Prisma.Post2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Post2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Post2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>
          }
          findFirst: {
            args: Prisma.Post2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Post2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>
          }
          findMany: {
            args: Prisma.Post2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>[]
          }
          create: {
            args: Prisma.Post2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>
          }
          createMany: {
            args: Prisma.Post2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Post2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>[]
          }
          delete: {
            args: Prisma.Post2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>
          }
          update: {
            args: Prisma.Post2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>
          }
          deleteMany: {
            args: Prisma.Post2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Post2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Post2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>[]
          }
          upsert: {
            args: Prisma.Post2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Post2Payload>
          }
          aggregate: {
            args: Prisma.Post2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost2>
          }
          groupBy: {
            args: Prisma.Post2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Post2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Post2CountArgs<ExtArgs>
            result: $Utils.Optional<Post2CountAggregateOutputType> | number
          }
        }
      }
      Comments2: {
        payload: Prisma.$Comments2Payload<ExtArgs>
        fields: Prisma.Comments2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Comments2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Comments2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>
          }
          findFirst: {
            args: Prisma.Comments2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Comments2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>
          }
          findMany: {
            args: Prisma.Comments2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>[]
          }
          create: {
            args: Prisma.Comments2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>
          }
          createMany: {
            args: Prisma.Comments2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Comments2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>[]
          }
          delete: {
            args: Prisma.Comments2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>
          }
          update: {
            args: Prisma.Comments2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>
          }
          deleteMany: {
            args: Prisma.Comments2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Comments2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Comments2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>[]
          }
          upsert: {
            args: Prisma.Comments2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Comments2Payload>
          }
          aggregate: {
            args: Prisma.Comments2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments2>
          }
          groupBy: {
            args: Prisma.Comments2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Comments2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Comments2CountArgs<ExtArgs>
            result: $Utils.Optional<Comments2CountAggregateOutputType> | number
          }
        }
      }
      Company2: {
        payload: Prisma.$Company2Payload<ExtArgs>
        fields: Prisma.Company2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Company2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Company2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>
          }
          findFirst: {
            args: Prisma.Company2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Company2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>
          }
          findMany: {
            args: Prisma.Company2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>[]
          }
          create: {
            args: Prisma.Company2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>
          }
          createMany: {
            args: Prisma.Company2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Company2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>[]
          }
          delete: {
            args: Prisma.Company2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>
          }
          update: {
            args: Prisma.Company2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>
          }
          deleteMany: {
            args: Prisma.Company2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Company2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Company2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>[]
          }
          upsert: {
            args: Prisma.Company2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company2Payload>
          }
          aggregate: {
            args: Prisma.Company2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany2>
          }
          groupBy: {
            args: Prisma.Company2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Company2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Company2CountArgs<ExtArgs>
            result: $Utils.Optional<Company2CountAggregateOutputType> | number
          }
        }
      }
      Geo2: {
        payload: Prisma.$Geo2Payload<ExtArgs>
        fields: Prisma.Geo2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Geo2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Geo2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>
          }
          findFirst: {
            args: Prisma.Geo2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Geo2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>
          }
          findMany: {
            args: Prisma.Geo2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>[]
          }
          create: {
            args: Prisma.Geo2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>
          }
          createMany: {
            args: Prisma.Geo2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Geo2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>[]
          }
          delete: {
            args: Prisma.Geo2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>
          }
          update: {
            args: Prisma.Geo2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>
          }
          deleteMany: {
            args: Prisma.Geo2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Geo2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Geo2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>[]
          }
          upsert: {
            args: Prisma.Geo2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Geo2Payload>
          }
          aggregate: {
            args: Prisma.Geo2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeo2>
          }
          groupBy: {
            args: Prisma.Geo2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Geo2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Geo2CountArgs<ExtArgs>
            result: $Utils.Optional<Geo2CountAggregateOutputType> | number
          }
        }
      }
      Address2: {
        payload: Prisma.$Address2Payload<ExtArgs>
        fields: Prisma.Address2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Address2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Address2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>
          }
          findFirst: {
            args: Prisma.Address2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Address2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>
          }
          findMany: {
            args: Prisma.Address2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>[]
          }
          create: {
            args: Prisma.Address2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>
          }
          createMany: {
            args: Prisma.Address2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Address2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>[]
          }
          delete: {
            args: Prisma.Address2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>
          }
          update: {
            args: Prisma.Address2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>
          }
          deleteMany: {
            args: Prisma.Address2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Address2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Address2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>[]
          }
          upsert: {
            args: Prisma.Address2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Address2Payload>
          }
          aggregate: {
            args: Prisma.Address2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress2>
          }
          groupBy: {
            args: Prisma.Address2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Address2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Address2CountArgs<ExtArgs>
            result: $Utils.Optional<Address2CountAggregateOutputType> | number
          }
        }
      }
      Group2: {
        payload: Prisma.$Group2Payload<ExtArgs>
        fields: Prisma.Group2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Group2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Group2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>
          }
          findFirst: {
            args: Prisma.Group2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Group2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>
          }
          findMany: {
            args: Prisma.Group2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>[]
          }
          create: {
            args: Prisma.Group2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>
          }
          createMany: {
            args: Prisma.Group2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Group2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>[]
          }
          delete: {
            args: Prisma.Group2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>
          }
          update: {
            args: Prisma.Group2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>
          }
          deleteMany: {
            args: Prisma.Group2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Group2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Group2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>[]
          }
          upsert: {
            args: Prisma.Group2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Group2Payload>
          }
          aggregate: {
            args: Prisma.Group2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup2>
          }
          groupBy: {
            args: Prisma.Group2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Group2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Group2CountArgs<ExtArgs>
            result: $Utils.Optional<Group2CountAggregateOutputType> | number
          }
        }
      }
      Role2: {
        payload: Prisma.$Role2Payload<ExtArgs>
        fields: Prisma.Role2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Role2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Role2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>
          }
          findFirst: {
            args: Prisma.Role2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Role2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>
          }
          findMany: {
            args: Prisma.Role2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>[]
          }
          create: {
            args: Prisma.Role2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>
          }
          createMany: {
            args: Prisma.Role2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Role2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>[]
          }
          delete: {
            args: Prisma.Role2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>
          }
          update: {
            args: Prisma.Role2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>
          }
          deleteMany: {
            args: Prisma.Role2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Role2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Role2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>[]
          }
          upsert: {
            args: Prisma.Role2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role2Payload>
          }
          aggregate: {
            args: Prisma.Role2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole2>
          }
          groupBy: {
            args: Prisma.Role2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Role2GroupByOutputType>[]
          }
          count: {
            args: Prisma.Role2CountArgs<ExtArgs>
            result: $Utils.Optional<Role2CountAggregateOutputType> | number
          }
        }
      }
      UserGroups2: {
        payload: Prisma.$UserGroups2Payload<ExtArgs>
        fields: Prisma.UserGroups2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGroups2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGroups2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>
          }
          findFirst: {
            args: Prisma.UserGroups2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGroups2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>
          }
          findMany: {
            args: Prisma.UserGroups2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>[]
          }
          create: {
            args: Prisma.UserGroups2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>
          }
          createMany: {
            args: Prisma.UserGroups2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGroups2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>[]
          }
          delete: {
            args: Prisma.UserGroups2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>
          }
          update: {
            args: Prisma.UserGroups2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>
          }
          deleteMany: {
            args: Prisma.UserGroups2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGroups2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGroups2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>[]
          }
          upsert: {
            args: Prisma.UserGroups2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGroups2Payload>
          }
          aggregate: {
            args: Prisma.UserGroups2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGroups2>
          }
          groupBy: {
            args: Prisma.UserGroups2GroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroups2GroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGroups2CountArgs<ExtArgs>
            result: $Utils.Optional<UserGroups2CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    users2?: Users2Omit
    post2?: Post2Omit
    comments2?: Comments2Omit
    company2?: Company2Omit
    geo2?: Geo2Omit
    address2?: Address2Omit
    group2?: Group2Omit
    role2?: Role2Omit
    userGroups2?: UserGroups2Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Users2CountOutputType
   */

  export type Users2CountOutputType = {
    post: number
    roles: number
    userGroups: number
  }

  export type Users2CountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Users2CountOutputTypeCountPostArgs
    roles?: boolean | Users2CountOutputTypeCountRolesArgs
    userGroups?: boolean | Users2CountOutputTypeCountUserGroupsArgs
  }

  // Custom InputTypes
  /**
   * Users2CountOutputType without action
   */
  export type Users2CountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2CountOutputType
     */
    select?: Users2CountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Users2CountOutputType without action
   */
  export type Users2CountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Post2WhereInput
  }

  /**
   * Users2CountOutputType without action
   */
  export type Users2CountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Role2WhereInput
  }

  /**
   * Users2CountOutputType without action
   */
  export type Users2CountOutputTypeCountUserGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroups2WhereInput
  }


  /**
   * Count Type Post2CountOutputType
   */

  export type Post2CountOutputType = {
    comments: number
  }

  export type Post2CountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Post2CountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * Post2CountOutputType without action
   */
  export type Post2CountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2CountOutputType
     */
    select?: Post2CountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Post2CountOutputType without action
   */
  export type Post2CountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Comments2WhereInput
  }


  /**
   * Count Type Group2CountOutputType
   */

  export type Group2CountOutputType = {
    userGroups: number
  }

  export type Group2CountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | Group2CountOutputTypeCountUserGroupsArgs
  }

  // Custom InputTypes
  /**
   * Group2CountOutputType without action
   */
  export type Group2CountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2CountOutputType
     */
    select?: Group2CountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Group2CountOutputType without action
   */
  export type Group2CountOutputTypeCountUserGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroups2WhereInput
  }


  /**
   * Count Type Role2CountOutputType
   */

  export type Role2CountOutputType = {
    users2: number
  }

  export type Role2CountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users2?: boolean | Role2CountOutputTypeCountUsers2Args
  }

  // Custom InputTypes
  /**
   * Role2CountOutputType without action
   */
  export type Role2CountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2CountOutputType
     */
    select?: Role2CountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Role2CountOutputType without action
   */
  export type Role2CountOutputTypeCountUsers2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users2WhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Users2
   */

  export type AggregateUsers2 = {
    _count: Users2CountAggregateOutputType | null
    _avg: Users2AvgAggregateOutputType | null
    _sum: Users2SumAggregateOutputType | null
    _min: Users2MinAggregateOutputType | null
    _max: Users2MaxAggregateOutputType | null
  }

  export type Users2AvgAggregateOutputType = {
    id: number | null
  }

  export type Users2SumAggregateOutputType = {
    id: number | null
  }

  export type Users2MinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    email: string | null
    phone: string | null
    website: string | null
    createdAt: Date | null
    isActive: boolean | null
    deleteAt: Date | null
    deleted: boolean | null
  }

  export type Users2MaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    email: string | null
    phone: string | null
    website: string | null
    createdAt: Date | null
    isActive: boolean | null
    deleteAt: Date | null
    deleted: boolean | null
  }

  export type Users2CountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    email: number
    phone: number
    website: number
    createdAt: number
    isActive: number
    deleteAt: number
    deleted: number
    _all: number
  }


  export type Users2AvgAggregateInputType = {
    id?: true
  }

  export type Users2SumAggregateInputType = {
    id?: true
  }

  export type Users2MinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    phone?: true
    website?: true
    createdAt?: true
    isActive?: true
    deleteAt?: true
    deleted?: true
  }

  export type Users2MaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    phone?: true
    website?: true
    createdAt?: true
    isActive?: true
    deleteAt?: true
    deleted?: true
  }

  export type Users2CountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    email?: true
    phone?: true
    website?: true
    createdAt?: true
    isActive?: true
    deleteAt?: true
    deleted?: true
    _all?: true
  }

  export type Users2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users2 to aggregate.
     */
    where?: Users2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users2s to fetch.
     */
    orderBy?: Users2OrderByWithRelationInput | Users2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Users2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users2s
    **/
    _count?: true | Users2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users2MaxAggregateInputType
  }

  export type GetUsers2AggregateType<T extends Users2AggregateArgs> = {
        [P in keyof T & keyof AggregateUsers2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers2[P]>
      : GetScalarType<T[P], AggregateUsers2[P]>
  }




  export type Users2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users2WhereInput
    orderBy?: Users2OrderByWithAggregationInput | Users2OrderByWithAggregationInput[]
    by: Users2ScalarFieldEnum[] | Users2ScalarFieldEnum
    having?: Users2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users2CountAggregateInputType | true
    _avg?: Users2AvgAggregateInputType
    _sum?: Users2SumAggregateInputType
    _min?: Users2MinAggregateInputType
    _max?: Users2MaxAggregateInputType
  }

  export type Users2GroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    email: string | null
    phone: string | null
    website: string | null
    createdAt: Date
    isActive: boolean
    deleteAt: Date | null
    deleted: boolean
    _count: Users2CountAggregateOutputType | null
    _avg: Users2AvgAggregateOutputType | null
    _sum: Users2SumAggregateOutputType | null
    _min: Users2MinAggregateOutputType | null
    _max: Users2MaxAggregateOutputType | null
  }

  type GetUsers2GroupByPayload<T extends Users2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users2GroupByOutputType[P]>
            : GetScalarType<T[P], Users2GroupByOutputType[P]>
        }
      >
    >


  export type Users2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    createdAt?: boolean
    isActive?: boolean
    deleteAt?: boolean
    deleted?: boolean
    address?: boolean | Users2$addressArgs<ExtArgs>
    company?: boolean | Users2$companyArgs<ExtArgs>
    post?: boolean | Users2$postArgs<ExtArgs>
    roles?: boolean | Users2$rolesArgs<ExtArgs>
    userGroups?: boolean | Users2$userGroupsArgs<ExtArgs>
    _count?: boolean | Users2CountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users2"]>

  export type Users2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    createdAt?: boolean
    isActive?: boolean
    deleteAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["users2"]>

  export type Users2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    createdAt?: boolean
    isActive?: boolean
    deleteAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["users2"]>

  export type Users2SelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    createdAt?: boolean
    isActive?: boolean
    deleteAt?: boolean
    deleted?: boolean
  }

  export type Users2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "email" | "phone" | "website" | "createdAt" | "isActive" | "deleteAt" | "deleted", ExtArgs["result"]["users2"]>
  export type Users2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Users2$addressArgs<ExtArgs>
    company?: boolean | Users2$companyArgs<ExtArgs>
    post?: boolean | Users2$postArgs<ExtArgs>
    roles?: boolean | Users2$rolesArgs<ExtArgs>
    userGroups?: boolean | Users2$userGroupsArgs<ExtArgs>
    _count?: boolean | Users2CountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Users2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Users2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Users2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users2"
    objects: {
      address: Prisma.$Address2Payload<ExtArgs> | null
      company: Prisma.$Company2Payload<ExtArgs> | null
      post: Prisma.$Post2Payload<ExtArgs>[]
      roles: Prisma.$Role2Payload<ExtArgs>[]
      userGroups: Prisma.$UserGroups2Payload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      email: string | null
      phone: string | null
      website: string | null
      createdAt: Date
      isActive: boolean
      deleteAt: Date | null
      deleted: boolean
    }, ExtArgs["result"]["users2"]>
    composites: {}
  }

  type Users2GetPayload<S extends boolean | null | undefined | Users2DefaultArgs> = $Result.GetResult<Prisma.$Users2Payload, S>

  type Users2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Users2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users2CountAggregateInputType | true
    }

  export interface Users2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users2'], meta: { name: 'Users2' } }
    /**
     * Find zero or one Users2 that matches the filter.
     * @param {Users2FindUniqueArgs} args - Arguments to find a Users2
     * @example
     * // Get one Users2
     * const users2 = await prisma.users2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Users2FindUniqueArgs>(args: SelectSubset<T, Users2FindUniqueArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Users2FindUniqueOrThrowArgs} args - Arguments to find a Users2
     * @example
     * // Get one Users2
     * const users2 = await prisma.users2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Users2FindUniqueOrThrowArgs>(args: SelectSubset<T, Users2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users2FindFirstArgs} args - Arguments to find a Users2
     * @example
     * // Get one Users2
     * const users2 = await prisma.users2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Users2FindFirstArgs>(args?: SelectSubset<T, Users2FindFirstArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users2FindFirstOrThrowArgs} args - Arguments to find a Users2
     * @example
     * // Get one Users2
     * const users2 = await prisma.users2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Users2FindFirstOrThrowArgs>(args?: SelectSubset<T, Users2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users2s
     * const users2s = await prisma.users2.findMany()
     * 
     * // Get first 10 Users2s
     * const users2s = await prisma.users2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const users2WithIdOnly = await prisma.users2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Users2FindManyArgs>(args?: SelectSubset<T, Users2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users2.
     * @param {Users2CreateArgs} args - Arguments to create a Users2.
     * @example
     * // Create one Users2
     * const Users2 = await prisma.users2.create({
     *   data: {
     *     // ... data to create a Users2
     *   }
     * })
     * 
     */
    create<T extends Users2CreateArgs>(args: SelectSubset<T, Users2CreateArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users2s.
     * @param {Users2CreateManyArgs} args - Arguments to create many Users2s.
     * @example
     * // Create many Users2s
     * const users2 = await prisma.users2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Users2CreateManyArgs>(args?: SelectSubset<T, Users2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users2s and returns the data saved in the database.
     * @param {Users2CreateManyAndReturnArgs} args - Arguments to create many Users2s.
     * @example
     * // Create many Users2s
     * const users2 = await prisma.users2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users2s and only return the `id`
     * const users2WithIdOnly = await prisma.users2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Users2CreateManyAndReturnArgs>(args?: SelectSubset<T, Users2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users2.
     * @param {Users2DeleteArgs} args - Arguments to delete one Users2.
     * @example
     * // Delete one Users2
     * const Users2 = await prisma.users2.delete({
     *   where: {
     *     // ... filter to delete one Users2
     *   }
     * })
     * 
     */
    delete<T extends Users2DeleteArgs>(args: SelectSubset<T, Users2DeleteArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users2.
     * @param {Users2UpdateArgs} args - Arguments to update one Users2.
     * @example
     * // Update one Users2
     * const users2 = await prisma.users2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Users2UpdateArgs>(args: SelectSubset<T, Users2UpdateArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users2s.
     * @param {Users2DeleteManyArgs} args - Arguments to filter Users2s to delete.
     * @example
     * // Delete a few Users2s
     * const { count } = await prisma.users2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Users2DeleteManyArgs>(args?: SelectSubset<T, Users2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users2s
     * const users2 = await prisma.users2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Users2UpdateManyArgs>(args: SelectSubset<T, Users2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users2s and returns the data updated in the database.
     * @param {Users2UpdateManyAndReturnArgs} args - Arguments to update many Users2s.
     * @example
     * // Update many Users2s
     * const users2 = await prisma.users2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users2s and only return the `id`
     * const users2WithIdOnly = await prisma.users2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Users2UpdateManyAndReturnArgs>(args: SelectSubset<T, Users2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users2.
     * @param {Users2UpsertArgs} args - Arguments to update or create a Users2.
     * @example
     * // Update or create a Users2
     * const users2 = await prisma.users2.upsert({
     *   create: {
     *     // ... data to create a Users2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users2 we want to update
     *   }
     * })
     */
    upsert<T extends Users2UpsertArgs>(args: SelectSubset<T, Users2UpsertArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users2CountArgs} args - Arguments to filter Users2s to count.
     * @example
     * // Count the number of Users2s
     * const count = await prisma.users2.count({
     *   where: {
     *     // ... the filter for the Users2s we want to count
     *   }
     * })
    **/
    count<T extends Users2CountArgs>(
      args?: Subset<T, Users2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users2AggregateArgs>(args: Subset<T, Users2AggregateArgs>): Prisma.PrismaPromise<GetUsers2AggregateType<T>>

    /**
     * Group by Users2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Users2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Users2GroupByArgs['orderBy'] }
        : { orderBy?: Users2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Users2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users2 model
   */
  readonly fields: Users2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Users2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Users2$addressArgs<ExtArgs> = {}>(args?: Subset<T, Users2$addressArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    company<T extends Users2$companyArgs<ExtArgs> = {}>(args?: Subset<T, Users2$companyArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends Users2$postArgs<ExtArgs> = {}>(args?: Subset<T, Users2$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends Users2$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Users2$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userGroups<T extends Users2$userGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Users2$userGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users2 model
   */
  interface Users2FieldRefs {
    readonly id: FieldRef<"Users2", 'Int'>
    readonly name: FieldRef<"Users2", 'String'>
    readonly username: FieldRef<"Users2", 'String'>
    readonly password: FieldRef<"Users2", 'String'>
    readonly email: FieldRef<"Users2", 'String'>
    readonly phone: FieldRef<"Users2", 'String'>
    readonly website: FieldRef<"Users2", 'String'>
    readonly createdAt: FieldRef<"Users2", 'DateTime'>
    readonly isActive: FieldRef<"Users2", 'Boolean'>
    readonly deleteAt: FieldRef<"Users2", 'DateTime'>
    readonly deleted: FieldRef<"Users2", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Users2 findUnique
   */
  export type Users2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * Filter, which Users2 to fetch.
     */
    where: Users2WhereUniqueInput
  }

  /**
   * Users2 findUniqueOrThrow
   */
  export type Users2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * Filter, which Users2 to fetch.
     */
    where: Users2WhereUniqueInput
  }

  /**
   * Users2 findFirst
   */
  export type Users2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * Filter, which Users2 to fetch.
     */
    where?: Users2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users2s to fetch.
     */
    orderBy?: Users2OrderByWithRelationInput | Users2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users2s.
     */
    cursor?: Users2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users2s.
     */
    distinct?: Users2ScalarFieldEnum | Users2ScalarFieldEnum[]
  }

  /**
   * Users2 findFirstOrThrow
   */
  export type Users2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * Filter, which Users2 to fetch.
     */
    where?: Users2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users2s to fetch.
     */
    orderBy?: Users2OrderByWithRelationInput | Users2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users2s.
     */
    cursor?: Users2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users2s.
     */
    distinct?: Users2ScalarFieldEnum | Users2ScalarFieldEnum[]
  }

  /**
   * Users2 findMany
   */
  export type Users2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * Filter, which Users2s to fetch.
     */
    where?: Users2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users2s to fetch.
     */
    orderBy?: Users2OrderByWithRelationInput | Users2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users2s.
     */
    cursor?: Users2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users2s.
     */
    skip?: number
    distinct?: Users2ScalarFieldEnum | Users2ScalarFieldEnum[]
  }

  /**
   * Users2 create
   */
  export type Users2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * The data needed to create a Users2.
     */
    data: XOR<Users2CreateInput, Users2UncheckedCreateInput>
  }

  /**
   * Users2 createMany
   */
  export type Users2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users2s.
     */
    data: Users2CreateManyInput | Users2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users2 createManyAndReturn
   */
  export type Users2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * The data used to create many Users2s.
     */
    data: Users2CreateManyInput | Users2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users2 update
   */
  export type Users2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * The data needed to update a Users2.
     */
    data: XOR<Users2UpdateInput, Users2UncheckedUpdateInput>
    /**
     * Choose, which Users2 to update.
     */
    where: Users2WhereUniqueInput
  }

  /**
   * Users2 updateMany
   */
  export type Users2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users2s.
     */
    data: XOR<Users2UpdateManyMutationInput, Users2UncheckedUpdateManyInput>
    /**
     * Filter which Users2s to update
     */
    where?: Users2WhereInput
    /**
     * Limit how many Users2s to update.
     */
    limit?: number
  }

  /**
   * Users2 updateManyAndReturn
   */
  export type Users2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * The data used to update Users2s.
     */
    data: XOR<Users2UpdateManyMutationInput, Users2UncheckedUpdateManyInput>
    /**
     * Filter which Users2s to update
     */
    where?: Users2WhereInput
    /**
     * Limit how many Users2s to update.
     */
    limit?: number
  }

  /**
   * Users2 upsert
   */
  export type Users2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * The filter to search for the Users2 to update in case it exists.
     */
    where: Users2WhereUniqueInput
    /**
     * In case the Users2 found by the `where` argument doesn't exist, create a new Users2 with this data.
     */
    create: XOR<Users2CreateInput, Users2UncheckedCreateInput>
    /**
     * In case the Users2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Users2UpdateInput, Users2UncheckedUpdateInput>
  }

  /**
   * Users2 delete
   */
  export type Users2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    /**
     * Filter which Users2 to delete.
     */
    where: Users2WhereUniqueInput
  }

  /**
   * Users2 deleteMany
   */
  export type Users2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users2s to delete
     */
    where?: Users2WhereInput
    /**
     * Limit how many Users2s to delete.
     */
    limit?: number
  }

  /**
   * Users2.address
   */
  export type Users2$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    where?: Address2WhereInput
  }

  /**
   * Users2.company
   */
  export type Users2$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    where?: Company2WhereInput
  }

  /**
   * Users2.post
   */
  export type Users2$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    where?: Post2WhereInput
    orderBy?: Post2OrderByWithRelationInput | Post2OrderByWithRelationInput[]
    cursor?: Post2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post2ScalarFieldEnum | Post2ScalarFieldEnum[]
  }

  /**
   * Users2.roles
   */
  export type Users2$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    where?: Role2WhereInput
    orderBy?: Role2OrderByWithRelationInput | Role2OrderByWithRelationInput[]
    cursor?: Role2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role2ScalarFieldEnum | Role2ScalarFieldEnum[]
  }

  /**
   * Users2.userGroups
   */
  export type Users2$userGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    where?: UserGroups2WhereInput
    orderBy?: UserGroups2OrderByWithRelationInput | UserGroups2OrderByWithRelationInput[]
    cursor?: UserGroups2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGroups2ScalarFieldEnum | UserGroups2ScalarFieldEnum[]
  }

  /**
   * Users2 without action
   */
  export type Users2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
  }


  /**
   * Model Post2
   */

  export type AggregatePost2 = {
    _count: Post2CountAggregateOutputType | null
    _avg: Post2AvgAggregateOutputType | null
    _sum: Post2SumAggregateOutputType | null
    _min: Post2MinAggregateOutputType | null
    _max: Post2MaxAggregateOutputType | null
  }

  export type Post2AvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Post2SumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Post2MinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    body: string | null
  }

  export type Post2MaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    body: string | null
  }

  export type Post2CountAggregateOutputType = {
    id: number
    userId: number
    title: number
    body: number
    _all: number
  }


  export type Post2AvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Post2SumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Post2MinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
  }

  export type Post2MaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
  }

  export type Post2CountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    body?: true
    _all?: true
  }

  export type Post2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post2 to aggregate.
     */
    where?: Post2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Post2s to fetch.
     */
    orderBy?: Post2OrderByWithRelationInput | Post2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Post2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Post2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Post2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Post2s
    **/
    _count?: true | Post2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Post2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Post2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post2MaxAggregateInputType
  }

  export type GetPost2AggregateType<T extends Post2AggregateArgs> = {
        [P in keyof T & keyof AggregatePost2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost2[P]>
      : GetScalarType<T[P], AggregatePost2[P]>
  }




  export type Post2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Post2WhereInput
    orderBy?: Post2OrderByWithAggregationInput | Post2OrderByWithAggregationInput[]
    by: Post2ScalarFieldEnum[] | Post2ScalarFieldEnum
    having?: Post2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post2CountAggregateInputType | true
    _avg?: Post2AvgAggregateInputType
    _sum?: Post2SumAggregateInputType
    _min?: Post2MinAggregateInputType
    _max?: Post2MaxAggregateInputType
  }

  export type Post2GroupByOutputType = {
    id: number
    userId: number
    title: string
    body: string
    _count: Post2CountAggregateOutputType | null
    _avg: Post2AvgAggregateOutputType | null
    _sum: Post2SumAggregateOutputType | null
    _min: Post2MinAggregateOutputType | null
    _max: Post2MaxAggregateOutputType | null
  }

  type GetPost2GroupByPayload<T extends Post2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post2GroupByOutputType[P]>
            : GetScalarType<T[P], Post2GroupByOutputType[P]>
        }
      >
    >


  export type Post2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    users?: boolean | Users2DefaultArgs<ExtArgs>
    comments?: boolean | Post2$commentsArgs<ExtArgs>
    _count?: boolean | Post2CountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post2"]>

  export type Post2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post2"]>

  export type Post2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post2"]>

  export type Post2SelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    body?: boolean
  }

  export type Post2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "body", ExtArgs["result"]["post2"]>
  export type Post2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Users2DefaultArgs<ExtArgs>
    comments?: boolean | Post2$commentsArgs<ExtArgs>
    _count?: boolean | Post2CountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Post2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }
  export type Post2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }

  export type $Post2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post2"
    objects: {
      users: Prisma.$Users2Payload<ExtArgs>
      comments: Prisma.$Comments2Payload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      body: string
    }, ExtArgs["result"]["post2"]>
    composites: {}
  }

  type Post2GetPayload<S extends boolean | null | undefined | Post2DefaultArgs> = $Result.GetResult<Prisma.$Post2Payload, S>

  type Post2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Post2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post2CountAggregateInputType | true
    }

  export interface Post2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post2'], meta: { name: 'Post2' } }
    /**
     * Find zero or one Post2 that matches the filter.
     * @param {Post2FindUniqueArgs} args - Arguments to find a Post2
     * @example
     * // Get one Post2
     * const post2 = await prisma.post2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Post2FindUniqueArgs>(args: SelectSubset<T, Post2FindUniqueArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Post2FindUniqueOrThrowArgs} args - Arguments to find a Post2
     * @example
     * // Get one Post2
     * const post2 = await prisma.post2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Post2FindUniqueOrThrowArgs>(args: SelectSubset<T, Post2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post2FindFirstArgs} args - Arguments to find a Post2
     * @example
     * // Get one Post2
     * const post2 = await prisma.post2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Post2FindFirstArgs>(args?: SelectSubset<T, Post2FindFirstArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post2FindFirstOrThrowArgs} args - Arguments to find a Post2
     * @example
     * // Get one Post2
     * const post2 = await prisma.post2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Post2FindFirstOrThrowArgs>(args?: SelectSubset<T, Post2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post2s
     * const post2s = await prisma.post2.findMany()
     * 
     * // Get first 10 Post2s
     * const post2s = await prisma.post2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const post2WithIdOnly = await prisma.post2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Post2FindManyArgs>(args?: SelectSubset<T, Post2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post2.
     * @param {Post2CreateArgs} args - Arguments to create a Post2.
     * @example
     * // Create one Post2
     * const Post2 = await prisma.post2.create({
     *   data: {
     *     // ... data to create a Post2
     *   }
     * })
     * 
     */
    create<T extends Post2CreateArgs>(args: SelectSubset<T, Post2CreateArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post2s.
     * @param {Post2CreateManyArgs} args - Arguments to create many Post2s.
     * @example
     * // Create many Post2s
     * const post2 = await prisma.post2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Post2CreateManyArgs>(args?: SelectSubset<T, Post2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post2s and returns the data saved in the database.
     * @param {Post2CreateManyAndReturnArgs} args - Arguments to create many Post2s.
     * @example
     * // Create many Post2s
     * const post2 = await prisma.post2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post2s and only return the `id`
     * const post2WithIdOnly = await prisma.post2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Post2CreateManyAndReturnArgs>(args?: SelectSubset<T, Post2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post2.
     * @param {Post2DeleteArgs} args - Arguments to delete one Post2.
     * @example
     * // Delete one Post2
     * const Post2 = await prisma.post2.delete({
     *   where: {
     *     // ... filter to delete one Post2
     *   }
     * })
     * 
     */
    delete<T extends Post2DeleteArgs>(args: SelectSubset<T, Post2DeleteArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post2.
     * @param {Post2UpdateArgs} args - Arguments to update one Post2.
     * @example
     * // Update one Post2
     * const post2 = await prisma.post2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Post2UpdateArgs>(args: SelectSubset<T, Post2UpdateArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post2s.
     * @param {Post2DeleteManyArgs} args - Arguments to filter Post2s to delete.
     * @example
     * // Delete a few Post2s
     * const { count } = await prisma.post2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Post2DeleteManyArgs>(args?: SelectSubset<T, Post2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post2s
     * const post2 = await prisma.post2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Post2UpdateManyArgs>(args: SelectSubset<T, Post2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post2s and returns the data updated in the database.
     * @param {Post2UpdateManyAndReturnArgs} args - Arguments to update many Post2s.
     * @example
     * // Update many Post2s
     * const post2 = await prisma.post2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post2s and only return the `id`
     * const post2WithIdOnly = await prisma.post2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Post2UpdateManyAndReturnArgs>(args: SelectSubset<T, Post2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post2.
     * @param {Post2UpsertArgs} args - Arguments to update or create a Post2.
     * @example
     * // Update or create a Post2
     * const post2 = await prisma.post2.upsert({
     *   create: {
     *     // ... data to create a Post2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post2 we want to update
     *   }
     * })
     */
    upsert<T extends Post2UpsertArgs>(args: SelectSubset<T, Post2UpsertArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post2CountArgs} args - Arguments to filter Post2s to count.
     * @example
     * // Count the number of Post2s
     * const count = await prisma.post2.count({
     *   where: {
     *     // ... the filter for the Post2s we want to count
     *   }
     * })
    **/
    count<T extends Post2CountArgs>(
      args?: Subset<T, Post2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Post2AggregateArgs>(args: Subset<T, Post2AggregateArgs>): Prisma.PrismaPromise<GetPost2AggregateType<T>>

    /**
     * Group by Post2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Post2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Post2GroupByArgs['orderBy'] }
        : { orderBy?: Post2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Post2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post2 model
   */
  readonly fields: Post2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Post2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Users2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, Users2DefaultArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post2$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post2$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post2 model
   */
  interface Post2FieldRefs {
    readonly id: FieldRef<"Post2", 'Int'>
    readonly userId: FieldRef<"Post2", 'Int'>
    readonly title: FieldRef<"Post2", 'String'>
    readonly body: FieldRef<"Post2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post2 findUnique
   */
  export type Post2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * Filter, which Post2 to fetch.
     */
    where: Post2WhereUniqueInput
  }

  /**
   * Post2 findUniqueOrThrow
   */
  export type Post2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * Filter, which Post2 to fetch.
     */
    where: Post2WhereUniqueInput
  }

  /**
   * Post2 findFirst
   */
  export type Post2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * Filter, which Post2 to fetch.
     */
    where?: Post2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Post2s to fetch.
     */
    orderBy?: Post2OrderByWithRelationInput | Post2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Post2s.
     */
    cursor?: Post2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Post2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Post2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Post2s.
     */
    distinct?: Post2ScalarFieldEnum | Post2ScalarFieldEnum[]
  }

  /**
   * Post2 findFirstOrThrow
   */
  export type Post2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * Filter, which Post2 to fetch.
     */
    where?: Post2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Post2s to fetch.
     */
    orderBy?: Post2OrderByWithRelationInput | Post2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Post2s.
     */
    cursor?: Post2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Post2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Post2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Post2s.
     */
    distinct?: Post2ScalarFieldEnum | Post2ScalarFieldEnum[]
  }

  /**
   * Post2 findMany
   */
  export type Post2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * Filter, which Post2s to fetch.
     */
    where?: Post2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Post2s to fetch.
     */
    orderBy?: Post2OrderByWithRelationInput | Post2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Post2s.
     */
    cursor?: Post2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Post2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Post2s.
     */
    skip?: number
    distinct?: Post2ScalarFieldEnum | Post2ScalarFieldEnum[]
  }

  /**
   * Post2 create
   */
  export type Post2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * The data needed to create a Post2.
     */
    data: XOR<Post2CreateInput, Post2UncheckedCreateInput>
  }

  /**
   * Post2 createMany
   */
  export type Post2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Post2s.
     */
    data: Post2CreateManyInput | Post2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post2 createManyAndReturn
   */
  export type Post2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * The data used to create many Post2s.
     */
    data: Post2CreateManyInput | Post2CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post2 update
   */
  export type Post2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * The data needed to update a Post2.
     */
    data: XOR<Post2UpdateInput, Post2UncheckedUpdateInput>
    /**
     * Choose, which Post2 to update.
     */
    where: Post2WhereUniqueInput
  }

  /**
   * Post2 updateMany
   */
  export type Post2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Post2s.
     */
    data: XOR<Post2UpdateManyMutationInput, Post2UncheckedUpdateManyInput>
    /**
     * Filter which Post2s to update
     */
    where?: Post2WhereInput
    /**
     * Limit how many Post2s to update.
     */
    limit?: number
  }

  /**
   * Post2 updateManyAndReturn
   */
  export type Post2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * The data used to update Post2s.
     */
    data: XOR<Post2UpdateManyMutationInput, Post2UncheckedUpdateManyInput>
    /**
     * Filter which Post2s to update
     */
    where?: Post2WhereInput
    /**
     * Limit how many Post2s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post2 upsert
   */
  export type Post2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * The filter to search for the Post2 to update in case it exists.
     */
    where: Post2WhereUniqueInput
    /**
     * In case the Post2 found by the `where` argument doesn't exist, create a new Post2 with this data.
     */
    create: XOR<Post2CreateInput, Post2UncheckedCreateInput>
    /**
     * In case the Post2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Post2UpdateInput, Post2UncheckedUpdateInput>
  }

  /**
   * Post2 delete
   */
  export type Post2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
    /**
     * Filter which Post2 to delete.
     */
    where: Post2WhereUniqueInput
  }

  /**
   * Post2 deleteMany
   */
  export type Post2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post2s to delete
     */
    where?: Post2WhereInput
    /**
     * Limit how many Post2s to delete.
     */
    limit?: number
  }

  /**
   * Post2.comments
   */
  export type Post2$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    where?: Comments2WhereInput
    orderBy?: Comments2OrderByWithRelationInput | Comments2OrderByWithRelationInput[]
    cursor?: Comments2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Comments2ScalarFieldEnum | Comments2ScalarFieldEnum[]
  }

  /**
   * Post2 without action
   */
  export type Post2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post2
     */
    select?: Post2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Post2
     */
    omit?: Post2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Post2Include<ExtArgs> | null
  }


  /**
   * Model Comments2
   */

  export type AggregateComments2 = {
    _count: Comments2CountAggregateOutputType | null
    _avg: Comments2AvgAggregateOutputType | null
    _sum: Comments2SumAggregateOutputType | null
    _min: Comments2MinAggregateOutputType | null
    _max: Comments2MaxAggregateOutputType | null
  }

  export type Comments2AvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type Comments2SumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type Comments2MinAggregateOutputType = {
    id: number | null
    postId: number | null
    name: string | null
    email: string | null
    body: string | null
  }

  export type Comments2MaxAggregateOutputType = {
    id: number | null
    postId: number | null
    name: string | null
    email: string | null
    body: string | null
  }

  export type Comments2CountAggregateOutputType = {
    id: number
    postId: number
    name: number
    email: number
    body: number
    _all: number
  }


  export type Comments2AvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type Comments2SumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type Comments2MinAggregateInputType = {
    id?: true
    postId?: true
    name?: true
    email?: true
    body?: true
  }

  export type Comments2MaxAggregateInputType = {
    id?: true
    postId?: true
    name?: true
    email?: true
    body?: true
  }

  export type Comments2CountAggregateInputType = {
    id?: true
    postId?: true
    name?: true
    email?: true
    body?: true
    _all?: true
  }

  export type Comments2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments2 to aggregate.
     */
    where?: Comments2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments2s to fetch.
     */
    orderBy?: Comments2OrderByWithRelationInput | Comments2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Comments2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments2s
    **/
    _count?: true | Comments2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Comments2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Comments2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Comments2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Comments2MaxAggregateInputType
  }

  export type GetComments2AggregateType<T extends Comments2AggregateArgs> = {
        [P in keyof T & keyof AggregateComments2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments2[P]>
      : GetScalarType<T[P], AggregateComments2[P]>
  }




  export type Comments2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Comments2WhereInput
    orderBy?: Comments2OrderByWithAggregationInput | Comments2OrderByWithAggregationInput[]
    by: Comments2ScalarFieldEnum[] | Comments2ScalarFieldEnum
    having?: Comments2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Comments2CountAggregateInputType | true
    _avg?: Comments2AvgAggregateInputType
    _sum?: Comments2SumAggregateInputType
    _min?: Comments2MinAggregateInputType
    _max?: Comments2MaxAggregateInputType
  }

  export type Comments2GroupByOutputType = {
    id: number
    postId: number
    name: string
    email: string
    body: string
    _count: Comments2CountAggregateOutputType | null
    _avg: Comments2AvgAggregateOutputType | null
    _sum: Comments2SumAggregateOutputType | null
    _min: Comments2MinAggregateOutputType | null
    _max: Comments2MaxAggregateOutputType | null
  }

  type GetComments2GroupByPayload<T extends Comments2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Comments2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Comments2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Comments2GroupByOutputType[P]>
            : GetScalarType<T[P], Comments2GroupByOutputType[P]>
        }
      >
    >


  export type Comments2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    name?: boolean
    email?: boolean
    body?: boolean
    post?: boolean | Post2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments2"]>

  export type Comments2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    name?: boolean
    email?: boolean
    body?: boolean
    post?: boolean | Post2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments2"]>

  export type Comments2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    name?: boolean
    email?: boolean
    body?: boolean
    post?: boolean | Post2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments2"]>

  export type Comments2SelectScalar = {
    id?: boolean
    postId?: boolean
    name?: boolean
    email?: boolean
    body?: boolean
  }

  export type Comments2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "name" | "email" | "body", ExtArgs["result"]["comments2"]>
  export type Comments2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Post2DefaultArgs<ExtArgs>
  }
  export type Comments2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Post2DefaultArgs<ExtArgs>
  }
  export type Comments2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Post2DefaultArgs<ExtArgs>
  }

  export type $Comments2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments2"
    objects: {
      post: Prisma.$Post2Payload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      name: string
      email: string
      body: string
    }, ExtArgs["result"]["comments2"]>
    composites: {}
  }

  type Comments2GetPayload<S extends boolean | null | undefined | Comments2DefaultArgs> = $Result.GetResult<Prisma.$Comments2Payload, S>

  type Comments2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Comments2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Comments2CountAggregateInputType | true
    }

  export interface Comments2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments2'], meta: { name: 'Comments2' } }
    /**
     * Find zero or one Comments2 that matches the filter.
     * @param {Comments2FindUniqueArgs} args - Arguments to find a Comments2
     * @example
     * // Get one Comments2
     * const comments2 = await prisma.comments2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Comments2FindUniqueArgs>(args: SelectSubset<T, Comments2FindUniqueArgs<ExtArgs>>): Prisma__Comments2Client<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Comments2FindUniqueOrThrowArgs} args - Arguments to find a Comments2
     * @example
     * // Get one Comments2
     * const comments2 = await prisma.comments2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Comments2FindUniqueOrThrowArgs>(args: SelectSubset<T, Comments2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Comments2Client<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comments2FindFirstArgs} args - Arguments to find a Comments2
     * @example
     * // Get one Comments2
     * const comments2 = await prisma.comments2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Comments2FindFirstArgs>(args?: SelectSubset<T, Comments2FindFirstArgs<ExtArgs>>): Prisma__Comments2Client<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comments2FindFirstOrThrowArgs} args - Arguments to find a Comments2
     * @example
     * // Get one Comments2
     * const comments2 = await prisma.comments2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Comments2FindFirstOrThrowArgs>(args?: SelectSubset<T, Comments2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Comments2Client<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comments2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments2s
     * const comments2s = await prisma.comments2.findMany()
     * 
     * // Get first 10 Comments2s
     * const comments2s = await prisma.comments2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comments2WithIdOnly = await prisma.comments2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Comments2FindManyArgs>(args?: SelectSubset<T, Comments2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments2.
     * @param {Comments2CreateArgs} args - Arguments to create a Comments2.
     * @example
     * // Create one Comments2
     * const Comments2 = await prisma.comments2.create({
     *   data: {
     *     // ... data to create a Comments2
     *   }
     * })
     * 
     */
    create<T extends Comments2CreateArgs>(args: SelectSubset<T, Comments2CreateArgs<ExtArgs>>): Prisma__Comments2Client<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments2s.
     * @param {Comments2CreateManyArgs} args - Arguments to create many Comments2s.
     * @example
     * // Create many Comments2s
     * const comments2 = await prisma.comments2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Comments2CreateManyArgs>(args?: SelectSubset<T, Comments2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments2s and returns the data saved in the database.
     * @param {Comments2CreateManyAndReturnArgs} args - Arguments to create many Comments2s.
     * @example
     * // Create many Comments2s
     * const comments2 = await prisma.comments2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments2s and only return the `id`
     * const comments2WithIdOnly = await prisma.comments2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Comments2CreateManyAndReturnArgs>(args?: SelectSubset<T, Comments2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments2.
     * @param {Comments2DeleteArgs} args - Arguments to delete one Comments2.
     * @example
     * // Delete one Comments2
     * const Comments2 = await prisma.comments2.delete({
     *   where: {
     *     // ... filter to delete one Comments2
     *   }
     * })
     * 
     */
    delete<T extends Comments2DeleteArgs>(args: SelectSubset<T, Comments2DeleteArgs<ExtArgs>>): Prisma__Comments2Client<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments2.
     * @param {Comments2UpdateArgs} args - Arguments to update one Comments2.
     * @example
     * // Update one Comments2
     * const comments2 = await prisma.comments2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Comments2UpdateArgs>(args: SelectSubset<T, Comments2UpdateArgs<ExtArgs>>): Prisma__Comments2Client<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments2s.
     * @param {Comments2DeleteManyArgs} args - Arguments to filter Comments2s to delete.
     * @example
     * // Delete a few Comments2s
     * const { count } = await prisma.comments2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Comments2DeleteManyArgs>(args?: SelectSubset<T, Comments2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comments2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments2s
     * const comments2 = await prisma.comments2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Comments2UpdateManyArgs>(args: SelectSubset<T, Comments2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments2s and returns the data updated in the database.
     * @param {Comments2UpdateManyAndReturnArgs} args - Arguments to update many Comments2s.
     * @example
     * // Update many Comments2s
     * const comments2 = await prisma.comments2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments2s and only return the `id`
     * const comments2WithIdOnly = await prisma.comments2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Comments2UpdateManyAndReturnArgs>(args: SelectSubset<T, Comments2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments2.
     * @param {Comments2UpsertArgs} args - Arguments to update or create a Comments2.
     * @example
     * // Update or create a Comments2
     * const comments2 = await prisma.comments2.upsert({
     *   create: {
     *     // ... data to create a Comments2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments2 we want to update
     *   }
     * })
     */
    upsert<T extends Comments2UpsertArgs>(args: SelectSubset<T, Comments2UpsertArgs<ExtArgs>>): Prisma__Comments2Client<$Result.GetResult<Prisma.$Comments2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comments2CountArgs} args - Arguments to filter Comments2s to count.
     * @example
     * // Count the number of Comments2s
     * const count = await prisma.comments2.count({
     *   where: {
     *     // ... the filter for the Comments2s we want to count
     *   }
     * })
    **/
    count<T extends Comments2CountArgs>(
      args?: Subset<T, Comments2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Comments2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comments2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Comments2AggregateArgs>(args: Subset<T, Comments2AggregateArgs>): Prisma.PrismaPromise<GetComments2AggregateType<T>>

    /**
     * Group by Comments2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Comments2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Comments2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Comments2GroupByArgs['orderBy'] }
        : { orderBy?: Comments2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Comments2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComments2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments2 model
   */
  readonly fields: Comments2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Comments2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends Post2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, Post2DefaultArgs<ExtArgs>>): Prisma__Post2Client<$Result.GetResult<Prisma.$Post2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments2 model
   */
  interface Comments2FieldRefs {
    readonly id: FieldRef<"Comments2", 'Int'>
    readonly postId: FieldRef<"Comments2", 'Int'>
    readonly name: FieldRef<"Comments2", 'String'>
    readonly email: FieldRef<"Comments2", 'String'>
    readonly body: FieldRef<"Comments2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comments2 findUnique
   */
  export type Comments2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * Filter, which Comments2 to fetch.
     */
    where: Comments2WhereUniqueInput
  }

  /**
   * Comments2 findUniqueOrThrow
   */
  export type Comments2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * Filter, which Comments2 to fetch.
     */
    where: Comments2WhereUniqueInput
  }

  /**
   * Comments2 findFirst
   */
  export type Comments2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * Filter, which Comments2 to fetch.
     */
    where?: Comments2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments2s to fetch.
     */
    orderBy?: Comments2OrderByWithRelationInput | Comments2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments2s.
     */
    cursor?: Comments2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments2s.
     */
    distinct?: Comments2ScalarFieldEnum | Comments2ScalarFieldEnum[]
  }

  /**
   * Comments2 findFirstOrThrow
   */
  export type Comments2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * Filter, which Comments2 to fetch.
     */
    where?: Comments2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments2s to fetch.
     */
    orderBy?: Comments2OrderByWithRelationInput | Comments2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments2s.
     */
    cursor?: Comments2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments2s.
     */
    distinct?: Comments2ScalarFieldEnum | Comments2ScalarFieldEnum[]
  }

  /**
   * Comments2 findMany
   */
  export type Comments2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * Filter, which Comments2s to fetch.
     */
    where?: Comments2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments2s to fetch.
     */
    orderBy?: Comments2OrderByWithRelationInput | Comments2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments2s.
     */
    cursor?: Comments2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments2s.
     */
    skip?: number
    distinct?: Comments2ScalarFieldEnum | Comments2ScalarFieldEnum[]
  }

  /**
   * Comments2 create
   */
  export type Comments2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * The data needed to create a Comments2.
     */
    data: XOR<Comments2CreateInput, Comments2UncheckedCreateInput>
  }

  /**
   * Comments2 createMany
   */
  export type Comments2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments2s.
     */
    data: Comments2CreateManyInput | Comments2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments2 createManyAndReturn
   */
  export type Comments2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * The data used to create many Comments2s.
     */
    data: Comments2CreateManyInput | Comments2CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments2 update
   */
  export type Comments2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * The data needed to update a Comments2.
     */
    data: XOR<Comments2UpdateInput, Comments2UncheckedUpdateInput>
    /**
     * Choose, which Comments2 to update.
     */
    where: Comments2WhereUniqueInput
  }

  /**
   * Comments2 updateMany
   */
  export type Comments2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments2s.
     */
    data: XOR<Comments2UpdateManyMutationInput, Comments2UncheckedUpdateManyInput>
    /**
     * Filter which Comments2s to update
     */
    where?: Comments2WhereInput
    /**
     * Limit how many Comments2s to update.
     */
    limit?: number
  }

  /**
   * Comments2 updateManyAndReturn
   */
  export type Comments2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * The data used to update Comments2s.
     */
    data: XOR<Comments2UpdateManyMutationInput, Comments2UncheckedUpdateManyInput>
    /**
     * Filter which Comments2s to update
     */
    where?: Comments2WhereInput
    /**
     * Limit how many Comments2s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments2 upsert
   */
  export type Comments2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * The filter to search for the Comments2 to update in case it exists.
     */
    where: Comments2WhereUniqueInput
    /**
     * In case the Comments2 found by the `where` argument doesn't exist, create a new Comments2 with this data.
     */
    create: XOR<Comments2CreateInput, Comments2UncheckedCreateInput>
    /**
     * In case the Comments2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Comments2UpdateInput, Comments2UncheckedUpdateInput>
  }

  /**
   * Comments2 delete
   */
  export type Comments2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
    /**
     * Filter which Comments2 to delete.
     */
    where: Comments2WhereUniqueInput
  }

  /**
   * Comments2 deleteMany
   */
  export type Comments2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments2s to delete
     */
    where?: Comments2WhereInput
    /**
     * Limit how many Comments2s to delete.
     */
    limit?: number
  }

  /**
   * Comments2 without action
   */
  export type Comments2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments2
     */
    select?: Comments2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Comments2
     */
    omit?: Comments2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Comments2Include<ExtArgs> | null
  }


  /**
   * Model Company2
   */

  export type AggregateCompany2 = {
    _count: Company2CountAggregateOutputType | null
    _avg: Company2AvgAggregateOutputType | null
    _sum: Company2SumAggregateOutputType | null
    _min: Company2MinAggregateOutputType | null
    _max: Company2MaxAggregateOutputType | null
  }

  export type Company2AvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Company2SumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Company2MinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    catchPhrase: string | null
    bs: string | null
  }

  export type Company2MaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    catchPhrase: string | null
    bs: string | null
  }

  export type Company2CountAggregateOutputType = {
    id: number
    userId: number
    name: number
    catchPhrase: number
    bs: number
    _all: number
  }


  export type Company2AvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Company2SumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Company2MinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    catchPhrase?: true
    bs?: true
  }

  export type Company2MaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    catchPhrase?: true
    bs?: true
  }

  export type Company2CountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    catchPhrase?: true
    bs?: true
    _all?: true
  }

  export type Company2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company2 to aggregate.
     */
    where?: Company2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Company2s to fetch.
     */
    orderBy?: Company2OrderByWithRelationInput | Company2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Company2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Company2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Company2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Company2s
    **/
    _count?: true | Company2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Company2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Company2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Company2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Company2MaxAggregateInputType
  }

  export type GetCompany2AggregateType<T extends Company2AggregateArgs> = {
        [P in keyof T & keyof AggregateCompany2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany2[P]>
      : GetScalarType<T[P], AggregateCompany2[P]>
  }




  export type Company2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Company2WhereInput
    orderBy?: Company2OrderByWithAggregationInput | Company2OrderByWithAggregationInput[]
    by: Company2ScalarFieldEnum[] | Company2ScalarFieldEnum
    having?: Company2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Company2CountAggregateInputType | true
    _avg?: Company2AvgAggregateInputType
    _sum?: Company2SumAggregateInputType
    _min?: Company2MinAggregateInputType
    _max?: Company2MaxAggregateInputType
  }

  export type Company2GroupByOutputType = {
    id: number
    userId: number
    name: string
    catchPhrase: string
    bs: string
    _count: Company2CountAggregateOutputType | null
    _avg: Company2AvgAggregateOutputType | null
    _sum: Company2SumAggregateOutputType | null
    _min: Company2MinAggregateOutputType | null
    _max: Company2MaxAggregateOutputType | null
  }

  type GetCompany2GroupByPayload<T extends Company2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Company2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Company2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Company2GroupByOutputType[P]>
            : GetScalarType<T[P], Company2GroupByOutputType[P]>
        }
      >
    >


  export type Company2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    catchPhrase?: boolean
    bs?: boolean
    users2?: boolean | Users2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company2"]>

  export type Company2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    catchPhrase?: boolean
    bs?: boolean
    users2?: boolean | Users2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company2"]>

  export type Company2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    catchPhrase?: boolean
    bs?: boolean
    users2?: boolean | Users2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company2"]>

  export type Company2SelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    catchPhrase?: boolean
    bs?: boolean
  }

  export type Company2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "catchPhrase" | "bs", ExtArgs["result"]["company2"]>
  export type Company2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users2?: boolean | Users2DefaultArgs<ExtArgs>
  }
  export type Company2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users2?: boolean | Users2DefaultArgs<ExtArgs>
  }
  export type Company2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users2?: boolean | Users2DefaultArgs<ExtArgs>
  }

  export type $Company2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company2"
    objects: {
      users2: Prisma.$Users2Payload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      catchPhrase: string
      bs: string
    }, ExtArgs["result"]["company2"]>
    composites: {}
  }

  type Company2GetPayload<S extends boolean | null | undefined | Company2DefaultArgs> = $Result.GetResult<Prisma.$Company2Payload, S>

  type Company2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Company2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Company2CountAggregateInputType | true
    }

  export interface Company2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company2'], meta: { name: 'Company2' } }
    /**
     * Find zero or one Company2 that matches the filter.
     * @param {Company2FindUniqueArgs} args - Arguments to find a Company2
     * @example
     * // Get one Company2
     * const company2 = await prisma.company2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Company2FindUniqueArgs>(args: SelectSubset<T, Company2FindUniqueArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Company2FindUniqueOrThrowArgs} args - Arguments to find a Company2
     * @example
     * // Get one Company2
     * const company2 = await prisma.company2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Company2FindUniqueOrThrowArgs>(args: SelectSubset<T, Company2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company2FindFirstArgs} args - Arguments to find a Company2
     * @example
     * // Get one Company2
     * const company2 = await prisma.company2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Company2FindFirstArgs>(args?: SelectSubset<T, Company2FindFirstArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company2FindFirstOrThrowArgs} args - Arguments to find a Company2
     * @example
     * // Get one Company2
     * const company2 = await prisma.company2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Company2FindFirstOrThrowArgs>(args?: SelectSubset<T, Company2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Company2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Company2s
     * const company2s = await prisma.company2.findMany()
     * 
     * // Get first 10 Company2s
     * const company2s = await prisma.company2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const company2WithIdOnly = await prisma.company2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Company2FindManyArgs>(args?: SelectSubset<T, Company2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company2.
     * @param {Company2CreateArgs} args - Arguments to create a Company2.
     * @example
     * // Create one Company2
     * const Company2 = await prisma.company2.create({
     *   data: {
     *     // ... data to create a Company2
     *   }
     * })
     * 
     */
    create<T extends Company2CreateArgs>(args: SelectSubset<T, Company2CreateArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Company2s.
     * @param {Company2CreateManyArgs} args - Arguments to create many Company2s.
     * @example
     * // Create many Company2s
     * const company2 = await prisma.company2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Company2CreateManyArgs>(args?: SelectSubset<T, Company2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Company2s and returns the data saved in the database.
     * @param {Company2CreateManyAndReturnArgs} args - Arguments to create many Company2s.
     * @example
     * // Create many Company2s
     * const company2 = await prisma.company2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Company2s and only return the `id`
     * const company2WithIdOnly = await prisma.company2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Company2CreateManyAndReturnArgs>(args?: SelectSubset<T, Company2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company2.
     * @param {Company2DeleteArgs} args - Arguments to delete one Company2.
     * @example
     * // Delete one Company2
     * const Company2 = await prisma.company2.delete({
     *   where: {
     *     // ... filter to delete one Company2
     *   }
     * })
     * 
     */
    delete<T extends Company2DeleteArgs>(args: SelectSubset<T, Company2DeleteArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company2.
     * @param {Company2UpdateArgs} args - Arguments to update one Company2.
     * @example
     * // Update one Company2
     * const company2 = await prisma.company2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Company2UpdateArgs>(args: SelectSubset<T, Company2UpdateArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Company2s.
     * @param {Company2DeleteManyArgs} args - Arguments to filter Company2s to delete.
     * @example
     * // Delete a few Company2s
     * const { count } = await prisma.company2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Company2DeleteManyArgs>(args?: SelectSubset<T, Company2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Company2s
     * const company2 = await prisma.company2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Company2UpdateManyArgs>(args: SelectSubset<T, Company2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company2s and returns the data updated in the database.
     * @param {Company2UpdateManyAndReturnArgs} args - Arguments to update many Company2s.
     * @example
     * // Update many Company2s
     * const company2 = await prisma.company2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Company2s and only return the `id`
     * const company2WithIdOnly = await prisma.company2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Company2UpdateManyAndReturnArgs>(args: SelectSubset<T, Company2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company2.
     * @param {Company2UpsertArgs} args - Arguments to update or create a Company2.
     * @example
     * // Update or create a Company2
     * const company2 = await prisma.company2.upsert({
     *   create: {
     *     // ... data to create a Company2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company2 we want to update
     *   }
     * })
     */
    upsert<T extends Company2UpsertArgs>(args: SelectSubset<T, Company2UpsertArgs<ExtArgs>>): Prisma__Company2Client<$Result.GetResult<Prisma.$Company2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Company2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company2CountArgs} args - Arguments to filter Company2s to count.
     * @example
     * // Count the number of Company2s
     * const count = await prisma.company2.count({
     *   where: {
     *     // ... the filter for the Company2s we want to count
     *   }
     * })
    **/
    count<T extends Company2CountArgs>(
      args?: Subset<T, Company2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Company2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Company2AggregateArgs>(args: Subset<T, Company2AggregateArgs>): Prisma.PrismaPromise<GetCompany2AggregateType<T>>

    /**
     * Group by Company2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Company2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Company2GroupByArgs['orderBy'] }
        : { orderBy?: Company2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Company2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompany2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company2 model
   */
  readonly fields: Company2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Company2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users2<T extends Users2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, Users2DefaultArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company2 model
   */
  interface Company2FieldRefs {
    readonly id: FieldRef<"Company2", 'Int'>
    readonly userId: FieldRef<"Company2", 'Int'>
    readonly name: FieldRef<"Company2", 'String'>
    readonly catchPhrase: FieldRef<"Company2", 'String'>
    readonly bs: FieldRef<"Company2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company2 findUnique
   */
  export type Company2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * Filter, which Company2 to fetch.
     */
    where: Company2WhereUniqueInput
  }

  /**
   * Company2 findUniqueOrThrow
   */
  export type Company2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * Filter, which Company2 to fetch.
     */
    where: Company2WhereUniqueInput
  }

  /**
   * Company2 findFirst
   */
  export type Company2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * Filter, which Company2 to fetch.
     */
    where?: Company2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Company2s to fetch.
     */
    orderBy?: Company2OrderByWithRelationInput | Company2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Company2s.
     */
    cursor?: Company2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Company2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Company2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Company2s.
     */
    distinct?: Company2ScalarFieldEnum | Company2ScalarFieldEnum[]
  }

  /**
   * Company2 findFirstOrThrow
   */
  export type Company2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * Filter, which Company2 to fetch.
     */
    where?: Company2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Company2s to fetch.
     */
    orderBy?: Company2OrderByWithRelationInput | Company2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Company2s.
     */
    cursor?: Company2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Company2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Company2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Company2s.
     */
    distinct?: Company2ScalarFieldEnum | Company2ScalarFieldEnum[]
  }

  /**
   * Company2 findMany
   */
  export type Company2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * Filter, which Company2s to fetch.
     */
    where?: Company2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Company2s to fetch.
     */
    orderBy?: Company2OrderByWithRelationInput | Company2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Company2s.
     */
    cursor?: Company2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Company2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Company2s.
     */
    skip?: number
    distinct?: Company2ScalarFieldEnum | Company2ScalarFieldEnum[]
  }

  /**
   * Company2 create
   */
  export type Company2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * The data needed to create a Company2.
     */
    data: XOR<Company2CreateInput, Company2UncheckedCreateInput>
  }

  /**
   * Company2 createMany
   */
  export type Company2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Company2s.
     */
    data: Company2CreateManyInput | Company2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company2 createManyAndReturn
   */
  export type Company2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * The data used to create many Company2s.
     */
    data: Company2CreateManyInput | Company2CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company2 update
   */
  export type Company2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * The data needed to update a Company2.
     */
    data: XOR<Company2UpdateInput, Company2UncheckedUpdateInput>
    /**
     * Choose, which Company2 to update.
     */
    where: Company2WhereUniqueInput
  }

  /**
   * Company2 updateMany
   */
  export type Company2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Company2s.
     */
    data: XOR<Company2UpdateManyMutationInput, Company2UncheckedUpdateManyInput>
    /**
     * Filter which Company2s to update
     */
    where?: Company2WhereInput
    /**
     * Limit how many Company2s to update.
     */
    limit?: number
  }

  /**
   * Company2 updateManyAndReturn
   */
  export type Company2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * The data used to update Company2s.
     */
    data: XOR<Company2UpdateManyMutationInput, Company2UncheckedUpdateManyInput>
    /**
     * Filter which Company2s to update
     */
    where?: Company2WhereInput
    /**
     * Limit how many Company2s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company2 upsert
   */
  export type Company2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * The filter to search for the Company2 to update in case it exists.
     */
    where: Company2WhereUniqueInput
    /**
     * In case the Company2 found by the `where` argument doesn't exist, create a new Company2 with this data.
     */
    create: XOR<Company2CreateInput, Company2UncheckedCreateInput>
    /**
     * In case the Company2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Company2UpdateInput, Company2UncheckedUpdateInput>
  }

  /**
   * Company2 delete
   */
  export type Company2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
    /**
     * Filter which Company2 to delete.
     */
    where: Company2WhereUniqueInput
  }

  /**
   * Company2 deleteMany
   */
  export type Company2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company2s to delete
     */
    where?: Company2WhereInput
    /**
     * Limit how many Company2s to delete.
     */
    limit?: number
  }

  /**
   * Company2 without action
   */
  export type Company2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company2
     */
    select?: Company2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Company2
     */
    omit?: Company2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company2Include<ExtArgs> | null
  }


  /**
   * Model Geo2
   */

  export type AggregateGeo2 = {
    _count: Geo2CountAggregateOutputType | null
    _avg: Geo2AvgAggregateOutputType | null
    _sum: Geo2SumAggregateOutputType | null
    _min: Geo2MinAggregateOutputType | null
    _max: Geo2MaxAggregateOutputType | null
  }

  export type Geo2AvgAggregateOutputType = {
    id: number | null
    address2Id: number | null
  }

  export type Geo2SumAggregateOutputType = {
    id: number | null
    address2Id: number | null
  }

  export type Geo2MinAggregateOutputType = {
    id: number | null
    address2Id: number | null
    lat: string | null
    lng: string | null
  }

  export type Geo2MaxAggregateOutputType = {
    id: number | null
    address2Id: number | null
    lat: string | null
    lng: string | null
  }

  export type Geo2CountAggregateOutputType = {
    id: number
    address2Id: number
    lat: number
    lng: number
    _all: number
  }


  export type Geo2AvgAggregateInputType = {
    id?: true
    address2Id?: true
  }

  export type Geo2SumAggregateInputType = {
    id?: true
    address2Id?: true
  }

  export type Geo2MinAggregateInputType = {
    id?: true
    address2Id?: true
    lat?: true
    lng?: true
  }

  export type Geo2MaxAggregateInputType = {
    id?: true
    address2Id?: true
    lat?: true
    lng?: true
  }

  export type Geo2CountAggregateInputType = {
    id?: true
    address2Id?: true
    lat?: true
    lng?: true
    _all?: true
  }

  export type Geo2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Geo2 to aggregate.
     */
    where?: Geo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geo2s to fetch.
     */
    orderBy?: Geo2OrderByWithRelationInput | Geo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Geo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Geo2s
    **/
    _count?: true | Geo2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Geo2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Geo2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Geo2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Geo2MaxAggregateInputType
  }

  export type GetGeo2AggregateType<T extends Geo2AggregateArgs> = {
        [P in keyof T & keyof AggregateGeo2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeo2[P]>
      : GetScalarType<T[P], AggregateGeo2[P]>
  }




  export type Geo2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Geo2WhereInput
    orderBy?: Geo2OrderByWithAggregationInput | Geo2OrderByWithAggregationInput[]
    by: Geo2ScalarFieldEnum[] | Geo2ScalarFieldEnum
    having?: Geo2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Geo2CountAggregateInputType | true
    _avg?: Geo2AvgAggregateInputType
    _sum?: Geo2SumAggregateInputType
    _min?: Geo2MinAggregateInputType
    _max?: Geo2MaxAggregateInputType
  }

  export type Geo2GroupByOutputType = {
    id: number
    address2Id: number
    lat: string
    lng: string
    _count: Geo2CountAggregateOutputType | null
    _avg: Geo2AvgAggregateOutputType | null
    _sum: Geo2SumAggregateOutputType | null
    _min: Geo2MinAggregateOutputType | null
    _max: Geo2MaxAggregateOutputType | null
  }

  type GetGeo2GroupByPayload<T extends Geo2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Geo2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Geo2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Geo2GroupByOutputType[P]>
            : GetScalarType<T[P], Geo2GroupByOutputType[P]>
        }
      >
    >


  export type Geo2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address2Id?: boolean
    lat?: boolean
    lng?: boolean
    address2?: boolean | Address2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["geo2"]>

  export type Geo2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address2Id?: boolean
    lat?: boolean
    lng?: boolean
    address2?: boolean | Address2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["geo2"]>

  export type Geo2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address2Id?: boolean
    lat?: boolean
    lng?: boolean
    address2?: boolean | Address2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["geo2"]>

  export type Geo2SelectScalar = {
    id?: boolean
    address2Id?: boolean
    lat?: boolean
    lng?: boolean
  }

  export type Geo2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address2Id" | "lat" | "lng", ExtArgs["result"]["geo2"]>
  export type Geo2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address2?: boolean | Address2DefaultArgs<ExtArgs>
  }
  export type Geo2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address2?: boolean | Address2DefaultArgs<ExtArgs>
  }
  export type Geo2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address2?: boolean | Address2DefaultArgs<ExtArgs>
  }

  export type $Geo2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Geo2"
    objects: {
      address2: Prisma.$Address2Payload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address2Id: number
      lat: string
      lng: string
    }, ExtArgs["result"]["geo2"]>
    composites: {}
  }

  type Geo2GetPayload<S extends boolean | null | undefined | Geo2DefaultArgs> = $Result.GetResult<Prisma.$Geo2Payload, S>

  type Geo2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Geo2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Geo2CountAggregateInputType | true
    }

  export interface Geo2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Geo2'], meta: { name: 'Geo2' } }
    /**
     * Find zero or one Geo2 that matches the filter.
     * @param {Geo2FindUniqueArgs} args - Arguments to find a Geo2
     * @example
     * // Get one Geo2
     * const geo2 = await prisma.geo2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Geo2FindUniqueArgs>(args: SelectSubset<T, Geo2FindUniqueArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Geo2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Geo2FindUniqueOrThrowArgs} args - Arguments to find a Geo2
     * @example
     * // Get one Geo2
     * const geo2 = await prisma.geo2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Geo2FindUniqueOrThrowArgs>(args: SelectSubset<T, Geo2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Geo2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Geo2FindFirstArgs} args - Arguments to find a Geo2
     * @example
     * // Get one Geo2
     * const geo2 = await prisma.geo2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Geo2FindFirstArgs>(args?: SelectSubset<T, Geo2FindFirstArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Geo2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Geo2FindFirstOrThrowArgs} args - Arguments to find a Geo2
     * @example
     * // Get one Geo2
     * const geo2 = await prisma.geo2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Geo2FindFirstOrThrowArgs>(args?: SelectSubset<T, Geo2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Geo2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Geo2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Geo2s
     * const geo2s = await prisma.geo2.findMany()
     * 
     * // Get first 10 Geo2s
     * const geo2s = await prisma.geo2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const geo2WithIdOnly = await prisma.geo2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Geo2FindManyArgs>(args?: SelectSubset<T, Geo2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Geo2.
     * @param {Geo2CreateArgs} args - Arguments to create a Geo2.
     * @example
     * // Create one Geo2
     * const Geo2 = await prisma.geo2.create({
     *   data: {
     *     // ... data to create a Geo2
     *   }
     * })
     * 
     */
    create<T extends Geo2CreateArgs>(args: SelectSubset<T, Geo2CreateArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Geo2s.
     * @param {Geo2CreateManyArgs} args - Arguments to create many Geo2s.
     * @example
     * // Create many Geo2s
     * const geo2 = await prisma.geo2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Geo2CreateManyArgs>(args?: SelectSubset<T, Geo2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Geo2s and returns the data saved in the database.
     * @param {Geo2CreateManyAndReturnArgs} args - Arguments to create many Geo2s.
     * @example
     * // Create many Geo2s
     * const geo2 = await prisma.geo2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Geo2s and only return the `id`
     * const geo2WithIdOnly = await prisma.geo2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Geo2CreateManyAndReturnArgs>(args?: SelectSubset<T, Geo2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Geo2.
     * @param {Geo2DeleteArgs} args - Arguments to delete one Geo2.
     * @example
     * // Delete one Geo2
     * const Geo2 = await prisma.geo2.delete({
     *   where: {
     *     // ... filter to delete one Geo2
     *   }
     * })
     * 
     */
    delete<T extends Geo2DeleteArgs>(args: SelectSubset<T, Geo2DeleteArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Geo2.
     * @param {Geo2UpdateArgs} args - Arguments to update one Geo2.
     * @example
     * // Update one Geo2
     * const geo2 = await prisma.geo2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Geo2UpdateArgs>(args: SelectSubset<T, Geo2UpdateArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Geo2s.
     * @param {Geo2DeleteManyArgs} args - Arguments to filter Geo2s to delete.
     * @example
     * // Delete a few Geo2s
     * const { count } = await prisma.geo2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Geo2DeleteManyArgs>(args?: SelectSubset<T, Geo2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Geo2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Geo2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Geo2s
     * const geo2 = await prisma.geo2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Geo2UpdateManyArgs>(args: SelectSubset<T, Geo2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Geo2s and returns the data updated in the database.
     * @param {Geo2UpdateManyAndReturnArgs} args - Arguments to update many Geo2s.
     * @example
     * // Update many Geo2s
     * const geo2 = await prisma.geo2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Geo2s and only return the `id`
     * const geo2WithIdOnly = await prisma.geo2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Geo2UpdateManyAndReturnArgs>(args: SelectSubset<T, Geo2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Geo2.
     * @param {Geo2UpsertArgs} args - Arguments to update or create a Geo2.
     * @example
     * // Update or create a Geo2
     * const geo2 = await prisma.geo2.upsert({
     *   create: {
     *     // ... data to create a Geo2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Geo2 we want to update
     *   }
     * })
     */
    upsert<T extends Geo2UpsertArgs>(args: SelectSubset<T, Geo2UpsertArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Geo2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Geo2CountArgs} args - Arguments to filter Geo2s to count.
     * @example
     * // Count the number of Geo2s
     * const count = await prisma.geo2.count({
     *   where: {
     *     // ... the filter for the Geo2s we want to count
     *   }
     * })
    **/
    count<T extends Geo2CountArgs>(
      args?: Subset<T, Geo2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Geo2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Geo2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Geo2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Geo2AggregateArgs>(args: Subset<T, Geo2AggregateArgs>): Prisma.PrismaPromise<GetGeo2AggregateType<T>>

    /**
     * Group by Geo2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Geo2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Geo2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Geo2GroupByArgs['orderBy'] }
        : { orderBy?: Geo2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Geo2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeo2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Geo2 model
   */
  readonly fields: Geo2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Geo2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Geo2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address2<T extends Address2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, Address2DefaultArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Geo2 model
   */
  interface Geo2FieldRefs {
    readonly id: FieldRef<"Geo2", 'Int'>
    readonly address2Id: FieldRef<"Geo2", 'Int'>
    readonly lat: FieldRef<"Geo2", 'String'>
    readonly lng: FieldRef<"Geo2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Geo2 findUnique
   */
  export type Geo2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * Filter, which Geo2 to fetch.
     */
    where: Geo2WhereUniqueInput
  }

  /**
   * Geo2 findUniqueOrThrow
   */
  export type Geo2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * Filter, which Geo2 to fetch.
     */
    where: Geo2WhereUniqueInput
  }

  /**
   * Geo2 findFirst
   */
  export type Geo2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * Filter, which Geo2 to fetch.
     */
    where?: Geo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geo2s to fetch.
     */
    orderBy?: Geo2OrderByWithRelationInput | Geo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Geo2s.
     */
    cursor?: Geo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Geo2s.
     */
    distinct?: Geo2ScalarFieldEnum | Geo2ScalarFieldEnum[]
  }

  /**
   * Geo2 findFirstOrThrow
   */
  export type Geo2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * Filter, which Geo2 to fetch.
     */
    where?: Geo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geo2s to fetch.
     */
    orderBy?: Geo2OrderByWithRelationInput | Geo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Geo2s.
     */
    cursor?: Geo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geo2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Geo2s.
     */
    distinct?: Geo2ScalarFieldEnum | Geo2ScalarFieldEnum[]
  }

  /**
   * Geo2 findMany
   */
  export type Geo2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * Filter, which Geo2s to fetch.
     */
    where?: Geo2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Geo2s to fetch.
     */
    orderBy?: Geo2OrderByWithRelationInput | Geo2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Geo2s.
     */
    cursor?: Geo2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Geo2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Geo2s.
     */
    skip?: number
    distinct?: Geo2ScalarFieldEnum | Geo2ScalarFieldEnum[]
  }

  /**
   * Geo2 create
   */
  export type Geo2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * The data needed to create a Geo2.
     */
    data: XOR<Geo2CreateInput, Geo2UncheckedCreateInput>
  }

  /**
   * Geo2 createMany
   */
  export type Geo2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Geo2s.
     */
    data: Geo2CreateManyInput | Geo2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Geo2 createManyAndReturn
   */
  export type Geo2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * The data used to create many Geo2s.
     */
    data: Geo2CreateManyInput | Geo2CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Geo2 update
   */
  export type Geo2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * The data needed to update a Geo2.
     */
    data: XOR<Geo2UpdateInput, Geo2UncheckedUpdateInput>
    /**
     * Choose, which Geo2 to update.
     */
    where: Geo2WhereUniqueInput
  }

  /**
   * Geo2 updateMany
   */
  export type Geo2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Geo2s.
     */
    data: XOR<Geo2UpdateManyMutationInput, Geo2UncheckedUpdateManyInput>
    /**
     * Filter which Geo2s to update
     */
    where?: Geo2WhereInput
    /**
     * Limit how many Geo2s to update.
     */
    limit?: number
  }

  /**
   * Geo2 updateManyAndReturn
   */
  export type Geo2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * The data used to update Geo2s.
     */
    data: XOR<Geo2UpdateManyMutationInput, Geo2UncheckedUpdateManyInput>
    /**
     * Filter which Geo2s to update
     */
    where?: Geo2WhereInput
    /**
     * Limit how many Geo2s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Geo2 upsert
   */
  export type Geo2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * The filter to search for the Geo2 to update in case it exists.
     */
    where: Geo2WhereUniqueInput
    /**
     * In case the Geo2 found by the `where` argument doesn't exist, create a new Geo2 with this data.
     */
    create: XOR<Geo2CreateInput, Geo2UncheckedCreateInput>
    /**
     * In case the Geo2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Geo2UpdateInput, Geo2UncheckedUpdateInput>
  }

  /**
   * Geo2 delete
   */
  export type Geo2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    /**
     * Filter which Geo2 to delete.
     */
    where: Geo2WhereUniqueInput
  }

  /**
   * Geo2 deleteMany
   */
  export type Geo2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Geo2s to delete
     */
    where?: Geo2WhereInput
    /**
     * Limit how many Geo2s to delete.
     */
    limit?: number
  }

  /**
   * Geo2 without action
   */
  export type Geo2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
  }


  /**
   * Model Address2
   */

  export type AggregateAddress2 = {
    _count: Address2CountAggregateOutputType | null
    _avg: Address2AvgAggregateOutputType | null
    _sum: Address2SumAggregateOutputType | null
    _min: Address2MinAggregateOutputType | null
    _max: Address2MaxAggregateOutputType | null
  }

  export type Address2AvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Address2SumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Address2MinAggregateOutputType = {
    id: number | null
    street: string | null
    suite: string | null
    city: string | null
    zipcode: string | null
    userId: number | null
  }

  export type Address2MaxAggregateOutputType = {
    id: number | null
    street: string | null
    suite: string | null
    city: string | null
    zipcode: string | null
    userId: number | null
  }

  export type Address2CountAggregateOutputType = {
    id: number
    street: number
    suite: number
    city: number
    zipcode: number
    userId: number
    _all: number
  }


  export type Address2AvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Address2SumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Address2MinAggregateInputType = {
    id?: true
    street?: true
    suite?: true
    city?: true
    zipcode?: true
    userId?: true
  }

  export type Address2MaxAggregateInputType = {
    id?: true
    street?: true
    suite?: true
    city?: true
    zipcode?: true
    userId?: true
  }

  export type Address2CountAggregateInputType = {
    id?: true
    street?: true
    suite?: true
    city?: true
    zipcode?: true
    userId?: true
    _all?: true
  }

  export type Address2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address2 to aggregate.
     */
    where?: Address2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Address2s to fetch.
     */
    orderBy?: Address2OrderByWithRelationInput | Address2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Address2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Address2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Address2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Address2s
    **/
    _count?: true | Address2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Address2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Address2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Address2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Address2MaxAggregateInputType
  }

  export type GetAddress2AggregateType<T extends Address2AggregateArgs> = {
        [P in keyof T & keyof AggregateAddress2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress2[P]>
      : GetScalarType<T[P], AggregateAddress2[P]>
  }




  export type Address2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Address2WhereInput
    orderBy?: Address2OrderByWithAggregationInput | Address2OrderByWithAggregationInput[]
    by: Address2ScalarFieldEnum[] | Address2ScalarFieldEnum
    having?: Address2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Address2CountAggregateInputType | true
    _avg?: Address2AvgAggregateInputType
    _sum?: Address2SumAggregateInputType
    _min?: Address2MinAggregateInputType
    _max?: Address2MaxAggregateInputType
  }

  export type Address2GroupByOutputType = {
    id: number
    street: string
    suite: string
    city: string
    zipcode: string
    userId: number
    _count: Address2CountAggregateOutputType | null
    _avg: Address2AvgAggregateOutputType | null
    _sum: Address2SumAggregateOutputType | null
    _min: Address2MinAggregateOutputType | null
    _max: Address2MaxAggregateOutputType | null
  }

  type GetAddress2GroupByPayload<T extends Address2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Address2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Address2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Address2GroupByOutputType[P]>
            : GetScalarType<T[P], Address2GroupByOutputType[P]>
        }
      >
    >


  export type Address2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    suite?: boolean
    city?: boolean
    zipcode?: boolean
    userId?: boolean
    geo?: boolean | Address2$geoArgs<ExtArgs>
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address2"]>

  export type Address2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    suite?: boolean
    city?: boolean
    zipcode?: boolean
    userId?: boolean
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address2"]>

  export type Address2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    suite?: boolean
    city?: boolean
    zipcode?: boolean
    userId?: boolean
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address2"]>

  export type Address2SelectScalar = {
    id?: boolean
    street?: boolean
    suite?: boolean
    city?: boolean
    zipcode?: boolean
    userId?: boolean
  }

  export type Address2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "suite" | "city" | "zipcode" | "userId", ExtArgs["result"]["address2"]>
  export type Address2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    geo?: boolean | Address2$geoArgs<ExtArgs>
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }
  export type Address2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }
  export type Address2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Users2DefaultArgs<ExtArgs>
  }

  export type $Address2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address2"
    objects: {
      geo: Prisma.$Geo2Payload<ExtArgs> | null
      users: Prisma.$Users2Payload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      suite: string
      city: string
      zipcode: string
      userId: number
    }, ExtArgs["result"]["address2"]>
    composites: {}
  }

  type Address2GetPayload<S extends boolean | null | undefined | Address2DefaultArgs> = $Result.GetResult<Prisma.$Address2Payload, S>

  type Address2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Address2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Address2CountAggregateInputType | true
    }

  export interface Address2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address2'], meta: { name: 'Address2' } }
    /**
     * Find zero or one Address2 that matches the filter.
     * @param {Address2FindUniqueArgs} args - Arguments to find a Address2
     * @example
     * // Get one Address2
     * const address2 = await prisma.address2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Address2FindUniqueArgs>(args: SelectSubset<T, Address2FindUniqueArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Address2FindUniqueOrThrowArgs} args - Arguments to find a Address2
     * @example
     * // Get one Address2
     * const address2 = await prisma.address2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Address2FindUniqueOrThrowArgs>(args: SelectSubset<T, Address2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Address2FindFirstArgs} args - Arguments to find a Address2
     * @example
     * // Get one Address2
     * const address2 = await prisma.address2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Address2FindFirstArgs>(args?: SelectSubset<T, Address2FindFirstArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Address2FindFirstOrThrowArgs} args - Arguments to find a Address2
     * @example
     * // Get one Address2
     * const address2 = await prisma.address2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Address2FindFirstOrThrowArgs>(args?: SelectSubset<T, Address2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Address2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Address2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Address2s
     * const address2s = await prisma.address2.findMany()
     * 
     * // Get first 10 Address2s
     * const address2s = await prisma.address2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const address2WithIdOnly = await prisma.address2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Address2FindManyArgs>(args?: SelectSubset<T, Address2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address2.
     * @param {Address2CreateArgs} args - Arguments to create a Address2.
     * @example
     * // Create one Address2
     * const Address2 = await prisma.address2.create({
     *   data: {
     *     // ... data to create a Address2
     *   }
     * })
     * 
     */
    create<T extends Address2CreateArgs>(args: SelectSubset<T, Address2CreateArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Address2s.
     * @param {Address2CreateManyArgs} args - Arguments to create many Address2s.
     * @example
     * // Create many Address2s
     * const address2 = await prisma.address2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Address2CreateManyArgs>(args?: SelectSubset<T, Address2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Address2s and returns the data saved in the database.
     * @param {Address2CreateManyAndReturnArgs} args - Arguments to create many Address2s.
     * @example
     * // Create many Address2s
     * const address2 = await prisma.address2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Address2s and only return the `id`
     * const address2WithIdOnly = await prisma.address2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Address2CreateManyAndReturnArgs>(args?: SelectSubset<T, Address2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address2.
     * @param {Address2DeleteArgs} args - Arguments to delete one Address2.
     * @example
     * // Delete one Address2
     * const Address2 = await prisma.address2.delete({
     *   where: {
     *     // ... filter to delete one Address2
     *   }
     * })
     * 
     */
    delete<T extends Address2DeleteArgs>(args: SelectSubset<T, Address2DeleteArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address2.
     * @param {Address2UpdateArgs} args - Arguments to update one Address2.
     * @example
     * // Update one Address2
     * const address2 = await prisma.address2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Address2UpdateArgs>(args: SelectSubset<T, Address2UpdateArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Address2s.
     * @param {Address2DeleteManyArgs} args - Arguments to filter Address2s to delete.
     * @example
     * // Delete a few Address2s
     * const { count } = await prisma.address2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Address2DeleteManyArgs>(args?: SelectSubset<T, Address2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Address2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Address2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Address2s
     * const address2 = await prisma.address2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Address2UpdateManyArgs>(args: SelectSubset<T, Address2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Address2s and returns the data updated in the database.
     * @param {Address2UpdateManyAndReturnArgs} args - Arguments to update many Address2s.
     * @example
     * // Update many Address2s
     * const address2 = await prisma.address2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Address2s and only return the `id`
     * const address2WithIdOnly = await prisma.address2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Address2UpdateManyAndReturnArgs>(args: SelectSubset<T, Address2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address2.
     * @param {Address2UpsertArgs} args - Arguments to update or create a Address2.
     * @example
     * // Update or create a Address2
     * const address2 = await prisma.address2.upsert({
     *   create: {
     *     // ... data to create a Address2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address2 we want to update
     *   }
     * })
     */
    upsert<T extends Address2UpsertArgs>(args: SelectSubset<T, Address2UpsertArgs<ExtArgs>>): Prisma__Address2Client<$Result.GetResult<Prisma.$Address2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Address2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Address2CountArgs} args - Arguments to filter Address2s to count.
     * @example
     * // Count the number of Address2s
     * const count = await prisma.address2.count({
     *   where: {
     *     // ... the filter for the Address2s we want to count
     *   }
     * })
    **/
    count<T extends Address2CountArgs>(
      args?: Subset<T, Address2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Address2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Address2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Address2AggregateArgs>(args: Subset<T, Address2AggregateArgs>): Prisma.PrismaPromise<GetAddress2AggregateType<T>>

    /**
     * Group by Address2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Address2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Address2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Address2GroupByArgs['orderBy'] }
        : { orderBy?: Address2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Address2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddress2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address2 model
   */
  readonly fields: Address2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Address2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    geo<T extends Address2$geoArgs<ExtArgs> = {}>(args?: Subset<T, Address2$geoArgs<ExtArgs>>): Prisma__Geo2Client<$Result.GetResult<Prisma.$Geo2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Users2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, Users2DefaultArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address2 model
   */
  interface Address2FieldRefs {
    readonly id: FieldRef<"Address2", 'Int'>
    readonly street: FieldRef<"Address2", 'String'>
    readonly suite: FieldRef<"Address2", 'String'>
    readonly city: FieldRef<"Address2", 'String'>
    readonly zipcode: FieldRef<"Address2", 'String'>
    readonly userId: FieldRef<"Address2", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address2 findUnique
   */
  export type Address2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * Filter, which Address2 to fetch.
     */
    where: Address2WhereUniqueInput
  }

  /**
   * Address2 findUniqueOrThrow
   */
  export type Address2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * Filter, which Address2 to fetch.
     */
    where: Address2WhereUniqueInput
  }

  /**
   * Address2 findFirst
   */
  export type Address2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * Filter, which Address2 to fetch.
     */
    where?: Address2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Address2s to fetch.
     */
    orderBy?: Address2OrderByWithRelationInput | Address2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Address2s.
     */
    cursor?: Address2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Address2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Address2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Address2s.
     */
    distinct?: Address2ScalarFieldEnum | Address2ScalarFieldEnum[]
  }

  /**
   * Address2 findFirstOrThrow
   */
  export type Address2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * Filter, which Address2 to fetch.
     */
    where?: Address2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Address2s to fetch.
     */
    orderBy?: Address2OrderByWithRelationInput | Address2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Address2s.
     */
    cursor?: Address2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Address2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Address2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Address2s.
     */
    distinct?: Address2ScalarFieldEnum | Address2ScalarFieldEnum[]
  }

  /**
   * Address2 findMany
   */
  export type Address2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * Filter, which Address2s to fetch.
     */
    where?: Address2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Address2s to fetch.
     */
    orderBy?: Address2OrderByWithRelationInput | Address2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Address2s.
     */
    cursor?: Address2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Address2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Address2s.
     */
    skip?: number
    distinct?: Address2ScalarFieldEnum | Address2ScalarFieldEnum[]
  }

  /**
   * Address2 create
   */
  export type Address2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * The data needed to create a Address2.
     */
    data: XOR<Address2CreateInput, Address2UncheckedCreateInput>
  }

  /**
   * Address2 createMany
   */
  export type Address2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Address2s.
     */
    data: Address2CreateManyInput | Address2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address2 createManyAndReturn
   */
  export type Address2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * The data used to create many Address2s.
     */
    data: Address2CreateManyInput | Address2CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address2 update
   */
  export type Address2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * The data needed to update a Address2.
     */
    data: XOR<Address2UpdateInput, Address2UncheckedUpdateInput>
    /**
     * Choose, which Address2 to update.
     */
    where: Address2WhereUniqueInput
  }

  /**
   * Address2 updateMany
   */
  export type Address2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Address2s.
     */
    data: XOR<Address2UpdateManyMutationInput, Address2UncheckedUpdateManyInput>
    /**
     * Filter which Address2s to update
     */
    where?: Address2WhereInput
    /**
     * Limit how many Address2s to update.
     */
    limit?: number
  }

  /**
   * Address2 updateManyAndReturn
   */
  export type Address2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * The data used to update Address2s.
     */
    data: XOR<Address2UpdateManyMutationInput, Address2UncheckedUpdateManyInput>
    /**
     * Filter which Address2s to update
     */
    where?: Address2WhereInput
    /**
     * Limit how many Address2s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address2 upsert
   */
  export type Address2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * The filter to search for the Address2 to update in case it exists.
     */
    where: Address2WhereUniqueInput
    /**
     * In case the Address2 found by the `where` argument doesn't exist, create a new Address2 with this data.
     */
    create: XOR<Address2CreateInput, Address2UncheckedCreateInput>
    /**
     * In case the Address2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Address2UpdateInput, Address2UncheckedUpdateInput>
  }

  /**
   * Address2 delete
   */
  export type Address2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
    /**
     * Filter which Address2 to delete.
     */
    where: Address2WhereUniqueInput
  }

  /**
   * Address2 deleteMany
   */
  export type Address2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address2s to delete
     */
    where?: Address2WhereInput
    /**
     * Limit how many Address2s to delete.
     */
    limit?: number
  }

  /**
   * Address2.geo
   */
  export type Address2$geoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Geo2
     */
    select?: Geo2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Geo2
     */
    omit?: Geo2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Geo2Include<ExtArgs> | null
    where?: Geo2WhereInput
  }

  /**
   * Address2 without action
   */
  export type Address2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address2
     */
    select?: Address2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Address2
     */
    omit?: Address2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Address2Include<ExtArgs> | null
  }


  /**
   * Model Group2
   */

  export type AggregateGroup2 = {
    _count: Group2CountAggregateOutputType | null
    _avg: Group2AvgAggregateOutputType | null
    _sum: Group2SumAggregateOutputType | null
    _min: Group2MinAggregateOutputType | null
    _max: Group2MaxAggregateOutputType | null
  }

  export type Group2AvgAggregateOutputType = {
    id: number | null
  }

  export type Group2SumAggregateOutputType = {
    id: number | null
  }

  export type Group2MinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Group2MaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Group2CountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Group2AvgAggregateInputType = {
    id?: true
  }

  export type Group2SumAggregateInputType = {
    id?: true
  }

  export type Group2MinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Group2MaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Group2CountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Group2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group2 to aggregate.
     */
    where?: Group2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Group2s to fetch.
     */
    orderBy?: Group2OrderByWithRelationInput | Group2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Group2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Group2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Group2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Group2s
    **/
    _count?: true | Group2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Group2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Group2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Group2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Group2MaxAggregateInputType
  }

  export type GetGroup2AggregateType<T extends Group2AggregateArgs> = {
        [P in keyof T & keyof AggregateGroup2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup2[P]>
      : GetScalarType<T[P], AggregateGroup2[P]>
  }




  export type Group2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Group2WhereInput
    orderBy?: Group2OrderByWithAggregationInput | Group2OrderByWithAggregationInput[]
    by: Group2ScalarFieldEnum[] | Group2ScalarFieldEnum
    having?: Group2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Group2CountAggregateInputType | true
    _avg?: Group2AvgAggregateInputType
    _sum?: Group2SumAggregateInputType
    _min?: Group2MinAggregateInputType
    _max?: Group2MaxAggregateInputType
  }

  export type Group2GroupByOutputType = {
    id: number
    name: string
    _count: Group2CountAggregateOutputType | null
    _avg: Group2AvgAggregateOutputType | null
    _sum: Group2SumAggregateOutputType | null
    _min: Group2MinAggregateOutputType | null
    _max: Group2MaxAggregateOutputType | null
  }

  type GetGroup2GroupByPayload<T extends Group2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Group2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Group2GroupByOutputType[P]>
            : GetScalarType<T[P], Group2GroupByOutputType[P]>
        }
      >
    >


  export type Group2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userGroups?: boolean | Group2$userGroupsArgs<ExtArgs>
    _count?: boolean | Group2CountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group2"]>

  export type Group2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["group2"]>

  export type Group2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["group2"]>

  export type Group2SelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type Group2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["group2"]>
  export type Group2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | Group2$userGroupsArgs<ExtArgs>
    _count?: boolean | Group2CountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Group2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Group2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Group2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group2"
    objects: {
      userGroups: Prisma.$UserGroups2Payload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["group2"]>
    composites: {}
  }

  type Group2GetPayload<S extends boolean | null | undefined | Group2DefaultArgs> = $Result.GetResult<Prisma.$Group2Payload, S>

  type Group2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Group2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Group2CountAggregateInputType | true
    }

  export interface Group2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group2'], meta: { name: 'Group2' } }
    /**
     * Find zero or one Group2 that matches the filter.
     * @param {Group2FindUniqueArgs} args - Arguments to find a Group2
     * @example
     * // Get one Group2
     * const group2 = await prisma.group2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Group2FindUniqueArgs>(args: SelectSubset<T, Group2FindUniqueArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Group2FindUniqueOrThrowArgs} args - Arguments to find a Group2
     * @example
     * // Get one Group2
     * const group2 = await prisma.group2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Group2FindUniqueOrThrowArgs>(args: SelectSubset<T, Group2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group2FindFirstArgs} args - Arguments to find a Group2
     * @example
     * // Get one Group2
     * const group2 = await prisma.group2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Group2FindFirstArgs>(args?: SelectSubset<T, Group2FindFirstArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group2FindFirstOrThrowArgs} args - Arguments to find a Group2
     * @example
     * // Get one Group2
     * const group2 = await prisma.group2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Group2FindFirstOrThrowArgs>(args?: SelectSubset<T, Group2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Group2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group2s
     * const group2s = await prisma.group2.findMany()
     * 
     * // Get first 10 Group2s
     * const group2s = await prisma.group2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const group2WithIdOnly = await prisma.group2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Group2FindManyArgs>(args?: SelectSubset<T, Group2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group2.
     * @param {Group2CreateArgs} args - Arguments to create a Group2.
     * @example
     * // Create one Group2
     * const Group2 = await prisma.group2.create({
     *   data: {
     *     // ... data to create a Group2
     *   }
     * })
     * 
     */
    create<T extends Group2CreateArgs>(args: SelectSubset<T, Group2CreateArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Group2s.
     * @param {Group2CreateManyArgs} args - Arguments to create many Group2s.
     * @example
     * // Create many Group2s
     * const group2 = await prisma.group2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Group2CreateManyArgs>(args?: SelectSubset<T, Group2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Group2s and returns the data saved in the database.
     * @param {Group2CreateManyAndReturnArgs} args - Arguments to create many Group2s.
     * @example
     * // Create many Group2s
     * const group2 = await prisma.group2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Group2s and only return the `id`
     * const group2WithIdOnly = await prisma.group2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Group2CreateManyAndReturnArgs>(args?: SelectSubset<T, Group2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group2.
     * @param {Group2DeleteArgs} args - Arguments to delete one Group2.
     * @example
     * // Delete one Group2
     * const Group2 = await prisma.group2.delete({
     *   where: {
     *     // ... filter to delete one Group2
     *   }
     * })
     * 
     */
    delete<T extends Group2DeleteArgs>(args: SelectSubset<T, Group2DeleteArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group2.
     * @param {Group2UpdateArgs} args - Arguments to update one Group2.
     * @example
     * // Update one Group2
     * const group2 = await prisma.group2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Group2UpdateArgs>(args: SelectSubset<T, Group2UpdateArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Group2s.
     * @param {Group2DeleteManyArgs} args - Arguments to filter Group2s to delete.
     * @example
     * // Delete a few Group2s
     * const { count } = await prisma.group2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Group2DeleteManyArgs>(args?: SelectSubset<T, Group2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group2s
     * const group2 = await prisma.group2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Group2UpdateManyArgs>(args: SelectSubset<T, Group2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group2s and returns the data updated in the database.
     * @param {Group2UpdateManyAndReturnArgs} args - Arguments to update many Group2s.
     * @example
     * // Update many Group2s
     * const group2 = await prisma.group2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Group2s and only return the `id`
     * const group2WithIdOnly = await prisma.group2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Group2UpdateManyAndReturnArgs>(args: SelectSubset<T, Group2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group2.
     * @param {Group2UpsertArgs} args - Arguments to update or create a Group2.
     * @example
     * // Update or create a Group2
     * const group2 = await prisma.group2.upsert({
     *   create: {
     *     // ... data to create a Group2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group2 we want to update
     *   }
     * })
     */
    upsert<T extends Group2UpsertArgs>(args: SelectSubset<T, Group2UpsertArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Group2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group2CountArgs} args - Arguments to filter Group2s to count.
     * @example
     * // Count the number of Group2s
     * const count = await prisma.group2.count({
     *   where: {
     *     // ... the filter for the Group2s we want to count
     *   }
     * })
    **/
    count<T extends Group2CountArgs>(
      args?: Subset<T, Group2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Group2AggregateArgs>(args: Subset<T, Group2AggregateArgs>): Prisma.PrismaPromise<GetGroup2AggregateType<T>>

    /**
     * Group by Group2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Group2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Group2GroupByArgs['orderBy'] }
        : { orderBy?: Group2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Group2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroup2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group2 model
   */
  readonly fields: Group2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Group2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userGroups<T extends Group2$userGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Group2$userGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group2 model
   */
  interface Group2FieldRefs {
    readonly id: FieldRef<"Group2", 'Int'>
    readonly name: FieldRef<"Group2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group2 findUnique
   */
  export type Group2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * Filter, which Group2 to fetch.
     */
    where: Group2WhereUniqueInput
  }

  /**
   * Group2 findUniqueOrThrow
   */
  export type Group2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * Filter, which Group2 to fetch.
     */
    where: Group2WhereUniqueInput
  }

  /**
   * Group2 findFirst
   */
  export type Group2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * Filter, which Group2 to fetch.
     */
    where?: Group2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Group2s to fetch.
     */
    orderBy?: Group2OrderByWithRelationInput | Group2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Group2s.
     */
    cursor?: Group2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Group2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Group2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Group2s.
     */
    distinct?: Group2ScalarFieldEnum | Group2ScalarFieldEnum[]
  }

  /**
   * Group2 findFirstOrThrow
   */
  export type Group2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * Filter, which Group2 to fetch.
     */
    where?: Group2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Group2s to fetch.
     */
    orderBy?: Group2OrderByWithRelationInput | Group2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Group2s.
     */
    cursor?: Group2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Group2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Group2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Group2s.
     */
    distinct?: Group2ScalarFieldEnum | Group2ScalarFieldEnum[]
  }

  /**
   * Group2 findMany
   */
  export type Group2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * Filter, which Group2s to fetch.
     */
    where?: Group2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Group2s to fetch.
     */
    orderBy?: Group2OrderByWithRelationInput | Group2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Group2s.
     */
    cursor?: Group2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Group2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Group2s.
     */
    skip?: number
    distinct?: Group2ScalarFieldEnum | Group2ScalarFieldEnum[]
  }

  /**
   * Group2 create
   */
  export type Group2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * The data needed to create a Group2.
     */
    data: XOR<Group2CreateInput, Group2UncheckedCreateInput>
  }

  /**
   * Group2 createMany
   */
  export type Group2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Group2s.
     */
    data: Group2CreateManyInput | Group2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group2 createManyAndReturn
   */
  export type Group2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * The data used to create many Group2s.
     */
    data: Group2CreateManyInput | Group2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group2 update
   */
  export type Group2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * The data needed to update a Group2.
     */
    data: XOR<Group2UpdateInput, Group2UncheckedUpdateInput>
    /**
     * Choose, which Group2 to update.
     */
    where: Group2WhereUniqueInput
  }

  /**
   * Group2 updateMany
   */
  export type Group2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Group2s.
     */
    data: XOR<Group2UpdateManyMutationInput, Group2UncheckedUpdateManyInput>
    /**
     * Filter which Group2s to update
     */
    where?: Group2WhereInput
    /**
     * Limit how many Group2s to update.
     */
    limit?: number
  }

  /**
   * Group2 updateManyAndReturn
   */
  export type Group2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * The data used to update Group2s.
     */
    data: XOR<Group2UpdateManyMutationInput, Group2UncheckedUpdateManyInput>
    /**
     * Filter which Group2s to update
     */
    where?: Group2WhereInput
    /**
     * Limit how many Group2s to update.
     */
    limit?: number
  }

  /**
   * Group2 upsert
   */
  export type Group2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * The filter to search for the Group2 to update in case it exists.
     */
    where: Group2WhereUniqueInput
    /**
     * In case the Group2 found by the `where` argument doesn't exist, create a new Group2 with this data.
     */
    create: XOR<Group2CreateInput, Group2UncheckedCreateInput>
    /**
     * In case the Group2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Group2UpdateInput, Group2UncheckedUpdateInput>
  }

  /**
   * Group2 delete
   */
  export type Group2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
    /**
     * Filter which Group2 to delete.
     */
    where: Group2WhereUniqueInput
  }

  /**
   * Group2 deleteMany
   */
  export type Group2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group2s to delete
     */
    where?: Group2WhereInput
    /**
     * Limit how many Group2s to delete.
     */
    limit?: number
  }

  /**
   * Group2.userGroups
   */
  export type Group2$userGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    where?: UserGroups2WhereInput
    orderBy?: UserGroups2OrderByWithRelationInput | UserGroups2OrderByWithRelationInput[]
    cursor?: UserGroups2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGroups2ScalarFieldEnum | UserGroups2ScalarFieldEnum[]
  }

  /**
   * Group2 without action
   */
  export type Group2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group2
     */
    select?: Group2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Group2
     */
    omit?: Group2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Group2Include<ExtArgs> | null
  }


  /**
   * Model Role2
   */

  export type AggregateRole2 = {
    _count: Role2CountAggregateOutputType | null
    _avg: Role2AvgAggregateOutputType | null
    _sum: Role2SumAggregateOutputType | null
    _min: Role2MinAggregateOutputType | null
    _max: Role2MaxAggregateOutputType | null
  }

  export type Role2AvgAggregateOutputType = {
    id: number | null
  }

  export type Role2SumAggregateOutputType = {
    id: number | null
  }

  export type Role2MinAggregateOutputType = {
    id: number | null
    role: string | null
  }

  export type Role2MaxAggregateOutputType = {
    id: number | null
    role: string | null
  }

  export type Role2CountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type Role2AvgAggregateInputType = {
    id?: true
  }

  export type Role2SumAggregateInputType = {
    id?: true
  }

  export type Role2MinAggregateInputType = {
    id?: true
    role?: true
  }

  export type Role2MaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type Role2CountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type Role2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role2 to aggregate.
     */
    where?: Role2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role2s to fetch.
     */
    orderBy?: Role2OrderByWithRelationInput | Role2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Role2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Role2s
    **/
    _count?: true | Role2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Role2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Role2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role2MaxAggregateInputType
  }

  export type GetRole2AggregateType<T extends Role2AggregateArgs> = {
        [P in keyof T & keyof AggregateRole2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole2[P]>
      : GetScalarType<T[P], AggregateRole2[P]>
  }




  export type Role2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Role2WhereInput
    orderBy?: Role2OrderByWithAggregationInput | Role2OrderByWithAggregationInput[]
    by: Role2ScalarFieldEnum[] | Role2ScalarFieldEnum
    having?: Role2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role2CountAggregateInputType | true
    _avg?: Role2AvgAggregateInputType
    _sum?: Role2SumAggregateInputType
    _min?: Role2MinAggregateInputType
    _max?: Role2MaxAggregateInputType
  }

  export type Role2GroupByOutputType = {
    id: number
    role: string
    _count: Role2CountAggregateOutputType | null
    _avg: Role2AvgAggregateOutputType | null
    _sum: Role2SumAggregateOutputType | null
    _min: Role2MinAggregateOutputType | null
    _max: Role2MaxAggregateOutputType | null
  }

  type GetRole2GroupByPayload<T extends Role2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role2GroupByOutputType[P]>
            : GetScalarType<T[P], Role2GroupByOutputType[P]>
        }
      >
    >


  export type Role2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    users2?: boolean | Role2$users2Args<ExtArgs>
    _count?: boolean | Role2CountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role2"]>

  export type Role2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["role2"]>

  export type Role2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["role2"]>

  export type Role2SelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type Role2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role", ExtArgs["result"]["role2"]>
  export type Role2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users2?: boolean | Role2$users2Args<ExtArgs>
    _count?: boolean | Role2CountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Role2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Role2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Role2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role2"
    objects: {
      users2: Prisma.$Users2Payload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
    }, ExtArgs["result"]["role2"]>
    composites: {}
  }

  type Role2GetPayload<S extends boolean | null | undefined | Role2DefaultArgs> = $Result.GetResult<Prisma.$Role2Payload, S>

  type Role2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Role2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Role2CountAggregateInputType | true
    }

  export interface Role2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role2'], meta: { name: 'Role2' } }
    /**
     * Find zero or one Role2 that matches the filter.
     * @param {Role2FindUniqueArgs} args - Arguments to find a Role2
     * @example
     * // Get one Role2
     * const role2 = await prisma.role2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Role2FindUniqueArgs>(args: SelectSubset<T, Role2FindUniqueArgs<ExtArgs>>): Prisma__Role2Client<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Role2FindUniqueOrThrowArgs} args - Arguments to find a Role2
     * @example
     * // Get one Role2
     * const role2 = await prisma.role2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Role2FindUniqueOrThrowArgs>(args: SelectSubset<T, Role2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Role2Client<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role2FindFirstArgs} args - Arguments to find a Role2
     * @example
     * // Get one Role2
     * const role2 = await prisma.role2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Role2FindFirstArgs>(args?: SelectSubset<T, Role2FindFirstArgs<ExtArgs>>): Prisma__Role2Client<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role2FindFirstOrThrowArgs} args - Arguments to find a Role2
     * @example
     * // Get one Role2
     * const role2 = await prisma.role2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Role2FindFirstOrThrowArgs>(args?: SelectSubset<T, Role2FindFirstOrThrowArgs<ExtArgs>>): Prisma__Role2Client<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Role2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role2s
     * const role2s = await prisma.role2.findMany()
     * 
     * // Get first 10 Role2s
     * const role2s = await prisma.role2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const role2WithIdOnly = await prisma.role2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Role2FindManyArgs>(args?: SelectSubset<T, Role2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role2.
     * @param {Role2CreateArgs} args - Arguments to create a Role2.
     * @example
     * // Create one Role2
     * const Role2 = await prisma.role2.create({
     *   data: {
     *     // ... data to create a Role2
     *   }
     * })
     * 
     */
    create<T extends Role2CreateArgs>(args: SelectSubset<T, Role2CreateArgs<ExtArgs>>): Prisma__Role2Client<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Role2s.
     * @param {Role2CreateManyArgs} args - Arguments to create many Role2s.
     * @example
     * // Create many Role2s
     * const role2 = await prisma.role2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Role2CreateManyArgs>(args?: SelectSubset<T, Role2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Role2s and returns the data saved in the database.
     * @param {Role2CreateManyAndReturnArgs} args - Arguments to create many Role2s.
     * @example
     * // Create many Role2s
     * const role2 = await prisma.role2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Role2s and only return the `id`
     * const role2WithIdOnly = await prisma.role2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Role2CreateManyAndReturnArgs>(args?: SelectSubset<T, Role2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role2.
     * @param {Role2DeleteArgs} args - Arguments to delete one Role2.
     * @example
     * // Delete one Role2
     * const Role2 = await prisma.role2.delete({
     *   where: {
     *     // ... filter to delete one Role2
     *   }
     * })
     * 
     */
    delete<T extends Role2DeleteArgs>(args: SelectSubset<T, Role2DeleteArgs<ExtArgs>>): Prisma__Role2Client<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role2.
     * @param {Role2UpdateArgs} args - Arguments to update one Role2.
     * @example
     * // Update one Role2
     * const role2 = await prisma.role2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Role2UpdateArgs>(args: SelectSubset<T, Role2UpdateArgs<ExtArgs>>): Prisma__Role2Client<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Role2s.
     * @param {Role2DeleteManyArgs} args - Arguments to filter Role2s to delete.
     * @example
     * // Delete a few Role2s
     * const { count } = await prisma.role2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Role2DeleteManyArgs>(args?: SelectSubset<T, Role2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role2s
     * const role2 = await prisma.role2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Role2UpdateManyArgs>(args: SelectSubset<T, Role2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role2s and returns the data updated in the database.
     * @param {Role2UpdateManyAndReturnArgs} args - Arguments to update many Role2s.
     * @example
     * // Update many Role2s
     * const role2 = await prisma.role2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Role2s and only return the `id`
     * const role2WithIdOnly = await prisma.role2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Role2UpdateManyAndReturnArgs>(args: SelectSubset<T, Role2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role2.
     * @param {Role2UpsertArgs} args - Arguments to update or create a Role2.
     * @example
     * // Update or create a Role2
     * const role2 = await prisma.role2.upsert({
     *   create: {
     *     // ... data to create a Role2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role2 we want to update
     *   }
     * })
     */
    upsert<T extends Role2UpsertArgs>(args: SelectSubset<T, Role2UpsertArgs<ExtArgs>>): Prisma__Role2Client<$Result.GetResult<Prisma.$Role2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Role2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role2CountArgs} args - Arguments to filter Role2s to count.
     * @example
     * // Count the number of Role2s
     * const count = await prisma.role2.count({
     *   where: {
     *     // ... the filter for the Role2s we want to count
     *   }
     * })
    **/
    count<T extends Role2CountArgs>(
      args?: Subset<T, Role2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role2AggregateArgs>(args: Subset<T, Role2AggregateArgs>): Prisma.PrismaPromise<GetRole2AggregateType<T>>

    /**
     * Group by Role2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Role2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Role2GroupByArgs['orderBy'] }
        : { orderBy?: Role2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Role2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role2 model
   */
  readonly fields: Role2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Role2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users2<T extends Role2$users2Args<ExtArgs> = {}>(args?: Subset<T, Role2$users2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role2 model
   */
  interface Role2FieldRefs {
    readonly id: FieldRef<"Role2", 'Int'>
    readonly role: FieldRef<"Role2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role2 findUnique
   */
  export type Role2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * Filter, which Role2 to fetch.
     */
    where: Role2WhereUniqueInput
  }

  /**
   * Role2 findUniqueOrThrow
   */
  export type Role2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * Filter, which Role2 to fetch.
     */
    where: Role2WhereUniqueInput
  }

  /**
   * Role2 findFirst
   */
  export type Role2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * Filter, which Role2 to fetch.
     */
    where?: Role2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role2s to fetch.
     */
    orderBy?: Role2OrderByWithRelationInput | Role2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Role2s.
     */
    cursor?: Role2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Role2s.
     */
    distinct?: Role2ScalarFieldEnum | Role2ScalarFieldEnum[]
  }

  /**
   * Role2 findFirstOrThrow
   */
  export type Role2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * Filter, which Role2 to fetch.
     */
    where?: Role2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role2s to fetch.
     */
    orderBy?: Role2OrderByWithRelationInput | Role2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Role2s.
     */
    cursor?: Role2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Role2s.
     */
    distinct?: Role2ScalarFieldEnum | Role2ScalarFieldEnum[]
  }

  /**
   * Role2 findMany
   */
  export type Role2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * Filter, which Role2s to fetch.
     */
    where?: Role2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role2s to fetch.
     */
    orderBy?: Role2OrderByWithRelationInput | Role2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Role2s.
     */
    cursor?: Role2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role2s.
     */
    skip?: number
    distinct?: Role2ScalarFieldEnum | Role2ScalarFieldEnum[]
  }

  /**
   * Role2 create
   */
  export type Role2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * The data needed to create a Role2.
     */
    data: XOR<Role2CreateInput, Role2UncheckedCreateInput>
  }

  /**
   * Role2 createMany
   */
  export type Role2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Role2s.
     */
    data: Role2CreateManyInput | Role2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role2 createManyAndReturn
   */
  export type Role2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * The data used to create many Role2s.
     */
    data: Role2CreateManyInput | Role2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role2 update
   */
  export type Role2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * The data needed to update a Role2.
     */
    data: XOR<Role2UpdateInput, Role2UncheckedUpdateInput>
    /**
     * Choose, which Role2 to update.
     */
    where: Role2WhereUniqueInput
  }

  /**
   * Role2 updateMany
   */
  export type Role2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Role2s.
     */
    data: XOR<Role2UpdateManyMutationInput, Role2UncheckedUpdateManyInput>
    /**
     * Filter which Role2s to update
     */
    where?: Role2WhereInput
    /**
     * Limit how many Role2s to update.
     */
    limit?: number
  }

  /**
   * Role2 updateManyAndReturn
   */
  export type Role2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * The data used to update Role2s.
     */
    data: XOR<Role2UpdateManyMutationInput, Role2UncheckedUpdateManyInput>
    /**
     * Filter which Role2s to update
     */
    where?: Role2WhereInput
    /**
     * Limit how many Role2s to update.
     */
    limit?: number
  }

  /**
   * Role2 upsert
   */
  export type Role2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * The filter to search for the Role2 to update in case it exists.
     */
    where: Role2WhereUniqueInput
    /**
     * In case the Role2 found by the `where` argument doesn't exist, create a new Role2 with this data.
     */
    create: XOR<Role2CreateInput, Role2UncheckedCreateInput>
    /**
     * In case the Role2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Role2UpdateInput, Role2UncheckedUpdateInput>
  }

  /**
   * Role2 delete
   */
  export type Role2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
    /**
     * Filter which Role2 to delete.
     */
    where: Role2WhereUniqueInput
  }

  /**
   * Role2 deleteMany
   */
  export type Role2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role2s to delete
     */
    where?: Role2WhereInput
    /**
     * Limit how many Role2s to delete.
     */
    limit?: number
  }

  /**
   * Role2.users2
   */
  export type Role2$users2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users2
     */
    select?: Users2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Users2
     */
    omit?: Users2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users2Include<ExtArgs> | null
    where?: Users2WhereInput
    orderBy?: Users2OrderByWithRelationInput | Users2OrderByWithRelationInput[]
    cursor?: Users2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users2ScalarFieldEnum | Users2ScalarFieldEnum[]
  }

  /**
   * Role2 without action
   */
  export type Role2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role2
     */
    select?: Role2Select<ExtArgs> | null
    /**
     * Omit specific fields from the Role2
     */
    omit?: Role2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role2Include<ExtArgs> | null
  }


  /**
   * Model UserGroups2
   */

  export type AggregateUserGroups2 = {
    _count: UserGroups2CountAggregateOutputType | null
    _avg: UserGroups2AvgAggregateOutputType | null
    _sum: UserGroups2SumAggregateOutputType | null
    _min: UserGroups2MinAggregateOutputType | null
    _max: UserGroups2MaxAggregateOutputType | null
  }

  export type UserGroups2AvgAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type UserGroups2SumAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
  }

  export type UserGroups2MinAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
    joinedAt: Date | null
    isModerator: boolean | null
  }

  export type UserGroups2MaxAggregateOutputType = {
    id: number | null
    userId: number | null
    groupId: number | null
    joinedAt: Date | null
    isModerator: boolean | null
  }

  export type UserGroups2CountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    joinedAt: number
    isModerator: number
    _all: number
  }


  export type UserGroups2AvgAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type UserGroups2SumAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
  }

  export type UserGroups2MinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    joinedAt?: true
    isModerator?: true
  }

  export type UserGroups2MaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    joinedAt?: true
    isModerator?: true
  }

  export type UserGroups2CountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    joinedAt?: true
    isModerator?: true
    _all?: true
  }

  export type UserGroups2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGroups2 to aggregate.
     */
    where?: UserGroups2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups2s to fetch.
     */
    orderBy?: UserGroups2OrderByWithRelationInput | UserGroups2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGroups2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGroups2s
    **/
    _count?: true | UserGroups2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGroups2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGroups2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGroups2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGroups2MaxAggregateInputType
  }

  export type GetUserGroups2AggregateType<T extends UserGroups2AggregateArgs> = {
        [P in keyof T & keyof AggregateUserGroups2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGroups2[P]>
      : GetScalarType<T[P], AggregateUserGroups2[P]>
  }




  export type UserGroups2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGroups2WhereInput
    orderBy?: UserGroups2OrderByWithAggregationInput | UserGroups2OrderByWithAggregationInput[]
    by: UserGroups2ScalarFieldEnum[] | UserGroups2ScalarFieldEnum
    having?: UserGroups2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGroups2CountAggregateInputType | true
    _avg?: UserGroups2AvgAggregateInputType
    _sum?: UserGroups2SumAggregateInputType
    _min?: UserGroups2MinAggregateInputType
    _max?: UserGroups2MaxAggregateInputType
  }

  export type UserGroups2GroupByOutputType = {
    id: number
    userId: number
    groupId: number
    joinedAt: Date
    isModerator: boolean
    _count: UserGroups2CountAggregateOutputType | null
    _avg: UserGroups2AvgAggregateOutputType | null
    _sum: UserGroups2SumAggregateOutputType | null
    _min: UserGroups2MinAggregateOutputType | null
    _max: UserGroups2MaxAggregateOutputType | null
  }

  type GetUserGroups2GroupByPayload<T extends UserGroups2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroups2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroups2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroups2GroupByOutputType[P]>
            : GetScalarType<T[P], UserGroups2GroupByOutputType[P]>
        }
      >
    >


  export type UserGroups2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    joinedAt?: boolean
    isModerator?: boolean
    users2?: boolean | Users2DefaultArgs<ExtArgs>
    groups2?: boolean | Group2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGroups2"]>

  export type UserGroups2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    joinedAt?: boolean
    isModerator?: boolean
    users2?: boolean | Users2DefaultArgs<ExtArgs>
    groups2?: boolean | Group2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGroups2"]>

  export type UserGroups2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    joinedAt?: boolean
    isModerator?: boolean
    users2?: boolean | Users2DefaultArgs<ExtArgs>
    groups2?: boolean | Group2DefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGroups2"]>

  export type UserGroups2SelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
    joinedAt?: boolean
    isModerator?: boolean
  }

  export type UserGroups2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupId" | "joinedAt" | "isModerator", ExtArgs["result"]["userGroups2"]>
  export type UserGroups2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users2?: boolean | Users2DefaultArgs<ExtArgs>
    groups2?: boolean | Group2DefaultArgs<ExtArgs>
  }
  export type UserGroups2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users2?: boolean | Users2DefaultArgs<ExtArgs>
    groups2?: boolean | Group2DefaultArgs<ExtArgs>
  }
  export type UserGroups2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users2?: boolean | Users2DefaultArgs<ExtArgs>
    groups2?: boolean | Group2DefaultArgs<ExtArgs>
  }

  export type $UserGroups2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGroups2"
    objects: {
      users2: Prisma.$Users2Payload<ExtArgs>
      groups2: Prisma.$Group2Payload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      groupId: number
      joinedAt: Date
      isModerator: boolean
    }, ExtArgs["result"]["userGroups2"]>
    composites: {}
  }

  type UserGroups2GetPayload<S extends boolean | null | undefined | UserGroups2DefaultArgs> = $Result.GetResult<Prisma.$UserGroups2Payload, S>

  type UserGroups2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGroups2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGroups2CountAggregateInputType | true
    }

  export interface UserGroups2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGroups2'], meta: { name: 'UserGroups2' } }
    /**
     * Find zero or one UserGroups2 that matches the filter.
     * @param {UserGroups2FindUniqueArgs} args - Arguments to find a UserGroups2
     * @example
     * // Get one UserGroups2
     * const userGroups2 = await prisma.userGroups2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGroups2FindUniqueArgs>(args: SelectSubset<T, UserGroups2FindUniqueArgs<ExtArgs>>): Prisma__UserGroups2Client<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGroups2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGroups2FindUniqueOrThrowArgs} args - Arguments to find a UserGroups2
     * @example
     * // Get one UserGroups2
     * const userGroups2 = await prisma.userGroups2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGroups2FindUniqueOrThrowArgs>(args: SelectSubset<T, UserGroups2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGroups2Client<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGroups2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroups2FindFirstArgs} args - Arguments to find a UserGroups2
     * @example
     * // Get one UserGroups2
     * const userGroups2 = await prisma.userGroups2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGroups2FindFirstArgs>(args?: SelectSubset<T, UserGroups2FindFirstArgs<ExtArgs>>): Prisma__UserGroups2Client<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGroups2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroups2FindFirstOrThrowArgs} args - Arguments to find a UserGroups2
     * @example
     * // Get one UserGroups2
     * const userGroups2 = await prisma.userGroups2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGroups2FindFirstOrThrowArgs>(args?: SelectSubset<T, UserGroups2FindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGroups2Client<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGroups2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroups2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGroups2s
     * const userGroups2s = await prisma.userGroups2.findMany()
     * 
     * // Get first 10 UserGroups2s
     * const userGroups2s = await prisma.userGroups2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGroups2WithIdOnly = await prisma.userGroups2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGroups2FindManyArgs>(args?: SelectSubset<T, UserGroups2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGroups2.
     * @param {UserGroups2CreateArgs} args - Arguments to create a UserGroups2.
     * @example
     * // Create one UserGroups2
     * const UserGroups2 = await prisma.userGroups2.create({
     *   data: {
     *     // ... data to create a UserGroups2
     *   }
     * })
     * 
     */
    create<T extends UserGroups2CreateArgs>(args: SelectSubset<T, UserGroups2CreateArgs<ExtArgs>>): Prisma__UserGroups2Client<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGroups2s.
     * @param {UserGroups2CreateManyArgs} args - Arguments to create many UserGroups2s.
     * @example
     * // Create many UserGroups2s
     * const userGroups2 = await prisma.userGroups2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGroups2CreateManyArgs>(args?: SelectSubset<T, UserGroups2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGroups2s and returns the data saved in the database.
     * @param {UserGroups2CreateManyAndReturnArgs} args - Arguments to create many UserGroups2s.
     * @example
     * // Create many UserGroups2s
     * const userGroups2 = await prisma.userGroups2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGroups2s and only return the `id`
     * const userGroups2WithIdOnly = await prisma.userGroups2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGroups2CreateManyAndReturnArgs>(args?: SelectSubset<T, UserGroups2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGroups2.
     * @param {UserGroups2DeleteArgs} args - Arguments to delete one UserGroups2.
     * @example
     * // Delete one UserGroups2
     * const UserGroups2 = await prisma.userGroups2.delete({
     *   where: {
     *     // ... filter to delete one UserGroups2
     *   }
     * })
     * 
     */
    delete<T extends UserGroups2DeleteArgs>(args: SelectSubset<T, UserGroups2DeleteArgs<ExtArgs>>): Prisma__UserGroups2Client<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGroups2.
     * @param {UserGroups2UpdateArgs} args - Arguments to update one UserGroups2.
     * @example
     * // Update one UserGroups2
     * const userGroups2 = await prisma.userGroups2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGroups2UpdateArgs>(args: SelectSubset<T, UserGroups2UpdateArgs<ExtArgs>>): Prisma__UserGroups2Client<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGroups2s.
     * @param {UserGroups2DeleteManyArgs} args - Arguments to filter UserGroups2s to delete.
     * @example
     * // Delete a few UserGroups2s
     * const { count } = await prisma.userGroups2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGroups2DeleteManyArgs>(args?: SelectSubset<T, UserGroups2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGroups2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroups2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGroups2s
     * const userGroups2 = await prisma.userGroups2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGroups2UpdateManyArgs>(args: SelectSubset<T, UserGroups2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGroups2s and returns the data updated in the database.
     * @param {UserGroups2UpdateManyAndReturnArgs} args - Arguments to update many UserGroups2s.
     * @example
     * // Update many UserGroups2s
     * const userGroups2 = await prisma.userGroups2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGroups2s and only return the `id`
     * const userGroups2WithIdOnly = await prisma.userGroups2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGroups2UpdateManyAndReturnArgs>(args: SelectSubset<T, UserGroups2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGroups2.
     * @param {UserGroups2UpsertArgs} args - Arguments to update or create a UserGroups2.
     * @example
     * // Update or create a UserGroups2
     * const userGroups2 = await prisma.userGroups2.upsert({
     *   create: {
     *     // ... data to create a UserGroups2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGroups2 we want to update
     *   }
     * })
     */
    upsert<T extends UserGroups2UpsertArgs>(args: SelectSubset<T, UserGroups2UpsertArgs<ExtArgs>>): Prisma__UserGroups2Client<$Result.GetResult<Prisma.$UserGroups2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGroups2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroups2CountArgs} args - Arguments to filter UserGroups2s to count.
     * @example
     * // Count the number of UserGroups2s
     * const count = await prisma.userGroups2.count({
     *   where: {
     *     // ... the filter for the UserGroups2s we want to count
     *   }
     * })
    **/
    count<T extends UserGroups2CountArgs>(
      args?: Subset<T, UserGroups2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGroups2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGroups2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroups2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGroups2AggregateArgs>(args: Subset<T, UserGroups2AggregateArgs>): Prisma.PrismaPromise<GetUserGroups2AggregateType<T>>

    /**
     * Group by UserGroups2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroups2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroups2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroups2GroupByArgs['orderBy'] }
        : { orderBy?: UserGroups2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroups2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroups2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGroups2 model
   */
  readonly fields: UserGroups2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGroups2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGroups2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users2<T extends Users2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, Users2DefaultArgs<ExtArgs>>): Prisma__Users2Client<$Result.GetResult<Prisma.$Users2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groups2<T extends Group2DefaultArgs<ExtArgs> = {}>(args?: Subset<T, Group2DefaultArgs<ExtArgs>>): Prisma__Group2Client<$Result.GetResult<Prisma.$Group2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGroups2 model
   */
  interface UserGroups2FieldRefs {
    readonly id: FieldRef<"UserGroups2", 'Int'>
    readonly userId: FieldRef<"UserGroups2", 'Int'>
    readonly groupId: FieldRef<"UserGroups2", 'Int'>
    readonly joinedAt: FieldRef<"UserGroups2", 'DateTime'>
    readonly isModerator: FieldRef<"UserGroups2", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserGroups2 findUnique
   */
  export type UserGroups2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * Filter, which UserGroups2 to fetch.
     */
    where: UserGroups2WhereUniqueInput
  }

  /**
   * UserGroups2 findUniqueOrThrow
   */
  export type UserGroups2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * Filter, which UserGroups2 to fetch.
     */
    where: UserGroups2WhereUniqueInput
  }

  /**
   * UserGroups2 findFirst
   */
  export type UserGroups2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * Filter, which UserGroups2 to fetch.
     */
    where?: UserGroups2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups2s to fetch.
     */
    orderBy?: UserGroups2OrderByWithRelationInput | UserGroups2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGroups2s.
     */
    cursor?: UserGroups2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGroups2s.
     */
    distinct?: UserGroups2ScalarFieldEnum | UserGroups2ScalarFieldEnum[]
  }

  /**
   * UserGroups2 findFirstOrThrow
   */
  export type UserGroups2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * Filter, which UserGroups2 to fetch.
     */
    where?: UserGroups2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups2s to fetch.
     */
    orderBy?: UserGroups2OrderByWithRelationInput | UserGroups2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGroups2s.
     */
    cursor?: UserGroups2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGroups2s.
     */
    distinct?: UserGroups2ScalarFieldEnum | UserGroups2ScalarFieldEnum[]
  }

  /**
   * UserGroups2 findMany
   */
  export type UserGroups2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * Filter, which UserGroups2s to fetch.
     */
    where?: UserGroups2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGroups2s to fetch.
     */
    orderBy?: UserGroups2OrderByWithRelationInput | UserGroups2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGroups2s.
     */
    cursor?: UserGroups2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGroups2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGroups2s.
     */
    skip?: number
    distinct?: UserGroups2ScalarFieldEnum | UserGroups2ScalarFieldEnum[]
  }

  /**
   * UserGroups2 create
   */
  export type UserGroups2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * The data needed to create a UserGroups2.
     */
    data: XOR<UserGroups2CreateInput, UserGroups2UncheckedCreateInput>
  }

  /**
   * UserGroups2 createMany
   */
  export type UserGroups2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGroups2s.
     */
    data: UserGroups2CreateManyInput | UserGroups2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGroups2 createManyAndReturn
   */
  export type UserGroups2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * The data used to create many UserGroups2s.
     */
    data: UserGroups2CreateManyInput | UserGroups2CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGroups2 update
   */
  export type UserGroups2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * The data needed to update a UserGroups2.
     */
    data: XOR<UserGroups2UpdateInput, UserGroups2UncheckedUpdateInput>
    /**
     * Choose, which UserGroups2 to update.
     */
    where: UserGroups2WhereUniqueInput
  }

  /**
   * UserGroups2 updateMany
   */
  export type UserGroups2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGroups2s.
     */
    data: XOR<UserGroups2UpdateManyMutationInput, UserGroups2UncheckedUpdateManyInput>
    /**
     * Filter which UserGroups2s to update
     */
    where?: UserGroups2WhereInput
    /**
     * Limit how many UserGroups2s to update.
     */
    limit?: number
  }

  /**
   * UserGroups2 updateManyAndReturn
   */
  export type UserGroups2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * The data used to update UserGroups2s.
     */
    data: XOR<UserGroups2UpdateManyMutationInput, UserGroups2UncheckedUpdateManyInput>
    /**
     * Filter which UserGroups2s to update
     */
    where?: UserGroups2WhereInput
    /**
     * Limit how many UserGroups2s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGroups2 upsert
   */
  export type UserGroups2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * The filter to search for the UserGroups2 to update in case it exists.
     */
    where: UserGroups2WhereUniqueInput
    /**
     * In case the UserGroups2 found by the `where` argument doesn't exist, create a new UserGroups2 with this data.
     */
    create: XOR<UserGroups2CreateInput, UserGroups2UncheckedCreateInput>
    /**
     * In case the UserGroups2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGroups2UpdateInput, UserGroups2UncheckedUpdateInput>
  }

  /**
   * UserGroups2 delete
   */
  export type UserGroups2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
    /**
     * Filter which UserGroups2 to delete.
     */
    where: UserGroups2WhereUniqueInput
  }

  /**
   * UserGroups2 deleteMany
   */
  export type UserGroups2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGroups2s to delete
     */
    where?: UserGroups2WhereInput
    /**
     * Limit how many UserGroups2s to delete.
     */
    limit?: number
  }

  /**
   * UserGroups2 without action
   */
  export type UserGroups2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGroups2
     */
    select?: UserGroups2Select<ExtArgs> | null
    /**
     * Omit specific fields from the UserGroups2
     */
    omit?: UserGroups2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGroups2Include<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Users2ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    email: 'email',
    phone: 'phone',
    website: 'website',
    createdAt: 'createdAt',
    isActive: 'isActive',
    deleteAt: 'deleteAt',
    deleted: 'deleted'
  };

  export type Users2ScalarFieldEnum = (typeof Users2ScalarFieldEnum)[keyof typeof Users2ScalarFieldEnum]


  export const Post2ScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    body: 'body'
  };

  export type Post2ScalarFieldEnum = (typeof Post2ScalarFieldEnum)[keyof typeof Post2ScalarFieldEnum]


  export const Comments2ScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    name: 'name',
    email: 'email',
    body: 'body'
  };

  export type Comments2ScalarFieldEnum = (typeof Comments2ScalarFieldEnum)[keyof typeof Comments2ScalarFieldEnum]


  export const Company2ScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    catchPhrase: 'catchPhrase',
    bs: 'bs'
  };

  export type Company2ScalarFieldEnum = (typeof Company2ScalarFieldEnum)[keyof typeof Company2ScalarFieldEnum]


  export const Geo2ScalarFieldEnum: {
    id: 'id',
    address2Id: 'address2Id',
    lat: 'lat',
    lng: 'lng'
  };

  export type Geo2ScalarFieldEnum = (typeof Geo2ScalarFieldEnum)[keyof typeof Geo2ScalarFieldEnum]


  export const Address2ScalarFieldEnum: {
    id: 'id',
    street: 'street',
    suite: 'suite',
    city: 'city',
    zipcode: 'zipcode',
    userId: 'userId'
  };

  export type Address2ScalarFieldEnum = (typeof Address2ScalarFieldEnum)[keyof typeof Address2ScalarFieldEnum]


  export const Group2ScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Group2ScalarFieldEnum = (typeof Group2ScalarFieldEnum)[keyof typeof Group2ScalarFieldEnum]


  export const Role2ScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type Role2ScalarFieldEnum = (typeof Role2ScalarFieldEnum)[keyof typeof Role2ScalarFieldEnum]


  export const UserGroups2ScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId',
    joinedAt: 'joinedAt',
    isModerator: 'isModerator'
  };

  export type UserGroups2ScalarFieldEnum = (typeof UserGroups2ScalarFieldEnum)[keyof typeof UserGroups2ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type Users2WhereInput = {
    AND?: Users2WhereInput | Users2WhereInput[]
    OR?: Users2WhereInput[]
    NOT?: Users2WhereInput | Users2WhereInput[]
    id?: IntFilter<"Users2"> | number
    name?: StringFilter<"Users2"> | string
    username?: StringFilter<"Users2"> | string
    password?: StringFilter<"Users2"> | string
    email?: StringNullableFilter<"Users2"> | string | null
    phone?: StringNullableFilter<"Users2"> | string | null
    website?: StringNullableFilter<"Users2"> | string | null
    createdAt?: DateTimeFilter<"Users2"> | Date | string
    isActive?: BoolFilter<"Users2"> | boolean
    deleteAt?: DateTimeNullableFilter<"Users2"> | Date | string | null
    deleted?: BoolFilter<"Users2"> | boolean
    address?: XOR<Address2NullableScalarRelationFilter, Address2WhereInput> | null
    company?: XOR<Company2NullableScalarRelationFilter, Company2WhereInput> | null
    post?: Post2ListRelationFilter
    roles?: Role2ListRelationFilter
    userGroups?: UserGroups2ListRelationFilter
  }

  export type Users2OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    address?: Address2OrderByWithRelationInput
    company?: Company2OrderByWithRelationInput
    post?: Post2OrderByRelationAggregateInput
    roles?: Role2OrderByRelationAggregateInput
    userGroups?: UserGroups2OrderByRelationAggregateInput
  }

  export type Users2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    email?: string
    phone?: string
    website?: string
    AND?: Users2WhereInput | Users2WhereInput[]
    OR?: Users2WhereInput[]
    NOT?: Users2WhereInput | Users2WhereInput[]
    username?: StringFilter<"Users2"> | string
    password?: StringFilter<"Users2"> | string
    createdAt?: DateTimeFilter<"Users2"> | Date | string
    isActive?: BoolFilter<"Users2"> | boolean
    deleteAt?: DateTimeNullableFilter<"Users2"> | Date | string | null
    deleted?: BoolFilter<"Users2"> | boolean
    address?: XOR<Address2NullableScalarRelationFilter, Address2WhereInput> | null
    company?: XOR<Company2NullableScalarRelationFilter, Company2WhereInput> | null
    post?: Post2ListRelationFilter
    roles?: Role2ListRelationFilter
    userGroups?: UserGroups2ListRelationFilter
  }, "id" | "name" | "email" | "phone" | "website">

  export type Users2OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: Users2CountOrderByAggregateInput
    _avg?: Users2AvgOrderByAggregateInput
    _max?: Users2MaxOrderByAggregateInput
    _min?: Users2MinOrderByAggregateInput
    _sum?: Users2SumOrderByAggregateInput
  }

  export type Users2ScalarWhereWithAggregatesInput = {
    AND?: Users2ScalarWhereWithAggregatesInput | Users2ScalarWhereWithAggregatesInput[]
    OR?: Users2ScalarWhereWithAggregatesInput[]
    NOT?: Users2ScalarWhereWithAggregatesInput | Users2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users2"> | number
    name?: StringWithAggregatesFilter<"Users2"> | string
    username?: StringWithAggregatesFilter<"Users2"> | string
    password?: StringWithAggregatesFilter<"Users2"> | string
    email?: StringNullableWithAggregatesFilter<"Users2"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Users2"> | string | null
    website?: StringNullableWithAggregatesFilter<"Users2"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users2"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Users2"> | boolean
    deleteAt?: DateTimeNullableWithAggregatesFilter<"Users2"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Users2"> | boolean
  }

  export type Post2WhereInput = {
    AND?: Post2WhereInput | Post2WhereInput[]
    OR?: Post2WhereInput[]
    NOT?: Post2WhereInput | Post2WhereInput[]
    id?: IntFilter<"Post2"> | number
    userId?: IntFilter<"Post2"> | number
    title?: StringFilter<"Post2"> | string
    body?: StringFilter<"Post2"> | string
    users?: XOR<Users2ScalarRelationFilter, Users2WhereInput>
    comments?: Comments2ListRelationFilter
  }

  export type Post2OrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    users?: Users2OrderByWithRelationInput
    comments?: Comments2OrderByRelationAggregateInput
  }

  export type Post2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Post2WhereInput | Post2WhereInput[]
    OR?: Post2WhereInput[]
    NOT?: Post2WhereInput | Post2WhereInput[]
    userId?: IntFilter<"Post2"> | number
    title?: StringFilter<"Post2"> | string
    body?: StringFilter<"Post2"> | string
    users?: XOR<Users2ScalarRelationFilter, Users2WhereInput>
    comments?: Comments2ListRelationFilter
  }, "id">

  export type Post2OrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    _count?: Post2CountOrderByAggregateInput
    _avg?: Post2AvgOrderByAggregateInput
    _max?: Post2MaxOrderByAggregateInput
    _min?: Post2MinOrderByAggregateInput
    _sum?: Post2SumOrderByAggregateInput
  }

  export type Post2ScalarWhereWithAggregatesInput = {
    AND?: Post2ScalarWhereWithAggregatesInput | Post2ScalarWhereWithAggregatesInput[]
    OR?: Post2ScalarWhereWithAggregatesInput[]
    NOT?: Post2ScalarWhereWithAggregatesInput | Post2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post2"> | number
    userId?: IntWithAggregatesFilter<"Post2"> | number
    title?: StringWithAggregatesFilter<"Post2"> | string
    body?: StringWithAggregatesFilter<"Post2"> | string
  }

  export type Comments2WhereInput = {
    AND?: Comments2WhereInput | Comments2WhereInput[]
    OR?: Comments2WhereInput[]
    NOT?: Comments2WhereInput | Comments2WhereInput[]
    id?: IntFilter<"Comments2"> | number
    postId?: IntFilter<"Comments2"> | number
    name?: StringFilter<"Comments2"> | string
    email?: StringFilter<"Comments2"> | string
    body?: StringFilter<"Comments2"> | string
    post?: XOR<Post2ScalarRelationFilter, Post2WhereInput>
  }

  export type Comments2OrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    body?: SortOrder
    post?: Post2OrderByWithRelationInput
  }

  export type Comments2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Comments2WhereInput | Comments2WhereInput[]
    OR?: Comments2WhereInput[]
    NOT?: Comments2WhereInput | Comments2WhereInput[]
    postId?: IntFilter<"Comments2"> | number
    name?: StringFilter<"Comments2"> | string
    email?: StringFilter<"Comments2"> | string
    body?: StringFilter<"Comments2"> | string
    post?: XOR<Post2ScalarRelationFilter, Post2WhereInput>
  }, "id">

  export type Comments2OrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    body?: SortOrder
    _count?: Comments2CountOrderByAggregateInput
    _avg?: Comments2AvgOrderByAggregateInput
    _max?: Comments2MaxOrderByAggregateInput
    _min?: Comments2MinOrderByAggregateInput
    _sum?: Comments2SumOrderByAggregateInput
  }

  export type Comments2ScalarWhereWithAggregatesInput = {
    AND?: Comments2ScalarWhereWithAggregatesInput | Comments2ScalarWhereWithAggregatesInput[]
    OR?: Comments2ScalarWhereWithAggregatesInput[]
    NOT?: Comments2ScalarWhereWithAggregatesInput | Comments2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments2"> | number
    postId?: IntWithAggregatesFilter<"Comments2"> | number
    name?: StringWithAggregatesFilter<"Comments2"> | string
    email?: StringWithAggregatesFilter<"Comments2"> | string
    body?: StringWithAggregatesFilter<"Comments2"> | string
  }

  export type Company2WhereInput = {
    AND?: Company2WhereInput | Company2WhereInput[]
    OR?: Company2WhereInput[]
    NOT?: Company2WhereInput | Company2WhereInput[]
    id?: IntFilter<"Company2"> | number
    userId?: IntFilter<"Company2"> | number
    name?: StringFilter<"Company2"> | string
    catchPhrase?: StringFilter<"Company2"> | string
    bs?: StringFilter<"Company2"> | string
    users2?: XOR<Users2ScalarRelationFilter, Users2WhereInput>
  }

  export type Company2OrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    catchPhrase?: SortOrder
    bs?: SortOrder
    users2?: Users2OrderByWithRelationInput
  }

  export type Company2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: Company2WhereInput | Company2WhereInput[]
    OR?: Company2WhereInput[]
    NOT?: Company2WhereInput | Company2WhereInput[]
    name?: StringFilter<"Company2"> | string
    catchPhrase?: StringFilter<"Company2"> | string
    bs?: StringFilter<"Company2"> | string
    users2?: XOR<Users2ScalarRelationFilter, Users2WhereInput>
  }, "id" | "userId">

  export type Company2OrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    catchPhrase?: SortOrder
    bs?: SortOrder
    _count?: Company2CountOrderByAggregateInput
    _avg?: Company2AvgOrderByAggregateInput
    _max?: Company2MaxOrderByAggregateInput
    _min?: Company2MinOrderByAggregateInput
    _sum?: Company2SumOrderByAggregateInput
  }

  export type Company2ScalarWhereWithAggregatesInput = {
    AND?: Company2ScalarWhereWithAggregatesInput | Company2ScalarWhereWithAggregatesInput[]
    OR?: Company2ScalarWhereWithAggregatesInput[]
    NOT?: Company2ScalarWhereWithAggregatesInput | Company2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company2"> | number
    userId?: IntWithAggregatesFilter<"Company2"> | number
    name?: StringWithAggregatesFilter<"Company2"> | string
    catchPhrase?: StringWithAggregatesFilter<"Company2"> | string
    bs?: StringWithAggregatesFilter<"Company2"> | string
  }

  export type Geo2WhereInput = {
    AND?: Geo2WhereInput | Geo2WhereInput[]
    OR?: Geo2WhereInput[]
    NOT?: Geo2WhereInput | Geo2WhereInput[]
    id?: IntFilter<"Geo2"> | number
    address2Id?: IntFilter<"Geo2"> | number
    lat?: StringFilter<"Geo2"> | string
    lng?: StringFilter<"Geo2"> | string
    address2?: XOR<Address2ScalarRelationFilter, Address2WhereInput>
  }

  export type Geo2OrderByWithRelationInput = {
    id?: SortOrder
    address2Id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address2?: Address2OrderByWithRelationInput
  }

  export type Geo2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address2Id?: number
    AND?: Geo2WhereInput | Geo2WhereInput[]
    OR?: Geo2WhereInput[]
    NOT?: Geo2WhereInput | Geo2WhereInput[]
    lat?: StringFilter<"Geo2"> | string
    lng?: StringFilter<"Geo2"> | string
    address2?: XOR<Address2ScalarRelationFilter, Address2WhereInput>
  }, "id" | "address2Id">

  export type Geo2OrderByWithAggregationInput = {
    id?: SortOrder
    address2Id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    _count?: Geo2CountOrderByAggregateInput
    _avg?: Geo2AvgOrderByAggregateInput
    _max?: Geo2MaxOrderByAggregateInput
    _min?: Geo2MinOrderByAggregateInput
    _sum?: Geo2SumOrderByAggregateInput
  }

  export type Geo2ScalarWhereWithAggregatesInput = {
    AND?: Geo2ScalarWhereWithAggregatesInput | Geo2ScalarWhereWithAggregatesInput[]
    OR?: Geo2ScalarWhereWithAggregatesInput[]
    NOT?: Geo2ScalarWhereWithAggregatesInput | Geo2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Geo2"> | number
    address2Id?: IntWithAggregatesFilter<"Geo2"> | number
    lat?: StringWithAggregatesFilter<"Geo2"> | string
    lng?: StringWithAggregatesFilter<"Geo2"> | string
  }

  export type Address2WhereInput = {
    AND?: Address2WhereInput | Address2WhereInput[]
    OR?: Address2WhereInput[]
    NOT?: Address2WhereInput | Address2WhereInput[]
    id?: IntFilter<"Address2"> | number
    street?: StringFilter<"Address2"> | string
    suite?: StringFilter<"Address2"> | string
    city?: StringFilter<"Address2"> | string
    zipcode?: StringFilter<"Address2"> | string
    userId?: IntFilter<"Address2"> | number
    geo?: XOR<Geo2NullableScalarRelationFilter, Geo2WhereInput> | null
    users?: XOR<Users2ScalarRelationFilter, Users2WhereInput>
  }

  export type Address2OrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    suite?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    userId?: SortOrder
    geo?: Geo2OrderByWithRelationInput
    users?: Users2OrderByWithRelationInput
  }

  export type Address2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: Address2WhereInput | Address2WhereInput[]
    OR?: Address2WhereInput[]
    NOT?: Address2WhereInput | Address2WhereInput[]
    street?: StringFilter<"Address2"> | string
    suite?: StringFilter<"Address2"> | string
    city?: StringFilter<"Address2"> | string
    zipcode?: StringFilter<"Address2"> | string
    geo?: XOR<Geo2NullableScalarRelationFilter, Geo2WhereInput> | null
    users?: XOR<Users2ScalarRelationFilter, Users2WhereInput>
  }, "id" | "userId">

  export type Address2OrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    suite?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    userId?: SortOrder
    _count?: Address2CountOrderByAggregateInput
    _avg?: Address2AvgOrderByAggregateInput
    _max?: Address2MaxOrderByAggregateInput
    _min?: Address2MinOrderByAggregateInput
    _sum?: Address2SumOrderByAggregateInput
  }

  export type Address2ScalarWhereWithAggregatesInput = {
    AND?: Address2ScalarWhereWithAggregatesInput | Address2ScalarWhereWithAggregatesInput[]
    OR?: Address2ScalarWhereWithAggregatesInput[]
    NOT?: Address2ScalarWhereWithAggregatesInput | Address2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address2"> | number
    street?: StringWithAggregatesFilter<"Address2"> | string
    suite?: StringWithAggregatesFilter<"Address2"> | string
    city?: StringWithAggregatesFilter<"Address2"> | string
    zipcode?: StringWithAggregatesFilter<"Address2"> | string
    userId?: IntWithAggregatesFilter<"Address2"> | number
  }

  export type Group2WhereInput = {
    AND?: Group2WhereInput | Group2WhereInput[]
    OR?: Group2WhereInput[]
    NOT?: Group2WhereInput | Group2WhereInput[]
    id?: IntFilter<"Group2"> | number
    name?: StringFilter<"Group2"> | string
    userGroups?: UserGroups2ListRelationFilter
  }

  export type Group2OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userGroups?: UserGroups2OrderByRelationAggregateInput
  }

  export type Group2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Group2WhereInput | Group2WhereInput[]
    OR?: Group2WhereInput[]
    NOT?: Group2WhereInput | Group2WhereInput[]
    name?: StringFilter<"Group2"> | string
    userGroups?: UserGroups2ListRelationFilter
  }, "id">

  export type Group2OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: Group2CountOrderByAggregateInput
    _avg?: Group2AvgOrderByAggregateInput
    _max?: Group2MaxOrderByAggregateInput
    _min?: Group2MinOrderByAggregateInput
    _sum?: Group2SumOrderByAggregateInput
  }

  export type Group2ScalarWhereWithAggregatesInput = {
    AND?: Group2ScalarWhereWithAggregatesInput | Group2ScalarWhereWithAggregatesInput[]
    OR?: Group2ScalarWhereWithAggregatesInput[]
    NOT?: Group2ScalarWhereWithAggregatesInput | Group2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group2"> | number
    name?: StringWithAggregatesFilter<"Group2"> | string
  }

  export type Role2WhereInput = {
    AND?: Role2WhereInput | Role2WhereInput[]
    OR?: Role2WhereInput[]
    NOT?: Role2WhereInput | Role2WhereInput[]
    id?: IntFilter<"Role2"> | number
    role?: StringFilter<"Role2"> | string
    users2?: Users2ListRelationFilter
  }

  export type Role2OrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    users2?: Users2OrderByRelationAggregateInput
  }

  export type Role2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Role2WhereInput | Role2WhereInput[]
    OR?: Role2WhereInput[]
    NOT?: Role2WhereInput | Role2WhereInput[]
    role?: StringFilter<"Role2"> | string
    users2?: Users2ListRelationFilter
  }, "id">

  export type Role2OrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    _count?: Role2CountOrderByAggregateInput
    _avg?: Role2AvgOrderByAggregateInput
    _max?: Role2MaxOrderByAggregateInput
    _min?: Role2MinOrderByAggregateInput
    _sum?: Role2SumOrderByAggregateInput
  }

  export type Role2ScalarWhereWithAggregatesInput = {
    AND?: Role2ScalarWhereWithAggregatesInput | Role2ScalarWhereWithAggregatesInput[]
    OR?: Role2ScalarWhereWithAggregatesInput[]
    NOT?: Role2ScalarWhereWithAggregatesInput | Role2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role2"> | number
    role?: StringWithAggregatesFilter<"Role2"> | string
  }

  export type UserGroups2WhereInput = {
    AND?: UserGroups2WhereInput | UserGroups2WhereInput[]
    OR?: UserGroups2WhereInput[]
    NOT?: UserGroups2WhereInput | UserGroups2WhereInput[]
    id?: IntFilter<"UserGroups2"> | number
    userId?: IntFilter<"UserGroups2"> | number
    groupId?: IntFilter<"UserGroups2"> | number
    joinedAt?: DateTimeFilter<"UserGroups2"> | Date | string
    isModerator?: BoolFilter<"UserGroups2"> | boolean
    users2?: XOR<Users2ScalarRelationFilter, Users2WhereInput>
    groups2?: XOR<Group2ScalarRelationFilter, Group2WhereInput>
  }

  export type UserGroups2OrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    isModerator?: SortOrder
    users2?: Users2OrderByWithRelationInput
    groups2?: Group2OrderByWithRelationInput
  }

  export type UserGroups2WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_groupId?: UserGroups2UserIdGroupIdCompoundUniqueInput
    AND?: UserGroups2WhereInput | UserGroups2WhereInput[]
    OR?: UserGroups2WhereInput[]
    NOT?: UserGroups2WhereInput | UserGroups2WhereInput[]
    userId?: IntFilter<"UserGroups2"> | number
    groupId?: IntFilter<"UserGroups2"> | number
    joinedAt?: DateTimeFilter<"UserGroups2"> | Date | string
    isModerator?: BoolFilter<"UserGroups2"> | boolean
    users2?: XOR<Users2ScalarRelationFilter, Users2WhereInput>
    groups2?: XOR<Group2ScalarRelationFilter, Group2WhereInput>
  }, "id" | "userId_groupId">

  export type UserGroups2OrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    isModerator?: SortOrder
    _count?: UserGroups2CountOrderByAggregateInput
    _avg?: UserGroups2AvgOrderByAggregateInput
    _max?: UserGroups2MaxOrderByAggregateInput
    _min?: UserGroups2MinOrderByAggregateInput
    _sum?: UserGroups2SumOrderByAggregateInput
  }

  export type UserGroups2ScalarWhereWithAggregatesInput = {
    AND?: UserGroups2ScalarWhereWithAggregatesInput | UserGroups2ScalarWhereWithAggregatesInput[]
    OR?: UserGroups2ScalarWhereWithAggregatesInput[]
    NOT?: UserGroups2ScalarWhereWithAggregatesInput | UserGroups2ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserGroups2"> | number
    userId?: IntWithAggregatesFilter<"UserGroups2"> | number
    groupId?: IntWithAggregatesFilter<"UserGroups2"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"UserGroups2"> | Date | string
    isModerator?: BoolWithAggregatesFilter<"UserGroups2"> | boolean
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Users2CreateInput = {
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2CreateNestedOneWithoutUsersInput
    company?: Company2CreateNestedOneWithoutUsers2Input
    post?: Post2CreateNestedManyWithoutUsersInput
    roles?: Role2CreateNestedManyWithoutUsers2Input
    userGroups?: UserGroups2CreateNestedManyWithoutUsers2Input
  }

  export type Users2UncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2UncheckedCreateNestedOneWithoutUsersInput
    company?: Company2UncheckedCreateNestedOneWithoutUsers2Input
    post?: Post2UncheckedCreateNestedManyWithoutUsersInput
    roles?: Role2UncheckedCreateNestedManyWithoutUsers2Input
    userGroups?: UserGroups2UncheckedCreateNestedManyWithoutUsers2Input
  }

  export type Users2UpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UpdateOneWithoutUsersNestedInput
    company?: Company2UpdateOneWithoutUsers2NestedInput
    post?: Post2UpdateManyWithoutUsersNestedInput
    roles?: Role2UpdateManyWithoutUsers2NestedInput
    userGroups?: UserGroups2UpdateManyWithoutUsers2NestedInput
  }

  export type Users2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UncheckedUpdateOneWithoutUsersNestedInput
    company?: Company2UncheckedUpdateOneWithoutUsers2NestedInput
    post?: Post2UncheckedUpdateManyWithoutUsersNestedInput
    roles?: Role2UncheckedUpdateManyWithoutUsers2NestedInput
    userGroups?: UserGroups2UncheckedUpdateManyWithoutUsers2NestedInput
  }

  export type Users2CreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
  }

  export type Users2UpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Users2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Post2CreateInput = {
    title: string
    body: string
    users: Users2CreateNestedOneWithoutPostInput
    comments?: Comments2CreateNestedManyWithoutPostInput
  }

  export type Post2UncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    body: string
    comments?: Comments2UncheckedCreateNestedManyWithoutPostInput
  }

  export type Post2UpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    users?: Users2UpdateOneRequiredWithoutPostNestedInput
    comments?: Comments2UpdateManyWithoutPostNestedInput
  }

  export type Post2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    comments?: Comments2UncheckedUpdateManyWithoutPostNestedInput
  }

  export type Post2CreateManyInput = {
    id?: number
    userId: number
    title: string
    body: string
  }

  export type Post2UpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Post2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Comments2CreateInput = {
    name: string
    email: string
    body: string
    post: Post2CreateNestedOneWithoutCommentsInput
  }

  export type Comments2UncheckedCreateInput = {
    id?: number
    postId: number
    name: string
    email: string
    body: string
  }

  export type Comments2UpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    post?: Post2UpdateOneRequiredWithoutCommentsNestedInput
  }

  export type Comments2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Comments2CreateManyInput = {
    id?: number
    postId: number
    name: string
    email: string
    body: string
  }

  export type Comments2UpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Comments2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Company2CreateInput = {
    name: string
    catchPhrase: string
    bs: string
    users2: Users2CreateNestedOneWithoutCompanyInput
  }

  export type Company2UncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    catchPhrase: string
    bs: string
  }

  export type Company2UpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    catchPhrase?: StringFieldUpdateOperationsInput | string
    bs?: StringFieldUpdateOperationsInput | string
    users2?: Users2UpdateOneRequiredWithoutCompanyNestedInput
  }

  export type Company2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    catchPhrase?: StringFieldUpdateOperationsInput | string
    bs?: StringFieldUpdateOperationsInput | string
  }

  export type Company2CreateManyInput = {
    id?: number
    userId: number
    name: string
    catchPhrase: string
    bs: string
  }

  export type Company2UpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    catchPhrase?: StringFieldUpdateOperationsInput | string
    bs?: StringFieldUpdateOperationsInput | string
  }

  export type Company2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    catchPhrase?: StringFieldUpdateOperationsInput | string
    bs?: StringFieldUpdateOperationsInput | string
  }

  export type Geo2CreateInput = {
    lat: string
    lng: string
    address2: Address2CreateNestedOneWithoutGeoInput
  }

  export type Geo2UncheckedCreateInput = {
    id?: number
    address2Id: number
    lat: string
    lng: string
  }

  export type Geo2UpdateInput = {
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
    address2?: Address2UpdateOneRequiredWithoutGeoNestedInput
  }

  export type Geo2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address2Id?: IntFieldUpdateOperationsInput | number
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
  }

  export type Geo2CreateManyInput = {
    id?: number
    address2Id: number
    lat: string
    lng: string
  }

  export type Geo2UpdateManyMutationInput = {
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
  }

  export type Geo2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address2Id?: IntFieldUpdateOperationsInput | number
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
  }

  export type Address2CreateInput = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo?: Geo2CreateNestedOneWithoutAddress2Input
    users: Users2CreateNestedOneWithoutAddressInput
  }

  export type Address2UncheckedCreateInput = {
    id?: number
    street: string
    suite: string
    city: string
    zipcode: string
    userId: number
    geo?: Geo2UncheckedCreateNestedOneWithoutAddress2Input
  }

  export type Address2UpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    suite?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    geo?: Geo2UpdateOneWithoutAddress2NestedInput
    users?: Users2UpdateOneRequiredWithoutAddressNestedInput
  }

  export type Address2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    suite?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    geo?: Geo2UncheckedUpdateOneWithoutAddress2NestedInput
  }

  export type Address2CreateManyInput = {
    id?: number
    street: string
    suite: string
    city: string
    zipcode: string
    userId: number
  }

  export type Address2UpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    suite?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
  }

  export type Address2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    suite?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type Group2CreateInput = {
    name: string
    userGroups?: UserGroups2CreateNestedManyWithoutGroups2Input
  }

  export type Group2UncheckedCreateInput = {
    id?: number
    name: string
    userGroups?: UserGroups2UncheckedCreateNestedManyWithoutGroups2Input
  }

  export type Group2UpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userGroups?: UserGroups2UpdateManyWithoutGroups2NestedInput
  }

  export type Group2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userGroups?: UserGroups2UncheckedUpdateManyWithoutGroups2NestedInput
  }

  export type Group2CreateManyInput = {
    id?: number
    name: string
  }

  export type Group2UpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Group2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Role2CreateInput = {
    role: string
    users2?: Users2CreateNestedManyWithoutRolesInput
  }

  export type Role2UncheckedCreateInput = {
    id?: number
    role: string
    users2?: Users2UncheckedCreateNestedManyWithoutRolesInput
  }

  export type Role2UpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    users2?: Users2UpdateManyWithoutRolesNestedInput
  }

  export type Role2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    users2?: Users2UncheckedUpdateManyWithoutRolesNestedInput
  }

  export type Role2CreateManyInput = {
    id?: number
    role: string
  }

  export type Role2UpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type Role2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserGroups2CreateInput = {
    joinedAt?: Date | string
    isModerator?: boolean
    users2: Users2CreateNestedOneWithoutUserGroupsInput
    groups2: Group2CreateNestedOneWithoutUserGroupsInput
  }

  export type UserGroups2UncheckedCreateInput = {
    id?: number
    userId: number
    groupId: number
    joinedAt?: Date | string
    isModerator?: boolean
  }

  export type UserGroups2UpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
    users2?: Users2UpdateOneRequiredWithoutUserGroupsNestedInput
    groups2?: Group2UpdateOneRequiredWithoutUserGroupsNestedInput
  }

  export type UserGroups2UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGroups2CreateManyInput = {
    id?: number
    userId: number
    groupId: number
    joinedAt?: Date | string
    isModerator?: boolean
  }

  export type UserGroups2UpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGroups2UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Address2NullableScalarRelationFilter = {
    is?: Address2WhereInput | null
    isNot?: Address2WhereInput | null
  }

  export type Company2NullableScalarRelationFilter = {
    is?: Company2WhereInput | null
    isNot?: Company2WhereInput | null
  }

  export type Post2ListRelationFilter = {
    every?: Post2WhereInput
    some?: Post2WhereInput
    none?: Post2WhereInput
  }

  export type Role2ListRelationFilter = {
    every?: Role2WhereInput
    some?: Role2WhereInput
    none?: Role2WhereInput
  }

  export type UserGroups2ListRelationFilter = {
    every?: UserGroups2WhereInput
    some?: UserGroups2WhereInput
    none?: UserGroups2WhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Post2OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Role2OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGroups2OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Users2CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    deleteAt?: SortOrder
    deleted?: SortOrder
  }

  export type Users2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Users2MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    deleteAt?: SortOrder
    deleted?: SortOrder
  }

  export type Users2MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    deleteAt?: SortOrder
    deleted?: SortOrder
  }

  export type Users2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Users2ScalarRelationFilter = {
    is?: Users2WhereInput
    isNot?: Users2WhereInput
  }

  export type Comments2ListRelationFilter = {
    every?: Comments2WhereInput
    some?: Comments2WhereInput
    none?: Comments2WhereInput
  }

  export type Comments2OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Post2CountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
  }

  export type Post2AvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Post2MaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
  }

  export type Post2MinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    body?: SortOrder
  }

  export type Post2SumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Post2ScalarRelationFilter = {
    is?: Post2WhereInput
    isNot?: Post2WhereInput
  }

  export type Comments2CountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    body?: SortOrder
  }

  export type Comments2AvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type Comments2MaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    body?: SortOrder
  }

  export type Comments2MinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    body?: SortOrder
  }

  export type Comments2SumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type Company2CountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    catchPhrase?: SortOrder
    bs?: SortOrder
  }

  export type Company2AvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Company2MaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    catchPhrase?: SortOrder
    bs?: SortOrder
  }

  export type Company2MinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    catchPhrase?: SortOrder
    bs?: SortOrder
  }

  export type Company2SumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Address2ScalarRelationFilter = {
    is?: Address2WhereInput
    isNot?: Address2WhereInput
  }

  export type Geo2CountOrderByAggregateInput = {
    id?: SortOrder
    address2Id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type Geo2AvgOrderByAggregateInput = {
    id?: SortOrder
    address2Id?: SortOrder
  }

  export type Geo2MaxOrderByAggregateInput = {
    id?: SortOrder
    address2Id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type Geo2MinOrderByAggregateInput = {
    id?: SortOrder
    address2Id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type Geo2SumOrderByAggregateInput = {
    id?: SortOrder
    address2Id?: SortOrder
  }

  export type Geo2NullableScalarRelationFilter = {
    is?: Geo2WhereInput | null
    isNot?: Geo2WhereInput | null
  }

  export type Address2CountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    suite?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    userId?: SortOrder
  }

  export type Address2AvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Address2MaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    suite?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    userId?: SortOrder
  }

  export type Address2MinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    suite?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    userId?: SortOrder
  }

  export type Address2SumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Group2CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Group2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Group2MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Group2MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Group2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Users2ListRelationFilter = {
    every?: Users2WhereInput
    some?: Users2WhereInput
    none?: Users2WhereInput
  }

  export type Users2OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Role2CountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type Role2AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Role2MaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type Role2MinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type Role2SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Group2ScalarRelationFilter = {
    is?: Group2WhereInput
    isNot?: Group2WhereInput
  }

  export type UserGroups2UserIdGroupIdCompoundUniqueInput = {
    userId: number
    groupId: number
  }

  export type UserGroups2CountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    isModerator?: SortOrder
  }

  export type UserGroups2AvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type UserGroups2MaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    isModerator?: SortOrder
  }

  export type UserGroups2MinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    isModerator?: SortOrder
  }

  export type UserGroups2SumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Address2CreateNestedOneWithoutUsersInput = {
    create?: XOR<Address2CreateWithoutUsersInput, Address2UncheckedCreateWithoutUsersInput>
    connectOrCreate?: Address2CreateOrConnectWithoutUsersInput
    connect?: Address2WhereUniqueInput
  }

  export type Company2CreateNestedOneWithoutUsers2Input = {
    create?: XOR<Company2CreateWithoutUsers2Input, Company2UncheckedCreateWithoutUsers2Input>
    connectOrCreate?: Company2CreateOrConnectWithoutUsers2Input
    connect?: Company2WhereUniqueInput
  }

  export type Post2CreateNestedManyWithoutUsersInput = {
    create?: XOR<Post2CreateWithoutUsersInput, Post2UncheckedCreateWithoutUsersInput> | Post2CreateWithoutUsersInput[] | Post2UncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Post2CreateOrConnectWithoutUsersInput | Post2CreateOrConnectWithoutUsersInput[]
    createMany?: Post2CreateManyUsersInputEnvelope
    connect?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
  }

  export type Role2CreateNestedManyWithoutUsers2Input = {
    create?: XOR<Role2CreateWithoutUsers2Input, Role2UncheckedCreateWithoutUsers2Input> | Role2CreateWithoutUsers2Input[] | Role2UncheckedCreateWithoutUsers2Input[]
    connectOrCreate?: Role2CreateOrConnectWithoutUsers2Input | Role2CreateOrConnectWithoutUsers2Input[]
    connect?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
  }

  export type UserGroups2CreateNestedManyWithoutUsers2Input = {
    create?: XOR<UserGroups2CreateWithoutUsers2Input, UserGroups2UncheckedCreateWithoutUsers2Input> | UserGroups2CreateWithoutUsers2Input[] | UserGroups2UncheckedCreateWithoutUsers2Input[]
    connectOrCreate?: UserGroups2CreateOrConnectWithoutUsers2Input | UserGroups2CreateOrConnectWithoutUsers2Input[]
    createMany?: UserGroups2CreateManyUsers2InputEnvelope
    connect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
  }

  export type Address2UncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<Address2CreateWithoutUsersInput, Address2UncheckedCreateWithoutUsersInput>
    connectOrCreate?: Address2CreateOrConnectWithoutUsersInput
    connect?: Address2WhereUniqueInput
  }

  export type Company2UncheckedCreateNestedOneWithoutUsers2Input = {
    create?: XOR<Company2CreateWithoutUsers2Input, Company2UncheckedCreateWithoutUsers2Input>
    connectOrCreate?: Company2CreateOrConnectWithoutUsers2Input
    connect?: Company2WhereUniqueInput
  }

  export type Post2UncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Post2CreateWithoutUsersInput, Post2UncheckedCreateWithoutUsersInput> | Post2CreateWithoutUsersInput[] | Post2UncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Post2CreateOrConnectWithoutUsersInput | Post2CreateOrConnectWithoutUsersInput[]
    createMany?: Post2CreateManyUsersInputEnvelope
    connect?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
  }

  export type Role2UncheckedCreateNestedManyWithoutUsers2Input = {
    create?: XOR<Role2CreateWithoutUsers2Input, Role2UncheckedCreateWithoutUsers2Input> | Role2CreateWithoutUsers2Input[] | Role2UncheckedCreateWithoutUsers2Input[]
    connectOrCreate?: Role2CreateOrConnectWithoutUsers2Input | Role2CreateOrConnectWithoutUsers2Input[]
    connect?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
  }

  export type UserGroups2UncheckedCreateNestedManyWithoutUsers2Input = {
    create?: XOR<UserGroups2CreateWithoutUsers2Input, UserGroups2UncheckedCreateWithoutUsers2Input> | UserGroups2CreateWithoutUsers2Input[] | UserGroups2UncheckedCreateWithoutUsers2Input[]
    connectOrCreate?: UserGroups2CreateOrConnectWithoutUsers2Input | UserGroups2CreateOrConnectWithoutUsers2Input[]
    createMany?: UserGroups2CreateManyUsers2InputEnvelope
    connect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Address2UpdateOneWithoutUsersNestedInput = {
    create?: XOR<Address2CreateWithoutUsersInput, Address2UncheckedCreateWithoutUsersInput>
    connectOrCreate?: Address2CreateOrConnectWithoutUsersInput
    upsert?: Address2UpsertWithoutUsersInput
    disconnect?: Address2WhereInput | boolean
    delete?: Address2WhereInput | boolean
    connect?: Address2WhereUniqueInput
    update?: XOR<XOR<Address2UpdateToOneWithWhereWithoutUsersInput, Address2UpdateWithoutUsersInput>, Address2UncheckedUpdateWithoutUsersInput>
  }

  export type Company2UpdateOneWithoutUsers2NestedInput = {
    create?: XOR<Company2CreateWithoutUsers2Input, Company2UncheckedCreateWithoutUsers2Input>
    connectOrCreate?: Company2CreateOrConnectWithoutUsers2Input
    upsert?: Company2UpsertWithoutUsers2Input
    disconnect?: Company2WhereInput | boolean
    delete?: Company2WhereInput | boolean
    connect?: Company2WhereUniqueInput
    update?: XOR<XOR<Company2UpdateToOneWithWhereWithoutUsers2Input, Company2UpdateWithoutUsers2Input>, Company2UncheckedUpdateWithoutUsers2Input>
  }

  export type Post2UpdateManyWithoutUsersNestedInput = {
    create?: XOR<Post2CreateWithoutUsersInput, Post2UncheckedCreateWithoutUsersInput> | Post2CreateWithoutUsersInput[] | Post2UncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Post2CreateOrConnectWithoutUsersInput | Post2CreateOrConnectWithoutUsersInput[]
    upsert?: Post2UpsertWithWhereUniqueWithoutUsersInput | Post2UpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Post2CreateManyUsersInputEnvelope
    set?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
    disconnect?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
    delete?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
    connect?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
    update?: Post2UpdateWithWhereUniqueWithoutUsersInput | Post2UpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Post2UpdateManyWithWhereWithoutUsersInput | Post2UpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Post2ScalarWhereInput | Post2ScalarWhereInput[]
  }

  export type Role2UpdateManyWithoutUsers2NestedInput = {
    create?: XOR<Role2CreateWithoutUsers2Input, Role2UncheckedCreateWithoutUsers2Input> | Role2CreateWithoutUsers2Input[] | Role2UncheckedCreateWithoutUsers2Input[]
    connectOrCreate?: Role2CreateOrConnectWithoutUsers2Input | Role2CreateOrConnectWithoutUsers2Input[]
    upsert?: Role2UpsertWithWhereUniqueWithoutUsers2Input | Role2UpsertWithWhereUniqueWithoutUsers2Input[]
    set?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
    disconnect?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
    delete?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
    connect?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
    update?: Role2UpdateWithWhereUniqueWithoutUsers2Input | Role2UpdateWithWhereUniqueWithoutUsers2Input[]
    updateMany?: Role2UpdateManyWithWhereWithoutUsers2Input | Role2UpdateManyWithWhereWithoutUsers2Input[]
    deleteMany?: Role2ScalarWhereInput | Role2ScalarWhereInput[]
  }

  export type UserGroups2UpdateManyWithoutUsers2NestedInput = {
    create?: XOR<UserGroups2CreateWithoutUsers2Input, UserGroups2UncheckedCreateWithoutUsers2Input> | UserGroups2CreateWithoutUsers2Input[] | UserGroups2UncheckedCreateWithoutUsers2Input[]
    connectOrCreate?: UserGroups2CreateOrConnectWithoutUsers2Input | UserGroups2CreateOrConnectWithoutUsers2Input[]
    upsert?: UserGroups2UpsertWithWhereUniqueWithoutUsers2Input | UserGroups2UpsertWithWhereUniqueWithoutUsers2Input[]
    createMany?: UserGroups2CreateManyUsers2InputEnvelope
    set?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    disconnect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    delete?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    connect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    update?: UserGroups2UpdateWithWhereUniqueWithoutUsers2Input | UserGroups2UpdateWithWhereUniqueWithoutUsers2Input[]
    updateMany?: UserGroups2UpdateManyWithWhereWithoutUsers2Input | UserGroups2UpdateManyWithWhereWithoutUsers2Input[]
    deleteMany?: UserGroups2ScalarWhereInput | UserGroups2ScalarWhereInput[]
  }

  export type Address2UncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<Address2CreateWithoutUsersInput, Address2UncheckedCreateWithoutUsersInput>
    connectOrCreate?: Address2CreateOrConnectWithoutUsersInput
    upsert?: Address2UpsertWithoutUsersInput
    disconnect?: Address2WhereInput | boolean
    delete?: Address2WhereInput | boolean
    connect?: Address2WhereUniqueInput
    update?: XOR<XOR<Address2UpdateToOneWithWhereWithoutUsersInput, Address2UpdateWithoutUsersInput>, Address2UncheckedUpdateWithoutUsersInput>
  }

  export type Company2UncheckedUpdateOneWithoutUsers2NestedInput = {
    create?: XOR<Company2CreateWithoutUsers2Input, Company2UncheckedCreateWithoutUsers2Input>
    connectOrCreate?: Company2CreateOrConnectWithoutUsers2Input
    upsert?: Company2UpsertWithoutUsers2Input
    disconnect?: Company2WhereInput | boolean
    delete?: Company2WhereInput | boolean
    connect?: Company2WhereUniqueInput
    update?: XOR<XOR<Company2UpdateToOneWithWhereWithoutUsers2Input, Company2UpdateWithoutUsers2Input>, Company2UncheckedUpdateWithoutUsers2Input>
  }

  export type Post2UncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Post2CreateWithoutUsersInput, Post2UncheckedCreateWithoutUsersInput> | Post2CreateWithoutUsersInput[] | Post2UncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Post2CreateOrConnectWithoutUsersInput | Post2CreateOrConnectWithoutUsersInput[]
    upsert?: Post2UpsertWithWhereUniqueWithoutUsersInput | Post2UpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Post2CreateManyUsersInputEnvelope
    set?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
    disconnect?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
    delete?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
    connect?: Post2WhereUniqueInput | Post2WhereUniqueInput[]
    update?: Post2UpdateWithWhereUniqueWithoutUsersInput | Post2UpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Post2UpdateManyWithWhereWithoutUsersInput | Post2UpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Post2ScalarWhereInput | Post2ScalarWhereInput[]
  }

  export type Role2UncheckedUpdateManyWithoutUsers2NestedInput = {
    create?: XOR<Role2CreateWithoutUsers2Input, Role2UncheckedCreateWithoutUsers2Input> | Role2CreateWithoutUsers2Input[] | Role2UncheckedCreateWithoutUsers2Input[]
    connectOrCreate?: Role2CreateOrConnectWithoutUsers2Input | Role2CreateOrConnectWithoutUsers2Input[]
    upsert?: Role2UpsertWithWhereUniqueWithoutUsers2Input | Role2UpsertWithWhereUniqueWithoutUsers2Input[]
    set?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
    disconnect?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
    delete?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
    connect?: Role2WhereUniqueInput | Role2WhereUniqueInput[]
    update?: Role2UpdateWithWhereUniqueWithoutUsers2Input | Role2UpdateWithWhereUniqueWithoutUsers2Input[]
    updateMany?: Role2UpdateManyWithWhereWithoutUsers2Input | Role2UpdateManyWithWhereWithoutUsers2Input[]
    deleteMany?: Role2ScalarWhereInput | Role2ScalarWhereInput[]
  }

  export type UserGroups2UncheckedUpdateManyWithoutUsers2NestedInput = {
    create?: XOR<UserGroups2CreateWithoutUsers2Input, UserGroups2UncheckedCreateWithoutUsers2Input> | UserGroups2CreateWithoutUsers2Input[] | UserGroups2UncheckedCreateWithoutUsers2Input[]
    connectOrCreate?: UserGroups2CreateOrConnectWithoutUsers2Input | UserGroups2CreateOrConnectWithoutUsers2Input[]
    upsert?: UserGroups2UpsertWithWhereUniqueWithoutUsers2Input | UserGroups2UpsertWithWhereUniqueWithoutUsers2Input[]
    createMany?: UserGroups2CreateManyUsers2InputEnvelope
    set?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    disconnect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    delete?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    connect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    update?: UserGroups2UpdateWithWhereUniqueWithoutUsers2Input | UserGroups2UpdateWithWhereUniqueWithoutUsers2Input[]
    updateMany?: UserGroups2UpdateManyWithWhereWithoutUsers2Input | UserGroups2UpdateManyWithWhereWithoutUsers2Input[]
    deleteMany?: UserGroups2ScalarWhereInput | UserGroups2ScalarWhereInput[]
  }

  export type Users2CreateNestedOneWithoutPostInput = {
    create?: XOR<Users2CreateWithoutPostInput, Users2UncheckedCreateWithoutPostInput>
    connectOrCreate?: Users2CreateOrConnectWithoutPostInput
    connect?: Users2WhereUniqueInput
  }

  export type Comments2CreateNestedManyWithoutPostInput = {
    create?: XOR<Comments2CreateWithoutPostInput, Comments2UncheckedCreateWithoutPostInput> | Comments2CreateWithoutPostInput[] | Comments2UncheckedCreateWithoutPostInput[]
    connectOrCreate?: Comments2CreateOrConnectWithoutPostInput | Comments2CreateOrConnectWithoutPostInput[]
    createMany?: Comments2CreateManyPostInputEnvelope
    connect?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
  }

  export type Comments2UncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Comments2CreateWithoutPostInput, Comments2UncheckedCreateWithoutPostInput> | Comments2CreateWithoutPostInput[] | Comments2UncheckedCreateWithoutPostInput[]
    connectOrCreate?: Comments2CreateOrConnectWithoutPostInput | Comments2CreateOrConnectWithoutPostInput[]
    createMany?: Comments2CreateManyPostInputEnvelope
    connect?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
  }

  export type Users2UpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<Users2CreateWithoutPostInput, Users2UncheckedCreateWithoutPostInput>
    connectOrCreate?: Users2CreateOrConnectWithoutPostInput
    upsert?: Users2UpsertWithoutPostInput
    connect?: Users2WhereUniqueInput
    update?: XOR<XOR<Users2UpdateToOneWithWhereWithoutPostInput, Users2UpdateWithoutPostInput>, Users2UncheckedUpdateWithoutPostInput>
  }

  export type Comments2UpdateManyWithoutPostNestedInput = {
    create?: XOR<Comments2CreateWithoutPostInput, Comments2UncheckedCreateWithoutPostInput> | Comments2CreateWithoutPostInput[] | Comments2UncheckedCreateWithoutPostInput[]
    connectOrCreate?: Comments2CreateOrConnectWithoutPostInput | Comments2CreateOrConnectWithoutPostInput[]
    upsert?: Comments2UpsertWithWhereUniqueWithoutPostInput | Comments2UpsertWithWhereUniqueWithoutPostInput[]
    createMany?: Comments2CreateManyPostInputEnvelope
    set?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
    disconnect?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
    delete?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
    connect?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
    update?: Comments2UpdateWithWhereUniqueWithoutPostInput | Comments2UpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: Comments2UpdateManyWithWhereWithoutPostInput | Comments2UpdateManyWithWhereWithoutPostInput[]
    deleteMany?: Comments2ScalarWhereInput | Comments2ScalarWhereInput[]
  }

  export type Comments2UncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Comments2CreateWithoutPostInput, Comments2UncheckedCreateWithoutPostInput> | Comments2CreateWithoutPostInput[] | Comments2UncheckedCreateWithoutPostInput[]
    connectOrCreate?: Comments2CreateOrConnectWithoutPostInput | Comments2CreateOrConnectWithoutPostInput[]
    upsert?: Comments2UpsertWithWhereUniqueWithoutPostInput | Comments2UpsertWithWhereUniqueWithoutPostInput[]
    createMany?: Comments2CreateManyPostInputEnvelope
    set?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
    disconnect?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
    delete?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
    connect?: Comments2WhereUniqueInput | Comments2WhereUniqueInput[]
    update?: Comments2UpdateWithWhereUniqueWithoutPostInput | Comments2UpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: Comments2UpdateManyWithWhereWithoutPostInput | Comments2UpdateManyWithWhereWithoutPostInput[]
    deleteMany?: Comments2ScalarWhereInput | Comments2ScalarWhereInput[]
  }

  export type Post2CreateNestedOneWithoutCommentsInput = {
    create?: XOR<Post2CreateWithoutCommentsInput, Post2UncheckedCreateWithoutCommentsInput>
    connectOrCreate?: Post2CreateOrConnectWithoutCommentsInput
    connect?: Post2WhereUniqueInput
  }

  export type Post2UpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<Post2CreateWithoutCommentsInput, Post2UncheckedCreateWithoutCommentsInput>
    connectOrCreate?: Post2CreateOrConnectWithoutCommentsInput
    upsert?: Post2UpsertWithoutCommentsInput
    connect?: Post2WhereUniqueInput
    update?: XOR<XOR<Post2UpdateToOneWithWhereWithoutCommentsInput, Post2UpdateWithoutCommentsInput>, Post2UncheckedUpdateWithoutCommentsInput>
  }

  export type Users2CreateNestedOneWithoutCompanyInput = {
    create?: XOR<Users2CreateWithoutCompanyInput, Users2UncheckedCreateWithoutCompanyInput>
    connectOrCreate?: Users2CreateOrConnectWithoutCompanyInput
    connect?: Users2WhereUniqueInput
  }

  export type Users2UpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<Users2CreateWithoutCompanyInput, Users2UncheckedCreateWithoutCompanyInput>
    connectOrCreate?: Users2CreateOrConnectWithoutCompanyInput
    upsert?: Users2UpsertWithoutCompanyInput
    connect?: Users2WhereUniqueInput
    update?: XOR<XOR<Users2UpdateToOneWithWhereWithoutCompanyInput, Users2UpdateWithoutCompanyInput>, Users2UncheckedUpdateWithoutCompanyInput>
  }

  export type Address2CreateNestedOneWithoutGeoInput = {
    create?: XOR<Address2CreateWithoutGeoInput, Address2UncheckedCreateWithoutGeoInput>
    connectOrCreate?: Address2CreateOrConnectWithoutGeoInput
    connect?: Address2WhereUniqueInput
  }

  export type Address2UpdateOneRequiredWithoutGeoNestedInput = {
    create?: XOR<Address2CreateWithoutGeoInput, Address2UncheckedCreateWithoutGeoInput>
    connectOrCreate?: Address2CreateOrConnectWithoutGeoInput
    upsert?: Address2UpsertWithoutGeoInput
    connect?: Address2WhereUniqueInput
    update?: XOR<XOR<Address2UpdateToOneWithWhereWithoutGeoInput, Address2UpdateWithoutGeoInput>, Address2UncheckedUpdateWithoutGeoInput>
  }

  export type Geo2CreateNestedOneWithoutAddress2Input = {
    create?: XOR<Geo2CreateWithoutAddress2Input, Geo2UncheckedCreateWithoutAddress2Input>
    connectOrCreate?: Geo2CreateOrConnectWithoutAddress2Input
    connect?: Geo2WhereUniqueInput
  }

  export type Users2CreateNestedOneWithoutAddressInput = {
    create?: XOR<Users2CreateWithoutAddressInput, Users2UncheckedCreateWithoutAddressInput>
    connectOrCreate?: Users2CreateOrConnectWithoutAddressInput
    connect?: Users2WhereUniqueInput
  }

  export type Geo2UncheckedCreateNestedOneWithoutAddress2Input = {
    create?: XOR<Geo2CreateWithoutAddress2Input, Geo2UncheckedCreateWithoutAddress2Input>
    connectOrCreate?: Geo2CreateOrConnectWithoutAddress2Input
    connect?: Geo2WhereUniqueInput
  }

  export type Geo2UpdateOneWithoutAddress2NestedInput = {
    create?: XOR<Geo2CreateWithoutAddress2Input, Geo2UncheckedCreateWithoutAddress2Input>
    connectOrCreate?: Geo2CreateOrConnectWithoutAddress2Input
    upsert?: Geo2UpsertWithoutAddress2Input
    disconnect?: Geo2WhereInput | boolean
    delete?: Geo2WhereInput | boolean
    connect?: Geo2WhereUniqueInput
    update?: XOR<XOR<Geo2UpdateToOneWithWhereWithoutAddress2Input, Geo2UpdateWithoutAddress2Input>, Geo2UncheckedUpdateWithoutAddress2Input>
  }

  export type Users2UpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<Users2CreateWithoutAddressInput, Users2UncheckedCreateWithoutAddressInput>
    connectOrCreate?: Users2CreateOrConnectWithoutAddressInput
    upsert?: Users2UpsertWithoutAddressInput
    connect?: Users2WhereUniqueInput
    update?: XOR<XOR<Users2UpdateToOneWithWhereWithoutAddressInput, Users2UpdateWithoutAddressInput>, Users2UncheckedUpdateWithoutAddressInput>
  }

  export type Geo2UncheckedUpdateOneWithoutAddress2NestedInput = {
    create?: XOR<Geo2CreateWithoutAddress2Input, Geo2UncheckedCreateWithoutAddress2Input>
    connectOrCreate?: Geo2CreateOrConnectWithoutAddress2Input
    upsert?: Geo2UpsertWithoutAddress2Input
    disconnect?: Geo2WhereInput | boolean
    delete?: Geo2WhereInput | boolean
    connect?: Geo2WhereUniqueInput
    update?: XOR<XOR<Geo2UpdateToOneWithWhereWithoutAddress2Input, Geo2UpdateWithoutAddress2Input>, Geo2UncheckedUpdateWithoutAddress2Input>
  }

  export type UserGroups2CreateNestedManyWithoutGroups2Input = {
    create?: XOR<UserGroups2CreateWithoutGroups2Input, UserGroups2UncheckedCreateWithoutGroups2Input> | UserGroups2CreateWithoutGroups2Input[] | UserGroups2UncheckedCreateWithoutGroups2Input[]
    connectOrCreate?: UserGroups2CreateOrConnectWithoutGroups2Input | UserGroups2CreateOrConnectWithoutGroups2Input[]
    createMany?: UserGroups2CreateManyGroups2InputEnvelope
    connect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
  }

  export type UserGroups2UncheckedCreateNestedManyWithoutGroups2Input = {
    create?: XOR<UserGroups2CreateWithoutGroups2Input, UserGroups2UncheckedCreateWithoutGroups2Input> | UserGroups2CreateWithoutGroups2Input[] | UserGroups2UncheckedCreateWithoutGroups2Input[]
    connectOrCreate?: UserGroups2CreateOrConnectWithoutGroups2Input | UserGroups2CreateOrConnectWithoutGroups2Input[]
    createMany?: UserGroups2CreateManyGroups2InputEnvelope
    connect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
  }

  export type UserGroups2UpdateManyWithoutGroups2NestedInput = {
    create?: XOR<UserGroups2CreateWithoutGroups2Input, UserGroups2UncheckedCreateWithoutGroups2Input> | UserGroups2CreateWithoutGroups2Input[] | UserGroups2UncheckedCreateWithoutGroups2Input[]
    connectOrCreate?: UserGroups2CreateOrConnectWithoutGroups2Input | UserGroups2CreateOrConnectWithoutGroups2Input[]
    upsert?: UserGroups2UpsertWithWhereUniqueWithoutGroups2Input | UserGroups2UpsertWithWhereUniqueWithoutGroups2Input[]
    createMany?: UserGroups2CreateManyGroups2InputEnvelope
    set?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    disconnect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    delete?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    connect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    update?: UserGroups2UpdateWithWhereUniqueWithoutGroups2Input | UserGroups2UpdateWithWhereUniqueWithoutGroups2Input[]
    updateMany?: UserGroups2UpdateManyWithWhereWithoutGroups2Input | UserGroups2UpdateManyWithWhereWithoutGroups2Input[]
    deleteMany?: UserGroups2ScalarWhereInput | UserGroups2ScalarWhereInput[]
  }

  export type UserGroups2UncheckedUpdateManyWithoutGroups2NestedInput = {
    create?: XOR<UserGroups2CreateWithoutGroups2Input, UserGroups2UncheckedCreateWithoutGroups2Input> | UserGroups2CreateWithoutGroups2Input[] | UserGroups2UncheckedCreateWithoutGroups2Input[]
    connectOrCreate?: UserGroups2CreateOrConnectWithoutGroups2Input | UserGroups2CreateOrConnectWithoutGroups2Input[]
    upsert?: UserGroups2UpsertWithWhereUniqueWithoutGroups2Input | UserGroups2UpsertWithWhereUniqueWithoutGroups2Input[]
    createMany?: UserGroups2CreateManyGroups2InputEnvelope
    set?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    disconnect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    delete?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    connect?: UserGroups2WhereUniqueInput | UserGroups2WhereUniqueInput[]
    update?: UserGroups2UpdateWithWhereUniqueWithoutGroups2Input | UserGroups2UpdateWithWhereUniqueWithoutGroups2Input[]
    updateMany?: UserGroups2UpdateManyWithWhereWithoutGroups2Input | UserGroups2UpdateManyWithWhereWithoutGroups2Input[]
    deleteMany?: UserGroups2ScalarWhereInput | UserGroups2ScalarWhereInput[]
  }

  export type Users2CreateNestedManyWithoutRolesInput = {
    create?: XOR<Users2CreateWithoutRolesInput, Users2UncheckedCreateWithoutRolesInput> | Users2CreateWithoutRolesInput[] | Users2UncheckedCreateWithoutRolesInput[]
    connectOrCreate?: Users2CreateOrConnectWithoutRolesInput | Users2CreateOrConnectWithoutRolesInput[]
    connect?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
  }

  export type Users2UncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<Users2CreateWithoutRolesInput, Users2UncheckedCreateWithoutRolesInput> | Users2CreateWithoutRolesInput[] | Users2UncheckedCreateWithoutRolesInput[]
    connectOrCreate?: Users2CreateOrConnectWithoutRolesInput | Users2CreateOrConnectWithoutRolesInput[]
    connect?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
  }

  export type Users2UpdateManyWithoutRolesNestedInput = {
    create?: XOR<Users2CreateWithoutRolesInput, Users2UncheckedCreateWithoutRolesInput> | Users2CreateWithoutRolesInput[] | Users2UncheckedCreateWithoutRolesInput[]
    connectOrCreate?: Users2CreateOrConnectWithoutRolesInput | Users2CreateOrConnectWithoutRolesInput[]
    upsert?: Users2UpsertWithWhereUniqueWithoutRolesInput | Users2UpsertWithWhereUniqueWithoutRolesInput[]
    set?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
    disconnect?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
    delete?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
    connect?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
    update?: Users2UpdateWithWhereUniqueWithoutRolesInput | Users2UpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: Users2UpdateManyWithWhereWithoutRolesInput | Users2UpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: Users2ScalarWhereInput | Users2ScalarWhereInput[]
  }

  export type Users2UncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<Users2CreateWithoutRolesInput, Users2UncheckedCreateWithoutRolesInput> | Users2CreateWithoutRolesInput[] | Users2UncheckedCreateWithoutRolesInput[]
    connectOrCreate?: Users2CreateOrConnectWithoutRolesInput | Users2CreateOrConnectWithoutRolesInput[]
    upsert?: Users2UpsertWithWhereUniqueWithoutRolesInput | Users2UpsertWithWhereUniqueWithoutRolesInput[]
    set?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
    disconnect?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
    delete?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
    connect?: Users2WhereUniqueInput | Users2WhereUniqueInput[]
    update?: Users2UpdateWithWhereUniqueWithoutRolesInput | Users2UpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: Users2UpdateManyWithWhereWithoutRolesInput | Users2UpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: Users2ScalarWhereInput | Users2ScalarWhereInput[]
  }

  export type Users2CreateNestedOneWithoutUserGroupsInput = {
    create?: XOR<Users2CreateWithoutUserGroupsInput, Users2UncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: Users2CreateOrConnectWithoutUserGroupsInput
    connect?: Users2WhereUniqueInput
  }

  export type Group2CreateNestedOneWithoutUserGroupsInput = {
    create?: XOR<Group2CreateWithoutUserGroupsInput, Group2UncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: Group2CreateOrConnectWithoutUserGroupsInput
    connect?: Group2WhereUniqueInput
  }

  export type Users2UpdateOneRequiredWithoutUserGroupsNestedInput = {
    create?: XOR<Users2CreateWithoutUserGroupsInput, Users2UncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: Users2CreateOrConnectWithoutUserGroupsInput
    upsert?: Users2UpsertWithoutUserGroupsInput
    connect?: Users2WhereUniqueInput
    update?: XOR<XOR<Users2UpdateToOneWithWhereWithoutUserGroupsInput, Users2UpdateWithoutUserGroupsInput>, Users2UncheckedUpdateWithoutUserGroupsInput>
  }

  export type Group2UpdateOneRequiredWithoutUserGroupsNestedInput = {
    create?: XOR<Group2CreateWithoutUserGroupsInput, Group2UncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: Group2CreateOrConnectWithoutUserGroupsInput
    upsert?: Group2UpsertWithoutUserGroupsInput
    connect?: Group2WhereUniqueInput
    update?: XOR<XOR<Group2UpdateToOneWithWhereWithoutUserGroupsInput, Group2UpdateWithoutUserGroupsInput>, Group2UncheckedUpdateWithoutUserGroupsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Address2CreateWithoutUsersInput = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo?: Geo2CreateNestedOneWithoutAddress2Input
  }

  export type Address2UncheckedCreateWithoutUsersInput = {
    id?: number
    street: string
    suite: string
    city: string
    zipcode: string
    geo?: Geo2UncheckedCreateNestedOneWithoutAddress2Input
  }

  export type Address2CreateOrConnectWithoutUsersInput = {
    where: Address2WhereUniqueInput
    create: XOR<Address2CreateWithoutUsersInput, Address2UncheckedCreateWithoutUsersInput>
  }

  export type Company2CreateWithoutUsers2Input = {
    name: string
    catchPhrase: string
    bs: string
  }

  export type Company2UncheckedCreateWithoutUsers2Input = {
    id?: number
    name: string
    catchPhrase: string
    bs: string
  }

  export type Company2CreateOrConnectWithoutUsers2Input = {
    where: Company2WhereUniqueInput
    create: XOR<Company2CreateWithoutUsers2Input, Company2UncheckedCreateWithoutUsers2Input>
  }

  export type Post2CreateWithoutUsersInput = {
    title: string
    body: string
    comments?: Comments2CreateNestedManyWithoutPostInput
  }

  export type Post2UncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    body: string
    comments?: Comments2UncheckedCreateNestedManyWithoutPostInput
  }

  export type Post2CreateOrConnectWithoutUsersInput = {
    where: Post2WhereUniqueInput
    create: XOR<Post2CreateWithoutUsersInput, Post2UncheckedCreateWithoutUsersInput>
  }

  export type Post2CreateManyUsersInputEnvelope = {
    data: Post2CreateManyUsersInput | Post2CreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type Role2CreateWithoutUsers2Input = {
    role: string
  }

  export type Role2UncheckedCreateWithoutUsers2Input = {
    id?: number
    role: string
  }

  export type Role2CreateOrConnectWithoutUsers2Input = {
    where: Role2WhereUniqueInput
    create: XOR<Role2CreateWithoutUsers2Input, Role2UncheckedCreateWithoutUsers2Input>
  }

  export type UserGroups2CreateWithoutUsers2Input = {
    joinedAt?: Date | string
    isModerator?: boolean
    groups2: Group2CreateNestedOneWithoutUserGroupsInput
  }

  export type UserGroups2UncheckedCreateWithoutUsers2Input = {
    id?: number
    groupId: number
    joinedAt?: Date | string
    isModerator?: boolean
  }

  export type UserGroups2CreateOrConnectWithoutUsers2Input = {
    where: UserGroups2WhereUniqueInput
    create: XOR<UserGroups2CreateWithoutUsers2Input, UserGroups2UncheckedCreateWithoutUsers2Input>
  }

  export type UserGroups2CreateManyUsers2InputEnvelope = {
    data: UserGroups2CreateManyUsers2Input | UserGroups2CreateManyUsers2Input[]
    skipDuplicates?: boolean
  }

  export type Address2UpsertWithoutUsersInput = {
    update: XOR<Address2UpdateWithoutUsersInput, Address2UncheckedUpdateWithoutUsersInput>
    create: XOR<Address2CreateWithoutUsersInput, Address2UncheckedCreateWithoutUsersInput>
    where?: Address2WhereInput
  }

  export type Address2UpdateToOneWithWhereWithoutUsersInput = {
    where?: Address2WhereInput
    data: XOR<Address2UpdateWithoutUsersInput, Address2UncheckedUpdateWithoutUsersInput>
  }

  export type Address2UpdateWithoutUsersInput = {
    street?: StringFieldUpdateOperationsInput | string
    suite?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    geo?: Geo2UpdateOneWithoutAddress2NestedInput
  }

  export type Address2UncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    suite?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    geo?: Geo2UncheckedUpdateOneWithoutAddress2NestedInput
  }

  export type Company2UpsertWithoutUsers2Input = {
    update: XOR<Company2UpdateWithoutUsers2Input, Company2UncheckedUpdateWithoutUsers2Input>
    create: XOR<Company2CreateWithoutUsers2Input, Company2UncheckedCreateWithoutUsers2Input>
    where?: Company2WhereInput
  }

  export type Company2UpdateToOneWithWhereWithoutUsers2Input = {
    where?: Company2WhereInput
    data: XOR<Company2UpdateWithoutUsers2Input, Company2UncheckedUpdateWithoutUsers2Input>
  }

  export type Company2UpdateWithoutUsers2Input = {
    name?: StringFieldUpdateOperationsInput | string
    catchPhrase?: StringFieldUpdateOperationsInput | string
    bs?: StringFieldUpdateOperationsInput | string
  }

  export type Company2UncheckedUpdateWithoutUsers2Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    catchPhrase?: StringFieldUpdateOperationsInput | string
    bs?: StringFieldUpdateOperationsInput | string
  }

  export type Post2UpsertWithWhereUniqueWithoutUsersInput = {
    where: Post2WhereUniqueInput
    update: XOR<Post2UpdateWithoutUsersInput, Post2UncheckedUpdateWithoutUsersInput>
    create: XOR<Post2CreateWithoutUsersInput, Post2UncheckedCreateWithoutUsersInput>
  }

  export type Post2UpdateWithWhereUniqueWithoutUsersInput = {
    where: Post2WhereUniqueInput
    data: XOR<Post2UpdateWithoutUsersInput, Post2UncheckedUpdateWithoutUsersInput>
  }

  export type Post2UpdateManyWithWhereWithoutUsersInput = {
    where: Post2ScalarWhereInput
    data: XOR<Post2UpdateManyMutationInput, Post2UncheckedUpdateManyWithoutUsersInput>
  }

  export type Post2ScalarWhereInput = {
    AND?: Post2ScalarWhereInput | Post2ScalarWhereInput[]
    OR?: Post2ScalarWhereInput[]
    NOT?: Post2ScalarWhereInput | Post2ScalarWhereInput[]
    id?: IntFilter<"Post2"> | number
    userId?: IntFilter<"Post2"> | number
    title?: StringFilter<"Post2"> | string
    body?: StringFilter<"Post2"> | string
  }

  export type Role2UpsertWithWhereUniqueWithoutUsers2Input = {
    where: Role2WhereUniqueInput
    update: XOR<Role2UpdateWithoutUsers2Input, Role2UncheckedUpdateWithoutUsers2Input>
    create: XOR<Role2CreateWithoutUsers2Input, Role2UncheckedCreateWithoutUsers2Input>
  }

  export type Role2UpdateWithWhereUniqueWithoutUsers2Input = {
    where: Role2WhereUniqueInput
    data: XOR<Role2UpdateWithoutUsers2Input, Role2UncheckedUpdateWithoutUsers2Input>
  }

  export type Role2UpdateManyWithWhereWithoutUsers2Input = {
    where: Role2ScalarWhereInput
    data: XOR<Role2UpdateManyMutationInput, Role2UncheckedUpdateManyWithoutUsers2Input>
  }

  export type Role2ScalarWhereInput = {
    AND?: Role2ScalarWhereInput | Role2ScalarWhereInput[]
    OR?: Role2ScalarWhereInput[]
    NOT?: Role2ScalarWhereInput | Role2ScalarWhereInput[]
    id?: IntFilter<"Role2"> | number
    role?: StringFilter<"Role2"> | string
  }

  export type UserGroups2UpsertWithWhereUniqueWithoutUsers2Input = {
    where: UserGroups2WhereUniqueInput
    update: XOR<UserGroups2UpdateWithoutUsers2Input, UserGroups2UncheckedUpdateWithoutUsers2Input>
    create: XOR<UserGroups2CreateWithoutUsers2Input, UserGroups2UncheckedCreateWithoutUsers2Input>
  }

  export type UserGroups2UpdateWithWhereUniqueWithoutUsers2Input = {
    where: UserGroups2WhereUniqueInput
    data: XOR<UserGroups2UpdateWithoutUsers2Input, UserGroups2UncheckedUpdateWithoutUsers2Input>
  }

  export type UserGroups2UpdateManyWithWhereWithoutUsers2Input = {
    where: UserGroups2ScalarWhereInput
    data: XOR<UserGroups2UpdateManyMutationInput, UserGroups2UncheckedUpdateManyWithoutUsers2Input>
  }

  export type UserGroups2ScalarWhereInput = {
    AND?: UserGroups2ScalarWhereInput | UserGroups2ScalarWhereInput[]
    OR?: UserGroups2ScalarWhereInput[]
    NOT?: UserGroups2ScalarWhereInput | UserGroups2ScalarWhereInput[]
    id?: IntFilter<"UserGroups2"> | number
    userId?: IntFilter<"UserGroups2"> | number
    groupId?: IntFilter<"UserGroups2"> | number
    joinedAt?: DateTimeFilter<"UserGroups2"> | Date | string
    isModerator?: BoolFilter<"UserGroups2"> | boolean
  }

  export type Users2CreateWithoutPostInput = {
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2CreateNestedOneWithoutUsersInput
    company?: Company2CreateNestedOneWithoutUsers2Input
    roles?: Role2CreateNestedManyWithoutUsers2Input
    userGroups?: UserGroups2CreateNestedManyWithoutUsers2Input
  }

  export type Users2UncheckedCreateWithoutPostInput = {
    id?: number
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2UncheckedCreateNestedOneWithoutUsersInput
    company?: Company2UncheckedCreateNestedOneWithoutUsers2Input
    roles?: Role2UncheckedCreateNestedManyWithoutUsers2Input
    userGroups?: UserGroups2UncheckedCreateNestedManyWithoutUsers2Input
  }

  export type Users2CreateOrConnectWithoutPostInput = {
    where: Users2WhereUniqueInput
    create: XOR<Users2CreateWithoutPostInput, Users2UncheckedCreateWithoutPostInput>
  }

  export type Comments2CreateWithoutPostInput = {
    name: string
    email: string
    body: string
  }

  export type Comments2UncheckedCreateWithoutPostInput = {
    id?: number
    name: string
    email: string
    body: string
  }

  export type Comments2CreateOrConnectWithoutPostInput = {
    where: Comments2WhereUniqueInput
    create: XOR<Comments2CreateWithoutPostInput, Comments2UncheckedCreateWithoutPostInput>
  }

  export type Comments2CreateManyPostInputEnvelope = {
    data: Comments2CreateManyPostInput | Comments2CreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type Users2UpsertWithoutPostInput = {
    update: XOR<Users2UpdateWithoutPostInput, Users2UncheckedUpdateWithoutPostInput>
    create: XOR<Users2CreateWithoutPostInput, Users2UncheckedCreateWithoutPostInput>
    where?: Users2WhereInput
  }

  export type Users2UpdateToOneWithWhereWithoutPostInput = {
    where?: Users2WhereInput
    data: XOR<Users2UpdateWithoutPostInput, Users2UncheckedUpdateWithoutPostInput>
  }

  export type Users2UpdateWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UpdateOneWithoutUsersNestedInput
    company?: Company2UpdateOneWithoutUsers2NestedInput
    roles?: Role2UpdateManyWithoutUsers2NestedInput
    userGroups?: UserGroups2UpdateManyWithoutUsers2NestedInput
  }

  export type Users2UncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UncheckedUpdateOneWithoutUsersNestedInput
    company?: Company2UncheckedUpdateOneWithoutUsers2NestedInput
    roles?: Role2UncheckedUpdateManyWithoutUsers2NestedInput
    userGroups?: UserGroups2UncheckedUpdateManyWithoutUsers2NestedInput
  }

  export type Comments2UpsertWithWhereUniqueWithoutPostInput = {
    where: Comments2WhereUniqueInput
    update: XOR<Comments2UpdateWithoutPostInput, Comments2UncheckedUpdateWithoutPostInput>
    create: XOR<Comments2CreateWithoutPostInput, Comments2UncheckedCreateWithoutPostInput>
  }

  export type Comments2UpdateWithWhereUniqueWithoutPostInput = {
    where: Comments2WhereUniqueInput
    data: XOR<Comments2UpdateWithoutPostInput, Comments2UncheckedUpdateWithoutPostInput>
  }

  export type Comments2UpdateManyWithWhereWithoutPostInput = {
    where: Comments2ScalarWhereInput
    data: XOR<Comments2UpdateManyMutationInput, Comments2UncheckedUpdateManyWithoutPostInput>
  }

  export type Comments2ScalarWhereInput = {
    AND?: Comments2ScalarWhereInput | Comments2ScalarWhereInput[]
    OR?: Comments2ScalarWhereInput[]
    NOT?: Comments2ScalarWhereInput | Comments2ScalarWhereInput[]
    id?: IntFilter<"Comments2"> | number
    postId?: IntFilter<"Comments2"> | number
    name?: StringFilter<"Comments2"> | string
    email?: StringFilter<"Comments2"> | string
    body?: StringFilter<"Comments2"> | string
  }

  export type Post2CreateWithoutCommentsInput = {
    title: string
    body: string
    users: Users2CreateNestedOneWithoutPostInput
  }

  export type Post2UncheckedCreateWithoutCommentsInput = {
    id?: number
    userId: number
    title: string
    body: string
  }

  export type Post2CreateOrConnectWithoutCommentsInput = {
    where: Post2WhereUniqueInput
    create: XOR<Post2CreateWithoutCommentsInput, Post2UncheckedCreateWithoutCommentsInput>
  }

  export type Post2UpsertWithoutCommentsInput = {
    update: XOR<Post2UpdateWithoutCommentsInput, Post2UncheckedUpdateWithoutCommentsInput>
    create: XOR<Post2CreateWithoutCommentsInput, Post2UncheckedCreateWithoutCommentsInput>
    where?: Post2WhereInput
  }

  export type Post2UpdateToOneWithWhereWithoutCommentsInput = {
    where?: Post2WhereInput
    data: XOR<Post2UpdateWithoutCommentsInput, Post2UncheckedUpdateWithoutCommentsInput>
  }

  export type Post2UpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    users?: Users2UpdateOneRequiredWithoutPostNestedInput
  }

  export type Post2UncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Users2CreateWithoutCompanyInput = {
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2CreateNestedOneWithoutUsersInput
    post?: Post2CreateNestedManyWithoutUsersInput
    roles?: Role2CreateNestedManyWithoutUsers2Input
    userGroups?: UserGroups2CreateNestedManyWithoutUsers2Input
  }

  export type Users2UncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2UncheckedCreateNestedOneWithoutUsersInput
    post?: Post2UncheckedCreateNestedManyWithoutUsersInput
    roles?: Role2UncheckedCreateNestedManyWithoutUsers2Input
    userGroups?: UserGroups2UncheckedCreateNestedManyWithoutUsers2Input
  }

  export type Users2CreateOrConnectWithoutCompanyInput = {
    where: Users2WhereUniqueInput
    create: XOR<Users2CreateWithoutCompanyInput, Users2UncheckedCreateWithoutCompanyInput>
  }

  export type Users2UpsertWithoutCompanyInput = {
    update: XOR<Users2UpdateWithoutCompanyInput, Users2UncheckedUpdateWithoutCompanyInput>
    create: XOR<Users2CreateWithoutCompanyInput, Users2UncheckedCreateWithoutCompanyInput>
    where?: Users2WhereInput
  }

  export type Users2UpdateToOneWithWhereWithoutCompanyInput = {
    where?: Users2WhereInput
    data: XOR<Users2UpdateWithoutCompanyInput, Users2UncheckedUpdateWithoutCompanyInput>
  }

  export type Users2UpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UpdateOneWithoutUsersNestedInput
    post?: Post2UpdateManyWithoutUsersNestedInput
    roles?: Role2UpdateManyWithoutUsers2NestedInput
    userGroups?: UserGroups2UpdateManyWithoutUsers2NestedInput
  }

  export type Users2UncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UncheckedUpdateOneWithoutUsersNestedInput
    post?: Post2UncheckedUpdateManyWithoutUsersNestedInput
    roles?: Role2UncheckedUpdateManyWithoutUsers2NestedInput
    userGroups?: UserGroups2UncheckedUpdateManyWithoutUsers2NestedInput
  }

  export type Address2CreateWithoutGeoInput = {
    street: string
    suite: string
    city: string
    zipcode: string
    users: Users2CreateNestedOneWithoutAddressInput
  }

  export type Address2UncheckedCreateWithoutGeoInput = {
    id?: number
    street: string
    suite: string
    city: string
    zipcode: string
    userId: number
  }

  export type Address2CreateOrConnectWithoutGeoInput = {
    where: Address2WhereUniqueInput
    create: XOR<Address2CreateWithoutGeoInput, Address2UncheckedCreateWithoutGeoInput>
  }

  export type Address2UpsertWithoutGeoInput = {
    update: XOR<Address2UpdateWithoutGeoInput, Address2UncheckedUpdateWithoutGeoInput>
    create: XOR<Address2CreateWithoutGeoInput, Address2UncheckedCreateWithoutGeoInput>
    where?: Address2WhereInput
  }

  export type Address2UpdateToOneWithWhereWithoutGeoInput = {
    where?: Address2WhereInput
    data: XOR<Address2UpdateWithoutGeoInput, Address2UncheckedUpdateWithoutGeoInput>
  }

  export type Address2UpdateWithoutGeoInput = {
    street?: StringFieldUpdateOperationsInput | string
    suite?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    users?: Users2UpdateOneRequiredWithoutAddressNestedInput
  }

  export type Address2UncheckedUpdateWithoutGeoInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    suite?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type Geo2CreateWithoutAddress2Input = {
    lat: string
    lng: string
  }

  export type Geo2UncheckedCreateWithoutAddress2Input = {
    id?: number
    lat: string
    lng: string
  }

  export type Geo2CreateOrConnectWithoutAddress2Input = {
    where: Geo2WhereUniqueInput
    create: XOR<Geo2CreateWithoutAddress2Input, Geo2UncheckedCreateWithoutAddress2Input>
  }

  export type Users2CreateWithoutAddressInput = {
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    company?: Company2CreateNestedOneWithoutUsers2Input
    post?: Post2CreateNestedManyWithoutUsersInput
    roles?: Role2CreateNestedManyWithoutUsers2Input
    userGroups?: UserGroups2CreateNestedManyWithoutUsers2Input
  }

  export type Users2UncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    company?: Company2UncheckedCreateNestedOneWithoutUsers2Input
    post?: Post2UncheckedCreateNestedManyWithoutUsersInput
    roles?: Role2UncheckedCreateNestedManyWithoutUsers2Input
    userGroups?: UserGroups2UncheckedCreateNestedManyWithoutUsers2Input
  }

  export type Users2CreateOrConnectWithoutAddressInput = {
    where: Users2WhereUniqueInput
    create: XOR<Users2CreateWithoutAddressInput, Users2UncheckedCreateWithoutAddressInput>
  }

  export type Geo2UpsertWithoutAddress2Input = {
    update: XOR<Geo2UpdateWithoutAddress2Input, Geo2UncheckedUpdateWithoutAddress2Input>
    create: XOR<Geo2CreateWithoutAddress2Input, Geo2UncheckedCreateWithoutAddress2Input>
    where?: Geo2WhereInput
  }

  export type Geo2UpdateToOneWithWhereWithoutAddress2Input = {
    where?: Geo2WhereInput
    data: XOR<Geo2UpdateWithoutAddress2Input, Geo2UncheckedUpdateWithoutAddress2Input>
  }

  export type Geo2UpdateWithoutAddress2Input = {
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
  }

  export type Geo2UncheckedUpdateWithoutAddress2Input = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: StringFieldUpdateOperationsInput | string
    lng?: StringFieldUpdateOperationsInput | string
  }

  export type Users2UpsertWithoutAddressInput = {
    update: XOR<Users2UpdateWithoutAddressInput, Users2UncheckedUpdateWithoutAddressInput>
    create: XOR<Users2CreateWithoutAddressInput, Users2UncheckedCreateWithoutAddressInput>
    where?: Users2WhereInput
  }

  export type Users2UpdateToOneWithWhereWithoutAddressInput = {
    where?: Users2WhereInput
    data: XOR<Users2UpdateWithoutAddressInput, Users2UncheckedUpdateWithoutAddressInput>
  }

  export type Users2UpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    company?: Company2UpdateOneWithoutUsers2NestedInput
    post?: Post2UpdateManyWithoutUsersNestedInput
    roles?: Role2UpdateManyWithoutUsers2NestedInput
    userGroups?: UserGroups2UpdateManyWithoutUsers2NestedInput
  }

  export type Users2UncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    company?: Company2UncheckedUpdateOneWithoutUsers2NestedInput
    post?: Post2UncheckedUpdateManyWithoutUsersNestedInput
    roles?: Role2UncheckedUpdateManyWithoutUsers2NestedInput
    userGroups?: UserGroups2UncheckedUpdateManyWithoutUsers2NestedInput
  }

  export type UserGroups2CreateWithoutGroups2Input = {
    joinedAt?: Date | string
    isModerator?: boolean
    users2: Users2CreateNestedOneWithoutUserGroupsInput
  }

  export type UserGroups2UncheckedCreateWithoutGroups2Input = {
    id?: number
    userId: number
    joinedAt?: Date | string
    isModerator?: boolean
  }

  export type UserGroups2CreateOrConnectWithoutGroups2Input = {
    where: UserGroups2WhereUniqueInput
    create: XOR<UserGroups2CreateWithoutGroups2Input, UserGroups2UncheckedCreateWithoutGroups2Input>
  }

  export type UserGroups2CreateManyGroups2InputEnvelope = {
    data: UserGroups2CreateManyGroups2Input | UserGroups2CreateManyGroups2Input[]
    skipDuplicates?: boolean
  }

  export type UserGroups2UpsertWithWhereUniqueWithoutGroups2Input = {
    where: UserGroups2WhereUniqueInput
    update: XOR<UserGroups2UpdateWithoutGroups2Input, UserGroups2UncheckedUpdateWithoutGroups2Input>
    create: XOR<UserGroups2CreateWithoutGroups2Input, UserGroups2UncheckedCreateWithoutGroups2Input>
  }

  export type UserGroups2UpdateWithWhereUniqueWithoutGroups2Input = {
    where: UserGroups2WhereUniqueInput
    data: XOR<UserGroups2UpdateWithoutGroups2Input, UserGroups2UncheckedUpdateWithoutGroups2Input>
  }

  export type UserGroups2UpdateManyWithWhereWithoutGroups2Input = {
    where: UserGroups2ScalarWhereInput
    data: XOR<UserGroups2UpdateManyMutationInput, UserGroups2UncheckedUpdateManyWithoutGroups2Input>
  }

  export type Users2CreateWithoutRolesInput = {
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2CreateNestedOneWithoutUsersInput
    company?: Company2CreateNestedOneWithoutUsers2Input
    post?: Post2CreateNestedManyWithoutUsersInput
    userGroups?: UserGroups2CreateNestedManyWithoutUsers2Input
  }

  export type Users2UncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2UncheckedCreateNestedOneWithoutUsersInput
    company?: Company2UncheckedCreateNestedOneWithoutUsers2Input
    post?: Post2UncheckedCreateNestedManyWithoutUsersInput
    userGroups?: UserGroups2UncheckedCreateNestedManyWithoutUsers2Input
  }

  export type Users2CreateOrConnectWithoutRolesInput = {
    where: Users2WhereUniqueInput
    create: XOR<Users2CreateWithoutRolesInput, Users2UncheckedCreateWithoutRolesInput>
  }

  export type Users2UpsertWithWhereUniqueWithoutRolesInput = {
    where: Users2WhereUniqueInput
    update: XOR<Users2UpdateWithoutRolesInput, Users2UncheckedUpdateWithoutRolesInput>
    create: XOR<Users2CreateWithoutRolesInput, Users2UncheckedCreateWithoutRolesInput>
  }

  export type Users2UpdateWithWhereUniqueWithoutRolesInput = {
    where: Users2WhereUniqueInput
    data: XOR<Users2UpdateWithoutRolesInput, Users2UncheckedUpdateWithoutRolesInput>
  }

  export type Users2UpdateManyWithWhereWithoutRolesInput = {
    where: Users2ScalarWhereInput
    data: XOR<Users2UpdateManyMutationInput, Users2UncheckedUpdateManyWithoutRolesInput>
  }

  export type Users2ScalarWhereInput = {
    AND?: Users2ScalarWhereInput | Users2ScalarWhereInput[]
    OR?: Users2ScalarWhereInput[]
    NOT?: Users2ScalarWhereInput | Users2ScalarWhereInput[]
    id?: IntFilter<"Users2"> | number
    name?: StringFilter<"Users2"> | string
    username?: StringFilter<"Users2"> | string
    password?: StringFilter<"Users2"> | string
    email?: StringNullableFilter<"Users2"> | string | null
    phone?: StringNullableFilter<"Users2"> | string | null
    website?: StringNullableFilter<"Users2"> | string | null
    createdAt?: DateTimeFilter<"Users2"> | Date | string
    isActive?: BoolFilter<"Users2"> | boolean
    deleteAt?: DateTimeNullableFilter<"Users2"> | Date | string | null
    deleted?: BoolFilter<"Users2"> | boolean
  }

  export type Users2CreateWithoutUserGroupsInput = {
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2CreateNestedOneWithoutUsersInput
    company?: Company2CreateNestedOneWithoutUsers2Input
    post?: Post2CreateNestedManyWithoutUsersInput
    roles?: Role2CreateNestedManyWithoutUsers2Input
  }

  export type Users2UncheckedCreateWithoutUserGroupsInput = {
    id?: number
    name: string
    username: string
    password: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    isActive?: boolean
    deleteAt?: Date | string | null
    deleted?: boolean
    address?: Address2UncheckedCreateNestedOneWithoutUsersInput
    company?: Company2UncheckedCreateNestedOneWithoutUsers2Input
    post?: Post2UncheckedCreateNestedManyWithoutUsersInput
    roles?: Role2UncheckedCreateNestedManyWithoutUsers2Input
  }

  export type Users2CreateOrConnectWithoutUserGroupsInput = {
    where: Users2WhereUniqueInput
    create: XOR<Users2CreateWithoutUserGroupsInput, Users2UncheckedCreateWithoutUserGroupsInput>
  }

  export type Group2CreateWithoutUserGroupsInput = {
    name: string
  }

  export type Group2UncheckedCreateWithoutUserGroupsInput = {
    id?: number
    name: string
  }

  export type Group2CreateOrConnectWithoutUserGroupsInput = {
    where: Group2WhereUniqueInput
    create: XOR<Group2CreateWithoutUserGroupsInput, Group2UncheckedCreateWithoutUserGroupsInput>
  }

  export type Users2UpsertWithoutUserGroupsInput = {
    update: XOR<Users2UpdateWithoutUserGroupsInput, Users2UncheckedUpdateWithoutUserGroupsInput>
    create: XOR<Users2CreateWithoutUserGroupsInput, Users2UncheckedCreateWithoutUserGroupsInput>
    where?: Users2WhereInput
  }

  export type Users2UpdateToOneWithWhereWithoutUserGroupsInput = {
    where?: Users2WhereInput
    data: XOR<Users2UpdateWithoutUserGroupsInput, Users2UncheckedUpdateWithoutUserGroupsInput>
  }

  export type Users2UpdateWithoutUserGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UpdateOneWithoutUsersNestedInput
    company?: Company2UpdateOneWithoutUsers2NestedInput
    post?: Post2UpdateManyWithoutUsersNestedInput
    roles?: Role2UpdateManyWithoutUsers2NestedInput
  }

  export type Users2UncheckedUpdateWithoutUserGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UncheckedUpdateOneWithoutUsersNestedInput
    company?: Company2UncheckedUpdateOneWithoutUsers2NestedInput
    post?: Post2UncheckedUpdateManyWithoutUsersNestedInput
    roles?: Role2UncheckedUpdateManyWithoutUsers2NestedInput
  }

  export type Group2UpsertWithoutUserGroupsInput = {
    update: XOR<Group2UpdateWithoutUserGroupsInput, Group2UncheckedUpdateWithoutUserGroupsInput>
    create: XOR<Group2CreateWithoutUserGroupsInput, Group2UncheckedCreateWithoutUserGroupsInput>
    where?: Group2WhereInput
  }

  export type Group2UpdateToOneWithWhereWithoutUserGroupsInput = {
    where?: Group2WhereInput
    data: XOR<Group2UpdateWithoutUserGroupsInput, Group2UncheckedUpdateWithoutUserGroupsInput>
  }

  export type Group2UpdateWithoutUserGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Group2UncheckedUpdateWithoutUserGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Post2CreateManyUsersInput = {
    id?: number
    title: string
    body: string
  }

  export type UserGroups2CreateManyUsers2Input = {
    id?: number
    groupId: number
    joinedAt?: Date | string
    isModerator?: boolean
  }

  export type Post2UpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    comments?: Comments2UpdateManyWithoutPostNestedInput
  }

  export type Post2UncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    comments?: Comments2UncheckedUpdateManyWithoutPostNestedInput
  }

  export type Post2UncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Role2UpdateWithoutUsers2Input = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type Role2UncheckedUpdateWithoutUsers2Input = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type Role2UncheckedUpdateManyWithoutUsers2Input = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserGroups2UpdateWithoutUsers2Input = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
    groups2?: Group2UpdateOneRequiredWithoutUserGroupsNestedInput
  }

  export type UserGroups2UncheckedUpdateWithoutUsers2Input = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGroups2UncheckedUpdateManyWithoutUsers2Input = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Comments2CreateManyPostInput = {
    id?: number
    name: string
    email: string
    body: string
  }

  export type Comments2UpdateWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Comments2UncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type Comments2UncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type UserGroups2CreateManyGroups2Input = {
    id?: number
    userId: number
    joinedAt?: Date | string
    isModerator?: boolean
  }

  export type UserGroups2UpdateWithoutGroups2Input = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
    users2?: Users2UpdateOneRequiredWithoutUserGroupsNestedInput
  }

  export type UserGroups2UncheckedUpdateWithoutGroups2Input = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserGroups2UncheckedUpdateManyWithoutGroups2Input = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isModerator?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Users2UpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UpdateOneWithoutUsersNestedInput
    company?: Company2UpdateOneWithoutUsers2NestedInput
    post?: Post2UpdateManyWithoutUsersNestedInput
    userGroups?: UserGroups2UpdateManyWithoutUsers2NestedInput
  }

  export type Users2UncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: Address2UncheckedUpdateOneWithoutUsersNestedInput
    company?: Company2UncheckedUpdateOneWithoutUsers2NestedInput
    post?: Post2UncheckedUpdateManyWithoutUsersNestedInput
    userGroups?: UserGroups2UncheckedUpdateManyWithoutUsers2NestedInput
  }

  export type Users2UncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}