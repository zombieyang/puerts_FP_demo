import { Hook } from "./hook.deco.mjs";


export abstract class Component {    

    private _gameObject: CS.UnityEngine.GameObject;
    public get gameObject(): CS.UnityEngine.GameObject {
        return this._gameObject;
    }

    private _transform: CS.UnityEngine.Transform
    public get transform(): CS.UnityEngine.Transform {
        return this._transform;
    }

    @Hook()
    protected Awake(){}
    
    @Hook()
    protected Start(){}

    @Hook()
    protected Update(){}

    @Hook()
    protected OnDestroy(){}

    @Hook()
    protected OnEnable(){}

    @Hook()
    protected OnDisable(){}
}