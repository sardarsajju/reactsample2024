// export const First = () => {
//     return(
//         <div>
//             <h1>First Component</h1>
//         </div>
//     )
// }

// export const Second = () => {
//     return(
//         <div>
//             <h1>Second Component</h1>
//         </div>
//     )
// }

// export const Third = () => {
//     return(
//         <div>
//             <h1>Third Component</h1>
//         </div>
//     )
// }
// export const Forth = () => {
//     return(
//         <div>
//             <h1>Forth Component</h1>
//         </div>
//     )
// }


// const Students = () =>{
//     let student = [
//         {sName : "abc", age : 23, marks : [40,50,60]},
//         {sName : "efg", age : 23, marks : [46,58,90]},
//         {sName : "hij", age : 23, marks : [98,55,20]}
//     ]
//     return(
//         <div>
//             <table border={"1px"}>
//                 <thead>
//                     <tr>
//                         <th>S.no</th>
//                         <th>Student Name</th>
//                         <th>Student Age</th>
//                         <th>Student Marks</th>
//                         <th>Student Total Marks</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {student.map((student,index)=>(
//                         <tr key = {index}>
//                             <td>{index+1}</td>
//                             <td>{student.sName}</td>
//                             <td>{student.age}</td>
//                             <td>{student.marks}</td>
//                             <td>{student.marks[0]+student.marks[1]+student.marks[2]}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default Students;

const Sample = ({val}) =>{
    return(
        <div>
            <h2>This is from Sample Component</h2>
            <p>This is value of a : {val}</p>
        </div>
    )
};
export default Sample
