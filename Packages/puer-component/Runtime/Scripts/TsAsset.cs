

using System.Collections.Generic;
using UnityEngine;

namespace Puerts.Component {

    [CreateAssetMenu(fileName = "TsAsset", menuName = "TsAsset", order = 0)]
    public class TsAsset : ScriptableObject, ITsTransporterHolder, ITsPropertyHolder
    {
        public List<Property> properties;

        public TypescriptAsset tsFile;

        private TsTransporter _transporter;

        public TsTransporter Transporter {
            get {
                Init();
                return _transporter;
            }
        }

        public List<Property> Properties => properties;

        public void Init()
        {
            if (_transporter != null){
                return;
            }
            var convertedProperties = this.ConvertPropertiesValue();
            _transporter = new TsTransporter(tsFile.specifier, convertedProperties);
        }

        private void OnEnable() {
            if (!Application.isPlaying){
                return;
            }
            Init();
        }

        private void OnDisable() {
            if (!Application.isPlaying){
                return;
            }
            if (_transporter != null) {
                _transporter.Clear();
                _transporter = null;
            }
        }
    }
}