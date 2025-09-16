import PropTypes from 'prop-types';
function Student(props){
return(
    props.isStudent?<h1>yes</h1>:<h1>No</h1>
)

}
Student.defaultProps={name:"gohul",age:1,isStudent:true};
export default Student;