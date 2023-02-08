import { Transporter } from "puerts-component/transporter.deco.mjs";
import { Component } from "puerts-component/component.mjs";
import { Property } from "puerts-component/property.deco.mjs";
import BallController from "./BallController.mjs";

import Quaternion = CS.UnityEngine.Quaternion;
import Vector3 = CS.UnityEngine.Vector3;

@Transporter()
export default class BallSystem extends Component {

    public static ballControllers: BallController[] = [];

    @Property(CS.StarterAssets.FirstPersonController)
    public firstPersonController: CS.StarterAssets.FirstPersonController;

    @Property(CS.UnityEngine.Camera)
    public lookingCamera: CS.UnityEngine.Camera;

    protected pickingBallRigidbody: CS.UnityEngine.Rigidbody;
    protected lastShootTime: number = 0;

    Start() {
        CS.StarterAssets.StarterAssetsInputs.OnShootCallback = this.OnShoot.bind(this);
    }

    Update() {
        var FPTransform = this.firstPersonController.transform;
        if (this.pickingBallRigidbody != null) 
        {
            this.pickingBallRigidbody.transform.position = this.transform.position;
            (this.pickingBallRigidbody.gameObject.GetComponent(
                puer.$typeof(CS.UnityEngine.Rigidbody)
            ) as CS.UnityEngine.Rigidbody).isKinematic = true;
            return;
        }

        if (Date.now() > this.lastShootTime + 2000)
        {
            BallSystem.ballControllers.forEach(item => {
                let distance = Vector3.Distance(FPTransform.position, item.transform.position);
                if (distance < 4) 
                {
                    this.pickingBallRigidbody = item.gameObject.GetComponent(
                        puer.$typeof(CS.UnityEngine.Rigidbody)
                    ) as CS.UnityEngine.Rigidbody;
                    return;
                }
            })
        }
    }

    OnShoot(inputValue: CS.UnityEngine.InputSystem.InputValue) 
    {
        if (this.pickingBallRigidbody == null) return;
        this.pickingBallRigidbody.isKinematic = false;

        this.pickingBallRigidbody.velocity = Vector3.op_Addition(
            Quaternion.op_Multiply(this.lookingCamera.transform.rotation.normalized, new CS.UnityEngine.Vector3(0, 2.5, 5)),
            new Vector3(0, Math.max(0, this.firstPersonController._verticalVelocity * 2, 0))
        );

        this.pickingBallRigidbody.angularVelocity = Quaternion.op_Multiply(
            this.lookingCamera.transform.rotation.normalized,
            new CS.UnityEngine.Vector3(-20, 0, 0)
        );
        this.lastShootTime = Date.now();
        this.pickingBallRigidbody = null;
    }
}