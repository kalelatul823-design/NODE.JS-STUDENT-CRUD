

let {studentArr} = require("../data/student");

function sendStudent(req, res){
    try{
      res.status(200).json({
        success : true,
        message : `student data is fetched successfully !!!`,
        data : studentArr
      })
    }
    catch(err){
       res.status(500).json({
        success : false,
        message : `Server error !!!`,
        error : err.message
       })
    }
}


function sendStudentById(req, res){
    try{
      let studentId = req.params.id;
      let studentObj = studentArr.find(std => std.id === studentId);
      if(!studentObj){
        return res.status(404).json({
            success: false,
            message : `student object is not found !!!`
        })
      }
      res.status(200).json({
        success : true,
        message : `student object is fetched successfully`,
        data : studentObj
      })
    }
    catch(err){
       res.status(500).json({
        success : false,
        message : `Server error !!`,
        error : err.message
       })
    }
}


function createStudent(req, res){
    try{
      let body = req.body;
      if(!body.firstName || !body.lastName){
        return res.status(404).json({
            success : false,
            message : `firstname and lastname is not found !!`
        })
      }
      let newObj = {
         id : Date.now().toString(),
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        contact : body.contact,
        age : body.age,
        gender : body.gender,
        course : body.course
      }
      studentArr.push(newObj);
      res.status(201).json({
        success : true,
        message : `student created successfully !!!`,
        data : newObj
      })
    }
    catch(err){
       res.status(500).json({
        success : false,
        message : `Server error`,
        error : err.message
       })
    }
}

function updateStudent(req, res){
    try{
      let body = req.body;
      let updateId = req.params.id;
      let updateIndex = studentArr.findIndex(s => s.id === updateId);
      if(updateIndex === -1){
        return res.status(404).json({
            success : false,
            message : `update object is not found !!`
        })
      }
      if(!body.firstName || !body.lastName){
        return res.status(400).json({
            success : false,
            message : `firstName and lastname is not found !!`
        })
      }

      let updateObj = {
         id : updateId,
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        contact : body.contact,
        age : body.age,
        gender : body.gender,
        course : body.course
      }
      studentArr[updateIndex] = updateObj;
      res.status(200).json({
        success : true,
        message : `student updated successfully`,
        data : updateObj
      })
    }
    catch(err){
       res.status(500).json({
        success : false,
        message : `Server errror`,
        error : err.message
       })
    }
}



function deleteStudent(req, res){
    try{
     let deleteId = req.params.id;
    let deleteIndex = studentArr.findIndex(std => std.id === deleteId);
    if(!deleteIndex){
      return  res.status(404).json({
            success : false,
            message : `student is not found !!`
        })
    }

  let deleteObj =  studentArr.splice(deleteIndex, 1);
    res.status(200).json({
        success : true,
        message : `student deleted successfuly !!`,
        data : deleteObj[0]
    })
    }
    catch(err){
       res.status(500).json({
        success : false,
        message : "Server Error !!",
        error : err.message
       })
    }
}

module.exports = {
    sendStudent,
    sendStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}