/**
 * @ignore
 * BEGIN HEADER
 *
 * Contains:        ZettlrTouchBar
 * CVM-Role:        Model
 * Maintainer:      Warpcut
 * License:         GNU GPL v3
 *
 * Description:     Class responsable for the Touch Bar implementation
 *
 * END HEADER
 */

const { TouchBar } = require('electron')
const { TouchBarLabel, TouchBarButton, TouchBarSpacer, TouchBarPopover, TouchBarSlider } = TouchBar
const test = new TouchBarLabel()

//ToucbBars
let touchBar = null
let formattingBar = null
let pomodoroBar = null

//Slider
let volumeSlider = null

//Buttons
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
let startStopButton = null
let soundButton = null
let mainTimerPlus = null
let pauseTimerPlus = null
let endTimerPlus = null


//Labels
let pomodoroLabel = null
let instructionLabel = null

//Vars
let startStopValue = true
let soundValue = false

class ZettlrTouchBar{
	constructor(parent){
		this._window = parent
		this.init()
	}
	init () {
    pomodoroLabel = new TouchBarLabel({
      label: '00.00'
    })

    instructionLabel = new TouchBarLabel({
      label: 'Work'
    })

		hButton = new TouchBarButton({
  		label: '#',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		boldButton = new TouchBarButton({
  		label: '𝗕',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		italicButton = new TouchBarButton({
  		label: '𝐼',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		codeButton = new TouchBarButton({
  		label: '<>',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		commentButton = new TouchBarButton({
  		label: '</>',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		linkButton = new TouchBarButton({
  		label: '🔗',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		imageButton = new TouchBarButton({
  		label: '🖼',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		blockquoteButton = new TouchBarButton({
  		label: '❞',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		numberedButton = new TouchBarButton({
  		label: '≡',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

		itemizedButton = new TouchBarButton({
  		label: '≔',
  		backgroundColor: '#367B66',
  		click: () => {
  		}
		})

    startStopButton = new TouchBarButton({
      label: 'Start',
      backgroundColor: '#367B66',
      click: () => {
        //Start pomodoro Timer
        if(startStopValue){
          startStopButton.label = 'Stop'
          startStopValue = false
        }else{
          startStopButton.label = 'Start'
          startStopValue = true
        }
  		}
    })
    soundButton = new TouchBarButton({
      label: '🔇',
      backgroundColor: '#367B66',
      click: () => {
        //Start pomodoro Timer
        if(!soundValue){
          soundButton.label = '🔈'
          soundValue = true
        }else{
          soundButton.label = '🔇'
          soundValue = false
        }
  		}
    })
    mainTimerPlus = new TouchBarButton({
      label: '25',
      backgroundColor: '#E1613E',
      click: () => {
        pomodoroLabel.label = '25.00'
  		}
    })

    pauseTimerPlus = new TouchBarButton({
  		label: '5',
  		backgroundColor: '#F4EEAA',
  		click: () => {
        pomodoroLabel.label = '05.00'
  		}
		})

    endTimerPlus = new TouchBarButton({
  		label: '20',
  		backgroundColor: '#699159',
  		click: () => {
        pomodoroLabel.label = '20.00'
  		}
		})

    volumeSlider = new TouchBarSlider({
      label: '',
      minValue: '0',
      maxValue: '1',
      change: (newValue) => {
      }
    })

  	formattingBar = new TouchBar({
  		items: [
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

    pomodoroBar = new TouchBar({
      items: [
        startStopButton,
        soundButton,
        new TouchBarSpacer({size: 'small'}),
        mainTimerPlus,
        pauseTimerPlus,
        endTimerPlus,
        volumeSlider,
        new TouchBarSpacer({size: 'flexible'}),
        instructionLabel,
        pomodoroLabel
      ]
    })

		touchBar = new TouchBar({
  		items: [
    		new TouchBarPopover({label: 'Α', items: formattingBar, showCloseButton: false  }),
        new TouchBarPopover({label: '🍅', items: pomodoroBar, showCloseButton: true  }),
        new TouchBarSpacer({size: 'flexible'}),
        instructionLabel,
        pomodoroLabel
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
