const { TouchBar } = require('electron')
const { TouchBarLabel, TouchBarButton, TouchBarSpacer, TouchBarPopover } = TouchBar

const test = new TouchBarLabel()

let touchBar = null
let formattingBar = null

let scrubber = null

let hButton = null
let boldButton = null
let italicButton = null
let linkButton = null
let codeButton = null
let commentButton = null
let imageButton = null
let numberedButton = null
let itemizedButton = null
let blockquoteButton = null

class ZettlrTouchBar{
	constructor(parent){
		this._window = parent
		test.label = 'testOk'
		this.init()
	}
	
	init () {
		hButton = new TouchBarButton({
  		label: '#',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '#'
  		}
		})
		
		boldButton = new TouchBarButton({
  		label: '𝗕',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '****'
  		}
		})
		
		italicButton = new TouchBarButton({
  		label: '𝐼',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '__'
  		}
		})
		
		codeButton = new TouchBarButton({
  		label: '<>',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '<>'
  		}
		})
		
		commentButton = new TouchBarButton({
  		label: '</>',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '</>'
  		}
		})
		
		linkButton = new TouchBarButton({
  		label: '🔗',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '[]()'
  		}
		})
		
		imageButton = new TouchBarButton({
  		label: '🖼',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '![]()'
  		}
		})
		
		blockquoteButton = new TouchBarButton({
  		label: '❞',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '\'\''
  		}
		})
		
		numberedButton = new TouchBarButton({
  		label: '≡',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '1.'
  		}
		})
		
		itemizedButton = new TouchBarButton({
  		label: '≔',
  		backgroundColor: '#367B66',
  		click: () => {
		    test.label = '*'
  		}
		})
  	
  	formattingBar = new TouchBar({
  		items: [
    		//test,
    		hButton,
    		boldButton,
    		italicButton,
    		codeButton,
    		commentButton,
    		linkButton,
    		imageButton,
    		numberedButton,
    		itemizedButton,
    		blockquoteButton
  		]
  	})
				
		touchBar = new TouchBar({
  		items: [
    		new TouchBarPopover({label: 'Α', items: formattingBar, showCloseButton: false  })
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