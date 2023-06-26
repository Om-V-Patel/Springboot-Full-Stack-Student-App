package com.arjuncodes.studentsystem.controller;

import com.arjuncodes.studentsystem.model.Student;
import com.arjuncodes.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> list(){
        return studentService.getAllStudents();
    }
    @GetMapping("/findbyid/{id}")
    public Optional<Student> list1(@PathVariable int id){
         return studentService.getstudentbyid(id);
         
    }
    @GetMapping("/findbyname/{name}")
    public Optional<Student> list2(@PathVariable String name){
         return studentService.getstudentbyname(name);
         
    }
    
}
