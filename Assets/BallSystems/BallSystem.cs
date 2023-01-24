using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class BallSystem : MonoBehaviour
{
    public static BallSystem instance;

    protected List<BallController> bcList = new List<BallController>();
    protected Rigidbody pickingBallRigidbody;
    protected float lastShootTime;
    
    public StarterAssets.FirstPersonController firstPersonController;
    public Camera lookingCamera;
    
    public static void RegisterBall(BallController bc)
    {
        instance.bcList.Add(bc);
    }

    // Start is called before the first frame update
    void Start()
    {
        if (instance != null) throw new Exception("Only one PickBallSystem is allowed");
        instance = this;
        StarterAssets.StarterAssetsInputs.OnShootCallback += OnShoot;
    }

    // Update is called once per frame
    void Update()
    {
        var FPTransform = firstPersonController.transform;
        if (pickingBallRigidbody != null) 
        {
            pickingBallRigidbody.transform.position = transform.position;
            pickingBallRigidbody.gameObject.GetComponent<Rigidbody>().isKinematic = true;
            return;
        }

        if (Time.time > lastShootTime + 2)
        {
            foreach (var item in bcList)
            {
                float dist = Vector3.Distance(FPTransform.position, item.transform.position);
                if (dist < 4) 
                {
                    pickingBallRigidbody = item.gameObject.GetComponent<Rigidbody>();
                    return;
                }
            }
        }
    }

    void OnShoot(InputValue value)
    {
        if (pickingBallRigidbody == null) return;
        pickingBallRigidbody.isKinematic = false;

        pickingBallRigidbody.velocity = lookingCamera.transform.rotation.normalized * new Vector3(0, 2.5f, 5) + 
            new Vector3(0,  Mathf.Max(0, firstPersonController._verticalVelocity * 2, 0));
        pickingBallRigidbody.angularVelocity = lookingCamera.transform.rotation.normalized * new Vector3(-20, 0, 0);
        lastShootTime = Time.time;
        pickingBallRigidbody = null;

    }
}
