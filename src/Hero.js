import React from 'react';

 const Hero = ({handleLogout}) => {
     return(
         <header>
         <section className="hero">
            <nav>
                <h2>Welcome</h2>
                    <list>
                    <button onClick="./pages/home"><h6>Home</h6></button>
                    <button onClick="./pages/my-courses"><h6>My courses</h6></button>
                    <button><h6>Assignments</h6></button>
                    <button><h6>Report</h6></button>
                    <button onClick={handleLogout} ><h6>Logout</h6></button>
                </list>
            </nav>
            <article>
            <br></br>
            <h1><b>My courses</b></h1>
            <br></br>
            <br></br>
            <p><h4>Las aulas virtuales​ son una nueva modalidad educativa que se desarrolla de manera complementaria o independiente a las formas <br></br>tradicionales de educación,​ y que surge a partir de la incorporación de las tecnologías de información y comunicación (TIC),<br></br> en los procesos de enseñanza-aprendizaje.
            <br></br>
            <br></br>
            Se pueden reconocer cuatro dimensiones pedagógicas del aula virtual:5​
            <br></br>
            <br></br>
            <h5><i>- Informativa: se trata del conjunto de materiales(textual, multimedia, gráfica o audiovisual) que colaboran con los participantes en el acceso autónomo a los conocimientos. 
            <br></br>Ejemplo de estos materiales son los temarios, clasificaciones, apuntes (en formato: PDF, Word, entre otros), presentaciones multimedia, mapas conceptuales, animaciones, enlaces<br></br> o hipervínculos a bibliografía complementaria y a sitios de interés que permiten ampliar los contenidos o acceder a nuevos recursos de utilidad6​.
            Práctica: se vincula con el conjunto de acciones, tareas o actividades planificadas por el docente para facilitar el desarrollo de una experiencia activa en la construcción del conocimiento mediante, por ejemplo: la participación en foros de debate; la lectura y redacción de textos; la realización un diario personal; el análisis de casos prácticos; la búsqueda de información; la creación de una base de datos; la elaboración proyectos individuales o grupales; la resolución de problemas y/o ejercicios; la planificación y el desarrollo de una investigación; el desarrollo de trabajos colaborativos mediante Wikis7​; o la realización de 8​, entre otros.
            Comunicativa: trata de la variedad de recursos y acciones que supongan la interacción entre participantes y el docente a través de herramientas tales como los foros, los chats, la mensajería interna, el correo electrónico, la videoconferencia o la audioconferencia.
            Tutorial y evaluativa: Hace referencia a las funciones docentes como tutor o dinamizador de actividades individuales o grupales de aprendizaje, organizador de recursos telemáticos y evaluador de los trabajos y actividades.</i></h5>
            
            </h4></p>
            </article>
         </section>
         </header>
     )
 }

 export default Hero;