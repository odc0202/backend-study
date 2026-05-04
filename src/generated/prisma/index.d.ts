
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Study
 * 
 */
export type Study = $Result.DefaultSelection<Prisma.$StudyPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model StudyReaction
 * 
 */
export type StudyReaction = $Result.DefaultSelection<Prisma.$StudyReactionPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model HabitLog
 * 
 */
export type HabitLog = $Result.DefaultSelection<Prisma.$HabitLogPayload>
/**
 * Model FocusSession
 * 
 */
export type FocusSession = $Result.DefaultSelection<Prisma.$FocusSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BackgroundType: {
  COLOR: 'COLOR',
  IMAGE: 'IMAGE'
};

export type BackgroundType = (typeof BackgroundType)[keyof typeof BackgroundType]


export const FocusStatus: {
  IDLE: 'IDLE',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  DONE: 'DONE'
};

export type FocusStatus = (typeof FocusStatus)[keyof typeof FocusStatus]

}

export type BackgroundType = $Enums.BackgroundType

export const BackgroundType: typeof $Enums.BackgroundType

export type FocusStatus = $Enums.FocusStatus

export const FocusStatus: typeof $Enums.FocusStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Studies
 * const studies = await prisma.study.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Studies
   * const studies = await prisma.study.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.study`: Exposes CRUD operations for the **Study** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studies
    * const studies = await prisma.study.findMany()
    * ```
    */
  get study(): Prisma.StudyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyReaction`: Exposes CRUD operations for the **StudyReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyReactions
    * const studyReactions = await prisma.studyReaction.findMany()
    * ```
    */
  get studyReaction(): Prisma.StudyReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitLog`: Exposes CRUD operations for the **HabitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitLogs
    * const habitLogs = await prisma.habitLog.findMany()
    * ```
    */
  get habitLog(): Prisma.HabitLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.focusSession`: Exposes CRUD operations for the **FocusSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FocusSessions
    * const focusSessions = await prisma.focusSession.findMany()
    * ```
    */
  get focusSession(): Prisma.FocusSessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    Study: 'Study',
    Participant: 'Participant',
    StudyReaction: 'StudyReaction',
    Habit: 'Habit',
    HabitLog: 'HabitLog',
    FocusSession: 'FocusSession'
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
      modelProps: "study" | "participant" | "studyReaction" | "habit" | "habitLog" | "focusSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Study: {
        payload: Prisma.$StudyPayload<ExtArgs>
        fields: Prisma.StudyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          findFirst: {
            args: Prisma.StudyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          findMany: {
            args: Prisma.StudyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[]
          }
          create: {
            args: Prisma.StudyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          createMany: {
            args: Prisma.StudyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[]
          }
          delete: {
            args: Prisma.StudyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          update: {
            args: Prisma.StudyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          deleteMany: {
            args: Prisma.StudyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>[]
          }
          upsert: {
            args: Prisma.StudyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyPayload>
          }
          aggregate: {
            args: Prisma.StudyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudy>
          }
          groupBy: {
            args: Prisma.StudyGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyCountArgs<ExtArgs>
            result: $Utils.Optional<StudyCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      StudyReaction: {
        payload: Prisma.$StudyReactionPayload<ExtArgs>
        fields: Prisma.StudyReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>
          }
          findFirst: {
            args: Prisma.StudyReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>
          }
          findMany: {
            args: Prisma.StudyReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>[]
          }
          create: {
            args: Prisma.StudyReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>
          }
          createMany: {
            args: Prisma.StudyReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>[]
          }
          delete: {
            args: Prisma.StudyReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>
          }
          update: {
            args: Prisma.StudyReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>
          }
          deleteMany: {
            args: Prisma.StudyReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>[]
          }
          upsert: {
            args: Prisma.StudyReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyReactionPayload>
          }
          aggregate: {
            args: Prisma.StudyReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyReaction>
          }
          groupBy: {
            args: Prisma.StudyReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyReactionCountArgs<ExtArgs>
            result: $Utils.Optional<StudyReactionCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      HabitLog: {
        payload: Prisma.$HabitLogPayload<ExtArgs>
        fields: Prisma.HabitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findFirst: {
            args: Prisma.HabitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findMany: {
            args: Prisma.HabitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          create: {
            args: Prisma.HabitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          createMany: {
            args: Prisma.HabitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          delete: {
            args: Prisma.HabitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          update: {
            args: Prisma.HabitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          deleteMany: {
            args: Prisma.HabitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          upsert: {
            args: Prisma.HabitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          aggregate: {
            args: Prisma.HabitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitLog>
          }
          groupBy: {
            args: Prisma.HabitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitLogCountArgs<ExtArgs>
            result: $Utils.Optional<HabitLogCountAggregateOutputType> | number
          }
        }
      }
      FocusSession: {
        payload: Prisma.$FocusSessionPayload<ExtArgs>
        fields: Prisma.FocusSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FocusSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FocusSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          findFirst: {
            args: Prisma.FocusSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FocusSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          findMany: {
            args: Prisma.FocusSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          create: {
            args: Prisma.FocusSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          createMany: {
            args: Prisma.FocusSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FocusSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          delete: {
            args: Prisma.FocusSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          update: {
            args: Prisma.FocusSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          deleteMany: {
            args: Prisma.FocusSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FocusSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FocusSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          upsert: {
            args: Prisma.FocusSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          aggregate: {
            args: Prisma.FocusSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFocusSession>
          }
          groupBy: {
            args: Prisma.FocusSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FocusSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FocusSessionCountArgs<ExtArgs>
            result: $Utils.Optional<FocusSessionCountAggregateOutputType> | number
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
    study?: StudyOmit
    participant?: ParticipantOmit
    studyReaction?: StudyReactionOmit
    habit?: HabitOmit
    habitLog?: HabitLogOmit
    focusSession?: FocusSessionOmit
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
   * Count Type StudyCountOutputType
   */

  export type StudyCountOutputType = {
    habits: number
    participants: number
    focusSessions: number
    reactions: number
  }

  export type StudyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | StudyCountOutputTypeCountHabitsArgs
    participants?: boolean | StudyCountOutputTypeCountParticipantsArgs
    focusSessions?: boolean | StudyCountOutputTypeCountFocusSessionsArgs
    reactions?: boolean | StudyCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * StudyCountOutputType without action
   */
  export type StudyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyCountOutputType
     */
    select?: StudyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudyCountOutputType without action
   */
  export type StudyCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * StudyCountOutputType without action
   */
  export type StudyCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }

  /**
   * StudyCountOutputType without action
   */
  export type StudyCountOutputTypeCountFocusSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
  }

  /**
   * StudyCountOutputType without action
   */
  export type StudyCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyReactionWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    logs: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | HabitCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Study
   */

  export type AggregateStudy = {
    _count: StudyCountAggregateOutputType | null
    _avg: StudyAvgAggregateOutputType | null
    _sum: StudySumAggregateOutputType | null
    _min: StudyMinAggregateOutputType | null
    _max: StudyMaxAggregateOutputType | null
  }

  export type StudyAvgAggregateOutputType = {
    totalPoints: number | null
  }

  export type StudySumAggregateOutputType = {
    totalPoints: number | null
  }

  export type StudyMinAggregateOutputType = {
    id: string | null
    name: string | null
    nickname: string | null
    description: string | null
    password: string | null
    backgroundType: $Enums.BackgroundType | null
    backgroundColor: string | null
    backgroundImage: string | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nickname: string | null
    description: string | null
    password: string | null
    backgroundType: $Enums.BackgroundType | null
    backgroundColor: string | null
    backgroundImage: string | null
    totalPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyCountAggregateOutputType = {
    id: number
    name: number
    nickname: number
    description: number
    password: number
    backgroundType: number
    backgroundColor: number
    backgroundImage: number
    totalPoints: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudyAvgAggregateInputType = {
    totalPoints?: true
  }

  export type StudySumAggregateInputType = {
    totalPoints?: true
  }

  export type StudyMinAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    description?: true
    password?: true
    backgroundType?: true
    backgroundColor?: true
    backgroundImage?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyMaxAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    description?: true
    password?: true
    backgroundType?: true
    backgroundColor?: true
    backgroundImage?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyCountAggregateInputType = {
    id?: true
    name?: true
    nickname?: true
    description?: true
    password?: true
    backgroundType?: true
    backgroundColor?: true
    backgroundImage?: true
    totalPoints?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Study to aggregate.
     */
    where?: StudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Studies
    **/
    _count?: true | StudyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyMaxAggregateInputType
  }

  export type GetStudyAggregateType<T extends StudyAggregateArgs> = {
        [P in keyof T & keyof AggregateStudy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudy[P]>
      : GetScalarType<T[P], AggregateStudy[P]>
  }




  export type StudyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyWhereInput
    orderBy?: StudyOrderByWithAggregationInput | StudyOrderByWithAggregationInput[]
    by: StudyScalarFieldEnum[] | StudyScalarFieldEnum
    having?: StudyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyCountAggregateInputType | true
    _avg?: StudyAvgAggregateInputType
    _sum?: StudySumAggregateInputType
    _min?: StudyMinAggregateInputType
    _max?: StudyMaxAggregateInputType
  }

  export type StudyGroupByOutputType = {
    id: string
    name: string
    nickname: string
    description: string | null
    password: string | null
    backgroundType: $Enums.BackgroundType
    backgroundColor: string | null
    backgroundImage: string | null
    totalPoints: number
    createdAt: Date
    updatedAt: Date
    _count: StudyCountAggregateOutputType | null
    _avg: StudyAvgAggregateOutputType | null
    _sum: StudySumAggregateOutputType | null
    _min: StudyMinAggregateOutputType | null
    _max: StudyMaxAggregateOutputType | null
  }

  type GetStudyGroupByPayload<T extends StudyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyGroupByOutputType[P]>
            : GetScalarType<T[P], StudyGroupByOutputType[P]>
        }
      >
    >


  export type StudySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    description?: boolean
    password?: boolean
    backgroundType?: boolean
    backgroundColor?: boolean
    backgroundImage?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    habits?: boolean | Study$habitsArgs<ExtArgs>
    participants?: boolean | Study$participantsArgs<ExtArgs>
    focusSessions?: boolean | Study$focusSessionsArgs<ExtArgs>
    reactions?: boolean | Study$reactionsArgs<ExtArgs>
    _count?: boolean | StudyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["study"]>

  export type StudySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    description?: boolean
    password?: boolean
    backgroundType?: boolean
    backgroundColor?: boolean
    backgroundImage?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["study"]>

  export type StudySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickname?: boolean
    description?: boolean
    password?: boolean
    backgroundType?: boolean
    backgroundColor?: boolean
    backgroundImage?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["study"]>

  export type StudySelectScalar = {
    id?: boolean
    name?: boolean
    nickname?: boolean
    description?: boolean
    password?: boolean
    backgroundType?: boolean
    backgroundColor?: boolean
    backgroundImage?: boolean
    totalPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nickname" | "description" | "password" | "backgroundType" | "backgroundColor" | "backgroundImage" | "totalPoints" | "createdAt" | "updatedAt", ExtArgs["result"]["study"]>
  export type StudyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | Study$habitsArgs<ExtArgs>
    participants?: boolean | Study$participantsArgs<ExtArgs>
    focusSessions?: boolean | Study$focusSessionsArgs<ExtArgs>
    reactions?: boolean | Study$reactionsArgs<ExtArgs>
    _count?: boolean | StudyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Study"
    objects: {
      habits: Prisma.$HabitPayload<ExtArgs>[]
      participants: Prisma.$ParticipantPayload<ExtArgs>[]
      focusSessions: Prisma.$FocusSessionPayload<ExtArgs>[]
      reactions: Prisma.$StudyReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nickname: string
      description: string | null
      password: string | null
      backgroundType: $Enums.BackgroundType
      backgroundColor: string | null
      backgroundImage: string | null
      totalPoints: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["study"]>
    composites: {}
  }

  type StudyGetPayload<S extends boolean | null | undefined | StudyDefaultArgs> = $Result.GetResult<Prisma.$StudyPayload, S>

  type StudyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyCountAggregateInputType | true
    }

  export interface StudyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Study'], meta: { name: 'Study' } }
    /**
     * Find zero or one Study that matches the filter.
     * @param {StudyFindUniqueArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyFindUniqueArgs>(args: SelectSubset<T, StudyFindUniqueArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Study that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyFindUniqueOrThrowArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Study that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindFirstArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyFindFirstArgs>(args?: SelectSubset<T, StudyFindFirstArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Study that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindFirstOrThrowArgs} args - Arguments to find a Study
     * @example
     * // Get one Study
     * const study = await prisma.study.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Studies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studies
     * const studies = await prisma.study.findMany()
     * 
     * // Get first 10 Studies
     * const studies = await prisma.study.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyWithIdOnly = await prisma.study.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyFindManyArgs>(args?: SelectSubset<T, StudyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Study.
     * @param {StudyCreateArgs} args - Arguments to create a Study.
     * @example
     * // Create one Study
     * const Study = await prisma.study.create({
     *   data: {
     *     // ... data to create a Study
     *   }
     * })
     * 
     */
    create<T extends StudyCreateArgs>(args: SelectSubset<T, StudyCreateArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Studies.
     * @param {StudyCreateManyArgs} args - Arguments to create many Studies.
     * @example
     * // Create many Studies
     * const study = await prisma.study.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyCreateManyArgs>(args?: SelectSubset<T, StudyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Studies and returns the data saved in the database.
     * @param {StudyCreateManyAndReturnArgs} args - Arguments to create many Studies.
     * @example
     * // Create many Studies
     * const study = await prisma.study.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Studies and only return the `id`
     * const studyWithIdOnly = await prisma.study.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Study.
     * @param {StudyDeleteArgs} args - Arguments to delete one Study.
     * @example
     * // Delete one Study
     * const Study = await prisma.study.delete({
     *   where: {
     *     // ... filter to delete one Study
     *   }
     * })
     * 
     */
    delete<T extends StudyDeleteArgs>(args: SelectSubset<T, StudyDeleteArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Study.
     * @param {StudyUpdateArgs} args - Arguments to update one Study.
     * @example
     * // Update one Study
     * const study = await prisma.study.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyUpdateArgs>(args: SelectSubset<T, StudyUpdateArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Studies.
     * @param {StudyDeleteManyArgs} args - Arguments to filter Studies to delete.
     * @example
     * // Delete a few Studies
     * const { count } = await prisma.study.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyDeleteManyArgs>(args?: SelectSubset<T, StudyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studies
     * const study = await prisma.study.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyUpdateManyArgs>(args: SelectSubset<T, StudyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studies and returns the data updated in the database.
     * @param {StudyUpdateManyAndReturnArgs} args - Arguments to update many Studies.
     * @example
     * // Update many Studies
     * const study = await prisma.study.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Studies and only return the `id`
     * const studyWithIdOnly = await prisma.study.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudyUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Study.
     * @param {StudyUpsertArgs} args - Arguments to update or create a Study.
     * @example
     * // Update or create a Study
     * const study = await prisma.study.upsert({
     *   create: {
     *     // ... data to create a Study
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Study we want to update
     *   }
     * })
     */
    upsert<T extends StudyUpsertArgs>(args: SelectSubset<T, StudyUpsertArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Studies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyCountArgs} args - Arguments to filter Studies to count.
     * @example
     * // Count the number of Studies
     * const count = await prisma.study.count({
     *   where: {
     *     // ... the filter for the Studies we want to count
     *   }
     * })
    **/
    count<T extends StudyCountArgs>(
      args?: Subset<T, StudyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Study.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyAggregateArgs>(args: Subset<T, StudyAggregateArgs>): Prisma.PrismaPromise<GetStudyAggregateType<T>>

    /**
     * Group by Study.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyGroupByArgs} args - Group by arguments.
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
      T extends StudyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyGroupByArgs['orderBy'] }
        : { orderBy?: StudyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Study model
   */
  readonly fields: StudyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Study.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habits<T extends Study$habitsArgs<ExtArgs> = {}>(args?: Subset<T, Study$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Study$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Study$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    focusSessions<T extends Study$focusSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Study$focusSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Study$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Study$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Study model
   */
  interface StudyFieldRefs {
    readonly id: FieldRef<"Study", 'String'>
    readonly name: FieldRef<"Study", 'String'>
    readonly nickname: FieldRef<"Study", 'String'>
    readonly description: FieldRef<"Study", 'String'>
    readonly password: FieldRef<"Study", 'String'>
    readonly backgroundType: FieldRef<"Study", 'BackgroundType'>
    readonly backgroundColor: FieldRef<"Study", 'String'>
    readonly backgroundImage: FieldRef<"Study", 'String'>
    readonly totalPoints: FieldRef<"Study", 'Int'>
    readonly createdAt: FieldRef<"Study", 'DateTime'>
    readonly updatedAt: FieldRef<"Study", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Study findUnique
   */
  export type StudyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Study to fetch.
     */
    where: StudyWhereUniqueInput
  }

  /**
   * Study findUniqueOrThrow
   */
  export type StudyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Study to fetch.
     */
    where: StudyWhereUniqueInput
  }

  /**
   * Study findFirst
   */
  export type StudyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Study to fetch.
     */
    where?: StudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studies.
     */
    cursor?: StudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studies.
     */
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[]
  }

  /**
   * Study findFirstOrThrow
   */
  export type StudyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Study to fetch.
     */
    where?: StudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studies.
     */
    cursor?: StudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studies.
     */
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[]
  }

  /**
   * Study findMany
   */
  export type StudyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter, which Studies to fetch.
     */
    where?: StudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studies to fetch.
     */
    orderBy?: StudyOrderByWithRelationInput | StudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Studies.
     */
    cursor?: StudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studies.
     */
    distinct?: StudyScalarFieldEnum | StudyScalarFieldEnum[]
  }

  /**
   * Study create
   */
  export type StudyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * The data needed to create a Study.
     */
    data: XOR<StudyCreateInput, StudyUncheckedCreateInput>
  }

  /**
   * Study createMany
   */
  export type StudyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Studies.
     */
    data: StudyCreateManyInput | StudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Study createManyAndReturn
   */
  export type StudyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * The data used to create many Studies.
     */
    data: StudyCreateManyInput | StudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Study update
   */
  export type StudyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * The data needed to update a Study.
     */
    data: XOR<StudyUpdateInput, StudyUncheckedUpdateInput>
    /**
     * Choose, which Study to update.
     */
    where: StudyWhereUniqueInput
  }

  /**
   * Study updateMany
   */
  export type StudyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Studies.
     */
    data: XOR<StudyUpdateManyMutationInput, StudyUncheckedUpdateManyInput>
    /**
     * Filter which Studies to update
     */
    where?: StudyWhereInput
    /**
     * Limit how many Studies to update.
     */
    limit?: number
  }

  /**
   * Study updateManyAndReturn
   */
  export type StudyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * The data used to update Studies.
     */
    data: XOR<StudyUpdateManyMutationInput, StudyUncheckedUpdateManyInput>
    /**
     * Filter which Studies to update
     */
    where?: StudyWhereInput
    /**
     * Limit how many Studies to update.
     */
    limit?: number
  }

  /**
   * Study upsert
   */
  export type StudyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * The filter to search for the Study to update in case it exists.
     */
    where: StudyWhereUniqueInput
    /**
     * In case the Study found by the `where` argument doesn't exist, create a new Study with this data.
     */
    create: XOR<StudyCreateInput, StudyUncheckedCreateInput>
    /**
     * In case the Study was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyUpdateInput, StudyUncheckedUpdateInput>
  }

  /**
   * Study delete
   */
  export type StudyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
    /**
     * Filter which Study to delete.
     */
    where: StudyWhereUniqueInput
  }

  /**
   * Study deleteMany
   */
  export type StudyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studies to delete
     */
    where?: StudyWhereInput
    /**
     * Limit how many Studies to delete.
     */
    limit?: number
  }

  /**
   * Study.habits
   */
  export type Study$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Study.participants
   */
  export type Study$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Study.focusSessions
   */
  export type Study$focusSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    cursor?: FocusSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * Study.reactions
   */
  export type Study$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    where?: StudyReactionWhereInput
    orderBy?: StudyReactionOrderByWithRelationInput | StudyReactionOrderByWithRelationInput[]
    cursor?: StudyReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyReactionScalarFieldEnum | StudyReactionScalarFieldEnum[]
  }

  /**
   * Study without action
   */
  export type StudyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Study
     */
    select?: StudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Study
     */
    omit?: StudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    studyId: string | null
    nickname: string | null
    emoji: string | null
    joinedAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    studyId: string | null
    nickname: string | null
    emoji: string | null
    joinedAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    studyId: number
    nickname: number
    emoji: number
    joinedAt: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    studyId?: true
    nickname?: true
    emoji?: true
    joinedAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    studyId?: true
    nickname?: true
    emoji?: true
    joinedAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    studyId?: true
    nickname?: true
    emoji?: true
    joinedAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    studyId: string
    nickname: string
    emoji: string | null
    joinedAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    nickname?: boolean
    emoji?: boolean
    joinedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    nickname?: boolean
    emoji?: boolean
    joinedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    nickname?: boolean
    emoji?: boolean
    joinedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    studyId?: boolean
    nickname?: boolean
    emoji?: boolean
    joinedAt?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studyId" | "nickname" | "emoji" | "joinedAt", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      study: Prisma.$StudyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studyId: string
      nickname: string
      emoji: string | null
      joinedAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    study<T extends StudyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyDefaultArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'String'>
    readonly studyId: FieldRef<"Participant", 'String'>
    readonly nickname: FieldRef<"Participant", 'String'>
    readonly emoji: FieldRef<"Participant", 'String'>
    readonly joinedAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model StudyReaction
   */

  export type AggregateStudyReaction = {
    _count: StudyReactionCountAggregateOutputType | null
    _avg: StudyReactionAvgAggregateOutputType | null
    _sum: StudyReactionSumAggregateOutputType | null
    _min: StudyReactionMinAggregateOutputType | null
    _max: StudyReactionMaxAggregateOutputType | null
  }

  export type StudyReactionAvgAggregateOutputType = {
    count: number | null
  }

  export type StudyReactionSumAggregateOutputType = {
    count: number | null
  }

  export type StudyReactionMinAggregateOutputType = {
    id: string | null
    studyId: string | null
    emoji: string | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyReactionMaxAggregateOutputType = {
    id: string | null
    studyId: string | null
    emoji: string | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyReactionCountAggregateOutputType = {
    id: number
    studyId: number
    emoji: number
    count: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudyReactionAvgAggregateInputType = {
    count?: true
  }

  export type StudyReactionSumAggregateInputType = {
    count?: true
  }

  export type StudyReactionMinAggregateInputType = {
    id?: true
    studyId?: true
    emoji?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyReactionMaxAggregateInputType = {
    id?: true
    studyId?: true
    emoji?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyReactionCountAggregateInputType = {
    id?: true
    studyId?: true
    emoji?: true
    count?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudyReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyReaction to aggregate.
     */
    where?: StudyReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyReactions to fetch.
     */
    orderBy?: StudyReactionOrderByWithRelationInput | StudyReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyReactions
    **/
    _count?: true | StudyReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyReactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyReactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyReactionMaxAggregateInputType
  }

  export type GetStudyReactionAggregateType<T extends StudyReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyReaction[P]>
      : GetScalarType<T[P], AggregateStudyReaction[P]>
  }




  export type StudyReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyReactionWhereInput
    orderBy?: StudyReactionOrderByWithAggregationInput | StudyReactionOrderByWithAggregationInput[]
    by: StudyReactionScalarFieldEnum[] | StudyReactionScalarFieldEnum
    having?: StudyReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyReactionCountAggregateInputType | true
    _avg?: StudyReactionAvgAggregateInputType
    _sum?: StudyReactionSumAggregateInputType
    _min?: StudyReactionMinAggregateInputType
    _max?: StudyReactionMaxAggregateInputType
  }

  export type StudyReactionGroupByOutputType = {
    id: string
    studyId: string
    emoji: string
    count: number
    createdAt: Date
    updatedAt: Date
    _count: StudyReactionCountAggregateOutputType | null
    _avg: StudyReactionAvgAggregateOutputType | null
    _sum: StudyReactionSumAggregateOutputType | null
    _min: StudyReactionMinAggregateOutputType | null
    _max: StudyReactionMaxAggregateOutputType | null
  }

  type GetStudyReactionGroupByPayload<T extends StudyReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyReactionGroupByOutputType[P]>
            : GetScalarType<T[P], StudyReactionGroupByOutputType[P]>
        }
      >
    >


  export type StudyReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    emoji?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyReaction"]>

  export type StudyReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    emoji?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyReaction"]>

  export type StudyReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    emoji?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyReaction"]>

  export type StudyReactionSelectScalar = {
    id?: boolean
    studyId?: boolean
    emoji?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudyReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studyId" | "emoji" | "count" | "createdAt" | "updatedAt", ExtArgs["result"]["studyReaction"]>
  export type StudyReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }
  export type StudyReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }
  export type StudyReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }

  export type $StudyReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyReaction"
    objects: {
      study: Prisma.$StudyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studyId: string
      emoji: string
      count: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studyReaction"]>
    composites: {}
  }

  type StudyReactionGetPayload<S extends boolean | null | undefined | StudyReactionDefaultArgs> = $Result.GetResult<Prisma.$StudyReactionPayload, S>

  type StudyReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyReactionCountAggregateInputType | true
    }

  export interface StudyReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyReaction'], meta: { name: 'StudyReaction' } }
    /**
     * Find zero or one StudyReaction that matches the filter.
     * @param {StudyReactionFindUniqueArgs} args - Arguments to find a StudyReaction
     * @example
     * // Get one StudyReaction
     * const studyReaction = await prisma.studyReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyReactionFindUniqueArgs>(args: SelectSubset<T, StudyReactionFindUniqueArgs<ExtArgs>>): Prisma__StudyReactionClient<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyReaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyReactionFindUniqueOrThrowArgs} args - Arguments to find a StudyReaction
     * @example
     * // Get one StudyReaction
     * const studyReaction = await prisma.studyReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyReactionClient<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyReactionFindFirstArgs} args - Arguments to find a StudyReaction
     * @example
     * // Get one StudyReaction
     * const studyReaction = await prisma.studyReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyReactionFindFirstArgs>(args?: SelectSubset<T, StudyReactionFindFirstArgs<ExtArgs>>): Prisma__StudyReactionClient<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyReactionFindFirstOrThrowArgs} args - Arguments to find a StudyReaction
     * @example
     * // Get one StudyReaction
     * const studyReaction = await prisma.studyReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyReactionClient<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyReactions
     * const studyReactions = await prisma.studyReaction.findMany()
     * 
     * // Get first 10 StudyReactions
     * const studyReactions = await prisma.studyReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyReactionWithIdOnly = await prisma.studyReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyReactionFindManyArgs>(args?: SelectSubset<T, StudyReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyReaction.
     * @param {StudyReactionCreateArgs} args - Arguments to create a StudyReaction.
     * @example
     * // Create one StudyReaction
     * const StudyReaction = await prisma.studyReaction.create({
     *   data: {
     *     // ... data to create a StudyReaction
     *   }
     * })
     * 
     */
    create<T extends StudyReactionCreateArgs>(args: SelectSubset<T, StudyReactionCreateArgs<ExtArgs>>): Prisma__StudyReactionClient<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyReactions.
     * @param {StudyReactionCreateManyArgs} args - Arguments to create many StudyReactions.
     * @example
     * // Create many StudyReactions
     * const studyReaction = await prisma.studyReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyReactionCreateManyArgs>(args?: SelectSubset<T, StudyReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyReactions and returns the data saved in the database.
     * @param {StudyReactionCreateManyAndReturnArgs} args - Arguments to create many StudyReactions.
     * @example
     * // Create many StudyReactions
     * const studyReaction = await prisma.studyReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyReactions and only return the `id`
     * const studyReactionWithIdOnly = await prisma.studyReaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyReaction.
     * @param {StudyReactionDeleteArgs} args - Arguments to delete one StudyReaction.
     * @example
     * // Delete one StudyReaction
     * const StudyReaction = await prisma.studyReaction.delete({
     *   where: {
     *     // ... filter to delete one StudyReaction
     *   }
     * })
     * 
     */
    delete<T extends StudyReactionDeleteArgs>(args: SelectSubset<T, StudyReactionDeleteArgs<ExtArgs>>): Prisma__StudyReactionClient<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyReaction.
     * @param {StudyReactionUpdateArgs} args - Arguments to update one StudyReaction.
     * @example
     * // Update one StudyReaction
     * const studyReaction = await prisma.studyReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyReactionUpdateArgs>(args: SelectSubset<T, StudyReactionUpdateArgs<ExtArgs>>): Prisma__StudyReactionClient<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyReactions.
     * @param {StudyReactionDeleteManyArgs} args - Arguments to filter StudyReactions to delete.
     * @example
     * // Delete a few StudyReactions
     * const { count } = await prisma.studyReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyReactionDeleteManyArgs>(args?: SelectSubset<T, StudyReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyReactions
     * const studyReaction = await prisma.studyReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyReactionUpdateManyArgs>(args: SelectSubset<T, StudyReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyReactions and returns the data updated in the database.
     * @param {StudyReactionUpdateManyAndReturnArgs} args - Arguments to update many StudyReactions.
     * @example
     * // Update many StudyReactions
     * const studyReaction = await prisma.studyReaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyReactions and only return the `id`
     * const studyReactionWithIdOnly = await prisma.studyReaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudyReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyReaction.
     * @param {StudyReactionUpsertArgs} args - Arguments to update or create a StudyReaction.
     * @example
     * // Update or create a StudyReaction
     * const studyReaction = await prisma.studyReaction.upsert({
     *   create: {
     *     // ... data to create a StudyReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyReaction we want to update
     *   }
     * })
     */
    upsert<T extends StudyReactionUpsertArgs>(args: SelectSubset<T, StudyReactionUpsertArgs<ExtArgs>>): Prisma__StudyReactionClient<$Result.GetResult<Prisma.$StudyReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyReactionCountArgs} args - Arguments to filter StudyReactions to count.
     * @example
     * // Count the number of StudyReactions
     * const count = await prisma.studyReaction.count({
     *   where: {
     *     // ... the filter for the StudyReactions we want to count
     *   }
     * })
    **/
    count<T extends StudyReactionCountArgs>(
      args?: Subset<T, StudyReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyReactionAggregateArgs>(args: Subset<T, StudyReactionAggregateArgs>): Prisma.PrismaPromise<GetStudyReactionAggregateType<T>>

    /**
     * Group by StudyReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyReactionGroupByArgs} args - Group by arguments.
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
      T extends StudyReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyReactionGroupByArgs['orderBy'] }
        : { orderBy?: StudyReactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudyReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyReaction model
   */
  readonly fields: StudyReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    study<T extends StudyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyDefaultArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudyReaction model
   */
  interface StudyReactionFieldRefs {
    readonly id: FieldRef<"StudyReaction", 'String'>
    readonly studyId: FieldRef<"StudyReaction", 'String'>
    readonly emoji: FieldRef<"StudyReaction", 'String'>
    readonly count: FieldRef<"StudyReaction", 'Int'>
    readonly createdAt: FieldRef<"StudyReaction", 'DateTime'>
    readonly updatedAt: FieldRef<"StudyReaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyReaction findUnique
   */
  export type StudyReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * Filter, which StudyReaction to fetch.
     */
    where: StudyReactionWhereUniqueInput
  }

  /**
   * StudyReaction findUniqueOrThrow
   */
  export type StudyReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * Filter, which StudyReaction to fetch.
     */
    where: StudyReactionWhereUniqueInput
  }

  /**
   * StudyReaction findFirst
   */
  export type StudyReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * Filter, which StudyReaction to fetch.
     */
    where?: StudyReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyReactions to fetch.
     */
    orderBy?: StudyReactionOrderByWithRelationInput | StudyReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyReactions.
     */
    cursor?: StudyReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyReactions.
     */
    distinct?: StudyReactionScalarFieldEnum | StudyReactionScalarFieldEnum[]
  }

  /**
   * StudyReaction findFirstOrThrow
   */
  export type StudyReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * Filter, which StudyReaction to fetch.
     */
    where?: StudyReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyReactions to fetch.
     */
    orderBy?: StudyReactionOrderByWithRelationInput | StudyReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyReactions.
     */
    cursor?: StudyReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyReactions.
     */
    distinct?: StudyReactionScalarFieldEnum | StudyReactionScalarFieldEnum[]
  }

  /**
   * StudyReaction findMany
   */
  export type StudyReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * Filter, which StudyReactions to fetch.
     */
    where?: StudyReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyReactions to fetch.
     */
    orderBy?: StudyReactionOrderByWithRelationInput | StudyReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyReactions.
     */
    cursor?: StudyReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyReactions.
     */
    distinct?: StudyReactionScalarFieldEnum | StudyReactionScalarFieldEnum[]
  }

  /**
   * StudyReaction create
   */
  export type StudyReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyReaction.
     */
    data: XOR<StudyReactionCreateInput, StudyReactionUncheckedCreateInput>
  }

  /**
   * StudyReaction createMany
   */
  export type StudyReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyReactions.
     */
    data: StudyReactionCreateManyInput | StudyReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyReaction createManyAndReturn
   */
  export type StudyReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * The data used to create many StudyReactions.
     */
    data: StudyReactionCreateManyInput | StudyReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyReaction update
   */
  export type StudyReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyReaction.
     */
    data: XOR<StudyReactionUpdateInput, StudyReactionUncheckedUpdateInput>
    /**
     * Choose, which StudyReaction to update.
     */
    where: StudyReactionWhereUniqueInput
  }

  /**
   * StudyReaction updateMany
   */
  export type StudyReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyReactions.
     */
    data: XOR<StudyReactionUpdateManyMutationInput, StudyReactionUncheckedUpdateManyInput>
    /**
     * Filter which StudyReactions to update
     */
    where?: StudyReactionWhereInput
    /**
     * Limit how many StudyReactions to update.
     */
    limit?: number
  }

  /**
   * StudyReaction updateManyAndReturn
   */
  export type StudyReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * The data used to update StudyReactions.
     */
    data: XOR<StudyReactionUpdateManyMutationInput, StudyReactionUncheckedUpdateManyInput>
    /**
     * Filter which StudyReactions to update
     */
    where?: StudyReactionWhereInput
    /**
     * Limit how many StudyReactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyReaction upsert
   */
  export type StudyReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyReaction to update in case it exists.
     */
    where: StudyReactionWhereUniqueInput
    /**
     * In case the StudyReaction found by the `where` argument doesn't exist, create a new StudyReaction with this data.
     */
    create: XOR<StudyReactionCreateInput, StudyReactionUncheckedCreateInput>
    /**
     * In case the StudyReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyReactionUpdateInput, StudyReactionUncheckedUpdateInput>
  }

  /**
   * StudyReaction delete
   */
  export type StudyReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
    /**
     * Filter which StudyReaction to delete.
     */
    where: StudyReactionWhereUniqueInput
  }

  /**
   * StudyReaction deleteMany
   */
  export type StudyReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyReactions to delete
     */
    where?: StudyReactionWhereInput
    /**
     * Limit how many StudyReactions to delete.
     */
    limit?: number
  }

  /**
   * StudyReaction without action
   */
  export type StudyReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyReaction
     */
    select?: StudyReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyReaction
     */
    omit?: StudyReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyReactionInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    order: number | null
  }

  export type HabitSumAggregateOutputType = {
    order: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    studyId: string | null
    title: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    studyId: string | null
    title: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    studyId: number
    title: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    order?: true
  }

  export type HabitSumAggregateInputType = {
    order?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    studyId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    studyId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    studyId?: true
    title?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    studyId: string
    title: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
    logs?: boolean | Habit$logsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    studyId?: boolean
    title?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studyId" | "title" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
    logs?: boolean | Habit$logsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }
  export type HabitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      study: Prisma.$StudyPayload<ExtArgs>
      logs: Prisma.$HabitLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studyId: string
      title: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits and returns the data updated in the database.
     * @param {HabitUpdateManyAndReturnArgs} args - Arguments to update many Habits.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.updateManyAndReturn({
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
    updateManyAndReturn<T extends HabitUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
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
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    study<T extends StudyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyDefaultArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logs<T extends Habit$logsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly studyId: FieldRef<"Habit", 'String'>
    readonly title: FieldRef<"Habit", 'String'>
    readonly order: FieldRef<"Habit", 'Int'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit updateManyAndReturn
   */
  export type HabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.logs
   */
  export type Habit$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model HabitLog
   */

  export type AggregateHabitLog = {
    _count: HabitLogCountAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  export type HabitLogMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    date: Date | null
    completed: boolean | null
    createdAt: Date | null
  }

  export type HabitLogMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    date: Date | null
    completed: boolean | null
    createdAt: Date | null
  }

  export type HabitLogCountAggregateOutputType = {
    id: number
    habitId: number
    date: number
    completed: number
    createdAt: number
    _all: number
  }


  export type HabitLogMinAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    completed?: true
    createdAt?: true
  }

  export type HabitLogMaxAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    completed?: true
    createdAt?: true
  }

  export type HabitLogCountAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    completed?: true
    createdAt?: true
    _all?: true
  }

  export type HabitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLog to aggregate.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitLogs
    **/
    _count?: true | HabitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitLogMaxAggregateInputType
  }

  export type GetHabitLogAggregateType<T extends HabitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitLog[P]>
      : GetScalarType<T[P], AggregateHabitLog[P]>
  }




  export type HabitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithAggregationInput | HabitLogOrderByWithAggregationInput[]
    by: HabitLogScalarFieldEnum[] | HabitLogScalarFieldEnum
    having?: HabitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitLogCountAggregateInputType | true
    _min?: HabitLogMinAggregateInputType
    _max?: HabitLogMaxAggregateInputType
  }

  export type HabitLogGroupByOutputType = {
    id: string
    habitId: string
    date: Date
    completed: boolean
    createdAt: Date
    _count: HabitLogCountAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  type GetHabitLogGroupByPayload<T extends HabitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
            : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
        }
      >
    >


  export type HabitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    completed?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    completed?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    completed?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectScalar = {
    id?: boolean
    habitId?: boolean
    date?: boolean
    completed?: boolean
    createdAt?: boolean
  }

  export type HabitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "date" | "completed" | "createdAt", ExtArgs["result"]["habitLog"]>
  export type HabitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $HabitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitLog"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      date: Date
      completed: boolean
      createdAt: Date
    }, ExtArgs["result"]["habitLog"]>
    composites: {}
  }

  type HabitLogGetPayload<S extends boolean | null | undefined | HabitLogDefaultArgs> = $Result.GetResult<Prisma.$HabitLogPayload, S>

  type HabitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitLogCountAggregateInputType | true
    }

  export interface HabitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitLog'], meta: { name: 'HabitLog' } }
    /**
     * Find zero or one HabitLog that matches the filter.
     * @param {HabitLogFindUniqueArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitLogFindUniqueArgs>(args: SelectSubset<T, HabitLogFindUniqueArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitLogFindUniqueOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitLogFindFirstArgs>(args?: SelectSubset<T, HabitLogFindFirstArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitLogs
     * const habitLogs = await prisma.habitLog.findMany()
     * 
     * // Get first 10 HabitLogs
     * const habitLogs = await prisma.habitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitLogFindManyArgs>(args?: SelectSubset<T, HabitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitLog.
     * @param {HabitLogCreateArgs} args - Arguments to create a HabitLog.
     * @example
     * // Create one HabitLog
     * const HabitLog = await prisma.habitLog.create({
     *   data: {
     *     // ... data to create a HabitLog
     *   }
     * })
     * 
     */
    create<T extends HabitLogCreateArgs>(args: SelectSubset<T, HabitLogCreateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitLogs.
     * @param {HabitLogCreateManyArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitLogCreateManyArgs>(args?: SelectSubset<T, HabitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitLogs and returns the data saved in the database.
     * @param {HabitLogCreateManyAndReturnArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitLog.
     * @param {HabitLogDeleteArgs} args - Arguments to delete one HabitLog.
     * @example
     * // Delete one HabitLog
     * const HabitLog = await prisma.habitLog.delete({
     *   where: {
     *     // ... filter to delete one HabitLog
     *   }
     * })
     * 
     */
    delete<T extends HabitLogDeleteArgs>(args: SelectSubset<T, HabitLogDeleteArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitLog.
     * @param {HabitLogUpdateArgs} args - Arguments to update one HabitLog.
     * @example
     * // Update one HabitLog
     * const habitLog = await prisma.habitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitLogUpdateArgs>(args: SelectSubset<T, HabitLogUpdateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitLogs.
     * @param {HabitLogDeleteManyArgs} args - Arguments to filter HabitLogs to delete.
     * @example
     * // Delete a few HabitLogs
     * const { count } = await prisma.habitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitLogDeleteManyArgs>(args?: SelectSubset<T, HabitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitLogUpdateManyArgs>(args: SelectSubset<T, HabitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs and returns the data updated in the database.
     * @param {HabitLogUpdateManyAndReturnArgs} args - Arguments to update many HabitLogs.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends HabitLogUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitLog.
     * @param {HabitLogUpsertArgs} args - Arguments to update or create a HabitLog.
     * @example
     * // Update or create a HabitLog
     * const habitLog = await prisma.habitLog.upsert({
     *   create: {
     *     // ... data to create a HabitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitLog we want to update
     *   }
     * })
     */
    upsert<T extends HabitLogUpsertArgs>(args: SelectSubset<T, HabitLogUpsertArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogCountArgs} args - Arguments to filter HabitLogs to count.
     * @example
     * // Count the number of HabitLogs
     * const count = await prisma.habitLog.count({
     *   where: {
     *     // ... the filter for the HabitLogs we want to count
     *   }
     * })
    **/
    count<T extends HabitLogCountArgs>(
      args?: Subset<T, HabitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitLogAggregateArgs>(args: Subset<T, HabitLogAggregateArgs>): Prisma.PrismaPromise<GetHabitLogAggregateType<T>>

    /**
     * Group by HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogGroupByArgs} args - Group by arguments.
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
      T extends HabitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitLogGroupByArgs['orderBy'] }
        : { orderBy?: HabitLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitLog model
   */
  readonly fields: HabitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HabitLog model
   */
  interface HabitLogFieldRefs {
    readonly id: FieldRef<"HabitLog", 'String'>
    readonly habitId: FieldRef<"HabitLog", 'String'>
    readonly date: FieldRef<"HabitLog", 'DateTime'>
    readonly completed: FieldRef<"HabitLog", 'Boolean'>
    readonly createdAt: FieldRef<"HabitLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HabitLog findUnique
   */
  export type HabitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findUniqueOrThrow
   */
  export type HabitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findFirst
   */
  export type HabitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findFirstOrThrow
   */
  export type HabitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findMany
   */
  export type HabitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLogs to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog create
   */
  export type HabitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitLog.
     */
    data: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
  }

  /**
   * HabitLog createMany
   */
  export type HabitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitLog createManyAndReturn
   */
  export type HabitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog update
   */
  export type HabitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitLog.
     */
    data: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
    /**
     * Choose, which HabitLog to update.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog updateMany
   */
  export type HabitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
  }

  /**
   * HabitLog updateManyAndReturn
   */
  export type HabitLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog upsert
   */
  export type HabitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitLog to update in case it exists.
     */
    where: HabitLogWhereUniqueInput
    /**
     * In case the HabitLog found by the `where` argument doesn't exist, create a new HabitLog with this data.
     */
    create: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
    /**
     * In case the HabitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
  }

  /**
   * HabitLog delete
   */
  export type HabitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter which HabitLog to delete.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog deleteMany
   */
  export type HabitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLogs to delete
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to delete.
     */
    limit?: number
  }

  /**
   * HabitLog without action
   */
  export type HabitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
  }


  /**
   * Model FocusSession
   */

  export type AggregateFocusSession = {
    _count: FocusSessionCountAggregateOutputType | null
    _avg: FocusSessionAvgAggregateOutputType | null
    _sum: FocusSessionSumAggregateOutputType | null
    _min: FocusSessionMinAggregateOutputType | null
    _max: FocusSessionMaxAggregateOutputType | null
  }

  export type FocusSessionAvgAggregateOutputType = {
    durationSecs: number | null
    elapsedSecs: number | null
    pointsEarned: number | null
  }

  export type FocusSessionSumAggregateOutputType = {
    durationSecs: number | null
    elapsedSecs: number | null
    pointsEarned: number | null
  }

  export type FocusSessionMinAggregateOutputType = {
    id: string | null
    studyId: string | null
    date: Date | null
    durationSecs: number | null
    elapsedSecs: number | null
    status: $Enums.FocusStatus | null
    pointsEarned: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FocusSessionMaxAggregateOutputType = {
    id: string | null
    studyId: string | null
    date: Date | null
    durationSecs: number | null
    elapsedSecs: number | null
    status: $Enums.FocusStatus | null
    pointsEarned: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FocusSessionCountAggregateOutputType = {
    id: number
    studyId: number
    date: number
    durationSecs: number
    elapsedSecs: number
    status: number
    pointsEarned: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FocusSessionAvgAggregateInputType = {
    durationSecs?: true
    elapsedSecs?: true
    pointsEarned?: true
  }

  export type FocusSessionSumAggregateInputType = {
    durationSecs?: true
    elapsedSecs?: true
    pointsEarned?: true
  }

  export type FocusSessionMinAggregateInputType = {
    id?: true
    studyId?: true
    date?: true
    durationSecs?: true
    elapsedSecs?: true
    status?: true
    pointsEarned?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FocusSessionMaxAggregateInputType = {
    id?: true
    studyId?: true
    date?: true
    durationSecs?: true
    elapsedSecs?: true
    status?: true
    pointsEarned?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FocusSessionCountAggregateInputType = {
    id?: true
    studyId?: true
    date?: true
    durationSecs?: true
    elapsedSecs?: true
    status?: true
    pointsEarned?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FocusSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusSession to aggregate.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FocusSessions
    **/
    _count?: true | FocusSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FocusSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FocusSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FocusSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FocusSessionMaxAggregateInputType
  }

  export type GetFocusSessionAggregateType<T extends FocusSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateFocusSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFocusSession[P]>
      : GetScalarType<T[P], AggregateFocusSession[P]>
  }




  export type FocusSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithAggregationInput | FocusSessionOrderByWithAggregationInput[]
    by: FocusSessionScalarFieldEnum[] | FocusSessionScalarFieldEnum
    having?: FocusSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FocusSessionCountAggregateInputType | true
    _avg?: FocusSessionAvgAggregateInputType
    _sum?: FocusSessionSumAggregateInputType
    _min?: FocusSessionMinAggregateInputType
    _max?: FocusSessionMaxAggregateInputType
  }

  export type FocusSessionGroupByOutputType = {
    id: string
    studyId: string
    date: Date
    durationSecs: number
    elapsedSecs: number
    status: $Enums.FocusStatus
    pointsEarned: number
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FocusSessionCountAggregateOutputType | null
    _avg: FocusSessionAvgAggregateOutputType | null
    _sum: FocusSessionSumAggregateOutputType | null
    _min: FocusSessionMinAggregateOutputType | null
    _max: FocusSessionMaxAggregateOutputType | null
  }

  type GetFocusSessionGroupByPayload<T extends FocusSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FocusSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FocusSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FocusSessionGroupByOutputType[P]>
            : GetScalarType<T[P], FocusSessionGroupByOutputType[P]>
        }
      >
    >


  export type FocusSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    date?: boolean
    durationSecs?: boolean
    elapsedSecs?: boolean
    status?: boolean
    pointsEarned?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>

  export type FocusSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    date?: boolean
    durationSecs?: boolean
    elapsedSecs?: boolean
    status?: boolean
    pointsEarned?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>

  export type FocusSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studyId?: boolean
    date?: boolean
    durationSecs?: boolean
    elapsedSecs?: boolean
    status?: boolean
    pointsEarned?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>

  export type FocusSessionSelectScalar = {
    id?: boolean
    studyId?: boolean
    date?: boolean
    durationSecs?: boolean
    elapsedSecs?: boolean
    status?: boolean
    pointsEarned?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FocusSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studyId" | "date" | "durationSecs" | "elapsedSecs" | "status" | "pointsEarned" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["focusSession"]>
  export type FocusSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }
  export type FocusSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }
  export type FocusSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    study?: boolean | StudyDefaultArgs<ExtArgs>
  }

  export type $FocusSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FocusSession"
    objects: {
      study: Prisma.$StudyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studyId: string
      date: Date
      durationSecs: number
      elapsedSecs: number
      status: $Enums.FocusStatus
      pointsEarned: number
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["focusSession"]>
    composites: {}
  }

  type FocusSessionGetPayload<S extends boolean | null | undefined | FocusSessionDefaultArgs> = $Result.GetResult<Prisma.$FocusSessionPayload, S>

  type FocusSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FocusSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FocusSessionCountAggregateInputType | true
    }

  export interface FocusSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FocusSession'], meta: { name: 'FocusSession' } }
    /**
     * Find zero or one FocusSession that matches the filter.
     * @param {FocusSessionFindUniqueArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FocusSessionFindUniqueArgs>(args: SelectSubset<T, FocusSessionFindUniqueArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FocusSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FocusSessionFindUniqueOrThrowArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FocusSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, FocusSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindFirstArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FocusSessionFindFirstArgs>(args?: SelectSubset<T, FocusSessionFindFirstArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindFirstOrThrowArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FocusSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, FocusSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FocusSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FocusSessions
     * const focusSessions = await prisma.focusSession.findMany()
     * 
     * // Get first 10 FocusSessions
     * const focusSessions = await prisma.focusSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FocusSessionFindManyArgs>(args?: SelectSubset<T, FocusSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FocusSession.
     * @param {FocusSessionCreateArgs} args - Arguments to create a FocusSession.
     * @example
     * // Create one FocusSession
     * const FocusSession = await prisma.focusSession.create({
     *   data: {
     *     // ... data to create a FocusSession
     *   }
     * })
     * 
     */
    create<T extends FocusSessionCreateArgs>(args: SelectSubset<T, FocusSessionCreateArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FocusSessions.
     * @param {FocusSessionCreateManyArgs} args - Arguments to create many FocusSessions.
     * @example
     * // Create many FocusSessions
     * const focusSession = await prisma.focusSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FocusSessionCreateManyArgs>(args?: SelectSubset<T, FocusSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FocusSessions and returns the data saved in the database.
     * @param {FocusSessionCreateManyAndReturnArgs} args - Arguments to create many FocusSessions.
     * @example
     * // Create many FocusSessions
     * const focusSession = await prisma.focusSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FocusSessions and only return the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FocusSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, FocusSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FocusSession.
     * @param {FocusSessionDeleteArgs} args - Arguments to delete one FocusSession.
     * @example
     * // Delete one FocusSession
     * const FocusSession = await prisma.focusSession.delete({
     *   where: {
     *     // ... filter to delete one FocusSession
     *   }
     * })
     * 
     */
    delete<T extends FocusSessionDeleteArgs>(args: SelectSubset<T, FocusSessionDeleteArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FocusSession.
     * @param {FocusSessionUpdateArgs} args - Arguments to update one FocusSession.
     * @example
     * // Update one FocusSession
     * const focusSession = await prisma.focusSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FocusSessionUpdateArgs>(args: SelectSubset<T, FocusSessionUpdateArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FocusSessions.
     * @param {FocusSessionDeleteManyArgs} args - Arguments to filter FocusSessions to delete.
     * @example
     * // Delete a few FocusSessions
     * const { count } = await prisma.focusSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FocusSessionDeleteManyArgs>(args?: SelectSubset<T, FocusSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FocusSessions
     * const focusSession = await prisma.focusSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FocusSessionUpdateManyArgs>(args: SelectSubset<T, FocusSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusSessions and returns the data updated in the database.
     * @param {FocusSessionUpdateManyAndReturnArgs} args - Arguments to update many FocusSessions.
     * @example
     * // Update many FocusSessions
     * const focusSession = await prisma.focusSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FocusSessions and only return the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends FocusSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, FocusSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FocusSession.
     * @param {FocusSessionUpsertArgs} args - Arguments to update or create a FocusSession.
     * @example
     * // Update or create a FocusSession
     * const focusSession = await prisma.focusSession.upsert({
     *   create: {
     *     // ... data to create a FocusSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FocusSession we want to update
     *   }
     * })
     */
    upsert<T extends FocusSessionUpsertArgs>(args: SelectSubset<T, FocusSessionUpsertArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FocusSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionCountArgs} args - Arguments to filter FocusSessions to count.
     * @example
     * // Count the number of FocusSessions
     * const count = await prisma.focusSession.count({
     *   where: {
     *     // ... the filter for the FocusSessions we want to count
     *   }
     * })
    **/
    count<T extends FocusSessionCountArgs>(
      args?: Subset<T, FocusSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FocusSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FocusSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FocusSessionAggregateArgs>(args: Subset<T, FocusSessionAggregateArgs>): Prisma.PrismaPromise<GetFocusSessionAggregateType<T>>

    /**
     * Group by FocusSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionGroupByArgs} args - Group by arguments.
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
      T extends FocusSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FocusSessionGroupByArgs['orderBy'] }
        : { orderBy?: FocusSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FocusSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFocusSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FocusSession model
   */
  readonly fields: FocusSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FocusSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FocusSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    study<T extends StudyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudyDefaultArgs<ExtArgs>>): Prisma__StudyClient<$Result.GetResult<Prisma.$StudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FocusSession model
   */
  interface FocusSessionFieldRefs {
    readonly id: FieldRef<"FocusSession", 'String'>
    readonly studyId: FieldRef<"FocusSession", 'String'>
    readonly date: FieldRef<"FocusSession", 'DateTime'>
    readonly durationSecs: FieldRef<"FocusSession", 'Int'>
    readonly elapsedSecs: FieldRef<"FocusSession", 'Int'>
    readonly status: FieldRef<"FocusSession", 'FocusStatus'>
    readonly pointsEarned: FieldRef<"FocusSession", 'Int'>
    readonly startedAt: FieldRef<"FocusSession", 'DateTime'>
    readonly completedAt: FieldRef<"FocusSession", 'DateTime'>
    readonly createdAt: FieldRef<"FocusSession", 'DateTime'>
    readonly updatedAt: FieldRef<"FocusSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FocusSession findUnique
   */
  export type FocusSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession findUniqueOrThrow
   */
  export type FocusSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession findFirst
   */
  export type FocusSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession findFirstOrThrow
   */
  export type FocusSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession findMany
   */
  export type FocusSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSessions to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession create
   */
  export type FocusSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a FocusSession.
     */
    data: XOR<FocusSessionCreateInput, FocusSessionUncheckedCreateInput>
  }

  /**
   * FocusSession createMany
   */
  export type FocusSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FocusSessions.
     */
    data: FocusSessionCreateManyInput | FocusSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FocusSession createManyAndReturn
   */
  export type FocusSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * The data used to create many FocusSessions.
     */
    data: FocusSessionCreateManyInput | FocusSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FocusSession update
   */
  export type FocusSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a FocusSession.
     */
    data: XOR<FocusSessionUpdateInput, FocusSessionUncheckedUpdateInput>
    /**
     * Choose, which FocusSession to update.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession updateMany
   */
  export type FocusSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FocusSessions.
     */
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyInput>
    /**
     * Filter which FocusSessions to update
     */
    where?: FocusSessionWhereInput
    /**
     * Limit how many FocusSessions to update.
     */
    limit?: number
  }

  /**
   * FocusSession updateManyAndReturn
   */
  export type FocusSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * The data used to update FocusSessions.
     */
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyInput>
    /**
     * Filter which FocusSessions to update
     */
    where?: FocusSessionWhereInput
    /**
     * Limit how many FocusSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FocusSession upsert
   */
  export type FocusSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the FocusSession to update in case it exists.
     */
    where: FocusSessionWhereUniqueInput
    /**
     * In case the FocusSession found by the `where` argument doesn't exist, create a new FocusSession with this data.
     */
    create: XOR<FocusSessionCreateInput, FocusSessionUncheckedCreateInput>
    /**
     * In case the FocusSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FocusSessionUpdateInput, FocusSessionUncheckedUpdateInput>
  }

  /**
   * FocusSession delete
   */
  export type FocusSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter which FocusSession to delete.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession deleteMany
   */
  export type FocusSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusSessions to delete
     */
    where?: FocusSessionWhereInput
    /**
     * Limit how many FocusSessions to delete.
     */
    limit?: number
  }

  /**
   * FocusSession without action
   */
  export type FocusSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
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


  export const StudyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nickname: 'nickname',
    description: 'description',
    password: 'password',
    backgroundType: 'backgroundType',
    backgroundColor: 'backgroundColor',
    backgroundImage: 'backgroundImage',
    totalPoints: 'totalPoints',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudyScalarFieldEnum = (typeof StudyScalarFieldEnum)[keyof typeof StudyScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    studyId: 'studyId',
    nickname: 'nickname',
    emoji: 'emoji',
    joinedAt: 'joinedAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const StudyReactionScalarFieldEnum: {
    id: 'id',
    studyId: 'studyId',
    emoji: 'emoji',
    count: 'count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudyReactionScalarFieldEnum = (typeof StudyReactionScalarFieldEnum)[keyof typeof StudyReactionScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    studyId: 'studyId',
    title: 'title',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitLogScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    date: 'date',
    completed: 'completed',
    createdAt: 'createdAt'
  };

  export type HabitLogScalarFieldEnum = (typeof HabitLogScalarFieldEnum)[keyof typeof HabitLogScalarFieldEnum]


  export const FocusSessionScalarFieldEnum: {
    id: 'id',
    studyId: 'studyId',
    date: 'date',
    durationSecs: 'durationSecs',
    elapsedSecs: 'elapsedSecs',
    status: 'status',
    pointsEarned: 'pointsEarned',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FocusSessionScalarFieldEnum = (typeof FocusSessionScalarFieldEnum)[keyof typeof FocusSessionScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BackgroundType'
   */
  export type EnumBackgroundTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BackgroundType'>
    


  /**
   * Reference to a field of type 'BackgroundType[]'
   */
  export type ListEnumBackgroundTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BackgroundType[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FocusStatus'
   */
  export type EnumFocusStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FocusStatus'>
    


  /**
   * Reference to a field of type 'FocusStatus[]'
   */
  export type ListEnumFocusStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FocusStatus[]'>
    


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


  export type StudyWhereInput = {
    AND?: StudyWhereInput | StudyWhereInput[]
    OR?: StudyWhereInput[]
    NOT?: StudyWhereInput | StudyWhereInput[]
    id?: StringFilter<"Study"> | string
    name?: StringFilter<"Study"> | string
    nickname?: StringFilter<"Study"> | string
    description?: StringNullableFilter<"Study"> | string | null
    password?: StringNullableFilter<"Study"> | string | null
    backgroundType?: EnumBackgroundTypeFilter<"Study"> | $Enums.BackgroundType
    backgroundColor?: StringNullableFilter<"Study"> | string | null
    backgroundImage?: StringNullableFilter<"Study"> | string | null
    totalPoints?: IntFilter<"Study"> | number
    createdAt?: DateTimeFilter<"Study"> | Date | string
    updatedAt?: DateTimeFilter<"Study"> | Date | string
    habits?: HabitListRelationFilter
    participants?: ParticipantListRelationFilter
    focusSessions?: FocusSessionListRelationFilter
    reactions?: StudyReactionListRelationFilter
  }

  export type StudyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    backgroundType?: SortOrder
    backgroundColor?: SortOrderInput | SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    habits?: HabitOrderByRelationAggregateInput
    participants?: ParticipantOrderByRelationAggregateInput
    focusSessions?: FocusSessionOrderByRelationAggregateInput
    reactions?: StudyReactionOrderByRelationAggregateInput
  }

  export type StudyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudyWhereInput | StudyWhereInput[]
    OR?: StudyWhereInput[]
    NOT?: StudyWhereInput | StudyWhereInput[]
    name?: StringFilter<"Study"> | string
    nickname?: StringFilter<"Study"> | string
    description?: StringNullableFilter<"Study"> | string | null
    password?: StringNullableFilter<"Study"> | string | null
    backgroundType?: EnumBackgroundTypeFilter<"Study"> | $Enums.BackgroundType
    backgroundColor?: StringNullableFilter<"Study"> | string | null
    backgroundImage?: StringNullableFilter<"Study"> | string | null
    totalPoints?: IntFilter<"Study"> | number
    createdAt?: DateTimeFilter<"Study"> | Date | string
    updatedAt?: DateTimeFilter<"Study"> | Date | string
    habits?: HabitListRelationFilter
    participants?: ParticipantListRelationFilter
    focusSessions?: FocusSessionListRelationFilter
    reactions?: StudyReactionListRelationFilter
  }, "id">

  export type StudyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    description?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    backgroundType?: SortOrder
    backgroundColor?: SortOrderInput | SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudyCountOrderByAggregateInput
    _avg?: StudyAvgOrderByAggregateInput
    _max?: StudyMaxOrderByAggregateInput
    _min?: StudyMinOrderByAggregateInput
    _sum?: StudySumOrderByAggregateInput
  }

  export type StudyScalarWhereWithAggregatesInput = {
    AND?: StudyScalarWhereWithAggregatesInput | StudyScalarWhereWithAggregatesInput[]
    OR?: StudyScalarWhereWithAggregatesInput[]
    NOT?: StudyScalarWhereWithAggregatesInput | StudyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Study"> | string
    name?: StringWithAggregatesFilter<"Study"> | string
    nickname?: StringWithAggregatesFilter<"Study"> | string
    description?: StringNullableWithAggregatesFilter<"Study"> | string | null
    password?: StringNullableWithAggregatesFilter<"Study"> | string | null
    backgroundType?: EnumBackgroundTypeWithAggregatesFilter<"Study"> | $Enums.BackgroundType
    backgroundColor?: StringNullableWithAggregatesFilter<"Study"> | string | null
    backgroundImage?: StringNullableWithAggregatesFilter<"Study"> | string | null
    totalPoints?: IntWithAggregatesFilter<"Study"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Study"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Study"> | Date | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: StringFilter<"Participant"> | string
    studyId?: StringFilter<"Participant"> | string
    nickname?: StringFilter<"Participant"> | string
    emoji?: StringNullableFilter<"Participant"> | string | null
    joinedAt?: DateTimeFilter<"Participant"> | Date | string
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    studyId?: SortOrder
    nickname?: SortOrder
    emoji?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    study?: StudyOrderByWithRelationInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studyId_nickname?: ParticipantStudyIdNicknameCompoundUniqueInput
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    studyId?: StringFilter<"Participant"> | string
    nickname?: StringFilter<"Participant"> | string
    emoji?: StringNullableFilter<"Participant"> | string | null
    joinedAt?: DateTimeFilter<"Participant"> | Date | string
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>
  }, "id" | "studyId_nickname">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    studyId?: SortOrder
    nickname?: SortOrder
    emoji?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participant"> | string
    studyId?: StringWithAggregatesFilter<"Participant"> | string
    nickname?: StringWithAggregatesFilter<"Participant"> | string
    emoji?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type StudyReactionWhereInput = {
    AND?: StudyReactionWhereInput | StudyReactionWhereInput[]
    OR?: StudyReactionWhereInput[]
    NOT?: StudyReactionWhereInput | StudyReactionWhereInput[]
    id?: StringFilter<"StudyReaction"> | string
    studyId?: StringFilter<"StudyReaction"> | string
    emoji?: StringFilter<"StudyReaction"> | string
    count?: IntFilter<"StudyReaction"> | number
    createdAt?: DateTimeFilter<"StudyReaction"> | Date | string
    updatedAt?: DateTimeFilter<"StudyReaction"> | Date | string
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>
  }

  export type StudyReactionOrderByWithRelationInput = {
    id?: SortOrder
    studyId?: SortOrder
    emoji?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    study?: StudyOrderByWithRelationInput
  }

  export type StudyReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studyId_emoji?: StudyReactionStudyIdEmojiCompoundUniqueInput
    AND?: StudyReactionWhereInput | StudyReactionWhereInput[]
    OR?: StudyReactionWhereInput[]
    NOT?: StudyReactionWhereInput | StudyReactionWhereInput[]
    studyId?: StringFilter<"StudyReaction"> | string
    emoji?: StringFilter<"StudyReaction"> | string
    count?: IntFilter<"StudyReaction"> | number
    createdAt?: DateTimeFilter<"StudyReaction"> | Date | string
    updatedAt?: DateTimeFilter<"StudyReaction"> | Date | string
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>
  }, "id" | "studyId_emoji">

  export type StudyReactionOrderByWithAggregationInput = {
    id?: SortOrder
    studyId?: SortOrder
    emoji?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudyReactionCountOrderByAggregateInput
    _avg?: StudyReactionAvgOrderByAggregateInput
    _max?: StudyReactionMaxOrderByAggregateInput
    _min?: StudyReactionMinOrderByAggregateInput
    _sum?: StudyReactionSumOrderByAggregateInput
  }

  export type StudyReactionScalarWhereWithAggregatesInput = {
    AND?: StudyReactionScalarWhereWithAggregatesInput | StudyReactionScalarWhereWithAggregatesInput[]
    OR?: StudyReactionScalarWhereWithAggregatesInput[]
    NOT?: StudyReactionScalarWhereWithAggregatesInput | StudyReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudyReaction"> | string
    studyId?: StringWithAggregatesFilter<"StudyReaction"> | string
    emoji?: StringWithAggregatesFilter<"StudyReaction"> | string
    count?: IntWithAggregatesFilter<"StudyReaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudyReaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudyReaction"> | Date | string
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    studyId?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    order?: IntFilter<"Habit"> | number
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>
    logs?: HabitLogListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    studyId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    study?: StudyOrderByWithRelationInput
    logs?: HabitLogOrderByRelationAggregateInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    studyId?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    order?: IntFilter<"Habit"> | number
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>
    logs?: HabitLogListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    studyId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    studyId?: StringWithAggregatesFilter<"Habit"> | string
    title?: StringWithAggregatesFilter<"Habit"> | string
    order?: IntWithAggregatesFilter<"Habit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
  }

  export type HabitLogWhereInput = {
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    id?: StringFilter<"HabitLog"> | string
    habitId?: StringFilter<"HabitLog"> | string
    date?: DateTimeFilter<"HabitLog"> | Date | string
    completed?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }

  export type HabitLogOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    habit?: HabitOrderByWithRelationInput
  }

  export type HabitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    habitId_date?: HabitLogHabitIdDateCompoundUniqueInput
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    habitId?: StringFilter<"HabitLog"> | string
    date?: DateTimeFilter<"HabitLog"> | Date | string
    completed?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }, "id" | "habitId_date">

  export type HabitLogOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    _count?: HabitLogCountOrderByAggregateInput
    _max?: HabitLogMaxOrderByAggregateInput
    _min?: HabitLogMinOrderByAggregateInput
  }

  export type HabitLogScalarWhereWithAggregatesInput = {
    AND?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    OR?: HabitLogScalarWhereWithAggregatesInput[]
    NOT?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitLog"> | string
    habitId?: StringWithAggregatesFilter<"HabitLog"> | string
    date?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
    completed?: BoolWithAggregatesFilter<"HabitLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
  }

  export type FocusSessionWhereInput = {
    AND?: FocusSessionWhereInput | FocusSessionWhereInput[]
    OR?: FocusSessionWhereInput[]
    NOT?: FocusSessionWhereInput | FocusSessionWhereInput[]
    id?: StringFilter<"FocusSession"> | string
    studyId?: StringFilter<"FocusSession"> | string
    date?: DateTimeFilter<"FocusSession"> | Date | string
    durationSecs?: IntFilter<"FocusSession"> | number
    elapsedSecs?: IntFilter<"FocusSession"> | number
    status?: EnumFocusStatusFilter<"FocusSession"> | $Enums.FocusStatus
    pointsEarned?: IntFilter<"FocusSession"> | number
    startedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    updatedAt?: DateTimeFilter<"FocusSession"> | Date | string
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>
  }

  export type FocusSessionOrderByWithRelationInput = {
    id?: SortOrder
    studyId?: SortOrder
    date?: SortOrder
    durationSecs?: SortOrder
    elapsedSecs?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    study?: StudyOrderByWithRelationInput
  }

  export type FocusSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FocusSessionWhereInput | FocusSessionWhereInput[]
    OR?: FocusSessionWhereInput[]
    NOT?: FocusSessionWhereInput | FocusSessionWhereInput[]
    studyId?: StringFilter<"FocusSession"> | string
    date?: DateTimeFilter<"FocusSession"> | Date | string
    durationSecs?: IntFilter<"FocusSession"> | number
    elapsedSecs?: IntFilter<"FocusSession"> | number
    status?: EnumFocusStatusFilter<"FocusSession"> | $Enums.FocusStatus
    pointsEarned?: IntFilter<"FocusSession"> | number
    startedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    updatedAt?: DateTimeFilter<"FocusSession"> | Date | string
    study?: XOR<StudyScalarRelationFilter, StudyWhereInput>
  }, "id">

  export type FocusSessionOrderByWithAggregationInput = {
    id?: SortOrder
    studyId?: SortOrder
    date?: SortOrder
    durationSecs?: SortOrder
    elapsedSecs?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FocusSessionCountOrderByAggregateInput
    _avg?: FocusSessionAvgOrderByAggregateInput
    _max?: FocusSessionMaxOrderByAggregateInput
    _min?: FocusSessionMinOrderByAggregateInput
    _sum?: FocusSessionSumOrderByAggregateInput
  }

  export type FocusSessionScalarWhereWithAggregatesInput = {
    AND?: FocusSessionScalarWhereWithAggregatesInput | FocusSessionScalarWhereWithAggregatesInput[]
    OR?: FocusSessionScalarWhereWithAggregatesInput[]
    NOT?: FocusSessionScalarWhereWithAggregatesInput | FocusSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FocusSession"> | string
    studyId?: StringWithAggregatesFilter<"FocusSession"> | string
    date?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
    durationSecs?: IntWithAggregatesFilter<"FocusSession"> | number
    elapsedSecs?: IntWithAggregatesFilter<"FocusSession"> | number
    status?: EnumFocusStatusWithAggregatesFilter<"FocusSession"> | $Enums.FocusStatus
    pointsEarned?: IntWithAggregatesFilter<"FocusSession"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"FocusSession"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"FocusSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
  }

  export type StudyCreateInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutStudyInput
    participants?: ParticipantCreateNestedManyWithoutStudyInput
    focusSessions?: FocusSessionCreateNestedManyWithoutStudyInput
    reactions?: StudyReactionCreateNestedManyWithoutStudyInput
  }

  export type StudyUncheckedCreateInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutStudyInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutStudyInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutStudyInput
    reactions?: StudyReactionUncheckedCreateNestedManyWithoutStudyInput
  }

  export type StudyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutStudyNestedInput
    participants?: ParticipantUpdateManyWithoutStudyNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutStudyNestedInput
    reactions?: StudyReactionUpdateManyWithoutStudyNestedInput
  }

  export type StudyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutStudyNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutStudyNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutStudyNestedInput
    reactions?: StudyReactionUncheckedUpdateManyWithoutStudyNestedInput
  }

  export type StudyCreateManyInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateInput = {
    id?: string
    nickname: string
    emoji?: string | null
    joinedAt?: Date | string
    study: StudyCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    studyId: string
    nickname: string
    emoji?: string | null
    joinedAt?: Date | string
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    study?: StudyUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateManyInput = {
    id?: string
    studyId: string
    nickname: string
    emoji?: string | null
    joinedAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyReactionCreateInput = {
    id?: string
    emoji: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    study: StudyCreateNestedOneWithoutReactionsInput
  }

  export type StudyReactionUncheckedCreateInput = {
    id?: string
    studyId: string
    emoji: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    study?: StudyUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type StudyReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyReactionCreateManyInput = {
    id?: string
    studyId: string
    emoji: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    study: StudyCreateNestedOneWithoutHabitsInput
    logs?: HabitLogCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    studyId: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    study?: StudyUpdateOneRequiredWithoutHabitsNestedInput
    logs?: HabitLogUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    studyId: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateInput = {
    id?: string
    date: Date | string
    completed?: boolean
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutLogsInput
  }

  export type HabitLogUncheckedCreateInput = {
    id?: string
    habitId: string
    date: Date | string
    completed?: boolean
    createdAt?: Date | string
  }

  export type HabitLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutLogsNestedInput
  }

  export type HabitLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateManyInput = {
    id?: string
    habitId: string
    date: Date | string
    completed?: boolean
    createdAt?: Date | string
  }

  export type HabitLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionCreateInput = {
    id?: string
    date: Date | string
    durationSecs?: number
    elapsedSecs?: number
    status?: $Enums.FocusStatus
    pointsEarned?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    study: StudyCreateNestedOneWithoutFocusSessionsInput
  }

  export type FocusSessionUncheckedCreateInput = {
    id?: string
    studyId: string
    date: Date | string
    durationSecs?: number
    elapsedSecs?: number
    status?: $Enums.FocusStatus
    pointsEarned?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSecs?: IntFieldUpdateOperationsInput | number
    elapsedSecs?: IntFieldUpdateOperationsInput | number
    status?: EnumFocusStatusFieldUpdateOperationsInput | $Enums.FocusStatus
    pointsEarned?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    study?: StudyUpdateOneRequiredWithoutFocusSessionsNestedInput
  }

  export type FocusSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSecs?: IntFieldUpdateOperationsInput | number
    elapsedSecs?: IntFieldUpdateOperationsInput | number
    status?: EnumFocusStatusFieldUpdateOperationsInput | $Enums.FocusStatus
    pointsEarned?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionCreateManyInput = {
    id?: string
    studyId: string
    date: Date | string
    durationSecs?: number
    elapsedSecs?: number
    status?: $Enums.FocusStatus
    pointsEarned?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSecs?: IntFieldUpdateOperationsInput | number
    elapsedSecs?: IntFieldUpdateOperationsInput | number
    status?: EnumFocusStatusFieldUpdateOperationsInput | $Enums.FocusStatus
    pointsEarned?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSecs?: IntFieldUpdateOperationsInput | number
    elapsedSecs?: IntFieldUpdateOperationsInput | number
    status?: EnumFocusStatusFieldUpdateOperationsInput | $Enums.FocusStatus
    pointsEarned?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumBackgroundTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BackgroundType | EnumBackgroundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BackgroundType[] | ListEnumBackgroundTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BackgroundType[] | ListEnumBackgroundTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBackgroundTypeFilter<$PrismaModel> | $Enums.BackgroundType
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

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type FocusSessionListRelationFilter = {
    every?: FocusSessionWhereInput
    some?: FocusSessionWhereInput
    none?: FocusSessionWhereInput
  }

  export type StudyReactionListRelationFilter = {
    every?: StudyReactionWhereInput
    some?: StudyReactionWhereInput
    none?: StudyReactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FocusSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    description?: SortOrder
    password?: SortOrder
    backgroundType?: SortOrder
    backgroundColor?: SortOrder
    backgroundImage?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
  }

  export type StudyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    description?: SortOrder
    password?: SortOrder
    backgroundType?: SortOrder
    backgroundColor?: SortOrder
    backgroundImage?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    description?: SortOrder
    password?: SortOrder
    backgroundType?: SortOrder
    backgroundColor?: SortOrder
    backgroundImage?: SortOrder
    totalPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudySumOrderByAggregateInput = {
    totalPoints?: SortOrder
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

  export type EnumBackgroundTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BackgroundType | EnumBackgroundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BackgroundType[] | ListEnumBackgroundTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BackgroundType[] | ListEnumBackgroundTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBackgroundTypeWithAggregatesFilter<$PrismaModel> | $Enums.BackgroundType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBackgroundTypeFilter<$PrismaModel>
    _max?: NestedEnumBackgroundTypeFilter<$PrismaModel>
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

  export type StudyScalarRelationFilter = {
    is?: StudyWhereInput
    isNot?: StudyWhereInput
  }

  export type ParticipantStudyIdNicknameCompoundUniqueInput = {
    studyId: string
    nickname: string
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    nickname?: SortOrder
    emoji?: SortOrder
    joinedAt?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    nickname?: SortOrder
    emoji?: SortOrder
    joinedAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    nickname?: SortOrder
    emoji?: SortOrder
    joinedAt?: SortOrder
  }

  export type StudyReactionStudyIdEmojiCompoundUniqueInput = {
    studyId: string
    emoji: string
  }

  export type StudyReactionCountOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    emoji?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyReactionAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type StudyReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    emoji?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyReactionMinOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    emoji?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyReactionSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type HabitLogListRelationFilter = {
    every?: HabitLogWhereInput
    some?: HabitLogWhereInput
    none?: HabitLogWhereInput
  }

  export type HabitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    title?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HabitScalarRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type HabitLogHabitIdDateCompoundUniqueInput = {
    habitId: string
    date: Date | string
  }

  export type HabitLogCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumFocusStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FocusStatus | EnumFocusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FocusStatus[] | ListEnumFocusStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FocusStatus[] | ListEnumFocusStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFocusStatusFilter<$PrismaModel> | $Enums.FocusStatus
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

  export type FocusSessionCountOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    date?: SortOrder
    durationSecs?: SortOrder
    elapsedSecs?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FocusSessionAvgOrderByAggregateInput = {
    durationSecs?: SortOrder
    elapsedSecs?: SortOrder
    pointsEarned?: SortOrder
  }

  export type FocusSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    date?: SortOrder
    durationSecs?: SortOrder
    elapsedSecs?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FocusSessionMinOrderByAggregateInput = {
    id?: SortOrder
    studyId?: SortOrder
    date?: SortOrder
    durationSecs?: SortOrder
    elapsedSecs?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FocusSessionSumOrderByAggregateInput = {
    durationSecs?: SortOrder
    elapsedSecs?: SortOrder
    pointsEarned?: SortOrder
  }

  export type EnumFocusStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FocusStatus | EnumFocusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FocusStatus[] | ListEnumFocusStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FocusStatus[] | ListEnumFocusStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFocusStatusWithAggregatesFilter<$PrismaModel> | $Enums.FocusStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFocusStatusFilter<$PrismaModel>
    _max?: NestedEnumFocusStatusFilter<$PrismaModel>
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

  export type HabitCreateNestedManyWithoutStudyInput = {
    create?: XOR<HabitCreateWithoutStudyInput, HabitUncheckedCreateWithoutStudyInput> | HabitCreateWithoutStudyInput[] | HabitUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutStudyInput | HabitCreateOrConnectWithoutStudyInput[]
    createMany?: HabitCreateManyStudyInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type ParticipantCreateNestedManyWithoutStudyInput = {
    create?: XOR<ParticipantCreateWithoutStudyInput, ParticipantUncheckedCreateWithoutStudyInput> | ParticipantCreateWithoutStudyInput[] | ParticipantUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutStudyInput | ParticipantCreateOrConnectWithoutStudyInput[]
    createMany?: ParticipantCreateManyStudyInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type FocusSessionCreateNestedManyWithoutStudyInput = {
    create?: XOR<FocusSessionCreateWithoutStudyInput, FocusSessionUncheckedCreateWithoutStudyInput> | FocusSessionCreateWithoutStudyInput[] | FocusSessionUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutStudyInput | FocusSessionCreateOrConnectWithoutStudyInput[]
    createMany?: FocusSessionCreateManyStudyInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type StudyReactionCreateNestedManyWithoutStudyInput = {
    create?: XOR<StudyReactionCreateWithoutStudyInput, StudyReactionUncheckedCreateWithoutStudyInput> | StudyReactionCreateWithoutStudyInput[] | StudyReactionUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: StudyReactionCreateOrConnectWithoutStudyInput | StudyReactionCreateOrConnectWithoutStudyInput[]
    createMany?: StudyReactionCreateManyStudyInputEnvelope
    connect?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutStudyInput = {
    create?: XOR<HabitCreateWithoutStudyInput, HabitUncheckedCreateWithoutStudyInput> | HabitCreateWithoutStudyInput[] | HabitUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutStudyInput | HabitCreateOrConnectWithoutStudyInput[]
    createMany?: HabitCreateManyStudyInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutStudyInput = {
    create?: XOR<ParticipantCreateWithoutStudyInput, ParticipantUncheckedCreateWithoutStudyInput> | ParticipantCreateWithoutStudyInput[] | ParticipantUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutStudyInput | ParticipantCreateOrConnectWithoutStudyInput[]
    createMany?: ParticipantCreateManyStudyInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type FocusSessionUncheckedCreateNestedManyWithoutStudyInput = {
    create?: XOR<FocusSessionCreateWithoutStudyInput, FocusSessionUncheckedCreateWithoutStudyInput> | FocusSessionCreateWithoutStudyInput[] | FocusSessionUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutStudyInput | FocusSessionCreateOrConnectWithoutStudyInput[]
    createMany?: FocusSessionCreateManyStudyInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type StudyReactionUncheckedCreateNestedManyWithoutStudyInput = {
    create?: XOR<StudyReactionCreateWithoutStudyInput, StudyReactionUncheckedCreateWithoutStudyInput> | StudyReactionCreateWithoutStudyInput[] | StudyReactionUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: StudyReactionCreateOrConnectWithoutStudyInput | StudyReactionCreateOrConnectWithoutStudyInput[]
    createMany?: StudyReactionCreateManyStudyInputEnvelope
    connect?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumBackgroundTypeFieldUpdateOperationsInput = {
    set?: $Enums.BackgroundType
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

  export type HabitUpdateManyWithoutStudyNestedInput = {
    create?: XOR<HabitCreateWithoutStudyInput, HabitUncheckedCreateWithoutStudyInput> | HabitCreateWithoutStudyInput[] | HabitUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutStudyInput | HabitCreateOrConnectWithoutStudyInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutStudyInput | HabitUpsertWithWhereUniqueWithoutStudyInput[]
    createMany?: HabitCreateManyStudyInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutStudyInput | HabitUpdateWithWhereUniqueWithoutStudyInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutStudyInput | HabitUpdateManyWithWhereWithoutStudyInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type ParticipantUpdateManyWithoutStudyNestedInput = {
    create?: XOR<ParticipantCreateWithoutStudyInput, ParticipantUncheckedCreateWithoutStudyInput> | ParticipantCreateWithoutStudyInput[] | ParticipantUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutStudyInput | ParticipantCreateOrConnectWithoutStudyInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutStudyInput | ParticipantUpsertWithWhereUniqueWithoutStudyInput[]
    createMany?: ParticipantCreateManyStudyInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutStudyInput | ParticipantUpdateWithWhereUniqueWithoutStudyInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutStudyInput | ParticipantUpdateManyWithWhereWithoutStudyInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type FocusSessionUpdateManyWithoutStudyNestedInput = {
    create?: XOR<FocusSessionCreateWithoutStudyInput, FocusSessionUncheckedCreateWithoutStudyInput> | FocusSessionCreateWithoutStudyInput[] | FocusSessionUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutStudyInput | FocusSessionCreateOrConnectWithoutStudyInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutStudyInput | FocusSessionUpsertWithWhereUniqueWithoutStudyInput[]
    createMany?: FocusSessionCreateManyStudyInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutStudyInput | FocusSessionUpdateWithWhereUniqueWithoutStudyInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutStudyInput | FocusSessionUpdateManyWithWhereWithoutStudyInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type StudyReactionUpdateManyWithoutStudyNestedInput = {
    create?: XOR<StudyReactionCreateWithoutStudyInput, StudyReactionUncheckedCreateWithoutStudyInput> | StudyReactionCreateWithoutStudyInput[] | StudyReactionUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: StudyReactionCreateOrConnectWithoutStudyInput | StudyReactionCreateOrConnectWithoutStudyInput[]
    upsert?: StudyReactionUpsertWithWhereUniqueWithoutStudyInput | StudyReactionUpsertWithWhereUniqueWithoutStudyInput[]
    createMany?: StudyReactionCreateManyStudyInputEnvelope
    set?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
    disconnect?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
    delete?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
    connect?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
    update?: StudyReactionUpdateWithWhereUniqueWithoutStudyInput | StudyReactionUpdateWithWhereUniqueWithoutStudyInput[]
    updateMany?: StudyReactionUpdateManyWithWhereWithoutStudyInput | StudyReactionUpdateManyWithWhereWithoutStudyInput[]
    deleteMany?: StudyReactionScalarWhereInput | StudyReactionScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutStudyNestedInput = {
    create?: XOR<HabitCreateWithoutStudyInput, HabitUncheckedCreateWithoutStudyInput> | HabitCreateWithoutStudyInput[] | HabitUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutStudyInput | HabitCreateOrConnectWithoutStudyInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutStudyInput | HabitUpsertWithWhereUniqueWithoutStudyInput[]
    createMany?: HabitCreateManyStudyInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutStudyInput | HabitUpdateWithWhereUniqueWithoutStudyInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutStudyInput | HabitUpdateManyWithWhereWithoutStudyInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutStudyNestedInput = {
    create?: XOR<ParticipantCreateWithoutStudyInput, ParticipantUncheckedCreateWithoutStudyInput> | ParticipantCreateWithoutStudyInput[] | ParticipantUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutStudyInput | ParticipantCreateOrConnectWithoutStudyInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutStudyInput | ParticipantUpsertWithWhereUniqueWithoutStudyInput[]
    createMany?: ParticipantCreateManyStudyInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutStudyInput | ParticipantUpdateWithWhereUniqueWithoutStudyInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutStudyInput | ParticipantUpdateManyWithWhereWithoutStudyInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type FocusSessionUncheckedUpdateManyWithoutStudyNestedInput = {
    create?: XOR<FocusSessionCreateWithoutStudyInput, FocusSessionUncheckedCreateWithoutStudyInput> | FocusSessionCreateWithoutStudyInput[] | FocusSessionUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutStudyInput | FocusSessionCreateOrConnectWithoutStudyInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutStudyInput | FocusSessionUpsertWithWhereUniqueWithoutStudyInput[]
    createMany?: FocusSessionCreateManyStudyInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutStudyInput | FocusSessionUpdateWithWhereUniqueWithoutStudyInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutStudyInput | FocusSessionUpdateManyWithWhereWithoutStudyInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type StudyReactionUncheckedUpdateManyWithoutStudyNestedInput = {
    create?: XOR<StudyReactionCreateWithoutStudyInput, StudyReactionUncheckedCreateWithoutStudyInput> | StudyReactionCreateWithoutStudyInput[] | StudyReactionUncheckedCreateWithoutStudyInput[]
    connectOrCreate?: StudyReactionCreateOrConnectWithoutStudyInput | StudyReactionCreateOrConnectWithoutStudyInput[]
    upsert?: StudyReactionUpsertWithWhereUniqueWithoutStudyInput | StudyReactionUpsertWithWhereUniqueWithoutStudyInput[]
    createMany?: StudyReactionCreateManyStudyInputEnvelope
    set?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
    disconnect?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
    delete?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
    connect?: StudyReactionWhereUniqueInput | StudyReactionWhereUniqueInput[]
    update?: StudyReactionUpdateWithWhereUniqueWithoutStudyInput | StudyReactionUpdateWithWhereUniqueWithoutStudyInput[]
    updateMany?: StudyReactionUpdateManyWithWhereWithoutStudyInput | StudyReactionUpdateManyWithWhereWithoutStudyInput[]
    deleteMany?: StudyReactionScalarWhereInput | StudyReactionScalarWhereInput[]
  }

  export type StudyCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<StudyCreateWithoutParticipantsInput, StudyUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: StudyCreateOrConnectWithoutParticipantsInput
    connect?: StudyWhereUniqueInput
  }

  export type StudyUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<StudyCreateWithoutParticipantsInput, StudyUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: StudyCreateOrConnectWithoutParticipantsInput
    upsert?: StudyUpsertWithoutParticipantsInput
    connect?: StudyWhereUniqueInput
    update?: XOR<XOR<StudyUpdateToOneWithWhereWithoutParticipantsInput, StudyUpdateWithoutParticipantsInput>, StudyUncheckedUpdateWithoutParticipantsInput>
  }

  export type StudyCreateNestedOneWithoutReactionsInput = {
    create?: XOR<StudyCreateWithoutReactionsInput, StudyUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: StudyCreateOrConnectWithoutReactionsInput
    connect?: StudyWhereUniqueInput
  }

  export type StudyUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<StudyCreateWithoutReactionsInput, StudyUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: StudyCreateOrConnectWithoutReactionsInput
    upsert?: StudyUpsertWithoutReactionsInput
    connect?: StudyWhereUniqueInput
    update?: XOR<XOR<StudyUpdateToOneWithWhereWithoutReactionsInput, StudyUpdateWithoutReactionsInput>, StudyUncheckedUpdateWithoutReactionsInput>
  }

  export type StudyCreateNestedOneWithoutHabitsInput = {
    create?: XOR<StudyCreateWithoutHabitsInput, StudyUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: StudyCreateOrConnectWithoutHabitsInput
    connect?: StudyWhereUniqueInput
  }

  export type HabitLogCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HabitLogUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type StudyUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<StudyCreateWithoutHabitsInput, StudyUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: StudyCreateOrConnectWithoutHabitsInput
    upsert?: StudyUpsertWithoutHabitsInput
    connect?: StudyWhereUniqueInput
    update?: XOR<XOR<StudyUpdateToOneWithWhereWithoutHabitsInput, StudyUpdateWithoutHabitsInput>, StudyUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitLogUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutLogsInput = {
    create?: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutLogsInput
    connect?: HabitWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HabitUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutLogsInput
    upsert?: HabitUpsertWithoutLogsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutLogsInput, HabitUpdateWithoutLogsInput>, HabitUncheckedUpdateWithoutLogsInput>
  }

  export type StudyCreateNestedOneWithoutFocusSessionsInput = {
    create?: XOR<StudyCreateWithoutFocusSessionsInput, StudyUncheckedCreateWithoutFocusSessionsInput>
    connectOrCreate?: StudyCreateOrConnectWithoutFocusSessionsInput
    connect?: StudyWhereUniqueInput
  }

  export type EnumFocusStatusFieldUpdateOperationsInput = {
    set?: $Enums.FocusStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudyUpdateOneRequiredWithoutFocusSessionsNestedInput = {
    create?: XOR<StudyCreateWithoutFocusSessionsInput, StudyUncheckedCreateWithoutFocusSessionsInput>
    connectOrCreate?: StudyCreateOrConnectWithoutFocusSessionsInput
    upsert?: StudyUpsertWithoutFocusSessionsInput
    connect?: StudyWhereUniqueInput
    update?: XOR<XOR<StudyUpdateToOneWithWhereWithoutFocusSessionsInput, StudyUpdateWithoutFocusSessionsInput>, StudyUncheckedUpdateWithoutFocusSessionsInput>
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

  export type NestedEnumBackgroundTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BackgroundType | EnumBackgroundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BackgroundType[] | ListEnumBackgroundTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BackgroundType[] | ListEnumBackgroundTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBackgroundTypeFilter<$PrismaModel> | $Enums.BackgroundType
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

  export type NestedEnumBackgroundTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BackgroundType | EnumBackgroundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BackgroundType[] | ListEnumBackgroundTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BackgroundType[] | ListEnumBackgroundTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBackgroundTypeWithAggregatesFilter<$PrismaModel> | $Enums.BackgroundType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBackgroundTypeFilter<$PrismaModel>
    _max?: NestedEnumBackgroundTypeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFocusStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FocusStatus | EnumFocusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FocusStatus[] | ListEnumFocusStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FocusStatus[] | ListEnumFocusStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFocusStatusFilter<$PrismaModel> | $Enums.FocusStatus
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

  export type NestedEnumFocusStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FocusStatus | EnumFocusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FocusStatus[] | ListEnumFocusStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FocusStatus[] | ListEnumFocusStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFocusStatusWithAggregatesFilter<$PrismaModel> | $Enums.FocusStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFocusStatusFilter<$PrismaModel>
    _max?: NestedEnumFocusStatusFilter<$PrismaModel>
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

  export type HabitCreateWithoutStudyInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: HabitLogCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutStudyInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutStudyInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutStudyInput, HabitUncheckedCreateWithoutStudyInput>
  }

  export type HabitCreateManyStudyInputEnvelope = {
    data: HabitCreateManyStudyInput | HabitCreateManyStudyInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantCreateWithoutStudyInput = {
    id?: string
    nickname: string
    emoji?: string | null
    joinedAt?: Date | string
  }

  export type ParticipantUncheckedCreateWithoutStudyInput = {
    id?: string
    nickname: string
    emoji?: string | null
    joinedAt?: Date | string
  }

  export type ParticipantCreateOrConnectWithoutStudyInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutStudyInput, ParticipantUncheckedCreateWithoutStudyInput>
  }

  export type ParticipantCreateManyStudyInputEnvelope = {
    data: ParticipantCreateManyStudyInput | ParticipantCreateManyStudyInput[]
    skipDuplicates?: boolean
  }

  export type FocusSessionCreateWithoutStudyInput = {
    id?: string
    date: Date | string
    durationSecs?: number
    elapsedSecs?: number
    status?: $Enums.FocusStatus
    pointsEarned?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusSessionUncheckedCreateWithoutStudyInput = {
    id?: string
    date: Date | string
    durationSecs?: number
    elapsedSecs?: number
    status?: $Enums.FocusStatus
    pointsEarned?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FocusSessionCreateOrConnectWithoutStudyInput = {
    where: FocusSessionWhereUniqueInput
    create: XOR<FocusSessionCreateWithoutStudyInput, FocusSessionUncheckedCreateWithoutStudyInput>
  }

  export type FocusSessionCreateManyStudyInputEnvelope = {
    data: FocusSessionCreateManyStudyInput | FocusSessionCreateManyStudyInput[]
    skipDuplicates?: boolean
  }

  export type StudyReactionCreateWithoutStudyInput = {
    id?: string
    emoji: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyReactionUncheckedCreateWithoutStudyInput = {
    id?: string
    emoji: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyReactionCreateOrConnectWithoutStudyInput = {
    where: StudyReactionWhereUniqueInput
    create: XOR<StudyReactionCreateWithoutStudyInput, StudyReactionUncheckedCreateWithoutStudyInput>
  }

  export type StudyReactionCreateManyStudyInputEnvelope = {
    data: StudyReactionCreateManyStudyInput | StudyReactionCreateManyStudyInput[]
    skipDuplicates?: boolean
  }

  export type HabitUpsertWithWhereUniqueWithoutStudyInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutStudyInput, HabitUncheckedUpdateWithoutStudyInput>
    create: XOR<HabitCreateWithoutStudyInput, HabitUncheckedCreateWithoutStudyInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutStudyInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutStudyInput, HabitUncheckedUpdateWithoutStudyInput>
  }

  export type HabitUpdateManyWithWhereWithoutStudyInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutStudyInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    studyId?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    order?: IntFilter<"Habit"> | number
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
  }

  export type ParticipantUpsertWithWhereUniqueWithoutStudyInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutStudyInput, ParticipantUncheckedUpdateWithoutStudyInput>
    create: XOR<ParticipantCreateWithoutStudyInput, ParticipantUncheckedCreateWithoutStudyInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutStudyInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutStudyInput, ParticipantUncheckedUpdateWithoutStudyInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutStudyInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutStudyInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    id?: StringFilter<"Participant"> | string
    studyId?: StringFilter<"Participant"> | string
    nickname?: StringFilter<"Participant"> | string
    emoji?: StringNullableFilter<"Participant"> | string | null
    joinedAt?: DateTimeFilter<"Participant"> | Date | string
  }

  export type FocusSessionUpsertWithWhereUniqueWithoutStudyInput = {
    where: FocusSessionWhereUniqueInput
    update: XOR<FocusSessionUpdateWithoutStudyInput, FocusSessionUncheckedUpdateWithoutStudyInput>
    create: XOR<FocusSessionCreateWithoutStudyInput, FocusSessionUncheckedCreateWithoutStudyInput>
  }

  export type FocusSessionUpdateWithWhereUniqueWithoutStudyInput = {
    where: FocusSessionWhereUniqueInput
    data: XOR<FocusSessionUpdateWithoutStudyInput, FocusSessionUncheckedUpdateWithoutStudyInput>
  }

  export type FocusSessionUpdateManyWithWhereWithoutStudyInput = {
    where: FocusSessionScalarWhereInput
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyWithoutStudyInput>
  }

  export type FocusSessionScalarWhereInput = {
    AND?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
    OR?: FocusSessionScalarWhereInput[]
    NOT?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
    id?: StringFilter<"FocusSession"> | string
    studyId?: StringFilter<"FocusSession"> | string
    date?: DateTimeFilter<"FocusSession"> | Date | string
    durationSecs?: IntFilter<"FocusSession"> | number
    elapsedSecs?: IntFilter<"FocusSession"> | number
    status?: EnumFocusStatusFilter<"FocusSession"> | $Enums.FocusStatus
    pointsEarned?: IntFilter<"FocusSession"> | number
    startedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"FocusSession"> | Date | string | null
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    updatedAt?: DateTimeFilter<"FocusSession"> | Date | string
  }

  export type StudyReactionUpsertWithWhereUniqueWithoutStudyInput = {
    where: StudyReactionWhereUniqueInput
    update: XOR<StudyReactionUpdateWithoutStudyInput, StudyReactionUncheckedUpdateWithoutStudyInput>
    create: XOR<StudyReactionCreateWithoutStudyInput, StudyReactionUncheckedCreateWithoutStudyInput>
  }

  export type StudyReactionUpdateWithWhereUniqueWithoutStudyInput = {
    where: StudyReactionWhereUniqueInput
    data: XOR<StudyReactionUpdateWithoutStudyInput, StudyReactionUncheckedUpdateWithoutStudyInput>
  }

  export type StudyReactionUpdateManyWithWhereWithoutStudyInput = {
    where: StudyReactionScalarWhereInput
    data: XOR<StudyReactionUpdateManyMutationInput, StudyReactionUncheckedUpdateManyWithoutStudyInput>
  }

  export type StudyReactionScalarWhereInput = {
    AND?: StudyReactionScalarWhereInput | StudyReactionScalarWhereInput[]
    OR?: StudyReactionScalarWhereInput[]
    NOT?: StudyReactionScalarWhereInput | StudyReactionScalarWhereInput[]
    id?: StringFilter<"StudyReaction"> | string
    studyId?: StringFilter<"StudyReaction"> | string
    emoji?: StringFilter<"StudyReaction"> | string
    count?: IntFilter<"StudyReaction"> | number
    createdAt?: DateTimeFilter<"StudyReaction"> | Date | string
    updatedAt?: DateTimeFilter<"StudyReaction"> | Date | string
  }

  export type StudyCreateWithoutParticipantsInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutStudyInput
    focusSessions?: FocusSessionCreateNestedManyWithoutStudyInput
    reactions?: StudyReactionCreateNestedManyWithoutStudyInput
  }

  export type StudyUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutStudyInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutStudyInput
    reactions?: StudyReactionUncheckedCreateNestedManyWithoutStudyInput
  }

  export type StudyCreateOrConnectWithoutParticipantsInput = {
    where: StudyWhereUniqueInput
    create: XOR<StudyCreateWithoutParticipantsInput, StudyUncheckedCreateWithoutParticipantsInput>
  }

  export type StudyUpsertWithoutParticipantsInput = {
    update: XOR<StudyUpdateWithoutParticipantsInput, StudyUncheckedUpdateWithoutParticipantsInput>
    create: XOR<StudyCreateWithoutParticipantsInput, StudyUncheckedCreateWithoutParticipantsInput>
    where?: StudyWhereInput
  }

  export type StudyUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: StudyWhereInput
    data: XOR<StudyUpdateWithoutParticipantsInput, StudyUncheckedUpdateWithoutParticipantsInput>
  }

  export type StudyUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutStudyNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutStudyNestedInput
    reactions?: StudyReactionUpdateManyWithoutStudyNestedInput
  }

  export type StudyUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutStudyNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutStudyNestedInput
    reactions?: StudyReactionUncheckedUpdateManyWithoutStudyNestedInput
  }

  export type StudyCreateWithoutReactionsInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutStudyInput
    participants?: ParticipantCreateNestedManyWithoutStudyInput
    focusSessions?: FocusSessionCreateNestedManyWithoutStudyInput
  }

  export type StudyUncheckedCreateWithoutReactionsInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutStudyInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutStudyInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutStudyInput
  }

  export type StudyCreateOrConnectWithoutReactionsInput = {
    where: StudyWhereUniqueInput
    create: XOR<StudyCreateWithoutReactionsInput, StudyUncheckedCreateWithoutReactionsInput>
  }

  export type StudyUpsertWithoutReactionsInput = {
    update: XOR<StudyUpdateWithoutReactionsInput, StudyUncheckedUpdateWithoutReactionsInput>
    create: XOR<StudyCreateWithoutReactionsInput, StudyUncheckedCreateWithoutReactionsInput>
    where?: StudyWhereInput
  }

  export type StudyUpdateToOneWithWhereWithoutReactionsInput = {
    where?: StudyWhereInput
    data: XOR<StudyUpdateWithoutReactionsInput, StudyUncheckedUpdateWithoutReactionsInput>
  }

  export type StudyUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutStudyNestedInput
    participants?: ParticipantUpdateManyWithoutStudyNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutStudyNestedInput
  }

  export type StudyUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutStudyNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutStudyNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutStudyNestedInput
  }

  export type StudyCreateWithoutHabitsInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ParticipantCreateNestedManyWithoutStudyInput
    focusSessions?: FocusSessionCreateNestedManyWithoutStudyInput
    reactions?: StudyReactionCreateNestedManyWithoutStudyInput
  }

  export type StudyUncheckedCreateWithoutHabitsInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ParticipantUncheckedCreateNestedManyWithoutStudyInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutStudyInput
    reactions?: StudyReactionUncheckedCreateNestedManyWithoutStudyInput
  }

  export type StudyCreateOrConnectWithoutHabitsInput = {
    where: StudyWhereUniqueInput
    create: XOR<StudyCreateWithoutHabitsInput, StudyUncheckedCreateWithoutHabitsInput>
  }

  export type HabitLogCreateWithoutHabitInput = {
    id?: string
    date: Date | string
    completed?: boolean
    createdAt?: Date | string
  }

  export type HabitLogUncheckedCreateWithoutHabitInput = {
    id?: string
    date: Date | string
    completed?: boolean
    createdAt?: Date | string
  }

  export type HabitLogCreateOrConnectWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogCreateManyHabitInputEnvelope = {
    data: HabitLogCreateManyHabitInput | HabitLogCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type StudyUpsertWithoutHabitsInput = {
    update: XOR<StudyUpdateWithoutHabitsInput, StudyUncheckedUpdateWithoutHabitsInput>
    create: XOR<StudyCreateWithoutHabitsInput, StudyUncheckedCreateWithoutHabitsInput>
    where?: StudyWhereInput
  }

  export type StudyUpdateToOneWithWhereWithoutHabitsInput = {
    where?: StudyWhereInput
    data: XOR<StudyUpdateWithoutHabitsInput, StudyUncheckedUpdateWithoutHabitsInput>
  }

  export type StudyUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUpdateManyWithoutStudyNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutStudyNestedInput
    reactions?: StudyReactionUpdateManyWithoutStudyNestedInput
  }

  export type StudyUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ParticipantUncheckedUpdateManyWithoutStudyNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutStudyNestedInput
    reactions?: StudyReactionUncheckedUpdateManyWithoutStudyNestedInput
  }

  export type HabitLogUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutHabitInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitLogScalarWhereInput = {
    AND?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    OR?: HabitLogScalarWhereInput[]
    NOT?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    id?: StringFilter<"HabitLog"> | string
    habitId?: StringFilter<"HabitLog"> | string
    date?: DateTimeFilter<"HabitLog"> | Date | string
    completed?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
  }

  export type HabitCreateWithoutLogsInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    study: StudyCreateNestedOneWithoutHabitsInput
  }

  export type HabitUncheckedCreateWithoutLogsInput = {
    id?: string
    studyId: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateOrConnectWithoutLogsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
  }

  export type HabitUpsertWithoutLogsInput = {
    update: XOR<HabitUpdateWithoutLogsInput, HabitUncheckedUpdateWithoutLogsInput>
    create: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutLogsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutLogsInput, HabitUncheckedUpdateWithoutLogsInput>
  }

  export type HabitUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    study?: StudyUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyCreateWithoutFocusSessionsInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutStudyInput
    participants?: ParticipantCreateNestedManyWithoutStudyInput
    reactions?: StudyReactionCreateNestedManyWithoutStudyInput
  }

  export type StudyUncheckedCreateWithoutFocusSessionsInput = {
    id?: string
    name: string
    nickname: string
    description?: string | null
    password?: string | null
    backgroundType?: $Enums.BackgroundType
    backgroundColor?: string | null
    backgroundImage?: string | null
    totalPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutStudyInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutStudyInput
    reactions?: StudyReactionUncheckedCreateNestedManyWithoutStudyInput
  }

  export type StudyCreateOrConnectWithoutFocusSessionsInput = {
    where: StudyWhereUniqueInput
    create: XOR<StudyCreateWithoutFocusSessionsInput, StudyUncheckedCreateWithoutFocusSessionsInput>
  }

  export type StudyUpsertWithoutFocusSessionsInput = {
    update: XOR<StudyUpdateWithoutFocusSessionsInput, StudyUncheckedUpdateWithoutFocusSessionsInput>
    create: XOR<StudyCreateWithoutFocusSessionsInput, StudyUncheckedCreateWithoutFocusSessionsInput>
    where?: StudyWhereInput
  }

  export type StudyUpdateToOneWithWhereWithoutFocusSessionsInput = {
    where?: StudyWhereInput
    data: XOR<StudyUpdateWithoutFocusSessionsInput, StudyUncheckedUpdateWithoutFocusSessionsInput>
  }

  export type StudyUpdateWithoutFocusSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutStudyNestedInput
    participants?: ParticipantUpdateManyWithoutStudyNestedInput
    reactions?: StudyReactionUpdateManyWithoutStudyNestedInput
  }

  export type StudyUncheckedUpdateWithoutFocusSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundType?: EnumBackgroundTypeFieldUpdateOperationsInput | $Enums.BackgroundType
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutStudyNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutStudyNestedInput
    reactions?: StudyReactionUncheckedUpdateManyWithoutStudyNestedInput
  }

  export type HabitCreateManyStudyInput = {
    id?: string
    title: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateManyStudyInput = {
    id?: string
    nickname: string
    emoji?: string | null
    joinedAt?: Date | string
  }

  export type FocusSessionCreateManyStudyInput = {
    id?: string
    date: Date | string
    durationSecs?: number
    elapsedSecs?: number
    status?: $Enums.FocusStatus
    pointsEarned?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyReactionCreateManyStudyInput = {
    id?: string
    emoji: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSecs?: IntFieldUpdateOperationsInput | number
    elapsedSecs?: IntFieldUpdateOperationsInput | number
    status?: EnumFocusStatusFieldUpdateOperationsInput | $Enums.FocusStatus
    pointsEarned?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUncheckedUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSecs?: IntFieldUpdateOperationsInput | number
    elapsedSecs?: IntFieldUpdateOperationsInput | number
    status?: EnumFocusStatusFieldUpdateOperationsInput | $Enums.FocusStatus
    pointsEarned?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FocusSessionUncheckedUpdateManyWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSecs?: IntFieldUpdateOperationsInput | number
    elapsedSecs?: IntFieldUpdateOperationsInput | number
    status?: EnumFocusStatusFieldUpdateOperationsInput | $Enums.FocusStatus
    pointsEarned?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyReactionUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyReactionUncheckedUpdateWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyReactionUncheckedUpdateManyWithoutStudyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateManyHabitInput = {
    id?: string
    date: Date | string
    completed?: boolean
    createdAt?: Date | string
  }

  export type HabitLogUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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