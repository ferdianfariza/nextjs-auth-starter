
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Barang
 * 
 */
export type Barang = $Result.DefaultSelection<Prisma.$BarangPayload>
/**
 * Model Masuk
 * 
 */
export type Masuk = $Result.DefaultSelection<Prisma.$MasukPayload>
/**
 * Model Keluar
 * 
 */
export type Keluar = $Result.DefaultSelection<Prisma.$KeluarPayload>

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
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.barang`: Exposes CRUD operations for the **Barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barangs
    * const barangs = await prisma.barang.findMany()
    * ```
    */
  get barang(): Prisma.BarangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masuk`: Exposes CRUD operations for the **Masuk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Masuks
    * const masuks = await prisma.masuk.findMany()
    * ```
    */
  get masuk(): Prisma.MasukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keluar`: Exposes CRUD operations for the **Keluar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keluars
    * const keluars = await prisma.keluar.findMany()
    * ```
    */
  get keluar(): Prisma.KeluarDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Barang: 'Barang',
    Masuk: 'Masuk',
    Keluar: 'Keluar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "barang" | "masuk" | "keluar"
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
      Barang: {
        payload: Prisma.$BarangPayload<ExtArgs>
        fields: Prisma.BarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findFirst: {
            args: Prisma.BarangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findMany: {
            args: Prisma.BarangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          create: {
            args: Prisma.BarangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          createMany: {
            args: Prisma.BarangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          delete: {
            args: Prisma.BarangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          update: {
            args: Prisma.BarangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          deleteMany: {
            args: Prisma.BarangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          upsert: {
            args: Prisma.BarangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          aggregate: {
            args: Prisma.BarangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarang>
          }
          groupBy: {
            args: Prisma.BarangGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangCountArgs<ExtArgs>
            result: $Utils.Optional<BarangCountAggregateOutputType> | number
          }
        }
      }
      Masuk: {
        payload: Prisma.$MasukPayload<ExtArgs>
        fields: Prisma.MasukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>
          }
          findFirst: {
            args: Prisma.MasukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>
          }
          findMany: {
            args: Prisma.MasukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>[]
          }
          create: {
            args: Prisma.MasukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>
          }
          createMany: {
            args: Prisma.MasukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>[]
          }
          delete: {
            args: Prisma.MasukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>
          }
          update: {
            args: Prisma.MasukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>
          }
          deleteMany: {
            args: Prisma.MasukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>[]
          }
          upsert: {
            args: Prisma.MasukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasukPayload>
          }
          aggregate: {
            args: Prisma.MasukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasuk>
          }
          groupBy: {
            args: Prisma.MasukGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasukGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasukCountArgs<ExtArgs>
            result: $Utils.Optional<MasukCountAggregateOutputType> | number
          }
        }
      }
      Keluar: {
        payload: Prisma.$KeluarPayload<ExtArgs>
        fields: Prisma.KeluarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeluarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeluarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>
          }
          findFirst: {
            args: Prisma.KeluarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeluarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>
          }
          findMany: {
            args: Prisma.KeluarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>[]
          }
          create: {
            args: Prisma.KeluarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>
          }
          createMany: {
            args: Prisma.KeluarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeluarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>[]
          }
          delete: {
            args: Prisma.KeluarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>
          }
          update: {
            args: Prisma.KeluarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>
          }
          deleteMany: {
            args: Prisma.KeluarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeluarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeluarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>[]
          }
          upsert: {
            args: Prisma.KeluarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeluarPayload>
          }
          aggregate: {
            args: Prisma.KeluarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeluar>
          }
          groupBy: {
            args: Prisma.KeluarGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeluarGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeluarCountArgs<ExtArgs>
            result: $Utils.Optional<KeluarCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    barang?: BarangOmit
    masuk?: MasukOmit
    keluar?: KeluarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type BarangCountOutputType
   */

  export type BarangCountOutputType = {
    masuk: number
    keluar: number
  }

  export type BarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masuk?: boolean | BarangCountOutputTypeCountMasukArgs
    keluar?: boolean | BarangCountOutputTypeCountKeluarArgs
  }

  // Custom InputTypes
  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangCountOutputType
     */
    select?: BarangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountMasukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasukWhereInput
  }

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountKeluarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeluarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * Model Barang
   */

  export type AggregateBarang = {
    _count: BarangCountAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  export type BarangMinAggregateOutputType = {
    id: string | null
    kodeBarang: string | null
    namaBarang: string | null
  }

  export type BarangMaxAggregateOutputType = {
    id: string | null
    kodeBarang: string | null
    namaBarang: string | null
  }

  export type BarangCountAggregateOutputType = {
    id: number
    kodeBarang: number
    namaBarang: number
    _all: number
  }


  export type BarangMinAggregateInputType = {
    id?: true
    kodeBarang?: true
    namaBarang?: true
  }

  export type BarangMaxAggregateInputType = {
    id?: true
    kodeBarang?: true
    namaBarang?: true
  }

  export type BarangCountAggregateInputType = {
    id?: true
    kodeBarang?: true
    namaBarang?: true
    _all?: true
  }

  export type BarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barang to aggregate.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barangs
    **/
    _count?: true | BarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangMaxAggregateInputType
  }

  export type GetBarangAggregateType<T extends BarangAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang[P]>
      : GetScalarType<T[P], AggregateBarang[P]>
  }




  export type BarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangWhereInput
    orderBy?: BarangOrderByWithAggregationInput | BarangOrderByWithAggregationInput[]
    by: BarangScalarFieldEnum[] | BarangScalarFieldEnum
    having?: BarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangCountAggregateInputType | true
    _min?: BarangMinAggregateInputType
    _max?: BarangMaxAggregateInputType
  }

  export type BarangGroupByOutputType = {
    id: string
    kodeBarang: string
    namaBarang: string
    _count: BarangCountAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  type GetBarangGroupByPayload<T extends BarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangGroupByOutputType[P]>
            : GetScalarType<T[P], BarangGroupByOutputType[P]>
        }
      >
    >


  export type BarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeBarang?: boolean
    namaBarang?: boolean
    masuk?: boolean | Barang$masukArgs<ExtArgs>
    keluar?: boolean | Barang$keluarArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeBarang?: boolean
    namaBarang?: boolean
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeBarang?: boolean
    namaBarang?: boolean
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectScalar = {
    id?: boolean
    kodeBarang?: boolean
    namaBarang?: boolean
  }

  export type BarangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kodeBarang" | "namaBarang", ExtArgs["result"]["barang"]>
  export type BarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masuk?: boolean | Barang$masukArgs<ExtArgs>
    keluar?: boolean | Barang$keluarArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BarangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barang"
    objects: {
      masuk: Prisma.$MasukPayload<ExtArgs>[]
      keluar: Prisma.$KeluarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kodeBarang: string
      namaBarang: string
    }, ExtArgs["result"]["barang"]>
    composites: {}
  }

  type BarangGetPayload<S extends boolean | null | undefined | BarangDefaultArgs> = $Result.GetResult<Prisma.$BarangPayload, S>

  type BarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarangCountAggregateInputType | true
    }

  export interface BarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barang'], meta: { name: 'Barang' } }
    /**
     * Find zero or one Barang that matches the filter.
     * @param {BarangFindUniqueArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarangFindUniqueArgs>(args: SelectSubset<T, BarangFindUniqueArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarangFindUniqueOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarangFindUniqueOrThrowArgs>(args: SelectSubset<T, BarangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarangFindFirstArgs>(args?: SelectSubset<T, BarangFindFirstArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarangFindFirstOrThrowArgs>(args?: SelectSubset<T, BarangFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barangs
     * const barangs = await prisma.barang.findMany()
     * 
     * // Get first 10 Barangs
     * const barangs = await prisma.barang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barangWithIdOnly = await prisma.barang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarangFindManyArgs>(args?: SelectSubset<T, BarangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barang.
     * @param {BarangCreateArgs} args - Arguments to create a Barang.
     * @example
     * // Create one Barang
     * const Barang = await prisma.barang.create({
     *   data: {
     *     // ... data to create a Barang
     *   }
     * })
     * 
     */
    create<T extends BarangCreateArgs>(args: SelectSubset<T, BarangCreateArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barangs.
     * @param {BarangCreateManyArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarangCreateManyArgs>(args?: SelectSubset<T, BarangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barangs and returns the data saved in the database.
     * @param {BarangCreateManyAndReturnArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barangs and only return the `id`
     * const barangWithIdOnly = await prisma.barang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarangCreateManyAndReturnArgs>(args?: SelectSubset<T, BarangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barang.
     * @param {BarangDeleteArgs} args - Arguments to delete one Barang.
     * @example
     * // Delete one Barang
     * const Barang = await prisma.barang.delete({
     *   where: {
     *     // ... filter to delete one Barang
     *   }
     * })
     * 
     */
    delete<T extends BarangDeleteArgs>(args: SelectSubset<T, BarangDeleteArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barang.
     * @param {BarangUpdateArgs} args - Arguments to update one Barang.
     * @example
     * // Update one Barang
     * const barang = await prisma.barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarangUpdateArgs>(args: SelectSubset<T, BarangUpdateArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barangs.
     * @param {BarangDeleteManyArgs} args - Arguments to filter Barangs to delete.
     * @example
     * // Delete a few Barangs
     * const { count } = await prisma.barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarangDeleteManyArgs>(args?: SelectSubset<T, BarangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarangUpdateManyArgs>(args: SelectSubset<T, BarangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs and returns the data updated in the database.
     * @param {BarangUpdateManyAndReturnArgs} args - Arguments to update many Barangs.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barangs and only return the `id`
     * const barangWithIdOnly = await prisma.barang.updateManyAndReturn({
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
    updateManyAndReturn<T extends BarangUpdateManyAndReturnArgs>(args: SelectSubset<T, BarangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barang.
     * @param {BarangUpsertArgs} args - Arguments to update or create a Barang.
     * @example
     * // Update or create a Barang
     * const barang = await prisma.barang.upsert({
     *   create: {
     *     // ... data to create a Barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang we want to update
     *   }
     * })
     */
    upsert<T extends BarangUpsertArgs>(args: SelectSubset<T, BarangUpsertArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangCountArgs} args - Arguments to filter Barangs to count.
     * @example
     * // Count the number of Barangs
     * const count = await prisma.barang.count({
     *   where: {
     *     // ... the filter for the Barangs we want to count
     *   }
     * })
    **/
    count<T extends BarangCountArgs>(
      args?: Subset<T, BarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarangAggregateArgs>(args: Subset<T, BarangAggregateArgs>): Prisma.PrismaPromise<GetBarangAggregateType<T>>

    /**
     * Group by Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangGroupByArgs} args - Group by arguments.
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
      T extends BarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangGroupByArgs['orderBy'] }
        : { orderBy?: BarangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barang model
   */
  readonly fields: BarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    masuk<T extends Barang$masukArgs<ExtArgs> = {}>(args?: Subset<T, Barang$masukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keluar<T extends Barang$keluarArgs<ExtArgs> = {}>(args?: Subset<T, Barang$keluarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Barang model
   */
  interface BarangFieldRefs {
    readonly id: FieldRef<"Barang", 'String'>
    readonly kodeBarang: FieldRef<"Barang", 'String'>
    readonly namaBarang: FieldRef<"Barang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Barang findUnique
   */
  export type BarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang findUniqueOrThrow
   */
  export type BarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang findFirst
   */
  export type BarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang findFirstOrThrow
   */
  export type BarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang findMany
   */
  export type BarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barangs to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang create
   */
  export type BarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to create a Barang.
     */
    data: XOR<BarangCreateInput, BarangUncheckedCreateInput>
  }

  /**
   * Barang createMany
   */
  export type BarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barang createManyAndReturn
   */
  export type BarangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barang update
   */
  export type BarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to update a Barang.
     */
    data: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
    /**
     * Choose, which Barang to update.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang updateMany
   */
  export type BarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to update.
     */
    limit?: number
  }

  /**
   * Barang updateManyAndReturn
   */
  export type BarangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to update.
     */
    limit?: number
  }

  /**
   * Barang upsert
   */
  export type BarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The filter to search for the Barang to update in case it exists.
     */
    where: BarangWhereUniqueInput
    /**
     * In case the Barang found by the `where` argument doesn't exist, create a new Barang with this data.
     */
    create: XOR<BarangCreateInput, BarangUncheckedCreateInput>
    /**
     * In case the Barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
  }

  /**
   * Barang delete
   */
  export type BarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter which Barang to delete.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang deleteMany
   */
  export type BarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barangs to delete
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to delete.
     */
    limit?: number
  }

  /**
   * Barang.masuk
   */
  export type Barang$masukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    where?: MasukWhereInput
    orderBy?: MasukOrderByWithRelationInput | MasukOrderByWithRelationInput[]
    cursor?: MasukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasukScalarFieldEnum | MasukScalarFieldEnum[]
  }

  /**
   * Barang.keluar
   */
  export type Barang$keluarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    where?: KeluarWhereInput
    orderBy?: KeluarOrderByWithRelationInput | KeluarOrderByWithRelationInput[]
    cursor?: KeluarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeluarScalarFieldEnum | KeluarScalarFieldEnum[]
  }

  /**
   * Barang without action
   */
  export type BarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
  }


  /**
   * Model Masuk
   */

  export type AggregateMasuk = {
    _count: MasukCountAggregateOutputType | null
    _avg: MasukAvgAggregateOutputType | null
    _sum: MasukSumAggregateOutputType | null
    _min: MasukMinAggregateOutputType | null
    _max: MasukMaxAggregateOutputType | null
  }

  export type MasukAvgAggregateOutputType = {
    jumlahMasuk: number | null
  }

  export type MasukSumAggregateOutputType = {
    jumlahMasuk: number | null
  }

  export type MasukMinAggregateOutputType = {
    id: string | null
    barangId: string | null
    jumlahMasuk: number | null
    tanggal: Date | null
  }

  export type MasukMaxAggregateOutputType = {
    id: string | null
    barangId: string | null
    jumlahMasuk: number | null
    tanggal: Date | null
  }

  export type MasukCountAggregateOutputType = {
    id: number
    barangId: number
    jumlahMasuk: number
    tanggal: number
    _all: number
  }


  export type MasukAvgAggregateInputType = {
    jumlahMasuk?: true
  }

  export type MasukSumAggregateInputType = {
    jumlahMasuk?: true
  }

  export type MasukMinAggregateInputType = {
    id?: true
    barangId?: true
    jumlahMasuk?: true
    tanggal?: true
  }

  export type MasukMaxAggregateInputType = {
    id?: true
    barangId?: true
    jumlahMasuk?: true
    tanggal?: true
  }

  export type MasukCountAggregateInputType = {
    id?: true
    barangId?: true
    jumlahMasuk?: true
    tanggal?: true
    _all?: true
  }

  export type MasukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Masuk to aggregate.
     */
    where?: MasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masuks to fetch.
     */
    orderBy?: MasukOrderByWithRelationInput | MasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Masuks
    **/
    _count?: true | MasukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasukMaxAggregateInputType
  }

  export type GetMasukAggregateType<T extends MasukAggregateArgs> = {
        [P in keyof T & keyof AggregateMasuk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasuk[P]>
      : GetScalarType<T[P], AggregateMasuk[P]>
  }




  export type MasukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasukWhereInput
    orderBy?: MasukOrderByWithAggregationInput | MasukOrderByWithAggregationInput[]
    by: MasukScalarFieldEnum[] | MasukScalarFieldEnum
    having?: MasukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasukCountAggregateInputType | true
    _avg?: MasukAvgAggregateInputType
    _sum?: MasukSumAggregateInputType
    _min?: MasukMinAggregateInputType
    _max?: MasukMaxAggregateInputType
  }

  export type MasukGroupByOutputType = {
    id: string
    barangId: string
    jumlahMasuk: number
    tanggal: Date
    _count: MasukCountAggregateOutputType | null
    _avg: MasukAvgAggregateOutputType | null
    _sum: MasukSumAggregateOutputType | null
    _min: MasukMinAggregateOutputType | null
    _max: MasukMaxAggregateOutputType | null
  }

  type GetMasukGroupByPayload<T extends MasukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasukGroupByOutputType[P]>
            : GetScalarType<T[P], MasukGroupByOutputType[P]>
        }
      >
    >


  export type MasukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barangId?: boolean
    jumlahMasuk?: boolean
    tanggal?: boolean
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masuk"]>

  export type MasukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barangId?: boolean
    jumlahMasuk?: boolean
    tanggal?: boolean
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masuk"]>

  export type MasukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barangId?: boolean
    jumlahMasuk?: boolean
    tanggal?: boolean
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masuk"]>

  export type MasukSelectScalar = {
    id?: boolean
    barangId?: boolean
    jumlahMasuk?: boolean
    tanggal?: boolean
  }

  export type MasukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "barangId" | "jumlahMasuk" | "tanggal", ExtArgs["result"]["masuk"]>
  export type MasukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type MasukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type MasukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }

  export type $MasukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Masuk"
    objects: {
      barang: Prisma.$BarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      barangId: string
      jumlahMasuk: number
      tanggal: Date
    }, ExtArgs["result"]["masuk"]>
    composites: {}
  }

  type MasukGetPayload<S extends boolean | null | undefined | MasukDefaultArgs> = $Result.GetResult<Prisma.$MasukPayload, S>

  type MasukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasukCountAggregateInputType | true
    }

  export interface MasukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Masuk'], meta: { name: 'Masuk' } }
    /**
     * Find zero or one Masuk that matches the filter.
     * @param {MasukFindUniqueArgs} args - Arguments to find a Masuk
     * @example
     * // Get one Masuk
     * const masuk = await prisma.masuk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasukFindUniqueArgs>(args: SelectSubset<T, MasukFindUniqueArgs<ExtArgs>>): Prisma__MasukClient<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Masuk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasukFindUniqueOrThrowArgs} args - Arguments to find a Masuk
     * @example
     * // Get one Masuk
     * const masuk = await prisma.masuk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasukFindUniqueOrThrowArgs>(args: SelectSubset<T, MasukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasukClient<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Masuk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasukFindFirstArgs} args - Arguments to find a Masuk
     * @example
     * // Get one Masuk
     * const masuk = await prisma.masuk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasukFindFirstArgs>(args?: SelectSubset<T, MasukFindFirstArgs<ExtArgs>>): Prisma__MasukClient<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Masuk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasukFindFirstOrThrowArgs} args - Arguments to find a Masuk
     * @example
     * // Get one Masuk
     * const masuk = await prisma.masuk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasukFindFirstOrThrowArgs>(args?: SelectSubset<T, MasukFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasukClient<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Masuks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Masuks
     * const masuks = await prisma.masuk.findMany()
     * 
     * // Get first 10 Masuks
     * const masuks = await prisma.masuk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masukWithIdOnly = await prisma.masuk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasukFindManyArgs>(args?: SelectSubset<T, MasukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Masuk.
     * @param {MasukCreateArgs} args - Arguments to create a Masuk.
     * @example
     * // Create one Masuk
     * const Masuk = await prisma.masuk.create({
     *   data: {
     *     // ... data to create a Masuk
     *   }
     * })
     * 
     */
    create<T extends MasukCreateArgs>(args: SelectSubset<T, MasukCreateArgs<ExtArgs>>): Prisma__MasukClient<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Masuks.
     * @param {MasukCreateManyArgs} args - Arguments to create many Masuks.
     * @example
     * // Create many Masuks
     * const masuk = await prisma.masuk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasukCreateManyArgs>(args?: SelectSubset<T, MasukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Masuks and returns the data saved in the database.
     * @param {MasukCreateManyAndReturnArgs} args - Arguments to create many Masuks.
     * @example
     * // Create many Masuks
     * const masuk = await prisma.masuk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Masuks and only return the `id`
     * const masukWithIdOnly = await prisma.masuk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasukCreateManyAndReturnArgs>(args?: SelectSubset<T, MasukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Masuk.
     * @param {MasukDeleteArgs} args - Arguments to delete one Masuk.
     * @example
     * // Delete one Masuk
     * const Masuk = await prisma.masuk.delete({
     *   where: {
     *     // ... filter to delete one Masuk
     *   }
     * })
     * 
     */
    delete<T extends MasukDeleteArgs>(args: SelectSubset<T, MasukDeleteArgs<ExtArgs>>): Prisma__MasukClient<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Masuk.
     * @param {MasukUpdateArgs} args - Arguments to update one Masuk.
     * @example
     * // Update one Masuk
     * const masuk = await prisma.masuk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasukUpdateArgs>(args: SelectSubset<T, MasukUpdateArgs<ExtArgs>>): Prisma__MasukClient<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Masuks.
     * @param {MasukDeleteManyArgs} args - Arguments to filter Masuks to delete.
     * @example
     * // Delete a few Masuks
     * const { count } = await prisma.masuk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasukDeleteManyArgs>(args?: SelectSubset<T, MasukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Masuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Masuks
     * const masuk = await prisma.masuk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasukUpdateManyArgs>(args: SelectSubset<T, MasukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Masuks and returns the data updated in the database.
     * @param {MasukUpdateManyAndReturnArgs} args - Arguments to update many Masuks.
     * @example
     * // Update many Masuks
     * const masuk = await prisma.masuk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Masuks and only return the `id`
     * const masukWithIdOnly = await prisma.masuk.updateManyAndReturn({
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
    updateManyAndReturn<T extends MasukUpdateManyAndReturnArgs>(args: SelectSubset<T, MasukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Masuk.
     * @param {MasukUpsertArgs} args - Arguments to update or create a Masuk.
     * @example
     * // Update or create a Masuk
     * const masuk = await prisma.masuk.upsert({
     *   create: {
     *     // ... data to create a Masuk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Masuk we want to update
     *   }
     * })
     */
    upsert<T extends MasukUpsertArgs>(args: SelectSubset<T, MasukUpsertArgs<ExtArgs>>): Prisma__MasukClient<$Result.GetResult<Prisma.$MasukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Masuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasukCountArgs} args - Arguments to filter Masuks to count.
     * @example
     * // Count the number of Masuks
     * const count = await prisma.masuk.count({
     *   where: {
     *     // ... the filter for the Masuks we want to count
     *   }
     * })
    **/
    count<T extends MasukCountArgs>(
      args?: Subset<T, MasukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Masuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasukAggregateArgs>(args: Subset<T, MasukAggregateArgs>): Prisma.PrismaPromise<GetMasukAggregateType<T>>

    /**
     * Group by Masuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasukGroupByArgs} args - Group by arguments.
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
      T extends MasukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasukGroupByArgs['orderBy'] }
        : { orderBy?: MasukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Masuk model
   */
  readonly fields: MasukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Masuk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barang<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Masuk model
   */
  interface MasukFieldRefs {
    readonly id: FieldRef<"Masuk", 'String'>
    readonly barangId: FieldRef<"Masuk", 'String'>
    readonly jumlahMasuk: FieldRef<"Masuk", 'Int'>
    readonly tanggal: FieldRef<"Masuk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Masuk findUnique
   */
  export type MasukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * Filter, which Masuk to fetch.
     */
    where: MasukWhereUniqueInput
  }

  /**
   * Masuk findUniqueOrThrow
   */
  export type MasukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * Filter, which Masuk to fetch.
     */
    where: MasukWhereUniqueInput
  }

  /**
   * Masuk findFirst
   */
  export type MasukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * Filter, which Masuk to fetch.
     */
    where?: MasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masuks to fetch.
     */
    orderBy?: MasukOrderByWithRelationInput | MasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Masuks.
     */
    cursor?: MasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Masuks.
     */
    distinct?: MasukScalarFieldEnum | MasukScalarFieldEnum[]
  }

  /**
   * Masuk findFirstOrThrow
   */
  export type MasukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * Filter, which Masuk to fetch.
     */
    where?: MasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masuks to fetch.
     */
    orderBy?: MasukOrderByWithRelationInput | MasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Masuks.
     */
    cursor?: MasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Masuks.
     */
    distinct?: MasukScalarFieldEnum | MasukScalarFieldEnum[]
  }

  /**
   * Masuk findMany
   */
  export type MasukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * Filter, which Masuks to fetch.
     */
    where?: MasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Masuks to fetch.
     */
    orderBy?: MasukOrderByWithRelationInput | MasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Masuks.
     */
    cursor?: MasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Masuks.
     */
    skip?: number
    distinct?: MasukScalarFieldEnum | MasukScalarFieldEnum[]
  }

  /**
   * Masuk create
   */
  export type MasukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * The data needed to create a Masuk.
     */
    data: XOR<MasukCreateInput, MasukUncheckedCreateInput>
  }

  /**
   * Masuk createMany
   */
  export type MasukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Masuks.
     */
    data: MasukCreateManyInput | MasukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Masuk createManyAndReturn
   */
  export type MasukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * The data used to create many Masuks.
     */
    data: MasukCreateManyInput | MasukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Masuk update
   */
  export type MasukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * The data needed to update a Masuk.
     */
    data: XOR<MasukUpdateInput, MasukUncheckedUpdateInput>
    /**
     * Choose, which Masuk to update.
     */
    where: MasukWhereUniqueInput
  }

  /**
   * Masuk updateMany
   */
  export type MasukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Masuks.
     */
    data: XOR<MasukUpdateManyMutationInput, MasukUncheckedUpdateManyInput>
    /**
     * Filter which Masuks to update
     */
    where?: MasukWhereInput
    /**
     * Limit how many Masuks to update.
     */
    limit?: number
  }

  /**
   * Masuk updateManyAndReturn
   */
  export type MasukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * The data used to update Masuks.
     */
    data: XOR<MasukUpdateManyMutationInput, MasukUncheckedUpdateManyInput>
    /**
     * Filter which Masuks to update
     */
    where?: MasukWhereInput
    /**
     * Limit how many Masuks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Masuk upsert
   */
  export type MasukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * The filter to search for the Masuk to update in case it exists.
     */
    where: MasukWhereUniqueInput
    /**
     * In case the Masuk found by the `where` argument doesn't exist, create a new Masuk with this data.
     */
    create: XOR<MasukCreateInput, MasukUncheckedCreateInput>
    /**
     * In case the Masuk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasukUpdateInput, MasukUncheckedUpdateInput>
  }

  /**
   * Masuk delete
   */
  export type MasukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
    /**
     * Filter which Masuk to delete.
     */
    where: MasukWhereUniqueInput
  }

  /**
   * Masuk deleteMany
   */
  export type MasukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Masuks to delete
     */
    where?: MasukWhereInput
    /**
     * Limit how many Masuks to delete.
     */
    limit?: number
  }

  /**
   * Masuk without action
   */
  export type MasukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Masuk
     */
    select?: MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Masuk
     */
    omit?: MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasukInclude<ExtArgs> | null
  }


  /**
   * Model Keluar
   */

  export type AggregateKeluar = {
    _count: KeluarCountAggregateOutputType | null
    _avg: KeluarAvgAggregateOutputType | null
    _sum: KeluarSumAggregateOutputType | null
    _min: KeluarMinAggregateOutputType | null
    _max: KeluarMaxAggregateOutputType | null
  }

  export type KeluarAvgAggregateOutputType = {
    jumlahKeluar: number | null
  }

  export type KeluarSumAggregateOutputType = {
    jumlahKeluar: number | null
  }

  export type KeluarMinAggregateOutputType = {
    id: string | null
    barangId: string | null
    jumlahKeluar: number | null
    tanggal: Date | null
  }

  export type KeluarMaxAggregateOutputType = {
    id: string | null
    barangId: string | null
    jumlahKeluar: number | null
    tanggal: Date | null
  }

  export type KeluarCountAggregateOutputType = {
    id: number
    barangId: number
    jumlahKeluar: number
    tanggal: number
    _all: number
  }


  export type KeluarAvgAggregateInputType = {
    jumlahKeluar?: true
  }

  export type KeluarSumAggregateInputType = {
    jumlahKeluar?: true
  }

  export type KeluarMinAggregateInputType = {
    id?: true
    barangId?: true
    jumlahKeluar?: true
    tanggal?: true
  }

  export type KeluarMaxAggregateInputType = {
    id?: true
    barangId?: true
    jumlahKeluar?: true
    tanggal?: true
  }

  export type KeluarCountAggregateInputType = {
    id?: true
    barangId?: true
    jumlahKeluar?: true
    tanggal?: true
    _all?: true
  }

  export type KeluarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keluar to aggregate.
     */
    where?: KeluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keluars to fetch.
     */
    orderBy?: KeluarOrderByWithRelationInput | KeluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keluars
    **/
    _count?: true | KeluarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeluarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeluarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeluarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeluarMaxAggregateInputType
  }

  export type GetKeluarAggregateType<T extends KeluarAggregateArgs> = {
        [P in keyof T & keyof AggregateKeluar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeluar[P]>
      : GetScalarType<T[P], AggregateKeluar[P]>
  }




  export type KeluarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeluarWhereInput
    orderBy?: KeluarOrderByWithAggregationInput | KeluarOrderByWithAggregationInput[]
    by: KeluarScalarFieldEnum[] | KeluarScalarFieldEnum
    having?: KeluarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeluarCountAggregateInputType | true
    _avg?: KeluarAvgAggregateInputType
    _sum?: KeluarSumAggregateInputType
    _min?: KeluarMinAggregateInputType
    _max?: KeluarMaxAggregateInputType
  }

  export type KeluarGroupByOutputType = {
    id: string
    barangId: string
    jumlahKeluar: number
    tanggal: Date
    _count: KeluarCountAggregateOutputType | null
    _avg: KeluarAvgAggregateOutputType | null
    _sum: KeluarSumAggregateOutputType | null
    _min: KeluarMinAggregateOutputType | null
    _max: KeluarMaxAggregateOutputType | null
  }

  type GetKeluarGroupByPayload<T extends KeluarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeluarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeluarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeluarGroupByOutputType[P]>
            : GetScalarType<T[P], KeluarGroupByOutputType[P]>
        }
      >
    >


  export type KeluarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barangId?: boolean
    jumlahKeluar?: boolean
    tanggal?: boolean
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keluar"]>

  export type KeluarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barangId?: boolean
    jumlahKeluar?: boolean
    tanggal?: boolean
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keluar"]>

  export type KeluarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    barangId?: boolean
    jumlahKeluar?: boolean
    tanggal?: boolean
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keluar"]>

  export type KeluarSelectScalar = {
    id?: boolean
    barangId?: boolean
    jumlahKeluar?: boolean
    tanggal?: boolean
  }

  export type KeluarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "barangId" | "jumlahKeluar" | "tanggal", ExtArgs["result"]["keluar"]>
  export type KeluarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type KeluarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type KeluarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }

  export type $KeluarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keluar"
    objects: {
      barang: Prisma.$BarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      barangId: string
      jumlahKeluar: number
      tanggal: Date
    }, ExtArgs["result"]["keluar"]>
    composites: {}
  }

  type KeluarGetPayload<S extends boolean | null | undefined | KeluarDefaultArgs> = $Result.GetResult<Prisma.$KeluarPayload, S>

  type KeluarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeluarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeluarCountAggregateInputType | true
    }

  export interface KeluarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keluar'], meta: { name: 'Keluar' } }
    /**
     * Find zero or one Keluar that matches the filter.
     * @param {KeluarFindUniqueArgs} args - Arguments to find a Keluar
     * @example
     * // Get one Keluar
     * const keluar = await prisma.keluar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeluarFindUniqueArgs>(args: SelectSubset<T, KeluarFindUniqueArgs<ExtArgs>>): Prisma__KeluarClient<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keluar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeluarFindUniqueOrThrowArgs} args - Arguments to find a Keluar
     * @example
     * // Get one Keluar
     * const keluar = await prisma.keluar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeluarFindUniqueOrThrowArgs>(args: SelectSubset<T, KeluarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeluarClient<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keluar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeluarFindFirstArgs} args - Arguments to find a Keluar
     * @example
     * // Get one Keluar
     * const keluar = await prisma.keluar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeluarFindFirstArgs>(args?: SelectSubset<T, KeluarFindFirstArgs<ExtArgs>>): Prisma__KeluarClient<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keluar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeluarFindFirstOrThrowArgs} args - Arguments to find a Keluar
     * @example
     * // Get one Keluar
     * const keluar = await prisma.keluar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeluarFindFirstOrThrowArgs>(args?: SelectSubset<T, KeluarFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeluarClient<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keluars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeluarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keluars
     * const keluars = await prisma.keluar.findMany()
     * 
     * // Get first 10 Keluars
     * const keluars = await prisma.keluar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keluarWithIdOnly = await prisma.keluar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeluarFindManyArgs>(args?: SelectSubset<T, KeluarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keluar.
     * @param {KeluarCreateArgs} args - Arguments to create a Keluar.
     * @example
     * // Create one Keluar
     * const Keluar = await prisma.keluar.create({
     *   data: {
     *     // ... data to create a Keluar
     *   }
     * })
     * 
     */
    create<T extends KeluarCreateArgs>(args: SelectSubset<T, KeluarCreateArgs<ExtArgs>>): Prisma__KeluarClient<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keluars.
     * @param {KeluarCreateManyArgs} args - Arguments to create many Keluars.
     * @example
     * // Create many Keluars
     * const keluar = await prisma.keluar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeluarCreateManyArgs>(args?: SelectSubset<T, KeluarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keluars and returns the data saved in the database.
     * @param {KeluarCreateManyAndReturnArgs} args - Arguments to create many Keluars.
     * @example
     * // Create many Keluars
     * const keluar = await prisma.keluar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keluars and only return the `id`
     * const keluarWithIdOnly = await prisma.keluar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeluarCreateManyAndReturnArgs>(args?: SelectSubset<T, KeluarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keluar.
     * @param {KeluarDeleteArgs} args - Arguments to delete one Keluar.
     * @example
     * // Delete one Keluar
     * const Keluar = await prisma.keluar.delete({
     *   where: {
     *     // ... filter to delete one Keluar
     *   }
     * })
     * 
     */
    delete<T extends KeluarDeleteArgs>(args: SelectSubset<T, KeluarDeleteArgs<ExtArgs>>): Prisma__KeluarClient<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keluar.
     * @param {KeluarUpdateArgs} args - Arguments to update one Keluar.
     * @example
     * // Update one Keluar
     * const keluar = await prisma.keluar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeluarUpdateArgs>(args: SelectSubset<T, KeluarUpdateArgs<ExtArgs>>): Prisma__KeluarClient<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keluars.
     * @param {KeluarDeleteManyArgs} args - Arguments to filter Keluars to delete.
     * @example
     * // Delete a few Keluars
     * const { count } = await prisma.keluar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeluarDeleteManyArgs>(args?: SelectSubset<T, KeluarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keluars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeluarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keluars
     * const keluar = await prisma.keluar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeluarUpdateManyArgs>(args: SelectSubset<T, KeluarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keluars and returns the data updated in the database.
     * @param {KeluarUpdateManyAndReturnArgs} args - Arguments to update many Keluars.
     * @example
     * // Update many Keluars
     * const keluar = await prisma.keluar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keluars and only return the `id`
     * const keluarWithIdOnly = await prisma.keluar.updateManyAndReturn({
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
    updateManyAndReturn<T extends KeluarUpdateManyAndReturnArgs>(args: SelectSubset<T, KeluarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keluar.
     * @param {KeluarUpsertArgs} args - Arguments to update or create a Keluar.
     * @example
     * // Update or create a Keluar
     * const keluar = await prisma.keluar.upsert({
     *   create: {
     *     // ... data to create a Keluar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keluar we want to update
     *   }
     * })
     */
    upsert<T extends KeluarUpsertArgs>(args: SelectSubset<T, KeluarUpsertArgs<ExtArgs>>): Prisma__KeluarClient<$Result.GetResult<Prisma.$KeluarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keluars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeluarCountArgs} args - Arguments to filter Keluars to count.
     * @example
     * // Count the number of Keluars
     * const count = await prisma.keluar.count({
     *   where: {
     *     // ... the filter for the Keluars we want to count
     *   }
     * })
    **/
    count<T extends KeluarCountArgs>(
      args?: Subset<T, KeluarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeluarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keluar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeluarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeluarAggregateArgs>(args: Subset<T, KeluarAggregateArgs>): Prisma.PrismaPromise<GetKeluarAggregateType<T>>

    /**
     * Group by Keluar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeluarGroupByArgs} args - Group by arguments.
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
      T extends KeluarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeluarGroupByArgs['orderBy'] }
        : { orderBy?: KeluarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeluarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeluarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keluar model
   */
  readonly fields: KeluarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keluar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeluarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barang<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Keluar model
   */
  interface KeluarFieldRefs {
    readonly id: FieldRef<"Keluar", 'String'>
    readonly barangId: FieldRef<"Keluar", 'String'>
    readonly jumlahKeluar: FieldRef<"Keluar", 'Int'>
    readonly tanggal: FieldRef<"Keluar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Keluar findUnique
   */
  export type KeluarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Keluar to fetch.
     */
    where: KeluarWhereUniqueInput
  }

  /**
   * Keluar findUniqueOrThrow
   */
  export type KeluarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Keluar to fetch.
     */
    where: KeluarWhereUniqueInput
  }

  /**
   * Keluar findFirst
   */
  export type KeluarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Keluar to fetch.
     */
    where?: KeluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keluars to fetch.
     */
    orderBy?: KeluarOrderByWithRelationInput | KeluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keluars.
     */
    cursor?: KeluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keluars.
     */
    distinct?: KeluarScalarFieldEnum | KeluarScalarFieldEnum[]
  }

  /**
   * Keluar findFirstOrThrow
   */
  export type KeluarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Keluar to fetch.
     */
    where?: KeluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keluars to fetch.
     */
    orderBy?: KeluarOrderByWithRelationInput | KeluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keluars.
     */
    cursor?: KeluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keluars.
     */
    distinct?: KeluarScalarFieldEnum | KeluarScalarFieldEnum[]
  }

  /**
   * Keluar findMany
   */
  export type KeluarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Keluars to fetch.
     */
    where?: KeluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keluars to fetch.
     */
    orderBy?: KeluarOrderByWithRelationInput | KeluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keluars.
     */
    cursor?: KeluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keluars.
     */
    skip?: number
    distinct?: KeluarScalarFieldEnum | KeluarScalarFieldEnum[]
  }

  /**
   * Keluar create
   */
  export type KeluarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * The data needed to create a Keluar.
     */
    data: XOR<KeluarCreateInput, KeluarUncheckedCreateInput>
  }

  /**
   * Keluar createMany
   */
  export type KeluarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keluars.
     */
    data: KeluarCreateManyInput | KeluarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keluar createManyAndReturn
   */
  export type KeluarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * The data used to create many Keluars.
     */
    data: KeluarCreateManyInput | KeluarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keluar update
   */
  export type KeluarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * The data needed to update a Keluar.
     */
    data: XOR<KeluarUpdateInput, KeluarUncheckedUpdateInput>
    /**
     * Choose, which Keluar to update.
     */
    where: KeluarWhereUniqueInput
  }

  /**
   * Keluar updateMany
   */
  export type KeluarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keluars.
     */
    data: XOR<KeluarUpdateManyMutationInput, KeluarUncheckedUpdateManyInput>
    /**
     * Filter which Keluars to update
     */
    where?: KeluarWhereInput
    /**
     * Limit how many Keluars to update.
     */
    limit?: number
  }

  /**
   * Keluar updateManyAndReturn
   */
  export type KeluarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * The data used to update Keluars.
     */
    data: XOR<KeluarUpdateManyMutationInput, KeluarUncheckedUpdateManyInput>
    /**
     * Filter which Keluars to update
     */
    where?: KeluarWhereInput
    /**
     * Limit how many Keluars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keluar upsert
   */
  export type KeluarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * The filter to search for the Keluar to update in case it exists.
     */
    where: KeluarWhereUniqueInput
    /**
     * In case the Keluar found by the `where` argument doesn't exist, create a new Keluar with this data.
     */
    create: XOR<KeluarCreateInput, KeluarUncheckedCreateInput>
    /**
     * In case the Keluar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeluarUpdateInput, KeluarUncheckedUpdateInput>
  }

  /**
   * Keluar delete
   */
  export type KeluarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
    /**
     * Filter which Keluar to delete.
     */
    where: KeluarWhereUniqueInput
  }

  /**
   * Keluar deleteMany
   */
  export type KeluarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keluars to delete
     */
    where?: KeluarWhereInput
    /**
     * Limit how many Keluars to delete.
     */
    limit?: number
  }

  /**
   * Keluar without action
   */
  export type KeluarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keluar
     */
    select?: KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keluar
     */
    omit?: KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeluarInclude<ExtArgs> | null
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
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BarangScalarFieldEnum: {
    id: 'id',
    kodeBarang: 'kodeBarang',
    namaBarang: 'namaBarang'
  };

  export type BarangScalarFieldEnum = (typeof BarangScalarFieldEnum)[keyof typeof BarangScalarFieldEnum]


  export const MasukScalarFieldEnum: {
    id: 'id',
    barangId: 'barangId',
    jumlahMasuk: 'jumlahMasuk',
    tanggal: 'tanggal'
  };

  export type MasukScalarFieldEnum = (typeof MasukScalarFieldEnum)[keyof typeof MasukScalarFieldEnum]


  export const KeluarScalarFieldEnum: {
    id: 'id',
    barangId: 'barangId',
    jumlahKeluar: 'jumlahKeluar',
    tanggal: 'tanggal'
  };

  export type KeluarScalarFieldEnum = (typeof KeluarScalarFieldEnum)[keyof typeof KeluarScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type BarangWhereInput = {
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    id?: StringFilter<"Barang"> | string
    kodeBarang?: StringFilter<"Barang"> | string
    namaBarang?: StringFilter<"Barang"> | string
    masuk?: MasukListRelationFilter
    keluar?: KeluarListRelationFilter
  }

  export type BarangOrderByWithRelationInput = {
    id?: SortOrder
    kodeBarang?: SortOrder
    namaBarang?: SortOrder
    masuk?: MasukOrderByRelationAggregateInput
    keluar?: KeluarOrderByRelationAggregateInput
  }

  export type BarangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kodeBarang?: string
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    namaBarang?: StringFilter<"Barang"> | string
    masuk?: MasukListRelationFilter
    keluar?: KeluarListRelationFilter
  }, "id" | "kodeBarang">

  export type BarangOrderByWithAggregationInput = {
    id?: SortOrder
    kodeBarang?: SortOrder
    namaBarang?: SortOrder
    _count?: BarangCountOrderByAggregateInput
    _max?: BarangMaxOrderByAggregateInput
    _min?: BarangMinOrderByAggregateInput
  }

  export type BarangScalarWhereWithAggregatesInput = {
    AND?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    OR?: BarangScalarWhereWithAggregatesInput[]
    NOT?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Barang"> | string
    kodeBarang?: StringWithAggregatesFilter<"Barang"> | string
    namaBarang?: StringWithAggregatesFilter<"Barang"> | string
  }

  export type MasukWhereInput = {
    AND?: MasukWhereInput | MasukWhereInput[]
    OR?: MasukWhereInput[]
    NOT?: MasukWhereInput | MasukWhereInput[]
    id?: StringFilter<"Masuk"> | string
    barangId?: StringFilter<"Masuk"> | string
    jumlahMasuk?: IntFilter<"Masuk"> | number
    tanggal?: DateTimeFilter<"Masuk"> | Date | string
    barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }

  export type MasukOrderByWithRelationInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahMasuk?: SortOrder
    tanggal?: SortOrder
    barang?: BarangOrderByWithRelationInput
  }

  export type MasukWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasukWhereInput | MasukWhereInput[]
    OR?: MasukWhereInput[]
    NOT?: MasukWhereInput | MasukWhereInput[]
    barangId?: StringFilter<"Masuk"> | string
    jumlahMasuk?: IntFilter<"Masuk"> | number
    tanggal?: DateTimeFilter<"Masuk"> | Date | string
    barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }, "id">

  export type MasukOrderByWithAggregationInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahMasuk?: SortOrder
    tanggal?: SortOrder
    _count?: MasukCountOrderByAggregateInput
    _avg?: MasukAvgOrderByAggregateInput
    _max?: MasukMaxOrderByAggregateInput
    _min?: MasukMinOrderByAggregateInput
    _sum?: MasukSumOrderByAggregateInput
  }

  export type MasukScalarWhereWithAggregatesInput = {
    AND?: MasukScalarWhereWithAggregatesInput | MasukScalarWhereWithAggregatesInput[]
    OR?: MasukScalarWhereWithAggregatesInput[]
    NOT?: MasukScalarWhereWithAggregatesInput | MasukScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Masuk"> | string
    barangId?: StringWithAggregatesFilter<"Masuk"> | string
    jumlahMasuk?: IntWithAggregatesFilter<"Masuk"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Masuk"> | Date | string
  }

  export type KeluarWhereInput = {
    AND?: KeluarWhereInput | KeluarWhereInput[]
    OR?: KeluarWhereInput[]
    NOT?: KeluarWhereInput | KeluarWhereInput[]
    id?: StringFilter<"Keluar"> | string
    barangId?: StringFilter<"Keluar"> | string
    jumlahKeluar?: IntFilter<"Keluar"> | number
    tanggal?: DateTimeFilter<"Keluar"> | Date | string
    barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }

  export type KeluarOrderByWithRelationInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahKeluar?: SortOrder
    tanggal?: SortOrder
    barang?: BarangOrderByWithRelationInput
  }

  export type KeluarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KeluarWhereInput | KeluarWhereInput[]
    OR?: KeluarWhereInput[]
    NOT?: KeluarWhereInput | KeluarWhereInput[]
    barangId?: StringFilter<"Keluar"> | string
    jumlahKeluar?: IntFilter<"Keluar"> | number
    tanggal?: DateTimeFilter<"Keluar"> | Date | string
    barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }, "id">

  export type KeluarOrderByWithAggregationInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahKeluar?: SortOrder
    tanggal?: SortOrder
    _count?: KeluarCountOrderByAggregateInput
    _avg?: KeluarAvgOrderByAggregateInput
    _max?: KeluarMaxOrderByAggregateInput
    _min?: KeluarMinOrderByAggregateInput
    _sum?: KeluarSumOrderByAggregateInput
  }

  export type KeluarScalarWhereWithAggregatesInput = {
    AND?: KeluarScalarWhereWithAggregatesInput | KeluarScalarWhereWithAggregatesInput[]
    OR?: KeluarScalarWhereWithAggregatesInput[]
    NOT?: KeluarScalarWhereWithAggregatesInput | KeluarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Keluar"> | string
    barangId?: StringWithAggregatesFilter<"Keluar"> | string
    jumlahKeluar?: IntWithAggregatesFilter<"Keluar"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Keluar"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BarangCreateInput = {
    id?: string
    kodeBarang: string
    namaBarang: string
    masuk?: MasukCreateNestedManyWithoutBarangInput
    keluar?: KeluarCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateInput = {
    id?: string
    kodeBarang: string
    namaBarang: string
    masuk?: MasukUncheckedCreateNestedManyWithoutBarangInput
    keluar?: KeluarUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    masuk?: MasukUpdateManyWithoutBarangNestedInput
    keluar?: KeluarUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    masuk?: MasukUncheckedUpdateManyWithoutBarangNestedInput
    keluar?: KeluarUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangCreateManyInput = {
    id?: string
    kodeBarang: string
    namaBarang: string
  }

  export type BarangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
  }

  export type BarangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
  }

  export type MasukCreateInput = {
    id?: string
    jumlahMasuk: number
    tanggal: Date | string
    barang: BarangCreateNestedOneWithoutMasukInput
  }

  export type MasukUncheckedCreateInput = {
    id?: string
    barangId: string
    jumlahMasuk: number
    tanggal: Date | string
  }

  export type MasukUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahMasuk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    barang?: BarangUpdateOneRequiredWithoutMasukNestedInput
  }

  export type MasukUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barangId?: StringFieldUpdateOperationsInput | string
    jumlahMasuk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasukCreateManyInput = {
    id?: string
    barangId: string
    jumlahMasuk: number
    tanggal: Date | string
  }

  export type MasukUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahMasuk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasukUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    barangId?: StringFieldUpdateOperationsInput | string
    jumlahMasuk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeluarCreateInput = {
    id?: string
    jumlahKeluar: number
    tanggal: Date | string
    barang: BarangCreateNestedOneWithoutKeluarInput
  }

  export type KeluarUncheckedCreateInput = {
    id?: string
    barangId: string
    jumlahKeluar: number
    tanggal: Date | string
  }

  export type KeluarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahKeluar?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    barang?: BarangUpdateOneRequiredWithoutKeluarNestedInput
  }

  export type KeluarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    barangId?: StringFieldUpdateOperationsInput | string
    jumlahKeluar?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeluarCreateManyInput = {
    id?: string
    barangId: string
    jumlahKeluar: number
    tanggal: Date | string
  }

  export type KeluarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahKeluar?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeluarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    barangId?: StringFieldUpdateOperationsInput | string
    jumlahKeluar?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
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

  export type MasukListRelationFilter = {
    every?: MasukWhereInput
    some?: MasukWhereInput
    none?: MasukWhereInput
  }

  export type KeluarListRelationFilter = {
    every?: KeluarWhereInput
    some?: KeluarWhereInput
    none?: KeluarWhereInput
  }

  export type MasukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeluarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangCountOrderByAggregateInput = {
    id?: SortOrder
    kodeBarang?: SortOrder
    namaBarang?: SortOrder
  }

  export type BarangMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeBarang?: SortOrder
    namaBarang?: SortOrder
  }

  export type BarangMinOrderByAggregateInput = {
    id?: SortOrder
    kodeBarang?: SortOrder
    namaBarang?: SortOrder
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

  export type BarangScalarRelationFilter = {
    is?: BarangWhereInput
    isNot?: BarangWhereInput
  }

  export type MasukCountOrderByAggregateInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahMasuk?: SortOrder
    tanggal?: SortOrder
  }

  export type MasukAvgOrderByAggregateInput = {
    jumlahMasuk?: SortOrder
  }

  export type MasukMaxOrderByAggregateInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahMasuk?: SortOrder
    tanggal?: SortOrder
  }

  export type MasukMinOrderByAggregateInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahMasuk?: SortOrder
    tanggal?: SortOrder
  }

  export type MasukSumOrderByAggregateInput = {
    jumlahMasuk?: SortOrder
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

  export type KeluarCountOrderByAggregateInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahKeluar?: SortOrder
    tanggal?: SortOrder
  }

  export type KeluarAvgOrderByAggregateInput = {
    jumlahKeluar?: SortOrder
  }

  export type KeluarMaxOrderByAggregateInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahKeluar?: SortOrder
    tanggal?: SortOrder
  }

  export type KeluarMinOrderByAggregateInput = {
    id?: SortOrder
    barangId?: SortOrder
    jumlahKeluar?: SortOrder
    tanggal?: SortOrder
  }

  export type KeluarSumOrderByAggregateInput = {
    jumlahKeluar?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MasukCreateNestedManyWithoutBarangInput = {
    create?: XOR<MasukCreateWithoutBarangInput, MasukUncheckedCreateWithoutBarangInput> | MasukCreateWithoutBarangInput[] | MasukUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: MasukCreateOrConnectWithoutBarangInput | MasukCreateOrConnectWithoutBarangInput[]
    createMany?: MasukCreateManyBarangInputEnvelope
    connect?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
  }

  export type KeluarCreateNestedManyWithoutBarangInput = {
    create?: XOR<KeluarCreateWithoutBarangInput, KeluarUncheckedCreateWithoutBarangInput> | KeluarCreateWithoutBarangInput[] | KeluarUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: KeluarCreateOrConnectWithoutBarangInput | KeluarCreateOrConnectWithoutBarangInput[]
    createMany?: KeluarCreateManyBarangInputEnvelope
    connect?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
  }

  export type MasukUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<MasukCreateWithoutBarangInput, MasukUncheckedCreateWithoutBarangInput> | MasukCreateWithoutBarangInput[] | MasukUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: MasukCreateOrConnectWithoutBarangInput | MasukCreateOrConnectWithoutBarangInput[]
    createMany?: MasukCreateManyBarangInputEnvelope
    connect?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
  }

  export type KeluarUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<KeluarCreateWithoutBarangInput, KeluarUncheckedCreateWithoutBarangInput> | KeluarCreateWithoutBarangInput[] | KeluarUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: KeluarCreateOrConnectWithoutBarangInput | KeluarCreateOrConnectWithoutBarangInput[]
    createMany?: KeluarCreateManyBarangInputEnvelope
    connect?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
  }

  export type MasukUpdateManyWithoutBarangNestedInput = {
    create?: XOR<MasukCreateWithoutBarangInput, MasukUncheckedCreateWithoutBarangInput> | MasukCreateWithoutBarangInput[] | MasukUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: MasukCreateOrConnectWithoutBarangInput | MasukCreateOrConnectWithoutBarangInput[]
    upsert?: MasukUpsertWithWhereUniqueWithoutBarangInput | MasukUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: MasukCreateManyBarangInputEnvelope
    set?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
    disconnect?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
    delete?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
    connect?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
    update?: MasukUpdateWithWhereUniqueWithoutBarangInput | MasukUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: MasukUpdateManyWithWhereWithoutBarangInput | MasukUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: MasukScalarWhereInput | MasukScalarWhereInput[]
  }

  export type KeluarUpdateManyWithoutBarangNestedInput = {
    create?: XOR<KeluarCreateWithoutBarangInput, KeluarUncheckedCreateWithoutBarangInput> | KeluarCreateWithoutBarangInput[] | KeluarUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: KeluarCreateOrConnectWithoutBarangInput | KeluarCreateOrConnectWithoutBarangInput[]
    upsert?: KeluarUpsertWithWhereUniqueWithoutBarangInput | KeluarUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: KeluarCreateManyBarangInputEnvelope
    set?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
    disconnect?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
    delete?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
    connect?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
    update?: KeluarUpdateWithWhereUniqueWithoutBarangInput | KeluarUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: KeluarUpdateManyWithWhereWithoutBarangInput | KeluarUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: KeluarScalarWhereInput | KeluarScalarWhereInput[]
  }

  export type MasukUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<MasukCreateWithoutBarangInput, MasukUncheckedCreateWithoutBarangInput> | MasukCreateWithoutBarangInput[] | MasukUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: MasukCreateOrConnectWithoutBarangInput | MasukCreateOrConnectWithoutBarangInput[]
    upsert?: MasukUpsertWithWhereUniqueWithoutBarangInput | MasukUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: MasukCreateManyBarangInputEnvelope
    set?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
    disconnect?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
    delete?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
    connect?: MasukWhereUniqueInput | MasukWhereUniqueInput[]
    update?: MasukUpdateWithWhereUniqueWithoutBarangInput | MasukUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: MasukUpdateManyWithWhereWithoutBarangInput | MasukUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: MasukScalarWhereInput | MasukScalarWhereInput[]
  }

  export type KeluarUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<KeluarCreateWithoutBarangInput, KeluarUncheckedCreateWithoutBarangInput> | KeluarCreateWithoutBarangInput[] | KeluarUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: KeluarCreateOrConnectWithoutBarangInput | KeluarCreateOrConnectWithoutBarangInput[]
    upsert?: KeluarUpsertWithWhereUniqueWithoutBarangInput | KeluarUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: KeluarCreateManyBarangInputEnvelope
    set?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
    disconnect?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
    delete?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
    connect?: KeluarWhereUniqueInput | KeluarWhereUniqueInput[]
    update?: KeluarUpdateWithWhereUniqueWithoutBarangInput | KeluarUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: KeluarUpdateManyWithWhereWithoutBarangInput | KeluarUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: KeluarScalarWhereInput | KeluarScalarWhereInput[]
  }

  export type BarangCreateNestedOneWithoutMasukInput = {
    create?: XOR<BarangCreateWithoutMasukInput, BarangUncheckedCreateWithoutMasukInput>
    connectOrCreate?: BarangCreateOrConnectWithoutMasukInput
    connect?: BarangWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BarangUpdateOneRequiredWithoutMasukNestedInput = {
    create?: XOR<BarangCreateWithoutMasukInput, BarangUncheckedCreateWithoutMasukInput>
    connectOrCreate?: BarangCreateOrConnectWithoutMasukInput
    upsert?: BarangUpsertWithoutMasukInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutMasukInput, BarangUpdateWithoutMasukInput>, BarangUncheckedUpdateWithoutMasukInput>
  }

  export type BarangCreateNestedOneWithoutKeluarInput = {
    create?: XOR<BarangCreateWithoutKeluarInput, BarangUncheckedCreateWithoutKeluarInput>
    connectOrCreate?: BarangCreateOrConnectWithoutKeluarInput
    connect?: BarangWhereUniqueInput
  }

  export type BarangUpdateOneRequiredWithoutKeluarNestedInput = {
    create?: XOR<BarangCreateWithoutKeluarInput, BarangUncheckedCreateWithoutKeluarInput>
    connectOrCreate?: BarangCreateOrConnectWithoutKeluarInput
    upsert?: BarangUpsertWithoutKeluarInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutKeluarInput, BarangUpdateWithoutKeluarInput>, BarangUncheckedUpdateWithoutKeluarInput>
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

  export type MasukCreateWithoutBarangInput = {
    id?: string
    jumlahMasuk: number
    tanggal: Date | string
  }

  export type MasukUncheckedCreateWithoutBarangInput = {
    id?: string
    jumlahMasuk: number
    tanggal: Date | string
  }

  export type MasukCreateOrConnectWithoutBarangInput = {
    where: MasukWhereUniqueInput
    create: XOR<MasukCreateWithoutBarangInput, MasukUncheckedCreateWithoutBarangInput>
  }

  export type MasukCreateManyBarangInputEnvelope = {
    data: MasukCreateManyBarangInput | MasukCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type KeluarCreateWithoutBarangInput = {
    id?: string
    jumlahKeluar: number
    tanggal: Date | string
  }

  export type KeluarUncheckedCreateWithoutBarangInput = {
    id?: string
    jumlahKeluar: number
    tanggal: Date | string
  }

  export type KeluarCreateOrConnectWithoutBarangInput = {
    where: KeluarWhereUniqueInput
    create: XOR<KeluarCreateWithoutBarangInput, KeluarUncheckedCreateWithoutBarangInput>
  }

  export type KeluarCreateManyBarangInputEnvelope = {
    data: KeluarCreateManyBarangInput | KeluarCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type MasukUpsertWithWhereUniqueWithoutBarangInput = {
    where: MasukWhereUniqueInput
    update: XOR<MasukUpdateWithoutBarangInput, MasukUncheckedUpdateWithoutBarangInput>
    create: XOR<MasukCreateWithoutBarangInput, MasukUncheckedCreateWithoutBarangInput>
  }

  export type MasukUpdateWithWhereUniqueWithoutBarangInput = {
    where: MasukWhereUniqueInput
    data: XOR<MasukUpdateWithoutBarangInput, MasukUncheckedUpdateWithoutBarangInput>
  }

  export type MasukUpdateManyWithWhereWithoutBarangInput = {
    where: MasukScalarWhereInput
    data: XOR<MasukUpdateManyMutationInput, MasukUncheckedUpdateManyWithoutBarangInput>
  }

  export type MasukScalarWhereInput = {
    AND?: MasukScalarWhereInput | MasukScalarWhereInput[]
    OR?: MasukScalarWhereInput[]
    NOT?: MasukScalarWhereInput | MasukScalarWhereInput[]
    id?: StringFilter<"Masuk"> | string
    barangId?: StringFilter<"Masuk"> | string
    jumlahMasuk?: IntFilter<"Masuk"> | number
    tanggal?: DateTimeFilter<"Masuk"> | Date | string
  }

  export type KeluarUpsertWithWhereUniqueWithoutBarangInput = {
    where: KeluarWhereUniqueInput
    update: XOR<KeluarUpdateWithoutBarangInput, KeluarUncheckedUpdateWithoutBarangInput>
    create: XOR<KeluarCreateWithoutBarangInput, KeluarUncheckedCreateWithoutBarangInput>
  }

  export type KeluarUpdateWithWhereUniqueWithoutBarangInput = {
    where: KeluarWhereUniqueInput
    data: XOR<KeluarUpdateWithoutBarangInput, KeluarUncheckedUpdateWithoutBarangInput>
  }

  export type KeluarUpdateManyWithWhereWithoutBarangInput = {
    where: KeluarScalarWhereInput
    data: XOR<KeluarUpdateManyMutationInput, KeluarUncheckedUpdateManyWithoutBarangInput>
  }

  export type KeluarScalarWhereInput = {
    AND?: KeluarScalarWhereInput | KeluarScalarWhereInput[]
    OR?: KeluarScalarWhereInput[]
    NOT?: KeluarScalarWhereInput | KeluarScalarWhereInput[]
    id?: StringFilter<"Keluar"> | string
    barangId?: StringFilter<"Keluar"> | string
    jumlahKeluar?: IntFilter<"Keluar"> | number
    tanggal?: DateTimeFilter<"Keluar"> | Date | string
  }

  export type BarangCreateWithoutMasukInput = {
    id?: string
    kodeBarang: string
    namaBarang: string
    keluar?: KeluarCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateWithoutMasukInput = {
    id?: string
    kodeBarang: string
    namaBarang: string
    keluar?: KeluarUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangCreateOrConnectWithoutMasukInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutMasukInput, BarangUncheckedCreateWithoutMasukInput>
  }

  export type BarangUpsertWithoutMasukInput = {
    update: XOR<BarangUpdateWithoutMasukInput, BarangUncheckedUpdateWithoutMasukInput>
    create: XOR<BarangCreateWithoutMasukInput, BarangUncheckedCreateWithoutMasukInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutMasukInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutMasukInput, BarangUncheckedUpdateWithoutMasukInput>
  }

  export type BarangUpdateWithoutMasukInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    keluar?: KeluarUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateWithoutMasukInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    keluar?: KeluarUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangCreateWithoutKeluarInput = {
    id?: string
    kodeBarang: string
    namaBarang: string
    masuk?: MasukCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateWithoutKeluarInput = {
    id?: string
    kodeBarang: string
    namaBarang: string
    masuk?: MasukUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangCreateOrConnectWithoutKeluarInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutKeluarInput, BarangUncheckedCreateWithoutKeluarInput>
  }

  export type BarangUpsertWithoutKeluarInput = {
    update: XOR<BarangUpdateWithoutKeluarInput, BarangUncheckedUpdateWithoutKeluarInput>
    create: XOR<BarangCreateWithoutKeluarInput, BarangUncheckedCreateWithoutKeluarInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutKeluarInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutKeluarInput, BarangUncheckedUpdateWithoutKeluarInput>
  }

  export type BarangUpdateWithoutKeluarInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    masuk?: MasukUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateWithoutKeluarInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeBarang?: StringFieldUpdateOperationsInput | string
    namaBarang?: StringFieldUpdateOperationsInput | string
    masuk?: MasukUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type MasukCreateManyBarangInput = {
    id?: string
    jumlahMasuk: number
    tanggal: Date | string
  }

  export type KeluarCreateManyBarangInput = {
    id?: string
    jumlahKeluar: number
    tanggal: Date | string
  }

  export type MasukUpdateWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahMasuk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasukUncheckedUpdateWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahMasuk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasukUncheckedUpdateManyWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahMasuk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeluarUpdateWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahKeluar?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeluarUncheckedUpdateWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahKeluar?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeluarUncheckedUpdateManyWithoutBarangInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahKeluar?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
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