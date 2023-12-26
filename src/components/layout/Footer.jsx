
export default function Footer(){
    return(
        <>
            <footer className="text-center p-4">
                {new Date().getFullYear() } Copyright: <span>
                <a className="text-reset fw-bold" href="#/">Bulgarsky</a></span>
            </footer>
        </>
    )

}