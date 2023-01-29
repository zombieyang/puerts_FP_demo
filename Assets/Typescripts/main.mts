import { Transporter } from "puerts-component/transporter.deco.mts";
import { Component } from "puerts-component/component.mts";
import { Property } from "puerts-component/property.deco.mts";

@Transporter()
export default class TestComponent extends Component {

    @Property(CS.UnityEngine.Transform)
    test1Prop: CS.UnityEngine.Transform;
}