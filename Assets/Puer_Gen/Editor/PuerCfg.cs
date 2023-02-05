using System;
using System.Collections.Generic;
using Puerts;

[Configure]
public class PuerCfg
{
    [Binding]
    public static List<Type> bindingList {
        get {
            return new List<Type> {
                typeof(StarterAssets.StarterAssetsInputs),
                typeof(StarterAssets.FirstPersonController),
                typeof(UnityEngine.Camera),
                typeof(System.Delegate),
                typeof(UnityEngine.Rigidbody),
                typeof(UnityEngine.Quaternion),
                typeof(UnityEngine.Vector3),
            };
        }
    }

    [CodeOutputDirectory]
    public static string OutputDirectory {
        get {
            return UnityEngine.Application.dataPath + "/Puer_Gen/Gen/";
        }
    }

}