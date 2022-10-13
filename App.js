import { StatusBar } from "expo-status-bar";
import React from "react";
import {useState} from "react"
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";


export default function App() {
  
    const [valorInput, setValorInput] = useState("")
    const [valor1, setValor1] = useState("")
    const [valor2, setValor2] = useState("")

      function Input(botãoPress){
      if(botãoPress === '+' | botãoPress === "-" | botãoPress === "*" | botãoPress === "/" ){
        setValorInput(valorInput + " " + botãoPress + " ")
        return
      }
      if (botãoPress === 'AC'){
        setValor1("")
        setValorInput("")
        return
      }
      else if (botãoPress === '='){
        setValor1(valorInput + " = ")
        calcular()
        return  

      }
      setValorInput(valorInput + botãoPress)
    }
  
    function calcular(){
      const arrayValores = valorInput.split(' ') //cria um array com separação
      const valor1 = parseInt(arrayValores[0]) // parseInt() serve para transformar uma Int em um Int
      const valor2 = parseInt(arrayValores[2])
      const operação = arrayValores[1]
      
      if (operação == '+'){
        setValorInput((valor1 + valor2))

      } else if (operação == '-'){
        setValorInput((valor1 - valor2))

      } else if (operação == '*'){
        setValorInput((valor1 * valor2))

      } else if (operação == '/'){
        setValorInput((valor1 / valor2))

      }
     
    }
  
  return (
    <View>
        <Text>{valor1}</Text>
        <Text>{valorInput}</Text>
        <TouchableOpacity onPress={()=>Input("AC")}><Text>AC</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(1)}><Text>1</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(2)}><Text>2</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(3)}><Text>3</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(4)}><Text>4</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(5)}><Text>5</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(6)}><Text>6</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(7)}><Text>7</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(8)}><Text>8</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(9)}><Text>9</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input(0)}><Text>0</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input("+")}><Text>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input("-")}><Text>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input("=")}><Text>=</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input("*")}><Text>*</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Input("/")}><Text>/</Text></TouchableOpacity>

    </View>


    
 
  );
}

