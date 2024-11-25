import React, { useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const [tarea, miTarea] = useState ("");
const [tareas, listaTareas] = useState([]);

const agregarTarea = (event) => {
    if (event.key === "Enter" && tarea !== "") {
        listaTareas(tareas.concat(tarea));
        miTarea("");
    }
};

const borrarTarea = (index) => {
    const nuevasTareas = tareas.filter((t, i) => i !== index);
    listaTareas(nuevasTareas);
};

	return (
		<div className="text-center">
			<h1 className="text-center">To do list</h1>
			<div>
				<input type="text" placeholder="What needs to be done?" value= {tarea} onChange= {(event)=> miTarea (event.target.value)} onKeyDown={agregarTarea} />
			</div>
			<ul>
                {tareas.map((t, index) => (
                    <li key={index}>
                        {t}
                        <span>
                            <button onClick={() => borrarTarea(index)}>x</button>
                        </span>
                    </li>
                ))}
            </ul>
			<div >
        <small>
		{tareas.length} item left
		</small>
			</div>
        </div>
    );
};

export default Home;
