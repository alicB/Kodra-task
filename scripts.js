function cambiar(texto) {
    if (texto == 'services') {
        //Con esto se oculta o muestra la seccion
        document.getElementById('services').removeAttribute('hidden');
        document.getElementById('blog').setAttribute('hidden', 'true');
        //Con esto se agrega la clase para el color amarillo
        document.getElementById('tab_blog').classList.remove('seccion_activa');
        document.getElementById('tab_service').classList.add('seccion_activa');
        //Con esto modifica la altura del menu lateral
        document.getElementById("sidenav").setAttribute("style", 'height:' + document.getElementById('services').offsetHeight + 'px;');


    } else if (texto == 'blog') {
        //Con esto se oculta o muestra la seccion
        document.getElementById('services').setAttribute('hidden', 'true');
        document.getElementById('blog').removeAttribute('hidden');
        //Con esto se agrega la clase para el color amarillo
        document.getElementById('tab_blog').classList.add('seccion_activa');
        document.getElementById('tab_service').classList.remove('seccion_activa');
        //Con esto modifica la altura del menu lateral
        document.getElementById("sidenav").setAttribute("style", 'height:' + document.getElementById('blog').offsetHeight + 'px;');
    }
}