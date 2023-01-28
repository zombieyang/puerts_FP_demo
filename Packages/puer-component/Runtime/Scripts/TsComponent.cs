

using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Puerts.Component {
    
    

    public class TsComponent : MonoBehaviour, ITsTransporterHolder, ITsPropertyHolder {

        

        public List<Property> properties;

        public TypescriptAsset tsFile;

        private TsTransporter _transporter;

        public TsTransporter Transporter {
            get {
                Init();
                return _transporter;
            }
        }

        protected virtual List<Tuple<string, object>> InternalProperties {
            get {
                return new List<Tuple<string, object>>(){
                    new Tuple<string, object>("_gameObject", this.gameObject),
                    new Tuple<string, object>("_transform", this.transform)
                };
            }
        }

        public List<Property> Properties => properties;

        public void Init(TypescriptAsset tsAsset){
            this.tsFile = tsAsset;
            Init();
        }

        public void Init() {
            if (_transporter != null){
                return;
            }
            var convertedProperties = this.ConvertPropertiesValue();
            convertedProperties.AddRange(InternalProperties);
            _transporter = new TsTransporter(tsFile.specifier, convertedProperties);
        }

        private void Awake() {
            if (this.tsFile == null){
                return;
            }
            Init();
            _transporter.InvokeHook("Awake");
        }

        private void OnEnable() {
            _transporter.InvokeHook("OnEnable");
        }

        private void OnDisable() {
            _transporter.InvokeHook("OnDisable");
        }

        private void Start()
        {
            _transporter.InvokeHook("Start");
        }

        private void OnDestroy()
        {
            _transporter.InvokeHook("OnDestroy");
            _transporter.Clear();
            _transporter = null;
        }
    }
}