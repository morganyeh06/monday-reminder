import LanguageSwitch from "./LanguageSwitch"
import '/src/App.css'

interface BannerProps {
    langFunc: (lang: string) => void;
}


export default function Banner({ langFunc } : BannerProps) {
    return (<>
        <div className="site-banner">
            <img alt="site logo" src="./src/assets/title.png" id="site-logo"></img>
            <div className="switch"><LanguageSwitch langSetter={langFunc}/></div>
        </div>
    </>)
}