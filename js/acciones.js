$(function () {
  accion = {
      init: function () {
          accion.events();
      },

      //Eventos de la ventana.
      events: function () {
        $(".showModal").click(accion.showModal)
      },

      showModal: function(){
        const sercicio = $(this).data('service');
        let body = "...";
        let titulo = "...";

        // limpiar modal
        $("#bodyModalModelosServicios").html("");
        switch(sercicio) {
          case "saas":
            titulo = "Software-as-a-Service (SaaS)";
            $("#bodyModalModelosServicios").html(`<p>El concepto de <strong>SaaS</strong> ha existido desde hace mucho tiempo, pero quizás en estos últimos años hemos definido claramente a que nos referimos. Básicamente se trata de cualquier servicio basado en la web. Tenemos ejemplos claros como el Webmail de Gmail, los <span class="caps">CRM</span> onlines. En este tipo de servicios nosotros accedemos normalmente a través del navegador sin atender al software. Todo el desarrollo, mantenimiento, actualizaciones, copias de seguridad es responsabilidad del proveedor.</p><p>En este caso tenemos poco control, nosotros nos situamos en la parte más arriba de la capa del servicio. Si el servicio se cae es responsabilidad de proveedor hacer que vuelva a funcionar.</p><p>Ejemplos populares de Saas son Google Docs, <a href="http://www.salesforce.com/es/?ir=1">Salesforce</a>, <a href="http://dropbox.net/">Dropbox</a>, Gmail…</p>`);
            break;
          case "paas":
            titulo = "Platform-as-a-Service (PaaS)";
            $("#bodyModalModelosServicios").html(`<p><strong>PaaS</strong> es el punto donde los desarrolladores empezamos a tocar y desarrollar nuestras propias aplicaciones que se ejecutan en la nube. En este caso nuestra única preocupación es la construcción de nuestra aplicación, ya que la infraestructura nos la da la plataforma. </p><p>Es un modelo que reduce bastante la complejidad a la hora de desplegar y mantener aplicaciones ya que las soluciones PaaS gestionan automáticamente la escalabilidad usando más recursos si fuera necesario. Los desarrolladores aun así tienen que preocuparse de que sus aplicaciones estén lo mejor optimizadas posibles para consumir menos recursos posibles (número de peticiones, escrituras en disco, espacio requerido, tiempo de proceso, etc..) Pero todo ello sin entrar al nivel de maquinas.</p><p>Ejemplos populares son <a href="https://developers.google.com/appengine/">Google App Engine</a> que permite desarrollar aplicaciones en Java o Python desplegándolas en la infraestructura que provee  Google, cosa que también hace <a href="http://www.heroku.com/">Heroku</a> con Rails y Django. </p><p>Para los desarrolladores que ignoran la infraestructura que deben montar y sólo quieren preocuparse de escribir software, esta es la alternativa a seguir.</p>`);
            break;
          case "iaas":
            titulo = "Infraestructure-as-a-Service (IaaS)";
            $("#bodyModalModelosServicios").html(`<p>En este caso con <strong>IaaS</strong> tendremos mucho más control que con PaaS, aunque a cambio de eso tendremos que encargarnos de la gestión de infraestructura,</p><p>El ejemplo perfecto es el proporcionado por <a href="http://aws.amazon.com/es/">Amazon Web Service (<span class="caps">AWS</span>)</a> que no provee una serie de servicios como EC2 que nos permite manejar maquinas virtuales en la nube o S3 para usar como almacenamiento. Nosotros podemos elegir qué tipo de instancias queremos usar LInux o Windows, así como la capacidad de memoria o procesador de cada una de nuestras maquinas. El hardware para nosotros es transparente, todo lo que manejamos es de forma virtual.</p><p>El ejemplo perfecto es el proporcionado por <a href="http://aws.amazon.com/es/">Amazon Web Service (<span class="caps">AWS</span>)</a> que no provee una serie de servicios como EC2 que nos permite manejar maquinas virtuales en la nube o S3 para usar como almacenamiento. Nosotros podemos elegir qué tipo de instancias queremos usar LInux o Windows, así como la capacidad de memoria o procesador de cada una de nuestras maquinas. El hardware para nosotros es transparente, todo lo que manejamos es de forma virtual.</p><p>La principal diferencia es que nosotros nos encargamos de escalar nuestras aplicaciones según nuestras necesidades, además de preparar todo el entorno en las maquinas (aunque existen imágenes de instancias preparadas con las configuraciones más comunes).</p><p>Además de <span class="caps">AWS</span> nos encontramos ejemplos como <a href="http://www.rackspace.com/cloud/">Rackspace Cloud</a> o <a href="http://www.vmware.com/products/datacenter-virtualization/vcloud-suite/overview.html?rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;ved=0CBwQFjAA&amp;url=http://www.vmware.com/go/vcloud-suite/&amp;ei=1xNBUKT0DOau0QX9tYDoDg&amp;usg=AFQjCNEPQgyma3HTqUQU11X-cSZiE1MyMw&amp;sig2=lBmy7d7IcdSgtadfv51LBg">vCloud</a> de VMWare.</p>`);
            break;
          default:
            $("#bodyModalModelosServicios").html(`Upss! a ocurrido un problema`);
        }

        $("#titleModalModelosServicios").html(titulo);



        $("#modalModelosServicios").modal('show')
 
      }


  };
  accion.init();
});