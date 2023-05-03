import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface Entries extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: Entries) {
  const { register } = useFormContext(); 

  return <input id={props.name} className="bg-transparent border border-_primary-100 rounded p-2" {...register(props.name)}  {...props} /> 
}