import React from 'react'

export default function MemeGeneratorBody(){
    
    const [topText,settopText] = React.useState("One does not simply")
    const [bottomText,setbottomText] = React.useState("Walk into mordor")

    function onTopKeyUpEvent(event){        
        settopText(event.target.value)
    }

    function onBottomKeyUpEvent(event){
        setbottomText(event.target.value)
    }

    return(
        <section className="meme-gen">
            <div className="input-row">
                <label>Top Text
                    <input
                    type="text"
                    placeholder="One does not simply,"
                    name="topText"
                    onKeyUp = {onTopKeyUpEvent}
                    />
                </label>
                <label>Bottom Text
                    <input
                    type="text"
                    placeholder="Walk into mordor"
                    name="bottomText"
                    onKeyUp={onBottomKeyUpEvent}
                    />
                </label>
                <button className="gen-meme-submit">Generate a new Meme</button>
            </div>
            <div className="image-info">
                <img src="https://imgflip.com/s/meme/One-Does-Not-Simply.jpg" alt="meme"/>
                <span className="top">{topText}</span>
                <span className="bottom">{bottomText}</span>
            </div>
        </section>
    )
}