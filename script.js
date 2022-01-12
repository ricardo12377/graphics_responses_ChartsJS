const ctx = document.getElementById('first-chart').getContext("2d")
const bars = document.getElementById('bars')
const nut = document.getElementById('nut')
const nofill = document.getElementById('nofill')


const gradient = ctx.createLinearGradient(0,0,0, 400)
gradient.addColorStop(0, '#5cffca')
gradient.addColorStop(1, '#66ff')


let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ 'Janeiro','Fevereiro','Março','Abril','Maio','Junho'],
        datasets: [{
            data: [10, 12, 16, 14, 13, 17],
            label: "Faturamento",
            fill: true,
            backgroundColor: gradient,
         
        }]
    },
    options: {
        responsive: true,
        radius: 5,
        hoverRadius: 10
    }
})

let secondChart = new Chart(bars, {
    type: 'bar',
    data: {
        labels: [ 'Janeiro','Fevereiro','Março','Abril','Maio','Junho'],
        datasets: [{
            data: [10, 12, 16, 14, 13, 17],
            label: "Numero de vendas",
            fill: true,
            backgroundColor: [
                'rgba(46, 128, 138, 1)',
            ],

        }]
    },
    options: {
        responsive: true,
        radius: 5,
        hoverRadius: 10
    }
})

let thirdChart = new Chart(nut, {
    type: 'pie',
    data: {
        labels: [
            'Compraram',
            'Dúvida/Não Compraram',
            'Devolveram'
          ],
        datasets: [{
            data: [10120, 8562, 4000],
            label: "Converção",
            backgroundColor: [
                gradient,
                'darkblue',
                'rgba(46, 128, 138, 1)'
            ],
            hoverOffset: 4,
            borderColor: 'black',
            borderWidth: 2
        }]
    }  
})


let quarta = new Chart(nofill, {
    type: 'line',
    data: {
        labels: [ 'Janeiro','Fevereiro','Março','Abril','Maio','Junho'],
        datasets: [{
            data: [2150, 1275, 3604, 2756, 1578, 4500],
            label: "Quantidade de novos clientes",
            fill: false,
            backgroundColor:'rgba(46, 128, 138, 1)',
            borderColor: 'black'
         
        }]
    },
    options: {
        responsive: true,
        radius: 5,
        hoverRadius: 10
    }
})

