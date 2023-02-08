
    declare namespace CS {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
            public GetType () : System.Type
            public ToString () : string
            public static ReferenceEquals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormattable
        {
        }
        interface IEquatable$1<T>
        {
        }
        class Void extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
        }
        class Single extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ISpanFormattable
        {
        }
        class Int32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class String extends System.Object implements System.ICloneable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable, System.IEquatable$1<string>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICloneable
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Type extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
        {
            protected [__keep_incompatibility]: never;
        }
        class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.ICloneable, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IList
        {
            protected [__keep_incompatibility]: never;
            public get LongLength(): bigint;
            public get IsFixedSize(): boolean;
            public get IsReadOnly(): boolean;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public get Length(): number;
            public get Rank(): number;
            public static CreateInstance ($elementType: System.Type, ...lengths: bigint[]) : System.Array
            public CopyTo ($array: System.Array, $index: number) : void
            public Clone () : any
            public static BinarySearch ($array: System.Array, $value: any) : number
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint) : void
            public CopyTo ($array: System.Array, $index: bigint) : void
            public GetLongLength ($dimension: number) : bigint
            public GetValue ($index: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint, $index3: bigint) : any
            public GetValue (...indices: bigint[]) : any
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any) : number
            public static BinarySearch ($array: System.Array, $value: any, $comparer: System.Collections.IComparer) : number
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer) : number
            public static IndexOf ($array: System.Array, $value: any) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static LastIndexOf ($array: System.Array, $value: any) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static Reverse ($array: System.Array) : void
            public static Reverse ($array: System.Array, $index: number, $length: number) : void
            public SetValue ($value: any, $index: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint, $index3: bigint) : void
            public SetValue ($value: any, ...indices: bigint[]) : void
            public static Sort ($array: System.Array) : void
            public static Sort ($array: System.Array, $index: number, $length: number) : void
            public static Sort ($array: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array) : void
            public static Sort ($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public GetLength ($dimension: number) : number
            public GetLowerBound ($dimension: number) : number
            public GetValue (...indices: number[]) : any
            public SetValue ($value: any, ...indices: number[]) : void
            public GetUpperBound ($dimension: number) : number
            public GetValue ($index: number) : any
            public GetValue ($index1: number, $index2: number) : any
            public GetValue ($index1: number, $index2: number, $index3: number) : any
            public SetValue ($value: any, $index: number) : void
            public SetValue ($value: any, $index1: number, $index2: number) : void
            public SetValue ($value: any, $index1: number, $index2: number, $index3: number) : void
            public static CreateInstance ($elementType: System.Type, $length: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number, $length3: number) : System.Array
            public static CreateInstance ($elementType: System.Type, ...lengths: number[]) : System.Array
            public static CreateInstance ($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>) : System.Array
            public static Clear ($array: System.Array, $index: number, $length: number) : void
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: number) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public static ConstrainedCopy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public Initialize () : void
        }
        class UInt64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormatProvider
        {
        }
        class Delegate extends System.Object implements System.Runtime.Serialization.ISerializable, System.ICloneable
        {
            protected [__keep_incompatibility]: never;
            public get Method(): System.Reflection.MethodInfo;
            public get Target(): any;
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean) : Function
            public DynamicInvoke (...args: any[]) : any
            public Clone () : any
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public GetInvocationList () : System.Array$1<Function>
            public static Combine ($a: Function, $b: Function) : Function
            public static Combine (...delegates: Function[]) : Function
            public static Remove ($source: Function, $value: Function) : Function
            public static RemoveAll ($source: Function, $value: Function) : Function
            public static op_Equality ($d1: Function, $d2: Function) : boolean
            public static op_Inequality ($d1: Function, $d2: Function) : boolean
        }
        interface MulticastDelegate
        { 
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
        }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        interface Action$1<T>
        { 
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
        }
        interface Func$1<TResult>
        { 
        () : TResult; 
        Invoke?: () => TResult;
        }
        interface Action
        { 
        () : void; 
        Invoke?: () => void;
        }
        var Action: { new (func: () => void): Action; }
        interface Converter$2<TInput, TOutput>
        { 
        (input: TInput) : TOutput; 
        Invoke?: (input: TInput) => TOutput;
        }
        interface Predicate$1<T>
        { 
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
        }
        interface IDisposable
        {
        }
        interface Comparison$1<T>
        { 
        (x: T, y: T) : number; 
        Invoke?: (x: T, y: T) => number;
        }
        class Int64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        class Double extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
            public static MinValue : number
            public static MaxValue : number
            public static Epsilon : number
            public static NegativeInfinity : number
            public static PositiveInfinity : number
            public static NaN : number
            public static IsFinite ($d: number) : boolean
            public static IsInfinity ($d: number) : boolean
            public static IsNaN ($d: number) : boolean
            public static IsNegative ($d: number) : boolean
            public static IsNegativeInfinity ($d: number) : boolean
            public static IsNormal ($d: number) : boolean
            public static IsPositiveInfinity ($d: number) : boolean
            public static IsSubnormal ($d: number) : boolean
            public CompareTo ($value: any) : number
            public CompareTo ($value: number) : number
            public Equals ($obj: any) : boolean
            public static op_Equality ($left: number, $right: number) : boolean
            public static op_Inequality ($left: number, $right: number) : boolean
            public static op_LessThan ($left: number, $right: number) : boolean
            public static op_GreaterThan ($left: number, $right: number) : boolean
            public static op_LessThanOrEqual ($left: number, $right: number) : boolean
            public static op_GreaterThanOrEqual ($left: number, $right: number) : boolean
            public Equals ($obj: number) : boolean
            public ToString () : string
            public ToString ($format: string) : string
            public ToString ($provider: System.IFormatProvider) : string
            public ToString ($format: string, $provider: System.IFormatProvider) : string
            public static Parse ($s: string) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles) : number
            public static Parse ($s: string, $provider: System.IFormatProvider) : number
            public static Parse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider) : number
            public static TryParse ($s: string, $result: $Ref<number>) : boolean
            public static TryParse ($s: string, $style: System.Globalization.NumberStyles, $provider: System.IFormatProvider, $result: $Ref<number>) : boolean
            public GetTypeCode () : System.TypeCode
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class Span$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ReadOnlySpan$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        enum TypeCode
        { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class Tuple$2<T1, T2> extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Runtime.CompilerServices.ITuple, System.IComparable, System.ITupleInternal
        {
            protected [__keep_incompatibility]: never;
            public get Item1(): T1;
            public get Item2(): T2;
            public constructor ($item1: T1, $item2: T2)
            public constructor ()
        }
        interface ITupleInternal extends System.Runtime.CompilerServices.ITuple
        {
        }
    }
    namespace UnityEngine {
        /** Base class for all objects Unity can reference.
        */
        class Object extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The name of the object.
            */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user?
            */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            public GetInstanceID () : number
            public static op_Implicit ($exists: UnityEngine.Object) : boolean
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean) : UnityEngine.Object
            /** Removes a GameObject, component or asset.
            * @param obj The object to destroy.
            * @param t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object, $t: number) : void
            /** Removes a GameObject, component or asset.
            * @param obj The object to destroy.
            * @param t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead.
            * @param obj Object to be destroyed.
            * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead.
            * @param obj Object to be destroyed.
            * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object) : void
            /** Gets a list of all loaded objects of Type type.
            * @param type The type of object to find.
            * @param includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Gets a list of all loaded objects of Type type.
            * @param type The type of object to find.
            * @param includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Object>
            /** Do not destroy the target Object when loading a new Scene.
            * @param target An Object not destroyed on Scene change.
            */
            public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
            /** Returns the first active loaded object of Type type.
            * @param type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
            /** Returns the first active loaded object of Type type.
            * @param type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type, $includeInactive: boolean) : UnityEngine.Object
            public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public constructor ()
        }
        /** Base class for everything attached to GameObjects.
        */
        class Component extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The Transform attached to this GameObject.
            */
            public get transform(): UnityEngine.Transform;
            /** The game object this component is attached to. A component is always attached to a game object.
            */
            public get gameObject(): UnityEngine.GameObject;
            /** The tag of this game object.
            */
            public get tag(): string;
            public set tag(value: string);
            /** Returns the component of type if the GameObject has one attached.
            * @param type The type of Component to retrieve.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Gets the component of the specified type, if it exists.
            * @param type The type of the component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** To improve the performance of your code, consider using GetComponent with a type instead of a string.
            * @param type The name of the type of Component to get.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** Returns the Component of type in the GameObject or any of its children using depth first search.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the Component of type in the GameObject or any of its children using depth first search.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject or any of its children using depth first search. Works recursively.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set. includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
            */
            public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns the Component of type in the GameObject or any of its parents.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInParent ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the Component of type in the GameObject or any of its parents.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInParent ($t: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject or any of its parents.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject.
            * @param type The type of Component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Checks the GameObject's tag against the defined tag.
            * @param tag The tag to compare.
            * @returns Returns true if GameObject has same tag. Returns false otherwise. 
            */
            public CompareTag ($tag: string) : boolean
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public constructor ()
        }
        /** Position, rotation and scale of an object.
        */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            /** The world space position of the Transform.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform.
            */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees.
            */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation.
            */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space.
            */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space.
            */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space.
            */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent.
            */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent.
            */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform.
            */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only).
            */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only).
            */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Returns the topmost transform in the hierarchy.
            */
            public get root(): UnityEngine.Transform;
            /** The number of children the parent Transform has.
            */
            public get childCount(): number;
            /** The global scale of the object (Read Only).
            */
            public get lossyScale(): UnityEngine.Vector3;
            /** Has the transform changed since the last time the flag was set to 'false'?
            */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure.
            */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure.
            */
            public get hierarchyCount(): number;
            /** Set the parent of the transform.
            * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($p: UnityEngine.Transform) : void
            /** Set the parent of the transform.
            * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
            /** Sets the world space position and rotation of the Transform component.
            */
            public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Sets the position and rotation of the Transform component in local space (i.e. relative to its parent transform).
            */
            public SetLocalPositionAndRotation ($localPosition: UnityEngine.Vector3, $localRotation: UnityEngine.Quaternion) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order).
            * @param eulers The rotation to apply in euler angles.
            * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
            */
            public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order).
            * @param eulers The rotation to apply in euler angles.
            */
            public Rotate ($eulers: UnityEngine.Vector3) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order).
            * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order).
            * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle.
            * @param angle The degrees of rotation to apply.
            * @param axis The axis to apply rotation to.
            * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle.
            * @param axis The axis to apply rotation to.
            * @param angle The degrees of rotation to apply.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees.
            */
            public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform so the forward vector points at target's current position.
            * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at target's current position.
            * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform) : void
            /** Rotates the transform so the forward vector points at worldPosition.
            * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at worldPosition.
            * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3) : void
            /** Transforms direction from local space to world space.
            */
            public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms direction x, y, z from local space to world space.
            */
            public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection.
            */
            public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection.
            */
            public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms vector from local space to world space.
            */
            public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms vector x, y, z from local space to world space.
            */
            public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector.
            */
            public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector.
            */
            public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from local space to world space.
            */
            public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from local space to world space.
            */
            public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from world space to local space.
            */
            public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint.
            */
            public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            public DetachChildren () : void
            public SetAsFirstSibling () : void
            public SetAsLastSibling () : void
            /** Sets the sibling index.
            * @param index Index to set.
            */
            public SetSiblingIndex ($index: number) : void
            public GetSiblingIndex () : number
            /** Finds a child by name n and returns it.
            * @param n Name of child to be found.
            * @returns The found child transform. Null if child with matching name isn't found. 
            */
            public Find ($n: string) : UnityEngine.Transform
            /** Is this transform a child of parent?
            */
            public IsChildOf ($parent: UnityEngine.Transform) : boolean
            public GetEnumerator () : System.Collections.IEnumerator
            /** Returns a transform child by index.
            * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
            * @returns Transform child by index. 
            */
            public GetChild ($index: number) : UnityEngine.Transform
        }
        /** Representation of 3D vectors and points.
        */
        class Vector3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector3>
        {
            protected [__keep_incompatibility]: never;
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            /** Z component of the vector.
            */
            public z : number
            /** Returns this vector with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0).
            */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1).
            */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1).
            */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1).
            */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0).
            */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0).
            */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0).
            */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0).
            */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector3;
            /** Spherically interpolates between two vectors.
            */
            public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Spherically interpolates between two vectors.
            */
            public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
            /** Rotates a vector current towards target.
            * @param current The vector being managed.
            * @param target The vector.
            * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
            * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
            * @returns The location that RotateTowards generates. 
            */
            public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
            /** Linearly interpolates between two points.
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Value used to interpolate between a and b.
            * @returns Interpolated value, equals to a + (b - a) * t. 
            */
            public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Linearly interpolates between two vectors.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
            * @param current The position to move from.
            * @param target The position to move towards.
            * @param maxDistanceDelta Distance to move current per call.
            * @returns The new position. 
            */
            public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y and z components of an existing Vector3.
            */
            public Set ($newX: number, $newY: number, $newZ: number) : void
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector3) : void
            /** Cross Product of two vectors.
            */
            public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector3) : boolean
            /** Reflects a vector off the plane defined by a normal.
            */
            public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Makes this vector have a magnitude of 1.
            */
            public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
            public Normalize () : void
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
            /** Projects a vector onto another vector.
            */
            public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
            * @param planeNormal The direction from the vector towards the plane.
            * @param vector The location of the vector above the plane.
            * @returns The location of the vector on the plane. 
            */
            public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Calculates the angle between vectors from and.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
            /** Calculates the signed angle between vectors from and to in relation to axis.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @param axis A vector around which the other vectors are rotated.
            * @returns Returns the signed angle between from and to in degrees. 
            */
            public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
            public static Magnitude ($vector: UnityEngine.Vector3) : number
            public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Quaternions are used to represent rotations.
        */
        class Quaternion extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Quaternion>
        {
            protected [__keep_incompatibility]: never;
            /** X component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public x : number
            /** Y component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public y : number
            /** Z component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public z : number
            /** W component of the Quaternion. Do not directly modify quaternions.
            */
            public w : number
            public static kEpsilon : number
            /** The identity rotation (Read Only).
            */
            public static get identity(): UnityEngine.Quaternion;
            /** Returns or sets the euler angle representation of the rotation.
            */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** Returns this quaternion with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Quaternion;
            /** Creates a rotation which rotates from fromDirection to toDirection.
            */
            public static FromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Returns the Inverse of rotation.
            */
            public static Inverse ($rotation: UnityEngine.Quaternion) : UnityEngine.Quaternion
            /** Spherically interpolates between quaternions a and b by ratio t. The parameter t is clamped to the range [0, 1].
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Interpolation ratio.
            * @returns A quaternion spherically interpolated between quaternions a and b. 
            */
            public static Slerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Spherically interpolates between a and b by t. The parameter t is not clamped.
            */
            public static SlerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is clamped to the range [0, 1].
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Interpolation ratio.
            * @returns A quaternion interpolated between quaternions a and b. 
            */
            public static Lerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is not clamped.
            */
            public static LerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Creates a rotation which rotates angle degrees around axis.
            */
            public static AngleAxis ($angle: number, $axis: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions.
            * @param forward The direction to look in.
            * @param upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3, $upwards: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions.
            * @param forward The direction to look in.
            * @param upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3) : UnityEngine.Quaternion
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y, z and w components of an existing Quaternion.
            */
            public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
            public static op_Multiply ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public static op_Multiply ($rotation: UnityEngine.Quaternion, $point: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            public static op_Inequality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            /** The dot product between two rotations.
            */
            public static Dot ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Creates a rotation with the specified forward and upwards directions.
            * @param view The direction to look in.
            * @param up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3) : void
            /** Creates a rotation with the specified forward and upwards directions.
            * @param view The direction to look in.
            * @param up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3, $up: UnityEngine.Vector3) : void
            /** Returns the angle in degrees between two rotations a and b.
            */
            public static Angle ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis; applied in that order.
            */
            public static Euler ($x: number, $y: number, $z: number) : UnityEngine.Quaternion
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis.
            */
            public static Euler ($euler: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Converts a rotation to angle-axis representation (angles in degrees).
            */
            public ToAngleAxis ($angle: $Ref<number>, $axis: $Ref<UnityEngine.Vector3>) : void
            /** Creates a rotation which rotates from fromDirection to toDirection.
            */
            public SetFromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : void
            /** Rotates a rotation from towards to.
            */
            public static RotateTowards ($from: UnityEngine.Quaternion, $to: UnityEngine.Quaternion, $maxDegreesDelta: number) : UnityEngine.Quaternion
            /** Converts this quaternion to one with the same orientation but with a magnitude of 1.
            */
            public static Normalize ($q: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public Normalize () : void
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Quaternion) : boolean
            public ToString () : string
            /** Returns a formatted string for this quaternion.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this quaternion.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** A standard 4x4 transformation matrix.
        */
        class Matrix4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Matrix4x4>
        {
            protected [__keep_incompatibility]: never;
        }
        /** The coordinate space in which to operate.
        */
        enum Space
        { World = 0, Self = 1 }
        /** Base class for all entities in Unity Scenes.
        */
        class GameObject extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The Transform attached to this GameObject.
            */
            public get transform(): UnityEngine.Transform;
            /** The layer the GameObject is in.
            */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only)
            */
            public get activeSelf(): boolean;
            /** Defines whether the GameObject is active in the Scene.
            */
            public get activeInHierarchy(): boolean;
            /** Gets and sets the GameObject's StaticEditorFlags.
            */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object.
            */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of.
            */
            public get scene(): UnityEngine.SceneManagement.Scene;
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in.
            */
            public get sceneCullingMask(): bigint;
            public get gameObject(): UnityEngine.GameObject;
            /** Creates a game object with a primitive mesh renderer and appropriate collider.
            * @param type The type of primitive object to create.
            */
            public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
            /** Returns the component of Type type if the game object has one attached, null if it doesn't.
            * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Returns the component with name type if the GameObject has one attached, null if it doesn't.
            * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject.
            * @param type The type of component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its parents.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            /** Gets the component of the specified type, if it exists.
            * @param type The type of component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found.
            * @param tag The tag to search for.
            */
            public static FindWithTag ($tag: string) : UnityEngine.GameObject
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version.
            */
            public AddComponent ($componentType: System.Type) : UnityEngine.Component
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value.
            * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
            */
            public SetActive ($value: boolean) : void
            /** Is this game object tagged with tag ?
            * @param tag The tag to compare.
            */
            public CompareTag ($tag: string) : boolean
            public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found.
            * @param tag The name of the tag to search GameObjects for.
            */
            public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            */
            public BroadcastMessage ($methodName: string) : void
            /** Finds a GameObject by name and returns it.
            */
            public static Find ($name: string) : UnityEngine.GameObject
            public constructor ($name: string)
            public constructor ()
            public constructor ($name: string, ...components: System.Type[])
        }
        /** Options for how to send a message.
        */
        enum SendMessageOptions
        { RequireReceiver = 0, DontRequireReceiver = 1 }
        /** The various primitives that can be created using the GameObject.CreatePrimitive function.
        */
        enum PrimitiveType
        { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        /** Bit mask that controls object destruction, saving and visibility in inspectors.
        */
        enum HideFlags
        { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        /** Representation of RGBA colors.
        */
        class Color extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Color>
        {
            protected [__keep_incompatibility]: never;
            /** Red component of the color.
            */
            public r : number
            /** Green component of the color.
            */
            public g : number
            /** Blue component of the color.
            */
            public b : number
            /** Alpha component of the color (0 is transparent, 1 is opaque).
            */
            public a : number
            /** Solid red. RGBA is (1, 0, 0, 1).
            */
            public static get red(): UnityEngine.Color;
            /** Solid green. RGBA is (0, 1, 0, 1).
            */
            public static get green(): UnityEngine.Color;
            /** Solid blue. RGBA is (0, 0, 1, 1).
            */
            public static get blue(): UnityEngine.Color;
            /** Solid white. RGBA is (1, 1, 1, 1).
            */
            public static get white(): UnityEngine.Color;
            /** Solid black. RGBA is (0, 0, 0, 1).
            */
            public static get black(): UnityEngine.Color;
            /** Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at!
            */
            public static get yellow(): UnityEngine.Color;
            /** Cyan. RGBA is (0, 1, 1, 1).
            */
            public static get cyan(): UnityEngine.Color;
            /** Magenta. RGBA is (1, 0, 1, 1).
            */
            public static get magenta(): UnityEngine.Color;
            /** Gray. RGBA is (0.5, 0.5, 0.5, 1).
            */
            public static get gray(): UnityEngine.Color;
            /** English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1).
            */
            public static get grey(): UnityEngine.Color;
            /** Completely transparent. RGBA is (0, 0, 0, 0).
            */
            public static get clear(): UnityEngine.Color;
            /** The grayscale value of the color. (Read Only)
            */
            public get grayscale(): number;
            /** A linear value of an sRGB color.
            */
            public get linear(): UnityEngine.Color;
            /** A version of the color that has had the gamma curve applied.
            */
            public get gamma(): UnityEngine.Color;
            /** Returns the maximum color component value: Max(r,g,b).
            */
            public get maxColorComponent(): number;
            public ToString () : string
            /** Returns a formatted string of this color.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string of this color.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Color) : boolean
            public static op_Addition ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Subtraction ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Multiply ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Multiply ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
            public static op_Multiply ($b: number, $a: UnityEngine.Color) : UnityEngine.Color
            public static op_Division ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
            public static op_Equality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
            public static op_Inequality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
            /** Linearly interpolates between colors a and b by t.
            * @param a Color a.
            * @param b Color b.
            * @param t Float for combining a and b.
            */
            public static Lerp ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
            /** Linearly interpolates between colors a and b by t.
            */
            public static LerpUnclamped ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
            public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Color
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Calculates the hue, saturation and value of an RGB input color.
            * @param rgbColor An input color.
            * @param H Output variable for hue.
            * @param S Output variable for saturation.
            * @param V Output variable for value.
            */
            public static RGBToHSV ($rgbColor: UnityEngine.Color, $H: $Ref<number>, $S: $Ref<number>, $V: $Ref<number>) : void
            /** Creates an RGB colour from HSV input.
            * @param H Hue [0..1].
            * @param S Saturation [0..1].
            * @param V Brightness value [0..1].
            * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
            * @returns An opaque colour with HSV matching the input. 
            */
            public static HSVToRGB ($H: number, $S: number, $V: number) : UnityEngine.Color
            /** Creates an RGB colour from HSV input.
            * @param H Hue [0..1].
            * @param S Saturation [0..1].
            * @param V Brightness value [0..1].
            * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
            * @returns An opaque colour with HSV matching the input. 
            */
            public static HSVToRGB ($H: number, $S: number, $V: number, $hdr: boolean) : UnityEngine.Color
            public constructor ($r: number, $g: number, $b: number, $a: number)
            public constructor ($r: number, $g: number, $b: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Representation of four-dimensional vectors.
        */
        class Vector4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector4>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Representation of 2D vectors and points.
        */
        class Vector2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2>
        {
            protected [__keep_incompatibility]: never;
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** Returns this vector with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Vector2;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector2(0, 0).
            */
            public static get zero(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 1).
            */
            public static get one(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, 1).
            */
            public static get up(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, -1).
            */
            public static get down(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(-1, 0).
            */
            public static get left(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 0).
            */
            public static get right(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector2;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x and y components of an existing Vector2.
            */
            public Set ($newX: number, $newY: number) : void
            /** Linearly interpolates between vectors a and b by t.
            */
            public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Linearly interpolates between vectors a and b by t.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Moves a point current towards target.
            */
            public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector2) : void
            public Normalize () : void
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector2) : boolean
            /** Reflects a vector off the vector defined by a normal.
            */
            public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
            * @param inDirection The input direction.
            * @returns The perpendicular direction. 
            */
            public static Perpendicular ($inDirection: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
            /** Gets the unsigned angle in degrees between from and to.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The unsigned angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Gets the signed angle in degrees between from and to.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The signed angle in degrees between the two vectors. 
            */
            public static SignedAngle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
            public static SqrMagnitude ($a: UnityEngine.Vector2) : number
            public SqrMagnitude () : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
            public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
            public constructor ($x: number, $y: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Access to application run-time data.
        */
        class Application extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Returns true when called in any kind of built Player, or when called in the Editor in Play Mode (Read Only).
            */
            public static get isPlaying(): boolean;
            /** Whether the player currently has focus. Read-only.
            */
            public static get isFocused(): boolean;
            /** Returns a GUID for this build (Read Only).
            */
            public static get buildGUID(): string;
            /** Should the player be running when the application is in the background?
            */
            public static get runInBackground(): boolean;
            public static set runInBackground(value: boolean);
            /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only).
            */
            public static get isBatchMode(): boolean;
            /** Contains the path to the game data folder on the target device (Read Only).
            */
            public static get dataPath(): string;
            /** The path to the StreamingAssets folder (Read Only).
            */
            public static get streamingAssetsPath(): string;
            /** (Read Only) Contains the path to a persistent data directory.
            */
            public static get persistentDataPath(): string;
            /** Contains the path to a temporary data / cache directory (Read Only).
            */
            public static get temporaryCachePath(): string;
            /** The URL of the document. For WebGL, this a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL. (Read Only)
            */
            public static get absoluteURL(): string;
            /** The version of the Unity runtime used to play the content.
            */
            public static get unityVersion(): string;
            /** Returns application version number  (Read Only).
            */
            public static get version(): string;
            /** Returns the name of the store or package that installed the application (Read Only).
            */
            public static get installerName(): string;
            /** Returns application identifier at runtime. On Apple platforms this is the 'bundleIdentifier' saved in the info.plist file, on Android it's the 'package' from the AndroidManifest.xml. 
            */
            public static get identifier(): string;
            /** Returns application install mode (Read Only).
            */
            public static get installMode(): UnityEngine.ApplicationInstallMode;
            /** Returns application running in sandbox (Read Only).
            */
            public static get sandboxType(): UnityEngine.ApplicationSandboxType;
            /** Returns application product name (Read Only).
            */
            public static get productName(): string;
            /** Return application company name (Read Only).
            */
            public static get companyName(): string;
            /** A unique cloud project identifier. It is unique for every project (Read Only).
            */
            public static get cloudProjectId(): string;
            /** Specifies the frame rate at which Unity tries to render your game.
            */
            public static get targetFrameRate(): number;
            public static set targetFrameRate(value: number);
            /** Returns the path to the console log file, or an empty string if the current platform does not support log files.
            */
            public static get consoleLogPath(): string;
            /** Priority of background loading thread.
            */
            public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
            public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
            /** Returns false if application is altered in any way after it was built.
            */
            public static get genuine(): boolean;
            /** Returns true if application integrity can be confirmed.
            */
            public static get genuineCheckAvailable(): boolean;
            /** Returns the platform the game is running on (Read Only).
            */
            public static get platform(): UnityEngine.RuntimePlatform;
            /** Is the current Runtime platform a known mobile platform.
            */
            public static get isMobilePlatform(): boolean;
            /** Is the current Runtime platform a known console platform.
            */
            public static get isConsolePlatform(): boolean;
            /** The language the user's operating system is running in.
            */
            public static get systemLanguage(): UnityEngine.SystemLanguage;
            /** Returns the type of Internet reachability currently possible on the device.
            */
            public static get internetReachability(): UnityEngine.NetworkReachability;
            /** Are we running inside the Unity editor? (Read Only)
            */
            public static get isEditor(): boolean;
            public static Quit ($exitCode: number) : void
            public static Quit () : void
            public static Unload () : void
            /** Can the streamed level be loaded?
            */
            public static CanStreamedLevelBeLoaded ($levelIndex: number) : boolean
            /** Can the streamed level be loaded?
            */
            public static CanStreamedLevelBeLoaded ($levelName: string) : boolean
            /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
            * @param obj The object to test.
            * @returns True if the object is part of the playing world. 
            */
            public static IsPlaying ($obj: UnityEngine.Object) : boolean
            public static GetBuildTags () : System.Array$1<string>
            /** Set an array of feature tags for this build.
            */
            public static SetBuildTags ($buildTags: System.Array$1<string>) : void
            public static HasProLicense () : boolean
            public static RequestAdvertisingIdentifierAsync ($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback) : boolean
            /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. This is handled in different ways depending on the nature of the URL, and with different security restrictions, depending on the runtime platform.
            * @param url The URL to open.
            */
            public static OpenURL ($url: string) : void
            /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly.
            */
            public static GetStackTraceLogType ($logType: UnityEngine.LogType) : UnityEngine.StackTraceLogType
            /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly.
            */
            public static SetStackTraceLogType ($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType) : void
            /** Request authorization to use the webcam or microphone on iOS and WebGL.
            */
            public static RequestUserAuthorization ($mode: UnityEngine.UserAuthorization) : UnityEngine.AsyncOperation
            /** Check if the user has authorized use of the webcam or microphone in the Web Player.
            */
            public static HasUserAuthorization ($mode: UnityEngine.UserAuthorization) : boolean
            public static add_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
            public static remove_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
            public static add_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
            public static remove_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
            public static add_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
            public static remove_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
            public static add_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
            public static remove_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
            public static add_focusChanged ($value: System.Action$1<boolean>) : void
            public static remove_focusChanged ($value: System.Action$1<boolean>) : void
            public static add_deepLinkActivated ($value: System.Action$1<string>) : void
            public static remove_deepLinkActivated ($value: System.Action$1<string>) : void
            public static add_wantsToQuit ($value: System.Func$1<boolean>) : void
            public static remove_wantsToQuit ($value: System.Func$1<boolean>) : void
            public static add_quitting ($value: System.Action) : void
            public static remove_quitting ($value: System.Action) : void
            public static add_unloading ($value: System.Action) : void
            public static remove_unloading ($value: System.Action) : void
            public constructor ()
        }
        /** Application installation mode (Read Only).
        */
        enum ApplicationInstallMode
        { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        /** Application sandbox type.
        */
        enum ApplicationSandboxType
        { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        /** Stack trace logging options.
        */
        enum StackTraceLogType
        { None = 0, ScriptOnly = 1, Full = 2 }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback.
        */
        enum LogType
        { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Priority of a thread.
        */
        enum ThreadPriority
        { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        /** Base class for all yield instructions.
        */
        class YieldInstruction extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Asynchronous operation coroutine.
        */
        class AsyncOperation extends UnityEngine.YieldInstruction
        {
            protected [__keep_incompatibility]: never;
        }
        /** Constants to pass to Application.RequestUserAuthorization.
        */
        enum UserAuthorization
        { WebCam = 1, Microphone = 2 }
        /** The platform application is running. Returned by Application.platform.
        */
        enum RuntimePlatform
        { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = -1, GameCoreXboxSeries = 36, GameCoreXboxOne = 37, PS5 = 38, EmbeddedLinuxArm64 = 39, EmbeddedLinuxArm32 = 40, EmbeddedLinuxX64 = 41, EmbeddedLinuxX86 = 42, LinuxServer = 43, WindowsServer = 44, OSXServer = 45 }
        /** The language the user's operating system is running in. Returned by Application.systemLanguage.
        */
        enum SystemLanguage
        { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        /** Describes network reachability options.
        */
        enum NetworkReachability
        { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        /** A class you can derive from if you want to create objects that don't need to be attached to game objects.
        */
        class ScriptableObject extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Behaviours are Components that can be enabled or disabled.
        */
        class Behaviour extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
        }
        /** MonoBehaviour is the base class from which every Unity script derives.
        */
        class MonoBehaviour extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
        }
        /** Specifies Layers to use in a Physics.Raycast.
        */
        class LayerMask extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** A Camera is a device through which the player views the world.
        */
        class Camera extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Delegate that you can use to execute custom code before a Camera culls the scene.
            */
            public static onPreCull : UnityEngine.Camera.CameraCallback
            /** Delegate that you can use to execute custom code before a Camera renders the scene.
            */
            public static onPreRender : UnityEngine.Camera.CameraCallback
            /** Delegate that you can use to execute custom code after a Camera renders the scene.
            */
            public static onPostRender : UnityEngine.Camera.CameraCallback
            /** The distance of the near clipping plane from the the Camera, in world units.
            */
            public get nearClipPlane(): number;
            public set nearClipPlane(value: number);
            /** The distance of the far clipping plane from the Camera, in world units.
            */
            public get farClipPlane(): number;
            public set farClipPlane(value: number);
            /** The vertical field of view of the Camera, in degrees.
            */
            public get fieldOfView(): number;
            public set fieldOfView(value: number);
            /** The rendering path that should be used, if possible.
            */
            public get renderingPath(): UnityEngine.RenderingPath;
            public set renderingPath(value: UnityEngine.RenderingPath);
            /** The rendering path that is currently being used (Read Only).
            */
            public get actualRenderingPath(): UnityEngine.RenderingPath;
            /** High dynamic range rendering.
            */
            public get allowHDR(): boolean;
            public set allowHDR(value: boolean);
            /** MSAA rendering.
            */
            public get allowMSAA(): boolean;
            public set allowMSAA(value: boolean);
            /** Dynamic Resolution Scaling.
            */
            public get allowDynamicResolution(): boolean;
            public set allowDynamicResolution(value: boolean);
            /** Should camera rendering be forced into a RenderTexture.
            */
            public get forceIntoRenderTexture(): boolean;
            public set forceIntoRenderTexture(value: boolean);
            /** Camera's half-size when in orthographic mode.
            */
            public get orthographicSize(): number;
            public set orthographicSize(value: number);
            /** Is the camera orthographic (true) or perspective (false)?
            */
            public get orthographic(): boolean;
            public set orthographic(value: boolean);
            /** Opaque object sorting mode.
            */
            public get opaqueSortMode(): UnityEngine.Rendering.OpaqueSortMode;
            public set opaqueSortMode(value: UnityEngine.Rendering.OpaqueSortMode);
            /** Transparent object sorting mode.
            */
            public get transparencySortMode(): UnityEngine.TransparencySortMode;
            public set transparencySortMode(value: UnityEngine.TransparencySortMode);
            /** An axis that describes the direction along which the distances of objects are measured for the purpose of sorting.
            */
            public get transparencySortAxis(): UnityEngine.Vector3;
            public set transparencySortAxis(value: UnityEngine.Vector3);
            /** Camera's depth in the camera rendering order.
            */
            public get depth(): number;
            public set depth(value: number);
            /** The aspect ratio (width divided by height).
            */
            public get aspect(): number;
            public set aspect(value: number);
            /** Get the world-space speed of the camera (Read Only).
            */
            public get velocity(): UnityEngine.Vector3;
            /** This is used to render parts of the Scene selectively.
            */
            public get cullingMask(): number;
            public set cullingMask(value: number);
            /** Mask to select which layers can trigger events on the camera.
            */
            public get eventMask(): number;
            public set eventMask(value: number);
            /** How to perform per-layer culling for a Camera.
            */
            public get layerCullSpherical(): boolean;
            public set layerCullSpherical(value: boolean);
            /** Identifies what kind of camera this is, using the CameraType enum.
            */
            public get cameraType(): UnityEngine.CameraType;
            public set cameraType(value: UnityEngine.CameraType);
            /** Sets the culling mask used to determine which objects from which Scenes to draw.
            See EditorSceneManager.SetSceneCullingMask.
            */
            public get overrideSceneCullingMask(): bigint;
            public set overrideSceneCullingMask(value: bigint);
            /** Per-layer culling distances.
            */
            public get layerCullDistances(): System.Array$1<number>;
            public set layerCullDistances(value: System.Array$1<number>);
            /** Whether or not the Camera will use occlusion culling during rendering.
            */
            public get useOcclusionCulling(): boolean;
            public set useOcclusionCulling(value: boolean);
            /** Sets a custom matrix for the camera to use for all culling queries.
            */
            public get cullingMatrix(): UnityEngine.Matrix4x4;
            public set cullingMatrix(value: UnityEngine.Matrix4x4);
            /** The color with which the screen will be cleared.
            */
            public get backgroundColor(): UnityEngine.Color;
            public set backgroundColor(value: UnityEngine.Color);
            /** How the camera clears the background.
            */
            public get clearFlags(): UnityEngine.CameraClearFlags;
            public set clearFlags(value: UnityEngine.CameraClearFlags);
            /** How and if camera generates a depth texture.
            */
            public get depthTextureMode(): UnityEngine.DepthTextureMode;
            public set depthTextureMode(value: UnityEngine.DepthTextureMode);
            /** Should the camera clear the stencil buffer after the deferred light pass?
            */
            public get clearStencilAfterLightingPass(): boolean;
            public set clearStencilAfterLightingPass(value: boolean);
            /** Enable [UsePhysicalProperties] to use physical camera properties to compute the field of view and the frustum.
            */
            public get usePhysicalProperties(): boolean;
            public set usePhysicalProperties(value: boolean);
            /** The size of the camera sensor, expressed in millimeters.
            */
            public get sensorSize(): UnityEngine.Vector2;
            public set sensorSize(value: UnityEngine.Vector2);
            /** The lens offset of the camera. The lens shift is relative to the sensor size. For example, a lens shift of 0.5 offsets the sensor by half its horizontal size.
            */
            public get lensShift(): UnityEngine.Vector2;
            public set lensShift(value: UnityEngine.Vector2);
            /** The camera focal length, expressed in millimeters. To use this property, enable UsePhysicalProperties.
            */
            public get focalLength(): number;
            public set focalLength(value: number);
            /** There are two gates for a camera, the sensor gate and the resolution gate. The physical camera sensor gate is defined by the sensorSize property, the resolution gate is defined by the render target area.
            */
            public get gateFit(): UnityEngine.Camera.GateFitMode;
            public set gateFit(value: UnityEngine.Camera.GateFitMode);
            /** Where on the screen is the camera rendered in normalized coordinates.
            */
            public get rect(): UnityEngine.Rect;
            public set rect(value: UnityEngine.Rect);
            /** Where on the screen is the camera rendered in pixel coordinates.
            */
            public get pixelRect(): UnityEngine.Rect;
            public set pixelRect(value: UnityEngine.Rect);
            /** How wide is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only).
            */
            public get pixelWidth(): number;
            /** How tall is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only).
            */
            public get pixelHeight(): number;
            /** How wide is the camera in pixels (accounting for dynamic resolution scaling) (Read Only).
            */
            public get scaledPixelWidth(): number;
            /** How tall is the camera in pixels (accounting for dynamic resolution scaling) (Read Only).
            */
            public get scaledPixelHeight(): number;
            /** Destination render texture.
            */
            public get targetTexture(): UnityEngine.RenderTexture;
            public set targetTexture(value: UnityEngine.RenderTexture);
            /** Gets the temporary RenderTexture target for this Camera.
            */
            public get activeTexture(): UnityEngine.RenderTexture;
            /** Set the target display for this Camera.
            */
            public get targetDisplay(): number;
            public set targetDisplay(value: number);
            /** Matrix that transforms from camera space to world space (Read Only).
            */
            public get cameraToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms from world to camera space.
            */
            public get worldToCameraMatrix(): UnityEngine.Matrix4x4;
            public set worldToCameraMatrix(value: UnityEngine.Matrix4x4);
            /** Set a custom projection matrix.
            */
            public get projectionMatrix(): UnityEngine.Matrix4x4;
            public set projectionMatrix(value: UnityEngine.Matrix4x4);
            /** Get or set the raw projection matrix with no camera offset (no jittering).
            */
            public get nonJitteredProjectionMatrix(): UnityEngine.Matrix4x4;
            public set nonJitteredProjectionMatrix(value: UnityEngine.Matrix4x4);
            /** Should the jittered matrix be used for transparency rendering?
            */
            public get useJitteredProjectionMatrixForTransparentRendering(): boolean;
            public set useJitteredProjectionMatrixForTransparentRendering(value: boolean);
            /** Get the view projection matrix used on the last frame.
            */
            public get previousViewProjectionMatrix(): UnityEngine.Matrix4x4;
            /** The first enabled Camera component that is tagged "MainCamera" (Read Only).
            */
            public static get main(): UnityEngine.Camera;
            /** The camera we are currently rendering with, for low-level render control only (Read Only).
            */
            public static get current(): UnityEngine.Camera;
            /** If not null, the camera will only render the contents of the specified Scene.
            */
            public get scene(): UnityEngine.SceneManagement.Scene;
            public set scene(value: UnityEngine.SceneManagement.Scene);
            /** Stereoscopic rendering.
            */
            public get stereoEnabled(): boolean;
            /** The distance between the virtual eyes. Use this to query or set the current eye separation. Note that most VR devices provide this value, in which case setting the value will have no effect.
            */
            public get stereoSeparation(): number;
            public set stereoSeparation(value: number);
            /** Distance to a point where virtual eyes converge.
            */
            public get stereoConvergence(): number;
            public set stereoConvergence(value: number);
            /** Determines whether the stereo view matrices are suitable to allow for a single pass cull.
            */
            public get areVRStereoViewMatricesWithinSingleCullTolerance(): boolean;
            /** Defines which eye of a VR display the Camera renders into.
            */
            public get stereoTargetEye(): UnityEngine.StereoTargetEyeMask;
            public set stereoTargetEye(value: UnityEngine.StereoTargetEyeMask);
            /** Returns the eye that is currently rendering.
            If called when stereo is not enabled it will return Camera.MonoOrStereoscopicEye.Mono.
            If called during a camera rendering callback such as OnRenderImage it will return the currently rendering eye.
            If called outside of a rendering callback and stereo is enabled, it will return the default eye which is Camera.MonoOrStereoscopicEye.Left.
            */
            public get stereoActiveEye(): UnityEngine.Camera.MonoOrStereoscopicEye;
            /** The number of cameras in the current Scene.
            */
            public static get allCamerasCount(): number;
            /** Returns all enabled cameras in the Scene.
            */
            public static get allCameras(): System.Array$1<UnityEngine.Camera>;
            public get sceneViewFilterMode(): UnityEngine.Camera.SceneViewFilterMode;
            /** Number of command buffers set up on this camera (Read Only).
            */
            public get commandBufferCount(): number;
            public Reset () : void
            public ResetTransparencySortSettings () : void
            public ResetAspect () : void
            public ResetCullingMatrix () : void
            /** Make the camera render with shader replacement.
            */
            public SetReplacementShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
            public ResetReplacementShader () : void
            public GetGateFittedFieldOfView () : number
            public GetGateFittedLensShift () : UnityEngine.Vector2
            /** Sets the Camera to render to the chosen buffers of one or more RenderTextures.
            * @param colorBuffer The RenderBuffer(s) to which color information will be rendered.
            * @param depthBuffer The RenderBuffer to which depth information will be rendered.
            */
            public SetTargetBuffers ($colorBuffer: UnityEngine.RenderBuffer, $depthBuffer: UnityEngine.RenderBuffer) : void
            /** Sets the Camera to render to the chosen buffers of one or more RenderTextures.
            * @param colorBuffer The RenderBuffer(s) to which color information will be rendered.
            * @param depthBuffer The RenderBuffer to which depth information will be rendered.
            */
            public SetTargetBuffers ($colorBuffer: System.Array$1<UnityEngine.RenderBuffer>, $depthBuffer: UnityEngine.RenderBuffer) : void
            public ResetWorldToCameraMatrix () : void
            public ResetProjectionMatrix () : void
            /** Calculates and returns oblique near-plane projection matrix.
            * @param clipPlane Vector4 that describes a clip plane.
            * @returns Oblique near-plane projection matrix. 
            */
            public CalculateObliqueMatrix ($clipPlane: UnityEngine.Vector4) : UnityEngine.Matrix4x4
            public WorldToScreenPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public WorldToViewportPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public ViewportToWorldPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public ScreenToWorldPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            /** Transforms position from world space into screen space.
            * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public WorldToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from world space into viewport space.
            * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public WorldToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from viewport space into world space.
            * @param position The 3d vector in Viewport space.
            * @returns The 3d vector in World space. 
            */
            public ViewportToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms a point from screen space into world space, where world space is defined as the coordinate system at the very top of your game's hierarchy.
            * @param position A screen space position (often mouse x, y), plus a z position for depth (for example, a camera clipping plane).
            * @param eye By default, Camera.MonoOrStereoscopicEye.Mono. Can be set to Camera.MonoOrStereoscopicEye.Left or Camera.MonoOrStereoscopicEye.Right for use in stereoscopic rendering (e.g., for VR).
            * @returns The worldspace point created by converting the screen space point at the provided distance z from the camera plane. 
            */
            public ScreenToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from screen space into viewport space.
            */
            public ScreenToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from viewport space into screen space.
            */
            public ViewportToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            public ViewportPointToRay ($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Ray
            /** Returns a ray going from camera through a viewport point.
            * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public ViewportPointToRay ($pos: UnityEngine.Vector3) : UnityEngine.Ray
            public ScreenPointToRay ($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Ray
            /** Returns a ray going from camera through a screen point.
            * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public ScreenPointToRay ($pos: UnityEngine.Vector3) : UnityEngine.Ray
            public CalculateFrustumCorners ($viewport: UnityEngine.Rect, $z: number, $eye: UnityEngine.Camera.MonoOrStereoscopicEye, $outCorners: System.Array$1<UnityEngine.Vector3>) : void
            public static CalculateProjectionMatrixFromPhysicalProperties ($output: $Ref<UnityEngine.Matrix4x4>, $focalLength: number, $sensorSize: UnityEngine.Vector2, $lensShift: UnityEngine.Vector2, $nearClip: number, $farClip: number, $gateFitParameters?: UnityEngine.Camera.GateFitParameters) : void
            /** Converts focal length to field of view.
            * @param focalLength Focal length in millimeters.
            * @param sensorSize Sensor size in millimeters. Use the sensor height to get the vertical field of view. Use the sensor width to get the horizontal field of view.
            * @returns field of view in degrees. 
            */
            public static FocalLengthToFieldOfView ($focalLength: number, $sensorSize: number) : number
            /** Converts field of view to focal length. Use either sensor height and vertical field of view or sensor width and horizontal field of view.
            * @param fieldOfView field of view in degrees.
            * @param sensorSize Sensor size in millimeters.
            * @returns Focal length in millimeters. 
            */
            public static FieldOfViewToFocalLength ($fieldOfView: number, $sensorSize: number) : number
            /** Converts the horizontal field of view (FOV) to the vertical FOV, based on the value of the aspect ratio parameter.
            * @param horizontalFOV The horizontal FOV value in degrees.
            * @param aspectRatio The aspect ratio value used for the conversion
            */
            public static HorizontalToVerticalFieldOfView ($horizontalFieldOfView: number, $aspectRatio: number) : number
            /** Converts the vertical field of view (FOV) to the horizontal FOV, based on the value of the aspect ratio parameter.
            * @param verticalFieldOfView The vertical FOV value in degrees.
            * @param aspectRatio The aspect ratio value used for the conversion
            */
            public static VerticalToHorizontalFieldOfView ($verticalFieldOfView: number, $aspectRatio: number) : number
            public GetStereoNonJitteredProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public GetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public CopyStereoDeviceProjectionMatrixToNonJittered ($eye: UnityEngine.Camera.StereoscopicEye) : void
            public GetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public SetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
            public ResetStereoProjectionMatrices () : void
            public SetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
            public ResetStereoViewMatrices () : void
            /** Fills an array of Camera with the current cameras in the Scene, without allocating a new array.
            * @param cameras An array to be filled up with cameras currently in the Scene.
            */
            public static GetAllCameras ($cameras: System.Array$1<UnityEngine.Camera>) : number
            /** Render into a static cubemap from this camera.
            * @param cubemap The cube map to render to.
            * @param faceMask A bitmask which determines which of the six faces are rendered to.
            * @returns False if rendering fails, else true. 
            */
            public RenderToCubemap ($cubemap: UnityEngine.Cubemap, $faceMask: number) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.Cubemap) : boolean
            /** Render into a cubemap from this camera.
            * @param faceMask A bitfield indicating which cubemap faces should be rendered into.
            * @param cubemap The texture to render to.
            * @returns False if rendering fails, else true. 
            */
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number, $stereoEye: UnityEngine.Camera.MonoOrStereoscopicEye) : boolean
            public Render () : void
            /** Render the camera with shader replacement.
            */
            public RenderWithShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
            public RenderDontRestore () : void
            public SubmitRenderRequests ($renderRequests: System.Collections.Generic.List$1<UnityEngine.Camera.RenderRequest>) : void
            public static SetupCurrent ($cur: UnityEngine.Camera) : void
            /** Makes this camera's settings match other camera.
            * @param other Copy camera settings to the other camera.
            */
            public CopyFrom ($other: UnityEngine.Camera) : void
            /** Remove command buffers from execution at a specified place.
            * @param evt When to execute the command buffer during rendering.
            */
            public RemoveCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : void
            public RemoveAllCommandBuffers () : void
            /** Add a command buffer to be executed at a specified place.
            * @param evt When to execute the command buffer during rendering.
            * @param buffer The buffer to execute.
            */
            public AddCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point.
            * @param evt The point during the graphics processing at which this command buffer should commence on the GPU.
            * @param buffer The buffer to execute.
            * @param queueType The desired async compute queue type to execute the buffer on.
            */
            public AddCommandBufferAsync ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $queueType: UnityEngine.Rendering.ComputeQueueType) : void
            /** Remove command buffer from execution at a specified place.
            * @param evt When to execute the command buffer during rendering.
            * @param buffer The buffer to execute.
            */
            public RemoveCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Get command buffers to be executed at a specified place.
            * @param evt When to execute the command buffer during rendering.
            * @returns Array of command buffers. 
            */
            public GetCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : System.Array$1<UnityEngine.Rendering.CommandBuffer>
            /** Get culling parameters for a camera.
            * @param cullingParameters Resultant culling parameters.
            * @param stereoAware Generate single-pass stereo aware culling parameters.
            * @returns Flag indicating whether culling parameters are valid. 
            */
            public TryGetCullingParameters ($cullingParameters: $Ref<UnityEngine.Rendering.ScriptableCullingParameters>) : boolean
            /** Get culling parameters for a camera.
            * @param cullingParameters Resultant culling parameters.
            * @param stereoAware Generate single-pass stereo aware culling parameters.
            * @returns Flag indicating whether culling parameters are valid. 
            */
            public TryGetCullingParameters ($stereoAware: boolean, $cullingParameters: $Ref<UnityEngine.Rendering.ScriptableCullingParameters>) : boolean
            public constructor ()
        }
        /** Rendering path of a Camera.
        */
        enum RenderingPath
        { UsePlayerSettings = -1, VertexLit = 0, Forward = 1, DeferredLighting = 2, DeferredShading = 3 }
        /** Transparent object sorting mode of a Camera.
        */
        enum TransparencySortMode
        { Default = 0, Perspective = 1, Orthographic = 2, CustomAxis = 3 }
        /** Describes different types of camera.
        */
        enum CameraType
        { Game = 1, SceneView = 2, Preview = 4, VR = 8, Reflection = 16 }
        /** Values for Camera.clearFlags, determining what to clear when rendering a Camera.
        */
        enum CameraClearFlags
        { Skybox = 1, Color = 2, SolidColor = 2, Depth = 3, Nothing = 4 }
        /** Depth texture generation mode for Camera.
        */
        enum DepthTextureMode
        { None = 0, Depth = 1, DepthNormals = 2, MotionVectors = 4 }
        /** Shader scripts used for all rendering.
        */
        class Shader extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** A 2D Rectangle defined by X and Y position, width and height.
        */
        class Rect extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Rect>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for Texture handling.
        */
        class Texture extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Render textures are textures that can be rendered to.
        */
        class RenderTexture extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
        }
        /** Color or depth buffer part of a RenderTexture.
        */
        class RenderBuffer extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Representation of rays.
        */
        class Ray extends System.ValueType implements System.IFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        /** Enum values for the Camera's targetEye property.
        */
        enum StereoTargetEyeMask
        { None = 0, Left = 1, Right = 2, Both = 3 }
        /** Class for handling cube maps, Use this to create or modify existing.
        */
        class Cubemap extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
        }
        /** Control of an object's position through physics simulation.
        */
        class Rigidbody extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** The velocity vector of the rigidbody. It represents the rate of change of Rigidbody position.
            */
            public get velocity(): UnityEngine.Vector3;
            public set velocity(value: UnityEngine.Vector3);
            /** The angular velocity vector of the rigidbody measured in radians per second.
            */
            public get angularVelocity(): UnityEngine.Vector3;
            public set angularVelocity(value: UnityEngine.Vector3);
            /** The drag of the object.
            */
            public get drag(): number;
            public set drag(value: number);
            /** The angular drag of the object.
            */
            public get angularDrag(): number;
            public set angularDrag(value: number);
            /** The mass of the rigidbody.
            */
            public get mass(): number;
            public set mass(value: number);
            /** Controls whether gravity affects this rigidbody.
            */
            public get useGravity(): boolean;
            public set useGravity(value: boolean);
            /** Maximum velocity of a rigidbody when moving out of penetrating state.
            */
            public get maxDepenetrationVelocity(): number;
            public set maxDepenetrationVelocity(value: number);
            /** Controls whether physics affects the rigidbody.
            */
            public get isKinematic(): boolean;
            public set isKinematic(value: boolean);
            /** Controls whether physics will change the rotation of the object.
            */
            public get freezeRotation(): boolean;
            public set freezeRotation(value: boolean);
            /** Controls which degrees of freedom are allowed for the simulation of this Rigidbody.
            */
            public get constraints(): UnityEngine.RigidbodyConstraints;
            public set constraints(value: UnityEngine.RigidbodyConstraints);
            /** The Rigidbody's collision detection mode.
            */
            public get collisionDetectionMode(): UnityEngine.CollisionDetectionMode;
            public set collisionDetectionMode(value: UnityEngine.CollisionDetectionMode);
            /** The center of mass relative to the transform's origin.
            */
            public get centerOfMass(): UnityEngine.Vector3;
            public set centerOfMass(value: UnityEngine.Vector3);
            /** The center of mass of the rigidbody in world space (Read Only).
            */
            public get worldCenterOfMass(): UnityEngine.Vector3;
            /** The rotation of the inertia tensor.
            */
            public get inertiaTensorRotation(): UnityEngine.Quaternion;
            public set inertiaTensorRotation(value: UnityEngine.Quaternion);
            /** The inertia tensor of this body, defined as a diagonal matrix in a reference frame positioned at this body's center of mass and rotated by Rigidbody.inertiaTensorRotation.
            */
            public get inertiaTensor(): UnityEngine.Vector3;
            public set inertiaTensor(value: UnityEngine.Vector3);
            /** Should collision detection be enabled? (By default always enabled).
            */
            public get detectCollisions(): boolean;
            public set detectCollisions(value: boolean);
            /** The position of the rigidbody.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** The rotation of the Rigidbody.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** Interpolation allows you to smooth out the effect of running physics at a fixed frame rate.
            */
            public get interpolation(): UnityEngine.RigidbodyInterpolation;
            public set interpolation(value: UnityEngine.RigidbodyInterpolation);
            /** The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive.
            */
            public get solverIterations(): number;
            public set solverIterations(value: number);
            /** The mass-normalized energy threshold, below which objects start going to sleep.
            */
            public get sleepThreshold(): number;
            public set sleepThreshold(value: number);
            /** The maximimum angular velocity of the rigidbody measured in radians per second. (Default 7) range { 0, infinity }.
            */
            public get maxAngularVelocity(): number;
            public set maxAngularVelocity(value: number);
            /** The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive.
            */
            public get solverVelocityIterations(): number;
            public set solverVelocityIterations(value: number);
            /** Sets the mass based on the attached colliders assuming a constant density.
            */
            public SetDensity ($density: number) : void
            /** Moves the kinematic Rigidbody towards position.
            * @param position Provides the new position for the Rigidbody object.
            */
            public MovePosition ($position: UnityEngine.Vector3) : void
            /** Rotates the rigidbody to rotation.
            * @param rot The new rotation for the Rigidbody.
            */
            public MoveRotation ($rot: UnityEngine.Quaternion) : void
            public Sleep () : void
            public IsSleeping () : boolean
            public WakeUp () : void
            public ResetCenterOfMass () : void
            public ResetInertiaTensor () : void
            /** The velocity relative to the rigidbody at the point relativePoint.
            */
            public GetRelativePointVelocity ($relativePoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** The velocity of the rigidbody at the point worldPoint in global space.
            */
            public GetPointVelocity ($worldPoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Adds a force to the Rigidbody.
            * @param force Force vector in world coordinates.
            * @param mode Type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the Rigidbody.
            * @param force Force vector in world coordinates.
            * @param mode Type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3) : void
            /** Adds a force to the Rigidbody.
            * @param x Size of force along the world x-axis.
            * @param y Size of force along the world y-axis.
            * @param z Size of force along the world z-axis.
            * @param mode Type of force to apply.
            */
            public AddForce ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the Rigidbody.
            * @param x Size of force along the world x-axis.
            * @param y Size of force along the world y-axis.
            * @param z Size of force along the world z-axis.
            * @param mode Type of force to apply.
            */
            public AddForce ($x: number, $y: number, $z: number) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param force Force vector in local coordinates.
            * @param mode Type of force to apply.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param force Force vector in local coordinates.
            * @param mode Type of force to apply.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param x Size of force along the local x-axis.
            * @param y Size of force along the local y-axis.
            * @param z Size of force along the local z-axis.
            * @param mode Type of force to apply.
            */
            public AddRelativeForce ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the rigidbody relative to its coordinate system.
            * @param x Size of force along the local x-axis.
            * @param y Size of force along the local y-axis.
            * @param z Size of force along the local z-axis.
            * @param mode Type of force to apply.
            */
            public AddRelativeForce ($x: number, $y: number, $z: number) : void
            /** Adds a torque to the rigidbody.
            * @param torque Torque vector in world coordinates.
            * @param mode The type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody.
            * @param torque Torque vector in world coordinates.
            * @param mode The type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3) : void
            /** Adds a torque to the rigidbody.
            * @param x Size of torque along the world x-axis.
            * @param y Size of torque along the world y-axis.
            * @param z Size of torque along the world z-axis.
            * @param mode The type of torque to apply.
            */
            public AddTorque ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody.
            * @param x Size of torque along the world x-axis.
            * @param y Size of torque along the world y-axis.
            * @param z Size of torque along the world z-axis.
            * @param mode The type of torque to apply.
            */
            public AddTorque ($x: number, $y: number, $z: number) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param torque Torque vector in local coordinates.
            * @param mode Type of force to apply.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param torque Torque vector in local coordinates.
            * @param mode Type of force to apply.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param x Size of torque along the local x-axis.
            * @param y Size of torque along the local y-axis.
            * @param z Size of torque along the local z-axis.
            * @param mode Type of force to apply.
            */
            public AddRelativeTorque ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody relative to its coordinate system.
            * @param x Size of torque along the local x-axis.
            * @param y Size of torque along the local y-axis.
            * @param z Size of torque along the local z-axis.
            * @param mode Type of force to apply.
            */
            public AddRelativeTorque ($x: number, $y: number, $z: number) : void
            /** Applies force at position. As a result this will apply a torque and force on the object.
            * @param force Force vector in world coordinates.
            * @param position Position in world coordinates.
            * @param mode Type of force to apply.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Applies force at position. As a result this will apply a torque and force on the object.
            * @param force Force vector in world coordinates.
            * @param position Position in world coordinates.
            * @param mode Type of force to apply.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param explosionForce The force of the explosion (which may be modified by distance).
            * @param explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number, $mode: UnityEngine.ForceMode) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param explosionForce The force of the explosion (which may be modified by distance).
            * @param explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number) : void
            /** Applies a force to a rigidbody that simulates explosion effects.
            * @param explosionForce The force of the explosion (which may be modified by distance).
            * @param explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number) : void
            /** The closest point to the bounding box of the attached colliders.
            */
            public ClosestPointOnBounds ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Tests if a rigidbody would collide with anything, if it was moved through the Scene.
            * @param direction The direction into which to sweep the rigidbody.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit (See Also: RaycastHit).
            * @param maxDistance The length of the sweep.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the rigidbody sweep intersects any collider, otherwise false. 
            */
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Like Rigidbody.SweepTest, but returns all hits.
            * @param direction The direction into which to sweep the rigidbody.
            * @param maxDistance The length of the sweep.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public SweepTestAll ($direction: UnityEngine.Vector3, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public SweepTestAll ($direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public SweepTestAll ($direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            public constructor ()
        }
        /** Use these flags to constrain motion of Rigidbodies.
        */
        enum RigidbodyConstraints
        { None = 0, FreezePositionX = 2, FreezePositionY = 4, FreezePositionZ = 8, FreezeRotationX = 16, FreezeRotationY = 32, FreezeRotationZ = 64, FreezePosition = 14, FreezeRotation = 112, FreezeAll = 126 }
        /** The collision detection mode constants used for Rigidbody.collisionDetectionMode.
        */
        enum CollisionDetectionMode
        { Discrete = 0, Continuous = 1, ContinuousDynamic = 2, ContinuousSpeculative = 3 }
        /** Rigidbody interpolation mode.
        */
        enum RigidbodyInterpolation
        { None = 0, Interpolate = 1, Extrapolate = 2 }
        /** Use ForceMode to specify how to apply a force using Rigidbody.AddForce or ArticulationBody.AddForce.
        */
        enum ForceMode
        { Force = 0, Acceleration = 5, Impulse = 1, VelocityChange = 2 }
        /** Structure used to get information back from a raycast.
        */
        class RaycastHit extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Overrides the global Physics.queriesHitTriggers.
        */
        enum QueryTriggerInteraction
        { UseGlobal = 0, Ignore = 1, Collide = 2 }
    }
    namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IEnumerator
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface IDictionary extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface IDictionaryEnumerator extends System.Collections.IEnumerator
        {
        }
        interface IComparer
        {
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
        {
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
            protected [__keep_incompatibility]: never;
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get_Item ($index: number) : T
            public set_Item ($index: number, $value: T) : void
            public Add ($item: T) : void
            public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
            public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public BinarySearch ($item: T) : number
            public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>) : void
            public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public Exists ($match: System.Predicate$1<T>) : boolean
            public Find ($match: System.Predicate$1<T>) : T
            public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
            public FindIndex ($match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public FindLast ($match: System.Predicate$1<T>) : T
            public FindLastIndex ($match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public ForEach ($action: System.Action$1<T>) : void
            public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
            public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
            public IndexOf ($item: T) : number
            public IndexOf ($item: T, $index: number) : number
            public IndexOf ($item: T, $index: number, $count: number) : number
            public Insert ($index: number, $item: T) : void
            public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public LastIndexOf ($item: T) : number
            public LastIndexOf ($item: T, $index: number) : number
            public LastIndexOf ($item: T, $index: number, $count: number) : number
            public Remove ($item: T) : boolean
            public RemoveAll ($match: System.Predicate$1<T>) : number
            public RemoveAt ($index: number) : void
            public RemoveRange ($index: number, $count: number) : void
            public Reverse () : void
            public Reverse ($index: number, $count: number) : void
            public Sort () : void
            public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($comparison: System.Comparison$1<T>) : void
            public ToArray () : System.Array$1<T>
            public TrimExcess () : void
            public TrueForAll ($match: System.Predicate$1<T>) : boolean
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
        }
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Runtime.Serialization.IDeserializationCallback, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.IDictionary, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
            protected [__keep_incompatibility]: never;
            public get Comparer(): System.Collections.Generic.IEqualityComparer$1<TKey>;
            public get Count(): number;
            public get Keys(): System.Collections.Generic.Dictionary$2.KeyCollection<TKey, TValue>;
            public get Values(): System.Collections.Generic.Dictionary$2.ValueCollection<TKey, TValue>;
            public get_Item ($key: TKey) : TValue
            public set_Item ($key: TKey, $value: TValue) : void
            public Add ($key: TKey, $value: TValue) : void
            public Clear () : void
            public ContainsKey ($key: TKey) : boolean
            public ContainsValue ($value: TValue) : boolean
            public GetEnumerator () : System.Collections.Generic.Dictionary$2.Enumerator<TKey, TValue>
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public OnDeserialization ($sender: any) : void
            public Remove ($key: TKey) : boolean
            public TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
            public EnsureCapacity ($capacity: number) : number
            public TrimExcess () : void
            public TrimExcess ($capacity: number) : void
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($capacity: number, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>)
            public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
        }
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        class KeyValuePair$2<TKey, TValue> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface IDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        interface IComparer$1<T>
        {
        }
        interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable
        {
        }
        interface IEqualityComparer$1<T>
        {
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
        class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Runtime.InteropServices {
        interface _MemberInfo
        {
        }
        interface _Type
        {
        }
        interface _MethodBase
        {
        }
        interface _MethodInfo
        {
        }
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file.
        */
        class Scene extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
        interface IDeserializationCallback
        {
        }
        class SerializationInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class StreamingContext extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Application {
        interface AdvertisingIdentifierCallback
        { 
        (advertisingId: string, trackingEnabled: boolean, errorMsg: string) : void; 
        Invoke?: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void;
        }
        var AdvertisingIdentifierCallback: { new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback; }
        interface LowMemoryCallback
        { 
        () : void; 
        Invoke?: () => void;
        }
        var LowMemoryCallback: { new (func: () => void): LowMemoryCallback; }
        interface LogCallback
        { 
        (condition: string, stackTrace: string, type: UnityEngine.LogType) : void; 
        Invoke?: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void;
        }
        var LogCallback: { new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback; }
    }
    namespace UnityEngine.Events {
        /** Zero argument delegate used by UnityEvents.
        */
        interface UnityAction
        { 
        () : void; 
        Invoke?: () => void;
        }
        var UnityAction: { new (func: () => void): UnityAction; }
    }
    namespace UnityEditor {
        /** Derive from this base class to create a custom inspector or editor for your custom object.
        */
        class Editor extends UnityEngine.ScriptableObject implements UnityEditor.IPreviewable, UnityEditor.IToolModeOwner
        {
            protected [__keep_incompatibility]: never;
        }
        interface IPreviewable
        {
        }
        interface IToolModeOwner
        {
        }
    }
    namespace Puerts.Component {
        class TsEditorBase extends UnityEditor.Editor implements UnityEditor.IPreviewable, UnityEditor.IToolModeOwner
        {
            protected [__keep_incompatibility]: never;
            public static JsEnvLoader : Puerts.ILoader
            public constructor ()
        }
        class TsTransporter extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static jsEnv : Puerts.JsEnv
            public RegisterHook ($hookName: string, $hook: Puerts.Component.TsTransporter.Hook) : void
            public InvokeHook ($hookName: string, ...args: any[]) : void
            public ContainsHook ($hookName: string) : boolean
            public Clear () : void
            public constructor ($tsModulePath: string, $args: System.Collections.Generic.List$1<System.Tuple$2<string, any>>, $jsEnvIdx?: number)
            public constructor ()
        }
    }
    namespace Puerts {
        interface ILoader
        {
        }
        class JsEnv extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace Puerts.Component.TsEditorBase {
        class Property extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public name : string
            public type : System.Type
            public options : System.Collections.Generic.Dictionary$2<string, any>
            public constructor ()
        }
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Collections.Generic.List$1 {
        class Enumerator<T> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<T>, System.Collections.IEnumerator, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Collections.Generic.Dictionary$2 {
        class KeyCollection<TKey, TValue> extends System.Object implements System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<TKey>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<TKey>, System.Collections.Generic.ICollection$1<TKey>
        {
            protected [__keep_incompatibility]: never;
        }
        class ValueCollection<TKey, TValue> extends System.Object implements System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<TValue>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<TValue>, System.Collections.Generic.ICollection$1<TValue>
        {
            protected [__keep_incompatibility]: never;
        }
        class Enumerator<TKey, TValue> extends System.ValueType implements System.Collections.IDictionaryEnumerator, System.Collections.Generic.IEnumerator$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerator, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace StarterAssets {
        class StarterAssetsInputs extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public move : UnityEngine.Vector2
            public look : UnityEngine.Vector2
            public jump : boolean
            public sprint : boolean
            public analogMovement : boolean
            public cursorLocked : boolean
            public cursorInputForLook : boolean
            public static instance : StarterAssets.StarterAssetsInputs
            public static OnShootCallback : System.Action$1<UnityEngine.InputSystem.InputValue>
            public OnMove ($value: UnityEngine.InputSystem.InputValue) : void
            public OnLook ($value: UnityEngine.InputSystem.InputValue) : void
            public OnJump ($value: UnityEngine.InputSystem.InputValue) : void
            public OnSprint ($value: UnityEngine.InputSystem.InputValue) : void
            public OnShoot ($value: UnityEngine.InputSystem.InputValue) : void
            public MoveInput ($newMoveDirection: UnityEngine.Vector2) : void
            public LookInput ($newLookDirection: UnityEngine.Vector2) : void
            public JumpInput ($newJumpState: boolean) : void
            public SprintInput ($newSprintState: boolean) : void
            public constructor ()
        }
        class FirstPersonController extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public MoveSpeed : number
            public SprintSpeed : number
            public RotationSpeed : number
            public SpeedChangeRate : number
            public JumpHeight : number
            public Gravity : number
            public JumpTimeout : number
            public FallTimeout : number
            public Grounded : boolean
            public GroundedOffset : number
            public GroundedRadius : number
            public GroundLayers : UnityEngine.LayerMask
            public CinemachineCameraTarget : UnityEngine.GameObject
            public TopClamp : number
            public BottomClamp : number
            public _verticalVelocity : number
            public constructor ()
        }
    }
    namespace UnityEngine.InputSystem {
        class InputValue extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Camera {
        interface CameraCallback
        { 
        (cam: UnityEngine.Camera) : void; 
        Invoke?: (cam: UnityEngine.Camera) => void;
        }
        var CameraCallback: { new (func: (cam: UnityEngine.Camera) => void): CameraCallback; }
        enum GateFitMode
        { Vertical = 1, Horizontal = 2, Fill = 3, Overscan = 4, None = 0 }
        enum MonoOrStereoscopicEye
        { Left = 0, Right = 1, Mono = 2 }
        class GateFitParameters extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        enum StereoscopicEye
        { Left = 0, Right = 1 }
        enum SceneViewFilterMode
        { Off = 0, ShowFiltered = 1 }
        class RenderRequest extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Rendering {
        /** Opaque object sorting mode of a Camera.
        */
        enum OpaqueSortMode
        { Default = 0, FrontToBack = 1, NoDistanceSort = 2 }
        /** Defines a place in camera's rendering to attach Rendering.CommandBuffer objects to.
        */
        enum CameraEvent
        { BeforeDepthTexture = 0, AfterDepthTexture = 1, BeforeDepthNormalsTexture = 2, AfterDepthNormalsTexture = 3, BeforeGBuffer = 4, AfterGBuffer = 5, BeforeLighting = 6, AfterLighting = 7, BeforeFinalPass = 8, AfterFinalPass = 9, BeforeForwardOpaque = 10, AfterForwardOpaque = 11, BeforeImageEffectsOpaque = 12, AfterImageEffectsOpaque = 13, BeforeSkybox = 14, AfterSkybox = 15, BeforeForwardAlpha = 16, AfterForwardAlpha = 17, BeforeImageEffects = 18, AfterImageEffects = 19, AfterEverything = 20, BeforeReflections = 21, AfterReflections = 22, BeforeHaloAndLensFlares = 23, AfterHaloAndLensFlares = 24 }
        /** List of graphics commands to execute.
        */
        class CommandBuffer extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
        /** Describes the desired characteristics with respect to prioritisation and load balancing of the queue that a command buffer being submitted via Graphics.ExecuteCommandBufferAsync or [[ScriptableRenderContext.ExecuteCommandBufferAsync] should be sent to.
        */
        enum ComputeQueueType
        { Default = 0, Background = 1, Urgent = 2 }
        /** Parameters that configure a culling operation in the Scriptable Render Pipeline.
        */
        class ScriptableCullingParameters extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.ScriptableCullingParameters>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Globalization {
        enum NumberStyles
        { None = 0, AllowLeadingWhite = 1, AllowTrailingWhite = 2, AllowLeadingSign = 4, AllowTrailingSign = 8, AllowParentheses = 16, AllowDecimalPoint = 32, AllowThousands = 64, AllowExponent = 128, AllowCurrencySymbol = 256, AllowHexSpecifier = 512, Integer = 7, HexNumber = 515, Number = 111, Float = 167, Currency = 383, Any = 511 }
    }
    namespace Puerts.Component.TsTransporter {
        interface Hook
        { 
        (args: System.Array$1<any>) : any; 
        Invoke?: (args: System.Array$1<any>) => any;
        }
        var Hook: { new (func: (args: System.Array$1<any>) => any): Hook; }
    }
    namespace System.Runtime.CompilerServices {
        interface ITuple
        {
        }
    }
}
