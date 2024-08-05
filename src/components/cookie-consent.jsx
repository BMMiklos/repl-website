import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const CookieConsent = () => {

    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        
        if (accepted) {
            const cookies = new Cookies(null, { path: '/' });
            cookies.set("cookie-consent", "true");
        }

    }, [accepted]);

    useEffect(() => {

        const cookies = new Cookies(null, { path: '/' });
        const cookieConsent = cookies.get("cookie-consent");
        
        if (cookieConsent == "true" || cookieConsent == true) {
            setAccepted(true);
        }

    }, []);

    return !accepted ? <div className="fixed bg-cyan left-0 w-full bottom-0 p-4">

        <div className="md:flex">
            <div className="basis-3/4 flex mb-2 md:mb-0">
                <h2 className="text-md">A weboldal sütiket használt, hogy a legjobb felhasználó élményt nyújthassuk önöknek!</h2>
            </div>
            <div className="basis-1/4 flex justify-center align-center">
                <button onClick={() => { setAccepted(true) }} className="block w-full h-12 md:h-auto text-md border-2 px-2">Elfogadás</button>
            </div>
        </div>


    </div> : <></>
}

export { CookieConsent };
