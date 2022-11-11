const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}
const Part =(props)=>{
 return( <p>{props.part} {props.exercises}</p> 
 )
}
const Content = (props) => {
  const listItems=props.data.map((e)=>(
      <Part part={e.part} exercises={e.exercises} />
    )
  );

  return (
    <div>
      {listItems}
    </div>
  )
}

const  Total =(props)=>{
  let total=0
  props.data.forEach(element => {
    total+=element["exercises"]
  });
  return(
  <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course={
    name: 'Half Stack application development',
    parts:[
      {
      part:'Fundamentals of React',
    exercises:10
   },
    {
      part:'Using props to pass data',
    exercises:7
   },
    {part:'State of a component',
    exercises:14
   }]
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total partsa={course.parts}/>
    </div>
  )
}

export default App