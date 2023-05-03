import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface Entries extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
  };
  
export function Textarea(props: Entries) {
  const { register } = useFormContext(); 
  return   <textarea className="bg-transparent border border-_primary-100 rounded p-2"  id={props.name} {...register(props.name)} {...props}></textarea>
  
}
