import '/src/App.css'

interface InfoCardProps {
    msg: string;
    imgName: string;
}

export default function InfoCard({msg, imgName} : InfoCardProps) {
    return (<>
        <div className='polaroid'>
            <div className="text-container">
                <h1 id="result">{msg}</h1>
            </div>
            <img src={"assets/" + imgName + ".jpg"} alt={imgName} id="kanade-sign"></img>
        </div>
    </>)
}