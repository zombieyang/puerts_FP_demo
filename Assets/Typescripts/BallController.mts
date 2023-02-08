import { Component } from "puerts-component/component.mjs";
import { Transporter } from "puerts-component/transporter.deco.mjs";
import BallSystem from "./BallSystem.mjs";

@Transporter()
export default class BallController extends Component {
    Start() {
        BallSystem.ballControllers.push(this);
    }
}