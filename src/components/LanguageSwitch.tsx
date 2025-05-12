import '/src/App.css'

interface LanguageSwitchProps {
    langSetter: (lang: string) => void;
}


export default function LanguageSwitch( {langSetter}: LanguageSwitchProps) {
    // element-specfic styles for en and jp labels
    const enStyle = {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    }

    const jpStyle = {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    }
    

    function handleChange() {
        const lang = document.querySelector('input[type=radio]:checked')!.id;
        langSetter(lang);
    }

    return (<>
        <input type="radio" className="btn-check" name="options" id="en" onChange={handleChange} defaultChecked></input>
        <label className="btn btn-outline-primary" htmlFor="en" style={enStyle}>English</label>

        <input type="radio" className="btn-check" name="options" id="jp" onChange={handleChange}></input>
        <label className="btn btn-outline-primary" htmlFor="jp" style={jpStyle}>日本語</label>
    </>)
}