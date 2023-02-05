import { Transporter } from "puerts-component/transporter.deco.mts";
import { Component } from "puerts-component/component.mts";
import { Property } from "puerts-component/property.deco.mts";
import BallSystem from "./BallSystem.mts";

@Transporter()
export default class BallController extends Component {
    Start() {
        BallSystem.ballControllers.push(this);
    }
}