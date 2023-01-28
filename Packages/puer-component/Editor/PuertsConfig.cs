using System.Collections;

using System;
using System.Collections.Generic;
using System.Reflection;
using Puerts;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

[Configure]
public class PuertsConfig
{

    [CodeOutputDirectory]
    static string OutputDirectory
    {
        get
        {
            return Application.dataPath + "/Gen/";
        }
    }


    [Typing]
    static IEnumerable<Type> Typings
    {
        get
        {
            return new List<Type>() {
                typeof(UnityEngine.Transform),
                typeof(UnityEngine.Component),
                typeof(UnityEngine.GameObject),
                typeof(UnityEngine.Object),
                typeof(UnityEngine.Color),
                typeof(UnityEngine.Vector2),
                typeof(UnityEngine.Vector3),
                typeof(UnityEngine.Application),
                typeof(Puerts.Component.TsEditorBase),
                typeof(Puerts.Component.TsEditorBase.Property),
                typeof(System.Object),
                typeof(System.Collections.Generic.List<int>),
                typeof(System.Collections.Generic.Dictionary<int, int>),
                typeof(System.Array)
            };
        }
    }

    [Filter]
    static bool FilterMethods(System.Reflection.MemberInfo mb)
    {
        // 排除 MonoBehaviour.runInEditMode, 在 Editor 环境下可用发布后不存在
        if (mb.DeclaringType == typeof(MonoBehaviour) && mb.Name == "runInEditMode")
        {
            return true;
        }
        else if (mb.DeclaringType == typeof(UnityEngine.UI.Text) && mb.Name == "OnRebuildRequested")
        {
            return true;
        }

        return false;
    }
}