const inputPresupuesto = prompt("Ingrese Presupuesto mensual")

const form = document.querySelector(".form")

  presupuesto = new Presupuesto()


// ----------------------------------------------- Event Listeners

document.addEventListener("DOMContentLoaded",()=>{
    if(inputPresupuesto === null || inputPresupuesto === ""){
        document.location.reload()
    }else{
        presupuesto.total = inputPresupuesto
        presupuesto.resto = inputPresupuesto

        const ui = new Interfaz()
        ui.setPresupuesto(Number(inputPresupuesto))
    }
})

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const inputGasto = document.querySelector(".input-gasto").value
    const inputCantidad = document.querySelector(".input-cantidad").value

    if(inputGasto == "" || inputCantidad == ""){
        alert("Debe llenar el formunario")
    }else{
        presupuesto.restarGasto(inputGasto,Number(inputCantidad))
    }

})


// ------------------------------------------------ Classes (???)


class Presupuesto {
    restarGasto(gasto,cantidad){
        this.resto -= cantidad
        const ui = new Interfaz()
        ui.createNewGasto(gasto,cantidad,this.resto)
        console.log(this.resto)
    }
}

class Interfaz {
    setPresupuesto(presupuesto){
        const presupuestoTag = document.querySelector(".presupuesto").children[0]
        const restoTag = document.querySelector(".restante").children[0]

        presupuestoTag.innerText = presupuesto
        restoTag.innerText = presupuesto
    }

    createNewGasto(gastoName, gastoCost, totalResto){
        const div = document.createElement('div')
        div.classList = 'element'

        const p1 = document.createElement('p')
        p1.classList = 'element-text'
        p1.innerText = gastoName

        const p2 = document.createElement('p')
        p2.classList = 'element-price'

        p2.innerHTML = `<span>$</span>${gastoCost}` //jsx like think (or straight up JSX)

        div.appendChild(p1)
        div.appendChild(p2)

        const elementList = document.querySelector(".list")
        elementList.appendChild(div)

        document.querySelector(".restante").children[0].innerText = totalResto
    }

    /*
    <div class="element">
        <p class="element-text">pepsi</p>
        <p class="element-price"><span>$</span> 150</p>
    </div>
    */

}