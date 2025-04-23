import React from 'react'

export default function MemeGeneratorBody() {
    const [count,setCount] = React.useState(0)
    const [memeImage,setmemeImage] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setmemeImage(data.data.memes))
    },[count])

    const [meme, setMeme] = React.useState(
        {
            topText: "One does not simply,",
            bottomText: "Walk into mordor!",
            imageUrl: "https://imgflip.com/s/meme/One-Does-Not-Simply.jpg"
        }
    )    

    function onChange(event) {
        const { value, name } = event.currentTarget;
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function onGenerateMemeButtonClick() {        
        setMeme(
            {
                ...meme,
                imageUrl: memeImage[Math.floor(Math.random() * 100)].url
            }
        )
    }

    return (
        <section className="meme-gen">
            <div className="input-row">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply,"
                        name="topText"
                        onChange={onChange}
                        value={meme.topText}
                    />
                </label>
                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into mordor"
                        name="bottomText"
                        onChange={onChange}
                        value={meme.bottomText}
                    />
                </label>
                <button className="gen-meme-submit" onClick={onGenerateMemeButtonClick}>Generate a new Meme</button>
            </div>
            <div className="image-info">
                <img src={meme.imageUrl} alt="meme" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </section>
    )
}