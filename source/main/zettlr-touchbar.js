const { TouchBar } = require('electron')
const { TouchBarLabel, TouchBarButton, TouchBarSpacer, TouchBarPopover, TouchBarColorPicker } = TouchBar

const test = new TouchBarLabel()
let touchBar = null
let boldButton = null
class ZettlrTouchBar{
	constructor(parent){
		this._window = parent
		test.label = 'testOk'
		boldButton = new TouchBarButton({
  		label: 'Bold',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '****'
  		}
		})
		
		touchBar = new TouchBar({
  		items: [
    		test,
    		boldButton
  		]	
  	})
	}
	
	
	set () {
    //if macosOk
    this._touchBar = touchBar
    this._window.setTouchBar(this._touchBar)
  }
}

module.exports = ZettlrTouchBar