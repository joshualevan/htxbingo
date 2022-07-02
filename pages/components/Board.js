import React, { useEffect, useState } from 'react'
import Square from './Square'
// import { squares } from '../data/squares'

const Board = () => {
  const shuffle = array => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    setSquaresPool(array);
  }


  const [squaresPool, setSquaresPool] = useState([])

  useEffect(()=>{
    const squares = [
      {title: 'Texas Flag Tattoo'},
      {title: 'Gut falling from man\'s shirt'},
      {title: 'Ice cream on ground'},
      {title: 'The letters \'HTX\''},
      {title: 'daisy dukes'},
      {title: 'cowboy hat'},
      {title: 'Child on leash'},
      {title: 'astronaut'},
      {title: '\'NASA\' logo'},
      {title: '\'Trump 2024\' sign'},
      {title: 'Jorts- jean shorts on a man'},
      {title: 'the word \'pride\''},
      {title: 'The rebel flag'},
      {title: 'unnecessary cleavage'},
      {title: 'Clothing that says \'blessed\''},
      {title: '\'buc-ee\'s\' logo'},
      {title: 'military vehicle'},
      {title: 'rocket pop'},
      {title: 'unsafe use of firecrackers'},
      {title: 'Excessive PDA'},
      {title: 'Overflowing or tipped trashcan'},
      {title: 'neck tattoo'},
      {title: 'Man Bun'},
      {title: 'Someone using phone on speaker'},
      {title: 'Service Animal'},
      {title: 'Fighting Couple'},
      {title: 'Multi-colored hair'},
      {title: 'Camo hat'},
      {title: 'Merch referring to fishing'},
      {title: 'Screaming child'},
      {title: 'Shirtless Man'},
      {title: 'Smell of Weed'},
      {title: 'Baby with ear protection'},
      {title: 'American flag face paint'},
      {title: 'uncle sam hat'},
      {title: 'American Flag sunglasses'},
      {title: 'sign promoting a hashtag'},
      {title: 'Double fistin\''},
      {title: 'Protruding chest hair'},
      {title: 'Child with sparkler'},
      {title: 'Juggling food to get money'},
      {title: 'Dancing white guy'},
  ]
  
    shuffle(squares)
  },[])
 
  return (
    <div className='board'>
        {squaresPool.slice(0,16).map(square => <Square key={square.title} square={square}/>)}
    </div>
  )
}

export default Board