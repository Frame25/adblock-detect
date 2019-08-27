import AdBlockDetect from './adblock-detect-module';
window.AdBlockDetectClass = AdBlockDetect;
window.AdBlockDetectDefault = new AdBlockDetect({
  onEnd (res) {
    window.AdBlockEnabled = res
  }
});