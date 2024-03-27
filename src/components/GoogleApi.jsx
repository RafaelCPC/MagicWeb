import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";


function GoogleApi({callbacks}){


    const [user, setUser] = useState({});
    
    function handleCallbackResponse(response){
        callbacks()       
        const userObject = jwtDecode(response.credential)
        setUser(userObject);
        localStorage.setItem("usuario", userObject.name)
        localStorage.setItem("usuarioImg", userObject.picture)
        document.getElementById("signInDiv").hidden=true;
    }
    function handleSignOut (event){
        setUser({});
        document.getElementById("signInDiv").hidden=false;
    }
    
 useEffect(() =>{
    /* google global   */
    google.accounts.id.initialize({        
        client_id:"617647435658-g3i0qu59fr1rc2hltjjdu295ucomrakg.apps.googleusercontent.com",
        callback:handleCallbackResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme:"outline", size:"large"}
    );
    google.accounts.id.prompt();
 },[])

    return(
        <div>
            <div id="signInDiv"> </div>
            
        </div>
    )
}
export default GoogleApi;