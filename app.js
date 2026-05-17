async function cargarEquipos(){

```
const contenedor = document.getElementById("equipos");

contenedor.innerHTML = "Cargando...";

try{

    const response = await fetch(
        "https://montacargas-api-3.onrender.com/estado?id=1A313102"
    );

    const data = await response.json();

    contenedor.innerHTML = `
        <div class="card">

            <h2>Equipo: 1A313102</h2>

            <p>
                Estado:
                <span class="${
                    data.activo ? 'activo' : 'inactivo'
                }">

                    ${
                        data.activo
                        ? 'ENCENDIDO'
                        : 'APAGADO'
                    }

                </span>
            </p>

        </div>
    `;

}catch(error){

    contenedor.innerHTML =
        "Error cargando equipos";
}
```

}

cargarEquipos();

setInterval(cargarEquipos, 10000);
