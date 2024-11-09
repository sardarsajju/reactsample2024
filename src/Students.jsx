import Student from "./Student";
const Students = ({students}) =>{
    return(
        <div>
            <h1>Students Components</h1>
            <p>{students.length}</p>
            <table border={"1px"}>
                 <thead>
                     <tr>
                         <th>S.no</th>
                         <th>Student Name</th>
                         <th>Student Age</th>
                         <th>Student Marks</th>
                         <th>Student Total Marks</th>
                    </tr>
                 </thead>
                 <tbody>
                     {students.map((students,index)=>(
                       <tr key = {index}>
                             <td>{index+1}</td>
                            <Student student = {students}/>
                         </tr>
                     ))}
                 </tbody>
             </table>
        </div>
    )
}

export default Students;