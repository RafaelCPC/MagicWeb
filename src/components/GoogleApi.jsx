import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
function GoogleApi(){
    const [user, setUser] = useState({});
    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: "+ response.credential)
        const userObject = jwtDecode(response.credential)
        console.log(userObject);
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
            { Object.keys(user).length != 0 &&
                <button onClick={(e) => handleSignOut()}>Sign Out</button>
            }
            {user && 
                <div className="userLogin">
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                    <h3>{user.email}</h3>
                </div>
            }
           
        </div>
    )
}
export default GoogleApi;