const $form = document.querySelector('#form');

/* Otra manera de enviar formularios
const $buttonMailto = document.querySelector('#trucazo');*/

$form.addEventListener('submit',handleSubmit);

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        swal("Gracias por contactarme!", "Te escribire pronto!", "success");
    }

    /* Otra manera de enviar formularios
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:Juan_Alberto1997@hotmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()*/
}