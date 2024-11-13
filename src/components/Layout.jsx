
export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">ESPRESSO<span className="m-meter">𝔪</span>ETER</h1>
                <p> For Coffee Insatiates</p>
            </div>
            <button> 
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient"> Espresso𝔪eter </span> was inspired by - <a target="_blank" href="https://www.smoljames.com">Smoljames</a> 
            using the - <a  target="_blank" href="https://www.fantacss.smoljames.com">FantaCSS</a> design library</p>
        </footer>
    )

 return(
    <>
    {header}
    <main>
        {children}
    </main>
    {footer}
    </>
 )
}