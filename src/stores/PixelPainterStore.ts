import { waitFor } from '@testing-library/react'
import {Store} from 'pullstate'
import { useEffect } from 'react'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  selectedColor:string;
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const RandomColor=()=>{
  var color=['#000000','#804000','#FE0000','#FE6A00','#FFD800','#00FF01','#FFFFFF','#01FFFF','#0094FE','#0026FF','#B100FE','#FF006E'];
  const outputColor:string[][]=[]
  for(let i=0;i<16;i++){
    outputColor[i]=[]
    for(let j=0;j<16;j++){
      outputColor[i].push(color[Math.floor(Math.random()*12)%12])
    }
  }
  return outputColor
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selectedColor:"#FFFFFF"
})

export const setselectedColor=(color:string)=>{
  PixelPainterStore.update(e=>{
    e.selectedColor=color;
  })
}

export const clear=()=>{
  PixelPainterStore.update(e=>{
    e.canvas=createEmptyCanvas();
  })
}

export const Random=()=>{
  PixelPainterStore.update(e=>{
    e.canvas=RandomColor();
  })
}

export const Disco = () => {
  for(let i=0;i<150;i++){
    setTimeout(()=>{
      PixelPainterStore.update(e=>{
        e.canvas =  RandomColor()
       })
    },1000)
  }
}

export const setCanvasColor=(i:number,j:number)=>{
  PixelPainterStore.update(e=>{
    e.canvas[i][j]=e.selectedColor;
  })
}