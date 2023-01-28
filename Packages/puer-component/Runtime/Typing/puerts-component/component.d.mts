/// <reference types="csharp" />
export declare abstract class Component {
    private _gameObject;
    get gameObject(): CS.UnityEngine.GameObject;
    private _transform;
    get transform(): CS.UnityEngine.Transform;
    protected Awake(): void;
    protected Start(): void;
    protected OnDestroy(): void;
    protected OnEnable(): void;
    protected OnDisable(): void;
}
