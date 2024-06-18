import { usuarioGet } from "../api/usuario.api"
import { useEffect, useState } from "react";

const CurrentUser = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const cargaUser = async () => {
            const res =  await usuarioGet();
            setUser(res)
            console.log(res)
        }
        cargaUser();
    }, []);

  return (
    <div>
        <div>
        <h1>{user.username}</h1>
        <p>{user.cargo}</p>
       </div>
    </div>
  )
}

export default CurrentUser