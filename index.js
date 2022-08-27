"use strict"
const wrapper = document.getElementById('wrapper')
const canvas = document.createElement('canvas')
const height = window.innerHeight
const width = window.innerWidth
const ctx = canvas.getContext('2d')

canvas.height = height
canvas.width = width
canvas.style.height = `${height}px`
canvas.style.width = `${width}px`
wrapper.appendChild(canvas)


class Point{
    constructor(x, y){
        this.x = x
        this.y = y
        this.draw()
    }
    draw(){
        ctx.fillRect(this.x, this.y, 10, 10)
    }
    getMiddlePoints(x2, y2, frames){
        let dx = (x2 - this.x) / frames
        let dy = (y2 - this.y) / frames
        
        let points = []
        for (let i=0; i<frames; i++){
            points.push({
                x: this.x + (dx * i),
                y: this.y + (dy * i)
            })
        }
        
        return points
    }
}

let p1 = new Point(10, 10)

function handleClick(e){
    let p2 = new Point(e.clientX, e.clientY)
    let points = p1.getMiddlePoints(
        p2.x,
        p2.y,
        10
    )
    
    for (let p of points){
        new Point(p.x, p.y)
    }
}

canvas.onclick = handleClick
