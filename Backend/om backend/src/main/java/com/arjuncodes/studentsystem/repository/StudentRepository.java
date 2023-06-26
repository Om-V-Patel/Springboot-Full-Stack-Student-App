package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.Student;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
@Query(value = "select * from student where id =?1",nativeQuery=true)
Student findById();
@Query(value = "select * from student where name =?1",nativeQuery=true)
Optional<Student> findbyname(String name);


}
