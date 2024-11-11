
export default function Layout(props) {
    const { children } = props

    const header = (
        <header>header</header>
    )

    const footer = (
        <footer>footer</footer>
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