const consoleStyles = {
  danger: 'color: #F56C6C;',
  warning: 'color: #E6A23C;',
  success: 'color: #67C23A;',
  info: 'color: #409EFF;',
  disabled: 'color: #909399;',
  default: ''
}

function log (string = '', type = 'default') {
  console.log('%c%s', consoleStyles[type], string)
}

export default class AdBlockDetect {
  constructor (props = {}) {
    this._options = {
      id: 'xxxxxxxxxx'.replace(/x/g, () => ((Math.random() * 16) | 0).toString(16)),
      pixelClass: 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links adsbox partner_news adfox adsense' + (props.pixelClass || ''),
      pixelStyle: 'width: 1px!important; height: 1px!important; position: absolute!important; left: 0px!important; top: 0px!important; opacity: 0!important;' + (props.pixelStyle || ''),
      debug: typeof props.debug === 'boolean' ? props.debug : false,
      pixelInstance: null,
      adBlockDetected: false,
      intervalInstance: null,
      loopLimit: props.loopLimit || 5,
      loopInterval: props.loopInterval || 100,
      onDetected: typeof props.onDetected === 'function' ? props.onDetected : function (detected) { if (this.debug) log('Default onDetected Callback', 'danger') },
      onNotDetected: typeof props.onNotDetected === 'function' ? props.onNotDetected : function (detected) { if (this.debug) log('Default onNotDetected Callback', 'success') },
      onEnd: props.onEnd || null
    }
  }

  createPixel () {
    let pixel = document.createElement('div');
    pixel.setAttribute('id', 'adblock-check-pixel_' + this._options.id);
    pixel.setAttribute('class', this._options.pixelClass);
    pixel.setAttribute('style', this._options.pixelStyle);
    if (this._options.debug) log('Creating AdBlockDetect pixel instance', 'disabled');
    this._options.pixelInstance = pixel;
    return pixel;
  }

  insertPixelInDocument (pixel = this._options.pixelInstance) {
    if (pixel) {
      const body = document.getElementsByTagName('body')[0];
      body.appendChild(pixel);
      if (this._options.debug) log('AdBlockDetect pixel inserted into Document Body', 'disabled')
    } else if (this._options.debug) log('No AdBlockDetect pixel instance to insert into Document Body', 'danger')
  }

  removePixelFromDocument () {
    let pixelInDoc = document.getElementById('adblock-check-pixel_' + this._options.id);
    pixelInDoc.parentNode.removeChild(pixelInDoc)
    if (this._options.debug) log('AdBlockDetect pixel removed from Document Body', 'disabled')
  }

  checkAdBlock () {
    let intervalCount = 0;
    this._options.intervalInstance = setInterval(() => {
      if (intervalCount >= this._options.loopLimit) {
        clearInterval(this._options.intervalInstance);
        this.removePixelFromDocument();
        this._options.onNotDetected();
        if (this._options.debug) log('No AdBlock detected', 'success');
        this._options.onEnd(this._options.adBlockDetected);
        return false;
      }

      let pixelInDoc = document.getElementById('adblock-check-pixel_' + this._options.id);

      if (pixelInDoc) {
        let pixelStyles = window.getComputedStyle(pixelInDoc, null);

        if (pixelStyles && (pixelStyles.display === 'none' || pixelStyles.visibility === 'hidden')) {
          this._options.adBlockDetected = true;
          clearInterval(this._options.intervalInstance);
          this.removePixelFromDocument();
          this._options.onDetected();
          if (this._options.debug) log('AdBlock is detected!', 'danger');
          this._options.onEnd(this._options.adBlockDetected);
        }
      }

      intervalCount++
    })
  }

  init () {
    if (this._options.debug) log('AdBlockDetect inited', 'info')
    this.createPixel();
    this.insertPixelInDocument();
    this.checkAdBlock();
  }
}
