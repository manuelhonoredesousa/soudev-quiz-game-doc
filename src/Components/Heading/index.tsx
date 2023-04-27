
interface Entries {
    text: string;
    // type: 1 | 2
}

export function Heading({text}: &Entries ) {
  return <h1 className="text-5xl font-bold text-_primary-100">{text}</h1>
//   return type == 1 ? <h1 className="text-5xl ">{text}</h1> : <h2 className="text-5xl ">{text}</h2> 
}



  /* font-size: 3.2em; */
  /* line-height: 1.1; */

