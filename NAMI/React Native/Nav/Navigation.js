import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import Stack from "./StackNav";
import Admin from "../Screens/Admin";


export default function Navigation(props) {
  return (
     <>
      <NavigationContainer independent={true} >
      <Stack data={props.data}></Stack>
      </NavigationContainer>
      </>
  )
}